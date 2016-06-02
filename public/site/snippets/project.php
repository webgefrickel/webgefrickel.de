<?php
// everytime we load a project we decide randomly if
// we display the mobile/tablet/desktop version of it

$devices = [ 'desktop', 'tablet' ];
$random = array_rand($devices, 2);
shuffle($random);
$randomDevice = $devices[$random[0]];

$mobileImages = $project->files()->filter(function ($file) {
  return (strpos($file->filename(), 'mobile') !== false);
});

$tabletImages = $project->files()->filter(function ($file) {
  return (strpos($file->filename(), 'tablet') !== false);
});

$desktopImages = $project->files()->filter(function ($file) {
  return (strpos($file->filename(), 'desktop') !== false);
});


// first image for desktop / mobile-view
$desktopFirstImage = $desktopImages->first();

// pick one random image
$mobileImage = $mobileImages->shuffle()->first();
$tabletImage = $tabletImages->shuffle()->first();
$desktopImage = $desktopImages->shuffle()->first();

$image = $desktopImage;

if ($randomDevice === 'tablet') {
  $image = $tabletImage;
}


?>

<article class="content-wrapper  decorated  project  project--<?= $randomDevice ?>">

  <div class="sidebar  sidebar--project">
    <h2 class="project__header"><?= $project->title() ?></h2>
    <div class="project_description">
      <?= $project->text()->kirbytext() ?>
    </div>

    <?php // for mobile view, always show notebook to simplify things ?>
    <figure class="project__figure  project__figure--first  project__figure--desktop  device  device--desktop">
      <div class="device__inner">
        <?php snippet('image', [ 'classes' => 'project__image', 'image' => $desktopFirstImage ]) ?>
      </div>
    </figure>

    <a class="project__link  link-as-button" href="<?= $project->website() ?>" title="Have a look at <?= $project->title() ?>">Open website</a>
  </div>

  <div class="content  content--project">

    <figure class="project__figure  project__figure--<?= $randomDevice ?>  device  device--<?= $randomDevice ?>">
      <div class="device__inner">
        <?php snippet('image', [ 'classes' => 'project__image', 'image' => $image ]) ?>
      </div>
    </figure>

    <?php // for desktop view, always show mobile as well ?>
    <figure class="project__figure  project__figure--mobile  device  device--mobile">
      <div class="device__inner">
        <?php snippet('image', [ 'classes' => 'project__image', 'image' => $mobileImage ]) ?>
      </div>
    </figure>
  </div>

</article>
