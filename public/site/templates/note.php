<?php snippet('header') ?>

<section class="page  page--blog  page--notes  js-page">
  <div class="wrapper">

    <h1 class="page__header  decorated">
      <a href="/notes">
        <?= $pages->find('notes')->title() ?>
      </a>
    </h1>
    <div class="content-wrapper">

      <?php snippet('notesbar') ?>

      <div class="content content--blog  content--article  content--notes">

        <?php snippet('note', ['note' => $page]) ?>

        <hr />
        <?= webmentions() ?>

      </div>

    </div>

  </div>

  <?php snippet('sectionlink', [ 'section' => 'work' ]) ?>
</section>

<?php snippet('footer') ?>
