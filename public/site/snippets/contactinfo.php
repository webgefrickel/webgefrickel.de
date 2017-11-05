<div class="h-card  p-author">
  <h2 class="page--contact__author  p-name"><?= $site->author() ?></h2>
  <p>
    <a class="u-photo" href="https://webgefrickel.de/me.jpg" title="<?= $site->author() ?>" />
    <span class="p-street-address"><?= $site->street() ?></span>
    <br />
    <span class="p-postal-code"><?= $site->postalcode() ?></span>
    <span class="p-locality"><?= $site->city() ?></span>,
    <span class="p-country-name"><?= $site->country() ?></span>
    <br />
    <a class="link-default  u-email" href="mailto:<?= $site->email() ?>"><?= $site->email() ?></a>
    <br />
    <a class="link-default  u-url" href="<?= $site->pageurl() ?>"><?= $site->pageurl() ?></a>
    <br />
    <span class="p-tel"><?= $site->phone() ?></span>
    <data class="p-latitude" value="<?= $site->lat() ?>"></data>
    <data class="p-longitude" value="<?= $site->lon() ?>"></data>
  </p>

  <p>You can also find me on:<br />
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
</div>

