<link rel="authorization_endpoint" href="<?= $site->authendpoint() ?>" />
<link rel="token_endpoint" href="<?= $site->tokenendpoint() ?>" />
<link rel="micropub" href="<?= $site->micropubendpoint() ?>" />
<link rel="webmention" href="<?= u('webmention') ?>" />
<link rel="me" href="https://twitter.com/<?= $site->social() ?>" />
<link rel="me" href="https://github.com/<?= $site->social() ?>" />
<link rel="me" href="https://keybase.io/<?= $site->social() ?>" />
<link rel="pgpkey" href="<?= u('public-key.txt') ?>">

