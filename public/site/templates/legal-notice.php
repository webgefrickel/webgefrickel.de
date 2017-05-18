<?php snippet('header') ?>

<section class="page  page--legal-notice  js-page">
  <div class="wrapper">
    <h1 class="decorated  page__header"><?= $page->title() ?></h1>

    <div class="content-wrapper">

      <article class="sidebar  sidebar--legal-notice">
        <?php snippet('contactinfo') ?>
        <?= $page->sidebar()->kirbytext() ?>
      </article>

      <article class="content  content--legal-notice">
        <?= $page->text()->kirbytext() ?>
      </article>
    </div>
  </div>

  <a href="#" class="link-section  link-section--fake  js-sectionchange"></a>
</section>

<?php snippet('footer') ?>
