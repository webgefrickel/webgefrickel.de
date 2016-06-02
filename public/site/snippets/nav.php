<?php if (!$page->isHomePage()): ?>
  <?php $items = $pages->visible() ?>
  <?php if ($items->count()): ?>
    <nav class="nav  js-nav">
      <ul class="nav__list  tiles">
        <?php foreach ($items as $item): ?>
          <li class="nav__item  nav__item--<?= $item->slug() ?>  tile  tile--<?= $item->slug() ?>">
            <a class="nav__link  js-nav__link  <?php e($item->isOpen(), 'nav__link--active') ?>"
              href="<?= $item->url() ?>" data-target="<?= $item->slug() ?>">
              <span class="nav__link__inner"><?= $item->title()->html() ?></span>
            </a>
          </li>
        <?php endforeach ?>
      </ul>
    </nav>
  <?php endif ?>

  <button type="button" class="button  button--nav  js-toggle-nav" title="Show/Hide Navigation">
    <?php snippet('icon', [ 'icon' => 'menu' ]) ?>
  </button>

<?php endif ?>
