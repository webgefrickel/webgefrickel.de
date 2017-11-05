import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import run from 'run-sequence';
import { frckl as config } from './package';

// Rather than manage one giant gulpfile responsible for creating all tasks,
// each 'simple' task has been broken out into its own file in ./tasks.
// Any file in that folder gets automatically required.
// To add a new task, simply add a new task file to ./tasks
fs.readdirSync(config.tasks)
  .filter(name => (/(\.js$)/i).test(path.extname(name)))
  .forEach(task => require(config.tasks + task));

// The main tasks (default + build) are defined here
// ======================================================================

// The default gulp task is the watch task, watch everything
// from js to images and start the corresponding tasks
// The default task also starts watchify and browsersync
gulp.task('default', [ 'shared', 'serve' ], () => {
  // when something in the sass-folder changes, recompile sass
  gulp.watch(
    [ path.join(config.src, 'components/**/*.scss'), path.join(config.src, 'stylesheets/**/*.scss') ],
    [ 'lint:stylesheets:development', 'stylesheets:development' ]
  );

  gulp.watch(
    path.join(config.src, 'shared/**/*.yml'),
    [ 'shared' ]
  );

  // any changes to the images-folder? copy them
  gulp.watch(
    path.join(config.src, 'images/**/*.{png,gif,jpg,svg,webp}'),
    [ 'copy:images' ]
  );

  // if icons change, regenerate the sprite
  gulp.watch(
    path.join(config.src, 'icons/**/*.{svg,yml}'),
    [ 'sprite', 'copy:icons' ]
  );

  // watch the javacsript folder for changes, then watchify and lint
  gulp.watch(
    [ path.join(config.src, 'components/**/*.js'), path.join(config.src, 'javascripts/**/*.js') ],
    [ 'lint:javascripts:development', 'javascripts:development' ]
  );

  // add a watcher to the sericeworker script
  gulp.watch(
    [ path.join(config.src, 'javascripts/serviceworker.js') ],
    [ 'lint:javascripts:development', 'serviceworker' ]
  );

  // if any fonts change -- copy them
  gulp.watch(
    path.join(config.src, 'fonts/**/*.{woff,woff2}'),
    [ 'copy:fonts' ]
  );
});

// the production build task runs almost any task in sequence
// and checks/lints - and fails if linting fails and is activated
// meaning you can't build if your code smells bad :-)
gulp.task('build', () => run(
  [ 'lint' ],
  [ 'clean' ],
  [ 'shared', 'sprite' ],
  [ 'stylesheets:development', 'javascripts:development',
    'stylesheets:production', 'javascripts:production', 'javascripts:legacy' ],
  [ 'copy:images', 'copy:fonts', 'copy:icons' ],
  [ 'clean:done' ]
));

