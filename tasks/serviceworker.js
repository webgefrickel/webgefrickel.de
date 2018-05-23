import path from 'path';
import gulp from 'gulp';
import { rollup } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import { frckl as config } from '../package';

// the serviceworker task will build a production ready version
// that can and will be used only in es6-ready browsers, so we
// do not need a babel-transform here, but wee keep the commonjs
// and node-resolve, if you want to use sth. like sw-toolbox
gulp.task('serviceworker', () =>
  rollup({
    input: path.join(config.src, 'javascripts/serviceworker.js'),
    plugins: [
      resolve(),
      commonjs(),
      json(),
      uglify({}, minify)
    ]
  }).then(bundle => bundle.write({
    sourcemap: false,
    format: 'iife',
    file: path.join(config.root, 'serviceworker.js')
  }))
);

