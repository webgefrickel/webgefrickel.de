import Observer from 'fontfaceobserver';
import promisesPolyfill from 'es6-promise';
import shared from '../sharedconfig';

const fontConfig = shared['font-config'];

export default () => {
  const fontObservers = [];

  // get every font from the sharedconfig, check if fontface is needed
  // and add a new ff-observer which later will be handled with Promise.all
  Object.keys(fontConfig).forEach((font) => {
    if (fontConfig[font].fontface) {
      fontObservers.push(
        new Observer(fontConfig[font].family.replace(/'/g, ''), {
          weight: fontConfig[font].weight,
          style: fontConfig[font].style
        }).check()
      );
    }
  });

  if (fontObservers.length >= 1) {
    promisesPolyfill.polyfill(); // for stupid browsers, polyfill promises

    Promise.all(fontObservers)
      .then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
  }
};
