<?php if ($page->isHomePage()): ?>
  <meta property="og:title" content="<?= html($site->title() . ' — ' . $site->subtitle()) ?>" />
  <meta name="twitter:title" content="<?= html($site->title() . ' — ' . $site->subtitle()) ?>" />
<?php else: ?>
  <meta property="og:title" content="<?= html($page->title() . ' | ' . $site->title()) ?>" />
  <meta name="twitter:title" content="<?= html($page->title() . ' | ' . $site->title()) ?>" />
<?php endif ?>

<?php if ($page->template() === 'article'): ?>
  <meta property="og:description" content="<?= html($page->intro()) ?>" />
  <meta name="twitter:description" content="<?= html($page->intro()) ?>" />
<?php else: ?>
  <meta property="og:description" content="<?= html($site->description()) ?>" />
  <meta name="twitter:description" content="<?= html($site->description()) ?>" />
<?php endif ?>

<meta property="og:type" content="website" />
<meta property="og:url" content="<?= $page->url() ?>" />
<meta property="og:site_name" content="<?= html($site->title()) ?>" />
<meta property="og:image" content="https://webgefrickel.de/preview.png" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@webgefrickel" />
<meta name="twitter:image" content="https://webgefrickel.de/assets/img/apple-touch-icon.png" />

