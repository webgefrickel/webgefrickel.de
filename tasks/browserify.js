import config from '../config';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

const $ = plugins();
const errorHandler = (err) => {
  if (err) {
    console.log(err.toString());
    this.emit('end');
  }
};

gulp.task('browserify:development', () => {
  const b = browserify({
    entries: `${config.src + config.scripts + config.main}.js`,
    debug: true,
    noParse: config.noparselibs
  });

  return b.bundle(errorHandler)
    .pipe($.plumber())
    .pipe(source(`${config.src + config.scripts + config.main}.js`))
    .pipe($.rename(`${config.main}.js`))
    .pipe(gulp.dest(config.dest + config.scripts));
});


gulp.task('browserify:production', () => {
  const b = browserify({
    entries: `${config.src + config.scripts + config.main}.js`,
    debug: false,
    noParse: config.noparselibs
  });

  return b.bundle(errorHandler)
    .pipe(source(`${config.src + config.scripts + config.main}.js`))
    .pipe(buffer())
    .pipe($.uglify())
    .pipe($.rename(`${config.main}.min.js`))
    .pipe(gulp.dest(config.dest + config.scripts));
});
