import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import yaml from 'js-yaml';
import gulp from 'gulp';
import { frckl as config } from '../package';

const keyValPair = (key, value, wrap = true) => {
  const val = (_.isString(value) && wrap) ? `'${value}'` : value;
  return `${key}: ${val}`;
};

const makeObjectMap = object => {
  const items = [];

  _.mapKeys(object, (value, key) => {
    items.push(keyValPair(key, value));
  });

  return `(\n${_.join(items, ',\n')}\n)`;
};

const convertJson = content => {
  const submaps = [];
  let scss = '';

  // we only handle two cases: if it is an array: we have a map
  // of named maps, if it is an object, we have a simple map
  if (_.isArray(content)) {
    _.forEach(content, submap => {
      _.mapKeys(submap, (value, key) => {
        submaps.push(keyValPair(key, convertJson(value), false));
      });
    });
    scss += `(\n${submaps.join(',\n  ')})`;
  } else {
    scss += makeObjectMap(content);
  }

  return scss;
};

gulp.task('shared', () => {
  fs.readdirSync(`${config.src}shared`)
    .filter(name => (/(\.yml)/i).test(path.extname(name)))
    .forEach(shared => {
      const name = shared.replace(/(\.yml)/i, '');
      const json = yaml.safeLoad(fs.readFileSync(`${config.src}shared/${shared}`, 'utf8'));
      const scss = `$${name}: ${convertJson(json)};`;
      const js = `export default ${JSON.stringify(json)};`;

      fs.writeFileSync(`${config.src}javascripts/1-shared/${name}.js`, js);
      fs.writeFileSync(`${config.src}stylesheets/1-shared/${name}.scss`, scss);
    });
});
