<?php snippet('header') ?>

<section class="page  page--contact  js-page">
  <div class="wrapper">
    <h1 class="decorated  page__header"><?= $page->title() ?></h1>

    <div class="content-wrapper">

      <article class="sidebar  sidebar--contact">
        <?= $page->info()->kt() ?>
      </article>

      <article class="content  content--contact">
        <?= $page->text()->kt() ?>
      </article>

    </div>
  </div>

  <?php snippet('sectionlink', [ 'section' => 'work' ]) ?>
</section>

<?php snippet('footer') ?>
