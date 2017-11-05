import path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import svgsprite from 'gulp-svg-sprite';
import { frckl as config } from '../package';

const spriteConfig = {
  mode: {
    symbol: {
      dest: './',
      sprite: path.join('../', 'images/sprite.svg')
    }
  },

  shape: {
    meta: path.join(config.src, 'icons/sprite.yml'),
    id: {
      generator: 'icon--%s'
    }
  }
};

gulp.task('sprite', () =>
  gulp
    .src(path.join(config.src, 'icons/*.svg'))
    .pipe(plumber())
    .pipe(svgsprite(spriteConfig))
    .pipe(gulp.dest(path.join(config.src, 'images')))
);
