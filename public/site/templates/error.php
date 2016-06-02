<?php snippet('header') ?>

<section class="page  page--error  js-page">
  <div class="wrapper">
    <h1 class="decorated  page__header"><?= $page->title() ?></h1>

    <div class="content-wrapper">

      <article class="content  content--contact">
        <?= $page->text()->kirbytext() ?>
      </article>

    </div>
  </div>
</section>

<?php snippet('footer') ?>
