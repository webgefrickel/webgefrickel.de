import config from '../config';
import gulp from 'gulp';
import browsersync from 'browser-sync';
import plugins from 'gulp-load-plugins';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const $ = plugins();

// do not return anything fixes watch-task
gulp.task('sass:development', () => {
  gulp
    .src(`${config.src + config.sass + config.main}.scss`)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'nested'
    }))
    .pipe($.postcss([
      autoprefixer({
        browsers: config.browsersupport
      })
    ]))
    .pipe($.sourcemaps.write({
      sourceRoot: './'
    }))
    .pipe(gulp.dest(config.dest + config.css))
    .pipe(browsersync.reload({ stream: true }));
});


gulp.task('sass:production', () => {
  gulp
    .src(`${config.src + config.sass + config.main}.scss`)
    .pipe($.sass({
      outputStyle: 'nested',
      sourceMap: false
    }))
    .pipe($.postcss([
      autoprefixer({
        browsers: config.browsersupport
      }),
      cssnano({
        safe: true
      })
    ]))
    .pipe($.rename(`${config.main}.min.css`))
    .pipe(gulp.dest(config.dest + config.css));
});
