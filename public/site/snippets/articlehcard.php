<p class="h-card  p-author  article__author">
  <img class="u-photo  article__author-image" src="https://webgefrickel.de/me.jpg" alt="<?= $site->author() ?>" />
  Written by
  <span class="p-name"><?= $site->author() ?></span><br />
  <a class="link-default  u-url" rel="me"
    href="https://twitter.com/<?= $site->social() ?>">
    <?php snippet('icon', [ 'icon' => 'twitter' ]) ?>
    @webgefrickel
  </a><br />
  <a class="link-default  u-url" rel="me"
    href="https://github.com/<?= $site->social() ?>">
    <?php snippet('icon', [ 'icon' => 'github' ]) ?>
    webgefrickel
  </a>
</p>
