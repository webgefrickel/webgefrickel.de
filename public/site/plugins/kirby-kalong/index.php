<?php

@include_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/helpers.php';
require_once __DIR__ . '/src/data.php';

use Kirby\Cms\App;

Kirby::plugin('mgfagency/twig', [
    'options' => [
        'usephp' => true
    ],
    'components' => [
        'template' => function (App $kirby, string $name, string $type = 'html') {
            return new mgfagency\Twig\Template($kirby, $name, $type);
        }
    ]
]);
