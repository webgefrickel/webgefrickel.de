const config = require('../../kalong.config');
const fonts = require('../config/fonts');
const colors = require('../config/colors');
const mediaqueries = require('../config/mediaqueries');

module.exports = {
  context: {
    debug: true,
    styleguide: true,
    hash: new Date().getTime(),
    config: {
      config,
      fonts,
      mediaqueries,
    },
    site: {
      modifiers: '', // global css-classes, applied to <html>

      defaultColor: colors.colors.default,
      mainColor: colors.colors.main,

      lang: {
        code: 'en',
        locale: 'en_US',
        direction: 'ltr',
      },

      url: config.scheme + '//' + config.proxy,
      title: config.title + '—Styleguide',
      documentTitle: 'This is the document title',
      description: 'General page description',
      author: 'Site owners name',

      social: 'yoursocialhandle',
      previewImage: '//picsum.photos/300/300',
      previewImageAlt: 'Alt text for preview image',
      avatarImage: '//picsum.photos/300/300',
      street: 'Street 12',
      postalcode: '39582',
      region: 'Some Region',
      place: 'Some City',
      country: 'Absurdistan',
      email: 'youremail@mail.com',
      phone: '+491840540923',
      latitude: '12.121212',
      longitude: '12.121212',
      publicKey: 'url-to-public-key.txt',

      authEndpoint: '//',
      tokenEndpoint: '//',
    },
    global: {
      nav: {
        meta: [
          {
            href: '/imprint',
            label: 'Imprint',
          },
          {
            href: '/privacy',
            label: 'Privacy',
          },
        ],
        main: [
          {
            href: '/contact',
            slug: 'contact',
            label: 'Contact',
          },
          {
            href: '/work',
            slug: 'work',
            label: 'Work',
          },
          {
            href: '/blog',
            slug: 'blog',
            label: 'Blog',
          },
          {
            href: '/imprint',
            slug: 'imprint',
            label: 'Imprint',
          },
          {
            href: '/privacy',
            slug: 'privacy',
            label: 'Privacy',
          },
        ],
      },
    },
  },
};
