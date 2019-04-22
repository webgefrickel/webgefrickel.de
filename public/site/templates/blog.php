<?php snippet('header') ?>

<section class="page  page--blog  js-page">
  <div class="wrapper">
    <h1 class="page__header  decorated">
      <a href="/blog">
        <?= $page->title() ?>
      </a>
    </h1>

    <div class="content-wrapper">

      <?php snippet('blogbar', compact('tagcloud')) ?>

      <div class="content  content--blog">

        <?php foreach ($articles as $article): ?>
          <?php snippet('preview', compact('article')) ?>
        <?php endforeach ?>

        <?php snippet('pagination', compact('articles', 'currentTag')) ?>
      </div>

    </div>
  </div>

  <?php snippet('sectionlink', [ 'section' => 'work' ]) ?>
</section>

<?php snippet('footer') ?>
