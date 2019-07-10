import { join } from 'path';
import { sync } from 'glob';
import htmlhint from 'htmlhint';
import { readFile } from './lib/fs';
import warn from './lib/warn';
import config from '../kalong.config';

export default async () => {
  const files = sync(join(config.styleguide, 'components/preview/*.html'));
  const rc = await readFile('.htmlhintrc');

  files.forEach(async file => {
    // ignore files that end with -start.html or -end.html
    if (file.indexOf('-start.html') === -1 && file.indexOf('-end.html') === -1) {
      const html = await readFile(file);
      const messages = htmlhint.verify(html, JSON.parse(rc));

      if (messages.length) {
        warn('htmlhint found errors in the following files:');
        warn('==============================================');
        messages.forEach(m => {
          warn(`${file} on line ${m.line}, column ${m.col}:`);
          warn(`${m.rule.id}: ${m.message}\n`);
        });
      }
    }
  });
};
