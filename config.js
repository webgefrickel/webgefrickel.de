export default {

  // browsersync config - this is where you can test all your
  // devices on - create a vhosts-entry with the same name
  // set the port (if you want something different) and your
  // scheme, if you run your stuff locally via https or sth.
  proxy: 'wgf.local.dev',
  port: 3000,
  scheme: 'https',


  // the two main folders, src for where your sources are
  // (everything scss, unminified images and js-modules
  src: './src/',

  // and dest for your destination folder to compile to
  root: './public/',
  dest: './public/assets/',

  // the folder for all your gulp tasks, except those composite
  // tasks (build, watch etc.) - those should be defined in your
  // gulpfile directly
  tasks: './tasks/',

  // you can create vendor folders in your src/js src/scss
  // folder - anything in there will not be linted by default
  vendor: 'vendor',

  // the main-filename: main will be used as your main js and
  // scss-file, as entry point and compile target (e.g. if
  // main is 'app', it will look for app.scss and create a
  // app.css and app.min.css file (for js: entry-point for browserify)
  main: 'main',

  // those are folder-names used in your src and dest subfolders
  // change them accordingly - and leave the trailing slash
  sass: 'scss/',
  css: 'css/',
  fonts: 'fonts/',
  scripts: 'js/',
  images: 'img/',
  sprite: 'img/sprites/',

  // additional config, parsing, bundling, linting
  // ======================================================================

  // every file in this array will be converted from sass to a sharedconfig.json
  // file, that will be saved in the scripts-folder. this only works for basic
  // sass-maps, any variables in the maps wont be parsed
  // default shared config are breakpoints and fonts, for fontfaceobserver and
  // the mediaquery-module bundled in this repository, feel free to add more
  // sass-maps and add them to this array if you need the values in your JavaScript
  sharedConfig: [
    'breakpoints',
    'fonts'
  ],

  // define what you want to lint for errors
  lint: {
    js: true, // using eslint - see /.eslintrc
    scss: true, // using scss_lint ruby gem - see /.scss-lint.yml
    html: true // using htmlhint, define the pages you want to lint below, see /.htmlhintrc
  },

  // define any sites to be checked realtive to the proxy
  // using htmlhint (if lint.html === true)
  // if your proxy and the pages defined are not reachable, the htmlhint
  // task will throw and error and break your build, so make sure, that
  // everything in the pages-array is indeed a page in your website
  pages: [
    '/',
    '/blog',
    '/blog/styling-form-elements',
    '/blog/photos-from-new-zealand',
    '/work',
    '/contact',
    '/legal-notice'
  ],

  // autoprefixer browser-support matrix, this generates
  // css-prefixes for the defined browsers
  browsersupport: [
    'android >= 4.4',
    'chrome >= 47',
    'ff >= 43',
    'ie >= 10',
    'ios >= 8',
    'opera >= 34',
    'safari >= 8'
  ],

  // if you use libs that browserify should not parse for any
  // additional require-statements, add them here to speed things up
  // use this only for libraries that do not use require or import
  // or things will break and dependencies cannot be resolved
  noparselibs: [
    'svgxuse',
    'picturefill'
  ]

};
