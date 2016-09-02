<!-- generator="<?= $generator ?>" -->
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">

  <channel>
    <title><?= xml($title) ?></title>
    <link><?= xml($link) ?></link>
    <generator><?= c::get('feed.generator', 'Kirby') ?></generator>
    <lastBuildDate><?= date('r', $modified) ?></lastBuildDate>
    <atom:link href="<?= xml($url) ?>" rel="self" type="application/rss+xml" />

    <?php if(!empty($description)): ?>
    <description><?= xml($description) ?></description>
    <?php endif ?>

    <?php foreach($items as $item): ?>
    <item>
      <title><?= xml($item->title()) ?></title>
      <link><?= xml($item->url()) ?></link>
      <guid><?= xml($item->id()) ?></guid>
      <pubDate><?= $datefield == 'modified' ? $item->modified('r') : $item->date('r', $datefield) ?></pubDate>
      <description><![CDATA[<?= $item->{$textfield}()->kirbytext() ?>]]></description>
    </item>
    <?php endforeach ?>

  </channel>
</rss>
