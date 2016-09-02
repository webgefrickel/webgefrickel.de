<div class="webmentions">

  <?php if($reposts->count()): ?>
    <section class="webmentions-reposts">
      <h2><?= $reposts->count() ?> reposts</h2>
      <?php foreach($reposts as $repost): ?>
        <?= $repost ?>
      <?php endforeach ?>
    </section>
  <?php endif ?>

  <?php if($likes->count()): ?>
    <section class="webmentions-likes">
      <h2><?= $likes->count() ?> likes</h2>
      <?php foreach($likes as $like): ?>
        <?= $like ?>
      <?php endforeach ?>
    </section>
  <?php endif ?>

  <?php if($replies->count()): ?>
    <section class="webmentions-replies">

      <h2><?= $replies->count() ?> Responses</h2>
      <?php foreach($replies as $reply): ?>
        <?= $reply ?>
      <?php endforeach ?>

    </section>
  <?php endif ?>

  <?php if($mentions->count()): ?>
    <section class="webmentions-mentions">

      <h2><?= $mentions->count() ?> Mentions</h2>
      <?php foreach($mentions as $mention): ?>
        <?= $mention ?>
      <?php endforeach ?>

    </section>
  <?php endif ?>

</div>
