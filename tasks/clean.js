import config from '../config';
import gulp from 'gulp';
import del from 'del';

// do not return anything fixes watch-task
gulp.task('clean', () => del([
  `${config.root}tmp--*.html`,
  `${config.root}site/config/sharedconfig.json`,
  `${config.root}serviceworker.js`,
  `${config.dest + config.css}**/*`,
  `${config.dest + config.images}**/*`,
  `${config.dest + config.scripts}**/*`,
  `${config.dest + config.fonts}**/*`
]));

gulp.task('clean:done', () => del([
  `${config.root}tmp--*.html`
]));
