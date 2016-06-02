<?php if ($articles->pagination()->hasPages()): ?>
  <?php $paginationUrl = ($currentTag !== false) ? '/blog/tagged-with/' . $currentTag : '/blog'; ?>

  <nav class="pagination">

    <?php if ($articles->pagination()->hasNextPage()): ?>
      <a class="pagination__older" href="<?= $paginationUrl ?>/page:<?= $articles->pagination()->nextPage() ?>">
        <?php snippet('icon', [ 'icon' => 'arrow-left' ]) ?>
        Older posts
      </a>
    <?php endif ?>

    <?php if ($articles->pagination()->hasPrevPage()): ?>
      <a class="pagination__newer" href="<?= $paginationUrl ?>/page:<?= $articles->pagination()->prevPage() ?>">
        Newer posts
        <?php snippet('icon', [ 'icon' => 'arrow-right' ]) ?>
      </a>
    <?php endif ?>

  </nav>
<?php endif ?>
