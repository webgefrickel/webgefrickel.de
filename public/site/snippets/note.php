<article class="note  note--preview  decorated--thin  h-entry">

  <div class="e-content p-name">
    <?= $note->text()->kirbytext() ?>
  </div>

  <?php if ($note->hasImages()): ?>
    <img class="note__image" src="<?= $note->image()->url() ?>" alt="<?= $note->image()->caption() ?>" />
  <?php endif ?>

  <footer class="note__footer">
    <a class="link-default  u-url" href="<?= $note->url() ?>">
    <time class="note__date  dt-published" datetime="<?= $note->date('Y-m-d') ?>">
      <?= $note->date('l, d. F Y, H:i') ?></time></a><br />

    <?php
      $taglist = [];
      $tagsArray = explode(',', $note->tags());
      foreach ($tagsArray as $tag) {
        $taglist[] = '<a href="/notes/tagged-with/' . $tag . '" class="link-default  p-category">' . ucfirst($tag) . '</a>';
      }
      $taglist = implode(', ', $taglist);
    ?>
    Tagged with <span class="note__tags  p-category"><?= $taglist ?></span><br />


    <?php $latLon = explode(',', $note->location()) ?>
    This note was posted from here:
    <a class="link-default  p-location  h-adr" href="http://www.openstreetmap.org/#map=16/<?= $latLon[0] ?>/<?= $latLon[1] ?>">
      <span class="p-latitude" ?><?= $latLon[0] ?></span>
      <span class="p-longitude" ?><?= $latLon[1] ?></span>
    </a>

    <div class="hidden visuallyhidden"><?= $note->syndicate() ?></div>
  </footer>
</article>
