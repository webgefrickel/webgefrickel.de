import { join, dirname } from 'path';
import sass from 'node-sass';
import magic from 'node-sass-magic-importer';
import json from 'node-sass-json-importer';
import { writeFile, makeDir } from './lib/fs';
import warn from './lib/warn';
import config from '../kalong.config';

export default async (opts = {}) => {
  // set some sane defaults for development
  const options = {
    file: opts.input || join(config.src, config.styles, `${config.main}.scss`),
    outFile: opts.output || join(config.dest, config.styles, `${config.main}.css`),
    sourceMap: opts.sourceMap === undefined,
    outputStyle: 'expanded',
    importer: [json(), magic()],
  };

  try {
    const result = sass.renderSync(options);
    await makeDir(dirname(options.outFile));
    await writeFile(options.outFile, result.css);
  } catch (error) {
    warn(error);
  }
};
