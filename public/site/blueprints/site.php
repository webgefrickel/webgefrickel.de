<?php if(!defined('KIRBY')) exit ?>

title: Global settings
pages: false
files: false
fields:
  title:
    label: Title
    type: text
  subtitle:
    label: Subtitle
    type: text
  pageurl:
    label: Page URL
    type: url
  author:
    label: Author
    type: text
  description:
    label: Short description
    type: text
  email:
    label: Email address
    type: email
  phone:
    label: Phone
    type: text
  social:
    label: Social Handle
    type: text
  street:
    label: Street
    type: text
  city:
    label: City
    type: text
  postalcode:
    label: Postal Code
    type: text
  Region:
    label: Region (ISO)
    type: text
  country:
    label: Country
    type: text
  lat:
    label: Latitude
    type: text
  lon:
    label: Longitude
    type: text
  authendpoint:
    label: Authentication Endpoint
    type: url
  tokenendpoint:
    label: Token Endpoint
    type: url