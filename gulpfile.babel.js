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
gulp.task('default', [ 'browsersync', 'watchify' ], () => {
  // when something in the sass-folder changes, recompile sass
  gulp.watch(
    `${config.src + config.sass}**/*.scss`,
    [ 'sasslint:development', 'sass:development' ]
  );

  gulp.watch(
    `${config.src + config.sass}config/*.scss`,
    [ 'sharedconfig' ]
  );

  // any changes to the images-folder? copy them
  gulp.watch(
    `${config.src + config.images}*.{png,gif,jpg,svg}`,
    [ 'copy:images' ]
  );

  // if sprites change, regenerate the sprite
  gulp.watch(
    `${config.src + config.sprite}*.svg`,
    [ 'sprites' ]
  );

  // watch the javacsript folder for changes, then watchify and lint
  gulp.watch(
    `${config.src + config.scripts}**/*.js`,
    [ 'eslint:development' ]
  );

  // if any fonts change -- copy them
  gulp.watch(
    `${config.src + config.fonts}*.{woff,woff2}`,
    [ 'copy:fonts' ]
  );
});


// and a watch alias for the default task
gulp.task('watch', [ 'default' ]);


// the production build task runs almost any task in sequence
// and checks/lints - and fails if linting fails and is activated
// meaning you can't build if your code smells bad :-)
gulp.task('build', () => run(
  [ 'clean' ],
  [ 'sharedconfig', 'sprites' ],
  [ 'copy:sharedconfig' ],
  [ 'savehtml' ],
  [ 'eslint:production', 'sasslint:production', 'htmlhint' ],
  [ 'sass:development', 'browserify:development',
    'sass:production', 'browserify:production' ],
  [ 'copy:images', 'copy:fonts', 'copy:loadcss', 'copy:vendorjs',
    'copy:serviceworker', 'critical' ],
  [ 'clean:done' ]
));
