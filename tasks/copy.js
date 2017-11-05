import path from 'path';
import gulp from 'gulp';
import { frckl as config } from '../package';

gulp.task('copy:fonts', () =>
  gulp
    .src(path.join(config.src, 'fonts/*.{woff,woff2}'))
    .pipe(gulp.dest(path.join(config.dest, 'fonts')))
);

gulp.task('copy:images', () =>
  gulp
    .src(path.join(config.src, 'images/*.{png,gif,jpg,svg,webp}'))
    .pipe(gulp.dest(path.join(config.dest, 'img')))
);

gulp.task('copy:icons', () =>
  gulp
    .src(path.join(config.src, 'icons/*.svg'))
    .pipe(gulp.dest(path.join(config.dest, 'img/icons')))
);
