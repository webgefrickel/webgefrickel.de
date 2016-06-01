import config from '../config';
import gulp from 'gulp';
import critical from 'critical';

gulp.task('critical', [ 'savehtml' ], () =>

  critical.generate({
    base: config.root,
    inline: false, // create css to be inlined in php
    src: 'tmp--home.html',
    css: `${config.dest + config.css + config.main}.min.css`,
    dest: `${config.dest + config.css}critical.min.css`,
    pathPrefix: config.dest.replace(config.root, ''), // strip the public local folder
    minify: true,
    extract: false, // do not extract css from the downloaded html (speeds things up)
    ignore: [ '@font-face' ], // remove all font-face rules
    dimensions: [
      { width: 320, height: 568 }, // minimal phone
      { width: 1024, height: 768 }, // tablet, general size
      { width: 1440, height: 1080 } // desktop
    ]
  })

);
