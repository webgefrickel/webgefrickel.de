import { join } from 'path';
import browserSync from 'browser-sync';
import chokidar from 'chokidar';
import { fractalInstance } from './fractal';
import copy from './copy';
import eslint from './eslint';
import postcss from './postcss';
import rollup from './rollup';
import sass from './sass';
import sassLint from './sassLint';
import svgSprite from './svgSprite';
import run from './lib/run';
import warn from './lib/warn';
import config from '../kalong.config';

const server = browserSync({
  proxy: config.proxy,
  port: config.port,
  open: false, // dont open the browser on start
  notify: false, // hide that info-popup from browsersync
});

const fractalServer = fractalInstance().web.server({ sync: true });
fractalServer.on('error', err => warn(err.message));
fractalServer.start().then(() => {
  console.log(`Fractal styleguide server is now running at ${fractalServer.url}`);
});

const watchSwitch = async file => {
  const fileExtension = file.substr(file.lastIndexOf('.') + 1);
  const isServiceworker = file.indexOf('serviceworker') > -1;
  const isLegacy = file.indexOf(`${config.main}.legacy`) > -1;
  const isSprite = file.indexOf('sprite.svg') > -1;

  if (!isLegacy && !isServiceworker) {
    switch (fileExtension) {
      case 'scss':
        console.log('Linting and Rebuilding scss/postcss...');
        await run(sassLint);
        await run(sass);
        await run(postcss);
        server.reload(`/${config.assets}${config.styles}${config.main}.css`);
        break;

      case 'js':
        console.log('Linting and Rebuilding js...');
        await run(eslint);
        await run(rollup);
        server.reload(`/${config.assets}${config.scripts}${config.main}.js`);
        break;

      case 'json':
        console.log('JSON change detected: Rebuilding sass and js...');
        await run(rollup);
        await run(sass);
        await run(postcss);
        server.reload();
        break;

      case 'woff':
      case 'woff2':
        console.log('Copying fonts...');
        await run(copy, {
          // copy fonts
          input: join(config.src, config.fonts, '*.{woff,woff2}'),
          output: join(config.dest, config.fonts),
        });
        server.reload();
        break;

      case 'svg':
        if (!isSprite) {
          console.log('Rebuilding sprite...');
          await run(svgSprite);
          await run(copy);
          server.reload();
        }

        break;

      case 'png':
      case 'gif':
      case 'jpg':
      case 'webp':
        console.log('Copying images...');
        await run(copy);
        server.reload();
        break;

      default:
        console.log('Reloading...');
        server.reload();
        break;
    }
  }

  // two special cases: legacy script and serviceworker
  if (isServiceworker) {
    await run(rollup, {
      input: join(config.src, config.scripts, 'serviceworker.js'),
      output: join(config.root, '.well-known/', 'serviceworker.js'),
      sourceMap: false,
    });
    server.reload();
  }

  if (isLegacy) {
    await run(copy, {
      input: join(config.src, config.scripts, `${config.main}.legacy.js`),
      output: join(config.dest, config.scripts),
    });
    server.reload();
  }
};

const watch = async () => {
  const watcher = chokidar.watch(config.src, { ignored: /(^|[/\\])\../ });
  watcher.on('ready', () => {
    watcher.on('add', watchSwitch);
    watcher.on('unlink', watchSwitch);
    watcher.on('change', watchSwitch);
  });
};

(async () => {
  await watch();
})();
