<?php

function kalong($pattern = null) {
  $site = kirby()->site();
  $pages = kirby()->site()->index();
  $page = $pages->current();
  $patternPath = kirby()->option('kalong');

  // load the default page data, and override anything in need of override
  $globalData = YAML::decode(file_get_contents($patternPath . 'page.yml'));
  $patternData = ($pattern !== null) ? YAML::decode(file_get_contents($patternPath . $pattern . '.yml')) : [];
  $data = array_merge($globalData, $patternData);
  $homepage = $pages->find('home');

  // debugging and deactivating styleguide
  $data['debug'] = kirby()->option('debug');
  $data['styleguide'] = false;

  // global site data
  $data['kirby'] = kirby();
  $data['language'] = kirby()->language();

  $data['site']['author'] = $site->author();

  // main navigation
  $data['global']['nav'] = [];
  $data['global']['nav']['main'] = [];
  $data['global']['nav']['meta'] = [];

  foreach ($site->children()->published() as $p)  {
    $data['global']['nav']['main'][] = [
      'href' => $p->url(),
      'slug' => $p->slug(),
      'label' => $p->title(),
    ];
  }

  //  title <title><?= html('A note from ' . strftime('%d. %B %Y, %H:%I', $page->date()) . ' | ' . $site->title())

  /* page.description etc, and documentTitle:
      {%- if page.isHomePage %}
        {{ site.title }} — {{ site.description }}
      {%- else %}
        {{ page.title }} — {{ site.title }}
      {%- endif %}
   */


  return $data;
}
