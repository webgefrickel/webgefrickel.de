import config from '../config';
import shared from '../src/js/shared';
import path from 'path';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

const $ = plugins();

gulp.task('copy:fonts', () =>
  gulp
    .src(path.join(config.src, config.fonts, '*.{woff,woff2}'))
    .pipe(gulp.dest(path.join(config.dest, config.fonts)))
);

gulp.task('copy:images', () =>
  gulp
    .src(path.join(config.src, config.images, '*.{png,gif,jpg,svg,webp}'))
    .pipe(gulp.dest(path.join(config.dest, config.images)))
);

gulp.task('copy:vendorjs', () =>
  gulp
    .src(path.join(config.src, config.js, config.vendor, '*.js'))
    .pipe(gulp.dest(path.join(config.dest, config.js)))
);

gulp.task('copy:serviceworker', () =>
  gulp
    .src(path.join(config.src, config.js, 'serviceworker.js'))
    .pipe($.replace(/@@version@@/gi, shared.version))
    .pipe($.replace(/@@hash@@/gi, shared.hash))
    .pipe(gulp.dest(config.root))
);

gulp.task('copy:shared', () =>
  gulp
    .src(path.join(config.src, config.js, 'shared.json'))
    .pipe(gulp.dest(config.root))
);

gulp.task('copy:loadcss', () =>
  gulp
    .src('./node_modules/fg-loadcss/src/loadCSS.js')
    .pipe($.uglify())
    .pipe($.rename('loadcss.min.js'))
    .pipe(gulp.dest(path.join(config.dest, config.js)))
);
