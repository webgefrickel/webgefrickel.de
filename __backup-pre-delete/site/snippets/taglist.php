<?php

$taglist = [];
$tagsArray = explode(',', $tags);

foreach ($tagsArray as $tag) {
  $link = brick('a', ucfirst(trim($tag)));
  $link->attr('href', trim($tagbase) . trim($tag));
  $link->addClass('link-default');
  $link->addClass('p-category');
  $taglist[] = $link;
}

?>

<span class="p-category"><?= implode(', ', $taglist) ?></span>
