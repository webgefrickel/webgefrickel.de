import config from '../config';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

const $ = plugins();

gulp.task('htmlhint', [ 'savehtml' ], () => {
  if (config.lint.html) {
    return gulp
      .src(`${config.root}tmp--*.html`)
      .pipe($.htmlhint({
        htmlhintrc: '.htmlhintrc'
      }))
      .pipe($.htmlhint.failReporter());
  }

  return false;
});
