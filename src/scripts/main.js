import * as globals from './3-global/!(*.test|*.config).js';
import * as patterns from '../patterns/**/!(*.test|*.config).js';

// js has loaded—remove the no-js class
document.documentElement.classList.remove('no-js');

// load and execute all scripts from global and all patterns automatically
// but exclude test and config files — those should not be executed
[globals, patterns].forEach(module => {
  Object.keys(module).forEach(i => {
    module[i]();
  });
});
