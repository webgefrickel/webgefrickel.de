<?php

return function($site, $pages, $page, $args) {
  $currentTag = false;
  $notesPerPage = 15;
  $notes = $page->children()->paginate($notesPerPage);

  // filter by tag if there are any see the blog-controller and routes
  if (isset($args['tag']) && !empty($args['tag'])) {
    $currentTag = $args['tag'];
    $notes = $page->children()
      ->filterBy('tags', '==', $currentTag, ',')
      ->paginate($notesPerPage);
  }

  $tagcloud = tagcloud(page('notes'), [ 'limit' => 30 ]);
  $alltags = '';

  foreach($tagcloud as $tag) {
    $alltags .= '<li class="taglist__item">';
    $alltags .= '<a class="link-inverted  taglist__link';
    $alltags .= ($currentTag === $tag->name()) ? '  taglist__link--active': '';
    $alltags .= '" href="/notes/tagged-with/' . $tag->name() .'">' .
        ucfirst($tag->name()) . ' (' . $tag->results() . ')' .
      '</a>' .
    '</li>';
  }

  return compact('notes', 'alltags', 'currentTag');
};


