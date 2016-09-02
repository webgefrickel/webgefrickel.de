<?php
// please set your license key here
c::set('license', 'provideyourownlicensehere');

// NOTE:
// this file is an exact copy of my actual config.php,
// except for the license-key above.

// setup languages -- english by default
c::set('languages', [[
  'default' => true,
  'code' => 'en',
  'name' => 'English',
  'locale' => 'en_US',
  'url' => '/'
]]);

// load the shared config from the json file generated with gulp
c::set('sharedconfig', json_decode(file_get_contents(dirname( __FILE__ ) . '/../../shared.json')));

// markdown as a default over kirbytext
c::set('content.file.extension', 'md');
c::set('panel.kirbytext', false);

// activate the classymarkdown plugin
c::set('classymarkdown', true);

// debugging mode for development / staging using .env-files
// remove the env-file or add additional configs, e.g.
// .env-staging for different environments and settings
if (file_exists(dirname( __FILE__ ) . '/.env-development')) {

  c::set('debug', true); // this is for kirbys own debug mode
  c::set('debugmode', true); // this is used for including different css/js
  c::set('ssl', true);

} else if (file_exists(dirname( __FILE__ ) . '/.env-staging')) {

  c::set('debug', true);
  c::set('debugmode', false);
  c::set('ssl', false);

} else {

  c::set('debug', false);
  c::set('debugmode', false);
  c::set('ssl', true);
}

// routes for tags for blog posts and notes
c::set('routes', [
  [
    'pattern' => 'blog/tagged-with',
    'action' => function() {
      return go('blog');
    }
  ],
  [
    'pattern' => 'blog/tagged-with/(:any)',
    'action' => function($tag) {

      $data = [ 'tag' => $tag ];

      site()->visit('blog', 'en');
      return [ 'blog', $data ];
    }
  ],
  [
    'pattern' => 'notes/tagged-with',
    'action' => function() {
      return go('notes');
    }
  ],
  [
    'pattern' => 'notes/tagged-with/(:any)',
    'action' => function($tag) {

      $data = [ 'tag' => $tag ];

      site()->visit('notes', 'en');
      return [ 'notes', $data ];
    }
  ]
]);

