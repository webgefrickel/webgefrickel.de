    </main>

    <?php // if this page is not an article, include the global contactinfo ?>
    <?php if (!($page->template() === 'article' || $page->is(page('contact')))): ?>
      <footer class="hidden" aria-hidden="true">
        <?php snippet('contactinfo') ?>
      </footer>
    <?php endif ?>

    <?php if (c::get('debugmode')): ?>
      <script src="/assets/js/main.js"></script>

    <?php else: ?>
      <script src="/assets/js/main.min.<?= c::get('sharedconfig')->hash ?>.js"></script>
      <script>
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/serviceworker.<?= c::get('sharedconfig')->hash ?>.js');
        }
      </script>
    <?php endif ?>
  </body>
</html>
