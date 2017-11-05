import path from 'path';
import gulp from 'gulp';
import del from 'del';
import { frckl as config } from '../package';

// do not return anything fixes watch-task
gulp.task('clean', () => del([
  path.join(config.root, 'tmp--*.html'),
  path.join(config.root, 'serviceworker.js'),
  path.join(config.dest, 'css/**/*'),
  path.join(config.dest, 'js/**/*'),
  path.join(config.dest, 'img/**/*'),
  path.join(config.dest, 'fonts/**/*')
]));

gulp.task('clean:done', () => del([
  path.join(config.root, 'tmp--*.html')
]));
