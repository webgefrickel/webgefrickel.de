<?php

return function($site, $pages, $page) {
  $tagbase = '/blog/tagged-with/';
  $gallery = false;
  $tagcloud = tagcloud(page('blog'), [ 'limit' => 30 ]);

  if (!$page->gallery()->empty() && !$page->images()->empty()) {
    $gallery = [];

    foreach ($page->images() as $image) {
      $gallery[] = [
        'link' => $image->url(),
        'thumb' => thumb($image, [ 'height' => 250, 'quality' => '70' ])->url()
      ];
    }
  }

  return compact('tagcloud', 'tagbase', 'gallery');
};

