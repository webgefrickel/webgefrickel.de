const kalong = require('../../kalong.config');
const { fonts } = require('../config/fonts');
const { colors } = require('../config/colors');
const { mediaqueries } = require('../config/mediaqueries');

module.exports = {
  context: {
    config: {
      kalong,
      fonts,
      mediaqueries,
      colors,
      debug: true,
      styleguide: true,
      hash: new Date().getTime(),
    },
    language: {
      code: 'en',
      locale: 'en_US',
      direction: 'ltr',
    },
    page: {
      title: `${kalong.title}—Styleguide`,
    },
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
};
