<?php

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

