<?php

return [
  'debug' => true,

  // we use languages by default
  'languages' => true,
  'date.handler' => 'strftime',

  // thumbnail configuration
  'thumbs' => [
    'driver' => 'im',
    'quality' => '75',
    'srcsets' => [
      'default' => [480, 960, 1440, 2400],
    ]
  ],

  // use markdown by default for my own site
  'content' => [
    'extension' => 'md',
  ],

  // use markdown by default for my own site
  'panel' => [
    'kirbytext' => false,
  ],

  // hooks and routes in their own files
  'hooks' => require_once('hooks.php'),
  'routes' => require_once('routes.php'),

  // with trailing slash for easier usage
  'kalong' => realpath(__DIR__ . '/../patterns') . '/',

  // TODO remove this, use defaults from thumbnail generation
  'breakpoints' => [480, 640, 720, 960, 1100, 1250, 1600],
];
