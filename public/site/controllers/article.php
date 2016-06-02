<?php

return function($site, $pages, $page) {
  $tagsArray = explode(',', $page->tags());
  $taglist = [];
  $gallery = false;

  foreach ($tagsArray as $tag) {
   $taglist[] = '<a href="/blog/tagged-with/' . $tag . '" class="link-default  p-category">' . ucfirst($tag) . '</a>';
  }
  $taglist = implode(', ', $taglist);

  $tagcloud = tagcloud(page('blog'), [ 'limit' => 30 ]);
  $alltags = '';
  foreach($tagcloud as $tag) {
    $alltags .= '<li class="taglist__item">
      <a class="taglist__link  link-inverted" href="/blog/tagged-with/' . $tag->name() .'">' .
        ucfirst($tag->name()) . ' (' . $tag->results() . ')' .
      '</a>' .
    '</li>';
  }

  if (!$page->gallery()->empty() && !$page->images()->empty()) {
    $gallery = [];

    foreach ($page->images() as $image) {
      $gallery[] = [
        'link' => $image->url(),
        'thumb' => thumb($image, [ 'height' => 250, 'quality' => '70' ])->url()
      ];
    }
  }

  return compact('taglist', 'gallery', 'alltags');
};

