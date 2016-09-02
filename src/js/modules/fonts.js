import Observer from 'fontfaceobserver';
import promisesPolyfill from 'es6-promise';
import shared from '../shared.json';

const fontConfig = shared['font-config'];

export default () => {
  const fontObservers = [];

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
    promisesPolyfill.polyfill();

    Promise.all(fontObservers)
      .then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
  }
};
