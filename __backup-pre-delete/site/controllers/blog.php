<?php

return function($site, $pages, $page, $args) {
  $tagbase = '/blog/tagged-with/';
  $currentTag = false;
  $articlesPerPage = 5;
  $articles = $page->children()->visible()
    ->flip()
    ->paginate($articlesPerPage);

  // filter by tag if there are any see the blog-controller and routes
  if (isset($args['tag']) && !empty($args['tag'])) {
    $currentTag = $args['tag'];
    $articles = $page->children()->visible()
      ->filterBy('tags', '==', $currentTag, ',')
      ->flip()
      ->paginate($articlesPerPage);
  }

  $tagcloud = tagcloud(page('blog'), [ 'limit' => 30 ]);

  return compact('articles', 'tagcloud', 'tagbase', 'currentTag');
};

