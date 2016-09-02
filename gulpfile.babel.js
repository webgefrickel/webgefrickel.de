/*
Rather than manage one giant gulpfile responsible for creating all tasks,
each 'simple' task has been broken out into its own file in ./tasks.
Any file in that folder gets automatically required.

To add a new task, simply add a new task file to ./tasks
*/

import config from './config';
import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import run from 'run-sequence';

// load every custom task from the tasks-folder
fs.readdirSync(config.tasks)
  .filter((name) => (/(\.js$)/i).test(path.extname(name)))
  .forEach((task) => require(config.tasks + task));


// all other composite tasks (watch, default, build) are defined here
// ======================================================================

// The default gulp task is the watch task, watch everything
// from js to images and start the corresponding tasks
// The default task also starts watchify and browsersync
gulp.task('default', [ 'serve' ], () => {
  // when something in the sass-folder changes, recompile sass
  gulp.watch(
    path.join(config.src, config.sass, '/**/*.scss'),
    [ 'lint:sass:development', 'sass:development' ]
  );

  gulp.watch(
    path.join(config.src, config.sass, '/config/*.scss'),
    [ 'shared' ]
  );

  // any changes to the images-folder? copy them
  gulp.watch(
    path.join(config.src, config.images, '*.{png,gif,jpg,svg,webp}'),
    [ 'copy:images' ]
  );

  // if sprites change, regenerate the sprite
  gulp.watch(
    path.join(config.src, config.sprite, '*.svg'),
    [ 'sprites' ]
  );

  // watch the javacsript folder for changes, then watchify and lint
  gulp.watch(
    path.join(config.src, config.js, '**/*.js'),
    [ 'lint:js:development', 'js:development' ]
  );

  // if any fonts change -- copy them
  gulp.watch(
    path.join(config.src, config.fonts, '*.{woff,woff2}'),
    [ 'copy:fonts' ]
  );
});


// and a watch alias for the default task
gulp.task('watch', [ 'default' ]);


// the production build task runs almost any task in sequence
// and checks/lints - and fails if linting fails and is activated
// meaning you can't build if your code smells bad :-)
gulp.task('build', () => run(

  // first we lint js and css and html, and clean everything
  [ 'clean' ],
  [ 'shared', 'sprites' ],
  [ 'copy:shared' ],
  [ 'savehtml' ], // create the sprite and get html for htmlhint + critical
  [ 'lint:js:production', 'lint:sass:production', 'lint:html:production' ],
  [ 'sass:development', 'js:development',
    'sass:production', 'js:production' ],
  [ 'copy:images', 'copy:fonts', 'copy:loadcss', 'copy:vendorjs',
    'copy:serviceworker', 'critical' ],
  [ 'clean:done' ] // delete temporary html files
));

// alias for the build task
gulp.task('production', [ 'build' ]);
