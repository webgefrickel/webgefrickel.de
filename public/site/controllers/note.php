<?php

return function($site, $pages, $page) {
  $tagsArray = explode(',', $page->tags());
  $taglist = [];
  $gallery = false;

  foreach ($tagsArray as $tag) {
   $taglist[] = '<a href="/blog/tagged-with/' . $tag . '" class="link-default  p-category">' . ucfirst($tag) . '</a>';
  }
  $taglist = implode(', ', $taglist);

  $tagcloud = tagcloud(page('notes'), [ 'limit' => 30 ]);
  $alltags = '';
  foreach($tagcloud as $tag) {
    $alltags .= '<li class="taglist__item">
      <a class="taglist__link  link-inverted" href="/blog/tagged-with/' . $tag->name() .'">' .
        ucfirst($tag->name()) . ' (' . $tag->results() . ')' .
      '</a>' .
    '</li>';
  }

  return compact('taglist', 'alltags');
};

