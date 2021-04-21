<?php
$mysite = 'https://webgefrickel.de/';
$tokenEndpoint = 'https://tokens.indieauth.com/token';

// create a new article using the kirby helpers / api
// ======================================================================
require_once(__DIR__ . '/kirby/bootstrap.php');
require_once(__DIR__ . '/site/plugins/micropub/endpoint.php');

// initialize kirby instance
$kirby = kirby();

// create a new blog post if the h ist entry and we have content
if ($_POST['h'] === 'entry' && !empty($_POST['content'])) {

  // content format ist as follows for this blog:
  // first line: title
  // second line: summary / intro
  // rest: text
  $time = time();
  $hash = date('YmdHis');
  $date = date('Y-m-d H:i:s', $time);
  $slug = (isset($_POST['slug'])) ? $_POST['slug'] : $hash;
  $location = (isset($_POST['location'])) ? explode(';', $_POST['location']) : false;
  $syndicate = '';

  // append the url for bridgy publish
  if (!empty($_POST['syndicate-to'])) {
    $syndicate = '<a href="https://brid.gy/publish/twitter"></a>';
  }

  $note = [
    'title' => $hash,
    'date' => $date,
    'slug' => $slug,
    'text' => $_POST['content'],
    'syndicate' => $syndicate,
    'location' => ($location) ? str_replace('geo:', '', $location[0]) : '',
    'replyto' => (isset($_POST['in-reply-to'])) ? $_POST['in-reply-to'] : '',
    'tags' => (isset($_POST['category'])) ? strtolower(implode(', ', $_POST['category'])) : ''
  ];

  $newNote = page('notes')->children()->create($hash, 'note', $note);
  $newUrl = $mysite . 'notes/' . $hash;

  // move the image to theh page folder if there is any
  if (!empty($_FILES)) {
    move_uploaded_file(
      $_FILES['photo']['tmp_name'],
      __DIR__ . '/content/notes/' . $slug . '/image.jpg'
    );
  }

  if ($syndicate !== '') {
    $ch = curl_init();
    $url = 'https://brid.gy/publish/webmention';
    $query = http_build_query([
      'source' => $newUrl,
      'target' => 'https://brid.gy/publish/twitter'
    ]);

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 2);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_exec($ch);
    curl_close($ch);
  }
}

// reply with a nice header
// ======================================================================

header($_SERVER['SERVER_PROTOCOL'] . ' 201 Created');
header('Location: ' . $newUrl);
