<?php
# Licensed under a CC0 1.0 Universal (CC0 1.0) Public Domain Dedication
# http://creativecommons.org/publicdomain/zero/1.0/

define('DS', DIRECTORY_SEPARATOR);

$mysite = 'https://webgefrickel.de/';
$tokenEndpoint = 'https://tokens.indieauth.com/token';

// create a new article using the kirby helpers / api
// ======================================================================

// load kirby and toolkit
require_once(__DIR__ . DS . 'kirby' . DS . 'bootstrap.php');
require_once(__DIR__ . DS . 'kirby' . DS . 'toolkit' . DS . 'lib' . DS . 'str.php');

// load the libs and endpoint check
require_once(__DIR__ . DS . 'site' . DS . 'plugins' . DS . 'micropub' . DS . 'endpoint.php');

// initialize kirby instance
$kirby = kirby();

// create a new blog post if the h ist entry and we have content
if ($_POST['h'] === 'entry' && !empty($_POST['content'])):

  // content format ist as follows for this blog:
  // first line: title
  // second line: summary / intro
  // rest: text
  $date = date('Y-m-d H:i:s');
  $hash = sha1($date);
  $slug = (isset($_POST['slug'])) ? $_POST['slug'] : $hash;
  $location = (isset($_POST['location'])) ? explode(';', $_POST['location']) : false;

  $note = [
    'title' => $hash,
    'date' => $date,
    'slug' => $slug,
    'text' => $_POST['content'],
    'location' => ($location) ? str_replace('geo:', '', $location[0]) : '',
    'replyto' => (isset($_POST['in-reply-to'])) ? $_POST['in-reply-to'] : '',
    'tags' => (isset($_POST['category'])) ? strtolower(implode(', ', $_POST['category'])) : ''
  ];

  // publish the article by sorting it (get last number + 1)
  $newPageNumber = sprintf('%03d', $lastPageNumber + 1);
  $newNote = page('notes')->children()->create($hash, 'note', $note);

  // move the image to theh page folder if there is any

  if (!empty($_FILES)) {
    move_uploaded_file(
      $_FILES['photo']['tmp_name'],
      __DIR__ . DS . 'content' . DS . 'notes' . DS . $slug . DS . 'image.jpg'
    );

  }

  // TODO post this stuff to twitter?

endif;

// reply with a nice header
// ======================================================================

header($_SERVER['SERVER_PROTOCOL'] . ' 201 Created');
header('Location: ' . $mysite . 'notes/' . $hash);
