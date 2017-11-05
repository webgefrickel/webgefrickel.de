import fs from 'fs';
import path from 'path';
import got from 'got';
import gulp from 'gulp';
import { frckl as config } from '../package';

// allow insecure https request for local retrieval of html-files
/* eslint no-process-env: 0 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

gulp.task('savehtml', done => {
  const all = [];

  config.pages.forEach(page => {
    const url = `${config.scheme}://${config.proxy}${page}`;
    const request = got(url, {
      headers: {
        'User-Agent': 'request'
      }
    }).then(response => {
      const filename = (page === '/') ? 'tmp--home' : `tmp--${page.substr(1)}`;
      const filepath = path.join(config.root, `${filename.replace(/\//g, '--')}.html`);

      fs.writeFileSync(filepath, response.body);
    });

    all.push(request);
  });

  Promise.all(all).then(() => {
    done();
  });
});
