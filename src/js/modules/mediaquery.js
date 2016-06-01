import shared from '../sharedconfig';

const breakpoints = shared.breakpoints;

// same usage as the mediaquery-scss-mixin, just
// provide the shortcode used in the scss-file and if it
// is a custom query. this module return true if the
// given breakpoint matches or false if it doesnt

export default (shortcode, custom = false) => {
  const value = breakpoints[shortcode];
  let query = '';

  if (custom) {
    // if we have a custom query, use 'as is', remove quotes
    query = breakpoints[shortcode].replace(/'/g, '');

  } else if (value.match('px')) {
    // we have the default min-width
    // convert to em-value if it is a pixel-value
    const pxValue = parseInt(value);
    const emValue = pxValue / 16;

    query = `(min-width: ${emValue}em)`;

  } else { // use the value as it is
    query = `(min-width: ${value})`;
  }

  // return the matches boolean
  return (window.matchMedia(query).matches);
};
