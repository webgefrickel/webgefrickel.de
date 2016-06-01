import config from '../config';
import gulp from 'gulp';
import browsersync from 'browser-sync';

gulp.task('browsersync', () =>
  browsersync({
    proxy: config.proxy,
    port: config.port,
    open: false, // dont open the browser on start
    notify: false // hide that info-popup from browsersync
  })
);
