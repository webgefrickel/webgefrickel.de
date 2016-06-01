import config from '../config';
import sharedconfig from '../src/js/sharedconfig';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

const $ = plugins();

gulp.task('copy:fonts', () =>
  gulp
    .src(`${config.src + config.fonts}*.{svg,ttf,woff,woff2}`)
    .pipe(gulp.dest(config.dest + config.fonts))
);

gulp.task('copy:images', () =>
  gulp
    .src(`${config.src + config.images}*.{png,gif,jpg,svg}`)
    .pipe(gulp.dest(config.dest + config.images))
);

gulp.task('copy:vendorjs', () =>
  gulp
    .src(`${config.src + config.scripts + config.vendor}/*.js`)
    .pipe(gulp.dest(config.dest + config.scripts))
);

gulp.task('copy:serviceworker', () =>
  gulp
    .src(`${config.src + config.scripts}/serviceworker.js`)
    .pipe($.replace(/@@version@@/gi, sharedconfig.version))
    .pipe($.replace(/@@hash@@/gi, sharedconfig.hash))
    .pipe(gulp.dest(config.root))
);

gulp.task('copy:sharedconfig', () =>
  gulp
    .src(`${config.src + config.scripts}/sharedconfig.json`)
    .pipe(gulp.dest(`${config.root}site/config/`))
);

gulp.task('copy:loadcss', () =>
  gulp
    .src('./node_modules/fg-loadcss/src/loadCSS.js')
    .pipe($.uglify())
    .pipe($.rename('loadcss.min.js'))
    .pipe(gulp.dest(config.dest + config.scripts))
);
