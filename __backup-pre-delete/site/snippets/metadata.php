<meta name="description" content="<?= html($site->description()) ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="index,follow" />
<meta name="revisit-after" content="7" />
<meta name="ICBM" content="<?= $site->lat() ?>, <?= $site->lon() ?>" />
<meta name="geo.position" content="<?= $site->lat() ?>;<?= $site->lon() ?>" />
<meta name="geo.region" content="<?= $site->region() ?>" />
<meta name="geo.placename" content="<?= $site->city() ?>" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="mobile-web-app-capable" content="yes" />

<link rel="alternate" type="application/rss+xml" href="<?= url('blog/feed') ?>" title="Blog Feed" />

