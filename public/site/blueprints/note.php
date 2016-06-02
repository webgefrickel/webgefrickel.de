<?php if(!defined('KIRBY')) exit ?>

title: Note
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
    type: title
  date:
    label: Date and time
    type: datetime
    default: now -2h
    time:
      interval: 1
  text:
    label: Text
    type: textarea
    buttons: false
  replyto:
    label: In reply to
    type: url
    width: 1/2
  twitter:
    label: Tweet it
    type: checkbox
    text: Check to syndicate to Twitter on save
    width: 1/2
  tags:
    label: Tags
    type: tags
  location:
    label: Geolocation
    type: text
