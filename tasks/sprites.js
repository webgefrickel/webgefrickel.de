import config from '../config';
import path from 'path';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

const $ = plugins();
const spriteConfig = {
  mode: {
    symbol: {
      dest: './',
      sprite: path.join('../', config.images, 'sprites.svg')
    }
  },

  shape: {
    meta: path.join(config.src, config.sprite, 'sprites.yaml'),
    id: {
      generator: 'icon--%s'
    }
  }
};


gulp.task('sprites', () =>
  gulp
    .src(path.join(config.src, config.sprite, '*.svg'))
    .pipe($.plumber())
    .pipe($.svgSprite(spriteConfig))
    .pipe(gulp.dest(path.join(config.src, config.images)))
);
