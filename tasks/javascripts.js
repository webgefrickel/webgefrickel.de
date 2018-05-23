import path from 'path';
import gulp from 'gulp';
import { rollup } from 'rollup';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import browsersync from 'browser-sync';
import { frckl as config, browserslist } from '../package';

const babelConfig = {
  babelrc: false,
  presets: [
    [ 'env', {
      targets: { browsers: browserslist },
      modules: false
    } ]
  ],
  plugins: [ 'external-helpers', 'import-glob' ]
};

const babelConfigEs = {
  babelrc: false,
  presets: [
    [ 'env', {
      targets: { browsers: [
        // The last two versions of each browser, excluding versions that don't support <script type="module">.
        'last 2 Chrome versions', 'not Chrome < 60',
        'last 2 Safari versions', 'not Safari < 10.1',
        'last 2 iOS versions', 'not iOS < 10.3',
        'last 2 Firefox versions', 'not Firefox < 54',
        'last 2 Edge versions', 'not Edge < 15'
      ] },
      modules: false
    } ]
  ],
  plugins: [ 'external-helpers', 'import-glob' ]
};

const customResolve = () => {
  return {
    name: 'frckl-resolve',
    resolveId(importee) {
      if (importee.startsWith('@shared')) {
        return path.resolve(config.src, `${importee.replace('@shared', 'javascripts/1-shared')}.js`);
      }
      if (importee.startsWith('@helpers')) {
        return path.resolve(config.src, `${importee.replace('@helpers', 'javascripts/2-helpers')}.js`);
      }
      if (importee.startsWith('@vendor')) {
        return path.resolve(config.src, `${importee.replace('@vendor', 'javascripts/3-vendor')}.js`);
      }
      if (importee.startsWith('@global')) {
        return path.resolve(config.src, `${importee.replace('@global', 'javascripts/4-global')}.js`);
      }
      if (importee.startsWith('@nodemodules')) {
        return path.resolve(config.src, `${importee.replace('@nodemodules', '../node_modules/')}.js`);
      }
      if (importee.startsWith('@component')) {
        const component = importee.split('/')[1];
        return path.resolve(config.src, 'components/', component, `${component}.js`);
      }
    }
  };
};

gulp.task('javascripts:development', () =>
  rollup({
    input: path.join(config.src, 'javascripts/main.js'),
    plugins: [
      customResolve(),
      resolve(),
      commonjs(),
      babel(babelConfigEs)
    ]
  }).then(bundle => bundle.write({
    sourcemap: 'inline',
    format: 'iife',
    file: path.join(config.dest, 'js/main.js')
  }).then(() => {
    browsersync.reload();
  }))
);

gulp.task('javascripts:production', () =>
  rollup({
    input: path.join(config.src, 'javascripts/main.js'),
    plugins: [
      customResolve(),
      resolve(),
      commonjs(),
      babel(babelConfigEs),
      uglify({}, minify)
    ]
  }).then(bundle => bundle.write({
    sourcemap: false,
    format: 'iife',
    file: path.join(config.dest, 'js/main.min.js')
  }))
);

gulp.task('javascripts:legacy', () =>
  rollup({
    input: path.join(config.src, 'javascripts/main.legacy.js'),
    plugins: [
      customResolve(),
      resolve(),
      commonjs(),
      babel(babelConfig),
      uglify()
    ]
  }).then(bundle => bundle.write({
    sourcemap: false,
    format: 'iife',
    file: path.join(config.dest, 'js/main.legacy.min.js')
  }))
);

