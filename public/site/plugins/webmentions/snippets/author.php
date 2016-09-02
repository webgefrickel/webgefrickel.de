<figure class="webmention-author">
  <a title="<?= $author->name() ?>" class="webmention-author__link" href="<?= $author->url() ?>">
    <?php if ($author->photo()->exists()): ?>
      <img class="webmention-author__photo" src="<?= $author->photo()->url() ?>" alt="<?= $author->name() ?>">
    <?php endif ?>
  </a>
  <figcaption class="webmention-author__meta">
    <a href="<?= $author->url() ?>" class="webmention-author__name"><?= $author->name() ?></a><br />
    <time class="webmention-author__date" datetime="<?= $mention->date('c') ?>">
      <a href="<?= $mention->url() ?>"><?= $mention->date('d M Y - h:i') ?></a>
    </time>
  </figcaption>
</figure>
