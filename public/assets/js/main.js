(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var fontfaceobserver_standalone = createCommonjsModule(function (module) {
(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function q(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function w(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function x(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;x(a)&&null!==a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);x(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,D=null;function H(){if(null===C){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}C=""!==a.style.font}return C}function I(a,b){return[a.style,a.weight,H()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",y=b||3E3,E=(new Date).getTime();return new Promise(function(a,b){null===D&&(D=!!document.fonts);if(D){var J=new Promise(function(a,b){function e(){(new Date).getTime()-E>=y?b():document.fonts.load(I(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),K=new Promise(function(a,c){setTimeout(c,y)});Promise.race([K,J]).then(function(){a(c)},function(){b(c)})}else m(function(){function r(){var b;if(b=
-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==t&&g==t&&h==t||f==u&&g==u&&h==u||f==v&&g==v&&h==v)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function F(){if((new Date).getTime()-E>=y)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||
void 0===a)f=e.a.offsetWidth,g=n.a.offsetWidth,h=p.a.offsetWidth,r();G=setTimeout(F,50)}}var e=new q(k),n=new q(k),p=new q(k),f=-1,g=-1,h=-1,t=-1,u=-1,v=-1,d=document.createElement("div"),G=0;d.dir="ltr";w(e,I(c,"sans-serif"));w(n,I(c,"serif"));w(p,I(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);t=e.a.offsetWidth;u=n.a.offsetWidth;v=p.a.offsetWidth;F();z(e,function(a){f=a;r()});w(e,I(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;r()});
w(n,I(c,'"'+c.family+'",serif'));z(p,function(a){h=a;r()});w(p,I(c,'"'+c.family+'",monospace'))})})};"undefined"!==typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());
});

var es6Promise = createCommonjsModule(function (module) {
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.2.1
 */

(function() {
    "use strict";
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$vertxNext;
    var lib$es6$promise$asap$$customSchedulerFn;

    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        if (lib$es6$promise$asap$$customSchedulerFn) {
          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
        } else {
          lib$es6$promise$asap$$scheduleFlush();
        }
      }
    }

    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
    }

    function lib$es6$promise$asap$$setAsap(asapFn) {
      lib$es6$promise$asap$$asap = asapFn;
    }

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // see https://github.com/cujojs/when/issues/410 for details
      return function() {
        process.nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertx() {
      try {
        var r = require;
        var vertx = r('vertx');
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && 'function' === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }
    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
      var parent = this;

      var child = new this.constructor(lib$es6$promise$$internal$$noop);

      if (child[lib$es6$promise$$internal$$PROMISE_ID] === undefined) {
        lib$es6$promise$$internal$$makePromise(child);
      }

      var state = parent._state;

      if (state) {
        var callback = arguments[state - 1];
        lib$es6$promise$asap$$asap(function(){
          lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result);
        });
      } else {
        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
      }

      return child;
    }
    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
    var lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16);

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFulfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$asap(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
      if (maybeThenable.constructor === promise.constructor &&
          then === lib$es6$promise$then$$default &&
          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    var lib$es6$promise$$internal$$id = 0;
    function lib$es6$promise$$internal$$nextId() {
      return lib$es6$promise$$internal$$id++;
    }

    function lib$es6$promise$$internal$$makePromise(promise) {
      promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++;
      promise._state = undefined;
      promise._result = undefined;
      promise._subscribers = [];
    }

    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      if (!lib$es6$promise$utils$$isArray(entries)) {
        return new Constructor(function(resolve, reject) {
          reject(new TypeError('You must pass an array to race.'));
        });
      } else {
        return new Constructor(function(resolve, reject) {
          var length = entries.length;
          for (var i = 0; i < length; i++) {
            Constructor.resolve(entries[i]).then(resolve, reject);
          }
        });
      }
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;


    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise's eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function lib$es6$promise$promise$$Promise(resolver) {
      this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId();
      this._result = this._state = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: lib$es6$promise$then$$default,

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };
    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      this._instanceConstructor = Constructor;
      this.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!this.promise[lib$es6$promise$$internal$$PROMISE_ID]) {
        lib$es6$promise$$internal$$makePromise(this.promise);
      }

      if (lib$es6$promise$utils$$isArray(input)) {
        this._input     = input;
        this.length     = input.length;
        this._remaining = input.length;

        this._result = new Array(this.length);

        if (this.length === 0) {
          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate();
          if (this._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError());
      }
    }

    function lib$es6$promise$enumerator$$validationError() {
      return new Error('Array Methods must be provided an Array');
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var length  = this.length;
      var input   = this._input;

      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        this._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var c = this._instanceConstructor;
      var resolve = c.resolve;

      if (resolve === lib$es6$promise$promise$resolve$$default) {
        var then = lib$es6$promise$$internal$$getThen(entry);

        if (then === lib$es6$promise$then$$default &&
            entry._state !== lib$es6$promise$$internal$$PENDING) {
          this._settledAt(entry._state, i, entry._result);
        } else if (typeof then !== 'function') {
          this._remaining--;
          this._result[i] = entry;
        } else if (c === lib$es6$promise$promise$$default) {
          var promise = new c(lib$es6$promise$$internal$$noop);
          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
          this._willSettleAt(promise, i);
        } else {
          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
        }
      } else {
        this._willSettleAt(resolve(entry), i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var promise = this.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        this._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          this._result[i] = value;
        }
      }

      if (this._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, this._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

      if (typeof commonjsGlobal !== 'undefined') {
          local = commonjsGlobal;
      } else if (typeof self !== 'undefined') {
          local = self;
      } else {
          try {
              local = Function('return this')();
          } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
          }
      }

      var P = local.Promise;

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return lib$es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = lib$es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
    }

    lib$es6$promise$polyfill$$default();
}).call(commonjsGlobal);
});

var version = "3.1.0";
var hash = 56659272;
var breakpoints = {"s":"480px","m":"640px","l":"720px","xl":"960px","xxl":"1100px","xxxl":"1250px","xxxxl":"1600px","minheight":"'(min-height: 480px)'"};
var shared = {
	version: version,
	hash: hash,
	breakpoints: breakpoints,
	"font-config": {"default":{"family":"'Geomanist'","fallback":"'Helvetica, Arial, sans-serif'","weight":600,"style":"normal","line-height":1.3333,"fontface":true,"file":"'geomanist-medium'"},"regular":{"family":"'Geomanist'","fallback":"'Helvetica, Arial, sans-serif'","weight":400,"style":"normal","fontface":true,"file":"'geomanist-regular'"},"code":{"family":"'Inconsolata'","fallback":"'Hack, Menlo, Courier, monospace'","weight":400,"style":"normal","line-height":1.2,"fontface":false}},
	"font-sizes": {"h1":"64px","h1-mobile":"36px","h2":"48px","h3":"24px","h4":"18px","small":"14px","default":"24px"}
};

var fontConfig = shared['font-config'];

var fonts = (function () {
  var fontObservers = [];

  Object.keys(fontConfig).forEach(function (font) {
    if (fontConfig[font].fontface) {

      fontObservers.push(new fontfaceobserver_standalone(fontConfig[font].family.replace(/'/g, ''), {
        weight: fontConfig[font].weight,
        style: fontConfig[font].style
      }));
    }
  });

  if (fontObservers.length >= 1) {
    es6Promise.polyfill();

    Promise.all(fontObservers).then(function () {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
});

var nav = (function () {
  var nav = document.querySelector('.js-nav');
  var button = document.querySelector('.js-toggle-nav');
  var header = document.querySelector('.js-header');

  // navigation button on click, basic toggling of classes
  if (button) {
    button.addEventListener('click', function () {
      nav.classList.toggle('nav--active');
      header.classList.toggle('header--nav--active');
    });
  }
});

var baguetteBox_min = createCommonjsModule(function (module, exports) {
/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.8.0
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.baguetteBox=e()}(commonjsGlobal,function(){"use strict";function t(t,n){M.transforms=k(),M.svg=w(),i(),o(t),e(t,n)}function e(t,e){var n=document.querySelectorAll(t),o={galleries:[],nodeList:n};U[t]=o,[].forEach.call(n,function(t){e&&e.filter&&(V=e.filter);var n=[];if(n="A"===t.tagName?[t]:t.getElementsByTagName("a"),n=[].filter.call(n,function(t){return V.test(t.href)}),0!==n.length){var i=[];[].forEach.call(n,function(t,n){var o=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,u(i,e),c(n)},a={eventHandler:o,imageElement:t};E(t,"click",o),i.push(a)}),o.galleries.push(i)}})}function n(){for(var t in U)U.hasOwnProperty(t)&&o(t)}function o(t){if(U.hasOwnProperty(t)){var e=U[t].galleries;[].forEach.call(e,function(t){[].forEach.call(t,function(t){B(t.imageElement,"click",t.eventHandler)}),R===t&&(R=[])}),delete U[t]}}function i(){return(S=T("baguetteBox-overlay"))?(P=T("baguetteBox-slider"),F=T("previous-button"),H=T("next-button"),void(L=T("close-button"))):(S=N("div"),S.setAttribute("role","dialog"),S.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(S),P=N("div"),P.id="baguetteBox-slider",S.appendChild(P),F=N("button"),F.setAttribute("type","button"),F.id="previous-button",F.setAttribute("aria-label","Previous"),F.innerHTML=M.svg?I:"&lt;",S.appendChild(F),H=N("button"),H.setAttribute("type","button"),H.id="next-button",H.setAttribute("aria-label","Next"),H.innerHTML=M.svg?Y:"&gt;",S.appendChild(H),L=N("button"),L.setAttribute("type","button"),L.id="close-button",L.setAttribute("aria-label","Close"),L.innerHTML=M.svg?q:"&times",S.appendChild(L),F.className=H.className=L.className="baguetteBox-button",void r())}function a(t){switch(t.keyCode){case 37:v();break;case 39:h();break;case 27:p()}}function r(){E(S,"click",J),E(F,"click",K),E(H,"click",Q),E(L,"click",Z),E(S,"touchstart",$),E(S,"touchmove",_),E(S,"touchend",tt),E(document,"focus",et,!0)}function l(){B(S,"click",J),B(F,"click",K),B(H,"click",Q),B(L,"click",Z),B(S,"touchstart",$),B(S,"touchmove",_),B(S,"touchend",tt),B(document,"focus",et,!0)}function u(t,e){if(R!==t){for(R=t,s(e);P.firstChild;)P.removeChild(P.firstChild);W.length=0;for(var n,o=[],i=[],a=0;a<t.length;a++)n=N("div"),n.className="full-image",n.id="baguette-img-"+a,W.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),P.appendChild(W[a]);S.setAttribute("aria-labelledby",o.join(" ")),S.setAttribute("aria-describedby",i.join(" "))}}function s(t){t||(t={});for(var e in X)j[e]=X[e],"undefined"!=typeof t[e]&&(j[e]=t[e]);P.style.transition=P.style.webkitTransition="fadeIn"===j.animation?"opacity .4s ease":"slideIn"===j.animation?"":"none","auto"===j.buttons&&("ontouchstart"in window||1===R.length)&&(j.buttons=!1),F.style.display=H.style.display=j.buttons?"":"none";try{S.style.backgroundColor=j.overlayBackgroundColor}catch(n){}}function c(t){j.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==S.style.display&&(E(document,"keydown",a),z=t,D={count:0,startX:null,startY:null},m(z,function(){x(z),C(z)}),y(),S.style.display="block",j.fullScreen&&f(),setTimeout(function(){S.className="visible",j.afterShow&&j.afterShow()},50),j.onChange&&j.onChange(z,W.length),G=document.activeElement,d())}function d(){j.buttons?F.focus():L.focus()}function f(){S.requestFullscreen?S.requestFullscreen():S.webkitRequestFullscreen?S.webkitRequestFullscreen():S.mozRequestFullScreen&&S.mozRequestFullScreen()}function g(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function p(){j.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==S.style.display&&(B(document,"keydown",a),S.className="",setTimeout(function(){S.style.display="none",g(),j.afterHide&&j.afterHide()},500),G.focus())}function m(t,e){var n=W[t];if("undefined"!=typeof n){if(n.getElementsByTagName("img")[0])return void(e&&e());var o=R[t].imageElement,i=o.getElementsByTagName("img")[0],a="function"==typeof j.captions?j.captions.call(R,o):o.getAttribute("data-caption")||o.title,r=b(o),l=N("figure");if(l.id="baguetteBox-figure-"+t,l.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',j.captions&&a){var u=N("figcaption");u.id="baguetteBox-figcaption-"+t,u.innerHTML=a,l.appendChild(u)}n.appendChild(l);var s=N("img");s.onload=function(){var n=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");l.removeChild(n),!j.async&&e&&e()},s.setAttribute("src",r),s.alt=i?i.alt||"":"",j.titleTag&&a&&(s.title=a),l.appendChild(s),j.async&&e&&e()}}function b(t){var e=t.href;if(t.dataset){var n=[];for(var o in t.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=t.dataset[o]);for(var i=Object.keys(n).sort(function(t,e){return parseInt(t,10)<parseInt(e,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,r=0;r<i.length-1&&i[r]<a;)r++;e=n[i[r]]||e}return e}function h(){var t;return z<=W.length-2?(z++,y(),x(z),t=!0):j.animation&&(P.className="bounce-from-right",setTimeout(function(){P.className=""},400),t=!1),j.onChange&&j.onChange(z,W.length),t}function v(){var t;return z>=1?(z--,y(),C(z),t=!0):j.animation&&(P.className="bounce-from-left",setTimeout(function(){P.className=""},400),t=!1),j.onChange&&j.onChange(z,W.length),t}function y(){var t=100*-z+"%";"fadeIn"===j.animation?(P.style.opacity=0,setTimeout(function(){M.transforms?P.style.transform=P.style.webkitTransform="translate3d("+t+",0,0)":P.style.left=t,P.style.opacity=1},400)):M.transforms?P.style.transform=P.style.webkitTransform="translate3d("+t+",0,0)":P.style.left=t}function k(){var t=N("div");return"undefined"!=typeof t.style.perspective||"undefined"!=typeof t.style.webkitPerspective}function w(){var t=N("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI)}function x(t){t-z>=j.preload||m(t+1,function(){x(t+1)})}function C(t){z-t>=j.preload||m(t-1,function(){C(t-1)})}function E(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent("on"+e,n)}function B(t,e,n,o){t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent("on"+e,n)}function T(t){return document.getElementById(t)}function N(t){return document.createElement(t)}function A(){l(),n(),B(document,"keydown",a),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),U={},R=[],z=0}var S,P,F,H,L,I='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',Y='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',q='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',j={},X={captions:!0,fullScreen:!1,noScrollbars:!1,titleTag:!1,buttons:"auto",async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},M={},R=[],z=0,D={},O=!1,V=/.+\.(gif|jpe?g|png|webp)/i,U={},W=[],G=null,J=function(t){-1!==t.target.id.indexOf("baguette-img")&&p()},K=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,v()},Q=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,h()},Z=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,p()},$=function(t){D.count++,D.count>1&&(D.multitouch=!0),D.startX=t.changedTouches[0].pageX,D.startY=t.changedTouches[0].pageY},_=function(t){if(!O&&!D.multitouch){t.preventDefault?t.preventDefault():t.returnValue=!1;var e=t.touches[0]||t.changedTouches[0];e.pageX-D.startX>40?(O=!0,v()):e.pageX-D.startX<-40?(O=!0,h()):D.startY-e.pageY>100&&p()}},tt=function(){D.count--,D.count<=0&&(D.multitouch=!1),O=!1},et=function(t){"block"!==S.style.display||S.contains(t.target)||(t.stopPropagation(),d())};return[].forEach||(Array.prototype.forEach=function(t,e){for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),[].filter||(Array.prototype.filter=function(t,e,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)t.call(e,n[i],i,n)&&o.push(n[i]);return o}),{run:t,destroy:A,showNext:h,showPrevious:v}});
});

var gallery = (function () {
  baguetteBox_min.run('.js-gallery');
});

var loadJS = createCommonjsModule(function (module) {
/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
(function( w ){
	var loadJS = function( src, cb ){
		"use strict";
		var ref = w.document.getElementsByTagName( "script" )[ 0 ];
		var script = w.document.createElement( "script" );
		script.src = src;
		script.async = true;
		ref.parentNode.insertBefore( script, ref );
		if (cb && typeof(cb) === "function") {
			script.onload = cb;
		}
		return script;
	};
	// commonjs
	if( typeof module !== "undefined" ){
		module.exports = loadJS;
	}
	else {
		w.loadJS = loadJS;
	}
}( typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal ));
});

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var highlight = (function () {
  var pre = document.querySelectorAll('pre');

  // if there are any pre-elements on the page, load the code-highlighting
  // plugin with filamentgroups load-js, and then execute it on every pre
  if (pre.length > 0) {
    // load the highlight js
    loadJS('/assets/js/highlight.min.js', function () {
      [].concat(toConsumableArray(pre)).forEach(function (codeblock) {
        window.hljs.highlightBlock(codeblock);
      });
    });
  }
});

var buttons = document.querySelectorAll('.js-code');

var hideWelcome = function hideWelcome() {
  document.getElementById('close-welcome').setAttribute('checked', 'checked');
};

var injectSourcebox = function injectSourcebox(html) {
  var sourcebox = document.createElement('div');

  sourcebox.classList.add('sourcebox');
  sourcebox.innerHTML = '\n    <div class="sourcebox__inner">\n      <pre><code class="language-html js-sourcebox"></code></pre>\n    </div>\n  ';

  document.body.appendChild(sourcebox);
  document.querySelector('.js-sourcebox').textContent = html;
  highlight();
  hideWelcome();
};

var buttonClick = function buttonClick() {
  var sourcebox = document.querySelector('.sourcebox');

  // get the sourcecode for the page, if it is not already shown, via ajax
  if (!sourcebox) {
    var request = new XMLHttpRequest();

    request.open('GET', window.location.href, true);
    request.onload = function ajaxCall() {
      if (this.status >= 200 && this.status < 400) {
        injectSourcebox(this.response);
      }
    };

    request.send();
  } else {
    // remove the sourcebox
    document.body.removeChild(sourcebox);
  }
};

// set the click events, if the code button is clicked, show
// the sourcecode of the page, just a small gimmick ;)
var sourcecode = (function () {
  [].concat(toConsumableArray(buttons)).forEach(function (button) {
    button.addEventListener('click', buttonClick);
  });
});

var breakpoints$1 = shared.breakpoints;

// same usage as the mediaquery-scss-mixin, just
// provide the shortcode used in the scss-file and if it
// is a custom query. this module return true if the
// given breakpoint matches or false if it doesnt

var mq = (function (shortcode) {
  var custom = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var value = breakpoints$1[shortcode];
  var query = '';

  if (custom) {
    // if we have a custom query, use 'as is', remove quotes
    query = breakpoints$1[shortcode].replace(/'/g, '');
  } else if (value.match('px')) {
    // we have the default min-width
    // convert to em-value if it is a pixel-value
    var pxValue = parseInt(value);
    var emValue = pxValue / 16;

    query = '(min-width: ' + emValue + 'em)';
  } else {
    // use the value as it is
    query = '(min-width: ' + value + ')';
  }

  // return the matches boolean
  return window.matchMedia(query).matches;
});

var clicksection = (function (link) {
  // this adds a delay to the section-change click-action,
  // faking a slide transition by adding the --change class

  link.classList.add('link-section--change');

  window.setTimeout(function () {
    window.location.href = link.getAttribute('href');
  }, 300); // animation is 400ms, so wait 300ms
});

var sectionLinks = document.querySelectorAll('.js-sectionchange');
var links = document.querySelectorAll('.js-nav__link');
var page = document.querySelector('.js-page');

// simulate sectionchange for navigation clicks on large displays
// but only if we are on contact/work/blog/legal-notice pages
var changeSections = mq('xl') && (page.classList.contains('page--work') || page.classList.contains('page--contact') || page.classList.contains('page--blog') || page.classList.contains('page--legal-notice'));

var menuClick = function menuClick(link) {
  var target = link.getAttribute('data-target');
  var sections = ['work', 'fake', 'blog', 'contact'];
  var sectionLink = document.querySelector('.link-section--' + target);

  // if the sectionchange link does not exist, the modify the one existing
  // and change color + target
  if (!sectionLink) {
    sectionLink = document.querySelector('.link-section');
    sections.forEach(function (sec) {
      sectionLink.classList.remove('link-section--' + sec);
    });
    sectionLink.setAttribute('href', link.getAttribute('href'));
    sectionLink.classList.add('link-section--' + target);
  }

  clicksection(sectionLink);
};

var sectionchange = (function () {
  // always apply this event to all the sectionlinks
  [].concat(toConsumableArray(sectionLinks)).forEach(function (sectionLink) {
    sectionLink.addEventListener('click', function (e) {
      e.preventDefault();
      clicksection(sectionLink);
    }, false);
  });

  // and to the menu links if needed
  if (changeSections) {
    [].concat(toConsumableArray(links)).forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        menuClick(link);
      });
    });
  }
});

var closeWelcome = document.getElementById('close-welcome');

var welcomeDone = function welcomeDone() {
  window.setTimeout(function () {
    document.querySelector('.js-welcome').classList.add('welcome--done');
  }, 800); // animation time is 700ms
};

var welcome = (function () {
  // set the event to the esc-key to dismiss splash intro
  document.onkeydown = function (e) {
    var event = e || window.event;
    var isHomepage = document.body.classList.contains('site--homepage');

    if (event.keyCode === 27 && isHomepage && closeWelcome) {
      closeWelcome.setAttribute('checked', 'checked');
      welcomeDone();
    }
  };

  // remove the transition after it changed
  if (closeWelcome) {
    closeWelcome.addEventListener('change', welcomeDone);
    closeWelcome.addEventListener('click', welcomeDone);
  }
});

/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.21
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
    'use strict';
    if (window && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems;
        var tid; // timeout id
        var debouncedCheck = function () {
            clearTimeout(tid);
            tid = setTimeout(checkUseElems, 100);
        };
        var unobserveChanges = function () {
            return;
        };
        var observeChanges = function () {
            var observer;
            window.addEventListener('resize', debouncedCheck, false);
            window.addEventListener('orientationchange', debouncedCheck, false);
            if (window.MutationObserver) {
                observer = new MutationObserver(debouncedCheck);
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    attributes: true
                });
                unobserveChanges = function () {
                    try {
                        observer.disconnect();
                        window.removeEventListener('resize', debouncedCheck, false);
                        window.removeEventListener('orientationchange', debouncedCheck, false);
                    } catch (ignore) {}
                };
            } else {
                document.documentElement.addEventListener('DOMSubtreeModified', debouncedCheck, false);
                unobserveChanges = function () {
                    document.documentElement.removeEventListener('DOMSubtreeModified', debouncedCheck, false);
                    window.removeEventListener('resize', debouncedCheck, false);
                    window.removeEventListener('orientationchange', debouncedCheck, false);
                };
            }
        };
        var createRequest = function (url) {
            // In IE 9, cross domain requests can only be sent using XDomainRequest.
            // XDomainRequest would fail if CORS headers are not set.
            // Therefore, XDomainRequest should only be used with cross domain requests.
            function getHostname(href) {
                var a = document.createElement('a');
                a.href = href;
                return a.hostname;
            }
            var Request;
            var hname = location.hostname;
            var hname2;
            if (window.XMLHttpRequest) {
                Request = new XMLHttpRequest();
                hname2 = getHostname(url);
                if (Request.withCredentials === undefined && hname2 !== '' && hname2 !== hname) {
                    Request = XDomainRequest || undefined;
                } else {
                    Request = XMLHttpRequest;
                }
            }
            return Request;
        };
        var xlinkNS = 'http://www.w3.org/1999/xlink';
        checkUseElems = function () {
            var base;
            var bcr;
            var fallback = ''; // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
            var hash;
            var href;
            var i;
            var inProgressCount = 0;
            var isHidden;
            var Request;
            var url;
            var uses;
            var xhr;
            function observeIfDone() {
                // If done with making changes, start watching for chagnes in DOM again
                inProgressCount -= 1;
                if (inProgressCount === 0) { // if all xhrs were resolved
                    unobserveChanges(); // make sure to remove old handlers
                    observeChanges(); // watch for changes to DOM
                }
            }
            function attrUpdateFunc(spec) {
                return function () {
                    if (cache[spec.base] !== true) {
                        spec.useEl.setAttributeNS(xlinkNS, 'xlink:href', '#' + spec.hash);
                    }
                };
            }
            function onloadFunc(xhr) {
                return function () {
                    var body = document.body;
                    var x = document.createElement('x');
                    var svg;
                    xhr.onload = null;
                    x.innerHTML = xhr.responseText;
                    svg = x.getElementsByTagName('svg')[0];
                    if (svg) {
                        svg.setAttribute('aria-hidden', 'true');
                        svg.style.position = 'absolute';
                        svg.style.width = 0;
                        svg.style.height = 0;
                        svg.style.overflow = 'hidden';
                        body.insertBefore(svg, body.firstChild);
                    }
                    observeIfDone();
                };
            }
            function onErrorTimeout(xhr) {
                return function () {
                    xhr.onerror = null;
                    xhr.ontimeout = null;
                    observeIfDone();
                };
            }
            unobserveChanges(); // stop watching for changes to DOM
            // find all use elements
            uses = document.getElementsByTagName('use');
            for (i = 0; i < uses.length; i += 1) {
                try {
                    bcr = uses[i].getBoundingClientRect();
                } catch (ignore) {
                    // failed to get bounding rectangle of the use element
                    bcr = false;
                }
                href = uses[i].getAttributeNS(xlinkNS, 'href');
                if (href && href.split) {
                    url = href.split('#');
                } else {
                    url = ["", ""];
                }
                base = url[0];
                hash = url[1];
                isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
                if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
                    // the use element is empty
                    // if there is a reference to an external SVG, try to fetch it
                    // use the optional fallback URL if there is no reference to an external SVG
                    if (fallback && !base.length && hash && !document.getElementById(hash)) {
                        base = fallback;
                    }
                    if (base.length) {
                        // schedule updating xlink:href
                        xhr = cache[base];
                        if (xhr !== true) {
                            // true signifies that prepending the SVG was not required
                            setTimeout(attrUpdateFunc({
                                useEl: uses[i],
                                base: base,
                                hash: hash
                            }), 0);
                        }
                        if (xhr === undefined) {
                            Request = createRequest(base);
                            if (Request !== undefined) {
                                xhr = new Request();
                                cache[base] = xhr;
                                xhr.onload = onloadFunc(xhr);
                                xhr.onerror = onErrorTimeout(xhr);
                                xhr.ontimeout = onErrorTimeout(xhr);
                                xhr.open('GET', base);
                                xhr.send();
                                inProgressCount += 1;
                            }
                        }
                    }
                } else {
                    if (!isHidden) {
                        if (cache[base] === undefined) {
                            // remember this URL if the use element was not empty and no request was sent
                            cache[base] = true;
                        } else if (cache[base].onload) {
                            // if it turns out that prepending the SVG is not necessary,
                            // abort the in-progress xhr.
                            cache[base].abort();
                            delete cache[base].onload;
                            cache[base] = true;
                        }
                    } else if (base.length && cache[base]) {
                        attrUpdateFunc({
                            useEl: uses[i],
                            base: base,
                            hash: hash
                        })();
                    }
                }
            }
            uses = '';
            inProgressCount += 1;
            observeIfDone();
        };
        // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
        window.addEventListener('load', function winLoad() {
            window.removeEventListener('load', winLoad, false); // to prevent memory leaks
            tid = setTimeout(checkUseElems, 0);
        }, false);
    }
}());

var picturefill = createCommonjsModule(function (module) {
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) ) {
		addEventListener("resize", (function() {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function() {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function() {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		})());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function( window, document, undefined ) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	document.createElement( "picture" );

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function() {};
	var image = document.createElement( "img" );
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
	 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	 */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement( "a" );
	/**
	 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	 * @type {boolean}
	 */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,

	    // ( Positive or negative or unsigned integers or decimals, without or without exponents.
	    // Must include at least one digit.
	    // According to spec tests any decimal point must be followed by a digit.
	    // No leading plus sign is allowed.)
	    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function(obj, evt, fn, capture) {
		if ( obj.addEventListener ) {
			obj.addEventListener(evt, fn, capture || false);
		} else if ( obj.attachEvent ) {
			obj.attachEvent( "on" + evt, fn);
		}
	};

	/**
	 * simple memoize function:
	 */

	var memoize = function(fn) {
		var cache = {};
		return function(input) {
			if ( !(input in cache) ) {
				cache[ input ] = fn(input);
			}
			return cache[ input ];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return (c === "\u0020" || // space
		        c === "\u0009" || // horizontal tab
		        c === "\u000A" || // new line
		        c === "\u000C" || // form feed
		        c === "\u000D");  // carriage return
	}

	/**
	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
	 * @param css mediaqueries or css length
	 * @returns {boolean|number}
	 *
	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	 */
	var evalCSS = (function() {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function() {
			var args = arguments, index = 0, string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function(css) {

			return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",

				// interpret `,`
				/,/g, "||",

				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",

				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",

				//calc value
				/calc([^)]+)/g, "($1)",

				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
			) + ";";
		});

		return function(css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match( regLength ))) {
					cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
				} else {
					/*jshint evil:true */
					try{
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch(e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	})();

	var setResolution = function( candidate, sizesattr ) {
		if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
			candidate.res = candidate.w / candidate.cWidth ;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
	 *
	 * @param opt
	 */
	var picturefill = function( opt ) {

		if (!isSupportTestReady) {return;}

		var elements, i, plen;

		var options = opt || {};

		if ( options.elements && options.elements.nodeType === 1 ) {
			if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
				options.elements =  [ options.elements ];
			} else {
				options.context = options.elements;
				options.elements =  null;
			}
		}

		elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

		if ( (plen = elements.length) ) {

			pf.setupRun( options );
			alreadyRun = true;

			// Loop through all elements
			for ( i = 0; i < plen; i++ ) {
				pf.fillImg(elements[ i ], options);
			}

			pf.teardownRun( options );
		}
	};

	/**
	 * outputs a warning for the developer
	 * @param {message}
	 * @type {Function}
	 */
	warn = ( window.console && console.warn ) ?
		function( message ) {
			console.warn( message );
		} :
		noop
	;

	if ( !(curSrcProp in image) ) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types[ "image/jpeg" ] = true;
	types[ "image/gif" ] = true;
	types[ "image/png" ] = true;

	function detectTypeSupport( type, typeUri ) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function() {
			types[ type ] = false;
			picturefill();
		};
		image.onload = function() {
			types[ type ] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

	/**
	 * updates the internal vW property with the current viewport width in px
	 */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [ units.height, units.width, DPR ].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData" ){
			if ( lowerValue > 2.7 ) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = (dprValue > 1) ?
				Math.sqrt(lowerValue * higherValue) :
				lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate( img ) {
		var srcSetCandidates;
		var matchingSet = pf.getSet( img );
		var evaluated = false;
		if ( matchingSet !== "pending" ) {
			evaluated = evalId;
			if ( matchingSet ) {
				srcSetCandidates = pf.setRes( matchingSet );
				pf.applySetCandidate( srcSetCandidates, img );
			}
		}
		img[ pf.ns ].evaled = evaluated;
	}

	function ascendingSort( a, b ) {
		return a.res - b.res;
	}

	function setSrcToCur( img, src, set ) {
		var candidate;
		if ( !set && src ) {
			set = img[ pf.ns ].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if ( candidate ) {
			src = pf.makeUrl(src);
			img[ pf.ns ].curSrc = src;
			img[ pf.ns ].curCan = candidate;

			if ( !candidate.res ) {
				setResolution( candidate, candidate.set.sizes );
			}
		}
		return candidate;
	}

	function getCandidateForSrc( src, set ) {
		var i, candidate, candidates;
		if ( src && set ) {
			candidates = pf.parseSet( set );
			src = pf.makeUrl(src);
			for ( i = 0; i < candidates.length; i++ ) {
				if ( src === pf.makeUrl(candidates[ i ].url) ) {
					candidate = candidates[ i ];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements( picture, candidates ) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName( "source" );

		for ( i = 0, len = sources.length; i < len; i++ ) {
			source = sources[ i ];
			source[ pf.ns ] = true;
			srcset = source.getAttribute( "srcset" );

			// if source does not have a srcset attribute, skip
			if ( srcset ) {
				candidates.push( {
					srcset: srcset,
					media: source.getAttribute( "media" ),
					type: source.getAttribute( "type" ),
					sizes: source.getAttribute( "sizes" )
				} );
			}
		}
	}

	/**
	 * Srcset Parser
	 * By Alex Bell |  MIT License
	 *
	 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	 *
	 * Based super duper closely on the reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	 */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[ 0 ];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,

		    // 2. Let position be a pointer into input, initially pointing at the start
		    //    of the string.
		    pos = 0,

		    // 3. Let candidates be an initially empty source set.
		    candidates = [];

		/**
		* Adds descriptor properties to a candidate, pushes to the candidates array
		* @return undefined
		*/
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,

			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			    w, d, h, i,
			    candidate = {},
			    desc, lastChar, value, intVal, floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0 ; i < descriptors.length; i++) {
				desc = descriptors[ i ];

				lastChar = desc[ desc.length - 1 ];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {pError = true;} else {w = intVal;}

				// If the descriptor consists of a valid floating-point number followed by
				// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {pError = true;}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {pError = true;} else {d = floatVal;}

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {pError = true;} else {h = intVal;}

				// Anything else, Let error be yes.
				} else {pError = true;}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) { candidate.w = w;}
				if (d) { candidate.d = d;}
				if (h) { candidate.h = h;}
				if (!h && !d && !w) {candidate.d = 1;}
				if (candidate.d === 1) {set.has1x = true;}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
		* Tokenizes descriptor properties prior to parsing
		* Returns undefined.
		* (Again, this fn is defined before it is used, in order to pass JSHINT.
		* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
		*/
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

				  // Space character
				  // If current descriptor is not empty, append current descriptor to
				  // descriptors and let current descriptor be the empty string.
				  // Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

					// U+002C COMMA (,)
					// Advance position to the next character in input. If current descriptor
					// is not empty, append current descriptor to descriptors. Jump to the step
					// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// U+0028 LEFT PARENTHESIS (()
					// Append c to current descriptor. Set state to in parens.
					} else if (c === "\u0028") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

					// EOF
					// If current descriptor is not empty, append current descriptor to
					// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
				// (end "in descriptor"

				// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

					// EOF
					// Append current descriptor to descriptors. Jump to the step labeled
					// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

				// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

					// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

					// Anything else
					// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;

					}
				}

				// Advance position to the next character in input.
				pos += 1;

			// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

			//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

		// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
	 * Sizes Parser
	 *
	 * By Alex Bell |  MIT License
	 *
	 * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	 *
	 * Reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	 *
	 * Most comments are copied in directly from the spec
	 * (except for comments in parens).
	 *
	 * Grammar is:
	 * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	 * <source-size> = <media-condition> <source-size-value>
	 * <source-size-value> = <length>
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	 *
	 * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	 * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	 *
	 * Returns the first valid <css-length> with a media condition that evaluates to true,
	 * or "100vw" if all valid media conditions evaluate to false.
	 *
	 */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") { // ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos +=1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
			if (regexCssCalc.test(s)) {return true;}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!(pf.matchesMedia( unparsedSize ) ) ) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function(image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function() {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();

	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
	 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	 */
	pf.DPR = (DPR  || 1 );
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types =  types;

	pf.setSize = noop;

	/**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */

	pf.makeUrl = memoize(function(src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
	 * Gets a DOM element or document and a selctor and returns the found matches
	 * Can be extended with jQuery/Sizzle for IE7 support
	 * @param context
	 * @param sel
	 * @returns {NodeList|Array}
	 */
	pf.qsa = function(context, sel) {
		return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
	};

	/**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 * wether native or pf.mMQ is used will be decided lazy on first call
	 * @returns {boolean}
	 */
	pf.matchesMedia = function() {
		if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
			pf.matchesMedia = function( media ) {
				return !media || ( matchMedia( media ).matches );
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply( this, arguments );
	};

	/**
	 * A simplified matchMedia implementation for IE8 and IE9
	 * handles only min-width/max-width with px or em values
	 * @param media
	 * @returns {boolean}
	 */
	pf.mMQ = function( media ) {
		return media ? evalCSS(media) : true;
	};

	/**
	 * Returns the calculated length in css pixel from the given sourceSizeValue
	 * http://dev.w3.org/csswg/css-values-3/#length-value
	 * intended Spec mismatches:
	 * * Does not check for invalid use of CSS functions
	 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	 * @param sourceSizeValue
	 * @returns {Number}
	 */
	pf.calcLength = function( sourceSizeValue ) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
	 * Takes a type string and checks if its supported
	 */

	pf.supportsType = function( type ) {
		return ( type ) ? types[ type ] : true;
	};

	/**
	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	 * @param sourceSizeStr
	 * @returns {*}
	 */
	pf.parseSize = memoize(function( sourceSizeStr ) {
		var match = ( sourceSizeStr || "" ).match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function( set ) {
		if ( !set.cands ) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
	 * returns 1em in css px for html/body default size
	 * function taken from respondjs
	 * @returns {*|number}
	 */
	pf.getEmValue = function() {
		var body;
		if ( !eminpx && (body = document.body) ) {
			var div = document.createElement( "div" ),
				originalHTMLCSS = docElem.style.cssText,
				originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild( div );
			eminpx = div.offsetWidth;
			body.removeChild( div );

			//also update eminpx before returning
			eminpx = parseFloat( eminpx, 10 );

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;

		}
		return eminpx || 16;
	};

	/**
	 * Takes a string of sizes and returns the width in pixels as a number
	 */
	pf.calcListLength = function( sourceSizeListStr ) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
			var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

			sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[ sourceSizeListStr ];
	};

	/**
	 * Takes a candidate object with a srcset property in the form of url/
	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	 *     "images/pic-small.png"
	 * Get an array of image candidates in the form of
	 *      {url: "/foo/bar.png", resolution: 1}
	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	 * If sizes is specified, res is calculated
	 */
	pf.setRes = function( set ) {
		var candidates;
		if ( set ) {

			candidates = pf.parseSet( set );

			for ( var i = 0, len = candidates.length; i < len; i++ ) {
				setResolution( candidates[ i ], set.sizes );
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function( candidates, img ) {
		if ( !candidates.length ) {return;}
		var candidate,
			i,
			j,
			length,
			bestCandidate,
			curSrc,
			curCan,
			candidateSrc,
			abortCurSrc;

		var imageData = img[ pf.ns ];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if ( curCan && curCan.set === candidates[ 0 ].set ) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

			if ( !abortCurSrc ) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if ( curCan.res >= dpr ) {
					bestCandidate = curCan;
				}
			}
		}

		if ( !bestCandidate ) {

			candidates.sort( ascendingSort );

			length = candidates.length;
			bestCandidate = candidates[ length - 1 ];

			for ( i = 0; i < length; i++ ) {
				candidate = candidates[ i ];
				if ( candidate.res >= dpr ) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[ j ] &&
						(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
						chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

						bestCandidate = candidates[ j ];

					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if ( bestCandidate ) {

			candidateSrc = pf.makeUrl( bestCandidate.url );

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if ( candidateSrc !== curSrc ) {
				pf.setSrc( img, bestCandidate );
			}
			pf.setSize( img );
		}
	};

	pf.setSrc = function( img, bestCandidate ) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if ( bestCandidate.set.type === "image/svg+xml" ) {
			origWidth = img.style.width;
			img.style.width = (img.offsetWidth + 1) + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if ( img.offsetWidth + 1 ) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function( img ) {
		var i, set, supportsType;
		var match = false;
		var sets = img [ pf.ns ].sets;

		for ( i = 0; i < sets.length && !match; i++ ) {
			set = sets[i];

			if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
				continue;
			}

			if ( supportsType === "pending" ) {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function( element, parent, options ) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[ pf.ns ];

		if ( imageData.src === undefined || options.src ) {
			imageData.src = getImgAttr.call( element, "src" );
			if ( imageData.src ) {
				setImgAttr.call( element, srcAttr, imageData.src );
			} else {
				removeImgAttr.call( element, srcAttr );
			}
		}

		if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
			srcsetAttribute = getImgAttr.call( element, "srcset" );
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if ( hasPicture ) {
			imageData.pic = true;
			getAllSourceElements( parent, imageData.sets );
		}

		if ( imageData.srcset ) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call( element, "sizes" )
			};

			imageData.sets.push( imageSet );

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}

		} else if ( imageData.src ) {
			imageData.sets.push( {
				srcset: imageData.src,
				sizes: null
			} );
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

		if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
			if ( srcsetAttribute ) {
				setImgAttr.call( element, srcsetAttr, srcsetAttribute );
				element.srcset = "";
			} else {
				removeImgAttr.call( element, srcsetAttr );
			}
		}

		if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function(element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if ( !element[ pf.ns ] ) {
			element[ pf.ns ] = {};
		}

		imageData = element[ pf.ns ];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if ( !extreme && imageData.evaled === evalId ) {
			return;
		}

		if ( !imageData.parsed || options.reevaluate ) {
			pf.parseSets( element, element.parentNode, options );
		}

		if ( !imageData.supported ) {
			applyBestCandidate( element );
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function() {
		if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if ( pf.supPicture ) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		 // Set up picture polyfill by polling the document
		(function() {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
				if ( document.body ) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if ( isDomReady ) {
						clearTimeout( timerId );
					}

				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function(func, wait) {
				var timeout, timestamp;
				var later = function() {
					var last = (new Date()) - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function() {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if ( isVwDirty ) {
					pf.fillImgs();
				}
			};

			on( window, "resize", debounce(onResize, 99 ) );
			on( document, "readystatechange", run );
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs( { reselect: true } );
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// CommonJS, just export
		module.exports = picturefill;
	} else if ( typeof define === "function" && define.amd ) {
		// AMD support
		define( "picturefill", function() { return picturefill; } );
	}

	// IE8 evals this sync, so it must be the last thing we do
	if ( !pf.supPicture ) {
		types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
	}

} )( window, document );
});

// import any polyfills and other libs you want to use in older browsers here
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

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250ZmFjZW9ic2VydmVyL2ZvbnRmYWNlb2JzZXJ2ZXIuc3RhbmRhbG9uZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwiLi4vLi4vLi4vc3JjL2pzL21vZHVsZXMvZm9udHMuanMiLCIuLi8uLi8uLi9zcmMvanMvbW9kdWxlcy9uYXYuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFndWV0dGVib3guanMvZGlzdC9iYWd1ZXR0ZUJveC5taW4uanMiLCIuLi8uLi8uLi9zcmMvanMvbW9kdWxlcy9nYWxsZXJ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZnLWxvYWRqcy9sb2FkSlMuanMiLCIuLi8uLi8uLi9zcmMvanMvbW9kdWxlcy9oaWdobGlnaHQuanMiLCIuLi8uLi8uLi9zcmMvanMvbW9kdWxlcy9zb3VyY2Vjb2RlLmpzIiwiLi4vLi4vLi4vc3JjL2pzL21vZHVsZXMvbWVkaWFxdWVyeS5qcyIsIi4uLy4uLy4uL3NyYy9qcy9tb2R1bGVzL2NsaWNrc2VjdGlvbi5qcyIsIi4uLy4uLy4uL3NyYy9qcy9tb2R1bGVzL3NlY3Rpb25jaGFuZ2UuanMiLCIuLi8uLi8uLi9zcmMvanMvbW9kdWxlcy93ZWxjb21lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Z3h1c2Uvc3ZneHVzZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9waWN0dXJlZmlsbC9kaXN0L3BpY3R1cmVmaWxsLmpzIiwiLi4vLi4vLi4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbChhLGIpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsYiwhMSk6YS5hdHRhY2hFdmVudChcInNjcm9sbFwiLGIpfWZ1bmN0aW9uIG0oYSl7ZG9jdW1lbnQuYm9keT9hKCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uIGMoKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGMpO2EoKX0pOmRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsZnVuY3Rpb24gaygpe2lmKFwiaW50ZXJhY3RpdmVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZXx8XCJjb21wbGV0ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlKWRvY3VtZW50LmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsayksYSgpfSl9O2Z1bmN0aW9uIHEoYSl7dGhpcy5hPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dGhpcy5hLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpO3RoaXMuYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSk7dGhpcy5iPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5mPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZz0tMTt0aGlzLmIuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO3RoaXMuYy5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7XG50aGlzLmYuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO3RoaXMuaC5zdHlsZS5jc3NUZXh0PVwiZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjAwJTtoZWlnaHQ6MjAwJTtmb250LXNpemU6MTZweDttYXgtd2lkdGg6bm9uZTtcIjt0aGlzLmIuYXBwZW5kQ2hpbGQodGhpcy5oKTt0aGlzLmMuYXBwZW5kQ2hpbGQodGhpcy5mKTt0aGlzLmEuYXBwZW5kQ2hpbGQodGhpcy5iKTt0aGlzLmEuYXBwZW5kQ2hpbGQodGhpcy5jKX1cbmZ1bmN0aW9uIHcoYSxiKXthLmEuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO21pbi13aWR0aDoyMHB4O21pbi1oZWlnaHQ6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bzttYXJnaW46MDtwYWRkaW5nOjA7dG9wOi05OTlweDtsZWZ0Oi05OTlweDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udDpcIitiK1wiO1wifWZ1bmN0aW9uIHgoYSl7dmFyIGI9YS5hLm9mZnNldFdpZHRoLGM9YisxMDA7YS5mLnN0eWxlLndpZHRoPWMrXCJweFwiO2EuYy5zY3JvbGxMZWZ0PWM7YS5iLnNjcm9sbExlZnQ9YS5iLnNjcm9sbFdpZHRoKzEwMDtyZXR1cm4gYS5nIT09Yj8oYS5nPWIsITApOiExfWZ1bmN0aW9uIHooYSxiKXtmdW5jdGlvbiBjKCl7dmFyIGE9azt4KGEpJiZudWxsIT09YS5hLnBhcmVudE5vZGUmJmIoYS5nKX12YXIgaz1hO2woYS5iLGMpO2woYS5jLGMpO3goYSl9O2Z1bmN0aW9uIEEoYSxiKXt2YXIgYz1ifHx7fTt0aGlzLmZhbWlseT1hO3RoaXMuc3R5bGU9Yy5zdHlsZXx8XCJub3JtYWxcIjt0aGlzLndlaWdodD1jLndlaWdodHx8XCJub3JtYWxcIjt0aGlzLnN0cmV0Y2g9Yy5zdHJldGNofHxcIm5vcm1hbFwifXZhciBCPW51bGwsQz1udWxsLEQ9bnVsbDtmdW5jdGlvbiBIKCl7aWYobnVsbD09PUMpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e2Euc3R5bGUuZm9udD1cImNvbmRlbnNlZCAxMDBweCBzYW5zLXNlcmlmXCJ9Y2F0Y2goYil7fUM9XCJcIiE9PWEuc3R5bGUuZm9udH1yZXR1cm4gQ31mdW5jdGlvbiBJKGEsYil7cmV0dXJuW2Euc3R5bGUsYS53ZWlnaHQsSCgpP2Euc3RyZXRjaDpcIlwiLFwiMTAwcHhcIixiXS5qb2luKFwiIFwiKX1cbkEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGs9YXx8XCJCRVNic3d5XCIseT1ifHwzRTMsRT0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtudWxsPT09RCYmKEQ9ISFkb2N1bWVudC5mb250cyk7aWYoRCl7dmFyIEo9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBlKCl7KG5ldyBEYXRlKS5nZXRUaW1lKCktRT49eT9iKCk6ZG9jdW1lbnQuZm9udHMubG9hZChJKGMsJ1wiJytjLmZhbWlseSsnXCInKSxrKS50aGVuKGZ1bmN0aW9uKGMpezE8PWMubGVuZ3RoP2EoKTpzZXRUaW1lb3V0KGUsMjUpfSxmdW5jdGlvbigpe2IoKX0pfWUoKX0pLEs9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxjKXtzZXRUaW1lb3V0KGMseSl9KTtQcm9taXNlLnJhY2UoW0ssSl0pLnRoZW4oZnVuY3Rpb24oKXthKGMpfSxmdW5jdGlvbigpe2IoYyl9KX1lbHNlIG0oZnVuY3Rpb24oKXtmdW5jdGlvbiByKCl7dmFyIGI7aWYoYj1cbi0xIT1mJiYtMSE9Z3x8LTEhPWYmJi0xIT1ofHwtMSE9ZyYmLTEhPWgpKGI9ZiE9ZyYmZiE9aCYmZyE9aCl8fChudWxsPT09QiYmKGI9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLEI9ISFiJiYoNTM2PnBhcnNlSW50KGJbMV0sMTApfHw1MzY9PT1wYXJzZUludChiWzFdLDEwKSYmMTE+PXBhcnNlSW50KGJbMl0sMTApKSksYj1CJiYoZj09dCYmZz09dCYmaD09dHx8Zj09dSYmZz09dSYmaD09dXx8Zj09diYmZz09diYmaD09dikpLGI9IWI7YiYmKG51bGwhPT1kLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxjbGVhclRpbWVvdXQoRyksYShjKSl9ZnVuY3Rpb24gRigpe2lmKChuZXcgRGF0ZSkuZ2V0VGltZSgpLUU+PXkpbnVsbCE9PWQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGIoYyk7ZWxzZXt2YXIgYT1kb2N1bWVudC5oaWRkZW47aWYoITA9PT1hfHxcbnZvaWQgMD09PWEpZj1lLmEub2Zmc2V0V2lkdGgsZz1uLmEub2Zmc2V0V2lkdGgsaD1wLmEub2Zmc2V0V2lkdGgscigpO0c9c2V0VGltZW91dChGLDUwKX19dmFyIGU9bmV3IHEoayksbj1uZXcgcShrKSxwPW5ldyBxKGspLGY9LTEsZz0tMSxoPS0xLHQ9LTEsdT0tMSx2PS0xLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxHPTA7ZC5kaXI9XCJsdHJcIjt3KGUsSShjLFwic2Fucy1zZXJpZlwiKSk7dyhuLEkoYyxcInNlcmlmXCIpKTt3KHAsSShjLFwibW9ub3NwYWNlXCIpKTtkLmFwcGVuZENoaWxkKGUuYSk7ZC5hcHBlbmRDaGlsZChuLmEpO2QuYXBwZW5kQ2hpbGQocC5hKTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGQpO3Q9ZS5hLm9mZnNldFdpZHRoO3U9bi5hLm9mZnNldFdpZHRoO3Y9cC5hLm9mZnNldFdpZHRoO0YoKTt6KGUsZnVuY3Rpb24oYSl7Zj1hO3IoKX0pO3coZSxJKGMsJ1wiJytjLmZhbWlseSsnXCIsc2Fucy1zZXJpZicpKTt6KG4sZnVuY3Rpb24oYSl7Zz1hO3IoKX0pO1xudyhuLEkoYywnXCInK2MuZmFtaWx5KydcIixzZXJpZicpKTt6KHAsZnVuY3Rpb24oYSl7aD1hO3IoKX0pO3cocCxJKGMsJ1wiJytjLmZhbWlseSsnXCIsbW9ub3NwYWNlJykpfSl9KX07XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9QTood2luZG93LkZvbnRGYWNlT2JzZXJ2ZXI9QSx3aW5kb3cuRm9udEZhY2VPYnNlcnZlci5wcm90b3R5cGUubG9hZD1BLnByb3RvdHlwZS5sb2FkKTt9KCkpO1xuIiwiLyohXG4gKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2pha2VhcmNoaWJhbGQvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgMy4yLjFcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc01heWJlVGhlbmFibGUoeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5O1xuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5ID0gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9IDA7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR2ZXJ0eE5leHQ7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRjdXN0b21TY2hlZHVsZXJGbjtcblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcCA9IGZ1bmN0aW9uIGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2xpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW5dID0gY2FsbGJhY2s7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiArIDFdID0gYXJnO1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiArPSAyO1xuICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPT09IDIpIHtcbiAgICAgICAgLy8gSWYgbGVuIGlzIDIsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgICAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuICAgICAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG4gICAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm4pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm4obGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldFNjaGVkdWxlcihzY2hlZHVsZUZuKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm4gPSBzY2hlZHVsZUZuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRBc2FwKGFzYXBGbikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBhc2FwRm47XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyV2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyB8fCB7fTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNOb2RlID0gdHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbiAgICAvLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAvLyBub2RlXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU5leHRUaWNrKCkge1xuICAgICAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2N1am9qcy93aGVuL2lzc3Vlcy80MTAgZm9yIGRldGFpbHNcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB2ZXJ0eFxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VWZXJ0eFRpbWVyKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0KGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcihsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBub2RlLmRhdGEgPSAoaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB3ZWIgd29ya2VyXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoLCAxKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2goKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW47IGkrPTIpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2ldO1xuICAgICAgICB2YXIgYXJnID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2krMV07XG5cbiAgICAgICAgY2FsbGJhY2soYXJnKTtcblxuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpKzFdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXR0ZW1wdFZlcnR4KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHIgPSByZXF1aXJlO1xuICAgICAgICB2YXIgdmVydHggPSByKCd2ZXJ0eCcpO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0ID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VWZXJ0eFRpbWVyKCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoO1xuICAgIC8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG4gICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc05vZGUpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU5leHRUaWNrKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc1dvcmtlcikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyV2luZG93ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGF0dGVtcHRWZXJ0eCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR0aGVuJCR0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcztcblxuICAgICAgdmFyIGNoaWxkID0gbmV3IHRoaXMuY29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG5cbiAgICAgIGlmIChjaGlsZFtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG1ha2VQcm9taXNlKGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1tzdGF0ZSAtIDFdO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChmdW5jdGlvbigpe1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHN0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHBhcmVudC5fcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSR0aGVuJCR0aGVuO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJHJlc29sdmUob2JqZWN0KSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkcmVzb2x2ZTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygxNik7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKCkge31cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HICAgPSB2b2lkIDA7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCA9IDE7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEICA9IDI7XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IgPSBuZXcgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHNlbGZGdWxmaWxsbWVudCgpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4ocHJvbWlzZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbjtcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeVRoZW4odGhlbiwgdmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgdmFyIHNlYWxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3IgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHRoZW5hYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGlmIChzZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG5cbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSwgJ1NldHRsZTogJyArIChwcm9taXNlLl9sYWJlbCB8fCAnIHVua25vd24gcHJvbWlzZScpKTtcblxuICAgICAgICBpZiAoIXNlYWxlZCAmJiBlcnJvcikge1xuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUpIHtcbiAgICAgIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZSh0aGVuYWJsZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKSB7XG4gICAgICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgIHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0ICYmXG4gICAgICAgICAgY29uc3RydWN0b3IucmVzb2x2ZSA9PT0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGVuID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUikge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUi5lcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24odGhlbikpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc2VsZkZ1bGZpbGxtZW50KCkpO1xuICAgICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkdXRpbHMkJG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4odmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICAgICAgaWYgKHByb21pc2UuX29uZXJyb3IpIHtcbiAgICAgICAgcHJvbWlzZS5fb25lcnJvcihwcm9taXNlLl9yZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykgeyByZXR1cm47IH1cblxuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRDtcblxuICAgICAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoLCBwcm9taXNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEO1xuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gcmVhc29uO1xuXG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgIHZhciBzdWJzY3JpYmVycyA9IHBhcmVudC5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgbGVuZ3RoID0gc3Vic2NyaWJlcnMubGVuZ3RoO1xuXG4gICAgICBwYXJlbnQuX29uZXJyb3IgPSBudWxsO1xuXG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEXSAgPSBvblJlamVjdGlvbjtcblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXJlbnQuX3N0YXRlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwcm9taXNlLl9zdWJzY3JpYmVycztcbiAgICAgIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIHZhciBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCA9IHByb21pc2UuX3Jlc3VsdDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgICBjYWxsYmFjayA9IHN1YnNjcmliZXJzW2kgKyBzZXR0bGVkXTtcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCkge1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUiA9IG5ldyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SLmVycm9yID0gZTtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBwcm9taXNlLCBjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24oY2FsbGJhY2spLFxuICAgICAgICAgIHZhbHVlLCBlcnJvciwgc3VjY2VlZGVkLCBmYWlsZWQ7XG5cbiAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICB2YWx1ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SKSB7XG4gICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICBlcnJvciA9IHZhbHVlLmVycm9yO1xuICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGNhbm5vdFJldHVybk93bigpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBkZXRhaWw7XG4gICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAvLyBub29wXG4gICAgICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmFpbGVkKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpe1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkID0gMDtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRuZXh0SWQoKSB7XG4gICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaWQrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZShwcm9taXNlKSB7XG4gICAgICBwcm9taXNlW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaWQrKztcbiAgICAgIHByb21pc2UuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGFsbChlbnRyaWVzKSB7XG4gICAgICByZXR1cm4gbmV3IGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRkZWZhdWx0KHRoaXMsIGVudHJpZXMpLnByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRhbGwkJGFsbDtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRyYWNlKGVudHJpZXMpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgICBpZiAoIWxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuJykpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJHJlamVjdChyZWFzb24pIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3Q7XG5cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2U7XG4gICAgLyoqXG4gICAgICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gICAgICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICAgICAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gICAgICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgVGVybWlub2xvZ3lcbiAgICAgIC0tLS0tLS0tLS0tXG5cbiAgICAgIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gICAgICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gICAgICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gICAgICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgICAgIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgICAgIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gICAgICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gICAgICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gICAgICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICAgICAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gICAgICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gICAgICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgICAgIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgICAgIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgICAgIEJhc2ljIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIGBgYGpzXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBvbiBzdWNjZXNzXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgICAgIC8vIG9uIGZhaWx1cmVcbiAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcblxuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gICAgICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgICAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICAgICAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgICAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQGNsYXNzIFByb21pc2VcbiAgICAgIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmVyXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgICB0aGlzW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbmV4dElkKCk7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wICE9PSByZXNvbHZlcikge1xuICAgICAgICB0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicgJiYgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKTtcbiAgICAgICAgdGhpcyBpbnN0YW5jZW9mIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlID8gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpIDogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuYWxsID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJhY2UgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlc29sdmUgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlamVjdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fc2V0U2NoZWR1bGVyID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldFNjaGVkdWxlcjtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fc2V0QXNhcCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRBc2FwO1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLl9hc2FwID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXA7XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5wcm90b3R5cGUgPSB7XG4gICAgICBjb25zdHJ1Y3RvcjogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UsXG5cbiAgICAvKipcbiAgICAgIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuICAgICAgd2hpY2ggcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGVcbiAgICAgIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAgICAgLy8gdXNlciBpcyBhdmFpbGFibGVcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBDaGFpbmluZ1xuICAgICAgLS0tLS0tLS1cblxuICAgICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcbiAgICAgIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9taXNlJ3MgZnVsZmlsbG1lbnRcbiAgICAgIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiB1c2VyLm5hbWU7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcbiAgICAgICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gICAgICB9KTtcblxuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuICAgICAgfSk7XG4gICAgICBgYGBcbiAgICAgIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFzc2ltaWxhdGlvblxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG4gICAgICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG4gICAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICAgICAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBTaW1wbGUgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBmaW5kUmVzdWx0KCk7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcbiAgICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciBhdXRob3IsIGJvb2tzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG4gICAgICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcblxuICAgICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG5cbiAgICAgIH1cblxuICAgICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvdW5kQm9va3MoYm9va3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kQXV0aG9yKCkuXG4gICAgICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuICAgICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgICAgICAvLyBmb3VuZCBib29rc1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgdGhlblxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25GdWxmaWxsZWRcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgIHRoZW46IGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0LFxuXG4gICAgLyoqXG4gICAgICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gICAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZmluZEF1dGhvcigpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcbiAgICAgIH1cblxuICAgICAgLy8gc3luY2hyb25vdXNcbiAgICAgIHRyeSB7XG4gICAgICAgIGZpbmRBdXRob3IoKTtcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9XG5cbiAgICAgIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCBjYXRjaFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3Rpb25cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3I7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0KSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgICB0aGlzLnByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9taXNlW2xpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSURdKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG1ha2VQcm9taXNlKHRoaXMucHJvbWlzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ICAgICA9IGlucHV0O1xuICAgICAgICB0aGlzLmxlbmd0aCAgICAgPSBpbnB1dC5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgICAgICB0aGlzLl9lbnVtZXJhdGUoKTtcbiAgICAgICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdCh0aGlzLnByb21pc2UsIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCR2YWxpZGF0aW9uRXJyb3IoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJHZhbGlkYXRpb25FcnJvcigpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0FycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheScpO1xuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGVuZ3RoICA9IHRoaXMubGVuZ3RoO1xuICAgICAgdmFyIGlucHV0ICAgPSB0aGlzLl9pbnB1dDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IHRoaXMuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9lYWNoRW50cnkoaW5wdXRbaV0sIGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VhY2hFbnRyeSA9IGZ1bmN0aW9uKGVudHJ5LCBpKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I7XG4gICAgICB2YXIgcmVzb2x2ZSA9IGMucmVzb2x2ZTtcblxuICAgICAgaWYgKHJlc29sdmUgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQpIHtcbiAgICAgICAgdmFyIHRoZW4gPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKGVudHJ5KTtcblxuICAgICAgICBpZiAodGhlbiA9PT0gbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQgJiZcbiAgICAgICAgICAgIGVudHJ5Ll9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAgIHRoaXMuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gZW50cnk7XG4gICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQpIHtcbiAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBjKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgZW50cnksIHRoZW4pO1xuICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChwcm9taXNlLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQobmV3IGMoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKGVudHJ5KTsgfSksIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocmVzb2x2ZShlbnRyeSksIGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3NldHRsZWRBdCA9IGZ1bmN0aW9uKHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcblxuICAgICAgICBpZiAoc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbihwcm9taXNlLCBpKSB7XG4gICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQsIGksIHZhbHVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQsIGksIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkcG9seWZpbGwoKSB7XG4gICAgICB2YXIgbG9jYWw7XG5cbiAgICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGxvY2FsID0gZ2xvYmFsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBsb2NhbCA9IHNlbGY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGxvY2FsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgUCA9IGxvY2FsLlByb21pc2U7XG5cbiAgICAgIGlmIChQICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChQLnJlc29sdmUoKSkgPT09ICdbb2JqZWN0IFByb21pc2VdJyAmJiAhUC5jYXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbG9jYWwuUHJvbWlzZSA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0O1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRwb2x5ZmlsbDtcblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlID0ge1xuICAgICAgJ1Byb21pc2UnOiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCxcbiAgICAgICdwb2x5ZmlsbCc6IGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdFxuICAgIH07XG5cbiAgICAvKiBnbG9iYWwgZGVmaW5lOnRydWUgbW9kdWxlOnRydWUgd2luZG93OiB0cnVlICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGVbJ2V4cG9ydHMnXSkge1xuICAgICAgbW9kdWxlWydleHBvcnRzJ10gPSBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzWydFUzZQcm9taXNlJ10gPSBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlO1xuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdCgpO1xufSkuY2FsbCh0aGlzKTtcblxuIiwiaW1wb3J0IE9ic2VydmVyIGZyb20gJ2ZvbnRmYWNlb2JzZXJ2ZXInO1xuaW1wb3J0IHByb21pc2VzUG9seWZpbGwgZnJvbSAnZXM2LXByb21pc2UnO1xuaW1wb3J0IHNoYXJlZCBmcm9tICcuLi9zaGFyZWQuanNvbic7XG5cbmNvbnN0IGZvbnRDb25maWcgPSBzaGFyZWRbJ2ZvbnQtY29uZmlnJ107XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgZm9udE9ic2VydmVycyA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGZvbnRDb25maWcpLmZvckVhY2goKGZvbnQpID0+IHtcbiAgICBpZiAoZm9udENvbmZpZ1tmb250XS5mb250ZmFjZSkge1xuXG4gICAgICBmb250T2JzZXJ2ZXJzLnB1c2goXG4gICAgICAgIG5ldyBPYnNlcnZlcihmb250Q29uZmlnW2ZvbnRdLmZhbWlseS5yZXBsYWNlKC8nL2csICcnKSwge1xuICAgICAgICAgIHdlaWdodDogZm9udENvbmZpZ1tmb250XS53ZWlnaHQsXG4gICAgICAgICAgc3R5bGU6IGZvbnRDb25maWdbZm9udF0uc3R5bGVcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZm9udE9ic2VydmVycy5sZW5ndGggPj0gMSkge1xuICAgIHByb21pc2VzUG9seWZpbGwucG9seWZpbGwoKTtcblxuICAgIFByb21pc2UuYWxsKGZvbnRPYnNlcnZlcnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1sb2FkZWQnKTtcbiAgICAgIH0pO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbmF2Jyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2dnbGUtbmF2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1oZWFkZXInKTtcblxuICAvLyBuYXZpZ2F0aW9uIGJ1dHRvbiBvbiBjbGljaywgYmFzaWMgdG9nZ2xpbmcgb2YgY2xhc3Nlc1xuICBpZiAoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdi0tYWN0aXZlJyk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1uYXYtLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59O1xuIiwiLyohXHJcbiAqIGJhZ3VldHRlQm94LmpzXHJcbiAqIEBhdXRob3IgIGZlaW1vc2lcclxuICogQHZlcnNpb24gMS44LjBcclxuICogQHVybCBodHRwczovL2dpdGh1Yi5jb20vZmVpbW9zaS9iYWd1ZXR0ZUJveC5qc1xyXG4gKi9cclxuIWZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKCk6dC5iYWd1ZXR0ZUJveD1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQsbil7TS50cmFuc2Zvcm1zPWsoKSxNLnN2Zz13KCksaSgpLG8odCksZSh0LG4pfWZ1bmN0aW9uIGUodCxlKXt2YXIgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHQpLG89e2dhbGxlcmllczpbXSxub2RlTGlzdDpufTtVW3RdPW8sW10uZm9yRWFjaC5jYWxsKG4sZnVuY3Rpb24odCl7ZSYmZS5maWx0ZXImJihWPWUuZmlsdGVyKTt2YXIgbj1bXTtpZihuPVwiQVwiPT09dC50YWdOYW1lP1t0XTp0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSxuPVtdLmZpbHRlci5jYWxsKG4sZnVuY3Rpb24odCl7cmV0dXJuIFYudGVzdCh0LmhyZWYpfSksMCE9PW4ubGVuZ3RoKXt2YXIgaT1bXTtbXS5mb3JFYWNoLmNhbGwobixmdW5jdGlvbih0LG4pe3ZhciBvPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQ/dC5wcmV2ZW50RGVmYXVsdCgpOnQucmV0dXJuVmFsdWU9ITEsdShpLGUpLGMobil9LGE9e2V2ZW50SGFuZGxlcjpvLGltYWdlRWxlbWVudDp0fTtFKHQsXCJjbGlja1wiLG8pLGkucHVzaChhKX0pLG8uZ2FsbGVyaWVzLnB1c2goaSl9fSl9ZnVuY3Rpb24gbigpe2Zvcih2YXIgdCBpbiBVKVUuaGFzT3duUHJvcGVydHkodCkmJm8odCl9ZnVuY3Rpb24gbyh0KXtpZihVLmhhc093blByb3BlcnR5KHQpKXt2YXIgZT1VW3RdLmdhbGxlcmllcztbXS5mb3JFYWNoLmNhbGwoZSxmdW5jdGlvbih0KXtbXS5mb3JFYWNoLmNhbGwodCxmdW5jdGlvbih0KXtCKHQuaW1hZ2VFbGVtZW50LFwiY2xpY2tcIix0LmV2ZW50SGFuZGxlcil9KSxSPT09dCYmKFI9W10pfSksZGVsZXRlIFVbdF19fWZ1bmN0aW9uIGkoKXtyZXR1cm4oUz1UKFwiYmFndWV0dGVCb3gtb3ZlcmxheVwiKSk/KFA9VChcImJhZ3VldHRlQm94LXNsaWRlclwiKSxGPVQoXCJwcmV2aW91cy1idXR0b25cIiksSD1UKFwibmV4dC1idXR0b25cIiksdm9pZChMPVQoXCJjbG9zZS1idXR0b25cIikpKTooUz1OKFwiZGl2XCIpLFMuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwiZGlhbG9nXCIpLFMuaWQ9XCJiYWd1ZXR0ZUJveC1vdmVybGF5XCIsZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKFMpLFA9TihcImRpdlwiKSxQLmlkPVwiYmFndWV0dGVCb3gtc2xpZGVyXCIsUy5hcHBlbmRDaGlsZChQKSxGPU4oXCJidXR0b25cIiksRi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksRi5pZD1cInByZXZpb3VzLWJ1dHRvblwiLEYuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiUHJldmlvdXNcIiksRi5pbm5lckhUTUw9TS5zdmc/STpcIiZsdDtcIixTLmFwcGVuZENoaWxkKEYpLEg9TihcImJ1dHRvblwiKSxILnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxILmlkPVwibmV4dC1idXR0b25cIixILnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIk5leHRcIiksSC5pbm5lckhUTUw9TS5zdmc/WTpcIiZndDtcIixTLmFwcGVuZENoaWxkKEgpLEw9TihcImJ1dHRvblwiKSxMLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxMLmlkPVwiY2xvc2UtYnV0dG9uXCIsTC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJDbG9zZVwiKSxMLmlubmVySFRNTD1NLnN2Zz9xOlwiJnRpbWVzXCIsUy5hcHBlbmRDaGlsZChMKSxGLmNsYXNzTmFtZT1ILmNsYXNzTmFtZT1MLmNsYXNzTmFtZT1cImJhZ3VldHRlQm94LWJ1dHRvblwiLHZvaWQgcigpKX1mdW5jdGlvbiBhKHQpe3N3aXRjaCh0LmtleUNvZGUpe2Nhc2UgMzc6digpO2JyZWFrO2Nhc2UgMzk6aCgpO2JyZWFrO2Nhc2UgMjc6cCgpfX1mdW5jdGlvbiByKCl7RShTLFwiY2xpY2tcIixKKSxFKEYsXCJjbGlja1wiLEspLEUoSCxcImNsaWNrXCIsUSksRShMLFwiY2xpY2tcIixaKSxFKFMsXCJ0b3VjaHN0YXJ0XCIsJCksRShTLFwidG91Y2htb3ZlXCIsXyksRShTLFwidG91Y2hlbmRcIix0dCksRShkb2N1bWVudCxcImZvY3VzXCIsZXQsITApfWZ1bmN0aW9uIGwoKXtCKFMsXCJjbGlja1wiLEopLEIoRixcImNsaWNrXCIsSyksQihILFwiY2xpY2tcIixRKSxCKEwsXCJjbGlja1wiLFopLEIoUyxcInRvdWNoc3RhcnRcIiwkKSxCKFMsXCJ0b3VjaG1vdmVcIixfKSxCKFMsXCJ0b3VjaGVuZFwiLHR0KSxCKGRvY3VtZW50LFwiZm9jdXNcIixldCwhMCl9ZnVuY3Rpb24gdSh0LGUpe2lmKFIhPT10KXtmb3IoUj10LHMoZSk7UC5maXJzdENoaWxkOylQLnJlbW92ZUNoaWxkKFAuZmlyc3RDaGlsZCk7Vy5sZW5ndGg9MDtmb3IodmFyIG4sbz1bXSxpPVtdLGE9MDthPHQubGVuZ3RoO2ErKyluPU4oXCJkaXZcIiksbi5jbGFzc05hbWU9XCJmdWxsLWltYWdlXCIsbi5pZD1cImJhZ3VldHRlLWltZy1cIithLFcucHVzaChuKSxvLnB1c2goXCJiYWd1ZXR0ZUJveC1maWd1cmUtXCIrYSksaS5wdXNoKFwiYmFndWV0dGVCb3gtZmlnY2FwdGlvbi1cIithKSxQLmFwcGVuZENoaWxkKFdbYV0pO1Muc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsby5qb2luKFwiIFwiKSksUy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsaS5qb2luKFwiIFwiKSl9fWZ1bmN0aW9uIHModCl7dHx8KHQ9e30pO2Zvcih2YXIgZSBpbiBYKWpbZV09WFtlXSxcInVuZGVmaW5lZFwiIT10eXBlb2YgdFtlXSYmKGpbZV09dFtlXSk7UC5zdHlsZS50cmFuc2l0aW9uPVAuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImZhZGVJblwiPT09ai5hbmltYXRpb24/XCJvcGFjaXR5IC40cyBlYXNlXCI6XCJzbGlkZUluXCI9PT1qLmFuaW1hdGlvbj9cIlwiOlwibm9uZVwiLFwiYXV0b1wiPT09ai5idXR0b25zJiYoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8MT09PVIubGVuZ3RoKSYmKGouYnV0dG9ucz0hMSksRi5zdHlsZS5kaXNwbGF5PUguc3R5bGUuZGlzcGxheT1qLmJ1dHRvbnM/XCJcIjpcIm5vbmVcIjt0cnl7Uy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9ai5vdmVybGF5QmFja2dyb3VuZENvbG9yfWNhdGNoKG4pe319ZnVuY3Rpb24gYyh0KXtqLm5vU2Nyb2xsYmFycyYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJoaWRkZW5cIixkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WT1cInNjcm9sbFwiKSxcImJsb2NrXCIhPT1TLnN0eWxlLmRpc3BsYXkmJihFKGRvY3VtZW50LFwia2V5ZG93blwiLGEpLHo9dCxEPXtjb3VudDowLHN0YXJ0WDpudWxsLHN0YXJ0WTpudWxsfSxtKHosZnVuY3Rpb24oKXt4KHopLEMoeil9KSx5KCksUy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixqLmZ1bGxTY3JlZW4mJmYoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Uy5jbGFzc05hbWU9XCJ2aXNpYmxlXCIsai5hZnRlclNob3cmJmouYWZ0ZXJTaG93KCl9LDUwKSxqLm9uQ2hhbmdlJiZqLm9uQ2hhbmdlKHosVy5sZW5ndGgpLEc9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCxkKCkpfWZ1bmN0aW9uIGQoKXtqLmJ1dHRvbnM/Ri5mb2N1cygpOkwuZm9jdXMoKX1mdW5jdGlvbiBmKCl7Uy5yZXF1ZXN0RnVsbHNjcmVlbj9TLnJlcXVlc3RGdWxsc2NyZWVuKCk6Uy53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbj9TLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6Uy5tb3pSZXF1ZXN0RnVsbFNjcmVlbiYmUy5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpfWZ1bmN0aW9uIGcoKXtkb2N1bWVudC5leGl0RnVsbHNjcmVlbj9kb2N1bWVudC5leGl0RnVsbHNjcmVlbigpOmRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4/ZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpOmRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuJiZkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpfWZ1bmN0aW9uIHAoKXtqLm5vU2Nyb2xsYmFycyYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIsZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIpLFwibm9uZVwiIT09Uy5zdHlsZS5kaXNwbGF5JiYoQihkb2N1bWVudCxcImtleWRvd25cIixhKSxTLmNsYXNzTmFtZT1cIlwiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtTLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZygpLGouYWZ0ZXJIaWRlJiZqLmFmdGVySGlkZSgpfSw1MDApLEcuZm9jdXMoKSl9ZnVuY3Rpb24gbSh0LGUpe3ZhciBuPVdbdF07aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG4pe2lmKG4uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIilbMF0pcmV0dXJuIHZvaWQoZSYmZSgpKTt2YXIgbz1SW3RdLmltYWdlRWxlbWVudCxpPW8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIilbMF0sYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBqLmNhcHRpb25zP2ouY2FwdGlvbnMuY2FsbChSLG8pOm8uZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXB0aW9uXCIpfHxvLnRpdGxlLHI9YihvKSxsPU4oXCJmaWd1cmVcIik7aWYobC5pZD1cImJhZ3VldHRlQm94LWZpZ3VyZS1cIit0LGwuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtc3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMlwiPjwvZGl2PjwvZGl2Picsai5jYXB0aW9ucyYmYSl7dmFyIHU9TihcImZpZ2NhcHRpb25cIik7dS5pZD1cImJhZ3VldHRlQm94LWZpZ2NhcHRpb24tXCIrdCx1LmlubmVySFRNTD1hLGwuYXBwZW5kQ2hpbGQodSl9bi5hcHBlbmRDaGlsZChsKTt2YXIgcz1OKFwiaW1nXCIpO3Mub25sb2FkPWZ1bmN0aW9uKCl7dmFyIG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWd1ZXR0ZS1pbWctXCIrdCtcIiAuYmFndWV0dGVCb3gtc3Bpbm5lclwiKTtsLnJlbW92ZUNoaWxkKG4pLCFqLmFzeW5jJiZlJiZlKCl9LHMuc2V0QXR0cmlidXRlKFwic3JjXCIscikscy5hbHQ9aT9pLmFsdHx8XCJcIjpcIlwiLGoudGl0bGVUYWcmJmEmJihzLnRpdGxlPWEpLGwuYXBwZW5kQ2hpbGQocyksai5hc3luYyYmZSYmZSgpfX1mdW5jdGlvbiBiKHQpe3ZhciBlPXQuaHJlZjtpZih0LmRhdGFzZXQpe3ZhciBuPVtdO2Zvcih2YXIgbyBpbiB0LmRhdGFzZXQpXCJhdC1cIiE9PW8uc3Vic3RyaW5nKDAsMyl8fGlzTmFOKG8uc3Vic3RyaW5nKDMpKXx8KG5bby5yZXBsYWNlKFwiYXQtXCIsXCJcIildPXQuZGF0YXNldFtvXSk7Zm9yKHZhciBpPU9iamVjdC5rZXlzKG4pLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gcGFyc2VJbnQodCwxMCk8cGFyc2VJbnQoZSwxMCk/LTE6MX0pLGE9d2luZG93LmlubmVyV2lkdGgqd2luZG93LmRldmljZVBpeGVsUmF0aW8scj0wO3I8aS5sZW5ndGgtMSYmaVtyXTxhOylyKys7ZT1uW2lbcl1dfHxlfXJldHVybiBlfWZ1bmN0aW9uIGgoKXt2YXIgdDtyZXR1cm4gejw9Vy5sZW5ndGgtMj8oeisrLHkoKSx4KHopLHQ9ITApOmouYW5pbWF0aW9uJiYoUC5jbGFzc05hbWU9XCJib3VuY2UtZnJvbS1yaWdodFwiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtQLmNsYXNzTmFtZT1cIlwifSw0MDApLHQ9ITEpLGoub25DaGFuZ2UmJmoub25DaGFuZ2UoeixXLmxlbmd0aCksdH1mdW5jdGlvbiB2KCl7dmFyIHQ7cmV0dXJuIHo+PTE/KHotLSx5KCksQyh6KSx0PSEwKTpqLmFuaW1hdGlvbiYmKFAuY2xhc3NOYW1lPVwiYm91bmNlLWZyb20tbGVmdFwiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtQLmNsYXNzTmFtZT1cIlwifSw0MDApLHQ9ITEpLGoub25DaGFuZ2UmJmoub25DaGFuZ2UoeixXLmxlbmd0aCksdH1mdW5jdGlvbiB5KCl7dmFyIHQ9MTAwKi16K1wiJVwiO1wiZmFkZUluXCI9PT1qLmFuaW1hdGlvbj8oUC5zdHlsZS5vcGFjaXR5PTAsc2V0VGltZW91dChmdW5jdGlvbigpe00udHJhbnNmb3Jtcz9QLnN0eWxlLnRyYW5zZm9ybT1QLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK3QrXCIsMCwwKVwiOlAuc3R5bGUubGVmdD10LFAuc3R5bGUub3BhY2l0eT0xfSw0MDApKTpNLnRyYW5zZm9ybXM/UC5zdHlsZS50cmFuc2Zvcm09UC5zdHlsZS53ZWJraXRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIit0K1wiLDAsMClcIjpQLnN0eWxlLmxlZnQ9dH1mdW5jdGlvbiBrKCl7dmFyIHQ9TihcImRpdlwiKTtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgdC5zdHlsZS5wZXJzcGVjdGl2ZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuc3R5bGUud2Via2l0UGVyc3BlY3RpdmV9ZnVuY3Rpb24gdygpe3ZhciB0PU4oXCJkaXZcIik7cmV0dXJuIHQuaW5uZXJIVE1MPVwiPHN2Zy8+XCIsXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09KHQuZmlyc3RDaGlsZCYmdC5maXJzdENoaWxkLm5hbWVzcGFjZVVSSSl9ZnVuY3Rpb24geCh0KXt0LXo+PWoucHJlbG9hZHx8bSh0KzEsZnVuY3Rpb24oKXt4KHQrMSl9KX1mdW5jdGlvbiBDKHQpe3otdD49ai5wcmVsb2FkfHxtKHQtMSxmdW5jdGlvbigpe0ModC0xKX0pfWZ1bmN0aW9uIEUodCxlLG4sbyl7dC5hZGRFdmVudExpc3RlbmVyP3QuYWRkRXZlbnRMaXN0ZW5lcihlLG4sbyk6dC5hdHRhY2hFdmVudChcIm9uXCIrZSxuKX1mdW5jdGlvbiBCKHQsZSxuLG8pe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcj90LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxuLG8pOnQuZGV0YWNoRXZlbnQoXCJvblwiK2Usbil9ZnVuY3Rpb24gVCh0KXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCl9ZnVuY3Rpb24gTih0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KX1mdW5jdGlvbiBBKCl7bCgpLG4oKSxCKGRvY3VtZW50LFwia2V5ZG93blwiLGEpLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZ3VldHRlQm94LW92ZXJsYXlcIikpLFU9e30sUj1bXSx6PTB9dmFyIFMsUCxGLEgsTCxJPSc8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI2MFwiPjxwb2x5bGluZSBwb2ludHM9XCIzMCAxMCAxMCAzMCAzMCA1MFwiIHN0cm9rZT1cInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiIHN0cm9rZS13aWR0aD1cIjRcInN0cm9rZS1saW5lY2FwPVwiYnV0dFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxZPSc8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI2MFwiPjxwb2x5bGluZSBwb2ludHM9XCIxNCAxMCAzNCAzMCAxNCA1MFwiIHN0cm9rZT1cInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiIHN0cm9rZS13aWR0aD1cIjRcInN0cm9rZS1saW5lY2FwPVwiYnV0dFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxxPSc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPjxnIHN0cm9rZT1cInJnYigxNjAsMTYwLDE2MClcIiBzdHJva2Utd2lkdGg9XCI0XCI+PGxpbmUgeDE9XCI1XCIgeTE9XCI1XCIgeDI9XCIyNVwiIHkyPVwiMjVcIi8+PGxpbmUgeDE9XCI1XCIgeTE9XCIyNVwiIHgyPVwiMjVcIiB5Mj1cIjVcIi8+PC9nPjwvc3ZnPicsaj17fSxYPXtjYXB0aW9uczohMCxmdWxsU2NyZWVuOiExLG5vU2Nyb2xsYmFyczohMSx0aXRsZVRhZzohMSxidXR0b25zOlwiYXV0b1wiLGFzeW5jOiExLHByZWxvYWQ6MixhbmltYXRpb246XCJzbGlkZUluXCIsYWZ0ZXJTaG93Om51bGwsYWZ0ZXJIaWRlOm51bGwsb25DaGFuZ2U6bnVsbCxvdmVybGF5QmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwuOClcIn0sTT17fSxSPVtdLHo9MCxEPXt9LE89ITEsVj0vLitcXC4oZ2lmfGpwZT9nfHBuZ3x3ZWJwKS9pLFU9e30sVz1bXSxHPW51bGwsSj1mdW5jdGlvbih0KXstMSE9PXQudGFyZ2V0LmlkLmluZGV4T2YoXCJiYWd1ZXR0ZS1pbWdcIikmJnAoKX0sSz1mdW5jdGlvbih0KXt0LnN0b3BQcm9wYWdhdGlvbj90LnN0b3BQcm9wYWdhdGlvbigpOnQuY2FuY2VsQnViYmxlPSEwLHYoKX0sUT1mdW5jdGlvbih0KXt0LnN0b3BQcm9wYWdhdGlvbj90LnN0b3BQcm9wYWdhdGlvbigpOnQuY2FuY2VsQnViYmxlPSEwLGgoKX0sWj1mdW5jdGlvbih0KXt0LnN0b3BQcm9wYWdhdGlvbj90LnN0b3BQcm9wYWdhdGlvbigpOnQuY2FuY2VsQnViYmxlPSEwLHAoKX0sJD1mdW5jdGlvbih0KXtELmNvdW50KyssRC5jb3VudD4xJiYoRC5tdWx0aXRvdWNoPSEwKSxELnN0YXJ0WD10LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYLEQuc3RhcnRZPXQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVl9LF89ZnVuY3Rpb24odCl7aWYoIU8mJiFELm11bHRpdG91Y2gpe3QucHJldmVudERlZmF1bHQ/dC5wcmV2ZW50RGVmYXVsdCgpOnQucmV0dXJuVmFsdWU9ITE7dmFyIGU9dC50b3VjaGVzWzBdfHx0LmNoYW5nZWRUb3VjaGVzWzBdO2UucGFnZVgtRC5zdGFydFg+NDA/KE89ITAsdigpKTplLnBhZ2VYLUQuc3RhcnRYPC00MD8oTz0hMCxoKCkpOkQuc3RhcnRZLWUucGFnZVk+MTAwJiZwKCl9fSx0dD1mdW5jdGlvbigpe0QuY291bnQtLSxELmNvdW50PD0wJiYoRC5tdWx0aXRvdWNoPSExKSxPPSExfSxldD1mdW5jdGlvbih0KXtcImJsb2NrXCIhPT1TLnN0eWxlLmRpc3BsYXl8fFMuY29udGFpbnModC50YXJnZXQpfHwodC5zdG9wUHJvcGFnYXRpb24oKSxkKCkpfTtyZXR1cm5bXS5mb3JFYWNofHwoQXJyYXkucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49MDtuPHRoaXMubGVuZ3RoO24rKyl0LmNhbGwoZSx0aGlzW25dLG4sdGhpcyl9KSxbXS5maWx0ZXJ8fChBcnJheS5wcm90b3R5cGUuZmlsdGVyPWZ1bmN0aW9uKHQsZSxuLG8saSl7Zm9yKG49dGhpcyxvPVtdLGk9MDtpPG4ubGVuZ3RoO2krKyl0LmNhbGwoZSxuW2ldLGksbikmJm8ucHVzaChuW2ldKTtyZXR1cm4gb30pLHtydW46dCxkZXN0cm95OkEsc2hvd05leHQ6aCxzaG93UHJldmlvdXM6dn19KTsiLCJpbXBvcnQgbGlnaHRib3ggZnJvbSAnYmFndWV0dGVib3guanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGxpZ2h0Ym94LnJ1bignLmpzLWdhbGxlcnknKTtcbn07XG4iLCIvKiEgbG9hZEpTOiBsb2FkIGEgSlMgZmlsZSBhc3luY2hyb25vdXNseS4gW2NdMjAxNCBAc2NvdHRqZWhsLCBGaWxhbWVudCBHcm91cCwgSW5jLiAoQmFzZWQgb24gaHR0cDovL2dvby5nbC9SRVFHUSBieSBQYXVsIElyaXNoKS4gTGljZW5zZWQgTUlUICovXG4oZnVuY3Rpb24oIHcgKXtcblx0dmFyIGxvYWRKUyA9IGZ1bmN0aW9uKCBzcmMsIGNiICl7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0dmFyIHJlZiA9IHcuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwic2NyaXB0XCIgKVsgMCBdO1xuXHRcdHZhciBzY3JpcHQgPSB3LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic2NyaXB0XCIgKTtcblx0XHRzY3JpcHQuc3JjID0gc3JjO1xuXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cdFx0cmVmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBzY3JpcHQsIHJlZiApO1xuXHRcdGlmIChjYiAmJiB0eXBlb2YoY2IpID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBjYjtcblx0XHR9XG5cdFx0cmV0dXJuIHNjcmlwdDtcblx0fTtcblx0Ly8gY29tbW9uanNcblx0aWYoIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgKXtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGxvYWRKUztcblx0fVxuXHRlbHNlIHtcblx0XHR3LmxvYWRKUyA9IGxvYWRKUztcblx0fVxufSggdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMgKSk7XG4iLCJpbXBvcnQgbG9hZCBmcm9tICdmZy1sb2FkanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHByZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xuXG4gIC8vIGlmIHRoZXJlIGFyZSBhbnkgcHJlLWVsZW1lbnRzIG9uIHRoZSBwYWdlLCBsb2FkIHRoZSBjb2RlLWhpZ2hsaWdodGluZ1xuICAvLyBwbHVnaW4gd2l0aCBmaWxhbWVudGdyb3VwcyBsb2FkLWpzLCBhbmQgdGhlbiBleGVjdXRlIGl0IG9uIGV2ZXJ5IHByZVxuICBpZiAocHJlLmxlbmd0aCA+IDApIHtcbiAgICAvLyBsb2FkIHRoZSBoaWdobGlnaHQganNcbiAgICBsb2FkKCcvYXNzZXRzL2pzL2hpZ2hsaWdodC5taW4uanMnLCAoKSA9PiB7XG4gICAgICBbIC4uLnByZSBdLmZvckVhY2goKGNvZGVibG9jaykgPT4ge1xuICAgICAgICB3aW5kb3cuaGxqcy5oaWdobGlnaHRCbG9jayhjb2RlYmxvY2spO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgaGlnaGxpZ2h0IGZyb20gJy4vaGlnaGxpZ2h0JztcblxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jb2RlJyk7XG5cbmNvbnN0IGhpZGVXZWxjb21lID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utd2VsY29tZScpLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG59O1xuXG5jb25zdCBpbmplY3RTb3VyY2Vib3ggPSAoaHRtbCkgPT4ge1xuICBjb25zdCBzb3VyY2Vib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBzb3VyY2Vib3guY2xhc3NMaXN0LmFkZCgnc291cmNlYm94Jyk7XG4gIHNvdXJjZWJveC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInNvdXJjZWJveF9faW5uZXJcIj5cbiAgICAgIDxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1odG1sIGpzLXNvdXJjZWJveFwiPjwvY29kZT48L3ByZT5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNvdXJjZWJveCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zb3VyY2Vib3gnKS50ZXh0Q29udGVudCA9IGh0bWw7XG4gIGhpZ2hsaWdodCgpO1xuICBoaWRlV2VsY29tZSgpO1xufTtcblxuY29uc3QgYnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IHNvdXJjZWJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2Vib3gnKTtcblxuICAvLyBnZXQgdGhlIHNvdXJjZWNvZGUgZm9yIHRoZSBwYWdlLCBpZiBpdCBpcyBub3QgYWxyZWFkeSBzaG93biwgdmlhIGFqYXhcbiAgaWYgKCFzb3VyY2Vib3gpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uIGFqYXhDYWxsICgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgaW5qZWN0U291cmNlYm94KHRoaXMucmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1ZXN0LnNlbmQoKTtcblxuICB9IGVsc2UgeyAvLyByZW1vdmUgdGhlIHNvdXJjZWJveFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc291cmNlYm94KTtcbiAgfVxufTtcblxuXG4vLyBzZXQgdGhlIGNsaWNrIGV2ZW50cywgaWYgdGhlIGNvZGUgYnV0dG9uIGlzIGNsaWNrZWQsIHNob3dcbi8vIHRoZSBzb3VyY2Vjb2RlIG9mIHRoZSBwYWdlLCBqdXN0IGEgc21hbGwgZ2ltbWljayA7KVxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBbIC4uLmJ1dHRvbnMgXS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidXR0b25DbGljayk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBzaGFyZWQgZnJvbSAnLi4vc2hhcmVkLmpzb24nO1xuXG5jb25zdCBicmVha3BvaW50cyA9IHNoYXJlZC5icmVha3BvaW50cztcblxuLy8gc2FtZSB1c2FnZSBhcyB0aGUgbWVkaWFxdWVyeS1zY3NzLW1peGluLCBqdXN0XG4vLyBwcm92aWRlIHRoZSBzaG9ydGNvZGUgdXNlZCBpbiB0aGUgc2Nzcy1maWxlIGFuZCBpZiBpdFxuLy8gaXMgYSBjdXN0b20gcXVlcnkuIHRoaXMgbW9kdWxlIHJldHVybiB0cnVlIGlmIHRoZVxuLy8gZ2l2ZW4gYnJlYWtwb2ludCBtYXRjaGVzIG9yIGZhbHNlIGlmIGl0IGRvZXNudFxuXG5leHBvcnQgZGVmYXVsdCAoc2hvcnRjb2RlLCBjdXN0b20gPSBmYWxzZSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGJyZWFrcG9pbnRzW3Nob3J0Y29kZV07XG4gIGxldCBxdWVyeSA9ICcnO1xuXG4gIGlmIChjdXN0b20pIHtcbiAgICAvLyBpZiB3ZSBoYXZlIGEgY3VzdG9tIHF1ZXJ5LCB1c2UgJ2FzIGlzJywgcmVtb3ZlIHF1b3Rlc1xuICAgIHF1ZXJ5ID0gYnJlYWtwb2ludHNbc2hvcnRjb2RlXS5yZXBsYWNlKC8nL2csICcnKTtcblxuICB9IGVsc2UgaWYgKHZhbHVlLm1hdGNoKCdweCcpKSB7XG4gICAgLy8gd2UgaGF2ZSB0aGUgZGVmYXVsdCBtaW4td2lkdGhcbiAgICAvLyBjb252ZXJ0IHRvIGVtLXZhbHVlIGlmIGl0IGlzIGEgcGl4ZWwtdmFsdWVcbiAgICBjb25zdCBweFZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIGNvbnN0IGVtVmFsdWUgPSBweFZhbHVlIC8gMTY7XG5cbiAgICBxdWVyeSA9IGAobWluLXdpZHRoOiAke2VtVmFsdWV9ZW0pYDtcblxuICB9IGVsc2UgeyAvLyB1c2UgdGhlIHZhbHVlIGFzIGl0IGlzXG4gICAgcXVlcnkgPSBgKG1pbi13aWR0aDogJHt2YWx1ZX0pYDtcbiAgfVxuXG4gIC8vIHJldHVybiB0aGUgbWF0Y2hlcyBib29sZWFuXG4gIHJldHVybiAod2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXMpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChsaW5rKSA9PiB7XG4gIC8vIHRoaXMgYWRkcyBhIGRlbGF5IHRvIHRoZSBzZWN0aW9uLWNoYW5nZSBjbGljay1hY3Rpb24sXG4gIC8vIGZha2luZyBhIHNsaWRlIHRyYW5zaXRpb24gYnkgYWRkaW5nIHRoZSAtLWNoYW5nZSBjbGFzc1xuXG4gIGxpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1zZWN0aW9uLS1jaGFuZ2UnKTtcblxuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICB9LCAzMDApOyAvLyBhbmltYXRpb24gaXMgNDAwbXMsIHNvIHdhaXQgMzAwbXNcbn07XG4iLCJpbXBvcnQgbXEgZnJvbSAnLi9tZWRpYXF1ZXJ5JztcbmltcG9ydCBjbGlja3NlY3Rpb24gZnJvbSAnLi9jbGlja3NlY3Rpb24nO1xuXG5jb25zdCBzZWN0aW9uTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2VjdGlvbmNoYW5nZScpO1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbmF2X19saW5rJyk7XG5jb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBhZ2UnKTtcblxuLy8gc2ltdWxhdGUgc2VjdGlvbmNoYW5nZSBmb3IgbmF2aWdhdGlvbiBjbGlja3Mgb24gbGFyZ2UgZGlzcGxheXNcbi8vIGJ1dCBvbmx5IGlmIHdlIGFyZSBvbiBjb250YWN0L3dvcmsvYmxvZy9sZWdhbC1ub3RpY2UgcGFnZXNcbmNvbnN0IGNoYW5nZVNlY3Rpb25zID0gKG1xKCd4bCcpICYmIChcbiAgcGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2UtLXdvcmsnKSB8fFxuICBwYWdlLmNsYXNzTGlzdC5jb250YWlucygncGFnZS0tY29udGFjdCcpIHx8XG4gIHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLS1ibG9nJykgfHxcbiAgcGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2UtLWxlZ2FsLW5vdGljZScpXG4pKTtcblxuY29uc3QgbWVudUNsaWNrID0gKGxpbmspID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gIGNvbnN0IHNlY3Rpb25zID0gWyAnd29yaycsICdmYWtlJywgJ2Jsb2cnLCAnY29udGFjdCcgXTtcbiAgbGV0IHNlY3Rpb25MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpbmstc2VjdGlvbi0tJHt0YXJnZXR9YCk7XG5cbiAgLy8gaWYgdGhlIHNlY3Rpb25jaGFuZ2UgbGluayBkb2VzIG5vdCBleGlzdCwgdGhlIG1vZGlmeSB0aGUgb25lIGV4aXN0aW5nXG4gIC8vIGFuZCBjaGFuZ2UgY29sb3IgKyB0YXJnZXRcbiAgaWYgKCFzZWN0aW9uTGluaykge1xuICAgIHNlY3Rpb25MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmstc2VjdGlvbicpO1xuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlYykgPT4ge1xuICAgICAgc2VjdGlvbkxpbmsuY2xhc3NMaXN0LnJlbW92ZShgbGluay1zZWN0aW9uLS0ke3NlY31gKTtcbiAgICB9KTtcbiAgICBzZWN0aW9uTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICBzZWN0aW9uTGluay5jbGFzc0xpc3QuYWRkKGBsaW5rLXNlY3Rpb24tLSR7dGFyZ2V0fWApO1xuICB9XG5cbiAgY2xpY2tzZWN0aW9uKHNlY3Rpb25MaW5rKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLy8gYWx3YXlzIGFwcGx5IHRoaXMgZXZlbnQgdG8gYWxsIHRoZSBzZWN0aW9ubGlua3NcbiAgWyAuLi5zZWN0aW9uTGlua3MgXS5mb3JFYWNoKChzZWN0aW9uTGluaykgPT4ge1xuICAgIHNlY3Rpb25MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsaWNrc2VjdGlvbihzZWN0aW9uTGluayk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcblxuICAvLyBhbmQgdG8gdGhlIG1lbnUgbGlua3MgaWYgbmVlZGVkXG4gIGlmIChjaGFuZ2VTZWN0aW9ucykge1xuICAgIFsgLi4ubGlua3MgXS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtZW51Q2xpY2sobGluayk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbiIsImNvbnN0IGNsb3NlV2VsY29tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS13ZWxjb21lJyk7XG5cbmNvbnN0IHdlbGNvbWVEb25lID0gKCkgPT4ge1xuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXdlbGNvbWUnKS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lLS1kb25lJyk7XG4gIH0sIDgwMCk7IC8vIGFuaW1hdGlvbiB0aW1lIGlzIDcwMG1zXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIHNldCB0aGUgZXZlbnQgdG8gdGhlIGVzYy1rZXkgdG8gZGlzbWlzcyBzcGxhc2ggaW50cm9cbiAgZG9jdW1lbnQub25rZXlkb3duID0gKGUpID0+IHtcbiAgICBjb25zdCBldmVudCA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGNvbnN0IGlzSG9tZXBhZ2UgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2l0ZS0taG9tZXBhZ2UnKTtcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyAmJiBpc0hvbWVwYWdlICYmIGNsb3NlV2VsY29tZSkge1xuICAgICAgY2xvc2VXZWxjb21lLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICB3ZWxjb21lRG9uZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyByZW1vdmUgdGhlIHRyYW5zaXRpb24gYWZ0ZXIgaXQgY2hhbmdlZFxuICBpZiAoY2xvc2VXZWxjb21lKSB7XG4gICAgY2xvc2VXZWxjb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHdlbGNvbWVEb25lKTtcbiAgICBjbG9zZVdlbGNvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3ZWxjb21lRG9uZSk7XG4gIH1cbn07XG4iLCIvKiFcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2IEljb01vb24uaW9cbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9LZXlhbW9vbi9zdmd4dXNlXG4gKiBAdmVyc2lvbiAgIDEuMS4yMVxuICovXG4vKmpzbGludCBicm93c2VyOiB0cnVlICovXG4vKmdsb2JhbCBYRG9tYWluUmVxdWVzdCwgTXV0YXRpb25PYnNlcnZlciwgd2luZG93ICovXG4oZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7IC8vIGhvbGRzIHhociBvYmplY3RzIHRvIHByZXZlbnQgbXVsdGlwbGUgcmVxdWVzdHNcbiAgICAgICAgdmFyIGNoZWNrVXNlRWxlbXM7XG4gICAgICAgIHZhciB0aWQ7IC8vIHRpbWVvdXQgaWRcbiAgICAgICAgdmFyIGRlYm91bmNlZENoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpZCk7XG4gICAgICAgICAgICB0aWQgPSBzZXRUaW1lb3V0KGNoZWNrVXNlRWxlbXMsIDEwMCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXI7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGRlYm91bmNlZENoZWNrKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1bm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjcmVhdGVSZXF1ZXN0ID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgLy8gSW4gSUUgOSwgY3Jvc3MgZG9tYWluIHJlcXVlc3RzIGNhbiBvbmx5IGJlIHNlbnQgdXNpbmcgWERvbWFpblJlcXVlc3QuXG4gICAgICAgICAgICAvLyBYRG9tYWluUmVxdWVzdCB3b3VsZCBmYWlsIGlmIENPUlMgaGVhZGVycyBhcmUgbm90IHNldC5cbiAgICAgICAgICAgIC8vIFRoZXJlZm9yZSwgWERvbWFpblJlcXVlc3Qgc2hvdWxkIG9ubHkgYmUgdXNlZCB3aXRoIGNyb3NzIGRvbWFpbiByZXF1ZXN0cy5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEhvc3RuYW1lKGhyZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSBocmVmO1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmhvc3RuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIFJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgaG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgICAgICAgIHZhciBobmFtZTI7XG4gICAgICAgICAgICBpZiAod2luZG93LlhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIGhuYW1lMiA9IGdldEhvc3RuYW1lKHVybCk7XG4gICAgICAgICAgICAgICAgaWYgKFJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID09PSB1bmRlZmluZWQgJiYgaG5hbWUyICE9PSAnJyAmJiBobmFtZTIgIT09IGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBYRG9tYWluUmVxdWVzdCB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZXF1ZXN0O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgeGxpbmtOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcbiAgICAgICAgY2hlY2tVc2VFbGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBiYXNlO1xuICAgICAgICAgICAgdmFyIGJjcjtcbiAgICAgICAgICAgIHZhciBmYWxsYmFjayA9ICcnOyAvLyBvcHRpb25hbCBmYWxsYmFjayBVUkwgaW4gY2FzZSBubyBiYXNlIHBhdGggdG8gU1ZHIGZpbGUgd2FzIGdpdmVuIGFuZCBubyBzeW1ib2wgZGVmaW5pdGlvbiB3YXMgZm91bmQuXG4gICAgICAgICAgICB2YXIgaGFzaDtcbiAgICAgICAgICAgIHZhciBocmVmO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgaW5Qcm9ncmVzc0NvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBpc0hpZGRlbjtcbiAgICAgICAgICAgIHZhciBSZXF1ZXN0O1xuICAgICAgICAgICAgdmFyIHVybDtcbiAgICAgICAgICAgIHZhciB1c2VzO1xuICAgICAgICAgICAgdmFyIHhocjtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9ic2VydmVJZkRvbmUoKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgZG9uZSB3aXRoIG1ha2luZyBjaGFuZ2VzLCBzdGFydCB3YXRjaGluZyBmb3IgY2hhZ25lcyBpbiBET00gYWdhaW5cbiAgICAgICAgICAgICAgICBpblByb2dyZXNzQ291bnQgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaW5Qcm9ncmVzc0NvdW50ID09PSAwKSB7IC8vIGlmIGFsbCB4aHJzIHdlcmUgcmVzb2x2ZWRcbiAgICAgICAgICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcygpOyAvLyBtYWtlIHN1cmUgdG8gcmVtb3ZlIG9sZCBoYW5kbGVyc1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlQ2hhbmdlcygpOyAvLyB3YXRjaCBmb3IgY2hhbmdlcyB0byBET01cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhdHRyVXBkYXRlRnVuYyhzcGVjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlW3NwZWMuYmFzZV0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWMudXNlRWwuc2V0QXR0cmlidXRlTlMoeGxpbmtOUywgJ3hsaW5rOmhyZWYnLCAnIycgKyBzcGVjLmhhc2gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9ubG9hZEZ1bmMoeGhyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3gnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN2ZztcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHguaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgc3ZnID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3ZnJylbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKHN2ZywgYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uRXJyb3JUaW1lb3V0KHhocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVJZkRvbmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcygpOyAvLyBzdG9wIHdhdGNoaW5nIGZvciBjaGFuZ2VzIHRvIERPTVxuICAgICAgICAgICAgLy8gZmluZCBhbGwgdXNlIGVsZW1lbnRzXG4gICAgICAgICAgICB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VzZScpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBiY3IgPSB1c2VzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsZWQgdG8gZ2V0IGJvdW5kaW5nIHJlY3RhbmdsZSBvZiB0aGUgdXNlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgYmNyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhyZWYgPSB1c2VzW2ldLmdldEF0dHJpYnV0ZU5TKHhsaW5rTlMsICdocmVmJyk7XG4gICAgICAgICAgICAgICAgaWYgKGhyZWYgJiYgaHJlZi5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBocmVmLnNwbGl0KCcjJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gW1wiXCIsIFwiXCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiYXNlID0gdXJsWzBdO1xuICAgICAgICAgICAgICAgIGhhc2ggPSB1cmxbMV07XG4gICAgICAgICAgICAgICAgaXNIaWRkZW4gPSBiY3IgJiYgYmNyLmxlZnQgPT09IDAgJiYgYmNyLnJpZ2h0ID09PSAwICYmIGJjci50b3AgPT09IDAgJiYgYmNyLmJvdHRvbSA9PT0gMDtcbiAgICAgICAgICAgICAgICBpZiAoYmNyICYmIGJjci53aWR0aCA9PT0gMCAmJiBiY3IuaGVpZ2h0ID09PSAwICYmICFpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdXNlIGVsZW1lbnQgaXMgZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWwgU1ZHLCB0cnkgdG8gZmV0Y2ggaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBvcHRpb25hbCBmYWxsYmFjayBVUkwgaWYgdGhlcmUgaXMgbm8gcmVmZXJlbmNlIHRvIGFuIGV4dGVybmFsIFNWR1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmFsbGJhY2sgJiYgIWJhc2UubGVuZ3RoICYmIGhhc2ggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlID0gZmFsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZSB1cGRhdGluZyB4bGluazpocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIgPSBjYWNoZVtiYXNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnVlIHNpZ25pZmllcyB0aGF0IHByZXBlbmRpbmcgdGhlIFNWRyB3YXMgbm90IHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhdHRyVXBkYXRlRnVuYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUVsOiB1c2VzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiBoYXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFJlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgPSBuZXcgUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHhocjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG9ubG9hZEZ1bmMoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBvbkVycm9yVGltZW91dCh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gb25FcnJvclRpbWVvdXQoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGJhc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVbYmFzZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoaXMgVVJMIGlmIHRoZSB1c2UgZWxlbWVudCB3YXMgbm90IGVtcHR5IGFuZCBubyByZXF1ZXN0IHdhcyBzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYWNoZVtiYXNlXS5vbmxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCB0dXJucyBvdXQgdGhhdCBwcmVwZW5kaW5nIHRoZSBTVkcgaXMgbm90IG5lY2Vzc2FyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhYm9ydCB0aGUgaW4tcHJvZ3Jlc3MgeGhyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNhY2hlW2Jhc2VdLm9ubG9hZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5sZW5ndGggJiYgY2FjaGVbYmFzZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VFbDogdXNlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VzID0gJyc7XG4gICAgICAgICAgICBpblByb2dyZXNzQ291bnQgKz0gMTtcbiAgICAgICAgICAgIG9ic2VydmVJZkRvbmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGhlIGxvYWQgZXZlbnQgZmlyZXMgd2hlbiBhbGwgcmVzb3VyY2VzIGhhdmUgZmluaXNoZWQgbG9hZGluZywgd2hpY2ggYWxsb3dzIGRldGVjdGluZyB3aGV0aGVyIFNWRyB1c2UgZWxlbWVudHMgYXJlIGVtcHR5LlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIHdpbkxvYWQoKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHdpbkxvYWQsIGZhbHNlKTsgLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgICAgIHRpZCA9IHNldFRpbWVvdXQoY2hlY2tVc2VFbGVtcywgMCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG59KCkpO1xuIiwiLyohIHBpY3R1cmVmaWxsIC0gdjMuMC4yIC0gMjAxNi0wMi0xMlxuICogaHR0cHM6Ly9zY290dGplaGwuZ2l0aHViLmlvL3BpY3R1cmVmaWxsL1xuICogQ29weXJpZ2h0IChjKSAyMDE2IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGplaGwvcGljdHVyZWZpbGwvYmxvYi9tYXN0ZXIvQXV0aG9ycy50eHQ7IExpY2Vuc2VkIE1JVFxuICovXG4vKiEgR2Vja28tUGljdHVyZSAtIHYxLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGplaGwvcGljdHVyZWZpbGwvdHJlZS8zLjAvc3JjL3BsdWdpbnMvZ2Vja28tcGljdHVyZVxuICogRmlyZWZveCdzIGVhcmx5IHBpY3R1cmUgaW1wbGVtZW50YXRpb24gKHByaW9yIHRvIEZGNDEpIGlzIHN0YXRpYyBhbmQgZG9lc1xuICogbm90IHJlYWN0IHRvIHZpZXdwb3J0IGNoYW5nZXMuIFRoaXMgdGlueSBtb2R1bGUgZml4ZXMgdGhpcy5cbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdykge1xuXHQvKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5cdGlmICggd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudCAmJiAoKC9lY2tvLykudGVzdCh1YSkgJiYgdWEubWF0Y2goL3J2XFw6KFxcZCspLykgJiYgUmVnRXhwLiQxIDwgNDUpICkge1xuXHRcdGFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRpbWVyO1xuXG5cdFx0XHR2YXIgZHVtbXlTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuXG5cdFx0XHR2YXIgZml4UmVzcGltZyA9IGZ1bmN0aW9uKGltZykge1xuXHRcdFx0XHR2YXIgc291cmNlLCBzaXplcztcblx0XHRcdFx0dmFyIHBpY3R1cmUgPSBpbWcucGFyZW50Tm9kZTtcblxuXHRcdFx0XHRpZiAocGljdHVyZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIlBJQ1RVUkVcIikge1xuXHRcdFx0XHRcdHNvdXJjZSA9IGR1bW15U3JjLmNsb25lTm9kZSgpO1xuXG5cdFx0XHRcdFx0cGljdHVyZS5pbnNlcnRCZWZvcmUoc291cmNlLCBwaWN0dXJlLmZpcnN0RWxlbWVudENoaWxkKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cGljdHVyZS5yZW1vdmVDaGlsZChzb3VyY2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFpbWcuX3BmTGFzdFNpemUgfHwgaW1nLm9mZnNldFdpZHRoID4gaW1nLl9wZkxhc3RTaXplKSB7XG5cdFx0XHRcdFx0aW1nLl9wZkxhc3RTaXplID0gaW1nLm9mZnNldFdpZHRoO1xuXHRcdFx0XHRcdHNpemVzID0gaW1nLnNpemVzO1xuXHRcdFx0XHRcdGltZy5zaXplcyArPSBcIiwxMDB2d1wiO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpbWcuc2l6ZXMgPSBzaXplcztcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dmFyIGZpbmRQaWN0dXJlSW1ncyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaTtcblx0XHRcdFx0dmFyIGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicGljdHVyZSA+IGltZywgaW1nW3NyY3NldF1bc2l6ZXNdXCIpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGZpeFJlc3BpbWcoaW1nc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2YXIgb25SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KGZpbmRQaWN0dXJlSW1ncywgOTkpO1xuXHRcdFx0fTtcblx0XHRcdHZhciBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhICYmIG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik7XG5cdFx0XHR2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRvblJlc2l6ZSgpO1xuXG5cdFx0XHRcdGlmIChtcSAmJiBtcS5hZGRMaXN0ZW5lcikge1xuXHRcdFx0XHRcdG1xLmFkZExpc3RlbmVyKG9uUmVzaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0ZHVtbXlTcmMuc3Jjc2V0ID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiO1xuXG5cdFx0XHRpZiAoL15bY3xpXXxkJC8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlIHx8IFwiXCIpKSB7XG5cdFx0XHRcdGluaXQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb25SZXNpemU7XG5cdFx0fSkoKSk7XG5cdH1cbn0pKHdpbmRvdyk7XG5cbi8qISBQaWN0dXJlZmlsbCAtIHYzLjAuMlxuICogaHR0cDovL3Njb3R0amVobC5naXRodWIuaW8vcGljdHVyZWZpbGxcbiAqIENvcHlyaWdodCAoYykgMjAxNSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL2Jsb2IvbWFzdGVyL0F1dGhvcnMudHh0O1xuICogIExpY2Vuc2U6IE1JVFxuICovXG5cbihmdW5jdGlvbiggd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkICkge1xuXHQvLyBFbmFibGUgc3RyaWN0IG1vZGVcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0Ly8gSFRNTCBzaGltfHYgaXQgZm9yIG9sZCBJRSAoSUU5IHdpbGwgc3RpbGwgbmVlZCB0aGUgSFRNTCB2aWRlbyB0YWcgd29ya2Fyb3VuZClcblx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJwaWN0dXJlXCIgKTtcblxuXHR2YXIgd2FybiwgZW1pbnB4LCBhbHdheXNDaGVja1dEZXNjcmlwdG9yLCBldmFsSWQ7XG5cdC8vIGxvY2FsIG9iamVjdCBmb3IgbWV0aG9kIHJlZmVyZW5jZXMgYW5kIHRlc3RpbmcgZXhwb3N1cmVcblx0dmFyIHBmID0ge307XG5cdHZhciBpc1N1cHBvcnRUZXN0UmVhZHkgPSBmYWxzZTtcblx0dmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXHR2YXIgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImltZ1wiICk7XG5cdHZhciBnZXRJbWdBdHRyID0gaW1hZ2UuZ2V0QXR0cmlidXRlO1xuXHR2YXIgc2V0SW1nQXR0ciA9IGltYWdlLnNldEF0dHJpYnV0ZTtcblx0dmFyIHJlbW92ZUltZ0F0dHIgPSBpbWFnZS5yZW1vdmVBdHRyaWJ1dGU7XG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHR2YXIgdHlwZXMgPSB7fTtcblx0dmFyIGNmZyA9IHtcblx0XHQvL3Jlc291cmNlIHNlbGVjdGlvbjpcblx0XHRhbGdvcml0aG06IFwiXCJcblx0fTtcblx0dmFyIHNyY0F0dHIgPSBcImRhdGEtcGZzcmNcIjtcblx0dmFyIHNyY3NldEF0dHIgPSBzcmNBdHRyICsgXCJzZXRcIjtcblx0Ly8gdWEgc25pZmZpbmcgaXMgZG9uZSBmb3IgdW5kZXRlY3RhYmxlIGltZyBsb2FkaW5nIGZlYXR1cmVzLFxuXHQvLyB0byBkbyBzb21lIG5vbiBjcnVjaWFsIHBlcmYgb3B0aW1pemF0aW9uc1xuXHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHR2YXIgc3VwcG9ydEFib3J0ID0gKC9yaWRlbnQvKS50ZXN0KHVhKSB8fCAoKC9lY2tvLykudGVzdCh1YSkgJiYgdWEubWF0Y2goL3J2XFw6KFxcZCspLykgJiYgUmVnRXhwLiQxID4gMzUgKTtcblx0dmFyIGN1clNyY1Byb3AgPSBcImN1cnJlbnRTcmNcIjtcblx0dmFyIHJlZ1dEZXNjID0gL1xccytcXCs/XFxkKyhlXFxkKyk/dy87XG5cdHZhciByZWdTaXplID0gLyhcXChbXildK1xcKSk/XFxzKiguKykvO1xuXHR2YXIgc2V0T3B0aW9ucyA9IHdpbmRvdy5waWN0dXJlZmlsbENGRztcblx0LyoqXG5cdCAqIFNob3J0Y3V0IHByb3BlcnR5IGZvciBodHRwczovL3czYy5naXRodWIuaW8vd2ViYXBwc2VjL3NwZWNzL21peGVkY29udGVudC8jcmVzdHJpY3RzLW1peGVkLWNvbnRlbnQgKCBmb3IgZWFzeSBvdmVycmlkaW5nIGluIHRlc3RzIClcblx0ICovXG5cdC8vIGJhc2VTdHlsZSBhbHNvIHVzZWQgYnkgZ2V0RW1WYWx1ZSAoaS5lLjogd2lkdGg6IDFlbSBpcyBpbXBvcnRhbnQpXG5cdHZhciBiYXNlU3R5bGUgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt2aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmb250LXNpemU6MWVtO3dpZHRoOjFlbTtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDBweCwgMHB4LCAwcHgsIDBweClcIjtcblx0dmFyIGZzQ3NzID0gXCJmb250LXNpemU6MTAwJSFpbXBvcnRhbnQ7XCI7XG5cdHZhciBpc1Z3RGlydHkgPSB0cnVlO1xuXG5cdHZhciBjc3NDYWNoZSA9IHt9O1xuXHR2YXIgc2l6ZUxlbmd0aENhY2hlID0ge307XG5cdHZhciBEUFIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0dmFyIHVuaXRzID0ge1xuXHRcdHB4OiAxLFxuXHRcdFwiaW5cIjogOTZcblx0fTtcblx0dmFyIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiYVwiICk7XG5cdC8qKlxuXHQgKiBhbHJlYWR5UnVuIGZsYWcgdXNlZCBmb3Igc2V0T3B0aW9ucy4gaXMgaXQgdHJ1ZSBzZXRPcHRpb25zIHdpbGwgcmVldmFsdWF0ZVxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdHZhciBhbHJlYWR5UnVuID0gZmFsc2U7XG5cblx0Ly8gUmV1c2FibGUsIG5vbi1cImdcIiBSZWdleGVzXG5cblx0Ly8gKERvbid0IHVzZSBcXHMsIHRvIGF2b2lkIG1hdGNoaW5nIG5vbi1icmVha2luZyBzcGFjZS4pXG5cdHZhciByZWdleExlYWRpbmdTcGFjZXMgPSAvXlsgXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4TGVhZGluZ0NvbW1hc09yU3BhY2VzID0gL15bLCBcXHRcXG5cXHJcXHUwMDBjXSsvLFxuXHQgICAgcmVnZXhMZWFkaW5nTm90U3BhY2VzID0gL15bXiBcXHRcXG5cXHJcXHUwMDBjXSsvLFxuXHQgICAgcmVnZXhUcmFpbGluZ0NvbW1hcyA9IC9bLF0rJC8sXG5cdCAgICByZWdleE5vbk5lZ2F0aXZlSW50ZWdlciA9IC9eXFxkKyQvLFxuXG5cdCAgICAvLyAoIFBvc2l0aXZlIG9yIG5lZ2F0aXZlIG9yIHVuc2lnbmVkIGludGVnZXJzIG9yIGRlY2ltYWxzLCB3aXRob3V0IG9yIHdpdGhvdXQgZXhwb25lbnRzLlxuXHQgICAgLy8gTXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBkaWdpdC5cblx0ICAgIC8vIEFjY29yZGluZyB0byBzcGVjIHRlc3RzIGFueSBkZWNpbWFsIHBvaW50IG11c3QgYmUgZm9sbG93ZWQgYnkgYSBkaWdpdC5cblx0ICAgIC8vIE5vIGxlYWRpbmcgcGx1cyBzaWduIGlzIGFsbG93ZWQuKVxuXHQgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCN2YWxpZC1mbG9hdGluZy1wb2ludC1udW1iZXJcblx0ICAgIHJlZ2V4RmxvYXRpbmdQb2ludCA9IC9eLT8oPzpbMC05XSt8WzAtOV0qXFwuWzAtOV0rKSg/OltlRV1bKy1dP1swLTldKyk/JC87XG5cblx0dmFyIG9uID0gZnVuY3Rpb24ob2JqLCBldnQsIGZuLCBjYXB0dXJlKSB7XG5cdFx0aWYgKCBvYmouYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdG9iai5hZGRFdmVudExpc3RlbmVyKGV2dCwgZm4sIGNhcHR1cmUgfHwgZmFsc2UpO1xuXHRcdH0gZWxzZSBpZiAoIG9iai5hdHRhY2hFdmVudCApIHtcblx0XHRcdG9iai5hdHRhY2hFdmVudCggXCJvblwiICsgZXZ0LCBmbik7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBzaW1wbGUgbWVtb2l6ZSBmdW5jdGlvbjpcblx0ICovXG5cblx0dmFyIG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBjYWNoZSA9IHt9O1xuXHRcdHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuXHRcdFx0aWYgKCAhKGlucHV0IGluIGNhY2hlKSApIHtcblx0XHRcdFx0Y2FjaGVbIGlucHV0IF0gPSBmbihpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2FjaGVbIGlucHV0IF07XG5cdFx0fTtcblx0fTtcblxuXHQvLyBVVElMSVRZIEZVTkNUSU9OU1xuXG5cdC8vIE1hbnVhbCBpcyBmYXN0ZXIgdGhhbiBSZWdFeFxuXHQvLyBodHRwOi8vanNwZXJmLmNvbS93aGl0ZXNwYWNlLWNoYXJhY3Rlci81XG5cdGZ1bmN0aW9uIGlzU3BhY2UoYykge1xuXHRcdHJldHVybiAoYyA9PT0gXCJcXHUwMDIwXCIgfHwgLy8gc3BhY2Vcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwOVwiIHx8IC8vIGhvcml6b250YWwgdGFiXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMEFcIiB8fCAvLyBuZXcgbGluZVxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBDXCIgfHwgLy8gZm9ybSBmZWVkXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMERcIik7ICAvLyBjYXJyaWFnZSByZXR1cm5cblx0fVxuXG5cdC8qKlxuXHQgKiBnZXRzIGEgbWVkaWFxdWVyeSBhbmQgcmV0dXJucyBhIGJvb2xlYW4gb3IgZ2V0cyBhIGNzcyBsZW5ndGggYW5kIHJldHVybnMgYSBudW1iZXJcblx0ICogQHBhcmFtIGNzcyBtZWRpYXF1ZXJpZXMgb3IgY3NzIGxlbmd0aFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxudW1iZXJ9XG5cdCAqXG5cdCAqIGJhc2VkIG9uOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL2RiNGY3NzAwOWIxNTVmMDgzNzM4XG5cdCAqL1xuXHR2YXIgZXZhbENTUyA9IChmdW5jdGlvbigpIHtcblxuXHRcdHZhciByZWdMZW5ndGggPSAvXihbXFxkXFwuXSspKGVtfHZ3fHB4KSQvO1xuXHRcdHZhciByZXBsYWNlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cywgaW5kZXggPSAwLCBzdHJpbmcgPSBhcmdzWzBdO1xuXHRcdFx0d2hpbGUgKCsraW5kZXggaW4gYXJncykge1xuXHRcdFx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShhcmdzW2luZGV4XSwgYXJnc1srK2luZGV4XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyaW5nO1xuXHRcdH07XG5cblx0XHR2YXIgYnVpbGRTdHIgPSBtZW1vaXplKGZ1bmN0aW9uKGNzcykge1xuXG5cdFx0XHRyZXR1cm4gXCJyZXR1cm4gXCIgKyByZXBsYWNlKChjc3MgfHwgXCJcIikudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGBhbmRgXG5cdFx0XHRcdC9cXGJhbmRcXGIvZywgXCImJlwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgLGBcblx0XHRcdFx0LywvZywgXCJ8fFwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgbWluLWAgYXMgPj1cblx0XHRcdFx0L21pbi0oW2Etei1cXHNdKyk6L2csIFwiZS4kMT49XCIsXG5cblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGBtYXgtYCBhcyA8PVxuXHRcdFx0XHQvbWF4LShbYS16LVxcc10rKTovZywgXCJlLiQxPD1cIixcblxuXHRcdFx0XHQvL2NhbGMgdmFsdWVcblx0XHRcdFx0L2NhbGMoW14pXSspL2csIFwiKCQxKVwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBjc3MgdmFsdWVzXG5cdFx0XHRcdC8oXFxkK1tcXC5dKltcXGRdKikoW2Etel0rKS9nLCBcIigkMSAqIGUuJDIpXCIsXG5cdFx0XHRcdC8vbWFrZSBldmFsIGxlc3MgZXZpbFxuXHRcdFx0XHQvXig/IShlLlthLXpdfFswLTlcXC4mPXw+PFxcK1xcLVxcKlxcKFxcKVxcL10pKS4qL2lnLCBcIlwiXG5cdFx0XHQpICsgXCI7XCI7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oY3NzLCBsZW5ndGgpIHtcblx0XHRcdHZhciBwYXJzZWRMZW5ndGg7XG5cdFx0XHRpZiAoIShjc3MgaW4gY3NzQ2FjaGUpKSB7XG5cdFx0XHRcdGNzc0NhY2hlW2Nzc10gPSBmYWxzZTtcblx0XHRcdFx0aWYgKGxlbmd0aCAmJiAocGFyc2VkTGVuZ3RoID0gY3NzLm1hdGNoKCByZWdMZW5ndGggKSkpIHtcblx0XHRcdFx0XHRjc3NDYWNoZVtjc3NdID0gcGFyc2VkTGVuZ3RoWyAxIF0gKiB1bml0c1twYXJzZWRMZW5ndGhbIDIgXV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Lypqc2hpbnQgZXZpbDp0cnVlICovXG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0Y3NzQ2FjaGVbY3NzXSA9IG5ldyBGdW5jdGlvbihcImVcIiwgYnVpbGRTdHIoY3NzKSkodW5pdHMpO1xuXHRcdFx0XHRcdH0gY2F0Y2goZSkge31cblx0XHRcdFx0XHQvKmpzaGludCBldmlsOmZhbHNlICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjc3NDYWNoZVtjc3NdO1xuXHRcdH07XG5cdH0pKCk7XG5cblx0dmFyIHNldFJlc29sdXRpb24gPSBmdW5jdGlvbiggY2FuZGlkYXRlLCBzaXplc2F0dHIgKSB7XG5cdFx0aWYgKCBjYW5kaWRhdGUudyApIHsgLy8gaCA9IG1lYW5zIGhlaWdodDogfHwgZGVzY3JpcHRvci50eXBlID09PSAnaCcgZG8gbm90IGhhbmRsZSB5ZXQuLi5cblx0XHRcdGNhbmRpZGF0ZS5jV2lkdGggPSBwZi5jYWxjTGlzdExlbmd0aCggc2l6ZXNhdHRyIHx8IFwiMTAwdndcIiApO1xuXHRcdFx0Y2FuZGlkYXRlLnJlcyA9IGNhbmRpZGF0ZS53IC8gY2FuZGlkYXRlLmNXaWR0aCA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbmRpZGF0ZS5yZXMgPSBjYW5kaWRhdGUuZDtcblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fTtcblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIG9wdFxuXHQgKi9cblx0dmFyIHBpY3R1cmVmaWxsID0gZnVuY3Rpb24oIG9wdCApIHtcblxuXHRcdGlmICghaXNTdXBwb3J0VGVzdFJlYWR5KSB7cmV0dXJuO31cblxuXHRcdHZhciBlbGVtZW50cywgaSwgcGxlbjtcblxuXHRcdHZhciBvcHRpb25zID0gb3B0IHx8IHt9O1xuXG5cdFx0aWYgKCBvcHRpb25zLmVsZW1lbnRzICYmIG9wdGlvbnMuZWxlbWVudHMubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRpZiAoIG9wdGlvbnMuZWxlbWVudHMubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJJTUdcIiApIHtcblx0XHRcdFx0b3B0aW9ucy5lbGVtZW50cyA9ICBbIG9wdGlvbnMuZWxlbWVudHMgXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdGlvbnMuY29udGV4dCA9IG9wdGlvbnMuZWxlbWVudHM7XG5cdFx0XHRcdG9wdGlvbnMuZWxlbWVudHMgPSAgbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRlbGVtZW50cyA9IG9wdGlvbnMuZWxlbWVudHMgfHwgcGYucXNhKCAob3B0aW9ucy5jb250ZXh0IHx8IGRvY3VtZW50KSwgKCBvcHRpb25zLnJlZXZhbHVhdGUgfHwgb3B0aW9ucy5yZXNlbGVjdCApID8gcGYuc2VsIDogcGYuc2VsU2hvcnQgKTtcblxuXHRcdGlmICggKHBsZW4gPSBlbGVtZW50cy5sZW5ndGgpICkge1xuXG5cdFx0XHRwZi5zZXR1cFJ1biggb3B0aW9ucyApO1xuXHRcdFx0YWxyZWFkeVJ1biA9IHRydWU7XG5cblx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgZWxlbWVudHNcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgcGxlbjsgaSsrICkge1xuXHRcdFx0XHRwZi5maWxsSW1nKGVsZW1lbnRzWyBpIF0sIG9wdGlvbnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRwZi50ZWFyZG93blJ1biggb3B0aW9ucyApO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogb3V0cHV0cyBhIHdhcm5pbmcgZm9yIHRoZSBkZXZlbG9wZXJcblx0ICogQHBhcmFtIHttZXNzYWdlfVxuXHQgKiBAdHlwZSB7RnVuY3Rpb259XG5cdCAqL1xuXHR3YXJuID0gKCB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4gKSA/XG5cdFx0ZnVuY3Rpb24oIG1lc3NhZ2UgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oIG1lc3NhZ2UgKTtcblx0XHR9IDpcblx0XHRub29wXG5cdDtcblxuXHRpZiAoICEoY3VyU3JjUHJvcCBpbiBpbWFnZSkgKSB7XG5cdFx0Y3VyU3JjUHJvcCA9IFwic3JjXCI7XG5cdH1cblxuXHQvLyBBZGQgc3VwcG9ydCBmb3Igc3RhbmRhcmQgbWltZSB0eXBlcy5cblx0dHlwZXNbIFwiaW1hZ2UvanBlZ1wiIF0gPSB0cnVlO1xuXHR0eXBlc1sgXCJpbWFnZS9naWZcIiBdID0gdHJ1ZTtcblx0dHlwZXNbIFwiaW1hZ2UvcG5nXCIgXSA9IHRydWU7XG5cblx0ZnVuY3Rpb24gZGV0ZWN0VHlwZVN1cHBvcnQoIHR5cGUsIHR5cGVVcmkgKSB7XG5cdFx0Ly8gYmFzZWQgb24gTW9kZXJuaXpyJ3MgbG9zc2xlc3MgaW1nLXdlYnAgdGVzdFxuXHRcdC8vIG5vdGU6IGFzeW5jaHJvbm91c1xuXHRcdHZhciBpbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcblx0XHRpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0eXBlc1sgdHlwZSBdID0gZmFsc2U7XG5cdFx0XHRwaWN0dXJlZmlsbCgpO1xuXHRcdH07XG5cdFx0aW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0eXBlc1sgdHlwZSBdID0gaW1hZ2Uud2lkdGggPT09IDE7XG5cdFx0XHRwaWN0dXJlZmlsbCgpO1xuXHRcdH07XG5cdFx0aW1hZ2Uuc3JjID0gdHlwZVVyaTtcblx0XHRyZXR1cm4gXCJwZW5kaW5nXCI7XG5cdH1cblxuXHQvLyB0ZXN0IHN2ZyBzdXBwb3J0XG5cdHR5cGVzWyBcImltYWdlL3N2Zyt4bWxcIiBdID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSggXCJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0ltYWdlXCIsIFwiMS4xXCIgKTtcblxuXHQvKipcblx0ICogdXBkYXRlcyB0aGUgaW50ZXJuYWwgdlcgcHJvcGVydHkgd2l0aCB0aGUgY3VycmVudCB2aWV3cG9ydCB3aWR0aCBpbiBweFxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlTWV0cmljcygpIHtcblxuXHRcdGlzVndEaXJ0eSA9IGZhbHNlO1xuXHRcdERQUiA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHRcdGNzc0NhY2hlID0ge307XG5cdFx0c2l6ZUxlbmd0aENhY2hlID0ge307XG5cblx0XHRwZi5EUFIgPSBEUFIgfHwgMTtcblxuXHRcdHVuaXRzLndpZHRoID0gTWF0aC5tYXgod2luZG93LmlubmVyV2lkdGggfHwgMCwgZG9jRWxlbS5jbGllbnRXaWR0aCk7XG5cdFx0dW5pdHMuaGVpZ2h0ID0gTWF0aC5tYXgod2luZG93LmlubmVySGVpZ2h0IHx8IDAsIGRvY0VsZW0uY2xpZW50SGVpZ2h0KTtcblxuXHRcdHVuaXRzLnZ3ID0gdW5pdHMud2lkdGggLyAxMDA7XG5cdFx0dW5pdHMudmggPSB1bml0cy5oZWlnaHQgLyAxMDA7XG5cblx0XHRldmFsSWQgPSBbIHVuaXRzLmhlaWdodCwgdW5pdHMud2lkdGgsIERQUiBdLmpvaW4oXCItXCIpO1xuXG5cdFx0dW5pdHMuZW0gPSBwZi5nZXRFbVZhbHVlKCk7XG5cdFx0dW5pdHMucmVtID0gdW5pdHMuZW07XG5cdH1cblxuXHRmdW5jdGlvbiBjaG9vc2VMb3dSZXMoIGxvd2VyVmFsdWUsIGhpZ2hlclZhbHVlLCBkcHJWYWx1ZSwgaXNDYWNoZWQgKSB7XG5cdFx0dmFyIGJvbnVzRmFjdG9yLCB0b29NdWNoLCBib251cywgbWVhbkRlbnNpdHk7XG5cblx0XHQvL2V4cGVyaW1lbnRhbFxuXHRcdGlmIChjZmcuYWxnb3JpdGhtID09PSBcInNhdmVEYXRhXCIgKXtcblx0XHRcdGlmICggbG93ZXJWYWx1ZSA+IDIuNyApIHtcblx0XHRcdFx0bWVhbkRlbnNpdHkgPSBkcHJWYWx1ZSArIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b29NdWNoID0gaGlnaGVyVmFsdWUgLSBkcHJWYWx1ZTtcblx0XHRcdFx0Ym9udXNGYWN0b3IgPSBNYXRoLnBvdyhsb3dlclZhbHVlIC0gMC42LCAxLjUpO1xuXG5cdFx0XHRcdGJvbnVzID0gdG9vTXVjaCAqIGJvbnVzRmFjdG9yO1xuXG5cdFx0XHRcdGlmIChpc0NhY2hlZCkge1xuXHRcdFx0XHRcdGJvbnVzICs9IDAuMSAqIGJvbnVzRmFjdG9yO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVhbkRlbnNpdHkgPSBsb3dlclZhbHVlICsgYm9udXM7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1lYW5EZW5zaXR5ID0gKGRwclZhbHVlID4gMSkgP1xuXHRcdFx0XHRNYXRoLnNxcnQobG93ZXJWYWx1ZSAqIGhpZ2hlclZhbHVlKSA6XG5cdFx0XHRcdGxvd2VyVmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lYW5EZW5zaXR5ID4gZHByVmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBhcHBseUJlc3RDYW5kaWRhdGUoIGltZyApIHtcblx0XHR2YXIgc3JjU2V0Q2FuZGlkYXRlcztcblx0XHR2YXIgbWF0Y2hpbmdTZXQgPSBwZi5nZXRTZXQoIGltZyApO1xuXHRcdHZhciBldmFsdWF0ZWQgPSBmYWxzZTtcblx0XHRpZiAoIG1hdGNoaW5nU2V0ICE9PSBcInBlbmRpbmdcIiApIHtcblx0XHRcdGV2YWx1YXRlZCA9IGV2YWxJZDtcblx0XHRcdGlmICggbWF0Y2hpbmdTZXQgKSB7XG5cdFx0XHRcdHNyY1NldENhbmRpZGF0ZXMgPSBwZi5zZXRSZXMoIG1hdGNoaW5nU2V0ICk7XG5cdFx0XHRcdHBmLmFwcGx5U2V0Q2FuZGlkYXRlKCBzcmNTZXRDYW5kaWRhdGVzLCBpbWcgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aW1nWyBwZi5ucyBdLmV2YWxlZCA9IGV2YWx1YXRlZDtcblx0fVxuXG5cdGZ1bmN0aW9uIGFzY2VuZGluZ1NvcnQoIGEsIGIgKSB7XG5cdFx0cmV0dXJuIGEucmVzIC0gYi5yZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRTcmNUb0N1ciggaW1nLCBzcmMsIHNldCApIHtcblx0XHR2YXIgY2FuZGlkYXRlO1xuXHRcdGlmICggIXNldCAmJiBzcmMgKSB7XG5cdFx0XHRzZXQgPSBpbWdbIHBmLm5zIF0uc2V0cztcblx0XHRcdHNldCA9IHNldCAmJiBzZXRbc2V0Lmxlbmd0aCAtIDFdO1xuXHRcdH1cblxuXHRcdGNhbmRpZGF0ZSA9IGdldENhbmRpZGF0ZUZvclNyYyhzcmMsIHNldCk7XG5cblx0XHRpZiAoIGNhbmRpZGF0ZSApIHtcblx0XHRcdHNyYyA9IHBmLm1ha2VVcmwoc3JjKTtcblx0XHRcdGltZ1sgcGYubnMgXS5jdXJTcmMgPSBzcmM7XG5cdFx0XHRpbWdbIHBmLm5zIF0uY3VyQ2FuID0gY2FuZGlkYXRlO1xuXG5cdFx0XHRpZiAoICFjYW5kaWRhdGUucmVzICkge1xuXHRcdFx0XHRzZXRSZXNvbHV0aW9uKCBjYW5kaWRhdGUsIGNhbmRpZGF0ZS5zZXQuc2l6ZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENhbmRpZGF0ZUZvclNyYyggc3JjLCBzZXQgKSB7XG5cdFx0dmFyIGksIGNhbmRpZGF0ZSwgY2FuZGlkYXRlcztcblx0XHRpZiAoIHNyYyAmJiBzZXQgKSB7XG5cdFx0XHRjYW5kaWRhdGVzID0gcGYucGFyc2VTZXQoIHNldCApO1xuXHRcdFx0c3JjID0gcGYubWFrZVVybChzcmMpO1xuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIHNyYyA9PT0gcGYubWFrZVVybChjYW5kaWRhdGVzWyBpIF0udXJsKSApIHtcblx0XHRcdFx0XHRjYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBpIF07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEFsbFNvdXJjZUVsZW1lbnRzKCBwaWN0dXJlLCBjYW5kaWRhdGVzICkge1xuXHRcdHZhciBpLCBsZW4sIHNvdXJjZSwgc3Jjc2V0O1xuXG5cdFx0Ly8gU1BFQyBtaXNtYXRjaCBpbnRlbmRlZCBmb3Igc2l6ZSBhbmQgcGVyZjpcblx0XHQvLyBhY3R1YWxseSBvbmx5IHNvdXJjZSBlbGVtZW50cyBwcmVjZWRpbmcgdGhlIGltZyBzaG91bGQgYmUgdXNlZFxuXHRcdC8vIGFsc28gbm90ZTogZG9uJ3QgdXNlIHFzYSBoZXJlLCBiZWNhdXNlIElFOCBzb21ldGltZXMgZG9lc24ndCBsaWtlIHNvdXJjZSBhcyB0aGUga2V5IHBhcnQgaW4gYSBzZWxlY3RvclxuXHRcdHZhciBzb3VyY2VzID0gcGljdHVyZS5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJzb3VyY2VcIiApO1xuXG5cdFx0Zm9yICggaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRzb3VyY2UgPSBzb3VyY2VzWyBpIF07XG5cdFx0XHRzb3VyY2VbIHBmLm5zIF0gPSB0cnVlO1xuXHRcdFx0c3Jjc2V0ID0gc291cmNlLmdldEF0dHJpYnV0ZSggXCJzcmNzZXRcIiApO1xuXG5cdFx0XHQvLyBpZiBzb3VyY2UgZG9lcyBub3QgaGF2ZSBhIHNyY3NldCBhdHRyaWJ1dGUsIHNraXBcblx0XHRcdGlmICggc3Jjc2V0ICkge1xuXHRcdFx0XHRjYW5kaWRhdGVzLnB1c2goIHtcblx0XHRcdFx0XHRzcmNzZXQ6IHNyY3NldCxcblx0XHRcdFx0XHRtZWRpYTogc291cmNlLmdldEF0dHJpYnV0ZSggXCJtZWRpYVwiICksXG5cdFx0XHRcdFx0dHlwZTogc291cmNlLmdldEF0dHJpYnV0ZSggXCJ0eXBlXCIgKSxcblx0XHRcdFx0XHRzaXplczogc291cmNlLmdldEF0dHJpYnV0ZSggXCJzaXplc1wiIClcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTcmNzZXQgUGFyc2VyXG5cdCAqIEJ5IEFsZXggQmVsbCB8ICBNSVQgTGljZW5zZVxuXHQgKlxuXHQgKiBAcmV0dXJucyBBcnJheSBbe3VybDogXywgZDogXywgdzogXywgaDpfLCBzZXQ6Xyg/Pz8/KX0sIC4uLl1cblx0ICpcblx0ICogQmFzZWQgc3VwZXIgZHVwZXIgY2xvc2VseSBvbiB0aGUgcmVmZXJlbmNlIGFsZ29yaXRobSBhdDpcblx0ICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW1iZWRkZWQtY29udGVudC5odG1sI3BhcnNlLWEtc3Jjc2V0LWF0dHJpYnV0ZVxuXHQgKi9cblxuXHQvLyAxLiBMZXQgaW5wdXQgYmUgdGhlIHZhbHVlIHBhc3NlZCB0byB0aGlzIGFsZ29yaXRobS5cblx0Ly8gKFRPLURPIDogRXhwbGFpbiB3aGF0IFwic2V0XCIgYXJndW1lbnQgaXMgaGVyZS4gTWF5YmUgY2hvb3NlIGEgbW9yZVxuXHQvLyBkZXNjcmlwdGl2ZSAmIG1vcmUgc2VhcmNoYWJsZSBuYW1lLiAgU2luY2UgcGFzc2luZyB0aGUgXCJzZXRcIiBpbiByZWFsbHkgaGFzXG5cdC8vIG5vdGhpbmcgdG8gZG8gd2l0aCBwYXJzaW5nIHByb3BlciwgSSB3b3VsZCBwcmVmZXIgdGhpcyBhc3NpZ25tZW50IGV2ZW50dWFsbHlcblx0Ly8gZ28gaW4gYW4gZXh0ZXJuYWwgZm4uKVxuXHRmdW5jdGlvbiBwYXJzZVNyY3NldChpbnB1dCwgc2V0KSB7XG5cblx0XHRmdW5jdGlvbiBjb2xsZWN0Q2hhcmFjdGVycyhyZWdFeCkge1xuXHRcdFx0dmFyIGNoYXJzLFxuXHRcdFx0ICAgIG1hdGNoID0gcmVnRXguZXhlYyhpbnB1dC5zdWJzdHJpbmcocG9zKSk7XG5cdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0Y2hhcnMgPSBtYXRjaFsgMCBdO1xuXHRcdFx0XHRwb3MgKz0gY2hhcnMubGVuZ3RoO1xuXHRcdFx0XHRyZXR1cm4gY2hhcnM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuXHRcdCAgICB1cmwsXG5cdFx0ICAgIGRlc2NyaXB0b3JzLFxuXHRcdCAgICBjdXJyZW50RGVzY3JpcHRvcixcblx0XHQgICAgc3RhdGUsXG5cdFx0ICAgIGMsXG5cblx0XHQgICAgLy8gMi4gTGV0IHBvc2l0aW9uIGJlIGEgcG9pbnRlciBpbnRvIGlucHV0LCBpbml0aWFsbHkgcG9pbnRpbmcgYXQgdGhlIHN0YXJ0XG5cdFx0ICAgIC8vICAgIG9mIHRoZSBzdHJpbmcuXG5cdFx0ICAgIHBvcyA9IDAsXG5cblx0XHQgICAgLy8gMy4gTGV0IGNhbmRpZGF0ZXMgYmUgYW4gaW5pdGlhbGx5IGVtcHR5IHNvdXJjZSBzZXQuXG5cdFx0ICAgIGNhbmRpZGF0ZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCogQWRkcyBkZXNjcmlwdG9yIHByb3BlcnRpZXMgdG8gYSBjYW5kaWRhdGUsIHB1c2hlcyB0byB0aGUgY2FuZGlkYXRlcyBhcnJheVxuXHRcdCogQHJldHVybiB1bmRlZmluZWRcblx0XHQqL1xuXHRcdC8vIChEZWNsYXJlZCBvdXRzaWRlIG9mIHRoZSB3aGlsZSBsb29wIHNvIHRoYXQgaXQncyBvbmx5IGNyZWF0ZWQgb25jZS5cblx0XHQvLyAoVGhpcyBmbiBpcyBkZWZpbmVkIGJlZm9yZSBpdCBpcyB1c2VkLCBpbiBvcmRlciB0byBwYXNzIEpTSElOVC5cblx0XHQvLyBVbmZvcnR1bmF0ZWx5IHRoaXMgYnJlYWtzIHRoZSBzZXF1ZW5jaW5nIG9mIHRoZSBzcGVjIGNvbW1lbnRzLiA6LyApXG5cdFx0ZnVuY3Rpb24gcGFyc2VEZXNjcmlwdG9ycygpIHtcblxuXHRcdFx0Ly8gOS4gRGVzY3JpcHRvciBwYXJzZXI6IExldCBlcnJvciBiZSBuby5cblx0XHRcdHZhciBwRXJyb3IgPSBmYWxzZSxcblxuXHRcdFx0Ly8gMTAuIExldCB3aWR0aCBiZSBhYnNlbnQuXG5cdFx0XHQvLyAxMS4gTGV0IGRlbnNpdHkgYmUgYWJzZW50LlxuXHRcdFx0Ly8gMTIuIExldCBmdXR1cmUtY29tcGF0LWggYmUgYWJzZW50LiAoV2UncmUgaW1wbGVtZW50aW5nIGl0IG5vdyBhcyBoKVxuXHRcdFx0ICAgIHcsIGQsIGgsIGksXG5cdFx0XHQgICAgY2FuZGlkYXRlID0ge30sXG5cdFx0XHQgICAgZGVzYywgbGFzdENoYXIsIHZhbHVlLCBpbnRWYWwsIGZsb2F0VmFsO1xuXG5cdFx0XHQvLyAxMy4gRm9yIGVhY2ggZGVzY3JpcHRvciBpbiBkZXNjcmlwdG9ycywgcnVuIHRoZSBhcHByb3ByaWF0ZSBzZXQgb2Ygc3RlcHNcblx0XHRcdC8vIGZyb20gdGhlIGZvbGxvd2luZyBsaXN0OlxuXHRcdFx0Zm9yIChpID0gMCA7IGkgPCBkZXNjcmlwdG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkZXNjID0gZGVzY3JpcHRvcnNbIGkgXTtcblxuXHRcdFx0XHRsYXN0Q2hhciA9IGRlc2NbIGRlc2MubGVuZ3RoIC0gMSBdO1xuXHRcdFx0XHR2YWx1ZSA9IGRlc2Muc3Vic3RyaW5nKDAsIGRlc2MubGVuZ3RoIC0gMSk7XG5cdFx0XHRcdGludFZhbCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cdFx0XHRcdGZsb2F0VmFsID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGRlc2NyaXB0b3IgY29uc2lzdHMgb2YgYSB2YWxpZCBub24tbmVnYXRpdmUgaW50ZWdlciBmb2xsb3dlZCBieVxuXHRcdFx0XHQvLyBhIFUrMDA3NyBMQVRJTiBTTUFMTCBMRVRURVIgVyBjaGFyYWN0ZXJcblx0XHRcdFx0aWYgKHJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyLnRlc3QodmFsdWUpICYmIChsYXN0Q2hhciA9PT0gXCJ3XCIpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB3aWR0aCBhbmQgZGVuc2l0eSBhcmUgbm90IGJvdGggYWJzZW50LCB0aGVuIGxldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdFx0aWYgKHcgfHwgZCkge3BFcnJvciA9IHRydWU7fVxuXG5cdFx0XHRcdFx0Ly8gQXBwbHkgdGhlIHJ1bGVzIGZvciBwYXJzaW5nIG5vbi1uZWdhdGl2ZSBpbnRlZ2VycyB0byB0aGUgZGVzY3JpcHRvci5cblx0XHRcdFx0XHQvLyBJZiB0aGUgcmVzdWx0IGlzIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBsZXQgd2lkdGggYmUgdGhlIHJlc3VsdC5cblx0XHRcdFx0XHRpZiAoaW50VmFsID09PSAwKSB7cEVycm9yID0gdHJ1ZTt9IGVsc2Uge3cgPSBpbnRWYWw7fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgZmxvYXRpbmctcG9pbnQgbnVtYmVyIGZvbGxvd2VkIGJ5XG5cdFx0XHRcdC8vIGEgVSswMDc4IExBVElOIFNNQUxMIExFVFRFUiBYIGNoYXJhY3RlclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlZ2V4RmxvYXRpbmdQb2ludC50ZXN0KHZhbHVlKSAmJiAobGFzdENoYXIgPT09IFwieFwiKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2lkdGgsIGRlbnNpdHkgYW5kIGZ1dHVyZS1jb21wYXQtaCBhcmUgbm90IGFsbCBhYnNlbnQsIHRoZW4gbGV0IGVycm9yXG5cdFx0XHRcdFx0Ly8gYmUgeWVzLlxuXHRcdFx0XHRcdGlmICh3IHx8IGQgfHwgaCkge3BFcnJvciA9IHRydWU7fVxuXG5cdFx0XHRcdFx0Ly8gQXBwbHkgdGhlIHJ1bGVzIGZvciBwYXJzaW5nIGZsb2F0aW5nLXBvaW50IG51bWJlciB2YWx1ZXMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyBsZXNzIHRoYW4gemVybywgbGV0IGVycm9yIGJlIHllcy4gT3RoZXJ3aXNlLCBsZXQgZGVuc2l0eVxuXHRcdFx0XHRcdC8vIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGZsb2F0VmFsIDwgMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHtkID0gZmxvYXRWYWw7fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBVKzAwNjggTEFUSU4gU01BTEwgTEVUVEVSIEggY2hhcmFjdGVyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVnZXhOb25OZWdhdGl2ZUludGVnZXIudGVzdCh2YWx1ZSkgJiYgKGxhc3RDaGFyID09PSBcImhcIikpIHtcblxuXHRcdFx0XHRcdC8vIElmIGhlaWdodCBhbmQgZGVuc2l0eSBhcmUgbm90IGJvdGggYWJzZW50LCB0aGVuIGxldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdFx0aWYgKGggfHwgZCkge3BFcnJvciA9IHRydWU7fVxuXG5cdFx0XHRcdFx0Ly8gQXBwbHkgdGhlIHJ1bGVzIGZvciBwYXJzaW5nIG5vbi1uZWdhdGl2ZSBpbnRlZ2VycyB0byB0aGUgZGVzY3JpcHRvci5cblx0XHRcdFx0XHQvLyBJZiB0aGUgcmVzdWx0IGlzIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuIE90aGVyd2lzZSwgbGV0IGZ1dHVyZS1jb21wYXQtaFxuXHRcdFx0XHRcdC8vIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGludFZhbCA9PT0gMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHtoID0gaW50VmFsO31cblxuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlLCBMZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHR9IGVsc2Uge3BFcnJvciA9IHRydWU7fVxuXHRcdFx0fSAvLyAoY2xvc2Ugc3RlcCAxMyBmb3IgbG9vcClcblxuXHRcdFx0Ly8gMTUuIElmIGVycm9yIGlzIHN0aWxsIG5vLCB0aGVuIGFwcGVuZCBhIG5ldyBpbWFnZSBzb3VyY2UgdG8gY2FuZGlkYXRlcyB3aG9zZVxuXHRcdFx0Ly8gVVJMIGlzIHVybCwgYXNzb2NpYXRlZCB3aXRoIGEgd2lkdGggd2lkdGggaWYgbm90IGFic2VudCBhbmQgYSBwaXhlbFxuXHRcdFx0Ly8gZGVuc2l0eSBkZW5zaXR5IGlmIG5vdCBhYnNlbnQuIE90aGVyd2lzZSwgdGhlcmUgaXMgYSBwYXJzZSBlcnJvci5cblx0XHRcdGlmICghcEVycm9yKSB7XG5cdFx0XHRcdGNhbmRpZGF0ZS51cmwgPSB1cmw7XG5cblx0XHRcdFx0aWYgKHcpIHsgY2FuZGlkYXRlLncgPSB3O31cblx0XHRcdFx0aWYgKGQpIHsgY2FuZGlkYXRlLmQgPSBkO31cblx0XHRcdFx0aWYgKGgpIHsgY2FuZGlkYXRlLmggPSBoO31cblx0XHRcdFx0aWYgKCFoICYmICFkICYmICF3KSB7Y2FuZGlkYXRlLmQgPSAxO31cblx0XHRcdFx0aWYgKGNhbmRpZGF0ZS5kID09PSAxKSB7c2V0LmhhczF4ID0gdHJ1ZTt9XG5cdFx0XHRcdGNhbmRpZGF0ZS5zZXQgPSBzZXQ7XG5cblx0XHRcdFx0Y2FuZGlkYXRlcy5wdXNoKGNhbmRpZGF0ZSk7XG5cdFx0XHR9XG5cdFx0fSAvLyAoY2xvc2UgcGFyc2VEZXNjcmlwdG9ycyBmbilcblxuXHRcdC8qKlxuXHRcdCogVG9rZW5pemVzIGRlc2NyaXB0b3IgcHJvcGVydGllcyBwcmlvciB0byBwYXJzaW5nXG5cdFx0KiBSZXR1cm5zIHVuZGVmaW5lZC5cblx0XHQqIChBZ2FpbiwgdGhpcyBmbiBpcyBkZWZpbmVkIGJlZm9yZSBpdCBpcyB1c2VkLCBpbiBvcmRlciB0byBwYXNzIEpTSElOVC5cblx0XHQqIFVuZm9ydHVuYXRlbHkgdGhpcyBicmVha3MgdGhlIGxvZ2ljYWwgc2VxdWVuY2luZyBvZiB0aGUgc3BlYyBjb21tZW50cy4gOi8gKVxuXHRcdCovXG5cdFx0ZnVuY3Rpb24gdG9rZW5pemUoKSB7XG5cblx0XHRcdC8vIDguMS4gRGVzY3JpcHRvciB0b2tlbmlzZXI6IFNraXAgd2hpdGVzcGFjZVxuXHRcdFx0Y29sbGVjdENoYXJhY3RlcnMocmVnZXhMZWFkaW5nU3BhY2VzKTtcblxuXHRcdFx0Ly8gOC4yLiBMZXQgY3VycmVudCBkZXNjcmlwdG9yIGJlIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IFwiXCI7XG5cblx0XHRcdC8vIDguMy4gTGV0IHN0YXRlIGJlIGluIGRlc2NyaXB0b3IuXG5cdFx0XHRzdGF0ZSA9IFwiaW4gZGVzY3JpcHRvclwiO1xuXG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXG5cdFx0XHRcdC8vIDguNC4gTGV0IGMgYmUgdGhlIGNoYXJhY3RlciBhdCBwb3NpdGlvbi5cblx0XHRcdFx0YyA9IGlucHV0LmNoYXJBdChwb3MpO1xuXG5cdFx0XHRcdC8vICBEbyB0aGUgZm9sbG93aW5nIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2Ygc3RhdGUuXG5cdFx0XHRcdC8vICBGb3IgdGhlIHB1cnBvc2Ugb2YgdGhpcyBzdGVwLCBcIkVPRlwiIGlzIGEgc3BlY2lhbCBjaGFyYWN0ZXIgcmVwcmVzZW50aW5nXG5cdFx0XHRcdC8vICB0aGF0IHBvc2l0aW9uIGlzIHBhc3QgdGhlIGVuZCBvZiBpbnB1dC5cblxuXHRcdFx0XHQvLyBJbiBkZXNjcmlwdG9yXG5cdFx0XHRcdGlmIChzdGF0ZSA9PT0gXCJpbiBkZXNjcmlwdG9yXCIpIHtcblx0XHRcdFx0XHQvLyBEbyB0aGUgZm9sbG93aW5nLCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGM6XG5cblx0XHRcdFx0ICAvLyBTcGFjZSBjaGFyYWN0ZXJcblx0XHRcdFx0ICAvLyBJZiBjdXJyZW50IGRlc2NyaXB0b3IgaXMgbm90IGVtcHR5LCBhcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvXG5cdFx0XHRcdCAgLy8gZGVzY3JpcHRvcnMgYW5kIGxldCBjdXJyZW50IGRlc2NyaXB0b3IgYmUgdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdFx0ICAvLyBTZXQgc3RhdGUgdG8gYWZ0ZXIgZGVzY3JpcHRvci5cblx0XHRcdFx0XHRpZiAoaXNTcGFjZShjKSkge1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnREZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gXCJhZnRlciBkZXNjcmlwdG9yXCI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBVKzAwMkMgQ09NTUEgKCwpXG5cdFx0XHRcdFx0Ly8gQWR2YW5jZSBwb3NpdGlvbiB0byB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gaW5wdXQuIElmIGN1cnJlbnQgZGVzY3JpcHRvclxuXHRcdFx0XHRcdC8vIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0byBkZXNjcmlwdG9ycy4gSnVtcCB0byB0aGUgc3RlcFxuXHRcdFx0XHRcdC8vIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIixcIikge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudERlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBVKzAwMjggTEVGVCBQQVJFTlRIRVNJUyAoKClcblx0XHRcdFx0XHQvLyBBcHBlbmQgYyB0byBjdXJyZW50IGRlc2NyaXB0b3IuIFNldCBzdGF0ZSB0byBpbiBwYXJlbnMuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlxcdTAwMjhcIikge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiaW4gcGFyZW5zXCI7XG5cblx0XHRcdFx0XHQvLyBFT0Zcblx0XHRcdFx0XHQvLyBJZiBjdXJyZW50IGRlc2NyaXB0b3IgaXMgbm90IGVtcHR5LCBhcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvXG5cdFx0XHRcdFx0Ly8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXAgbGFiZWxlZCBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50RGVzY3JpcHRvcikge1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdC8vIEFueXRoaW5nIGVsc2Vcblx0XHRcdFx0XHQvLyBBcHBlbmQgYyB0byBjdXJyZW50IGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Ly8gKGVuZCBcImluIGRlc2NyaXB0b3JcIlxuXG5cdFx0XHRcdC8vIEluIHBhcmVuc1xuXHRcdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImluIHBhcmVuc1wiKSB7XG5cblx0XHRcdFx0XHQvLyBVKzAwMjkgUklHSFQgUEFSRU5USEVTSVMgKCkpXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLiBTZXQgc3RhdGUgdG8gaW4gZGVzY3JpcHRvci5cblx0XHRcdFx0XHRpZiAoYyA9PT0gXCIpXCIpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImluIGRlc2NyaXB0b3JcIjtcblxuXHRcdFx0XHRcdC8vIEVPRlxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXAgbGFiZWxlZFxuXHRcdFx0XHRcdC8vIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcIikge1xuXHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWZ0ZXIgZGVzY3JpcHRvclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImFmdGVyIGRlc2NyaXB0b3JcIikge1xuXG5cdFx0XHRcdFx0Ly8gRG8gdGhlIGZvbGxvd2luZywgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBjOlxuXHRcdFx0XHRcdC8vIFNwYWNlIGNoYXJhY3RlcjogU3RheSBpbiB0aGlzIHN0YXRlLlxuXHRcdFx0XHRcdGlmIChpc1NwYWNlKGMpKSB7XG5cblx0XHRcdFx0XHQvLyBFT0Y6IEp1bXAgdG8gdGhlIHN0ZXAgbGFiZWxlZCBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdC8vIEFueXRoaW5nIGVsc2Vcblx0XHRcdFx0XHQvLyBTZXQgc3RhdGUgdG8gaW4gZGVzY3JpcHRvci4gU2V0IHBvc2l0aW9uIHRvIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIgaW4gaW5wdXQuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN0YXRlID0gXCJpbiBkZXNjcmlwdG9yXCI7XG5cdFx0XHRcdFx0XHRwb3MgLT0gMTtcblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkdmFuY2UgcG9zaXRpb24gdG8gdGhlIG5leHQgY2hhcmFjdGVyIGluIGlucHV0LlxuXHRcdFx0XHRwb3MgKz0gMTtcblxuXHRcdFx0Ly8gUmVwZWF0IHRoaXMgc3RlcC5cblx0XHRcdH0gLy8gKGNsb3NlIHdoaWxlIHRydWUgbG9vcClcblx0XHR9XG5cblx0XHQvLyA0LiBTcGxpdHRpbmcgbG9vcDogQ29sbGVjdCBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgdGhhdCBhcmUgc3BhY2Vcblx0XHQvLyAgICBjaGFyYWN0ZXJzIG9yIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzLiBJZiBhbnkgVSswMDJDIENPTU1BIGNoYXJhY3RlcnNcblx0XHQvLyAgICB3ZXJlIGNvbGxlY3RlZCwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRjb2xsZWN0Q2hhcmFjdGVycyhyZWdleExlYWRpbmdDb21tYXNPclNwYWNlcyk7XG5cblx0XHRcdC8vIDUuIElmIHBvc2l0aW9uIGlzIHBhc3QgdGhlIGVuZCBvZiBpbnB1dCwgcmV0dXJuIGNhbmRpZGF0ZXMgYW5kIGFib3J0IHRoZXNlIHN0ZXBzLlxuXHRcdFx0aWYgKHBvcyA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gY2FuZGlkYXRlczsgLy8gKHdlJ3JlIGRvbmUsIHRoaXMgaXMgdGhlIHNvbGUgcmV0dXJuIHBhdGgpXG5cdFx0XHR9XG5cblx0XHRcdC8vIDYuIENvbGxlY3QgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBzcGFjZSBjaGFyYWN0ZXJzLFxuXHRcdFx0Ly8gICAgYW5kIGxldCB0aGF0IGJlIHVybC5cblx0XHRcdHVybCA9IGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ2V4TGVhZGluZ05vdFNwYWNlcyk7XG5cblx0XHRcdC8vIDcuIExldCBkZXNjcmlwdG9ycyBiZSBhIG5ldyBlbXB0eSBsaXN0LlxuXHRcdFx0ZGVzY3JpcHRvcnMgPSBbXTtcblxuXHRcdFx0Ly8gOC4gSWYgdXJsIGVuZHMgd2l0aCBhIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXIgKCwpLCBmb2xsb3cgdGhlc2Ugc3Vic3RlcHM6XG5cdFx0XHQvL1x0XHQoMSkuIFJlbW92ZSBhbGwgdHJhaWxpbmcgVSswMDJDIENPTU1BIGNoYXJhY3RlcnMgZnJvbSB1cmwuIElmIHRoaXMgcmVtb3ZlZFxuXHRcdFx0Ly8gICAgICAgICBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdFx0aWYgKHVybC5zbGljZSgtMSkgPT09IFwiLFwiKSB7XG5cdFx0XHRcdHVybCA9IHVybC5yZXBsYWNlKHJlZ2V4VHJhaWxpbmdDb21tYXMsIFwiXCIpO1xuXHRcdFx0XHQvLyAoSnVtcCBhaGVhZCB0byBzdGVwIDkgdG8gc2tpcCB0b2tlbml6YXRpb24gYW5kIGp1c3QgcHVzaCB0aGUgY2FuZGlkYXRlKS5cblx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXG5cdFx0XHQvL1x0T3RoZXJ3aXNlLCBmb2xsb3cgdGhlc2Ugc3Vic3RlcHM6XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b2tlbml6ZSgpO1xuXHRcdFx0fSAvLyAoY2xvc2UgZWxzZSBvZiBzdGVwIDgpXG5cblx0XHQvLyAxNi4gUmV0dXJuIHRvIHRoZSBzdGVwIGxhYmVsZWQgc3BsaXR0aW5nIGxvb3AuXG5cdFx0fSAvLyAoQ2xvc2Ugb2YgYmlnIHdoaWxlIGxvb3AuKVxuXHR9XG5cblx0Lypcblx0ICogU2l6ZXMgUGFyc2VyXG5cdCAqXG5cdCAqIEJ5IEFsZXggQmVsbCB8ICBNSVQgTGljZW5zZVxuXHQgKlxuXHQgKiBOb24tc3RyaWN0IGJ1dCBhY2N1cmF0ZSBhbmQgbGlnaHR3ZWlnaHQgSlMgUGFyc2VyIGZvciB0aGUgc3RyaW5nIHZhbHVlIDxpbWcgc2l6ZXM9XCJoZXJlXCI+XG5cdCAqXG5cdCAqIFJlZmVyZW5jZSBhbGdvcml0aG0gYXQ6XG5cdCAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNwYXJzZS1hLXNpemVzLWF0dHJpYnV0ZVxuXHQgKlxuXHQgKiBNb3N0IGNvbW1lbnRzIGFyZSBjb3BpZWQgaW4gZGlyZWN0bHkgZnJvbSB0aGUgc3BlY1xuXHQgKiAoZXhjZXB0IGZvciBjb21tZW50cyBpbiBwYXJlbnMpLlxuXHQgKlxuXHQgKiBHcmFtbWFyIGlzOlxuXHQgKiA8c291cmNlLXNpemUtbGlzdD4gPSA8c291cmNlLXNpemU+IyBbICwgPHNvdXJjZS1zaXplLXZhbHVlPiBdPyB8IDxzb3VyY2Utc2l6ZS12YWx1ZT5cblx0ICogPHNvdXJjZS1zaXplPiA9IDxtZWRpYS1jb25kaXRpb24+IDxzb3VyY2Utc2l6ZS12YWx1ZT5cblx0ICogPHNvdXJjZS1zaXplLXZhbHVlPiA9IDxsZW5ndGg+XG5cdCAqIGh0dHA6Ly93d3cudzMub3JnL2h0bWwvd2cvZHJhZnRzL2h0bWwvbWFzdGVyL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNhdHRyLWltZy1zaXplc1xuXHQgKlxuXHQgKiBFLmcuIFwiKG1heC13aWR0aDogMzBlbSkgMTAwdncsIChtYXgtd2lkdGg6IDUwZW0pIDcwdncsIDEwMHZ3XCJcblx0ICogb3IgXCIobWluLXdpZHRoOiAzMGVtKSwgY2FsYygzMHZ3IC0gMTVweClcIiBvciBqdXN0IFwiMzB2d1wiXG5cdCAqXG5cdCAqIFJldHVybnMgdGhlIGZpcnN0IHZhbGlkIDxjc3MtbGVuZ3RoPiB3aXRoIGEgbWVkaWEgY29uZGl0aW9uIHRoYXQgZXZhbHVhdGVzIHRvIHRydWUsXG5cdCAqIG9yIFwiMTAwdndcIiBpZiBhbGwgdmFsaWQgbWVkaWEgY29uZGl0aW9ucyBldmFsdWF0ZSB0byBmYWxzZS5cblx0ICpcblx0ICovXG5cblx0ZnVuY3Rpb24gcGFyc2VTaXplcyhzdHJWYWx1ZSkge1xuXG5cdFx0Ly8gKFBlcmNlbnRhZ2UgQ1NTIGxlbmd0aHMgYXJlIG5vdCBhbGxvd2VkIGluIHRoaXMgY2FzZSwgdG8gYXZvaWQgY29uZnVzaW9uOlxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCN2YWxpZC1zb3VyY2Utc2l6ZS1saXN0XG5cdFx0Ly8gQ1NTIGFsbG93cyBhIHNpbmdsZSBvcHRpb25hbCBwbHVzIG9yIG1pbnVzIHNpZ246XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMi9zeW5kYXRhLmh0bWwjbnVtYmVyc1xuXHRcdC8vIENTUyBpcyBBU0NJSSBjYXNlLWluc2Vuc2l0aXZlOlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI2NoYXJhY3RlcnMgKVxuXHRcdC8vIFNwZWMgYWxsb3dzIGV4cG9uZW50aWFsIG5vdGF0aW9uIGZvciA8bnVtYmVyPiB0eXBlOlxuXHRcdC8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy12YWx1ZXMvI251bWJlcnNcblx0XHR2YXIgcmVnZXhDc3NMZW5ndGhXaXRoVW5pdHMgPSAvXig/OlsrLV0/WzAtOV0rfFswLTldKlxcLlswLTldKykoPzpbZUVdWystXT9bMC05XSspPyg/OmNofGNtfGVtfGV4fGlufG1tfHBjfHB0fHB4fHJlbXx2aHx2bWlufHZtYXh8dncpJC9pO1xuXG5cdFx0Ly8gKFRoaXMgaXMgYSBxdWljayBhbmQgbGVuaWVudCB0ZXN0LiBCZWNhdXNlIG9mIG9wdGlvbmFsIHVubGltaXRlZC1kZXB0aCBpbnRlcm5hbFxuXHRcdC8vIGdyb3VwaW5nIHBhcmVucyBhbmQgc3RyaWN0IHNwYWNpbmcgcnVsZXMsIHRoaXMgY291bGQgZ2V0IHZlcnkgY29tcGxpY2F0ZWQuKVxuXHRcdHZhciByZWdleENzc0NhbGMgPSAvXmNhbGNcXCgoPzpbMC05YS16IFxcLlxcK1xcLVxcKlxcL1xcKFxcKV0rKVxcKSQvaTtcblxuXHRcdHZhciBpO1xuXHRcdHZhciB1bnBhcnNlZFNpemVzTGlzdDtcblx0XHR2YXIgdW5wYXJzZWRTaXplc0xpc3RMZW5ndGg7XG5cdFx0dmFyIHVucGFyc2VkU2l6ZTtcblx0XHR2YXIgbGFzdENvbXBvbmVudFZhbHVlO1xuXHRcdHZhciBzaXplO1xuXG5cdFx0Ly8gVVRJTElUWSBGVU5DVElPTlNcblxuXHRcdC8vICAoVG95IENTUyBwYXJzZXIuIFRoZSBnb2FscyBoZXJlIGFyZTpcblx0XHQvLyAgMSkgZXhwYW5zaXZlIHRlc3QgY292ZXJhZ2Ugd2l0aG91dCB0aGUgd2VpZ2h0IG9mIGEgZnVsbCBDU1MgcGFyc2VyLlxuXHRcdC8vICAyKSBBdm9pZGluZyByZWdleCB3aGVyZXZlciBjb252ZW5pZW50LlxuXHRcdC8vICBRdWljayB0ZXN0czogaHR0cDovL2pzZmlkZGxlLm5ldC9ndG50TDRnci8zL1xuXHRcdC8vICBSZXR1cm5zIGFuIGFycmF5IG9mIGFycmF5cy4pXG5cdFx0ZnVuY3Rpb24gcGFyc2VDb21wb25lbnRWYWx1ZXMoc3RyKSB7XG5cdFx0XHR2YXIgY2hyY3RyO1xuXHRcdFx0dmFyIGNvbXBvbmVudCA9IFwiXCI7XG5cdFx0XHR2YXIgY29tcG9uZW50QXJyYXkgPSBbXTtcblx0XHRcdHZhciBsaXN0QXJyYXkgPSBbXTtcblx0XHRcdHZhciBwYXJlbkRlcHRoID0gMDtcblx0XHRcdHZhciBwb3MgPSAwO1xuXHRcdFx0dmFyIGluQ29tbWVudCA9IGZhbHNlO1xuXG5cdFx0XHRmdW5jdGlvbiBwdXNoQ29tcG9uZW50KCkge1xuXHRcdFx0XHRpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50QXJyYXkucHVzaChjb21wb25lbnQpO1xuXHRcdFx0XHRcdGNvbXBvbmVudCA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gcHVzaENvbXBvbmVudEFycmF5KCkge1xuXHRcdFx0XHRpZiAoY29tcG9uZW50QXJyYXlbMF0pIHtcblx0XHRcdFx0XHRsaXN0QXJyYXkucHVzaChjb21wb25lbnRBcnJheSk7XG5cdFx0XHRcdFx0Y29tcG9uZW50QXJyYXkgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyAoTG9vcCBmb3J3YXJkcyBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZy4pXG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRjaHJjdHIgPSBzdHIuY2hhckF0KHBvcyk7XG5cblx0XHRcdFx0aWYgKGNocmN0ciA9PT0gXCJcIikgeyAvLyAoIEVuZCBvZiBzdHJpbmcgcmVhY2hlZC4pXG5cdFx0XHRcdFx0cHVzaENvbXBvbmVudCgpO1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnRBcnJheSgpO1xuXHRcdFx0XHRcdHJldHVybiBsaXN0QXJyYXk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5Db21tZW50KSB7XG5cdFx0XHRcdFx0aWYgKChjaHJjdHIgPT09IFwiKlwiKSAmJiAoc3RyW3BvcyArIDFdID09PSBcIi9cIikpIHsgLy8gKEF0IGVuZCBvZiBhIGNvbW1lbnQuKVxuXHRcdFx0XHRcdFx0aW5Db21tZW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRwb3MgKz0gMjtcblx0XHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwb3MgKz0gMTsgLy8gKFNraXAgYWxsIGNoYXJhY3RlcnMgaW5zaWRlIGNvbW1lbnRzLilcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChpc1NwYWNlKGNocmN0cikpIHtcblx0XHRcdFx0XHQvLyAoSWYgcHJldmlvdXMgY2hhcmFjdGVyIGluIGxvb3Agd2FzIGFsc28gYSBzcGFjZSwgb3IgaWZcblx0XHRcdFx0XHQvLyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcsIGRvIG5vdCBhZGQgc3BhY2UgY2hhciB0b1xuXHRcdFx0XHRcdC8vIGNvbXBvbmVudC4pXG5cdFx0XHRcdFx0aWYgKCAoc3RyLmNoYXJBdChwb3MgLSAxKSAmJiBpc1NwYWNlKCBzdHIuY2hhckF0KHBvcyAtIDEpICkgKSB8fCAhY29tcG9uZW50ICkge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcmVuRGVwdGggPT09IDApIHtcblx0XHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRcdHBvcyArPTE7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gKFJlcGxhY2UgYW55IHNwYWNlIGNoYXJhY3RlciB3aXRoIGEgcGxhaW4gc3BhY2UgZm9yIGxlZ2liaWxpdHkuKVxuXHRcdFx0XHRcdFx0Y2hyY3RyID0gXCIgXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNocmN0ciA9PT0gXCIoXCIpIHtcblx0XHRcdFx0XHRwYXJlbkRlcHRoICs9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hyY3RyID09PSBcIilcIikge1xuXHRcdFx0XHRcdHBhcmVuRGVwdGggLT0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChjaHJjdHIgPT09IFwiLFwiKSB7XG5cdFx0XHRcdFx0cHVzaENvbXBvbmVudCgpO1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnRBcnJheSgpO1xuXHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCAoY2hyY3RyID09PSBcIi9cIikgJiYgKHN0ci5jaGFyQXQocG9zICsgMSkgPT09IFwiKlwiKSApIHtcblx0XHRcdFx0XHRpbkNvbW1lbnQgPSB0cnVlO1xuXHRcdFx0XHRcdHBvcyArPSAyO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29tcG9uZW50ID0gY29tcG9uZW50ICsgY2hyY3RyO1xuXHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpc1ZhbGlkTm9uTmVnYXRpdmVTb3VyY2VTaXplVmFsdWUocykge1xuXHRcdFx0aWYgKHJlZ2V4Q3NzTGVuZ3RoV2l0aFVuaXRzLnRlc3QocykgJiYgKHBhcnNlRmxvYXQocykgPj0gMCkpIHtyZXR1cm4gdHJ1ZTt9XG5cdFx0XHRpZiAocmVnZXhDc3NDYWxjLnRlc3QocykpIHtyZXR1cm4gdHJ1ZTt9XG5cdFx0XHQvLyAoIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI251bWJlcnMgc2F5czpcblx0XHRcdC8vIFwiLTAgaXMgZXF1aXZhbGVudCB0byAwIGFuZCBpcyBub3QgYSBuZWdhdGl2ZSBudW1iZXIuXCIgd2hpY2ggbWVhbnMgdGhhdFxuXHRcdFx0Ly8gdW5pdGxlc3MgemVybyBhbmQgdW5pdGxlc3MgbmVnYXRpdmUgemVybyBtdXN0IGJlIGFjY2VwdGVkIGFzIHNwZWNpYWwgY2FzZXMuKVxuXHRcdFx0aWYgKChzID09PSBcIjBcIikgfHwgKHMgPT09IFwiLTBcIikgfHwgKHMgPT09IFwiKzBcIikpIHtyZXR1cm4gdHJ1ZTt9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gV2hlbiBhc2tlZCB0byBwYXJzZSBhIHNpemVzIGF0dHJpYnV0ZSBmcm9tIGFuIGVsZW1lbnQsIHBhcnNlIGFcblx0XHQvLyBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBjb21wb25lbnQgdmFsdWVzIGZyb20gdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50J3Ncblx0XHQvLyBzaXplcyBhdHRyaWJ1dGUgKG9yIHRoZSBlbXB0eSBzdHJpbmcsIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYWJzZW50KSwgYW5kIGxldFxuXHRcdC8vIHVucGFyc2VkIHNpemVzIGxpc3QgYmUgdGhlIHJlc3VsdC5cblx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3Mtc3ludGF4LyNwYXJzZS1jb21tYS1zZXBhcmF0ZWQtbGlzdC1vZi1jb21wb25lbnQtdmFsdWVzXG5cblx0XHR1bnBhcnNlZFNpemVzTGlzdCA9IHBhcnNlQ29tcG9uZW50VmFsdWVzKHN0clZhbHVlKTtcblx0XHR1bnBhcnNlZFNpemVzTGlzdExlbmd0aCA9IHVucGFyc2VkU2l6ZXNMaXN0Lmxlbmd0aDtcblxuXHRcdC8vIEZvciBlYWNoIHVucGFyc2VkIHNpemUgaW4gdW5wYXJzZWQgc2l6ZXMgbGlzdDpcblx0XHRmb3IgKGkgPSAwOyBpIDwgdW5wYXJzZWRTaXplc0xpc3RMZW5ndGg7IGkrKykge1xuXHRcdFx0dW5wYXJzZWRTaXplID0gdW5wYXJzZWRTaXplc0xpc3RbaV07XG5cblx0XHRcdC8vIDEuIFJlbW92ZSBhbGwgY29uc2VjdXRpdmUgPHdoaXRlc3BhY2UtdG9rZW4+cyBmcm9tIHRoZSBlbmQgb2YgdW5wYXJzZWQgc2l6ZS5cblx0XHRcdC8vICggcGFyc2VDb21wb25lbnRWYWx1ZXMoKSBhbHJlYWR5IG9taXRzIHNwYWNlcyBvdXRzaWRlIG9mIHBhcmVucy4gKVxuXG5cdFx0XHQvLyBJZiB1bnBhcnNlZCBzaXplIGlzIG5vdyBlbXB0eSwgdGhhdCBpcyBhIHBhcnNlIGVycm9yOyBjb250aW51ZSB0byB0aGUgbmV4dFxuXHRcdFx0Ly8gaXRlcmF0aW9uIG9mIHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gKCBwYXJzZUNvbXBvbmVudFZhbHVlcygpIHdvbid0IHB1c2ggYW4gZW1wdHkgYXJyYXkuIClcblxuXHRcdFx0Ly8gMi4gSWYgdGhlIGxhc3QgY29tcG9uZW50IHZhbHVlIGluIHVucGFyc2VkIHNpemUgaXMgYSB2YWxpZCBub24tbmVnYXRpdmVcblx0XHRcdC8vIDxzb3VyY2Utc2l6ZS12YWx1ZT4sIGxldCBzaXplIGJlIGl0cyB2YWx1ZSBhbmQgcmVtb3ZlIHRoZSBjb21wb25lbnQgdmFsdWVcblx0XHRcdC8vIGZyb20gdW5wYXJzZWQgc2l6ZS4gQW55IENTUyBmdW5jdGlvbiBvdGhlciB0aGFuIHRoZSBjYWxjKCkgZnVuY3Rpb24gaXNcblx0XHRcdC8vIGludmFsaWQuIE90aGVyd2lzZSwgdGhlcmUgaXMgYSBwYXJzZSBlcnJvcjsgY29udGludWUgdG8gdGhlIG5leHQgaXRlcmF0aW9uXG5cdFx0XHQvLyBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1zeW50YXgvI3BhcnNlLWNvbXBvbmVudC12YWx1ZVxuXHRcdFx0bGFzdENvbXBvbmVudFZhbHVlID0gdW5wYXJzZWRTaXplW3VucGFyc2VkU2l6ZS5sZW5ndGggLSAxXTtcblxuXHRcdFx0aWYgKGlzVmFsaWROb25OZWdhdGl2ZVNvdXJjZVNpemVWYWx1ZShsYXN0Q29tcG9uZW50VmFsdWUpKSB7XG5cdFx0XHRcdHNpemUgPSBsYXN0Q29tcG9uZW50VmFsdWU7XG5cdFx0XHRcdHVucGFyc2VkU2l6ZS5wb3AoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAzLiBSZW1vdmUgYWxsIGNvbnNlY3V0aXZlIDx3aGl0ZXNwYWNlLXRva2VuPnMgZnJvbSB0aGUgZW5kIG9mIHVucGFyc2VkXG5cdFx0XHQvLyBzaXplLiBJZiB1bnBhcnNlZCBzaXplIGlzIG5vdyBlbXB0eSwgcmV0dXJuIHNpemUgYW5kIGV4aXQgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyBJZiB0aGlzIHdhcyBub3QgdGhlIGxhc3QgaXRlbSBpbiB1bnBhcnNlZCBzaXplcyBsaXN0LCB0aGF0IGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0XHRpZiAodW5wYXJzZWRTaXplLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gc2l6ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gNC4gUGFyc2UgdGhlIHJlbWFpbmluZyBjb21wb25lbnQgdmFsdWVzIGluIHVucGFyc2VkIHNpemUgYXMgYVxuXHRcdFx0Ly8gPG1lZGlhLWNvbmRpdGlvbj4uIElmIGl0IGRvZXMgbm90IHBhcnNlIGNvcnJlY3RseSwgb3IgaXQgZG9lcyBwYXJzZVxuXHRcdFx0Ly8gY29ycmVjdGx5IGJ1dCB0aGUgPG1lZGlhLWNvbmRpdGlvbj4gZXZhbHVhdGVzIHRvIGZhbHNlLCBjb250aW51ZSB0byB0aGVcblx0XHRcdC8vIG5leHQgaXRlcmF0aW9uIG9mIHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gKFBhcnNpbmcgYWxsIHBvc3NpYmxlIGNvbXBvdW5kIG1lZGlhIGNvbmRpdGlvbnMgaW4gSlMgaXMgaGVhdnksIGNvbXBsaWNhdGVkLFxuXHRcdFx0Ly8gYW5kIHRoZSBwYXlvZmYgaXMgdW5jbGVhci4gSXMgdGhlcmUgZXZlciBhbiBzaXR1YXRpb24gd2hlcmUgdGhlXG5cdFx0XHQvLyBtZWRpYSBjb25kaXRpb24gcGFyc2VzIGluY29ycmVjdGx5IGJ1dCBzdGlsbCBzb21laG93IGV2YWx1YXRlcyB0byB0cnVlP1xuXHRcdFx0Ly8gQ2FuIHdlIGp1c3QgcmVseSBvbiB0aGUgYnJvd3Nlci9wb2x5ZmlsbCB0byBkbyBpdD8pXG5cdFx0XHR1bnBhcnNlZFNpemUgPSB1bnBhcnNlZFNpemUuam9pbihcIiBcIik7XG5cdFx0XHRpZiAoIShwZi5tYXRjaGVzTWVkaWEoIHVucGFyc2VkU2l6ZSApICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyA1LiBSZXR1cm4gc2l6ZSBhbmQgZXhpdCB0aGlzIGFsZ29yaXRobS5cblx0XHRcdHJldHVybiBzaXplO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBhYm92ZSBhbGdvcml0aG0gZXhoYXVzdHMgdW5wYXJzZWQgc2l6ZXMgbGlzdCB3aXRob3V0IHJldHVybmluZyBhXG5cdFx0Ly8gc2l6ZSB2YWx1ZSwgcmV0dXJuIDEwMHZ3LlxuXHRcdHJldHVybiBcIjEwMHZ3XCI7XG5cdH1cblxuXHQvLyBuYW1lc3BhY2Vcblx0cGYubnMgPSAoXCJwZlwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpLnN1YnN0cigwLCA5KTtcblxuXHQvLyBzcmNzZXQgc3VwcG9ydCB0ZXN0XG5cdHBmLnN1cFNyY3NldCA9IFwic3Jjc2V0XCIgaW4gaW1hZ2U7XG5cdHBmLnN1cFNpemVzID0gXCJzaXplc1wiIGluIGltYWdlO1xuXHRwZi5zdXBQaWN0dXJlID0gISF3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50O1xuXG5cdC8vIFVDIGJyb3dzZXIgZG9lcyBjbGFpbSB0byBzdXBwb3J0IHNyY3NldCBhbmQgcGljdHVyZSwgYnV0IG5vdCBzaXplcyxcblx0Ly8gdGhpcyBleHRlbmRlZCB0ZXN0IHJldmVhbHMgdGhlIGJyb3dzZXIgZG9lcyBzdXBwb3J0IG5vdGhpbmdcblx0aWYgKHBmLnN1cFNyY3NldCAmJiBwZi5zdXBQaWN0dXJlICYmICFwZi5zdXBTaXplcykge1xuXHRcdChmdW5jdGlvbihpbWFnZTIpIHtcblx0XHRcdGltYWdlLnNyY3NldCA9IFwiZGF0YTosYVwiO1xuXHRcdFx0aW1hZ2UyLnNyYyA9IFwiZGF0YTosYVwiO1xuXHRcdFx0cGYuc3VwU3Jjc2V0ID0gaW1hZ2UuY29tcGxldGUgPT09IGltYWdlMi5jb21wbGV0ZTtcblx0XHRcdHBmLnN1cFBpY3R1cmUgPSBwZi5zdXBTcmNzZXQgJiYgcGYuc3VwUGljdHVyZTtcblx0XHR9KShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpKTtcblx0fVxuXG5cdC8vIFNhZmFyaTkgaGFzIGJhc2ljIHN1cHBvcnQgZm9yIHNpemVzLCBidXQgZG9lcyd0IGV4cG9zZSB0aGUgYHNpemVzYCBpZGwgYXR0cmlidXRlXG5cdGlmIChwZi5zdXBTcmNzZXQgJiYgIXBmLnN1cFNpemVzKSB7XG5cblx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgd2lkdGgyID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBZ0FCQVBBQUFQLy8vd0FBQUNINUJBQUFBQUFBTEFBQUFBQUNBQUVBQUFJQ0JBb0FPdz09XCI7XG5cdFx0XHR2YXIgd2lkdGgxID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiO1xuXHRcdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0XHR2YXIgdGVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgd2lkdGggPSBpbWcud2lkdGg7XG5cblx0XHRcdFx0aWYgKHdpZHRoID09PSAyKSB7XG5cdFx0XHRcdFx0cGYuc3VwU2l6ZXMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWx3YXlzQ2hlY2tXRGVzY3JpcHRvciA9IHBmLnN1cFNyY3NldCAmJiAhcGYuc3VwU2l6ZXM7XG5cblx0XHRcdFx0aXNTdXBwb3J0VGVzdFJlYWR5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gZm9yY2UgYXN5bmNcblx0XHRcdFx0c2V0VGltZW91dChwaWN0dXJlZmlsbCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRpbWcub25sb2FkID0gdGVzdDtcblx0XHRcdGltZy5vbmVycm9yID0gdGVzdDtcblx0XHRcdGltZy5zZXRBdHRyaWJ1dGUoXCJzaXplc1wiLCBcIjlweFwiKTtcblxuXHRcdFx0aW1nLnNyY3NldCA9IHdpZHRoMSArIFwiIDF3LFwiICsgd2lkdGgyICsgXCIgOXdcIjtcblx0XHRcdGltZy5zcmMgPSB3aWR0aDE7XG5cdFx0fSkoKTtcblxuXHR9IGVsc2Uge1xuXHRcdGlzU3VwcG9ydFRlc3RSZWFkeSA9IHRydWU7XG5cdH1cblxuXHQvLyB1c2luZyBwZi5xc2EgaW5zdGVhZCBvZiBkb20gdHJhdmVyc2luZyBkb2VzIHNjYWxlIG11Y2ggYmV0dGVyLFxuXHQvLyBlc3BlY2lhbGx5IG9uIHNpdGVzIG1peGluZyByZXNwb25zaXZlIGFuZCBub24tcmVzcG9uc2l2ZSBpbWFnZXNcblx0cGYuc2VsU2hvcnQgPSBcInBpY3R1cmU+aW1nLGltZ1tzcmNzZXRdXCI7XG5cdHBmLnNlbCA9IHBmLnNlbFNob3J0O1xuXHRwZi5jZmcgPSBjZmc7XG5cblx0LyoqXG5cdCAqIFNob3J0Y3V0IHByb3BlcnR5IGZvciBgZGV2aWNlUGl4ZWxSYXRpb2AgKCBmb3IgZWFzeSBvdmVycmlkaW5nIGluIHRlc3RzIClcblx0ICovXG5cdHBmLkRQUiA9IChEUFIgIHx8IDEgKTtcblx0cGYudSA9IHVuaXRzO1xuXG5cdC8vIGNvbnRhaW5lciBvZiBzdXBwb3J0ZWQgbWltZSB0eXBlcyB0aGF0IG9uZSBtaWdodCBuZWVkIHRvIHF1YWxpZnkgYmVmb3JlIHVzaW5nXG5cdHBmLnR5cGVzID0gIHR5cGVzO1xuXG5cdHBmLnNldFNpemUgPSBub29wO1xuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBhYnNvbHV0ZSBVUkxcblx0ICogQHBhcmFtIHNyY1xuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBhYnNvbHV0ZSBVUkxcblx0ICovXG5cblx0cGYubWFrZVVybCA9IG1lbW9pemUoZnVuY3Rpb24oc3JjKSB7XG5cdFx0YW5jaG9yLmhyZWYgPSBzcmM7XG5cdFx0cmV0dXJuIGFuY2hvci5ocmVmO1xuXHR9KTtcblxuXHQvKipcblx0ICogR2V0cyBhIERPTSBlbGVtZW50IG9yIGRvY3VtZW50IGFuZCBhIHNlbGN0b3IgYW5kIHJldHVybnMgdGhlIGZvdW5kIG1hdGNoZXNcblx0ICogQ2FuIGJlIGV4dGVuZGVkIHdpdGggalF1ZXJ5L1NpenpsZSBmb3IgSUU3IHN1cHBvcnRcblx0ICogQHBhcmFtIGNvbnRleHRcblx0ICogQHBhcmFtIHNlbFxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R8QXJyYXl9XG5cdCAqL1xuXHRwZi5xc2EgPSBmdW5jdGlvbihjb250ZXh0LCBzZWwpIHtcblx0XHRyZXR1cm4gKCBcInF1ZXJ5U2VsZWN0b3JcIiBpbiBjb250ZXh0ICkgPyBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSA6IFtdO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBtZXRob2QgZm9yIG1hdGNoTWVkaWEgKCBmb3IgZWFzeSBvdmVycmlkaW5nIGluIHRlc3RzIClcblx0ICogd2V0aGVyIG5hdGl2ZSBvciBwZi5tTVEgaXMgdXNlZCB3aWxsIGJlIGRlY2lkZWQgbGF6eSBvbiBmaXJzdCBjYWxsXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cGYubWF0Y2hlc01lZGlhID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCB3aW5kb3cubWF0Y2hNZWRpYSAmJiAobWF0Y2hNZWRpYSggXCIobWluLXdpZHRoOiAwLjFlbSlcIiApIHx8IHt9KS5tYXRjaGVzICkge1xuXHRcdFx0cGYubWF0Y2hlc01lZGlhID0gZnVuY3Rpb24oIG1lZGlhICkge1xuXHRcdFx0XHRyZXR1cm4gIW1lZGlhIHx8ICggbWF0Y2hNZWRpYSggbWVkaWEgKS5tYXRjaGVzICk7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwZi5tYXRjaGVzTWVkaWEgPSBwZi5tTVE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBmLm1hdGNoZXNNZWRpYS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEEgc2ltcGxpZmllZCBtYXRjaE1lZGlhIGltcGxlbWVudGF0aW9uIGZvciBJRTggYW5kIElFOVxuXHQgKiBoYW5kbGVzIG9ubHkgbWluLXdpZHRoL21heC13aWR0aCB3aXRoIHB4IG9yIGVtIHZhbHVlc1xuXHQgKiBAcGFyYW0gbWVkaWFcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwZi5tTVEgPSBmdW5jdGlvbiggbWVkaWEgKSB7XG5cdFx0cmV0dXJuIG1lZGlhID8gZXZhbENTUyhtZWRpYSkgOiB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBjYWxjdWxhdGVkIGxlbmd0aCBpbiBjc3MgcGl4ZWwgZnJvbSB0aGUgZ2l2ZW4gc291cmNlU2l6ZVZhbHVlXG5cdCAqIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy12YWx1ZXMtMy8jbGVuZ3RoLXZhbHVlXG5cdCAqIGludGVuZGVkIFNwZWMgbWlzbWF0Y2hlczpcblx0ICogKiBEb2VzIG5vdCBjaGVjayBmb3IgaW52YWxpZCB1c2Ugb2YgQ1NTIGZ1bmN0aW9uc1xuXHQgKiAqIERvZXMgaGFuZGxlIGEgY29tcHV0ZWQgbGVuZ3RoIG9mIDAgdGhlIHNhbWUgYXMgYSBuZWdhdGl2ZSBhbmQgdGhlcmVmb3JlIGludmFsaWQgdmFsdWVcblx0ICogQHBhcmFtIHNvdXJjZVNpemVWYWx1ZVxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0cGYuY2FsY0xlbmd0aCA9IGZ1bmN0aW9uKCBzb3VyY2VTaXplVmFsdWUgKSB7XG5cblx0XHR2YXIgdmFsdWUgPSBldmFsQ1NTKHNvdXJjZVNpemVWYWx1ZSwgdHJ1ZSkgfHwgZmFsc2U7XG5cdFx0aWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dmFsdWUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgdHlwZSBzdHJpbmcgYW5kIGNoZWNrcyBpZiBpdHMgc3VwcG9ydGVkXG5cdCAqL1xuXG5cdHBmLnN1cHBvcnRzVHlwZSA9IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiAoIHR5cGUgKSA/IHR5cGVzWyB0eXBlIF0gOiB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBQYXJzZXMgYSBzb3VyY2VTaXplIGludG8gbWVkaWFDb25kaXRpb24gKG1lZGlhKSBhbmQgc291cmNlU2l6ZVZhbHVlIChsZW5ndGgpXG5cdCAqIEBwYXJhbSBzb3VyY2VTaXplU3RyXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cGYucGFyc2VTaXplID0gbWVtb2l6ZShmdW5jdGlvbiggc291cmNlU2l6ZVN0ciApIHtcblx0XHR2YXIgbWF0Y2ggPSAoIHNvdXJjZVNpemVTdHIgfHwgXCJcIiApLm1hdGNoKHJlZ1NpemUpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRtZWRpYTogbWF0Y2ggJiYgbWF0Y2hbMV0sXG5cdFx0XHRsZW5ndGg6IG1hdGNoICYmIG1hdGNoWzJdXG5cdFx0fTtcblx0fSk7XG5cblx0cGYucGFyc2VTZXQgPSBmdW5jdGlvbiggc2V0ICkge1xuXHRcdGlmICggIXNldC5jYW5kcyApIHtcblx0XHRcdHNldC5jYW5kcyA9IHBhcnNlU3Jjc2V0KHNldC5zcmNzZXQsIHNldCk7XG5cdFx0fVxuXHRcdHJldHVybiBzZXQuY2FuZHM7XG5cdH07XG5cblx0LyoqXG5cdCAqIHJldHVybnMgMWVtIGluIGNzcyBweCBmb3IgaHRtbC9ib2R5IGRlZmF1bHQgc2l6ZVxuXHQgKiBmdW5jdGlvbiB0YWtlbiBmcm9tIHJlc3BvbmRqc1xuXHQgKiBAcmV0dXJucyB7KnxudW1iZXJ9XG5cdCAqL1xuXHRwZi5nZXRFbVZhbHVlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGJvZHk7XG5cdFx0aWYgKCAhZW1pbnB4ICYmIChib2R5ID0gZG9jdW1lbnQuYm9keSkgKSB7XG5cdFx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLFxuXHRcdFx0XHRvcmlnaW5hbEhUTUxDU1MgPSBkb2NFbGVtLnN0eWxlLmNzc1RleHQsXG5cdFx0XHRcdG9yaWdpbmFsQm9keUNTUyA9IGJvZHkuc3R5bGUuY3NzVGV4dDtcblxuXHRcdFx0ZGl2LnN0eWxlLmNzc1RleHQgPSBiYXNlU3R5bGU7XG5cblx0XHRcdC8vIDFlbSBpbiBhIG1lZGlhIHF1ZXJ5IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZGVmYXVsdCBmb250IHNpemUgb2YgdGhlIGJyb3dzZXJcblx0XHRcdC8vIHJlc2V0IGRvY0VsZW0gYW5kIGJvZHkgdG8gZW5zdXJlIHRoZSBjb3JyZWN0IHZhbHVlIGlzIHJldHVybmVkXG5cdFx0XHRkb2NFbGVtLnN0eWxlLmNzc1RleHQgPSBmc0Nzcztcblx0XHRcdGJvZHkuc3R5bGUuY3NzVGV4dCA9IGZzQ3NzO1xuXG5cdFx0XHRib2R5LmFwcGVuZENoaWxkKCBkaXYgKTtcblx0XHRcdGVtaW5weCA9IGRpdi5vZmZzZXRXaWR0aDtcblx0XHRcdGJvZHkucmVtb3ZlQ2hpbGQoIGRpdiApO1xuXG5cdFx0XHQvL2Fsc28gdXBkYXRlIGVtaW5weCBiZWZvcmUgcmV0dXJuaW5nXG5cdFx0XHRlbWlucHggPSBwYXJzZUZsb2F0KCBlbWlucHgsIDEwICk7XG5cblx0XHRcdC8vIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHZhbHVlc1xuXHRcdFx0ZG9jRWxlbS5zdHlsZS5jc3NUZXh0ID0gb3JpZ2luYWxIVE1MQ1NTO1xuXHRcdFx0Ym9keS5zdHlsZS5jc3NUZXh0ID0gb3JpZ2luYWxCb2R5Q1NTO1xuXG5cdFx0fVxuXHRcdHJldHVybiBlbWlucHggfHwgMTY7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgc3RyaW5nIG9mIHNpemVzIGFuZCByZXR1cm5zIHRoZSB3aWR0aCBpbiBwaXhlbHMgYXMgYSBudW1iZXJcblx0ICovXG5cdHBmLmNhbGNMaXN0TGVuZ3RoID0gZnVuY3Rpb24oIHNvdXJjZVNpemVMaXN0U3RyICkge1xuXHRcdC8vIFNwbGl0IHVwIHNvdXJjZSBzaXplIGxpc3QsIGllICggbWF4LXdpZHRoOiAzMGVtICkgMTAwJSwgKCBtYXgtd2lkdGg6IDUwZW0gKSA1MCUsIDMzJVxuXHRcdC8vXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICBvciAobWluLXdpZHRoOjMwZW0pIGNhbGMoMzAlIC0gMTVweClcblx0XHRpZiAoICEoc291cmNlU2l6ZUxpc3RTdHIgaW4gc2l6ZUxlbmd0aENhY2hlKSB8fCBjZmcudVQgKSB7XG5cdFx0XHR2YXIgd2lubmluZ0xlbmd0aCA9IHBmLmNhbGNMZW5ndGgoIHBhcnNlU2l6ZXMoIHNvdXJjZVNpemVMaXN0U3RyICkgKTtcblxuXHRcdFx0c2l6ZUxlbmd0aENhY2hlWyBzb3VyY2VTaXplTGlzdFN0ciBdID0gIXdpbm5pbmdMZW5ndGggPyB1bml0cy53aWR0aCA6IHdpbm5pbmdMZW5ndGg7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNpemVMZW5ndGhDYWNoZVsgc291cmNlU2l6ZUxpc3RTdHIgXTtcblx0fTtcblxuXHQvKipcblx0ICogVGFrZXMgYSBjYW5kaWRhdGUgb2JqZWN0IHdpdGggYSBzcmNzZXQgcHJvcGVydHkgaW4gdGhlIGZvcm0gb2YgdXJsL1xuXHQgKiBleC4gXCJpbWFnZXMvcGljLW1lZGl1bS5wbmcgMXgsIGltYWdlcy9waWMtbWVkaXVtLTJ4LnBuZyAyeFwiIG9yXG5cdCAqICAgICBcImltYWdlcy9waWMtbWVkaXVtLnBuZyA0MDB3LCBpbWFnZXMvcGljLW1lZGl1bS0yeC5wbmcgODAwd1wiIG9yXG5cdCAqICAgICBcImltYWdlcy9waWMtc21hbGwucG5nXCJcblx0ICogR2V0IGFuIGFycmF5IG9mIGltYWdlIGNhbmRpZGF0ZXMgaW4gdGhlIGZvcm0gb2Zcblx0ICogICAgICB7dXJsOiBcIi9mb28vYmFyLnBuZ1wiLCByZXNvbHV0aW9uOiAxfVxuXHQgKiB3aGVyZSByZXNvbHV0aW9uIGlzIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy12YWx1ZXMtMy8jcmVzb2x1dGlvbi12YWx1ZVxuXHQgKiBJZiBzaXplcyBpcyBzcGVjaWZpZWQsIHJlcyBpcyBjYWxjdWxhdGVkXG5cdCAqL1xuXHRwZi5zZXRSZXMgPSBmdW5jdGlvbiggc2V0ICkge1xuXHRcdHZhciBjYW5kaWRhdGVzO1xuXHRcdGlmICggc2V0ICkge1xuXG5cdFx0XHRjYW5kaWRhdGVzID0gcGYucGFyc2VTZXQoIHNldCApO1xuXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGxlbiA9IGNhbmRpZGF0ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdHNldFJlc29sdXRpb24oIGNhbmRpZGF0ZXNbIGkgXSwgc2V0LnNpemVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGVzO1xuXHR9O1xuXG5cdHBmLnNldFJlcy5yZXMgPSBzZXRSZXNvbHV0aW9uO1xuXG5cdHBmLmFwcGx5U2V0Q2FuZGlkYXRlID0gZnVuY3Rpb24oIGNhbmRpZGF0ZXMsIGltZyApIHtcblx0XHRpZiAoICFjYW5kaWRhdGVzLmxlbmd0aCApIHtyZXR1cm47fVxuXHRcdHZhciBjYW5kaWRhdGUsXG5cdFx0XHRpLFxuXHRcdFx0aixcblx0XHRcdGxlbmd0aCxcblx0XHRcdGJlc3RDYW5kaWRhdGUsXG5cdFx0XHRjdXJTcmMsXG5cdFx0XHRjdXJDYW4sXG5cdFx0XHRjYW5kaWRhdGVTcmMsXG5cdFx0XHRhYm9ydEN1clNyYztcblxuXHRcdHZhciBpbWFnZURhdGEgPSBpbWdbIHBmLm5zIF07XG5cdFx0dmFyIGRwciA9IHBmLkRQUjtcblxuXHRcdGN1clNyYyA9IGltYWdlRGF0YS5jdXJTcmMgfHwgaW1nW2N1clNyY1Byb3BdO1xuXG5cdFx0Y3VyQ2FuID0gaW1hZ2VEYXRhLmN1ckNhbiB8fCBzZXRTcmNUb0N1cihpbWcsIGN1clNyYywgY2FuZGlkYXRlc1swXS5zZXQpO1xuXG5cdFx0Ly8gaWYgd2UgaGF2ZSBhIGN1cnJlbnQgc291cmNlLCB3ZSBtaWdodCBlaXRoZXIgYmVjb21lIGxhenkgb3IgZ2l2ZSB0aGlzIHNvdXJjZSBzb21lIGFkdmFudGFnZVxuXHRcdGlmICggY3VyQ2FuICYmIGN1ckNhbi5zZXQgPT09IGNhbmRpZGF0ZXNbIDAgXS5zZXQgKSB7XG5cblx0XHRcdC8vIGlmIGJyb3dzZXIgY2FuIGFib3J0IGltYWdlIHJlcXVlc3QgYW5kIHRoZSBpbWFnZSBoYXMgYSBoaWdoZXIgcGl4ZWwgZGVuc2l0eSB0aGFuIG5lZWRlZFxuXHRcdFx0Ly8gYW5kIHRoaXMgaW1hZ2UgaXNuJ3QgZG93bmxvYWRlZCB5ZXQsIHdlIHNraXAgbmV4dCBwYXJ0IGFuZCB0cnkgdG8gc2F2ZSBiYW5kd2lkdGhcblx0XHRcdGFib3J0Q3VyU3JjID0gKHN1cHBvcnRBYm9ydCAmJiAhaW1nLmNvbXBsZXRlICYmIGN1ckNhbi5yZXMgLSAwLjEgPiBkcHIpO1xuXG5cdFx0XHRpZiAoICFhYm9ydEN1clNyYyApIHtcblx0XHRcdFx0Y3VyQ2FuLmNhY2hlZCA9IHRydWU7XG5cblx0XHRcdFx0Ly8gaWYgY3VycmVudCBjYW5kaWRhdGUgaXMgXCJiZXN0XCIsIFwiYmV0dGVyXCIgb3IgXCJva2F5XCIsXG5cdFx0XHRcdC8vIHNldCBpdCB0byBiZXN0Q2FuZGlkYXRlXG5cdFx0XHRcdGlmICggY3VyQ2FuLnJlcyA+PSBkcHIgKSB7XG5cdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGN1ckNhbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggIWJlc3RDYW5kaWRhdGUgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZXMuc29ydCggYXNjZW5kaW5nU29ydCApO1xuXG5cdFx0XHRsZW5ndGggPSBjYW5kaWRhdGVzLmxlbmd0aDtcblx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBsZW5ndGggLSAxIF07XG5cblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbIGkgXTtcblx0XHRcdFx0aWYgKCBjYW5kaWRhdGUucmVzID49IGRwciApIHtcblx0XHRcdFx0XHRqID0gaSAtIDE7XG5cblx0XHRcdFx0XHQvLyB3ZSBoYXZlIGZvdW5kIHRoZSBwZXJmZWN0IGNhbmRpZGF0ZSxcblx0XHRcdFx0XHQvLyBidXQgbGV0J3MgaW1wcm92ZSB0aGlzIGEgbGl0dGxlIGJpdCB3aXRoIHNvbWUgYXNzdW1wdGlvbnMgOy0pXG5cdFx0XHRcdFx0aWYgKGNhbmRpZGF0ZXNbIGogXSAmJlxuXHRcdFx0XHRcdFx0KGFib3J0Q3VyU3JjIHx8IGN1clNyYyAhPT0gcGYubWFrZVVybCggY2FuZGlkYXRlLnVybCApKSAmJlxuXHRcdFx0XHRcdFx0Y2hvb3NlTG93UmVzKGNhbmRpZGF0ZXNbIGogXS5yZXMsIGNhbmRpZGF0ZS5yZXMsIGRwciwgY2FuZGlkYXRlc1sgaiBdLmNhY2hlZCkpIHtcblxuXHRcdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbIGogXTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRiZXN0Q2FuZGlkYXRlID0gY2FuZGlkYXRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggYmVzdENhbmRpZGF0ZSApIHtcblxuXHRcdFx0Y2FuZGlkYXRlU3JjID0gcGYubWFrZVVybCggYmVzdENhbmRpZGF0ZS51cmwgKTtcblxuXHRcdFx0aW1hZ2VEYXRhLmN1clNyYyA9IGNhbmRpZGF0ZVNyYztcblx0XHRcdGltYWdlRGF0YS5jdXJDYW4gPSBiZXN0Q2FuZGlkYXRlO1xuXG5cdFx0XHRpZiAoIGNhbmRpZGF0ZVNyYyAhPT0gY3VyU3JjICkge1xuXHRcdFx0XHRwZi5zZXRTcmMoIGltZywgYmVzdENhbmRpZGF0ZSApO1xuXHRcdFx0fVxuXHRcdFx0cGYuc2V0U2l6ZSggaW1nICk7XG5cdFx0fVxuXHR9O1xuXG5cdHBmLnNldFNyYyA9IGZ1bmN0aW9uKCBpbWcsIGJlc3RDYW5kaWRhdGUgKSB7XG5cdFx0dmFyIG9yaWdXaWR0aDtcblx0XHRpbWcuc3JjID0gYmVzdENhbmRpZGF0ZS51cmw7XG5cblx0XHQvLyBhbHRob3VnaCB0aGlzIGlzIGEgc3BlY2lmaWMgU2FmYXJpIGlzc3VlLCB3ZSBkb24ndCB3YW50IHRvIHRha2UgdG9vIG11Y2ggZGlmZmVyZW50IGNvZGUgcGF0aHNcblx0XHRpZiAoIGJlc3RDYW5kaWRhdGUuc2V0LnR5cGUgPT09IFwiaW1hZ2Uvc3ZnK3htbFwiICkge1xuXHRcdFx0b3JpZ1dpZHRoID0gaW1nLnN0eWxlLndpZHRoO1xuXHRcdFx0aW1nLnN0eWxlLndpZHRoID0gKGltZy5vZmZzZXRXaWR0aCArIDEpICsgXCJweFwiO1xuXG5cdFx0XHQvLyBuZXh0IGxpbmUgb25seSBzaG91bGQgdHJpZ2dlciBhIHJlcGFpbnRcblx0XHRcdC8vIGlmLi4uIGlzIG9ubHkgZG9uZSB0byB0cmljayBkZWFkIGNvZGUgcmVtb3ZhbFxuXHRcdFx0aWYgKCBpbWcub2Zmc2V0V2lkdGggKyAxICkge1xuXHRcdFx0XHRpbWcuc3R5bGUud2lkdGggPSBvcmlnV2lkdGg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHBmLmdldFNldCA9IGZ1bmN0aW9uKCBpbWcgKSB7XG5cdFx0dmFyIGksIHNldCwgc3VwcG9ydHNUeXBlO1xuXHRcdHZhciBtYXRjaCA9IGZhbHNlO1xuXHRcdHZhciBzZXRzID0gaW1nIFsgcGYubnMgXS5zZXRzO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBzZXRzLmxlbmd0aCAmJiAhbWF0Y2g7IGkrKyApIHtcblx0XHRcdHNldCA9IHNldHNbaV07XG5cblx0XHRcdGlmICggIXNldC5zcmNzZXQgfHwgIXBmLm1hdGNoZXNNZWRpYSggc2V0Lm1lZGlhICkgfHwgIShzdXBwb3J0c1R5cGUgPSBwZi5zdXBwb3J0c1R5cGUoIHNldC50eXBlICkpICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdXBwb3J0c1R5cGUgPT09IFwicGVuZGluZ1wiICkge1xuXHRcdFx0XHRzZXQgPSBzdXBwb3J0c1R5cGU7XG5cdFx0XHR9XG5cblx0XHRcdG1hdGNoID0gc2V0O1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hdGNoO1xuXHR9O1xuXG5cdHBmLnBhcnNlU2V0cyA9IGZ1bmN0aW9uKCBlbGVtZW50LCBwYXJlbnQsIG9wdGlvbnMgKSB7XG5cdFx0dmFyIHNyY3NldEF0dHJpYnV0ZSwgaW1hZ2VTZXQsIGlzV0Rlc2NyaXBvciwgc3Jjc2V0UGFyc2VkO1xuXG5cdFx0dmFyIGhhc1BpY3R1cmUgPSBwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiUElDVFVSRVwiO1xuXHRcdHZhciBpbWFnZURhdGEgPSBlbGVtZW50WyBwZi5ucyBdO1xuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3JjID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zcmMgKSB7XG5cdFx0XHRpbWFnZURhdGEuc3JjID0gZ2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBcInNyY1wiICk7XG5cdFx0XHRpZiAoIGltYWdlRGF0YS5zcmMgKSB7XG5cdFx0XHRcdHNldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3JjQXR0ciwgaW1hZ2VEYXRhLnNyYyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlSW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNBdHRyICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3Jjc2V0ID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zcmNzZXQgfHwgIXBmLnN1cFNyY3NldCB8fCBlbGVtZW50LnNyY3NldCApIHtcblx0XHRcdHNyY3NldEF0dHJpYnV0ZSA9IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzcmNzZXRcIiApO1xuXHRcdFx0aW1hZ2VEYXRhLnNyY3NldCA9IHNyY3NldEF0dHJpYnV0ZTtcblx0XHRcdHNyY3NldFBhcnNlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhLnNldHMgPSBbXTtcblxuXHRcdGlmICggaGFzUGljdHVyZSApIHtcblx0XHRcdGltYWdlRGF0YS5waWMgPSB0cnVlO1xuXHRcdFx0Z2V0QWxsU291cmNlRWxlbWVudHMoIHBhcmVudCwgaW1hZ2VEYXRhLnNldHMgKTtcblx0XHR9XG5cblx0XHRpZiAoIGltYWdlRGF0YS5zcmNzZXQgKSB7XG5cdFx0XHRpbWFnZVNldCA9IHtcblx0XHRcdFx0c3Jjc2V0OiBpbWFnZURhdGEuc3Jjc2V0LFxuXHRcdFx0XHRzaXplczogZ2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBcInNpemVzXCIgKVxuXHRcdFx0fTtcblxuXHRcdFx0aW1hZ2VEYXRhLnNldHMucHVzaCggaW1hZ2VTZXQgKTtcblxuXHRcdFx0aXNXRGVzY3JpcG9yID0gKGFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IgfHwgaW1hZ2VEYXRhLnNyYykgJiYgcmVnV0Rlc2MudGVzdChpbWFnZURhdGEuc3Jjc2V0IHx8IFwiXCIpO1xuXG5cdFx0XHQvLyBhZGQgbm9ybWFsIHNyYyBhcyBjYW5kaWRhdGUsIGlmIHNvdXJjZSBoYXMgbm8gdyBkZXNjcmlwdG9yXG5cdFx0XHRpZiAoICFpc1dEZXNjcmlwb3IgJiYgaW1hZ2VEYXRhLnNyYyAmJiAhZ2V0Q2FuZGlkYXRlRm9yU3JjKGltYWdlRGF0YS5zcmMsIGltYWdlU2V0KSAmJiAhaW1hZ2VTZXQuaGFzMXggKSB7XG5cdFx0XHRcdGltYWdlU2V0LnNyY3NldCArPSBcIiwgXCIgKyBpbWFnZURhdGEuc3JjO1xuXHRcdFx0XHRpbWFnZVNldC5jYW5kcy5wdXNoKHtcblx0XHRcdFx0XHR1cmw6IGltYWdlRGF0YS5zcmMsXG5cdFx0XHRcdFx0ZDogMSxcblx0XHRcdFx0XHRzZXQ6IGltYWdlU2V0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmICggaW1hZ2VEYXRhLnNyYyApIHtcblx0XHRcdGltYWdlRGF0YS5zZXRzLnB1c2goIHtcblx0XHRcdFx0c3Jjc2V0OiBpbWFnZURhdGEuc3JjLFxuXHRcdFx0XHRzaXplczogbnVsbFxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5jdXJDYW4gPSBudWxsO1xuXHRcdGltYWdlRGF0YS5jdXJTcmMgPSB1bmRlZmluZWQ7XG5cblx0XHQvLyBpZiBpbWcgaGFzIHBpY3R1cmUgb3IgdGhlIHNyY3NldCB3YXMgcmVtb3ZlZCBvciBoYXMgYSBzcmNzZXQgYW5kIGRvZXMgbm90IHN1cHBvcnQgc3Jjc2V0IGF0IGFsbFxuXHRcdC8vIG9yIGhhcyBhIHcgZGVzY3JpcHRvciAoYW5kIGRvZXMgbm90IHN1cHBvcnQgc2l6ZXMpIHNldCBzdXBwb3J0IHRvIGZhbHNlIHRvIGV2YWx1YXRlXG5cdFx0aW1hZ2VEYXRhLnN1cHBvcnRlZCA9ICEoIGhhc1BpY3R1cmUgfHwgKCBpbWFnZVNldCAmJiAhcGYuc3VwU3Jjc2V0ICkgfHwgKGlzV0Rlc2NyaXBvciAmJiAhcGYuc3VwU2l6ZXMpICk7XG5cblx0XHRpZiAoIHNyY3NldFBhcnNlZCAmJiBwZi5zdXBTcmNzZXQgJiYgIWltYWdlRGF0YS5zdXBwb3J0ZWQgKSB7XG5cdFx0XHRpZiAoIHNyY3NldEF0dHJpYnV0ZSApIHtcblx0XHRcdFx0c2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNzZXRBdHRyLCBzcmNzZXRBdHRyaWJ1dGUgKTtcblx0XHRcdFx0ZWxlbWVudC5zcmNzZXQgPSBcIlwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlSW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNzZXRBdHRyICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGltYWdlRGF0YS5zdXBwb3J0ZWQgJiYgIWltYWdlRGF0YS5zcmNzZXQgJiYgKCghaW1hZ2VEYXRhLnNyYyAmJiBlbGVtZW50LnNyYykgfHwgIGVsZW1lbnQuc3JjICE9PSBwZi5tYWtlVXJsKGltYWdlRGF0YS5zcmMpKSkge1xuXHRcdFx0aWYgKGltYWdlRGF0YS5zcmMgPT09IG51bGwpIHtcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnNyYyA9IGltYWdlRGF0YS5zcmM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhLnBhcnNlZCA9IHRydWU7XG5cdH07XG5cblx0cGYuZmlsbEltZyA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcblx0XHR2YXIgaW1hZ2VEYXRhO1xuXHRcdHZhciBleHRyZW1lID0gb3B0aW9ucy5yZXNlbGVjdCB8fCBvcHRpb25zLnJlZXZhbHVhdGU7XG5cblx0XHQvLyBleHBhbmRvIGZvciBjYWNoaW5nIGRhdGEgb24gdGhlIGltZ1xuXHRcdGlmICggIWVsZW1lbnRbIHBmLm5zIF0gKSB7XG5cdFx0XHRlbGVtZW50WyBwZi5ucyBdID0ge307XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhID0gZWxlbWVudFsgcGYubnMgXTtcblxuXHRcdC8vIGlmIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkLCBza2lwIGl0XG5cdFx0Ly8gdW5sZXNzIGBvcHRpb25zLnJlZXZhbHVhdGVgIGlzIHNldCB0byB0cnVlICggdGhpcywgZm9yIGV4YW1wbGUsXG5cdFx0Ly8gaXMgc2V0IHRvIHRydWUgd2hlbiBydW5uaW5nIGBwaWN0dXJlZmlsbGAgb24gYHJlc2l6ZWAgKS5cblx0XHRpZiAoICFleHRyZW1lICYmIGltYWdlRGF0YS5ldmFsZWQgPT09IGV2YWxJZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICFpbWFnZURhdGEucGFyc2VkIHx8IG9wdGlvbnMucmVldmFsdWF0ZSApIHtcblx0XHRcdHBmLnBhcnNlU2V0cyggZWxlbWVudCwgZWxlbWVudC5wYXJlbnROb2RlLCBvcHRpb25zICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhaW1hZ2VEYXRhLnN1cHBvcnRlZCApIHtcblx0XHRcdGFwcGx5QmVzdENhbmRpZGF0ZSggZWxlbWVudCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbWFnZURhdGEuZXZhbGVkID0gZXZhbElkO1xuXHRcdH1cblx0fTtcblxuXHRwZi5zZXR1cFJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggIWFscmVhZHlSdW4gfHwgaXNWd0RpcnR5IHx8IChEUFIgIT09IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKSApIHtcblx0XHRcdHVwZGF0ZU1ldHJpY3MoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gSWYgcGljdHVyZSBpcyBzdXBwb3J0ZWQsIHdlbGwsIHRoYXQncyBhd2Vzb21lLlxuXHRpZiAoIHBmLnN1cFBpY3R1cmUgKSB7XG5cdFx0cGljdHVyZWZpbGwgPSBub29wO1xuXHRcdHBmLmZpbGxJbWcgPSBub29wO1xuXHR9IGVsc2Uge1xuXG5cdFx0IC8vIFNldCB1cCBwaWN0dXJlIHBvbHlmaWxsIGJ5IHBvbGxpbmcgdGhlIGRvY3VtZW50XG5cdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzRG9tUmVhZHk7XG5cdFx0XHR2YXIgcmVnUmVhZHkgPSB3aW5kb3cuYXR0YWNoRXZlbnQgPyAvZCR8XmMvIDogL2QkfF5jfF5pLztcblxuXHRcdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGUgfHwgXCJcIjtcblxuXHRcdFx0XHR0aW1lcklkID0gc2V0VGltZW91dChydW4sIHJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiID8gMjAwIDogIDk5OSk7XG5cdFx0XHRcdGlmICggZG9jdW1lbnQuYm9keSApIHtcblx0XHRcdFx0XHRwZi5maWxsSW1ncygpO1xuXHRcdFx0XHRcdGlzRG9tUmVhZHkgPSBpc0RvbVJlYWR5IHx8IHJlZ1JlYWR5LnRlc3QocmVhZHlTdGF0ZSk7XG5cdFx0XHRcdFx0aWYgKCBpc0RvbVJlYWR5ICkge1xuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lcklkICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHZhciB0aW1lcklkID0gc2V0VGltZW91dChydW4sIGRvY3VtZW50LmJvZHkgPyA5IDogOTkpO1xuXG5cdFx0XHQvLyBBbHNvIGF0dGFjaCBwaWN0dXJlZmlsbCBvbiByZXNpemUgYW5kIHJlYWR5c3RhdGVjaGFuZ2Vcblx0XHRcdC8vIGh0dHA6Ly9tb2Rlcm5qYXZhc2NyaXB0LmJsb2dzcG90LmNvbS8yMDEzLzA4L2J1aWxkaW5nLWJldHRlci1kZWJvdW5jZS5odG1sXG5cdFx0XHR2YXIgZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG5cdFx0XHRcdHZhciB0aW1lb3V0LCB0aW1lc3RhbXA7XG5cdFx0XHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBsYXN0ID0gKG5ldyBEYXRlKCkpIC0gdGltZXN0YW1wO1xuXG5cdFx0XHRcdFx0aWYgKGxhc3QgPCB3YWl0KSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0XHRcdGZ1bmMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG5cblx0XHRcdFx0XHRpZiAoIXRpbWVvdXQpIHtcblx0XHRcdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdFx0dmFyIGxhc3RDbGllbnRXaWR0aCA9IGRvY0VsZW0uY2xpZW50SGVpZ2h0O1xuXHRcdFx0dmFyIG9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlzVndEaXJ0eSA9IE1hdGgubWF4KHdpbmRvdy5pbm5lcldpZHRoIHx8IDAsIGRvY0VsZW0uY2xpZW50V2lkdGgpICE9PSB1bml0cy53aWR0aCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCAhPT0gbGFzdENsaWVudFdpZHRoO1xuXHRcdFx0XHRsYXN0Q2xpZW50V2lkdGggPSBkb2NFbGVtLmNsaWVudEhlaWdodDtcblx0XHRcdFx0aWYgKCBpc1Z3RGlydHkgKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0b24oIHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2Uob25SZXNpemUsIDk5ICkgKTtcblx0XHRcdG9uKCBkb2N1bWVudCwgXCJyZWFkeXN0YXRlY2hhbmdlXCIsIHJ1biApO1xuXHRcdH0pKCk7XG5cdH1cblxuXHRwZi5waWN0dXJlZmlsbCA9IHBpY3R1cmVmaWxsO1xuXHQvL3VzZSB0aGlzIGludGVybmFsbHkgZm9yIGVhc3kgbW9ua2V5IHBhdGNoaW5nL3BlcmZvcm1hbmNlIHRlc3Rpbmdcblx0cGYuZmlsbEltZ3MgPSBwaWN0dXJlZmlsbDtcblx0cGYudGVhcmRvd25SdW4gPSBub29wO1xuXG5cdC8qIGV4cG9zZSBtZXRob2RzIGZvciB0ZXN0aW5nICovXG5cdHBpY3R1cmVmaWxsLl8gPSBwZjtcblxuXHR3aW5kb3cucGljdHVyZWZpbGxDRkcgPSB7XG5cdFx0cGY6IHBmLFxuXHRcdHB1c2g6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdHZhciBuYW1lID0gYXJncy5zaGlmdCgpO1xuXHRcdFx0aWYgKHR5cGVvZiBwZltuYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHBmW25hbWVdLmFwcGx5KHBmLCBhcmdzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNmZ1tuYW1lXSA9IGFyZ3NbMF07XG5cdFx0XHRcdGlmIChhbHJlYWR5UnVuKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoIHsgcmVzZWxlY3Q6IHRydWUgfSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHdoaWxlIChzZXRPcHRpb25zICYmIHNldE9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0d2luZG93LnBpY3R1cmVmaWxsQ0ZHLnB1c2goc2V0T3B0aW9ucy5zaGlmdCgpKTtcblx0fVxuXG5cdC8qIGV4cG9zZSBwaWN0dXJlZmlsbCAqL1xuXHR3aW5kb3cucGljdHVyZWZpbGwgPSBwaWN0dXJlZmlsbDtcblxuXHQvKiBleHBvc2UgcGljdHVyZWZpbGwgKi9cblx0aWYgKCB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHQvLyBDb21tb25KUywganVzdCBleHBvcnRcblx0XHRtb2R1bGUuZXhwb3J0cyA9IHBpY3R1cmVmaWxsO1xuXHR9IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblx0XHQvLyBBTUQgc3VwcG9ydFxuXHRcdGRlZmluZSggXCJwaWN0dXJlZmlsbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHBpY3R1cmVmaWxsOyB9ICk7XG5cdH1cblxuXHQvLyBJRTggZXZhbHMgdGhpcyBzeW5jLCBzbyBpdCBtdXN0IGJlIHRoZSBsYXN0IHRoaW5nIHdlIGRvXG5cdGlmICggIXBmLnN1cFBpY3R1cmUgKSB7XG5cdFx0dHlwZXNbIFwiaW1hZ2Uvd2VicFwiIF0gPSBkZXRlY3RUeXBlU3VwcG9ydChcImltYWdlL3dlYnBcIiwgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSa29BQUFCWFJVSlFWbEE0V0FvQUFBQVFBQUFBQUFBQUFBQUFRVXhRU0F3QUFBQUJCeEFSL1E5RVJQOERBQUJXVURnZ0dBQUFBREFCQUowQktnRUFBUUFEQURRbHBBQURjQUQrKy8xUUFBPT1cIiApO1xuXHR9XG5cbn0gKSggd2luZG93LCBkb2N1bWVudCApO1xuIiwiaW1wb3J0IGZvbnRzIGZyb20gJy4vbW9kdWxlcy9mb250cyc7XG5pbXBvcnQgbmF2IGZyb20gJy4vbW9kdWxlcy9uYXYnO1xuaW1wb3J0IGdhbGxlcnkgZnJvbSAnLi9tb2R1bGVzL2dhbGxlcnknO1xuaW1wb3J0IGhpZ2hsaWdodCBmcm9tICcuL21vZHVsZXMvaGlnaGxpZ2h0JztcbmltcG9ydCBzb3VyY2Vjb2RlIGZyb20gJy4vbW9kdWxlcy9zb3VyY2Vjb2RlJztcbmltcG9ydCBzZWN0aW9uY2hhbmdlIGZyb20gJy4vbW9kdWxlcy9zZWN0aW9uY2hhbmdlJztcbmltcG9ydCB3ZWxjb21lIGZyb20gJy4vbW9kdWxlcy93ZWxjb21lJztcblxuLy8gaW1wb3J0IGFueSBwb2x5ZmlsbHMgYW5kIG90aGVyIGxpYnMgeW91IHdhbnQgdG8gdXNlIGluIG9sZGVyIGJyb3dzZXJzIGhlcmVcbmltcG9ydCAnc3ZneHVzZSc7XG5pbXBvcnQgJ3BpY3R1cmVmaWxsJztcblxuLy8gbGV0cyBjaGVjayBpZiB3ZSBoYXZlIGEgbW9kZXJuIGJyb3dzZXIsIGFuZCB0aGVuLCBlbmhhbmNlIVxuLy8gRWRnZSwgRmlyZWZveCwgQ2hyb21lLCBPcGVyYSBhcyB3ZWxsIGFzIElFMTArLCBpT1M3KyBhbmQgQW5kcm9pZCA0LjQrXG5pZiAoJ3Zpc2liaWxpdHlTdGF0ZScgaW4gZG9jdW1lbnQpIHtcbiAgLy8gcmVtb3ZlIHRoZSBuby1qcyBjbGFzc1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcblxuICAvLyBsb2FkIGFsbCBtb2R1bGVzXG4gIGZvbnRzKCk7XG4gIG5hdigpO1xuICBnYWxsZXJ5KCk7XG4gIGhpZ2hsaWdodCgpO1xuICBzZWN0aW9uY2hhbmdlKCk7XG4gIHNvdXJjZWNvZGUoKTtcbiAgd2VsY29tZSgpO1xufVxuIl0sIm5hbWVzIjpbImNvbW1vbmpzSGVscGVycy5jb21tb25qc0dsb2JhbCIsInRoaXMiLCJmb250Q29uZmlnIiwic2hhcmVkIiwiZm9udE9ic2VydmVycyIsImtleXMiLCJmb3JFYWNoIiwiZm9udCIsImZvbnRmYWNlIiwicHVzaCIsIk9ic2VydmVyIiwiZmFtaWx5IiwicmVwbGFjZSIsIndlaWdodCIsInN0eWxlIiwibGVuZ3RoIiwicG9seWZpbGwiLCJhbGwiLCJ0aGVuIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwiaGVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsInJ1biIsInByZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2RlYmxvY2siLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJidXR0b25zIiwiaGlkZVdlbGNvbWUiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImluamVjdFNvdXJjZWJveCIsImh0bWwiLCJzb3VyY2Vib3giLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwidGV4dENvbnRlbnQiLCJidXR0b25DbGljayIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJvbmxvYWQiLCJhamF4Q2FsbCIsInN0YXR1cyIsInJlc3BvbnNlIiwic2VuZCIsInJlbW92ZUNoaWxkIiwiYnJlYWtwb2ludHMiLCJzaG9ydGNvZGUiLCJjdXN0b20iLCJ2YWx1ZSIsInF1ZXJ5IiwibWF0Y2giLCJweFZhbHVlIiwicGFyc2VJbnQiLCJlbVZhbHVlIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsaW5rIiwic2V0VGltZW91dCIsImdldEF0dHJpYnV0ZSIsInNlY3Rpb25MaW5rcyIsImxpbmtzIiwicGFnZSIsImNoYW5nZVNlY3Rpb25zIiwibXEiLCJjb250YWlucyIsIm1lbnVDbGljayIsInRhcmdldCIsInNlY3Rpb25zIiwic2VjdGlvbkxpbmsiLCJzZWMiLCJyZW1vdmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZVdlbGNvbWUiLCJ3ZWxjb21lRG9uZSIsIm9ua2V5ZG93biIsImV2ZW50IiwiaXNIb21lcGFnZSIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyw4R0FBOEcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsOEdBQThHLENBQUM7QUFDdmdDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyw4R0FBOEcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsNEVBQTRFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xWLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsb0xBQW9MLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzMxQixDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNwZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3JmLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFD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QUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxjQUFjLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxxSUFBcUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1MQUFtTCxDQUFDLENBQUMsQ0FBQyxtTEFBbUwsQ0FBQyxDQUFDLENBQUMsZ0tBQWdLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxD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QUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQzs7OztLQUl2RCxNQUFNLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsS0FBSyxHQUFHLENBQUMsRUFBRTs7O0tBR3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQzs7Ozs7S0FLNUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7OztLQUdyRCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZCOzs7OztHQUtELElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDWixTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7SUFFcEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsSUFBSSxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDMUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0lBRXBCLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0I7R0FDRDs7Ozs7Ozs7RUFRRCxTQUFTLFFBQVEsR0FBRzs7O0dBR25CLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7OztHQUd0QyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7OztHQUd2QixLQUFLLEdBQUcsZUFBZSxDQUFDOztHQUV4QixPQUFPLElBQUksRUFBRTs7O0lBR1osQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7SUFPdEIsSUFBSSxLQUFLLEtBQUssZUFBZSxFQUFFOzs7Ozs7O0tBTzlCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2YsSUFBSSxpQkFBaUIsRUFBRTtPQUN0QixXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7T0FDcEMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO09BQ3ZCLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztPQUMzQjs7Ozs7O01BTUQsTUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7TUFDckIsR0FBRyxJQUFJLENBQUMsQ0FBQztNQUNULElBQUksaUJBQWlCLEVBQUU7T0FDdEIsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO09BQ3BDO01BQ0QsZ0JBQWdCLEVBQUUsQ0FBQztNQUNuQixPQUFPOzs7O01BSVAsTUFBTSxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7TUFDMUIsaUJBQWlCLEdBQUcsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO01BQzFDLEtBQUssR0FBRyxXQUFXLENBQUM7Ozs7O01BS3BCLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO01BQ3BCLElBQUksaUJBQWlCLEVBQUU7T0FDdEIsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO09BQ3BDO01BQ0QsZ0JBQWdCLEVBQUUsQ0FBQztNQUNuQixPQUFPOzs7O01BSVAsTUFBTTtNQUNOLGlCQUFpQixHQUFHLGlCQUFpQixHQUFHLENBQUMsQ0FBQztNQUMxQzs7OztLQUlELE1BQU0sSUFBSSxLQUFLLEtBQUssV0FBVyxFQUFFOzs7O0tBSWpDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtNQUNkLGlCQUFpQixHQUFHLGlCQUFpQixHQUFHLENBQUMsQ0FBQztNQUMxQyxLQUFLLEdBQUcsZUFBZSxDQUFDOzs7OztNQUt4QixNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtNQUNwQixXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7TUFDcEMsZ0JBQWdCLEVBQUUsQ0FBQztNQUNuQixPQUFPOzs7O01BSVAsTUFBTTtNQUNOLGlCQUFpQixHQUFHLGlCQUFpQixHQUFHLENBQUMsQ0FBQztNQUMxQzs7O0tBR0QsTUFBTSxJQUFJLEtBQUssS0FBSyxrQkFBa0IsRUFBRTs7OztLQUl4QyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs7O01BR2YsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUU7TUFDcEIsZ0JBQWdCLEVBQUUsQ0FBQztNQUNuQixPQUFPOzs7O01BSVAsTUFBTTtNQUNOLEtBQUssR0FBRyxlQUFlLENBQUM7TUFDeEIsR0FBRyxJQUFJLENBQUMsQ0FBQzs7TUFFVDtLQUNEOzs7SUFHRCxHQUFHLElBQUksQ0FBQyxDQUFDOzs7SUFHVDtHQUNEOzs7OztFQUtELE9BQU8sSUFBSSxFQUFFO0dBQ1osaUJBQWlCLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7O0dBRzlDLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRTtJQUN2QixPQUFPLFVBQVUsQ0FBQztJQUNsQjs7OztHQUlELEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzs7R0FHL0MsV0FBVyxHQUFHLEVBQUUsQ0FBQzs7Ozs7R0FLakIsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0lBQzFCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUUzQyxnQkFBZ0IsRUFBRSxDQUFDOzs7SUFHbkIsTUFBTTtJQUNOLFFBQVEsRUFBRSxDQUFDO0lBQ1g7OztHQUdEO0VBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNkJELFNBQVMsVUFBVSxDQUFDLFFBQVEsRUFBRTs7Ozs7Ozs7OztFQVU3QixJQUFJLHVCQUF1QixHQUFHLHlHQUF5RyxDQUFDOzs7O0VBSXhJLElBQUksWUFBWSxHQUFHLHlDQUF5QyxDQUFDOztFQUU3RCxJQUFJLENBQUMsQ0FBQztFQUNOLElBQUksaUJBQWlCLENBQUM7RUFDdEIsSUFBSSx1QkFBdUIsQ0FBQztFQUM1QixJQUFJLFlBQVksQ0FBQztFQUNqQixJQUFJLGtCQUFrQixDQUFDO0VBQ3ZCLElBQUksSUFBSSxDQUFDOzs7Ozs7Ozs7RUFTVCxTQUFTLG9CQUFvQixDQUFDLEdBQUcsRUFBRTtHQUNsQyxJQUFJLE1BQU0sQ0FBQztHQUNYLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztHQUNuQixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7R0FDeEIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0dBQ25CLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztHQUNuQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7R0FDWixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7O0dBRXRCLFNBQVMsYUFBYSxHQUFHO0lBQ3hCLElBQUksU0FBUyxFQUFFO0tBQ2QsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMvQixTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ2Y7SUFDRDs7R0FFRCxTQUFTLGtCQUFrQixHQUFHO0lBQzdCLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO0tBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDL0IsY0FBYyxHQUFHLEVBQUUsQ0FBQztLQUNwQjtJQUNEOzs7R0FHRCxPQUFPLElBQUksRUFBRTtJQUNaLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUV6QixJQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUU7S0FDbEIsYUFBYSxFQUFFLENBQUM7S0FDaEIsa0JBQWtCLEVBQUUsQ0FBQztLQUNyQixPQUFPLFNBQVMsQ0FBQztLQUNqQixNQUFNLElBQUksU0FBUyxFQUFFO0tBQ3JCLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7TUFDL0MsU0FBUyxHQUFHLEtBQUssQ0FBQztNQUNsQixHQUFHLElBQUksQ0FBQyxDQUFDO01BQ1QsYUFBYSxFQUFFLENBQUM7TUFDaEIsU0FBUztNQUNULE1BQU07TUFDTixHQUFHLElBQUksQ0FBQyxDQUFDO01BQ1QsU0FBUztNQUNUO0tBQ0QsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTs7OztLQUkzQixLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEdBQUc7TUFDN0UsR0FBRyxJQUFJLENBQUMsQ0FBQztNQUNULFNBQVM7TUFDVCxNQUFNLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtNQUM1QixhQUFhLEVBQUUsQ0FBQztNQUNoQixHQUFHLEdBQUcsQ0FBQyxDQUFDO01BQ1IsU0FBUztNQUNULE1BQU07O01BRU4sTUFBTSxHQUFHLEdBQUcsQ0FBQztNQUNiO0tBQ0QsTUFBTSxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7S0FDMUIsVUFBVSxJQUFJLENBQUMsQ0FBQztLQUNoQixNQUFNLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtLQUMxQixVQUFVLElBQUksQ0FBQyxDQUFDO0tBQ2hCLE1BQU0sSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO0tBQzFCLGFBQWEsRUFBRSxDQUFDO0tBQ2hCLGtCQUFrQixFQUFFLENBQUM7S0FDckIsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNULFNBQVM7S0FDVCxNQUFNLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHO0tBQy9ELFNBQVMsR0FBRyxJQUFJLENBQUM7S0FDakIsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNULFNBQVM7S0FDVDs7SUFFRCxTQUFTLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUMvQixHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ1Q7R0FDRDs7RUFFRCxTQUFTLGlDQUFpQyxDQUFDLENBQUMsRUFBRTtHQUM3QyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0dBQzNFLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7Ozs7R0FJeEMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7R0FDL0QsT0FBTyxLQUFLLENBQUM7R0FDYjs7Ozs7Ozs7RUFRRCxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUNuRCx1QkFBdUIsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7OztFQUduRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHVCQUF1QixFQUFFLENBQUMsRUFBRSxFQUFFO0dBQzdDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0dBZXBDLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOztHQUUzRCxJQUFJLGlDQUFpQyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7SUFDMUQsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0lBQzFCLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNuQixNQUFNO0lBQ04sU0FBUztJQUNUOzs7OztHQUtELElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDWjs7Ozs7Ozs7OztHQVVELFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ3RDLElBQUksRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLEdBQUc7SUFDekMsU0FBUztJQUNUOzs7R0FHRCxPQUFPLElBQUksQ0FBQztHQUNaOzs7O0VBSUQsT0FBTyxPQUFPLENBQUM7RUFDZjs7O0NBR0QsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztDQUduRCxFQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsSUFBSSxLQUFLLENBQUM7Q0FDakMsRUFBRSxDQUFDLFFBQVEsR0FBRyxPQUFPLElBQUksS0FBSyxDQUFDO0NBQy9CLEVBQUUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQzs7OztDQUk1QyxJQUFJLEVBQUUsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7RUFDbEQsQ0FBQyxTQUFTLE1BQU0sRUFBRTtHQUNqQixLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztHQUN6QixNQUFNLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztHQUN2QixFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQztHQUNsRCxFQUFFLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztHQUM5QyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUNsQzs7O0NBR0QsSUFBSSxFQUFFLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTs7RUFFakMsQ0FBQyxXQUFXO0dBQ1gsSUFBSSxNQUFNLEdBQUcsb0ZBQW9GLENBQUM7R0FDbEcsSUFBSSxNQUFNLEdBQUcsNEVBQTRFLENBQUM7R0FDMUYsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUN4QyxJQUFJLElBQUksR0FBRyxXQUFXO0lBQ3JCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7O0lBRXRCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtLQUNoQixFQUFFLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztLQUNuQjs7SUFFRCxzQkFBc0IsR0FBRyxFQUFFLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFFdEQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDOztJQUUxQixVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7R0FFRixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztHQUNsQixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztHQUNuQixHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzs7R0FFakMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7R0FDOUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDakIsR0FBRyxDQUFDOztFQUVMLE1BQU07RUFDTixrQkFBa0IsR0FBRyxJQUFJLENBQUM7RUFDMUI7Ozs7Q0FJRCxFQUFFLENBQUMsUUFBUSxHQUFHLHlCQUF5QixDQUFDO0NBQ3hDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztDQUNyQixFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Q0FLYixFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztDQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzs7O0NBR2IsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7O0NBRWxCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzs7Ozs7OztDQVFsQixFQUFFLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRTtFQUNsQyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztFQUNsQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDbkIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Q0FTSCxFQUFFLENBQUMsR0FBRyxHQUFHLFNBQVMsT0FBTyxFQUFFLEdBQUcsRUFBRTtFQUMvQixPQUFPLEVBQUUsZUFBZSxJQUFJLE9BQU8sS0FBSyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0VBQzNFLENBQUM7Ozs7Ozs7Q0FPRixFQUFFLENBQUMsWUFBWSxHQUFHLFdBQVc7RUFDNUIsS0FBSyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sR0FBRztHQUM5RSxFQUFFLENBQUMsWUFBWSxHQUFHLFVBQVUsS0FBSyxHQUFHO0lBQ25DLE9BQU8sQ0FBQyxLQUFLLE1BQU0sVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pELENBQUM7R0FDRixNQUFNO0dBQ04sRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO0dBQ3pCOztFQUVELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO0VBQ2hELENBQUM7Ozs7Ozs7O0NBUUYsRUFBRSxDQUFDLEdBQUcsR0FBRyxVQUFVLEtBQUssR0FBRztFQUMxQixPQUFPLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0VBQ3JDLENBQUM7Ozs7Ozs7Ozs7O0NBV0YsRUFBRSxDQUFDLFVBQVUsR0FBRyxVQUFVLGVBQWUsR0FBRzs7RUFFM0MsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUM7RUFDcEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0dBQ2QsS0FBSyxHQUFHLEtBQUssQ0FBQztHQUNkOztFQUVELE9BQU8sS0FBSyxDQUFDO0VBQ2IsQ0FBQzs7Ozs7O0NBTUYsRUFBRSxDQUFDLFlBQVksR0FBRyxVQUFVLElBQUksR0FBRztFQUNsQyxPQUFPLEVBQUUsSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7RUFDdkMsQ0FBQzs7Ozs7OztDQU9GLEVBQUUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFVBQVUsYUFBYSxHQUFHO0VBQ2hELElBQUksS0FBSyxHQUFHLEVBQUUsYUFBYSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDbkQsT0FBTztHQUNOLEtBQUssRUFBRSxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztHQUN4QixNQUFNLEVBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7R0FDekIsQ0FBQztFQUNGLENBQUMsQ0FBQzs7Q0FFSCxFQUFFLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxHQUFHO0VBQzdCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHO0dBQ2pCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7R0FDekM7RUFDRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFDakIsQ0FBQzs7Ozs7OztDQU9GLEVBQUUsQ0FBQyxVQUFVLEdBQUcsV0FBVztFQUMxQixJQUFJLElBQUksQ0FBQztFQUNULEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRztHQUN4QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRTtJQUN4QyxlQUFlLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPO0lBQ3ZDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7R0FFdEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOzs7O0dBSTlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztHQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7O0dBRTNCLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7R0FDeEIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7R0FDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7O0dBR3hCLE1BQU0sR0FBRyxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOzs7R0FHbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO0dBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQzs7R0FFckM7RUFDRCxPQUFPLE1BQU0sSUFBSSxFQUFFLENBQUM7RUFDcEIsQ0FBQzs7Ozs7Q0FLRixFQUFFLENBQUMsY0FBYyxHQUFHLFVBQVUsaUJBQWlCLEdBQUc7Ozs7RUFJakQsS0FBSyxFQUFFLGlCQUFpQixJQUFJLGVBQWUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUc7R0FDeEQsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxDQUFDOztHQUVyRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztHQUNwRjs7RUFFRCxPQUFPLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxDQUFDO0VBQzVDLENBQUM7Ozs7Ozs7Ozs7OztDQVlGLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLEdBQUc7RUFDM0IsSUFBSSxVQUFVLENBQUM7RUFDZixLQUFLLEdBQUcsR0FBRzs7R0FFVixVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7R0FFaEMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUN4RCxhQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QztHQUNEO0VBQ0QsT0FBTyxVQUFVLENBQUM7RUFDbEIsQ0FBQzs7Q0FFRixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7O0NBRTlCLEVBQUUsQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLFVBQVUsRUFBRSxHQUFHLEdBQUc7RUFDbEQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFDbkMsSUFBSSxTQUFTO0dBQ1osQ0FBQztHQUNELENBQUM7R0FDRCxNQUFNO0dBQ04sYUFBYTtHQUNiLE1BQU07R0FDTixNQUFNO0dBQ04sWUFBWTtHQUNaLFdBQVcsQ0FBQzs7RUFFYixJQUFJLFNBQVMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQzdCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7O0VBRWpCLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7RUFFN0MsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7RUFHekUsS0FBSyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHOzs7O0dBSW5ELFdBQVcsSUFBSSxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDOztHQUV4RSxLQUFLLENBQUMsV0FBVyxHQUFHO0lBQ25CLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzs7O0lBSXJCLEtBQUssTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUc7S0FDeEIsYUFBYSxHQUFHLE1BQU0sQ0FBQztLQUN2QjtJQUNEO0dBQ0Q7O0VBRUQsS0FBSyxDQUFDLGFBQWEsR0FBRzs7R0FFckIsVUFBVSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQzs7R0FFakMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7R0FDM0IsYUFBYSxHQUFHLFVBQVUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7O0dBRXpDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQzlCLFNBQVMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDNUIsS0FBSyxTQUFTLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRztLQUMzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7OztLQUlWLElBQUksVUFBVSxFQUFFLENBQUMsRUFBRTtPQUNqQixXQUFXLElBQUksTUFBTSxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO01BQ3ZELFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7TUFFL0UsYUFBYSxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7TUFFaEMsTUFBTTtNQUNOLGFBQWEsR0FBRyxTQUFTLENBQUM7TUFDMUI7S0FDRCxNQUFNO0tBQ047SUFDRDtHQUNEOztFQUVELEtBQUssYUFBYSxHQUFHOztHQUVwQixZQUFZLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7O0dBRS9DLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0dBQ2hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDOztHQUVqQyxLQUFLLFlBQVksS0FBSyxNQUFNLEdBQUc7SUFDOUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLENBQUM7SUFDaEM7R0FDRCxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO0dBQ2xCO0VBQ0QsQ0FBQzs7Q0FFRixFQUFFLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxFQUFFLGFBQWEsR0FBRztFQUMxQyxJQUFJLFNBQVMsQ0FBQztFQUNkLEdBQUcsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQzs7O0VBRzVCLEtBQUssYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssZUFBZSxHQUFHO0dBQ2pELFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztHQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQzs7OztHQUkvQyxLQUFLLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHO0lBQzFCLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUM1QjtHQUNEO0VBQ0QsQ0FBQzs7Q0FFRixFQUFFLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxHQUFHO0VBQzNCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUM7RUFDekIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO0VBQ2xCLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDOztFQUU5QixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUc7R0FDN0MsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7R0FFZCxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUc7SUFDcEcsU0FBUztJQUNUOztHQUVELEtBQUssWUFBWSxLQUFLLFNBQVMsR0FBRztJQUNqQyxHQUFHLEdBQUcsWUFBWSxDQUFDO0lBQ25COztHQUVELEtBQUssR0FBRyxHQUFHLENBQUM7R0FDWixNQUFNO0dBQ047O0VBRUQsT0FBTyxLQUFLLENBQUM7RUFDYixDQUFDOztDQUVGLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sR0FBRztFQUNuRCxJQUFJLGVBQWUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQzs7RUFFMUQsSUFBSSxVQUFVLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssU0FBUyxDQUFDO0VBQ3ZFLElBQUksU0FBUyxHQUFHLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O0VBRWpDLEtBQUssU0FBUyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsR0FBRztHQUNqRCxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0dBQ2xELEtBQUssU0FBUyxDQUFDLEdBQUcsR0FBRztJQUNwQixVQUFVLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ25ELE1BQU07SUFDTixhQUFhLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUN2QztHQUNEOztFQUVELEtBQUssU0FBUyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRztHQUMxRixlQUFlLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7R0FDdkQsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7R0FDbkMsWUFBWSxHQUFHLElBQUksQ0FBQztHQUNwQjs7RUFFRCxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7RUFFcEIsS0FBSyxVQUFVLEdBQUc7R0FDakIsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7R0FDckIsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUMvQzs7RUFFRCxLQUFLLFNBQVMsQ0FBQyxNQUFNLEdBQUc7R0FDdkIsUUFBUSxHQUFHO0lBQ1YsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO0lBQ3hCLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7SUFDMUMsQ0FBQzs7R0FFRixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7R0FFaEMsWUFBWSxHQUFHLENBQUMsc0JBQXNCLElBQUksU0FBUyxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUM7OztHQUdsRyxLQUFLLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRztJQUN4RyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQ3hDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0tBQ25CLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRztLQUNsQixDQUFDLEVBQUUsQ0FBQztLQUNKLEdBQUcsRUFBRSxRQUFRO0tBQ2IsQ0FBQyxDQUFDO0lBQ0g7O0dBRUQsTUFBTSxLQUFLLFNBQVMsQ0FBQyxHQUFHLEdBQUc7R0FDM0IsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFDcEIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHO0lBQ3JCLEtBQUssRUFBRSxJQUFJO0lBQ1gsRUFBRSxDQUFDO0dBQ0o7O0VBRUQsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7RUFDeEIsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7Ozs7RUFJN0IsU0FBUyxDQUFDLFNBQVMsR0FBRyxHQUFHLFVBQVUsTUFBTSxRQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssWUFBWSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7O0VBRXpHLEtBQUssWUFBWSxJQUFJLEVBQUUsQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHO0dBQzNELEtBQUssZUFBZSxHQUFHO0lBQ3RCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsQ0FBQztJQUN4RCxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNwQixNQUFNO0lBQ04sYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDMUM7R0FDRDs7RUFFRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0dBQ2hJLElBQUksU0FBUyxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDM0IsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixNQUFNO0lBQ04sT0FBTyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzVCO0dBQ0Q7O0VBRUQsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7RUFDeEIsQ0FBQzs7Q0FFRixFQUFFLENBQUMsT0FBTyxHQUFHLFNBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtFQUN2QyxJQUFJLFNBQVMsQ0FBQztFQUNkLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQzs7O0VBR3JELEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHO0dBQ3hCLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDO0dBQ3RCOztFQUVELFNBQVMsR0FBRyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzs7OztFQUs3QixLQUFLLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssTUFBTSxHQUFHO0dBQzlDLE9BQU87R0FDUDs7RUFFRCxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxHQUFHO0dBQzlDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUM7R0FDckQ7O0VBRUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUc7R0FDM0Isa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUM7R0FDOUIsTUFBTTtHQUNOLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0dBQzFCO0VBQ0QsQ0FBQzs7Q0FFRixFQUFFLENBQUMsUUFBUSxHQUFHLFdBQVc7RUFDeEIsS0FBSyxDQUFDLFVBQVUsSUFBSSxTQUFTLEtBQUssR0FBRyxLQUFLLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHO0dBQ3BFLGFBQWEsRUFBRSxDQUFDO0dBQ2hCO0VBQ0QsQ0FBQzs7O0NBR0YsS0FBSyxFQUFFLENBQUMsVUFBVSxHQUFHO0VBQ3BCLFdBQVcsR0FBRyxJQUFJLENBQUM7RUFDbkIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7RUFDbEIsTUFBTTs7O0VBR04sQ0FBQyxXQUFXO0dBQ1gsSUFBSSxVQUFVLENBQUM7R0FDZixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sR0FBRyxVQUFVLENBQUM7O0dBRXpELElBQUksR0FBRyxHQUFHLFdBQVc7SUFDcEIsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7O0lBRTNDLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsS0FBSyxTQUFTLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLEtBQUssUUFBUSxDQUFDLElBQUksR0FBRztLQUNwQixFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDZCxVQUFVLEdBQUcsVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDckQsS0FBSyxVQUFVLEdBQUc7TUFDakIsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDO01BQ3hCOztLQUVEO0lBQ0QsQ0FBQzs7R0FFRixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDOzs7O0dBSXRELElBQUksUUFBUSxHQUFHLFNBQVMsSUFBSSxFQUFFLElBQUksRUFBRTtJQUNuQyxJQUFJLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDdkIsSUFBSSxLQUFLLEdBQUcsV0FBVztLQUN0QixJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksU0FBUyxDQUFDOztLQUVwQyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7TUFDaEIsT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO01BQ3pDLE1BQU07TUFDTixPQUFPLEdBQUcsSUFBSSxDQUFDO01BQ2YsSUFBSSxFQUFFLENBQUM7TUFDUDtLQUNELENBQUM7O0lBRUYsT0FBTyxXQUFXO0tBQ2pCLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztLQUV2QixJQUFJLENBQUMsT0FBTyxFQUFFO01BQ2IsT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7TUFDbEM7S0FDRCxDQUFDO0lBQ0YsQ0FBQztHQUNGLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7R0FDM0MsSUFBSSxRQUFRLEdBQUcsV0FBVztJQUN6QixTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsWUFBWSxLQUFLLGVBQWUsQ0FBQztJQUM5SCxlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUN2QyxLQUFLLFNBQVMsR0FBRztLQUNoQixFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDZDtJQUNELENBQUM7O0dBRUYsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0dBQ2hELEVBQUUsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLENBQUM7R0FDeEMsR0FBRyxDQUFDO0VBQ0w7O0NBRUQsRUFBRSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7O0NBRTdCLEVBQUUsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO0NBQzFCLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOzs7Q0FHdEIsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7O0NBRW5CLE1BQU0sQ0FBQyxjQUFjLEdBQUc7RUFDdkIsRUFBRSxFQUFFLEVBQUU7RUFDTixJQUFJLEVBQUUsU0FBUyxJQUFJLEVBQUU7R0FDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0dBQ3hCLElBQUksT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0lBQ25DLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pCLE1BQU07SUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLElBQUksVUFBVSxFQUFFO0tBQ2YsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0tBQ2xDO0lBQ0Q7R0FDRDtFQUNELENBQUM7O0NBRUYsT0FBTyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtFQUN2QyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUMvQzs7O0NBR0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7OztDQUdqQyxLQUFLLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUSxHQUFHOztFQUV2RSxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztFQUM3QixNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUc7O0VBRXhELE1BQU0sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE9BQU8sV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQzVEOzs7Q0FHRCxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsR0FBRztFQUNyQixLQUFLLEVBQUUsWUFBWSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxFQUFFLHlJQUF5SSxFQUFFLENBQUM7RUFDcE07O0NBRUQsSUFBSSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7OztBQy8vQ3hCO0FBQ0EsQUFDQSxBQUVBOztBQUVBLElBQUkscUJBQXFCbEUsUUFBekIsRUFBbUM7O1dBRXhCSixlQUFULENBQXlCQyxTQUF6QixDQUFtQ2lFLE1BQW5DLENBQTBDLE9BQTFDOzs7Ozs7Ozs7Ozs7In0=
