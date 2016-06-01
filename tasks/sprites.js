import config from '../config';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

const $ = plugins();
const spriteConfig = {
  mode: {
    symbol: {
      dest: './',
      sprite: `../${config.images}sprites.svg`
    }
  },

  shape: {
    meta: `${config.src + config.sprite}sprites.yaml`,
    id: {
      generator: 'icon--%s'
    }
  }
};


gulp.task('sprites', () =>
  gulp
    .src(`${config.src + config.sprite}*.svg`)
    .pipe($.plumber())
    .pipe($.svgSprite(spriteConfig))
    .pipe(gulp.dest(config.src + config.images))
);
