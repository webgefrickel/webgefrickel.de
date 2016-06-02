<?php

return function($site, $pages, $page, $args) {
  $projects = $page->children()->visible();

  return compact('projects');
};

