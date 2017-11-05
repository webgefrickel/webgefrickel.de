import breakpoints from '@shared/breakpoints';

// same usage as the mediaquery-scss-mixin, just
// provide the shortcode used in the scss-file and if it
// is a custom query. this module return true if the
// given breakpoint matches or false if it doesnt

export default shortcode => {
  const value = breakpoints[shortcode];
  let query = '';

  if (value) {
    // we have the default min-width
    const pxValue = parseInt(value, 10);
    query = `(min-width: ${pxValue}px)`;
  }

  // return the matches boolean
  return (window.matchMedia(query).matches);
};
