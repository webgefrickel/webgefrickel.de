<?php

return function($site, $pages, $page, $args) {
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
  $alltags = '';
  foreach($tagcloud as $tag) {
    $alltags .= '<li class="taglist__item">';
    $alltags .= '<a class="link-inverted  taglist__link';
    $alltags .= ($currentTag === $tag->name()) ? '  taglist__link--active': '';
    $alltags .= '" href="/blog/tagged-with/' . $tag->name() .'">' .
        ucfirst($tag->name()) . ' (' . $tag->results() . ')' .
      '</a>' .
    '</li>';
  }

  return compact('articles', 'alltags', 'currentTag');
};

