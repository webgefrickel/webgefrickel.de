<?php

kirbytext::$tags['video'] = [
  'attr' => array(
    'class',
  ),
  'html' => function($tag) {
    $videoFile = $tag->file($tag->attr('video'));

    return
      '<video class="video ' . $tag->attr('class') . '" controls>' .
        '<source src="' . $videoFile->url() . '" type="video/mp4" />' .
      '</video>';
  }
];
