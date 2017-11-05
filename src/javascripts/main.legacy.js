// load polyfills for legacy browser support
import 'babel-polyfill';

// and then load all other stuff, just as in main.js
import * as components from '../components/**/*.js';
import * as globals from './4-global/*.js';
import * as other from './4-global/**/*.js';

const load = [ globals, other, components ];

// remove the no-js class
document.documentElement.classList.remove('no-js');

load.forEach(items => {
  Object.keys(items).forEach(i => {
    items[i]();
  });
});
