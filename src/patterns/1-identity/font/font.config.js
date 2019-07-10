// include the color config and generate color patches from the map
const fonts = require('../../../config/fonts');

module.exports = {
  label: 'Fonts & Typefaces',
  status: 'done',
  notes: `Use the font-functions and mixins in Sass to use the fonts, for example:
    <pre>
    .element {
      @include font(default);
      @include font-weight(bold);
      // etc. pp.
    }</pre>
    See src/styles/2-tools/fonts.scss.
    `,
  context: {
    fonts: fonts.fonts,
  },
};
