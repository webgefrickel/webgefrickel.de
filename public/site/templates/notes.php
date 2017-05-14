<?php snippet('header') ?>

<section class="page  page--blog  page--notes  js-page">
  <div class="wrapper">
    <h1 class="page__header  decorated">
      <a href="/notes">
        <?= $page->title() ?>
      </a>
    </h1>

    <div class="content-wrapper">

      <?php snippet('notesbar', compact('alltags') ) ?>

      <div class="content  content--blog  content--notes">

        <?php foreach ($notes as $note): ?>
          <?php snippet('note', compact('note')) ?>
        <?php endforeach ?>

        <?php snippet('pagination', [ 'articles' => $notes ]) ?>
      </div>

    </div>
  </div>

  <?php snippet('sectionlink', [ 'section' => 'work' ]) ?>
</section>

<?php snippet('footer') ?>
