import config from '../config';
import path from 'path';
import gulp from 'gulp';
import { rollup } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import browsersync from 'browser-sync';

const srcPath = path.join(config.src, config.js, `${config.main}.js`);
const babelConfig = {
  babelrc: false,
  presets: [
    [ 'es2015', { modules: false } ]
  ],
  exclude: [
    'node_modules/**',
    '**/*.json'
  ],
  plugins: [
    'external-helpers'
  ]
};

gulp.task('js:development', () =>
  rollup({
    entry: srcPath,
    plugins: [
      json(),
      resolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      commonjs(),
      babel(babelConfig)
    ]
  }).then((bundle) => bundle.write({
    sourceMap: 'inline',
    format: 'iife',
    dest: path.join(config.dest, config.js, `${config.main}.js`)
  }).then(() => {
    browsersync.reload();
  }))
);


gulp.task('js:production', () =>
  rollup({
    entry: srcPath,
    plugins: [
      json(),
      resolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      commonjs(),
      babel(babelConfig),
      uglify()
    ]
  }).then((bundle) => bundle.write({
    sourceMap: false,
    format: 'iife',
    dest: path.join(config.dest, config.js, `${config.main}.min.js`)
  }))
);
