import { join } from 'path';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import cssImport from 'postcss-import';
import { readFile, writeFile } from './lib/fs';
import warn from './lib/warn';
import config from '../kalong.config';

export default async (opts = {}) => {
  const prefixerOptions = opts.legacy ? { overrideBrowserslist: '> 0.1% in DE' } : {};
  const options = {
    input: opts.input || join(config.dest, config.styles, `${config.main}.css`),
    sourceMap: opts.sourceMap === undefined,
    plugins: [cssImport(), autoprefixer(prefixerOptions)],
  };

  // add cssnano if the sourceMap option is set to false
  if (opts.sourceMap === false) {
    options.plugins.push(cssnano({ preset: 'default' }));
  }

  // if no output file is specified, use the input, overwriting same file
  options.output = opts.output || options.input;

  try {
    const css = await readFile(options.input);
    const result = await postcss(options.plugins).process(css, {
      from: options.input,
      to: options.output,
      map: options.sourceMap ? { inline: options.sourceMap } : false,
    });

    if (result.warnings().length) {
      result.warnings().forEach(warn => {
        warn(warn.toString());
      });
    }

    await writeFile(options.output, result.css);
  } catch (error) {
    warn(error);
  }
};
