<meta property="og:type" content="website" />
<meta property="og:url" content="<?= $page->url() ?>" />
<meta property="og:site_name" content="<?= html($site->title()) ?>" />
<meta name="twitter:site" content="@webgefrickel" />
<meta name="twitter:creator" content="@webgefrickel" />
<meta name="twitter:card" content="summary_large_image" />

<?php if ($page->isHomePage()): ?>
  <meta property="og:title" content="<?= html($site->title() . ' — ' . $site->subtitle()) ?>" />
  <meta name="twitter:title" content="<?= html($site->title() . ' — ' . $site->subtitle()) ?>" />
<?php elseif ($page->template() === 'note'): ?>
  <meta property="og:title" content="<?= html('A note from ' . $site->title() . ' — ' . $site->title()) ?>" />
  <meta name="twitter:title" content="<?= html('A note from ' . $site->title() . ' — ' . $site->title()) ?>" />
<?php else: ?>
  <meta property="og:title" content="<?= html($page->title() . ' | ' . $site->title()) ?>" />
  <meta name="twitter:title" content="<?= html($page->title() . ' | ' . $site->title()) ?>" />
<?php endif ?>

<?php if ($page->isHomePage()): ?>
  <meta property="og:description" content="<?= html($site->description()) ?>" />
  <meta name="twitter:description" content="<?= html($site->description()) ?>" />
<?php elseif ($page->template() === 'article'): ?>
  <meta property="og:description" content="<?= html($page->intro()) ?>" />
  <meta name="twitter:description" content="<?= html($page->intro()) ?>" />
<?php else: ?>
  <meta property="og:description" content="<?= html($page->text()) ?>" />
  <meta name="twitter:description" content="<?= html($page->text()) ?>" />
<?php endif ?>

<?php if ($page->template() === 'article' || $page->template() === 'note'): ?>
  <?php if ($firstImage = $page->images()->first()): ?>
    <meta property="og:image" content="<?= $firstImage->url() ?>" />
    <meta name="twitter:image" content="<?= $firstImage->url() ?>" />
  <?php else: ?>
    <meta property="og:image" content="https://webgefrickel.de/assets/img/preview.png" />
    <meta name="twitter:image" content="https://webgefrickel.de/assets/img/preview.png" />
  <?php endif ?>
<?php else: ?>
  <meta property="og:image" content="https://webgefrickel.de/assets/img/preview.png" />
  <meta name="twitter:image" content="https://webgefrickel.de/assets/img/preview.png" />
<?php endif ?>

