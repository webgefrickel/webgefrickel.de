<?php

return function($site, $pages, $page, $args) {
  $tagbase = '/notes/tagged-with/';
  $currentTag = false;
  $notesPerPage = 15;
  $notes = $page->children()
    ->sortBy('date', 'desc')
    ->paginate($notesPerPage);

  // filter by tag if there are any see the blog-controller and routes
  if (isset($args['tag']) && !empty($args['tag'])) {
    $currentTag = $args['tag'];
    $notes = $page->children()
      ->sortBy('date', 'desc')
      ->filterBy('tags', '==', $currentTag, ',')
      ->paginate($notesPerPage);
  }

  $tagcloud = tagcloud(page('notes'), [ 'limit' => 30 ]);

  return compact('notes', 'tagcloud', 'tagbase', 'currentTag');
};


