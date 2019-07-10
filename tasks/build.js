import { join } from 'path';
import Ora from 'ora';
import clean from './clean';
import copy from './copy';
import eslint from './eslint';
import fractal from './fractal';
import htmlhint from './htmlhint';
import pa11y from './pa11y';
import postcss from './postcss';
import rollup from './rollup';
import sass from './sass';
import sassLint from './sassLint';
import svgSprite from './svgSprite';
import templates from './templates';
import run from './lib/run';
import config from '../kalong.config';

const scripts = async () =>
  Promise.all([
    run(rollup),
    run(rollup, {
      output: join(config.dest, config.scripts, `${config.main}.min.js`),
      sourceMap: false,
    }),
    run(rollup, {
      input: join(config.src, config.scripts, 'serviceworker.js'),
      output: join(config.root, '.well-known/', 'serviceworker.js'),
      sourceMap: false,
    }),
    run(copy, {
      input: join(config.src, config.scripts, `${config.main}.legacy.js`),
      output: join(config.dest, config.scripts),
    }),
  ]);

const styles = async () => {
  await Promise.all([
    run(sass),
    run(sass, {
      output: join(config.dest, config.styles, `${config.main}.min.css`),
      sourceMap: false,
    }),
  ]);
  await Promise.all([
    run(postcss),
    run(postcss, {
      output: join(config.dest, config.styles, `${config.main}.min.css`),
      sourceMap: false,
    }),
    run(postcss, {
      output: join(config.dest, config.styles, `${config.main}.legacy.css`),
      sourceMap: false,
      legacy: true,
    }),
  ]);
};

const preBuild = async () => Promise.all([run(clean), run(sassLint), run(eslint)]);
const compileAssets = async () => Promise.all([run(styles), run(scripts), run(svgSprite)]);
const postBuild = async () => Promise.all([run(htmlhint), run(pa11y)]);

const copyAssets = async () =>
  Promise.all([
    run(copy), // no options: copy images,
    run(copy, {
      // copy fonts
      input: join(config.src, config.fonts, '*.{woff,woff2}'),
      output: join(config.dest, config.fonts),
    }),
  ]);

const copyStyleguide = async () =>
  // copy all styleguide files to the pattern library
  Promise.all([
    // styleguide HTML pattern files
    run(copy, {
      input: join(config.src, config.patterns, '**/*.html'),
      output: join(config.library),
      rename: [file => file.replace('_', '')],
    }),
    // styleguide data pattern files
    run(copy, {
      input: join(config.styleguide, 'components/data/**/*.html'),
      output: join(config.library),
      rename: [file => file.replace('_', ''), file => file.replace('.html', '.yml')],
    }),
    run(templates),
  ]);

(async () => {
  const spinner = new Ora({
    text: 'Building everything',
  });

  spinner.start();
  spinner.text = 'Running prebuild-tasks';
  await run(preBuild);
  spinner.text = 'Compiling assets';
  await run(compileAssets);
  spinner.text = 'Copying assets';
  await run(copyAssets);
  spinner.text = 'Running fractal styleguide build';
  await run(fractal);
  spinner.text = 'Copying styleguide data and patterns';
  await run(copyStyleguide);
  spinner.text = 'Running postbuild-tasks';
  await run(postBuild);
  spinner.text = 'Done';
  spinner.succeed();
})();
