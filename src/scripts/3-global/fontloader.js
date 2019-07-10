import FontFaceObserver from 'fontfaceobserver';
import { fonts } from '~config/fonts';

export default () => {
  const fontObservers = [];

  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add('fonts-loaded');
    return;
  }

  Object.keys(fonts).forEach(font => {
    const f = fonts[font];

    if (f.fontface) {
      fontObservers.push(
        new FontFaceObserver(f.family.replace(/'/g, ''), {
          weight: f.weight,
          style: f.style,
        })
      );
    }
  });

  if (fontObservers.length >= 1) {
    Promise.all(fontObservers).then(() => {
      document.documentElement.classList.add('fonts-loaded');
      // Optimization for Repeat Views
      sessionStorage.fontsLoaded = true;
    });
  }
};
