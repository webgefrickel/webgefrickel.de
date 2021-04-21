<meta property="og:type" content="website" />
<meta property="og:url" content="<?= $page->url() ?>" />
<meta property="og:site_name" content="<?= html($site->title()) ?>" />
<meta name="twitter:site" content="@webgefrickel" />
<meta name="twitter:creator" content="@webgefrickel" />
<meta name="twitter:card" content="summary" />

<?php if ($page->isHomePage()): ?>
  <meta property="og:title" content="<?= html($site->title() . ' — ' . $site->subtitle()) ?>" />
  <meta name="twitter:title" content="<?= html($site->title() . ' — ' . $site->subtitle()) ?>" />
<?php elseif ($page->template() === 'note'): ?>
  <meta property="og:title" content="<?= html('A note from ' . strftime('%d. %B %Y, %H:%I', $page->date()) . ' — ' . $site->title()) ?>" />
  <meta name="twitter:title" content="<?= html('A note from ' . strftime('%d. %B %Y, %H:%I', $page->date()) . ' — ' . $site->title()) ?>" />
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

<?php // image for notes without images... ?>
<?php if ($page->template() === 'article' || $page->template() === 'note'): ?>
  <?php if ($firstImage = $page->images()->first()): ?>
    <meta property="og:image" content="<?= $firstImage->url() ?>" />
    <meta name="twitter:image" content="<?= $firstImage->url() ?>" />
  <?php endif ?>
<?php elseif ($page->isHomePage()): ?>
  <meta property="og:image" content="<?= kirby()->urls()->assets() ?>/img/preview.png" />
  <meta name="twitter:image" content="<?= kirby()->urls()->assets() ?>/img/preview.png" />
<?php else: ?>
  <?php // no image whatsoever for other pages... ?>
<?php endif ?>
