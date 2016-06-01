import config from '../config';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

const $ = plugins();


gulp.task('eslint:development', () => {
  if (config.lint.js) {
    gulp
      .src([
        `${config.src + config.scripts}**/*.js`,
        `!${config.src + config.scripts + config.vendor}/**/*.js`
      ])
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


gulp.task('eslint:production', () => {
  if (config.lint.js) {
    gulp
      .src([
        `${config.src + config.scripts}**/*.js`,
        `!${config.src + config.scripts + config.vendor}/**/*.js`
      ])
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
