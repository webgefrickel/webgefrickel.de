    </main>

    <?php // if this page is not an article, include the global contactinfo ?>
    <?php if (!($page->template() === 'article' || $page->is(page('contact')))): ?>
      <footer class="hidden" aria-hidden="true">
        <?php snippet('contactinfo') ?>
      </footer>
    <?php endif ?>

    <?php if (c::get('debugmode')): ?>
      <script type="module" src="<?= asset('js/main.js') ?>"></script>

    <?php else: ?>
      <?php /* load legacy js code for browser, that do not support es2017+ */ ?>
      <script src="<?= asset('js/main.legacy.min.js?v=201809201529') ?>"></script>
      <script>
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/serviceworker.js?v=201809201529');
        }
      </script>
    <?php endif ?>
  </body>
</html>
