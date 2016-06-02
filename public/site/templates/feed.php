<?= page('blog')->children()->visible()->flip()->limit(10)->feed([
  'url' => url('blog/feed'),
  'title' => $page->title(),
  'description' => $page->description(),
  'link' => 'blog',
  'textfield' => 'intro'
]) ?>
