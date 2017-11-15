<?php snippet('header') ?>

<section class="page  page--blog  js-page">
  <div class="wrapper">

    <h1 class="page__header  decorated">
      <a href="/blog">
        <?= $pages->find('blog')->title() ?>
      </a>
    </h1>
    <div class="content-wrapper">

      <?php snippet('blogbar') ?>

      <div class="content content--blog  content--article">

        <article class="article  article--single  h-entry">
          <time class="article__date  dt-published" datetime="<?= $page->date('Y-m-d') ?>">
            <?= $page->date('l, d. F Y') ?>
          </time>
          <h2 class="article__header  article__header--single">
            <a class="link-large  p-name  u-url" href="<?= $page->url() ?>">
              <?= $page->title() ?>
            </a>
          </h2>

          <p class="article__intro  p-summary">
            <?= $page->intro() ?>
          </p>

          <div class="e-content">
            <?= $page->text()->kt() ?>
          </div>

          <?php if (!empty($gallery)): ?>
            <div class="gallery  js-gallery">
              <?php foreach ($gallery as $image): ?>
                <a href="<?= $image['link'] ?>" class="gallery__link">
                  <img src="<?= $image['thumb'] ?>" class="gallery__thumb" alt="" />
                </a>
              <?php endforeach ?>
            </div>
          <?php endif ?>

          <hr />

          <footer class="article__footer">
            <?php snippet('articlehcard') ?>
            <p>
              This article was published on
              <time class="dt-publisehd" datetime="<?= $page->date('Y-m-d') ?>">
                <?= $page->date('l, d. F Y') ?>
              </time>
              and tagged with

              <?php snippet('taglist', [ 'tags' => $page->tags(), 'tagbase' => $tagbase ]) ?>
              —

              subscribe to the <a class="link-default" href="<?= url('blog/feed') ?>">RSS-feed</a>.
            </p>
          </footer>

        </article>

        <hr />
        <?= webmentions() ?>

      </div>

    </div>

  </div>

  <?php snippet('sectionlink', [ 'section' => 'work' ]) ?>
</section>

<?php snippet('footer') ?>
