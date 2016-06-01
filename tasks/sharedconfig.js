import config from '../config';
import pkg from '../package';
import gulp from 'gulp';
import fs from 'fs';
import trimEnd from 'lodash/trimEnd';

const configPath = `${config.src + config.sass}config/`;

const hashSbdm = (str) => {
  let hash = 0;

  for (let i = 0; i < str.length; i += 1) {
    const char = str.charCodeAt(i);

    /* eslint no-bitwise: false */
    hash = char + (hash << 6) + (hash << 16) - hash;
  }

  // make values positive
  return Math.abs(hash).toString();
};


const convertToJson = (scssFile) => {
  let data = fs.readFileSync(scssFile, 'utf8');

  // replace any opening normal brackets ( ) with { and }, except those in single quotes
  // since our scss linter only allow single quotes, this will work
  data = data.replace(/\);(?=([^']*'[^']*')*[^']*$)/g, '},');
  data = data.replace(/\)(?=([^']*'[^']*')*[^']*$)/g, '}');
  data = data.replace(/\((?=([^']*'[^']*')*[^']*$)/g, '{');

  // strip any comments
  data = data.replace(/\/\*.+?\*\/|\/\/.*(?=[\n])/g, '');

  // strip all dollar declarations
  data = data.replace(/\$/g, '');

  // wrap every declaration in double quotes for json
  data = data.replace(/([a-z0-9-_]+)(?=([^']*'[^']*')*[^']*$):/g, '"$1":');

  // wrap every value in double quotes, except for submaps/lists
  data = data.replace(/(^.+:\s)(?=([^']*'[^']*')*[^']*$)([^\{\}\n]+),$/mg, '$1"$3",');
  data = data.replace(/(^.+:\s)(?=([^']*'[^']*')*[^']*$)([^\{\}\n"]+)$/mg, '$1"$3"');

  // strip any trailing commas or linebreaks, remove empty lines
  data = trimEnd(data, ',\ns');
  data = data.replace(/\n\n|\s+\n/g, '');

  // unwrap quotes from true and false and numbers
  data = data.replace(/("([0-9\.]+|true|false)")/g, '$2');

  return `${data}`;
};

gulp.task('sharedconfig', () => {
  let finalJson = '';

  // add the version + hash from package.json always
  finalJson += `"version": "${pkg.version}",`;
  finalJson += `"hash": ${hashSbdm(pkg.version)},`

  if (config.sharedConfig.length >= 1) {
    config.sharedConfig.forEach((identifier) => {
      const fileJson = convertToJson(`${configPath}_${identifier}.scss`);

      finalJson += `${fileJson},`;
    });

    // since this is synchronous, we can now write the json config file
    fs.writeFile(`${config.src + config.scripts}sharedconfig.json`, `{ ${trimEnd(finalJson, ',')} }`, 'utf8');
  }

  return false;
});

