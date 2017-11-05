import path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import run from 'run-sequence';
import eslint from 'gulp-eslint';
import sasslint from 'gulp-sass-lint';
import htmlhint from 'gulp-htmlhint';
import { frckl as config } from '../package';

const srcPathTasks = path.join(config.tasks, '/**/*.js');
const srcPathJs = path.join(config.src, 'javascripts/**/*.js');
const srcPathSass = path.join(config.src, 'stylesheets/**/*.scss');
const componentPathJs = path.join(config.src, 'components/**/*.js');
const componentPathSass = path.join(config.src, 'components/**/*.scss');
const vendorPathJs = path.join(config.src, 'javascripts/*-vendor/**/*.js');
const vendorPathSass = path.join(config.src, 'stylesheets/*-vendor/**/*.scss');
const sharedPathJs = path.join(config.src, 'javascripts/*-shared/**/*.js');
const sharedPathSass = path.join(config.src, 'stylesheets/*-shared/**/*.scss');

// JavaScript linting with eslint
gulp.task('lint:javascripts:development', () =>
  gulp
    .src([ srcPathJs, componentPathJs, srcPathTasks, `!${vendorPathJs}`, `!${sharedPathJs}` ])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
);

gulp.task('lint:javascripts:production', () =>
  gulp
    .src([ srcPathJs, componentPathJs, srcPathTasks, `!${vendorPathJs}`, `!${sharedPathJs}` ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

// Sass linting with sass-lint (js-version)
gulp.task('lint:stylesheets:development', () =>
  gulp
    .src([ srcPathSass, componentPathSass, `!${vendorPathSass}`, `!${sharedPathSass}` ])
    .pipe(plumber())
    .pipe(sasslint())
    .pipe(sasslint.format())

);

gulp.task('lint:stylesheets:production', () =>
  gulp
    .src([ srcPathSass, componentPathSass, `!${vendorPathSass}`, `!${sharedPathSass}` ])
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
);

gulp.task('lint:html', [ 'savehtml' ], () =>
  gulp
    .src(path.join(config.root, 'tmp--*.html'))
    .pipe(htmlhint({ htmlhintrc: '.htmlhintrc' }))
    .pipe(htmlhint.failReporter())
);

gulp.task('lint', [ 'savehtml' ], () => run(
  [ 'lint:stylesheets:production', 'lint:javascripts:production', 'lint:html' ],
  [ 'clean:done' ]
));
