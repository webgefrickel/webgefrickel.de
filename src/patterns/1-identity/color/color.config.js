// include the color config and generate color patches from the map
const colors = require('../../../config/colors');

module.exports = {
  label: 'Colors',
  status: 'done',
  notes: `Use the color-functions and mixins in Sass to use those colors, for example:
    <pre>
    .element {
      @include background-color(main);
      border: 1px solid color(error);
      // etc. pp.
    }</pre>
    See src/styles/2-tools/colors.scss.
    `,
  context: {
    colors: colors.colors,
  },
};
