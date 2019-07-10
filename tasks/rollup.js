import { readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import terser from 'rollup-plugin-terser';
import warn from './lib/warn';
import config from '../kalong.config';

const walk = (dir, filter) => {
  const list = readdirSync(dir);
  let results = [];

  list.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, filter));
    } else if (filePath.indexOf(filter) >= 0) {
      results.push(filePath);
    }
  });
  return results;
};

// prepare everything needed for the custom pattern/module resolver
const customResolve = () => {
  return {
    name: 'kalong-resolve',
    resolveId(importee) {
      if (importee.startsWith('~config')) {
        return resolve(config.src, `${importee.replace('~config/', config.config)}.json`);
      }

      if (importee.startsWith('~helper')) {
        return resolve(
          config.src,
          `${importee.replace('~helper', `${config.scripts}1-helpers`)}.js`
        );
      }

      if (importee.startsWith('~vendor')) {
        return resolve(
          config.src,
          `${importee.replace('~vendor', `${config.scripts}2-vendor`)}.js`
        );
      }

      if (importee.startsWith('~global')) {
        return resolve(
          config.src,
          `${importee.replace('~global', `${config.scripts}3-global`)}.js`
        );
      }

      if (importee.startsWith('~module')) {
        return resolve(config.src, `${importee.replace('~module', '../node_modules/')}.js`);
      }

      if (importee.startsWith('~pattern')) {
        const pattern = importee.split('/')[1];
        const searchResults = walk(join(config.src, config.patterns), `${pattern}.js`);

        if (searchResults.length === 1) {
          return resolve(searchResults[0]);
        }
      }
    },
  };
};

export default async (opts = {}) => {
  const options = {
    input: opts.input || join(config.src, config.scripts, 'main.js'),
    plugins: [
      customResolve(),
      json(),
      nodeResolve(),
      commonjs(),
      babel({
        babelrc: false,
        presets: [['@babel/preset-env', { modules: false }]],
        plugins: ['import-glob'],
      }),
      opts.sourceMap === undefined ? null : terser.terser(),
    ],
  };

  try {
    const bundle = await rollup(options);
    bundle.write({
      sourcemap: opts.sourceMap === undefined ? 'inline' : opts.sourceMap,
      format: 'iife',
      file: opts.output || join(config.dest, config.scripts, 'main.js'),
    });
  } catch (error) {
    warn(error);
  }
};
