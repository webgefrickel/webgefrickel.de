<?php if ($articles->pagination()->hasPages()): ?>
  <?php if ($page->is('notes')): ?>
    <?php $paginationUrl = ($currentTag !== false) ? '/notes/tagged-with/' . $currentTag : '/notes'; ?>
  <?php else: ?>
    <?php $paginationUrl = ($currentTag !== false) ? '/blog/tagged-with/' . $currentTag : '/blog'; ?>
  <?php endif ?>

  <nav class="pagination">

    <?php if ($articles->pagination()->hasNextPage()): ?>
      <a class="pagination__older" href="<?= $paginationUrl ?>/page:<?= $articles->pagination()->nextPage() ?>">
        <?= icon('arrow-left') ?>
        Older posts
      </a>
    <?php endif ?>

    <?php if ($articles->pagination()->hasPrevPage()): ?>
      <a class="pagination__newer" href="<?= $paginationUrl ?>/page:<?= $articles->pagination()->prevPage() ?>">
        Newer posts
        <?= icon('arrow-right') ?>
      </a>
    <?php endif ?>

  </nav>
<?php endif ?>
