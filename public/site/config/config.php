<?php
// NOTE: this is my actual config.php, but I have a file license.php in
// the same folder as the file you are looking at, with the following contents:
// <?php c::set('license', 'yourkirbylicensekey');
$license = __DIR__ . DS . 'license.php';
if (file_exists($license)) {
  require_once($license);
}

// setup languages -- english by default
c::set('languages', [[
  'default' => true,
  'code' => 'en',
  'name' => 'English',
  'locale' => 'en_US',
  'url' => '/'
]]);

// breakpoints for all images / widths
c::set('breakpoints', [480, 640, 720, 960, 1100, 1250, 1600]);

// markdown as a default over kirbytext
// I recommend not doing this for customer-projects...
c::set('content.file.extension', 'md');
c::set('panel.kirbytext', false);

// activate the classymarkdown plugin
c::set('classymarkdown', true);

// use imagemagick for thumb-generation, faster and better
c::set('thumbs.driver', 'im');

// debugging mode for development by default, override these
// in any production environments in additional config-files
c::set('debug', true); // this is for kirbys own debug mode
c::set('debugmode', true); // this is used for including different css/js
c::set('ssl', true);

// routes for tags for blog posts and notes
require_once(__DIR__ . DS  . 'routes.php');
