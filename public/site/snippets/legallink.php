<?php $legal = $pages->find('legal-notice') ?>
<a href="<?= $legal->url() ?>" class="link-legal  header__legal">
  <?= $legal->title() ?>
</a>
