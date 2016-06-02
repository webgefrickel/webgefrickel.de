<?php snippet('header') ?>

<section class="page  page--work  js-page">
  <div class="wrapper">
    <h1 class="decorated  page__header"><?= $page->title() ?></h1>

    <?php foreach ($projects as $project): ?>
      <?php snippet('project', compact('project')) ?>
    <?php endforeach ?>

  </div>

  <?php snippet('sectionlink', [ 'section' => 'contact' ]) ?>
  <?php snippet('sectionlink', [ 'section' => 'blog' ]) ?>
</section>

<?php snippet('footer') ?>
