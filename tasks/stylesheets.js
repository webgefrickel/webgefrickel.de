import path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import browsersync from 'browser-sync';
import globbing from 'node-sass-globbing';
import autoprefixer from 'autoprefixer';
import normalize from 'postcss-normalize';
import cssnano from 'cssnano';
import { frckl as config, browserslist } from '../package';

const srcPath = path.join(config.src, 'stylesheets/main.scss');
const destPath = path.join(config.dest, 'css');

// do not return anything fixes watch-task
gulp.task('stylesheets:development', () => {
  gulp
    .src(srcPath)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: globbing
    }))
    .pipe(postcss([
      normalize({
        browsers: browserslist
      }),
      autoprefixer({
        browsers: browserslist
      })
    ]))
    .pipe(sourcemaps.write({
      sourceRoot: './'
    }))
    .pipe(gulp.dest(destPath))
    .pipe(browsersync.reload({ stream: true }));
});

gulp.task('stylesheets:production', () => {
  gulp
    .src(srcPath)
    .pipe(sass({
      importer: globbing,
      sourceMap: false
    }))
    .pipe(postcss([
      normalize({
        browsers: browserslist
      }),
      autoprefixer({
        browsers: browserslist
      }),
      cssnano({
        safe: true
      })
    ]))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(destPath));
});
