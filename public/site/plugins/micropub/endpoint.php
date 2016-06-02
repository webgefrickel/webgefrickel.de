<?php

// patch get all functions for nginx
if (!function_exists('getallheaders')) {
  function getallheaders() {
    $headers = '';
    foreach ($_SERVER as $name => $value) {
      if (substr($name, 0, 5) == 'HTTP_') {
        $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
      }
    }
    return $headers;
  }
}

$_HEADERS = [];

foreach (getallheaders() as $name => $value) {
  $_HEADERS[$name] = $value;
}

if (!isset($_HEADERS['Authorization'])) {
  header($_SERVER['SERVER_PROTOCOL'] . ' 401 Unauthorized');
  echo 'Missing "Authorization" header.';
  exit;
}

if (!isset($_POST['h'])) {
  header($_SERVER['SERVER_PROTOCOL'] . ' 400 Bad Request');
  echo 'Missing "h" value.';
  exit;
}

$options = [
  CURLOPT_URL => $tokenEndpoint,
  CURLOPT_HTTPGET => TRUE,
  CURLOPT_USERAGENT => $mysite,
  CURLOPT_TIMEOUT => 5,
  CURLOPT_RETURNTRANSFER => TRUE,
  CURLOPT_HEADER => FALSE,
  CURLOPT_HTTPHEADER => [
    'Content-type: application/x-www-form-urlencoded',
    'Authorization: ' . $_HEADERS['Authorization']
  ]
];

$curl = curl_init();
curl_setopt_array($curl, $options);
$source = curl_exec($curl);
curl_close($curl);

parse_str($source, $values);

if (!isset($values['me'])) {
  header($_SERVER['SERVER_PROTOCOL'] . ' 400 Bad Request');
  echo 'Missing "me" value in authentication token.';
  exit;
}

if (!isset($values['scope'])) {
  header($_SERVER['SERVER_PROTOCOL'] . ' 400 Bad Request');
  echo 'Missing "scope" value in authentication token.';
  exit;
}

if (substr($values['me'], -1) != '/') {
  $values['me'] .= '/';
}

if (strtolower($values['me']) != strtolower($mysite)) {
  header($_SERVER['SERVER_PROTOCOL'] . ' 403 Forbidden');
  echo 'Mismatching "me" value in authentication token.';
  exit;
}

if (!stristr($values['scope'], 'post')) {
  header($_SERVER['SERVER_PROTOCOL'] . ' 403 Forbidden');
  echo 'Missing "post" value in "scope".';
  exit;
}

if (!isset($_POST['content'])) {
  header($_SERVER['SERVER_PROTOCOL'] . ' 400 Bad Request');
  echo 'Missing "content" value.';
  exit;
}
