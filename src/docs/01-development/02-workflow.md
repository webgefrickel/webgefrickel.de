---
title: General workflow
---

The core of this styleguide-system is powered by
[fractal](https://fractal.build/), so please read through the
documentation there, especially the
[core concepts](https://fractal.build/guide/core-concepts/views). Kalong
uses nunjucks-templates instead of the default handlebars-templates, to
make patterns and snippets easier for consumption in PHP, using custom
Twig-adapters.

## How to get started

About 90% of your work should take place in the folder ./src/patterns/.
Create new patterns and components, group them in collections, add Sass
and JavaScript, and later combine everything in your templates.

There are five folders to start with, roughly implementing the idea of
[Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/):

- patterns/1-identity
  This folder will be fed automatically from some config-objects for global identity and brand definitions, such as colors, fonts, font-sizes and iconography. You usually should not have to add/change anything in here. See the src/config-folder and the documentation on Sass and CSS.
- patterns/2-elements
  This is where basic components for your styleguide should reside, stuff like buttons, images, input-element etc. pp.—simple reusable components, usually just one HTML-Element.
- patterns/3-components  
  This is where all reusable composed or special components should go, like cards, boxes or navigation-patterns—everything that can occur anywhere in your templates but is more complex than a simple element. You usually should do the most of your work in here.
- patterns/4-templates
  All your templates: those usually glue
  everything from above together, and add the basic `<head>` and
  HTML-Structure.
- patterns/5-layouts
  Actual page-layouts with content, that make use of templates, real-world examples, with placeholder stuff. Those will be copied to be ready-to-use in kirby, by default.

(Note: there is a file _preview.html included as well: this provides the
wrapping template used for each pattern-preview in this styleguide.
Usually you can just leave this alone.)

Feel free to add more collections and folders, and structure your components in subfolders. You could for
example add a collection (aka folder) named 'shop', and group any ecommerce-related
components in there, like checkout-buttons, shopping-cart, order-forms
etc.

## Creating components

When creating a new pattern, stick to the following
naming/file-convention. Create a folder patternname, in one of the
pattern-collections. Inside of that folder there can be the following:

- patternname.scss—your styles should go here
- patternname.js—your JavaScript should go here. This will automatically be loaded and executed by default. More on this in the documentation on javascript.
- patternname.config.yml OR patternname.config.js—Configuration for your
  pattern, see
  [component configuration](https://fractal.build/guide/components/configuration)
  for more details. Use YAML if you don't need the power of JavaScript
  to keep things simple
- patternname.html—HTML for your pattern, using nunjucks syntax
- README.md—if you have any additional notes for how to use the pattern

For more information, have a look at the
[Fractal Guide for components](https://fractal.build/guide/components/creating).
