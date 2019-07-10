const mandelbrot = require('@frctl/mandelbrot');
const path = require('path');
let handles = null;

// for additional data-route
function getHandles(app) {
  app.components.on('updated', () => {
    handles = null;
  });
  if (handles) {
    return handles;
  }
  handles = [];
  app.components.flatten().each(comp => {
    handles.push(comp.handle);
    if (comp.variants().size > 1) {
      comp.variants().each(variant => handles.push(variant.handle));
    }
  });
  handles = handles.map(h => ({ handle: h }));
  return handles;
}

const subTheme = mandelbrot({
  rtl: false,
  lang: 'en',
  skin: 'black',
  favicon: '/subtheme/favicon.ico',
  styles: ['default', '/subtheme/styleguide.css'],
  format: 'yaml',
  nav: ['docs', 'components'],
  panels: ['html', 'view', 'resources', 'context', 'notes', 'info'],
});

subTheme.addLoadPath(path.join(__dirname, '/views'));
subTheme.addStatic(path.join(__dirname, '/dist'), '/subtheme');

subTheme.addRoute(
  '/components/data/:handle',
  {
    handle: 'data',
    view: 'pages/components/data.nunj',
  },
  getHandles
);

module.exports = subTheme;
