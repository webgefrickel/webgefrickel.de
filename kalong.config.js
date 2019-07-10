// using module.exports here, so that this file can be consumed by fractal as well
module.exports = {
  title: 'webgefrickel',

  // Provide an own version number and don't use the package.json-version,
  // since this describes the version number of kalong, and not the resulting styleguide
  version: '6.0.0',

  // configure your localhost environment here, the host/proxy
  // should point to the root-folder configured below (default: ./public/)
  scheme: 'https',
  proxy: 'wgf.dev.localhost',
  port: 3000,

  // main file name (for styles and scripts)
  main: 'main',

  // default entry points
  root: './public/',
  src: './src/',
  dest: './public/assets/',
  styleguide: './public/styleguide/',
  library: './public/site/patterns/',

  // paths to all asset-directories, for src + dest
  assets: 'assets/',
  config: 'config/',
  docs: 'docs/',
  fonts: 'fonts/',
  icons: 'icons/',
  images: 'images/',
  patterns: 'patterns/',
  templates: 'templates/',
  scripts: 'scripts/',
  styles: 'styles/',
};
