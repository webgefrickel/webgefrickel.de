<?php // some useful helpers used throughout the project

function icon($icon, $class = '') {
  return snippet('icon', compact('icon', 'class'), true);
}

function asset($path) {
  return kirby()->urls()->assets() . '/' . $path;
}

function img($image, $class = '') {
  $widths = c::get('breakpoints');
  $finalImages = [];
  $alt = ($image->alt()->empty()) ? $image->name() : $image->alt();

  // generate an imagethumb for every specified size, but don't
  // upscale - that would be a waste of traffic
  // get the images for all sizes defined in the breakpoints
  foreach ($widths as $width) {
    if ($width > 0) {
      if ($image->width() >= $width) {
        $finalImages[$width] = $image->thumb([ 'width' => $width, 'quality' => 70 ]);
      } else {
        $finalImages[$width] = $image;
      }
    }
  }

  $src = reset($finalImages)->url();

  // if we have more than one size, generate the srcset for each defined
  // size -- they have to exist as add_image_size target for wordpress!
  $srcset = '';

  if (count($finalImages) > 1) {
    $sources = [];
    foreach ($finalImages as $size => $thumb) {
      $sources[] = $thumb->url() . ' ' . $size . 'w';
    }

    $srcset = implode(', ', $sources);
  }

  return snippet('img', compact('class', 'alt', 'src', 'srcset'), true);
}
