<article class="webmention webmention-reply">
  <?php echo $author ?>
  <?php if($mention->text()->isNotEmpty()): ?>
  <p class="webmention-text">
    <?= $mention->text()->excerpt(200) ?>
    <a class="link-default  webmention-continue" href="<?= $mention->url() ?>">Read more&hellip;</a>
  </p>
  <?php endif ?>
</article>