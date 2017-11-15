<?php snippet('header') ?>

<section class="page  page--contact  js-page">
  <div class="wrapper">
    <h1 class="decorated  page__header"><?= $page->title() ?></h1>

    <div class="content-wrapper">

      <article class="sidebar  sidebar--contact">
        <?php snippet('contactinfo') ?>
        <?= $page->availability()->kt() ?>
      </article>

      <article class="content  content--contact">
        <?= $page->info()->kt() ?>
        <?= $page->principles()->kt() ?>

        <div class="content__buzzwords">
          <?= $page->buzzwords()->kt() ?>
        </div>
      </article>

    </div>
  </div>

  <?php snippet('sectionlink', [ 'section' => 'work' ]) ?>
</section>

<?php snippet('footer') ?>
