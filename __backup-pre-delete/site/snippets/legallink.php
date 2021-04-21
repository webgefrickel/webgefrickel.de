<?php $legal = $pages->find('legal-notice') ?>
<a href="<?= $legal->url() ?>" class="link-legal  header__legal">
  <?= $legal->title() ?>
</a>
<?php $privacy = $pages->find('privacy-policy') ?>
<a href="<?= $privacy->url() ?>" class="link-legal  header__legal">
  <?= $privacy->title() ?>
</a>
