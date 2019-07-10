---
title: Linting
---

This project provides four different linters: one for HTML, one for accessibility issues, one for
Sass (.scss-files to be specific) and one for JavaScript.

## JavaScript: eslint

The linter used for JavaScript is [eslint](http://eslint.org), and this
project comes with a pre-configured (kinda restrictive) set of rules, to
enforce a consistent and sane code style base on [XO](https://github.com/xojs/xo) and recommendations from eslint. You can find all current rules
and the settings for them in the file _.eslintrc.yml_.

Eslint is very customizable, you can write your own plugins, but for
starters the default built-in rules should be more than enough.

### ES6 / ES2015

Since we use ES6 in this project, eslint is configured to warn you on
some things, that can be written better/easier with ES6 (such as
arrow-functions, let vs. var or destructuring). Please make use of those new awesome language features where applicable.

## Sass: sass-lint

For linting our Sass we use
[sass-lint](https://github.com/sasstools/sass-lint). Configuration for
sass-lint can be found in _.sass-lint.yaml_, and is pre-configured to be
quite strict.
[All avaiable rules for sass-lint can be found here](https://github.com/sasstools/sass-lint/tree/master/docs/rules).
By default anything in the folder _./src/scss/vendor_ will **not** be
linted, so you can add third-party stylesheets easily.

As always: try to keep to the strict defaults and only in edge-cases
change the default rules and allow exceptions (such as `!important`).

## HTML: htmlhint

The linter used for HTML-Code is [htmlhint](http://htmlhint.com).
The pre-defined rules can be found and changed in _.htmlhintrc_, description for the rules
[can be found on github](https://github.com/yaniswang/HTMLHint/wiki/Rules).

If you use a CMS or any other tool that creates your HTML-Output, it
sometimes makes more sense to change some of the default rules. But please always check your code for errors
with tools such as the [W3C Validator](https://validator.w3.org/) to
keep yourself sane. Valid HTML (at least regarding nesting and quotes)
can save you a lot of headaches when styling your website.

## Accessibility: pa11y

All layouts (e.g. patterns residing in src/patterns/5-layouts) will be checked for accessibility issues with [pa11y](https://github.com/pa11y/pa11y) and its default ruleset. Please try to fix any errors, since this will enhance accessibility of your components and the site.

Note: HTML and accessibility will only be checked during a full build. Sass and JavaScript will also be linted during development.
