import config from '../config';
import gulp from 'gulp';
import browsersync from 'browser-sync';
import plugins from 'gulp-load-plugins';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';

const $ = plugins();

const bundler = (b) =>
  b.bundle()
    .on('error', (err) => {
      console.log(err.toString());
    })
    .pipe(source(`${config.src + config.scripts + config.main}.js`))
    .pipe($.plumber())
    .pipe($.rename(`${config.main}.js`))
    .pipe(gulp.dest(config.dest + config.scripts))
    .pipe(browsersync.reload({ stream: true }));


gulp.task('watchify', () => {
  const b = watchify(browserify({
    entries: [ `${config.src + config.scripts + config.main}.js` ],
    debug: true,

    // watchify speed-up options
    cache: {},
    packageCache: {},
    fullPaths: 'watch',
    noParse: config.noparselibs
  }));

  b.on('log', (msg) => console.log(`[watchify] ${msg}`));
  b.on('update', () => bundler(b));

  bundler(b); // always compile once on start
});
