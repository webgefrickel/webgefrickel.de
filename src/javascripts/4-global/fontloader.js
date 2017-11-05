import Observer from '@nodemodules/fontfaceobserver/fontfaceobserver';
import fonts from '@shared/fonts';

export default () => {
  const fontObservers = [];

  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add('fonts-loaded');
    return;
  }

  Object.keys(fonts).forEach(fontObject => {
    Object.keys(fonts[fontObject]).forEach(font => {
      const f = fonts[fontObject][font];
      if (f.fontface) {
        fontObservers.push(
          new Observer(f.family.replace(/'/g, ''), {
            weight: f.weight,
            style: f.style
          })
        );
      }
    });
  });

  if (fontObservers.length >= 1) {
    Promise.all(fontObservers)
      .then(() => {
        document.documentElement.classList.add('fonts-loaded');
        // Optimization for Repeat Views
        sessionStorage.fontsLoaded = true;
      });
  }
};
