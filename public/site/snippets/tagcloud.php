<h2 class="sidebar__header">Tags</h2>
<ul class="tagcloud">
  <?php foreach ($tagcloud as $tag): ?>
    <li class="tagcloud__item">
      <a class="tagcloud__link  link-inverted" href="<?= u($tagbase . $tag->name()) ?>">
        <?= ucfirst($tag->name()) ?> (<?= $tag->results() ?>)
      </a>
    </li>
  <?php endforeach ?>
</ul>
