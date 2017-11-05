<?php snippet('header') ?>

<section class="page  page--home  js-page">

  <input type="checkbox" class="close-state  close-state--welcome" name="close-welcome" value="" id="close-welcome" />
  <label for="close-welcome" class="button  button--close  button--close--welcome" title="Hide Introtext">
    <?php snippet('icon', [ 'icon' => 'close' ]) ?>
  </label>

  <header class="welcome  js-welcome">
    <h1 class="welcome__inner">
      <?= html::breaks($page->welcome()) ?>
    </h1>

    <div class="header  header--welcome">
      <?php snippet('logo') ?>
      <?php snippet('sourcecode') ?>
      <?php snippet('legallink') ?>
    </div>
  </header>

  <nav class="tiles">
    <?php $tiles = [ 'contact', 'work', 'blog' ] ?>
    <?php foreach ($tiles as $tile): ?>
      <a class="tile  tile--<?= $tile ?>" href="/<?= $tile ?>">
        <div class="tile__inner">
          <h2 class="tile__title"><?= ucfirst($tile) ?></h2>
          <div class="tile__teaser"><?= $page->$tile()->kirbytext() ?></div>
        </div>
      </a>
    <?php endforeach ?>
  </nav>

</section>

<?php snippet('footer') ?>
