<!doctype html>
<html lang="<?= $site->language()->code() ?>" class="no-js  <?= (c::get('debugmode')) ? 'fonts-loaded' : '' ?>">
  <head>
    <meta charset="utf-8" />
    <?php if ($page->isHomePage()): ?>
      <title><?= html($site->title() . ' — ' . $site->subtitle()) ?></title>
    <?php elseif ($page->template() === 'note'): ?>
      <title><?= html('A note from ' . strftime('%d. %B %Y, %H:%I', $page->date()) . ' | ' . $site->title()) ?></title>
    <?php else: ?>
      <title><?= html($page->title() . ' | ' . $site->title()) ?></title>
    <?php endif ?>

    <?php snippet('metadata') ?>
    <?php snippet('favicons') ?>
    <?php snippet('indieweb') ?>
    <?php snippet('og-data') ?>

    <?php if (c::get('debugmode')): ?>
      <?= css(asset('css/main.css')) ?>
    <?php else: // just load the minified css, should be in cache now anyway ?>
      <?= css(asset('css/main.min.css')) ?>
    <?php endif ?>
  </head>
  <body class="site  <?php e($page->isHomePage(), 'site--homepage') ?>">

    <header class="header  header--top  js-header">
      <?php snippet('nav') ?>
      <?php snippet('logo') ?>
      <?php snippet('legallink') ?>
    </header>

    <main class="main  js-main">
