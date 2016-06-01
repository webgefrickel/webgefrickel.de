import config from '../config';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

const $ = plugins();

gulp.task('sasslint:development', () => {
  if (config.lint.scss) {
    return gulp
      .src([
        `${config.src + config.sass}**/*.scss`,
        `!${config.src + config.sass + config.vendor}/**/*.scss`
      ])
      .pipe($.plumber())
      .pipe($.cached('scsslint'))
      .pipe($.sassLint())
      .pipe($.sassLint.format());
  }

  return false;
});


gulp.task('sasslint:production', () => {
  if (config.lint.scss) {
    return gulp
      .src([
        `${config.src + config.sass}**/*.scss`,
        `!${config.src + config.sass + config.vendor}/**/*.scss`
      ])
      .pipe($.sassLint())
      .pipe($.sassLint.format())
      .pipe($.sassLint.failOnError());
  }

  return false;
});
