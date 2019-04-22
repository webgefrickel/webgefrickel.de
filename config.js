export default {
  // browsersync config - this is where you can test all your
  // devices on - create a vhosts-entry with the same name
  // set the port (if you want something different) and your
  // scheme, if you run your stuff locally via https or sth.
  scheme: 'https',
  proxy: 'wgf.dev.localhost',
  port: 3000,

  // the main folders, src for where your sources are
  // (everything scss, unminified images and js-modules
  // and dest for your destination folder to compile to.
  // root ist where your webserver will point to (this is
  // needed for serviceworker config etc.
  src: './src/',
  root: './public/',
  dest: './public/assets/',

  // the folder for all your gulp tasks, except those composite
  // tasks (build, watch etc.) - those should be defined in your
  // gulpfile directly
  tasks: './tasks/',

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
  js: 'js/',
  images: 'img/',
  sprite: 'img/sprites/',
  vendor: 'vendor/',

  // additional config, parsing, bundling, linting
  // ======================================================================

  // every file in this array will be converted from sass to a sharedconfig.json
  // file, that will be saved in the scripts-folder. this only works for basic
  // sass-maps, any variables in the maps wont be parsed
  // default shared config are breakpoints and fonts, for fontfaceobserver and
  // the mediaquery-module bundled in this repository, feel free to add more
  // sass-maps and add them to this array if you need the values in your JavaScript
  shared: [
    'breakpoints',
    'fonts'
  ],

  // autoprefixer browser-support matrix, this generates
  // css-prefixes for the defined browsers
  browsersupport: [
    'last 2 versions',
    'ie >= 11'
  ],

  // define what you want to lint for errors
  lint: {
    js: true, // using eslint - see /.eslintrc.yml
    scss: true, // using scss_lint ruby gem - see /.scss-lint.yml
    html: false // using htmlhint, define the pages you want to lint below, see /.htmlhintrc
  },

  // define any sites to be checked realtive to the proxy
  // using htmlhint (if lint.html === true)
  // if your proxy and the pages defined are not reachable, the htmlhint
  // task will throw and error and break your build, so make sure, that
  // everything in the pages-array is indeed a page in your website
  // and your proxy/scheme variables are correct
  pages: [
    '/',
    '/blog',
    '/blog/styling-form-elements',
    '/blog/photos-from-new-zealand',
    '/blog/beyond-tellerrand-and-indiewebcamp-2016',
    '/work',
    '/contact',
    '/legal-notice'
  ]

};
