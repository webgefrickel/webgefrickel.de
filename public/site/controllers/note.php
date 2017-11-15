<?php

return function($site, $pages, $page) {
  $tagbase = '/notes/tagged-with/';
  $tagcloud = tagcloud(page('notes'), [ 'limit' => 30 ]);

  return compact('tagcloud', 'tagbase');
};

