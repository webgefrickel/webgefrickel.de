import * as components from '../components/**/*.js';
import * as globals from './4-global/*.js';
import * as other from './4-global/**/*.js';

const load = [ globals, other, components ];

// lets check if we have a modern browser, and then, enhance!
// Edge, Firefox, Chrome, Opera as well as IE10+, iOS7+ and Android 4.4+
if ('visibilityState' in document) {
  // remove the no-js class
  document.documentElement.classList.remove('no-js');

  // load all javascripts from global and all components automatically
  load.forEach(items => {
    Object.keys(items).forEach(i => {
      items[i]();
    });
  });

  // if you want to load some custom scripts, that should not reside in
  // global or any of the components, provide them here and import on top
  // import 'sth' from 'somewhere';
  // sth({ foo: bar });
}
