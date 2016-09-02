import config from '../config';
import path from 'path';
import gulp from 'gulp';
import del from 'del';

// do not return anything fixes watch-task
gulp.task('clean', () => del([
  path.join(config.root, 'tmp--*.html'),
  path.join(config.root, 'sharedconfig.json'),
  path.join(config.root, 'serviceworker.js'),
  path.join(config.dest, config.css, '/**/*'),
  path.join(config.dest, config.images, '/**/*'),
  path.join(config.dest, config.js, '/**/*'),
  path.join(config.dest, config.fonts, '/**/*')
]));

gulp.task('clean:done', () => del([
  path.join(config.root, 'tmp--*.html')
]));
