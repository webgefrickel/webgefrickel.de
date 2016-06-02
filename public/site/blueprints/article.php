<?php if(!defined('KIRBY')) exit ?>

title: Blog Article
pages: false
files:
  sortable: true
  fields:
    caption:
      label: Caption
      type: text
fields:
  title:
    label: Title
    type: text
  date:
    label: Date
    type: date
  intro:
    label: Intro
    type: textarea
    buttons: false
  text:
    label: Text
    type: textarea
    buttons: false
  tags:
    label: Tags
    type: tags
  gallery:
    label: Gallery
    type: checkbox
    text: Show all images as a gallery?
