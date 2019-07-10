// include the color config and generate color patches from the map
const fontSizes = require('../../../config/font-sizes');

module.exports = {
  label: 'Font Sizes',
  status: 'done',
  notes: `All font-sizes will be converted to rem, if given in px.

  Use the font-size mixin in Sass to apply the font-size, for example:
    <pre>
    .element {
      @include font-size(default);
    }</pre>
    See src/styles/2-tools/fonts.scss.
    `,
  context: {
    fontSizes: fontSizes['font-sizes'],
  },
};
