import fonts from './modules/fonts';
import nav from './modules/nav';
import gallery from './modules/gallery';
import highlight from './modules/highlight';
import sourcecode from './modules/sourcecode';
import sectionchange from './modules/sectionchange';
import welcome from './modules/welcome';

// import any polyfills and other libs you want to use in older browsers here
import 'svgxuse';
import 'picturefill';

// lets check if we have a modern browser, and then, enhance!
// Edge, Firefox, Chrome, Opera as well as IE10+, iOS7+ and Android 4.4+
if ('visibilityState' in document) {
  // remove the no-js class
  document.documentElement.classList.remove('no-js');

  // load all modules
  fonts();
  nav();
  gallery();
  highlight();
  sectionchange();
  sourcecode();
  welcome();
}
