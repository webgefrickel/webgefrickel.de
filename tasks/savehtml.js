import got from 'got';
import fs from 'fs';
import gulp from 'gulp';
import config from '../config';

gulp.task('savehtml', (done) => {
  const all = [];

  config.pages.forEach((page) => {
    const url = `${config.scheme}://${config.proxy}${page}`;
    const request = got(url, {
      headers: {
        'User-Agent': 'request'
      },
      // accept local self-signed certificates
      rejectUnauthorized: false,
      requestCert: true

    }).then((response) => {
      const filename = (page === '/') ? 'tmp--home' : `tmp--${page.substr(1)}`;
      const path = `${config.root}${filename.replace('/', '--')}.html`;

      fs.writeFileSync(path, response.body);
    });

    all.push(request);
  });

  Promise.all(all).then(() => {
    done();
  });
});
