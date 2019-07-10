---
title: General Conventions
---

Disclaimer: This is a highly opinionated project and set of files and
conventions. If you don't like any of those: feel free to change them
for your project or fork the hell out of this repository. Be sure to
update this documentation if you do so.

## Language

Documentation should be written in English, since it is the most
accessible language for developers worldwide, even if the page/content
itself is in other languages. Try to use simple language and provide
examples wherever applicable.

## Spaces FTW!

If your text-editor/IDE of choice supports
[editorconfig](http://editorconfig.org), you should already be fine,
this project provides an .editorconfig-file that sets all conventions.
If not: 2 Spaces for _everything_, UTF-8 everything, Unix-Style
linebreaks, no trailing spaces except for Markdown and text-files.

## Prettier code

This repository also includes a [prettier](https://prettier.io)
config file. If your text-editor/IDE of choice supports prettier, just
activate it an never think about code-stlyling again. Highly recommended,
but not included in the build-chain. 

## Linting

The JavaScript-, HTML/a11y- and Sass-linters will be enabled by default with
the all the code-formatting settings from above, so if you try to move away 
from those conventions: you will be warned :) The linters will try to enforce a
specific coding style regarding whitespace, naming stuff, usage of
variables etc. to make your code consistent, so please try to stick to
it. You can always customize the linters:
[read more about that here](docs/development/linting).

## Filenames

Files should always be in lowercase, use dashes where applicable. No
underscores, unless you want to exclude files from the styleguide, see
[Naming and referencing in Fractal](https://fractal.build/guide/core-concepts/naming).

