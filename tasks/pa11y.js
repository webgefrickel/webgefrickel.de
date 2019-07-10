import { join } from 'path';
import pa11y from 'pa11y';
import { sync } from 'glob';
import warn from './lib/warn';
import config from '../kalong.config';

// ignore any event emitter limits to fix console output,
// since we are running multiple pa11y instances for
// each compoennt in the styleguide
require('events').EventEmitter.defaultMaxListeners = 0;

export default async () => {
  const pagePath = join(config.src, config.patterns, '5-pages');
  const pages = sync(join(pagePath, '*'));

  pages.forEach(async page => {
    const fileId = page.replace(pagePath, '');
    const file = sync(join(config.styleguide, 'components/preview/', fileId) + '.html')[0];

    // ignore files that end with -start.html or -end.html
    if (file.indexOf('-start.html') === -1 && file.indexOf('-end.html') === -1) {
      // the server has to be running for this
      const url = file.replace('public', `${config.scheme}://${config.proxy}`);

      try {
        const result = await pa11y(url, {
          timeout: 120000,
        });

        if (result.issues.length) {
          warn('pa11y found the following issues:');
          warn('=================================');
          result.issues.forEach(m => {
            warn(`${m.context}`);
            warn(`${m.message} (${m.code})\n`);
          });
        }
      } catch (error) {
        // Output an error if it occurred
        warn(error.message);
      }
    }
  });
};
