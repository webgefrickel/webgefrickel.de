<?php

return function($page) {
  $data = kalong();
  $tilePages = kirby()->site()->find('contact', 'work', 'blog');

  $data['welcome'] = $page->welcome()->kirbytextinline();

  foreach ($tilePages as $tilePage) {
    $data['tiles'][] = [
      'href' => $tilePage->url(),
      'slug' => $tilePage->slug(),
      'title' => $tilePage->title(),
      'text' => $tilePage->introtext()->kirbytext(),
    ];
  }

  return $data;
};
