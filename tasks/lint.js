import config from '../config';
import path from 'path';
import gulp from 'gulp';
import run from 'run-sequence';
import plugins from 'gulp-load-plugins';

const $ = plugins();
const srcPathJs = path.join(config.src, config.js, '/**/*.js');
const srcPathSass = path.join(config.src, config.sass, '/**/*.scss');
const vendorPathJs = path.join(config.src, config.js, config.vendor, '/**/*.js');
const vendorPathSass = path.join(config.src, config.sass, config.vendor, '/**/*.scss');

// JavaScript linting with eslint
gulp.task('lint:js:development', () => {
  if (config.lint.js) {
    gulp
      .src([ srcPathJs, `!${vendorPathJs}` ])
      .pipe($.plumber())
      .pipe($.cached('eslint'))
      .pipe($.eslint({
        rules: {
          'no-console': 0,
          'no-warning-comments': 0
        }
      }))
      .pipe($.eslint.format());
  }
});

gulp.task('lint:js:production', () => {
  if (config.lint.js) {
    gulp
      .src([ srcPathJs, `!${vendorPathJs}` ])
      .pipe($.eslint({
        rules: {
          'no-console': 1,
          'no-warning-comments': [ 1, { terms: [ 'todo', 'fixme' ], location: 'start' } ]
        }
      }))
      .pipe($.eslint.formatEach('stylish', process.stdout))
      .pipe($.eslint.failOnError());
  }
});

// Sass linting with sass-lint (js-version)
gulp.task('lint:sass:development', () => {
  if (config.lint.scss) {
    return gulp
      .src([ srcPathSass, `!${vendorPathSass}` ])
      .pipe($.plumber())
      .pipe($.cached('sasslint'))
      .pipe($.sassLint())
      .pipe($.sassLint.format());
  }

  return false;
});


gulp.task('lint:sass:production', () => {
  if (config.lint.scss) {
    return gulp
      .src([ srcPathSass, `!${vendorPathSass}` ])
      .pipe($.sassLint())
      .pipe($.sassLint.format())
      .pipe($.sassLint.failOnError());
  }

  return false;
});

gulp.task('lint:html:development', [ 'savehtml' ], () => {
  if (config.lint.html) {
    return gulp
      .src(path.join(config.root, 'tmp--*.html'))
      .pipe($.htmlhint({
        htmlhintrc: '.htmlhintrc'
      }))
      .pipe($.htmlhint.reporter());
  }

  return false;
});

gulp.task('lint:html:production', [ 'savehtml' ], () => {
  if (config.lint.html) {
    return gulp
      .src(path.join(config.root, 'tmp--*.html'))
      .pipe($.htmlhint({
        htmlhintrc: '.htmlhintrc'
      }))
      .pipe($.htmlhint.failReporter());
  }

  return false;
});

gulp.task('lint:development', () => run(
  [ 'lint:sass:development', 'lint:js:development', 'lint:html:development' ]
));

gulp.task('lint:production', () => run(
  [ 'lint:sass:production', 'lint:js:production', 'lint:html:production' ]
));
