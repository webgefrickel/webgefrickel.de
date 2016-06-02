<?php

$finalImages = [];

// generate an imagethumb for every specified size, but don't
// upscale - that would be a waste of traffic
// get the images for all sizes defined in the breakpoints
foreach (c::get('sharedconfig')->breakpoints as $width) {
  $width = intval(str_replace('px', '', $width));

  if ($width > 0) {
    if ($image->width() >= $width) {
      $finalImages[$width] = thumb($image, [ 'width' => $width, 'quality' => 70 ]);
    } else {
      $finalImages[$width] = $image;
    }
  }
}

// add default image attributes, alt + src-fallback (smallest image)
$img = '<img class="' . $classes . '"';
$img .= ' alt="' . $image->title() . '"';
$img .= ' src="' . reset($finalImages)->url() . '"';

// if we have more than one size, generate the srcset for each defined
// size -- they have to exist as add_image_size target for wordpress!
if (count($finalImages) > 1) {
  $srcset = [];

  foreach ($finalImages as $size => $thumb) {
    $srcset[] = $thumb->url() . ' ' . $size . 'w';
  }

  // append the whole srcset to the image-tag an close image element
  $img .= ' srcset="' . implode(', ', $srcset) . '"';
}

$img .= ' sizes="100vw" />'; // close the image tag and return it

echo $img;
