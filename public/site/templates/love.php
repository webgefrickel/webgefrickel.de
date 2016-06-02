<?php snippet('header') ?>

<section class="page  page--love  js-page">
  <div class="wrapper">
    <div class="content-wrapper">

      <div class="love">
        <?php snippet('icon', [ 'icon' => 'heart' ]) ?>
      </div>

      <article class="content  content--contact">
        <?= $page->text()->kirbytext() ?>
      </article>

    </div>
  </div>
</section>

<?php snippet('footer') ?>
