<article class="article  article--preview  decorated--thin  h-entry">
  <time class="article__date  dt-published" datetime="<?= $article->date('Y-m-d') ?>">
    <?= $article->date('l, d. F Y') ?>
  </time>
  <h2 class="article__header">
    <a class="link-large  p-name  u-url" href="<?= $article->url() ?>">
      <?= $article->title() ?>
    </a>
  </h2>

  <p class="p-summary">
    <?= $article->intro() ?>
    — <a class="article__more  link-default" href="<?= $article->url() ?>">Read more&hellip;</a>
  </p>
</article>
