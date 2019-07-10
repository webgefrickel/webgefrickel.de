---
title: Sass
---

## Sass Guidelines

Hugo Giraudel wrote an awesome piece on everything you need to know
about Sass, it's called [Sass Guidelines](http://sass-guidelin.es/) and
you should really have a look at it. I agree with this guideline in
almost all points, but I try to keep something more simple, and some
things more strict, the linter will let you know :)

## Structure

There is one main-file, where everything is included (mixins, modules,
configurations etc.) in the order you specify. By default it's
_./src/styles/main.scss_. This will be compiled into one single CSS-file,
which you can then use on your website. I still prefer this approach
over multiple files that need to be loaded on different pages (as long
as it's a small website), because once the main stylesheet is loaded, it
is cached. 

## Global configuration
JSON FILES

All other files are structure in the following folders:

1-config
2-tools
3-vendor
4-reset
5-patterns
6-themes
7-overrides

## Conventions

### BEM

This project uses the oldschool BEM-Style (Block, Element, Modifier) to
describe your modules, and with Sass this can look like:

```scss
.some-module {
  display: inline-block;
}

.some-module--with-fancy-modifier {
  transform: scale(2);
}

.some-module__block-inside {
  display: flex;
}
```

Please try to limit any CSS-declarations to exactly the name of its component. You should rather create a new CSS-only-component than add selectors that have nothing to do with a pattern. Please don't use `&__` and `&--` avaible in sass, since this will increase searchability throughout the project.

### Linting

The pre-bundled sass-lint task comes with pretty strict settings,
regarding naming of things, sort-order of properties and various other
possible problems. Please just try to stick to it, to keep things
consistent.

### Vendor prefixes

Just don't write any, unless you are absolutely sure and want to target
that specific browser. Vendor prefixes are added as needed by
[autoprefixer](https://github.com/postcss/autoprefixer). To change
supported browsers have a look at _config.js_ in the root folder and
change browsersupport-array accordingly.

## Defaults

By default, this project uses REM as units for fonts, assumes a
mobile-first strategy and tries to set
sane margin/padding defaults by defining a base-unit.

