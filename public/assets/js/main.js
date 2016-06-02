(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.7.0
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(e,t){"use strict";"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.baguetteBox=t()}(this,function(){"use strict";function e(e,n){D.transforms=k(),D.svg=w(),i(),o(e),t(e,n)}function t(e,t){var n=document.querySelectorAll(e),o={galleries:[],nodeList:n};W[e]=o,[].forEach.call(n,function(e){t&&t.filter&&(U=t.filter);var n=e.getElementsByTagName("a");n=[].filter.call(n,function(e){return U.test(e.href)});var i=[];0!==n.length&&(o.galleries.push(i),[].forEach.call(n,function(e,n){var o=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,u(i,t),c(n)},a={eventHandler:o,imageElement:e};E(e,"click",o),i.push(a)}))})}function n(){for(var e in W)W.hasOwnProperty(e)&&o(e)}function o(e){if(W.hasOwnProperty(e)){var t=W[e].galleries;[].forEach.call(t,function(e){[].forEach.call(e,function(e){B(e.imageElement,"click",e.eventHandler)}),O===e&&(O=[])}),delete W[e]}}function i(){return(S=T("baguetteBox-overlay"))?(P=T("baguetteBox-slider"),F=T("previous-button"),H=T("next-button"),void(L=T("close-button"))):(S=N("div"),S.setAttribute("role","dialog"),S.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(S),P=N("div"),P.id="baguetteBox-slider",S.appendChild(P),F=N("button"),F.setAttribute("type","button"),F.id="previous-button",F.setAttribute("aria-label","Previous"),F.innerHTML=D.svg?j:"&lt;",S.appendChild(F),H=N("button"),H.setAttribute("type","button"),H.id="next-button",H.setAttribute("aria-label","Next"),H.innerHTML=D.svg?M:"&gt;",S.appendChild(H),L=N("button"),L.setAttribute("type","button"),L.id="close-button",L.setAttribute("aria-label","Close"),L.innerHTML=D.svg?R:"&times",S.appendChild(L),F.className=H.className=L.className="baguetteBox-button",void r())}function a(e){switch(e.keyCode){case 37:v();break;case 39:h();break;case 27:p()}}function r(){E(S,"click",K),E(F,"click",Q),E(H,"click",Z),E(L,"click",$),E(S,"touchstart",_),E(S,"touchmove",ee),E(S,"touchend",te),E(document,"focus",ne,!0)}function l(){B(S,"click",K),B(F,"click",Q),B(H,"click",Z),B(L,"click",$),B(S,"touchstart",_),B(S,"touchmove",ee),B(S,"touchend",te),B(document,"focus",ne,!0)}function u(e,t){if(O!==e){for(O=e,s(t);P.firstChild;)P.removeChild(P.firstChild);G.length=0;for(var n,o=[],i=[],a=0;a<e.length;a++)n=N("div"),n.className="full-image",n.id="baguette-img-"+a,G.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),P.appendChild(G[a]);S.setAttribute("aria-labelledby",o.join(" ")),S.setAttribute("aria-describedby",i.join(" "))}}function s(e){e||(e={});for(var t in z)Y[t]=z[t],"undefined"!=typeof e[t]&&(Y[t]=e[t]);P.style.transition=P.style.webkitTransition="fadeIn"===Y.animation?"opacity .4s ease":"slideIn"===Y.animation?"":"none","auto"===Y.buttons&&("ontouchstart"in window||1===O.length)&&(Y.buttons=!1),F.style.display=H.style.display=Y.buttons?"":"none";try{S.style.backgroundColor=Y.overlayBackgroundColor}catch(n){}}function c(e){Y.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==S.style.display&&(E(document,"keydown",a),X=e,b(X,function(){x(X),C(X)}),y(),S.style.display="block",Y.fullScreen&&f(),setTimeout(function(){S.className="visible",Y.afterShow&&Y.afterShow()},50),Y.onChange&&Y.onChange(X,G.length),J=document.activeElement,d())}function d(){Y.buttons?F.focus():L.focus()}function f(){S.requestFullscreen?S.requestFullscreen():S.webkitRequestFullscreen?S.webkitRequestFullscreen():S.mozRequestFullScreen&&S.mozRequestFullScreen()}function g(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function p(){Y.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==S.style.display&&(B(document,"keydown",a),S.className="",setTimeout(function(){S.style.display="none",g(),Y.afterHide&&Y.afterHide()},500),J.focus())}function b(e,t){var n=G[e];if("undefined"!=typeof n){if(n.getElementsByTagName("img")[0])return void(t&&t());var o=O[e].imageElement,i="function"==typeof Y.captions?Y.captions.call(O,o):o.getAttribute("data-caption")||o.title,a=m(o),r=N("figure"),l=N("img"),u=N("figcaption");r.id="baguetteBox-figure-"+e,u.id="baguetteBox-figcaption-"+e,n.appendChild(r),r.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',l.onload=function(){var n=document.querySelector("#baguette-img-"+e+" .baguetteBox-spinner");r.removeChild(n),!Y.async&&t&&t()},l.setAttribute("src",a),Y.titleTag&&i&&(l.title=i),r.appendChild(l),Y.captions&&i&&(u.innerHTML=i,r.appendChild(u)),Y.async&&t&&t()}}function m(e){var t=e.href;if(e.dataset){var n=[];for(var o in e.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=e.dataset[o]);for(var i=Object.keys(n).sort(function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,r=0;r<i.length-1&&i[r]<a;)r++;t=n[i[r]]||t}return t}function h(){var e;return X<=G.length-2?(X++,y(),x(X),e=!0):Y.animation&&(P.className="bounce-from-right",setTimeout(function(){P.className=""},400),e=!1),Y.onChange&&Y.onChange(X,G.length),e}function v(){var e;return X>=1?(X--,y(),C(X),e=!0):Y.animation&&(P.className="bounce-from-left",setTimeout(function(){P.className=""},400),e=!1),Y.onChange&&Y.onChange(X,G.length),e}function y(){var e=100*-X+"%";"fadeIn"===Y.animation?(P.style.opacity=0,setTimeout(function(){D.transforms?P.style.transform=P.style.webkitTransform="translate3d("+e+",0,0)":P.style.left=e,P.style.opacity=1},400)):D.transforms?P.style.transform=P.style.webkitTransform="translate3d("+e+",0,0)":P.style.left=e}function k(){var e=N("div");return"undefined"!=typeof e.style.perspective||"undefined"!=typeof e.style.webkitPerspective}function w(){var e=N("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(e.firstChild&&e.firstChild.namespaceURI)}function x(e){e-X>=Y.preload||b(e+1,function(){x(e+1)})}function C(e){X-e>=Y.preload||b(e-1,function(){C(e-1)})}function E(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent("on"+t,n)}function B(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent("on"+t,n)}function T(e){return document.getElementById(e)}function N(e){return document.createElement(e)}function A(){l(),n(),B(document,"keydown",a),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),W={},O=[],X=0}var S,P,F,H,L,I,q,j='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',M='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',R='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',Y={},z={captions:!0,fullScreen:!1,noScrollbars:!1,titleTag:!1,buttons:"auto",async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},D={},O=[],X=0,V=!1,U=/.+\.(gif|jpe?g|png|webp)/i,W={},G=[],J=null,K=function(e){-1!==e.target.id.indexOf("baguette-img")&&p()},Q=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,v()},Z=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,h()},$=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,p()},_=function(e){I=e.changedTouches[0].pageX,q=e.changedTouches[0].pageY},ee=function(e){if(!V){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];t.pageX-I>40?(V=!0,v()):t.pageX-I<-40?(V=!0,h()):q-t.pageY>100&&p()}},te=function(){V=!1},ne=function(e){"block"!==S.style.display||S.contains(e.target)||(e.stopPropagation(),d())};return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)e.call(t,n[i],i,n)&&o.push(n[i]);return o}),{run:e,destroy:A,showNext:h,showPrevious:v}});
},{}],2:[function(require,module,exports){
(function (process,global){
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
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
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

      if (typeof global !== 'undefined') {
          local = global;
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
}).call(this);


}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":6}],3:[function(require,module,exports){
(function (global){
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
}( typeof global !== "undefined" ? global : this ));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
(function(){var k=!!document.addEventListener;function l(a,b){k?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function v(a){document.body?a():k?document.addEventListener("DOMContentLoaded",a):document.attachEvent("onreadystatechange",function(){"interactive"!=document.readyState&&"complete"!=document.readyState||a()})};function w(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function y(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=m;z(a)&&null!==a.a.parentNode&&b(a.g)}var m=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,H=!!window.FontFace;function I(){if(null===D){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}D=""!==a.style.font}return D}function J(a,b){return[a.style,a.weight,I()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,m=a||"BESbswy",x=b||3E3,E=(new Date).getTime();return new Promise(function(a,b){if(H){var K=new Promise(function(a,b){function e(){(new Date).getTime()-E>=x?b():document.fonts.load(J(c,c.family),m).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),L=new Promise(function(a,c){setTimeout(c,x)});Promise.race([L,K]).then(function(){a(c)},function(){b(c)})}else v(function(){function q(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=
h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==r&&g==r&&h==r||f==t&&g==t&&h==t||f==u&&g==u&&h==u)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function F(){if((new Date).getTime()-E>=x)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=n.a.offsetWidth,
h=p.a.offsetWidth,q();G=setTimeout(F,50)}}var e=new w(m),n=new w(m),p=new w(m),f=-1,g=-1,h=-1,r=-1,t=-1,u=-1,d=document.createElement("div"),G=0;d.dir="ltr";y(e,J(c,"sans-serif"));y(n,J(c,"serif"));y(p,J(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);r=e.a.offsetWidth;t=n.a.offsetWidth;u=p.a.offsetWidth;F();A(e,function(a){f=a;q()});y(e,J(c,'"'+c.family+'",sans-serif'));A(n,function(a){g=a;q()});y(n,J(c,'"'+c.family+'",serif'));A(p,function(a){h=
a;q()});y(p,J(c,'"'+c.family+'",monospace'))})})};window.FontFaceObserver=B;window.FontFaceObserver.prototype.check=window.FontFaceObserver.prototype.load=B.prototype.load;"undefined"!==typeof module&&(module.exports=window.FontFaceObserver);}());

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],7:[function(require,module,exports){
/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.17
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
    'use strict';
    if (window && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems,
            tid; // timeout id
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
            var base,
                bcr,
                fallback = '', // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
                hash,
                i,
                inProgressCount = 0,
                isHidden,
                Request,
                url,
                uses,
                xhr;
            function observeIfDone() {
                // If done with making changes, start watching for chagnes in DOM again
                inProgressCount -= 1;
                if (inProgressCount === 0) { // if all xhrs were resolved
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
                url = uses[i].getAttributeNS(xlinkNS, 'href').split('#');
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
                            cache[base].onload = undefined;
                            cache[base] = true;
                        }
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

},{}],8:[function(require,module,exports){
'use strict';

var _fonts = require('./modules/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _nav = require('./modules/nav');

var _nav2 = _interopRequireDefault(_nav);

var _gallery = require('./modules/gallery');

var _gallery2 = _interopRequireDefault(_gallery);

var _highlight = require('./modules/highlight');

var _highlight2 = _interopRequireDefault(_highlight);

var _sourcecode = require('./modules/sourcecode');

var _sourcecode2 = _interopRequireDefault(_sourcecode);

var _sectionchange = require('./modules/sectionchange');

var _sectionchange2 = _interopRequireDefault(_sectionchange);

var _welcome = require('./modules/welcome');

var _welcome2 = _interopRequireDefault(_welcome);

require('svgxuse');

require('picturefill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// lets check if we have a modern browser, and then, enhance!
// Edge, Firefox, Chrome, Opera as well as IE10+, iOS7+ and Android 4.4+


// import any polyfills and other libs you want to use in older browsers here
if ('visibilityState' in document) {
  // remove the no-js class
  document.documentElement.classList.remove('no-js');

  // load all modules
  (0, _fonts2.default)();
  (0, _nav2.default)();
  (0, _gallery2.default)();
  (0, _highlight2.default)();
  (0, _sectionchange2.default)();
  (0, _sourcecode2.default)();
  (0, _welcome2.default)();
}

},{"./modules/fonts":10,"./modules/gallery":11,"./modules/highlight":12,"./modules/nav":14,"./modules/sectionchange":15,"./modules/sourcecode":16,"./modules/welcome":17,"picturefill":5,"svgxuse":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (link) {
  // this adds a delay to the section-change click-action,
  // faking a slide transition by adding the --change class

  link.classList.add('link-section--change');

  window.setTimeout(function () {
    window.location.href = link.getAttribute('href');
  }, 300); // animation is 400ms, so wait 300ms
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fontfaceobserver = require('fontfaceobserver');

var _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _sharedconfig = require('../sharedconfig');

var _sharedconfig2 = _interopRequireDefault(_sharedconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontConfig = _sharedconfig2.default['font-config'];

exports.default = function () {
  var fontObservers = [];

  // get every font from the sharedconfig, check if fontface is needed
  // and add a new ff-observer which later will be handled with Promise.all
  Object.keys(fontConfig).forEach(function (font) {
    if (fontConfig[font].fontface) {
      fontObservers.push(new _fontfaceobserver2.default(fontConfig[font].family.replace(/'/g, ''), {
        weight: fontConfig[font].weight,
        style: fontConfig[font].style
      }).check());
    }
  });

  if (fontObservers.length >= 1) {
    _es6Promise2.default.polyfill(); // for stupid browsers, polyfill promises

    Promise.all(fontObservers).then(function () {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
};

},{"../sharedconfig":18,"es6-promise":2,"fontfaceobserver":4}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baguettebox = require('baguettebox.js');

var _baguettebox2 = _interopRequireDefault(_baguettebox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _baguettebox2.default.run('.js-gallery');
};

},{"baguettebox.js":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fgLoadjs = require('fg-loadjs');

var _fgLoadjs2 = _interopRequireDefault(_fgLoadjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  var pre = document.querySelectorAll('pre');

  // if there are any pre-elements on the page, load the code-highlighting
  // plugin with filamentgroups load-js, and then execute it on every pre
  if (pre.length > 0) {
    // load the highlight js
    (0, _fgLoadjs2.default)('/assets/js/highlight.min.js', function () {
      [].concat(_toConsumableArray(pre)).forEach(function (codeblock) {
        window.hljs.highlightBlock(codeblock);
      });
    });
  }
};

},{"fg-loadjs":3}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sharedconfig = require('../sharedconfig');

var _sharedconfig2 = _interopRequireDefault(_sharedconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpoints = _sharedconfig2.default.breakpoints;

// same usage as the mediaquery-scss-mixin, just
// provide the shortcode used in the scss-file and if it
// is a custom query. this module return true if the
// given breakpoint matches or false if it doesnt

exports.default = function (shortcode) {
  var custom = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var value = breakpoints[shortcode];
  var query = '';

  if (custom) {
    // if we have a custom query, use 'as is', remove quotes
    query = breakpoints[shortcode].replace(/'/g, '');
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
};

},{"../sharedconfig":18}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
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
};

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mediaquery = require('./mediaquery');

var _mediaquery2 = _interopRequireDefault(_mediaquery);

var _clicksection = require('./clicksection');

var _clicksection2 = _interopRequireDefault(_clicksection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sectionLinks = document.querySelectorAll('.js-sectionchange');
var links = document.querySelectorAll('.js-nav__link');
var page = document.querySelector('.js-page');

// simulate sectionchange for navigation clicks on large displays
// but only if we are on contact/work/blog/legal-notice pages
var changeSections = (0, _mediaquery2.default)('xl') && (page.classList.contains('page--work') || page.classList.contains('page--contact') || page.classList.contains('page--blog') || page.classList.contains('page--legal-notice'));

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

  (0, _clicksection2.default)(sectionLink);
};

exports.default = function () {
  // always apply this event to all the sectionlinks
  [].concat(_toConsumableArray(sectionLinks)).forEach(function (sectionLink) {
    sectionLink.addEventListener('click', function (e) {
      e.preventDefault();
      (0, _clicksection2.default)(sectionLink);
    }, false);
  });

  // and to the menu links if needed
  if (changeSections) {
    [].concat(_toConsumableArray(links)).forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        menuClick(link);
      });
    });
  }
};

},{"./clicksection":9,"./mediaquery":13}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _highlight = require('./highlight');

var _highlight2 = _interopRequireDefault(_highlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
  (0, _highlight2.default)();
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

exports.default = function () {
  [].concat(_toConsumableArray(buttons)).forEach(function (button) {
    button.addEventListener('click', buttonClick);
  });
};

},{"./highlight":12}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var closeWelcome = document.getElementById('close-welcome');

var welcomeDone = function welcomeDone() {
  window.setTimeout(function () {
    document.querySelector('.js-welcome').classList.add('welcome--done');
  }, 800); // animation time is 700ms
};

exports.default = function () {
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
};

},{}],18:[function(require,module,exports){
module.exports={ "version": "3.0.0","hash": 64920777,
"breakpoints": {
  "s": "480px",
  "m": "640px",
  "l": "720px",
  "xl": "960px",
  "xxl": "1100px",
  "xxxl": "1250px",
  "xxxxl": "1600px",  "minheight": "'(min-height: 480px)'"
},
"font-config": {
  "default": {
    "family": "'Geomanist'",
    "fallback": "'Helvetica, Arial, sans-serif'",
    "weight": 600,
    "style": "normal",
    "line-height": 1.3333,
    "fontface": true,
    "file": "'geomanist-medium'"
  },  "regular": {
    "family": "'Geomanist'",
    "fallback": "'Helvetica, Arial, sans-serif'",
    "weight": 400,
    "style": "normal",
    "fontface": true,
    "file": "'geomanist-regular'"
  },  "code": {
    "family": "'Inconsolata'",
    "fallback": "'Hack, Menlo, Courier, monospace'",
    "weight": 400,
    "style": "normal",
    "line-height": 1.2,
    "fontface": false
  }
},
"font-sizes": {
  "h1": "64px",
  "h1-mobile": "36px",
  "h2": "48px",
  "h3": "24px",
  "h4": "18px",
  "small": "14px",
  "default": "24px"
} }
},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFndWV0dGVib3guanMvZGlzdC9iYWd1ZXR0ZUJveC5taW4uanMiLCJub2RlX21vZHVsZXMvZXM2LXByb21pc2UvZGlzdC9lczYtcHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9mZy1sb2FkanMvbG9hZEpTLmpzIiwibm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5zdGFuZGFsb25lLmpzIiwibm9kZV9tb2R1bGVzL3BpY3R1cmVmaWxsL2Rpc3QvcGljdHVyZWZpbGwuanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3N2Z3h1c2Uvc3ZneHVzZS5qcyIsInNyYy9qcy9tYWluLmpzIiwic3JjL2pzL21vZHVsZXMvY2xpY2tzZWN0aW9uLmpzIiwic3JjL2pzL21vZHVsZXMvZm9udHMuanMiLCJzcmMvanMvbW9kdWxlcy9nYWxsZXJ5LmpzIiwic3JjL2pzL21vZHVsZXMvaGlnaGxpZ2h0LmpzIiwic3JjL2pzL21vZHVsZXMvbWVkaWFxdWVyeS5qcyIsInNyYy9qcy9tb2R1bGVzL25hdi5qcyIsInNyYy9qcy9tb2R1bGVzL3NlY3Rpb25jaGFuZ2UuanMiLCJzcmMvanMvbW9kdWxlcy9zb3VyY2Vjb2RlLmpzIiwic3JjL2pzL21vZHVsZXMvd2VsY29tZS5qcyIsInNyYy9qcy9zaGFyZWRjb25maWcuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDLzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOztBQUNBOzs7Ozs7Ozs7QUFJQSxJQUFJLHFCQUFxQixRQUF6QixFQUFtQzs7QUFFakMsV0FBUyxlQUFULENBQXlCLFNBQXpCLENBQW1DLE1BQW5DLENBQTBDLE9BQTFDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7Ozs7Ozs7a0JDMUJjLFVBQUMsSUFBRCxFQUFVOzs7O0FBSXZCLE9BQUssU0FBTCxDQUFlLEdBQWYsQ0FBbUIsc0JBQW5COztBQUVBLFNBQU8sVUFBUCxDQUFrQixZQUFNO0FBQ3RCLFdBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixLQUFLLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBdkI7QUFDRCxHQUZELEVBRUcsR0FGSCxFO0FBR0QsQzs7Ozs7Ozs7O0FDVEQ7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLGFBQWEsdUJBQU8sYUFBUCxDQUFuQjs7a0JBRWUsWUFBTTtBQUNuQixNQUFNLGdCQUFnQixFQUF0Qjs7OztBQUlBLFNBQU8sSUFBUCxDQUFZLFVBQVosRUFBd0IsT0FBeEIsQ0FBZ0MsVUFBQyxJQUFELEVBQVU7QUFDeEMsUUFBSSxXQUFXLElBQVgsRUFBaUIsUUFBckIsRUFBK0I7QUFDN0Isb0JBQWMsSUFBZCxDQUNFLCtCQUFhLFdBQVcsSUFBWCxFQUFpQixNQUFqQixDQUF3QixPQUF4QixDQUFnQyxJQUFoQyxFQUFzQyxFQUF0QyxDQUFiLEVBQXdEO0FBQ3RELGdCQUFRLFdBQVcsSUFBWCxFQUFpQixNQUQ2QjtBQUV0RCxlQUFPLFdBQVcsSUFBWCxFQUFpQjtBQUY4QixPQUF4RCxFQUdHLEtBSEgsRUFERjtBQU1EO0FBQ0YsR0FURDs7QUFXQSxNQUFJLGNBQWMsTUFBZCxJQUF3QixDQUE1QixFQUErQjtBQUM3Qix5QkFBaUIsUUFBakIsRzs7QUFFQSxZQUFRLEdBQVIsQ0FBWSxhQUFaLEVBQ0csSUFESCxDQUNRLFlBQU07QUFDVixlQUFTLGVBQVQsQ0FBeUIsU0FBekIsQ0FBbUMsR0FBbkMsQ0FBdUMsY0FBdkM7QUFDRCxLQUhIO0FBSUQ7QUFDRixDOzs7Ozs7Ozs7QUM5QkQ7Ozs7OztrQkFFZSxZQUFNO0FBQ25CLHdCQUFTLEdBQVQsQ0FBYSxhQUFiO0FBQ0QsQzs7Ozs7Ozs7O0FDSkQ7Ozs7Ozs7O2tCQUVlLFlBQU07QUFDbkIsTUFBTSxNQUFNLFNBQVMsZ0JBQVQsQ0FBMEIsS0FBMUIsQ0FBWjs7OztBQUlBLE1BQUksSUFBSSxNQUFKLEdBQWEsQ0FBakIsRUFBb0I7O0FBRWxCLDRCQUFLLDZCQUFMLEVBQW9DLFlBQU07QUFDeEMsbUNBQUssR0FBTCxHQUFXLE9BQVgsQ0FBbUIsVUFBQyxTQUFELEVBQWU7QUFDaEMsZUFBTyxJQUFQLENBQVksY0FBWixDQUEyQixTQUEzQjtBQUNELE9BRkQ7QUFHRCxLQUpEO0FBS0Q7QUFDRixDOzs7Ozs7Ozs7QUNmRDs7Ozs7O0FBRUEsSUFBTSxjQUFjLHVCQUFPLFdBQTNCOzs7Ozs7O2tCQU9lLFVBQUMsU0FBRCxFQUErQjtBQUFBLE1BQW5CLE1BQW1CLHlEQUFWLEtBQVU7O0FBQzVDLE1BQU0sUUFBUSxZQUFZLFNBQVosQ0FBZDtBQUNBLE1BQUksUUFBUSxFQUFaOztBQUVBLE1BQUksTUFBSixFQUFZOztBQUVWLFlBQVEsWUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBQStCLElBQS9CLEVBQXFDLEVBQXJDLENBQVI7QUFFRCxHQUpELE1BSU8sSUFBSSxNQUFNLEtBQU4sQ0FBWSxJQUFaLENBQUosRUFBdUI7OztBQUc1QixRQUFNLFVBQVUsU0FBUyxLQUFULENBQWhCO0FBQ0EsUUFBTSxVQUFVLFVBQVUsRUFBMUI7O0FBRUEsNkJBQXVCLE9BQXZCO0FBRUQsR0FSTSxNQVFBOztBQUNMLDZCQUF1QixLQUF2QjtBQUNEOzs7QUFHRCxTQUFRLE9BQU8sVUFBUCxDQUFrQixLQUFsQixFQUF5QixPQUFqQztBQUNELEM7Ozs7Ozs7OztrQkMvQmMsWUFBTTtBQUNuQixNQUFNLE1BQU0sU0FBUyxhQUFULENBQXVCLFNBQXZCLENBQVo7QUFDQSxNQUFNLFNBQVMsU0FBUyxhQUFULENBQXVCLGdCQUF2QixDQUFmO0FBQ0EsTUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixZQUF2QixDQUFmOzs7QUFHQSxNQUFJLE1BQUosRUFBWTtBQUNWLFdBQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNyQyxVQUFJLFNBQUosQ0FBYyxNQUFkLENBQXFCLGFBQXJCO0FBQ0EsYUFBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLHFCQUF4QjtBQUNELEtBSEQ7QUFJRDtBQUNGLEM7Ozs7Ozs7OztBQ1pEOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxlQUFlLFNBQVMsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQXJCO0FBQ0EsSUFBTSxRQUFRLFNBQVMsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBZDtBQUNBLElBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBYjs7OztBQUlBLElBQU0saUJBQWtCLDBCQUFHLElBQUgsTUFDdEIsS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixZQUF4QixLQUNBLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsZUFBeEIsQ0FEQSxJQUVBLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsWUFBeEIsQ0FGQSxJQUdBLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0Isb0JBQXhCLENBSnNCLENBQXhCOztBQU9BLElBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxJQUFELEVBQVU7QUFDMUIsTUFBTSxTQUFTLEtBQUssWUFBTCxDQUFrQixhQUFsQixDQUFmO0FBQ0EsTUFBTSxXQUFXLENBQUUsTUFBRixFQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsU0FBMUIsQ0FBakI7QUFDQSxNQUFJLGNBQWMsU0FBUyxhQUFULHFCQUF5QyxNQUF6QyxDQUFsQjs7OztBQUlBLE1BQUksQ0FBQyxXQUFMLEVBQWtCO0FBQ2hCLGtCQUFjLFNBQVMsYUFBVCxDQUF1QixlQUF2QixDQUFkO0FBQ0EsYUFBUyxPQUFULENBQWlCLFVBQUMsR0FBRCxFQUFTO0FBQ3hCLGtCQUFZLFNBQVosQ0FBc0IsTUFBdEIsb0JBQThDLEdBQTlDO0FBQ0QsS0FGRDtBQUdBLGdCQUFZLFlBQVosQ0FBeUIsTUFBekIsRUFBaUMsS0FBSyxZQUFMLENBQWtCLE1BQWxCLENBQWpDO0FBQ0EsZ0JBQVksU0FBWixDQUFzQixHQUF0QixvQkFBMkMsTUFBM0M7QUFDRDs7QUFFRCw4QkFBYSxXQUFiO0FBQ0QsQ0FqQkQ7O2tCQW1CZSxZQUFNOztBQUVuQiwrQkFBSyxZQUFMLEdBQW9CLE9BQXBCLENBQTRCLFVBQUMsV0FBRCxFQUFpQjtBQUMzQyxnQkFBWSxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFDLENBQUQsRUFBTztBQUMzQyxRQUFFLGNBQUY7QUFDQSxrQ0FBYSxXQUFiO0FBQ0QsS0FIRCxFQUdHLEtBSEg7QUFJRCxHQUxEOzs7QUFRQSxNQUFJLGNBQUosRUFBb0I7QUFDbEIsaUNBQUssS0FBTCxHQUFhLE9BQWIsQ0FBcUIsVUFBQyxJQUFELEVBQVU7QUFDN0IsV0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDLENBQUQsRUFBTztBQUNwQyxVQUFFLGNBQUY7QUFDQSxrQkFBVSxJQUFWO0FBQ0QsT0FIRDtBQUlELEtBTEQ7QUFNRDtBQUNGLEM7Ozs7Ozs7OztBQ3JERDs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVUsU0FBUyxnQkFBVCxDQUEwQixVQUExQixDQUFoQjs7QUFFQSxJQUFNLGNBQWMsU0FBZCxXQUFjLEdBQU07QUFDeEIsV0FBUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDLFlBQXpDLENBQXNELFNBQXRELEVBQWlFLFNBQWpFO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNLGtCQUFrQixTQUFsQixlQUFrQixDQUFDLElBQUQsRUFBVTtBQUNoQyxNQUFNLFlBQVksU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWxCOztBQUVBLFlBQVUsU0FBVixDQUFvQixHQUFwQixDQUF3QixXQUF4QjtBQUNBLFlBQVUsU0FBVjs7QUFNQSxXQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLFNBQTFCO0FBQ0EsV0FBUyxhQUFULENBQXVCLGVBQXZCLEVBQXdDLFdBQXhDLEdBQXNELElBQXREO0FBQ0E7QUFDQTtBQUNELENBZEQ7O0FBZ0JBLElBQU0sY0FBYyxTQUFkLFdBQWMsR0FBTTtBQUN4QixNQUFNLFlBQVksU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQWxCOzs7QUFHQSxNQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNkLFFBQU0sVUFBVSxJQUFJLGNBQUosRUFBaEI7O0FBRUEsWUFBUSxJQUFSLENBQWEsS0FBYixFQUFvQixPQUFPLFFBQVAsQ0FBZ0IsSUFBcEMsRUFBMEMsSUFBMUM7QUFDQSxZQUFRLE1BQVIsR0FBaUIsU0FBUyxRQUFULEdBQXFCO0FBQ3BDLFVBQUksS0FBSyxNQUFMLElBQWUsR0FBZixJQUFzQixLQUFLLE1BQUwsR0FBYyxHQUF4QyxFQUE2QztBQUMzQyx3QkFBZ0IsS0FBSyxRQUFyQjtBQUNEO0FBQ0YsS0FKRDs7QUFNQSxZQUFRLElBQVI7QUFFRCxHQVpELE1BWU87O0FBQ0wsYUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixTQUExQjtBQUNEO0FBQ0YsQ0FuQkQ7Ozs7O2tCQXdCZSxZQUFNO0FBQ25CLCtCQUFLLE9BQUwsR0FBZSxPQUFmLENBQXVCLFVBQUMsTUFBRCxFQUFZO0FBQ2pDLFdBQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsV0FBakM7QUFDRCxHQUZEO0FBR0QsQzs7Ozs7Ozs7QUNwREQsSUFBTSxlQUFlLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUFyQjs7QUFFQSxJQUFNLGNBQWMsU0FBZCxXQUFjLEdBQU07QUFDeEIsU0FBTyxVQUFQLENBQWtCLFlBQU07QUFDdEIsYUFBUyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLFNBQXRDLENBQWdELEdBQWhELENBQW9ELGVBQXBEO0FBQ0QsR0FGRCxFQUVHLEdBRkgsRTtBQUdELENBSkQ7O2tCQU1lLFlBQU07O0FBRW5CLFdBQVMsU0FBVCxHQUFxQixVQUFDLENBQUQsRUFBTztBQUMxQixRQUFNLFFBQVEsS0FBSyxPQUFPLEtBQTFCO0FBQ0EsUUFBTSxhQUFhLFNBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsUUFBeEIsQ0FBaUMsZ0JBQWpDLENBQW5COztBQUVBLFFBQUksTUFBTSxPQUFOLEtBQWtCLEVBQWxCLElBQXdCLFVBQXhCLElBQXNDLFlBQTFDLEVBQXdEO0FBQ3RELG1CQUFhLFlBQWIsQ0FBMEIsU0FBMUIsRUFBcUMsU0FBckM7QUFDQTtBQUNEO0FBQ0YsR0FSRDs7O0FBV0EsTUFBSSxZQUFKLEVBQWtCO0FBQ2hCLGlCQUFhLGdCQUFiLENBQThCLFFBQTlCLEVBQXdDLFdBQXhDO0FBQ0EsaUJBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsV0FBdkM7QUFDRDtBQUNGLEM7OztBQ3pCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIVxyXG4gKiBiYWd1ZXR0ZUJveC5qc1xyXG4gKiBAYXV0aG9yICBmZWltb3NpXHJcbiAqIEB2ZXJzaW9uIDEuNy4wXHJcbiAqIEB1cmwgaHR0cHM6Ly9naXRodWIuY29tL2ZlaW1vc2kvYmFndWV0dGVCb3guanNcclxuICovXHJcbiFmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dCgpOmUuYmFndWV0dGVCb3g9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLG4pe0QudHJhbnNmb3Jtcz1rKCksRC5zdmc9dygpLGkoKSxvKGUpLHQoZSxuKX1mdW5jdGlvbiB0KGUsdCl7dmFyIG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlKSxvPXtnYWxsZXJpZXM6W10sbm9kZUxpc3Q6bn07V1tlXT1vLFtdLmZvckVhY2guY2FsbChuLGZ1bmN0aW9uKGUpe3QmJnQuZmlsdGVyJiYoVT10LmZpbHRlcik7dmFyIG49ZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIik7bj1bXS5maWx0ZXIuY2FsbChuLGZ1bmN0aW9uKGUpe3JldHVybiBVLnRlc3QoZS5ocmVmKX0pO3ZhciBpPVtdOzAhPT1uLmxlbmd0aCYmKG8uZ2FsbGVyaWVzLnB1c2goaSksW10uZm9yRWFjaC5jYWxsKG4sZnVuY3Rpb24oZSxuKXt2YXIgbz1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExLHUoaSx0KSxjKG4pfSxhPXtldmVudEhhbmRsZXI6byxpbWFnZUVsZW1lbnQ6ZX07RShlLFwiY2xpY2tcIixvKSxpLnB1c2goYSl9KSl9KX1mdW5jdGlvbiBuKCl7Zm9yKHZhciBlIGluIFcpVy5oYXNPd25Qcm9wZXJ0eShlKSYmbyhlKX1mdW5jdGlvbiBvKGUpe2lmKFcuaGFzT3duUHJvcGVydHkoZSkpe3ZhciB0PVdbZV0uZ2FsbGVyaWVzO1tdLmZvckVhY2guY2FsbCh0LGZ1bmN0aW9uKGUpe1tdLmZvckVhY2guY2FsbChlLGZ1bmN0aW9uKGUpe0IoZS5pbWFnZUVsZW1lbnQsXCJjbGlja1wiLGUuZXZlbnRIYW5kbGVyKX0pLE89PT1lJiYoTz1bXSl9KSxkZWxldGUgV1tlXX19ZnVuY3Rpb24gaSgpe3JldHVybihTPVQoXCJiYWd1ZXR0ZUJveC1vdmVybGF5XCIpKT8oUD1UKFwiYmFndWV0dGVCb3gtc2xpZGVyXCIpLEY9VChcInByZXZpb3VzLWJ1dHRvblwiKSxIPVQoXCJuZXh0LWJ1dHRvblwiKSx2b2lkKEw9VChcImNsb3NlLWJ1dHRvblwiKSkpOihTPU4oXCJkaXZcIiksUy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkaWFsb2dcIiksUy5pZD1cImJhZ3VldHRlQm94LW92ZXJsYXlcIixkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoUyksUD1OKFwiZGl2XCIpLFAuaWQ9XCJiYWd1ZXR0ZUJveC1zbGlkZXJcIixTLmFwcGVuZENoaWxkKFApLEY9TihcImJ1dHRvblwiKSxGLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxGLmlkPVwicHJldmlvdXMtYnV0dG9uXCIsRi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJQcmV2aW91c1wiKSxGLmlubmVySFRNTD1ELnN2Zz9qOlwiJmx0O1wiLFMuYXBwZW5kQ2hpbGQoRiksSD1OKFwiYnV0dG9uXCIpLEguc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLEguaWQ9XCJuZXh0LWJ1dHRvblwiLEguc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiTmV4dFwiKSxILmlubmVySFRNTD1ELnN2Zz9NOlwiJmd0O1wiLFMuYXBwZW5kQ2hpbGQoSCksTD1OKFwiYnV0dG9uXCIpLEwuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLEwuaWQ9XCJjbG9zZS1idXR0b25cIixMLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIkNsb3NlXCIpLEwuaW5uZXJIVE1MPUQuc3ZnP1I6XCImdGltZXNcIixTLmFwcGVuZENoaWxkKEwpLEYuY2xhc3NOYW1lPUguY2xhc3NOYW1lPUwuY2xhc3NOYW1lPVwiYmFndWV0dGVCb3gtYnV0dG9uXCIsdm9pZCByKCkpfWZ1bmN0aW9uIGEoZSl7c3dpdGNoKGUua2V5Q29kZSl7Y2FzZSAzNzp2KCk7YnJlYWs7Y2FzZSAzOTpoKCk7YnJlYWs7Y2FzZSAyNzpwKCl9fWZ1bmN0aW9uIHIoKXtFKFMsXCJjbGlja1wiLEspLEUoRixcImNsaWNrXCIsUSksRShILFwiY2xpY2tcIixaKSxFKEwsXCJjbGlja1wiLCQpLEUoUyxcInRvdWNoc3RhcnRcIixfKSxFKFMsXCJ0b3VjaG1vdmVcIixlZSksRShTLFwidG91Y2hlbmRcIix0ZSksRShkb2N1bWVudCxcImZvY3VzXCIsbmUsITApfWZ1bmN0aW9uIGwoKXtCKFMsXCJjbGlja1wiLEspLEIoRixcImNsaWNrXCIsUSksQihILFwiY2xpY2tcIixaKSxCKEwsXCJjbGlja1wiLCQpLEIoUyxcInRvdWNoc3RhcnRcIixfKSxCKFMsXCJ0b3VjaG1vdmVcIixlZSksQihTLFwidG91Y2hlbmRcIix0ZSksQihkb2N1bWVudCxcImZvY3VzXCIsbmUsITApfWZ1bmN0aW9uIHUoZSx0KXtpZihPIT09ZSl7Zm9yKE89ZSxzKHQpO1AuZmlyc3RDaGlsZDspUC5yZW1vdmVDaGlsZChQLmZpcnN0Q2hpbGQpO0cubGVuZ3RoPTA7Zm9yKHZhciBuLG89W10saT1bXSxhPTA7YTxlLmxlbmd0aDthKyspbj1OKFwiZGl2XCIpLG4uY2xhc3NOYW1lPVwiZnVsbC1pbWFnZVwiLG4uaWQ9XCJiYWd1ZXR0ZS1pbWctXCIrYSxHLnB1c2gobiksby5wdXNoKFwiYmFndWV0dGVCb3gtZmlndXJlLVwiK2EpLGkucHVzaChcImJhZ3VldHRlQm94LWZpZ2NhcHRpb24tXCIrYSksUC5hcHBlbmRDaGlsZChHW2FdKTtTLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLG8uam9pbihcIiBcIikpLFMuc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiLGkuam9pbihcIiBcIikpfX1mdW5jdGlvbiBzKGUpe2V8fChlPXt9KTtmb3IodmFyIHQgaW4geilZW3RdPXpbdF0sXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGVbdF0mJihZW3RdPWVbdF0pO1Auc3R5bGUudHJhbnNpdGlvbj1QLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJmYWRlSW5cIj09PVkuYW5pbWF0aW9uP1wib3BhY2l0eSAuNHMgZWFzZVwiOlwic2xpZGVJblwiPT09WS5hbmltYXRpb24/XCJcIjpcIm5vbmVcIixcImF1dG9cIj09PVkuYnV0dG9ucyYmKFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fDE9PT1PLmxlbmd0aCkmJihZLmJ1dHRvbnM9ITEpLEYuc3R5bGUuZGlzcGxheT1ILnN0eWxlLmRpc3BsYXk9WS5idXR0b25zP1wiXCI6XCJub25lXCI7dHJ5e1Muc3R5bGUuYmFja2dyb3VuZENvbG9yPVkub3ZlcmxheUJhY2tncm91bmRDb2xvcn1jYXRjaChuKXt9fWZ1bmN0aW9uIGMoZSl7WS5ub1Njcm9sbGJhcnMmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPVwiaGlkZGVuXCIsZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1k9XCJzY3JvbGxcIiksXCJibG9ja1wiIT09Uy5zdHlsZS5kaXNwbGF5JiYoRShkb2N1bWVudCxcImtleWRvd25cIixhKSxYPWUsYihYLGZ1bmN0aW9uKCl7eChYKSxDKFgpfSkseSgpLFMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsWS5mdWxsU2NyZWVuJiZmKCksc2V0VGltZW91dChmdW5jdGlvbigpe1MuY2xhc3NOYW1lPVwidmlzaWJsZVwiLFkuYWZ0ZXJTaG93JiZZLmFmdGVyU2hvdygpfSw1MCksWS5vbkNoYW5nZSYmWS5vbkNoYW5nZShYLEcubGVuZ3RoKSxKPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsZCgpKX1mdW5jdGlvbiBkKCl7WS5idXR0b25zP0YuZm9jdXMoKTpMLmZvY3VzKCl9ZnVuY3Rpb24gZigpe1MucmVxdWVzdEZ1bGxzY3JlZW4/Uy5yZXF1ZXN0RnVsbHNjcmVlbigpOlMud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4/Uy53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOlMubW96UmVxdWVzdEZ1bGxTY3JlZW4mJlMubW96UmVxdWVzdEZ1bGxTY3JlZW4oKX1mdW5jdGlvbiBnKCl7ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4/ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTpkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuP2RvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTpkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbiYmZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKX1mdW5jdGlvbiBwKCl7WS5ub1Njcm9sbGJhcnMmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wiLGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wiKSxcIm5vbmVcIiE9PVMuc3R5bGUuZGlzcGxheSYmKEIoZG9jdW1lbnQsXCJrZXlkb3duXCIsYSksUy5jbGFzc05hbWU9XCJcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Uy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGcoKSxZLmFmdGVySGlkZSYmWS5hZnRlckhpZGUoKX0sNTAwKSxKLmZvY3VzKCkpfWZ1bmN0aW9uIGIoZSx0KXt2YXIgbj1HW2VdO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBuKXtpZihuLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdKXJldHVybiB2b2lkKHQmJnQoKSk7dmFyIG89T1tlXS5pbWFnZUVsZW1lbnQsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBZLmNhcHRpb25zP1kuY2FwdGlvbnMuY2FsbChPLG8pOm8uZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXB0aW9uXCIpfHxvLnRpdGxlLGE9bShvKSxyPU4oXCJmaWd1cmVcIiksbD1OKFwiaW1nXCIpLHU9TihcImZpZ2NhcHRpb25cIik7ci5pZD1cImJhZ3VldHRlQm94LWZpZ3VyZS1cIitlLHUuaWQ9XCJiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLVwiK2Usbi5hcHBlbmRDaGlsZChyKSxyLmlubmVySFRNTD0nPGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LXNwaW5uZXJcIj48ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTFcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTJcIj48L2Rpdj48L2Rpdj4nLGwub25sb2FkPWZ1bmN0aW9uKCl7dmFyIG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWd1ZXR0ZS1pbWctXCIrZStcIiAuYmFndWV0dGVCb3gtc3Bpbm5lclwiKTtyLnJlbW92ZUNoaWxkKG4pLCFZLmFzeW5jJiZ0JiZ0KCl9LGwuc2V0QXR0cmlidXRlKFwic3JjXCIsYSksWS50aXRsZVRhZyYmaSYmKGwudGl0bGU9aSksci5hcHBlbmRDaGlsZChsKSxZLmNhcHRpb25zJiZpJiYodS5pbm5lckhUTUw9aSxyLmFwcGVuZENoaWxkKHUpKSxZLmFzeW5jJiZ0JiZ0KCl9fWZ1bmN0aW9uIG0oZSl7dmFyIHQ9ZS5ocmVmO2lmKGUuZGF0YXNldCl7dmFyIG49W107Zm9yKHZhciBvIGluIGUuZGF0YXNldClcImF0LVwiIT09by5zdWJzdHJpbmcoMCwzKXx8aXNOYU4oby5zdWJzdHJpbmcoMykpfHwobltvLnJlcGxhY2UoXCJhdC1cIixcIlwiKV09ZS5kYXRhc2V0W29dKTtmb3IodmFyIGk9T2JqZWN0LmtleXMobikuc29ydChmdW5jdGlvbihlLHQpe3JldHVybiBwYXJzZUludChlLDEwKTxwYXJzZUludCh0LDEwKT8tMToxfSksYT13aW5kb3cuaW5uZXJXaWR0aCp3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxyPTA7cjxpLmxlbmd0aC0xJiZpW3JdPGE7KXIrKzt0PW5baVtyXV18fHR9cmV0dXJuIHR9ZnVuY3Rpb24gaCgpe3ZhciBlO3JldHVybiBYPD1HLmxlbmd0aC0yPyhYKysseSgpLHgoWCksZT0hMCk6WS5hbmltYXRpb24mJihQLmNsYXNzTmFtZT1cImJvdW5jZS1mcm9tLXJpZ2h0XCIsc2V0VGltZW91dChmdW5jdGlvbigpe1AuY2xhc3NOYW1lPVwiXCJ9LDQwMCksZT0hMSksWS5vbkNoYW5nZSYmWS5vbkNoYW5nZShYLEcubGVuZ3RoKSxlfWZ1bmN0aW9uIHYoKXt2YXIgZTtyZXR1cm4gWD49MT8oWC0tLHkoKSxDKFgpLGU9ITApOlkuYW5pbWF0aW9uJiYoUC5jbGFzc05hbWU9XCJib3VuY2UtZnJvbS1sZWZ0XCIsc2V0VGltZW91dChmdW5jdGlvbigpe1AuY2xhc3NOYW1lPVwiXCJ9LDQwMCksZT0hMSksWS5vbkNoYW5nZSYmWS5vbkNoYW5nZShYLEcubGVuZ3RoKSxlfWZ1bmN0aW9uIHkoKXt2YXIgZT0xMDAqLVgrXCIlXCI7XCJmYWRlSW5cIj09PVkuYW5pbWF0aW9uPyhQLnN0eWxlLm9wYWNpdHk9MCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7RC50cmFuc2Zvcm1zP1Auc3R5bGUudHJhbnNmb3JtPVAuc3R5bGUud2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIrZStcIiwwLDApXCI6UC5zdHlsZS5sZWZ0PWUsUC5zdHlsZS5vcGFjaXR5PTF9LDQwMCkpOkQudHJhbnNmb3Jtcz9QLnN0eWxlLnRyYW5zZm9ybT1QLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK2UrXCIsMCwwKVwiOlAuc3R5bGUubGVmdD1lfWZ1bmN0aW9uIGsoKXt2YXIgZT1OKFwiZGl2XCIpO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnN0eWxlLnBlcnNwZWN0aXZlfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5zdHlsZS53ZWJraXRQZXJzcGVjdGl2ZX1mdW5jdGlvbiB3KCl7dmFyIGU9TihcImRpdlwiKTtyZXR1cm4gZS5pbm5lckhUTUw9XCI8c3ZnLz5cIixcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT0oZS5maXJzdENoaWxkJiZlLmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKX1mdW5jdGlvbiB4KGUpe2UtWD49WS5wcmVsb2FkfHxiKGUrMSxmdW5jdGlvbigpe3goZSsxKX0pfWZ1bmN0aW9uIEMoZSl7WC1lPj1ZLnByZWxvYWR8fGIoZS0xLGZ1bmN0aW9uKCl7QyhlLTEpfSl9ZnVuY3Rpb24gRShlLHQsbixvKXtlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKHQsbixvKTplLmF0dGFjaEV2ZW50KFwib25cIit0LG4pfWZ1bmN0aW9uIEIoZSx0LG4sbyl7ZS5yZW1vdmVFdmVudExpc3RlbmVyP2UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4sbyk6ZS5kZXRhY2hFdmVudChcIm9uXCIrdCxuKX1mdW5jdGlvbiBUKGUpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKX1mdW5jdGlvbiBOKGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpfWZ1bmN0aW9uIEEoKXtsKCksbigpLEIoZG9jdW1lbnQsXCJrZXlkb3duXCIsYSksZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFndWV0dGVCb3gtb3ZlcmxheVwiKSksVz17fSxPPVtdLFg9MH12YXIgUyxQLEYsSCxMLEkscSxqPSc8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI2MFwiPjxwb2x5bGluZSBwb2ludHM9XCIzMCAxMCAxMCAzMCAzMCA1MFwiIHN0cm9rZT1cInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiIHN0cm9rZS13aWR0aD1cIjRcInN0cm9rZS1saW5lY2FwPVwiYnV0dFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxNPSc8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI2MFwiPjxwb2x5bGluZSBwb2ludHM9XCIxNCAxMCAzNCAzMCAxNCA1MFwiIHN0cm9rZT1cInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiIHN0cm9rZS13aWR0aD1cIjRcInN0cm9rZS1saW5lY2FwPVwiYnV0dFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxSPSc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPjxnIHN0cm9rZT1cInJnYigxNjAsMTYwLDE2MClcIiBzdHJva2Utd2lkdGg9XCI0XCI+PGxpbmUgeDE9XCI1XCIgeTE9XCI1XCIgeDI9XCIyNVwiIHkyPVwiMjVcIi8+PGxpbmUgeDE9XCI1XCIgeTE9XCIyNVwiIHgyPVwiMjVcIiB5Mj1cIjVcIi8+PC9nPjwvc3ZnPicsWT17fSx6PXtjYXB0aW9uczohMCxmdWxsU2NyZWVuOiExLG5vU2Nyb2xsYmFyczohMSx0aXRsZVRhZzohMSxidXR0b25zOlwiYXV0b1wiLGFzeW5jOiExLHByZWxvYWQ6MixhbmltYXRpb246XCJzbGlkZUluXCIsYWZ0ZXJTaG93Om51bGwsYWZ0ZXJIaWRlOm51bGwsb25DaGFuZ2U6bnVsbCxvdmVybGF5QmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwuOClcIn0sRD17fSxPPVtdLFg9MCxWPSExLFU9Ly4rXFwuKGdpZnxqcGU/Z3xwbmd8d2VicCkvaSxXPXt9LEc9W10sSj1udWxsLEs9ZnVuY3Rpb24oZSl7LTEhPT1lLnRhcmdldC5pZC5pbmRleE9mKFwiYmFndWV0dGUtaW1nXCIpJiZwKCl9LFE9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCx2KCl9LFo9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxoKCl9LCQ9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxwKCl9LF89ZnVuY3Rpb24oZSl7ST1lLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYLHE9ZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWX0sZWU9ZnVuY3Rpb24oZSl7aWYoIVYpe2UucHJldmVudERlZmF1bHQ/ZS5wcmV2ZW50RGVmYXVsdCgpOmUucmV0dXJuVmFsdWU9ITE7dmFyIHQ9ZS50b3VjaGVzWzBdfHxlLmNoYW5nZWRUb3VjaGVzWzBdO3QucGFnZVgtST40MD8oVj0hMCx2KCkpOnQucGFnZVgtSTwtNDA/KFY9ITAsaCgpKTpxLXQucGFnZVk+MTAwJiZwKCl9fSx0ZT1mdW5jdGlvbigpe1Y9ITF9LG5lPWZ1bmN0aW9uKGUpe1wiYmxvY2tcIiE9PVMuc3R5bGUuZGlzcGxheXx8Uy5jb250YWlucyhlLnRhcmdldCl8fChlLnN0b3BQcm9wYWdhdGlvbigpLGQoKSl9O3JldHVybltdLmZvckVhY2h8fChBcnJheS5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dGhpcy5sZW5ndGg7bisrKWUuY2FsbCh0LHRoaXNbbl0sbix0aGlzKX0pLFtdLmZpbHRlcnx8KEFycmF5LnByb3RvdHlwZS5maWx0ZXI9ZnVuY3Rpb24oZSx0LG4sbyxpKXtmb3Iobj10aGlzLG89W10saT0wO2k8bi5sZW5ndGg7aSsrKWUuY2FsbCh0LG5baV0saSxuKSYmby5wdXNoKG5baV0pO3JldHVybiBvfSkse3J1bjplLGRlc3Ryb3k6QSxzaG93TmV4dDpoLHNob3dQcmV2aW91czp2fX0pOyIsIi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9qYWtlYXJjaGliYWxkL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIDMuMi4xXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNNYXliZVRoZW5hYmxlKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheSA9IGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXk7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPSAwO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm47XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuXSA9IGNhbGxiYWNrO1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2xpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKyAxXSA9IGFyZztcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKz0gMjtcbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID09PSAyKSB7XG4gICAgICAgIC8vIElmIGxlbiBpcyAyLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAgICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAgICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgICAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcChhc2FwRm4pIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwID0gYXNhcEZuO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgfHwge307XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzTm9kZSA9IHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXG4gICAgLy8gdGVzdCBmb3Igd2ViIHdvcmtlciBidXQgbm90IGluIElFMTBcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIGltcG9ydFNjcmlwdHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgLy8gbm9kZVxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VOZXh0VGljaygpIHtcbiAgICAgIC8vIG5vZGUgdmVyc2lvbiAwLjEwLnggZGlzcGxheXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdoZW4gbmV4dFRpY2sgaXMgdXNlZCByZWN1cnNpdmVseVxuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvd2hlbi9pc3N1ZXMvNDEwIGZvciBkZXRhaWxzXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2sobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdmVydHhcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlVmVydHhUaW1lcigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dChsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbm9kZS5kYXRhID0gKGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gd2ViIHdvcmtlclxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCwgMSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuOyBpKz0yKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpXTtcbiAgICAgICAgdmFyIGFyZyA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpKzFdO1xuXG4gICAgICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaSsxXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJGF0dGVtcHRWZXJ0eCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByID0gcmVxdWlyZTtcbiAgICAgICAgdmFyIHZlcnR4ID0gcigndmVydHgnKTtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlVmVydHhUaW1lcigpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaDtcbiAgICAvLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNOb2RlKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VOZXh0VGljaygpO1xuICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhdHRlbXB0VmVydHgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdGhlbiQkdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXM7XG5cbiAgICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICBpZiAoY2hpbGRbbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZShjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbc3RhdGUgLSAxXTtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCBwYXJlbnQuX3Jlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkdGhlbiQkdGhlbjtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRyZXNvbHZlKG9iamVjdCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJHJlc29sdmU7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTYpO1xuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCgpIHt9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAgID0gdm9pZCAwO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQgPSAxO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCAgPSAyO1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SID0gbmV3IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzZWxmRnVsZmlsbG1lbnQoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKHByb21pc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICAgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gICAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbikge1xuICAgICAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IgJiZcbiAgICAgICAgICB0aGVuID09PSBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCAmJlxuICAgICAgICAgIGNvbnN0cnVjdG9yLnJlc29sdmUgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhlbiA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKHRoZW4pKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHNlbGZGdWxmaWxsbWVudCgpKTtcbiAgICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKHZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQ7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaCwgcHJvbWlzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIGxlbmd0aCA9IHN1YnNjcmliZXJzLmxlbmd0aDtcblxuICAgICAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRF0gID0gb25SZWplY3Rpb247XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoLCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSkge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IgPSBuZXcgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgICAgICB2YWx1ZSwgZXJyb3IsIHN1Y2NlZWRlZCwgZmFpbGVkO1xuXG4gICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgdmFsdWUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgZXJyb3IgPSB2YWx1ZS5lcnJvcjtcbiAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGV0YWlsO1xuICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgICAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKXtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpZCA9IDA7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbmV4dElkKCkge1xuICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbWFrZVByb21pc2UocHJvbWlzZSkge1xuICAgICAgcHJvbWlzZVtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkKys7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgIHByb21pc2UuX3N1YnNjcmliZXJzID0gW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRhbGwoZW50cmllcykge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkZGVmYXVsdCh0aGlzLCBlbnRyaWVzKS5wcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRhbGw7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZShlbnRyaWVzKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKCFsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkoZW50cmllcykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJHJhY2U7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3QocmVhc29uKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkcmVqZWN0O1xuXG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNOZXcoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlO1xuICAgIC8qKlxuICAgICAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICAgICAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgICAgIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuICAgICAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIFRlcm1pbm9sb2d5XG4gICAgICAtLS0tLS0tLS0tLVxuXG4gICAgICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuICAgICAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAgICAgLSBgdmFsdWVgIGlzIGFueSBsZWdhbCBKYXZhU2NyaXB0IHZhbHVlIChpbmNsdWRpbmcgdW5kZWZpbmVkLCBhIHRoZW5hYmxlLCBvciBhIHByb21pc2UpLlxuICAgICAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG4gICAgICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gICAgICAtIGBzZXR0bGVkYCB0aGUgZmluYWwgcmVzdGluZyBzdGF0ZSBvZiBhIHByb21pc2UsIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cblxuICAgICAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG4gICAgICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICAgICAgc3RhdGUuICBQcm9taXNlcyB0aGF0IGFyZSByZWplY3RlZCBoYXZlIGEgcmVqZWN0aW9uIHJlYXNvbiBhbmQgYXJlIGluIHRoZVxuICAgICAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cbiAgICAgIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICAgICAgcHJvbWlzZSwgdGhlbiB0aGUgb3JpZ2luYWwgcHJvbWlzZSdzIHNldHRsZWQgc3RhdGUgd2lsbCBtYXRjaCB0aGUgdmFsdWUnc1xuICAgICAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG4gICAgICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gICAgICBpdHNlbGYgZnVsZmlsbC5cblxuXG4gICAgICBCYXNpYyBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBgYGBqc1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gb24gc3VjY2Vzc1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcblxuICAgICAgICAvLyBvbiBmYWlsdXJlXG4gICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS0tLS1cblxuICAgICAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICAgICAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBnZXRKU09OKHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG4gICAgICBgYGBqc1xuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRKU09OKCcvcG9zdHMnKSxcbiAgICAgICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgICAgIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcbiAgICAgICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuICAgICAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBjbGFzcyBQcm9taXNlXG4gICAgICBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlclxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZShyZXNvbHZlcikge1xuICAgICAgdGhpc1tsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5leHRJZCgpO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCAhPT0gcmVzb2x2ZXIpIHtcbiAgICAgICAgdHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nICYmIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCk7XG4gICAgICAgIHRoaXMgaW5zdGFuY2VvZiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZSA/IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKSA6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLmFsbCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yYWNlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZXNvbHZlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZWplY3QgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX3NldFNjaGVkdWxlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXI7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX3NldEFzYXAgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fYXNhcCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwO1xuXG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucHJvdG90eXBlID0ge1xuICAgICAgY29uc3RydWN0b3I6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLFxuXG4gICAgLyoqXG4gICAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gICAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQ2hhaW5pbmdcbiAgICAgIC0tLS0tLS0tXG5cbiAgICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gICAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gICAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gdXNlci5uYW1lO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICAgICAgfSk7XG5cbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgICAgIH0pO1xuICAgICAgYGBgXG4gICAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBc3NpbWlsYXRpb25cbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICAgICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICAgICAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgICAgIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgU2ltcGxlIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgYXV0aG9yLCBib29rcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG5cbiAgICAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcblxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuXG4gICAgICB9XG5cbiAgICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZEF1dGhvcigpLlxuICAgICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICAgICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAgICAgLy8gZm91bmQgYm9va3NcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIHRoZW5cbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICB0aGVuOiBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCxcblxuICAgIC8qKlxuICAgICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHN5bmNocm9ub3VzXG4gICAgICB0cnkge1xuICAgICAgICBmaW5kQXV0aG9yKCk7XG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfVxuXG4gICAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgY2F0Y2hcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCkge1xuICAgICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICBpZiAoIXRoaXMucHJvbWlzZVtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZSh0aGlzLnByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5KGlucHV0KSkge1xuICAgICAgICB0aGlzLl9pbnB1dCAgICAgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5sZW5ndGggICAgID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgdGhpcy5fZW51bWVyYXRlKCk7XG4gICAgICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QodGhpcy5wcm9taXNlLCBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkdmFsaWRhdGlvbkVycm9yKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCR2YWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxlbmd0aCAgPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBpbnB1dCAgID0gdGhpcy5faW5wdXQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyB0aGlzLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fZWFjaEVudHJ5KGlucHV0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbihlbnRyeSwgaSkge1xuICAgICAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICAgICAgdmFyIHJlc29sdmUgPSBjLnJlc29sdmU7XG5cbiAgICAgIGlmIChyZXNvbHZlID09PSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0KSB7XG4gICAgICAgIHZhciB0aGVuID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZ2V0VGhlbihlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0ICYmXG4gICAgICAgICAgICBlbnRyeS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IGVudHJ5O1xuICAgICAgICB9IGVsc2UgaWYgKGMgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0KSB7XG4gICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgYyhsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIGVudHJ5LCB0aGVuKTtcbiAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBjKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZShlbnRyeSk7IH0pLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHJlc29sdmUoZW50cnkpLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbihzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24ocHJvbWlzZSwgaSkge1xuICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVELCBpLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJHBvbHlmaWxsKCkge1xuICAgICAgdmFyIGxvY2FsO1xuXG4gICAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBsb2NhbCA9IGdsb2JhbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbG9jYWwgPSBzZWxmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIFAgPSBsb2NhbC5Qcm9taXNlO1xuXG4gICAgICBpZiAoUCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUC5yZXNvbHZlKCkpID09PSAnW29iamVjdCBQcm9taXNlXScgJiYgIVAuY2FzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvY2FsLlByb21pc2UgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdDtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkcG9seWZpbGw7XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZSA9IHtcbiAgICAgICdQcm9taXNlJzogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQsXG4gICAgICAncG9seWZpbGwnOiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHRcbiAgICB9O1xuXG4gICAgLyogZ2xvYmFsIGRlZmluZTp0cnVlIG1vZHVsZTp0cnVlIHdpbmRvdzogdHJ1ZSAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlWydleHBvcnRzJ10pIHtcbiAgICAgIG1vZHVsZVsnZXhwb3J0cyddID0gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpc1snRVM2UHJvbWlzZSddID0gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQoKTtcbn0pLmNhbGwodGhpcyk7XG5cbiIsIi8qISBsb2FkSlM6IGxvYWQgYSBKUyBmaWxlIGFzeW5jaHJvbm91c2x5LiBbY10yMDE0IEBzY290dGplaGwsIEZpbGFtZW50IEdyb3VwLCBJbmMuIChCYXNlZCBvbiBodHRwOi8vZ29vLmdsL1JFUUdRIGJ5IFBhdWwgSXJpc2gpLiBMaWNlbnNlZCBNSVQgKi9cbihmdW5jdGlvbiggdyApe1xuXHR2YXIgbG9hZEpTID0gZnVuY3Rpb24oIHNyYywgY2IgKXtcblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHR2YXIgcmVmID0gdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJzY3JpcHRcIiApWyAwIF07XG5cdFx0dmFyIHNjcmlwdCA9IHcuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzY3JpcHRcIiApO1xuXHRcdHNjcmlwdC5zcmMgPSBzcmM7XG5cdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblx0XHRyZWYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIHNjcmlwdCwgcmVmICk7XG5cdFx0aWYgKGNiICYmIHR5cGVvZihjYikgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0c2NyaXB0Lm9ubG9hZCA9IGNiO1xuXHRcdH1cblx0XHRyZXR1cm4gc2NyaXB0O1xuXHR9O1xuXHQvLyBjb21tb25qc1xuXHRpZiggdHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdG1vZHVsZS5leHBvcnRzID0gbG9hZEpTO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHcubG9hZEpTID0gbG9hZEpTO1xuXHR9XG59KCB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyApKTtcbiIsIihmdW5jdGlvbigpe3ZhciBrPSEhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcjtmdW5jdGlvbiBsKGEsYil7az9hLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixiLCExKTphLmF0dGFjaEV2ZW50KFwic2Nyb2xsXCIsYil9ZnVuY3Rpb24gdihhKXtkb2N1bWVudC5ib2R5P2EoKTprP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYSk6ZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbigpe1wiaW50ZXJhY3RpdmVcIiE9ZG9jdW1lbnQucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT1kb2N1bWVudC5yZWFkeVN0YXRlfHxhKCl9KX07ZnVuY3Rpb24gdyhhKXt0aGlzLmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmEuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dGhpcy5hLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTt0aGlzLmI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5jPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5nPS0xO3RoaXMuYi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5jLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjtcbnRoaXMuZi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5oLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDAlO2hlaWdodDoyMDAlO2ZvbnQtc2l6ZToxNnB4O21heC13aWR0aDpub25lO1wiO3RoaXMuYi5hcHBlbmRDaGlsZCh0aGlzLmgpO3RoaXMuYy5hcHBlbmRDaGlsZCh0aGlzLmYpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmIpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmMpfVxuZnVuY3Rpb24geShhLGIpe2EuYS5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7bWluLXdpZHRoOjIwcHg7bWluLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO21hcmdpbjowO3BhZGRpbmc6MDt0b3A6LTk5OXB4O2xlZnQ6LTk5OXB4O3doaXRlLXNwYWNlOm5vd3JhcDtmb250OlwiK2IrXCI7XCJ9ZnVuY3Rpb24geihhKXt2YXIgYj1hLmEub2Zmc2V0V2lkdGgsYz1iKzEwMDthLmYuc3R5bGUud2lkdGg9YytcInB4XCI7YS5jLnNjcm9sbExlZnQ9YzthLmIuc2Nyb2xsTGVmdD1hLmIuc2Nyb2xsV2lkdGgrMTAwO3JldHVybiBhLmchPT1iPyhhLmc9YiwhMCk6ITF9ZnVuY3Rpb24gQShhLGIpe2Z1bmN0aW9uIGMoKXt2YXIgYT1tO3ooYSkmJm51bGwhPT1hLmEucGFyZW50Tm9kZSYmYihhLmcpfXZhciBtPWE7bChhLmIsYyk7bChhLmMsYyk7eihhKX07ZnVuY3Rpb24gQihhLGIpe3ZhciBjPWJ8fHt9O3RoaXMuZmFtaWx5PWE7dGhpcy5zdHlsZT1jLnN0eWxlfHxcIm5vcm1hbFwiO3RoaXMud2VpZ2h0PWMud2VpZ2h0fHxcIm5vcm1hbFwiO3RoaXMuc3RyZXRjaD1jLnN0cmV0Y2h8fFwibm9ybWFsXCJ9dmFyIEM9bnVsbCxEPW51bGwsSD0hIXdpbmRvdy5Gb250RmFjZTtmdW5jdGlvbiBJKCl7aWYobnVsbD09PUQpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e2Euc3R5bGUuZm9udD1cImNvbmRlbnNlZCAxMDBweCBzYW5zLXNlcmlmXCJ9Y2F0Y2goYil7fUQ9XCJcIiE9PWEuc3R5bGUuZm9udH1yZXR1cm4gRH1mdW5jdGlvbiBKKGEsYil7cmV0dXJuW2Euc3R5bGUsYS53ZWlnaHQsSSgpP2Euc3RyZXRjaDpcIlwiLFwiMTAwcHhcIixiXS5qb2luKFwiIFwiKX1cbkIucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLG09YXx8XCJCRVNic3d5XCIseD1ifHwzRTMsRT0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtpZihIKXt2YXIgSz1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGUoKXsobmV3IERhdGUpLmdldFRpbWUoKS1FPj14P2IoKTpkb2N1bWVudC5mb250cy5sb2FkKEooYyxjLmZhbWlseSksbSkudGhlbihmdW5jdGlvbihjKXsxPD1jLmxlbmd0aD9hKCk6c2V0VGltZW91dChlLDI1KX0sZnVuY3Rpb24oKXtiKCl9KX1lKCl9KSxMPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYyl7c2V0VGltZW91dChjLHgpfSk7UHJvbWlzZS5yYWNlKFtMLEtdKS50aGVuKGZ1bmN0aW9uKCl7YShjKX0sZnVuY3Rpb24oKXtiKGMpfSl9ZWxzZSB2KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcSgpe3ZhciBiO2lmKGI9LTEhPWYmJi0xIT1nfHwtMSE9ZiYmLTEhPWh8fC0xIT1nJiYtMSE9XG5oKShiPWYhPWcmJmYhPWgmJmchPWgpfHwobnVsbD09PUMmJihiPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxDPSEhYiYmKDUzNj5wYXJzZUludChiWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYlsxXSwxMCkmJjExPj1wYXJzZUludChiWzJdLDEwKSkpLGI9QyYmKGY9PXImJmc9PXImJmg9PXJ8fGY9PXQmJmc9PXQmJmg9PXR8fGY9PXUmJmc9PXUmJmg9PXUpKSxiPSFiO2ImJihudWxsIT09ZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksY2xlYXJUaW1lb3V0KEcpLGEoYykpfWZ1bmN0aW9uIEYoKXtpZigobmV3IERhdGUpLmdldFRpbWUoKS1FPj14KW51bGwhPT1kLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxiKGMpO2Vsc2V7dmFyIGE9ZG9jdW1lbnQuaGlkZGVuO2lmKCEwPT09YXx8dm9pZCAwPT09YSlmPWUuYS5vZmZzZXRXaWR0aCxnPW4uYS5vZmZzZXRXaWR0aCxcbmg9cC5hLm9mZnNldFdpZHRoLHEoKTtHPXNldFRpbWVvdXQoRiw1MCl9fXZhciBlPW5ldyB3KG0pLG49bmV3IHcobSkscD1uZXcgdyhtKSxmPS0xLGc9LTEsaD0tMSxyPS0xLHQ9LTEsdT0tMSxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksRz0wO2QuZGlyPVwibHRyXCI7eShlLEooYyxcInNhbnMtc2VyaWZcIikpO3kobixKKGMsXCJzZXJpZlwiKSk7eShwLEooYyxcIm1vbm9zcGFjZVwiKSk7ZC5hcHBlbmRDaGlsZChlLmEpO2QuYXBwZW5kQ2hpbGQobi5hKTtkLmFwcGVuZENoaWxkKHAuYSk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTtyPWUuYS5vZmZzZXRXaWR0aDt0PW4uYS5vZmZzZXRXaWR0aDt1PXAuYS5vZmZzZXRXaWR0aDtGKCk7QShlLGZ1bmN0aW9uKGEpe2Y9YTtxKCl9KTt5KGUsSihjLCdcIicrYy5mYW1pbHkrJ1wiLHNhbnMtc2VyaWYnKSk7QShuLGZ1bmN0aW9uKGEpe2c9YTtxKCl9KTt5KG4sSihjLCdcIicrYy5mYW1pbHkrJ1wiLHNlcmlmJykpO0EocCxmdW5jdGlvbihhKXtoPVxuYTtxKCl9KTt5KHAsSihjLCdcIicrYy5mYW1pbHkrJ1wiLG1vbm9zcGFjZScpKX0pfSl9O3dpbmRvdy5Gb250RmFjZU9ic2VydmVyPUI7d2luZG93LkZvbnRGYWNlT2JzZXJ2ZXIucHJvdG90eXBlLmNoZWNrPXdpbmRvdy5Gb250RmFjZU9ic2VydmVyLnByb3RvdHlwZS5sb2FkPUIucHJvdG90eXBlLmxvYWQ7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz13aW5kb3cuRm9udEZhY2VPYnNlcnZlcik7fSgpKTtcbiIsIi8qISBwaWN0dXJlZmlsbCAtIHYzLjAuMiAtIDIwMTYtMDItMTJcbiAqIGh0dHBzOi8vc2NvdHRqZWhsLmdpdGh1Yi5pby9waWN0dXJlZmlsbC9cbiAqIENvcHlyaWdodCAoYykgMjAxNiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL2Jsb2IvbWFzdGVyL0F1dGhvcnMudHh0OyBMaWNlbnNlZCBNSVRcbiAqL1xuLyohIEdlY2tvLVBpY3R1cmUgLSB2MS4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL3RyZWUvMy4wL3NyYy9wbHVnaW5zL2dlY2tvLXBpY3R1cmVcbiAqIEZpcmVmb3gncyBlYXJseSBwaWN0dXJlIGltcGxlbWVudGF0aW9uIChwcmlvciB0byBGRjQxKSBpcyBzdGF0aWMgYW5kIGRvZXNcbiAqIG5vdCByZWFjdCB0byB2aWV3cG9ydCBjaGFuZ2VzLiBUaGlzIHRpbnkgbW9kdWxlIGZpeGVzIHRoaXMuXG4gKi9cbihmdW5jdGlvbih3aW5kb3cpIHtcblx0Lypqc2hpbnQgZXFudWxsOnRydWUgKi9cblx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuXHRpZiAoIHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgKCgvZWNrby8pLnRlc3QodWEpICYmIHVhLm1hdGNoKC9ydlxcOihcXGQrKS8pICYmIFJlZ0V4cC4kMSA8IDQ1KSApIHtcblx0XHRhZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aW1lcjtcblxuXHRcdFx0dmFyIGR1bW15U3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcblxuXHRcdFx0dmFyIGZpeFJlc3BpbWcgPSBmdW5jdGlvbihpbWcpIHtcblx0XHRcdFx0dmFyIHNvdXJjZSwgc2l6ZXM7XG5cdFx0XHRcdHZhciBwaWN0dXJlID0gaW1nLnBhcmVudE5vZGU7XG5cblx0XHRcdFx0aWYgKHBpY3R1cmUubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJQSUNUVVJFXCIpIHtcblx0XHRcdFx0XHRzb3VyY2UgPSBkdW1teVNyYy5jbG9uZU5vZGUoKTtcblxuXHRcdFx0XHRcdHBpY3R1cmUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgcGljdHVyZS5maXJzdEVsZW1lbnRDaGlsZCk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHBpY3R1cmUucmVtb3ZlQ2hpbGQoc291cmNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIGlmICghaW1nLl9wZkxhc3RTaXplIHx8IGltZy5vZmZzZXRXaWR0aCA+IGltZy5fcGZMYXN0U2l6ZSkge1xuXHRcdFx0XHRcdGltZy5fcGZMYXN0U2l6ZSA9IGltZy5vZmZzZXRXaWR0aDtcblx0XHRcdFx0XHRzaXplcyA9IGltZy5zaXplcztcblx0XHRcdFx0XHRpbWcuc2l6ZXMgKz0gXCIsMTAwdndcIjtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aW1nLnNpemVzID0gc2l6ZXM7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHZhciBmaW5kUGljdHVyZUltZ3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGk7XG5cdFx0XHRcdHZhciBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInBpY3R1cmUgPiBpbWcsIGltZ1tzcmNzZXRdW3NpemVzXVwiKTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmaXhSZXNwaW1nKGltZ3NbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0XHRcdHRpbWVyID0gc2V0VGltZW91dChmaW5kUGljdHVyZUltZ3MsIDk5KTtcblx0XHRcdH07XG5cdFx0XHR2YXIgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSAmJiBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpO1xuXHRcdFx0dmFyIGluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0b25SZXNpemUoKTtcblxuXHRcdFx0XHRpZiAobXEgJiYgbXEuYWRkTGlzdGVuZXIpIHtcblx0XHRcdFx0XHRtcS5hZGRMaXN0ZW5lcihvblJlc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGR1bW15U3JjLnNyY3NldCA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjtcblxuXHRcdFx0aWYgKC9eW2N8aV18ZCQvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSB8fCBcIlwiKSkge1xuXHRcdFx0XHRpbml0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9uUmVzaXplO1xuXHRcdH0pKCkpO1xuXHR9XG59KSh3aW5kb3cpO1xuXG4vKiEgUGljdHVyZWZpbGwgLSB2My4wLjJcbiAqIGh0dHA6Ly9zY290dGplaGwuZ2l0aHViLmlvL3BpY3R1cmVmaWxsXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0amVobC9waWN0dXJlZmlsbC9ibG9iL21hc3Rlci9BdXRob3JzLnR4dDtcbiAqICBMaWNlbnNlOiBNSVRcbiAqL1xuXG4oZnVuY3Rpb24oIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCApIHtcblx0Ly8gRW5hYmxlIHN0cmljdCBtb2RlXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdC8vIEhUTUwgc2hpbXx2IGl0IGZvciBvbGQgSUUgKElFOSB3aWxsIHN0aWxsIG5lZWQgdGhlIEhUTUwgdmlkZW8gdGFnIHdvcmthcm91bmQpXG5cdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwicGljdHVyZVwiICk7XG5cblx0dmFyIHdhcm4sIGVtaW5weCwgYWx3YXlzQ2hlY2tXRGVzY3JpcHRvciwgZXZhbElkO1xuXHQvLyBsb2NhbCBvYmplY3QgZm9yIG1ldGhvZCByZWZlcmVuY2VzIGFuZCB0ZXN0aW5nIGV4cG9zdXJlXG5cdHZhciBwZiA9IHt9O1xuXHR2YXIgaXNTdXBwb3J0VGVzdFJlYWR5ID0gZmFsc2U7XG5cdHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblx0dmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbWdcIiApO1xuXHR2YXIgZ2V0SW1nQXR0ciA9IGltYWdlLmdldEF0dHJpYnV0ZTtcblx0dmFyIHNldEltZ0F0dHIgPSBpbWFnZS5zZXRBdHRyaWJ1dGU7XG5cdHZhciByZW1vdmVJbWdBdHRyID0gaW1hZ2UucmVtb3ZlQXR0cmlidXRlO1xuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0dmFyIHR5cGVzID0ge307XG5cdHZhciBjZmcgPSB7XG5cdFx0Ly9yZXNvdXJjZSBzZWxlY3Rpb246XG5cdFx0YWxnb3JpdGhtOiBcIlwiXG5cdH07XG5cdHZhciBzcmNBdHRyID0gXCJkYXRhLXBmc3JjXCI7XG5cdHZhciBzcmNzZXRBdHRyID0gc3JjQXR0ciArIFwic2V0XCI7XG5cdC8vIHVhIHNuaWZmaW5nIGlzIGRvbmUgZm9yIHVuZGV0ZWN0YWJsZSBpbWcgbG9hZGluZyBmZWF0dXJlcyxcblx0Ly8gdG8gZG8gc29tZSBub24gY3J1Y2lhbCBwZXJmIG9wdGltaXphdGlvbnNcblx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0dmFyIHN1cHBvcnRBYm9ydCA9ICgvcmlkZW50LykudGVzdCh1YSkgfHwgKCgvZWNrby8pLnRlc3QodWEpICYmIHVhLm1hdGNoKC9ydlxcOihcXGQrKS8pICYmIFJlZ0V4cC4kMSA+IDM1ICk7XG5cdHZhciBjdXJTcmNQcm9wID0gXCJjdXJyZW50U3JjXCI7XG5cdHZhciByZWdXRGVzYyA9IC9cXHMrXFwrP1xcZCsoZVxcZCspP3cvO1xuXHR2YXIgcmVnU2l6ZSA9IC8oXFwoW14pXStcXCkpP1xccyooLispLztcblx0dmFyIHNldE9wdGlvbnMgPSB3aW5kb3cucGljdHVyZWZpbGxDRkc7XG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBwcm9wZXJ0eSBmb3IgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy9zcGVjcy9taXhlZGNvbnRlbnQvI3Jlc3RyaWN0cy1taXhlZC1jb250ZW50ICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqL1xuXHQvLyBiYXNlU3R5bGUgYWxzbyB1c2VkIGJ5IGdldEVtVmFsdWUgKGkuZS46IHdpZHRoOiAxZW0gaXMgaW1wb3J0YW50KVxuXHR2YXIgYmFzZVN0eWxlID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dmlzaWJpbGl0eTpoaWRkZW47ZGlzcGxheTpibG9jaztwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjFlbTt3aWR0aDoxZW07b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwcHgsIDBweCwgMHB4LCAwcHgpXCI7XG5cdHZhciBmc0NzcyA9IFwiZm9udC1zaXplOjEwMCUhaW1wb3J0YW50O1wiO1xuXHR2YXIgaXNWd0RpcnR5ID0gdHJ1ZTtcblxuXHR2YXIgY3NzQ2FjaGUgPSB7fTtcblx0dmFyIHNpemVMZW5ndGhDYWNoZSA9IHt9O1xuXHR2YXIgRFBSID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdHZhciB1bml0cyA9IHtcblx0XHRweDogMSxcblx0XHRcImluXCI6IDk2XG5cdH07XG5cdHZhciBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXHQvKipcblx0ICogYWxyZWFkeVJ1biBmbGFnIHVzZWQgZm9yIHNldE9wdGlvbnMuIGlzIGl0IHRydWUgc2V0T3B0aW9ucyB3aWxsIHJlZXZhbHVhdGVcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHR2YXIgYWxyZWFkeVJ1biA9IGZhbHNlO1xuXG5cdC8vIFJldXNhYmxlLCBub24tXCJnXCIgUmVnZXhlc1xuXG5cdC8vIChEb24ndCB1c2UgXFxzLCB0byBhdm9pZCBtYXRjaGluZyBub24tYnJlYWtpbmcgc3BhY2UuKVxuXHR2YXIgcmVnZXhMZWFkaW5nU3BhY2VzID0gL15bIFxcdFxcblxcclxcdTAwMGNdKy8sXG5cdCAgICByZWdleExlYWRpbmdDb21tYXNPclNwYWNlcyA9IC9eWywgXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4TGVhZGluZ05vdFNwYWNlcyA9IC9eW14gXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4VHJhaWxpbmdDb21tYXMgPSAvWyxdKyQvLFxuXHQgICAgcmVnZXhOb25OZWdhdGl2ZUludGVnZXIgPSAvXlxcZCskLyxcblxuXHQgICAgLy8gKCBQb3NpdGl2ZSBvciBuZWdhdGl2ZSBvciB1bnNpZ25lZCBpbnRlZ2VycyBvciBkZWNpbWFscywgd2l0aG91dCBvciB3aXRob3V0IGV4cG9uZW50cy5cblx0ICAgIC8vIE11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgZGlnaXQuXG5cdCAgICAvLyBBY2NvcmRpbmcgdG8gc3BlYyB0ZXN0cyBhbnkgZGVjaW1hbCBwb2ludCBtdXN0IGJlIGZvbGxvd2VkIGJ5IGEgZGlnaXQuXG5cdCAgICAvLyBObyBsZWFkaW5nIHBsdXMgc2lnbiBpcyBhbGxvd2VkLilcblx0ICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZnJhc3RydWN0dXJlLmh0bWwjdmFsaWQtZmxvYXRpbmctcG9pbnQtbnVtYmVyXG5cdCAgICByZWdleEZsb2F0aW5nUG9pbnQgPSAvXi0/KD86WzAtOV0rfFswLTldKlxcLlswLTldKykoPzpbZUVdWystXT9bMC05XSspPyQvO1xuXG5cdHZhciBvbiA9IGZ1bmN0aW9uKG9iaiwgZXZ0LCBmbiwgY2FwdHVyZSkge1xuXHRcdGlmICggb2JqLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRvYmouYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZuLCBjYXB0dXJlIHx8IGZhbHNlKTtcblx0XHR9IGVsc2UgaWYgKCBvYmouYXR0YWNoRXZlbnQgKSB7XG5cdFx0XHRvYmouYXR0YWNoRXZlbnQoIFwib25cIiArIGV2dCwgZm4pO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogc2ltcGxlIG1lbW9pemUgZnVuY3Rpb246XG5cdCAqL1xuXG5cdHZhciBtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgY2FjaGUgPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHRcdGlmICggIShpbnB1dCBpbiBjYWNoZSkgKSB7XG5cdFx0XHRcdGNhY2hlWyBpbnB1dCBdID0gZm4oaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhY2hlWyBpbnB1dCBdO1xuXHRcdH07XG5cdH07XG5cblx0Ly8gVVRJTElUWSBGVU5DVElPTlNcblxuXHQvLyBNYW51YWwgaXMgZmFzdGVyIHRoYW4gUmVnRXhcblx0Ly8gaHR0cDovL2pzcGVyZi5jb20vd2hpdGVzcGFjZS1jaGFyYWN0ZXIvNVxuXHRmdW5jdGlvbiBpc1NwYWNlKGMpIHtcblx0XHRyZXR1cm4gKGMgPT09IFwiXFx1MDAyMFwiIHx8IC8vIHNwYWNlXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMDlcIiB8fCAvLyBob3Jpem9udGFsIHRhYlxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBBXCIgfHwgLy8gbmV3IGxpbmVcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwQ1wiIHx8IC8vIGZvcm0gZmVlZFxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBEXCIpOyAgLy8gY2FycmlhZ2UgcmV0dXJuXG5cdH1cblxuXHQvKipcblx0ICogZ2V0cyBhIG1lZGlhcXVlcnkgYW5kIHJldHVybnMgYSBib29sZWFuIG9yIGdldHMgYSBjc3MgbGVuZ3RoIGFuZCByZXR1cm5zIGEgbnVtYmVyXG5cdCAqIEBwYXJhbSBjc3MgbWVkaWFxdWVyaWVzIG9yIGNzcyBsZW5ndGhcblx0ICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfVxuXHQgKlxuXHQgKiBiYXNlZCBvbjogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9kYjRmNzcwMDliMTU1ZjA4MzczOFxuXHQgKi9cblx0dmFyIGV2YWxDU1MgPSAoZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgcmVnTGVuZ3RoID0gL14oW1xcZFxcLl0rKShlbXx2d3xweCkkLztcblx0XHR2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMsIGluZGV4ID0gMCwgc3RyaW5nID0gYXJnc1swXTtcblx0XHRcdHdoaWxlICgrK2luZGV4IGluIGFyZ3MpIHtcblx0XHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoYXJnc1tpbmRleF0sIGFyZ3NbKytpbmRleF0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cmluZztcblx0XHR9O1xuXG5cdFx0dmFyIGJ1aWxkU3RyID0gbWVtb2l6ZShmdW5jdGlvbihjc3MpIHtcblxuXHRcdFx0cmV0dXJuIFwicmV0dXJuIFwiICsgcmVwbGFjZSgoY3NzIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdC8vIGludGVycHJldCBgYW5kYFxuXHRcdFx0XHQvXFxiYW5kXFxiL2csIFwiJiZcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYCxgXG5cdFx0XHRcdC8sL2csIFwifHxcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYG1pbi1gIGFzID49XG5cdFx0XHRcdC9taW4tKFthLXotXFxzXSspOi9nLCBcImUuJDE+PVwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgbWF4LWAgYXMgPD1cblx0XHRcdFx0L21heC0oW2Etei1cXHNdKyk6L2csIFwiZS4kMTw9XCIsXG5cblx0XHRcdFx0Ly9jYWxjIHZhbHVlXG5cdFx0XHRcdC9jYWxjKFteKV0rKS9nLCBcIigkMSlcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgY3NzIHZhbHVlc1xuXHRcdFx0XHQvKFxcZCtbXFwuXSpbXFxkXSopKFthLXpdKykvZywgXCIoJDEgKiBlLiQyKVwiLFxuXHRcdFx0XHQvL21ha2UgZXZhbCBsZXNzIGV2aWxcblx0XHRcdFx0L14oPyEoZS5bYS16XXxbMC05XFwuJj18PjxcXCtcXC1cXCpcXChcXClcXC9dKSkuKi9pZywgXCJcIlxuXHRcdFx0KSArIFwiO1wiO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGNzcywgbGVuZ3RoKSB7XG5cdFx0XHR2YXIgcGFyc2VkTGVuZ3RoO1xuXHRcdFx0aWYgKCEoY3NzIGluIGNzc0NhY2hlKSkge1xuXHRcdFx0XHRjc3NDYWNoZVtjc3NdID0gZmFsc2U7XG5cdFx0XHRcdGlmIChsZW5ndGggJiYgKHBhcnNlZExlbmd0aCA9IGNzcy5tYXRjaCggcmVnTGVuZ3RoICkpKSB7XG5cdFx0XHRcdFx0Y3NzQ2FjaGVbY3NzXSA9IHBhcnNlZExlbmd0aFsgMSBdICogdW5pdHNbcGFyc2VkTGVuZ3RoWyAyIF1dO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8qanNoaW50IGV2aWw6dHJ1ZSAqL1xuXHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdGNzc0NhY2hlW2Nzc10gPSBuZXcgRnVuY3Rpb24oXCJlXCIsIGJ1aWxkU3RyKGNzcykpKHVuaXRzKTtcblx0XHRcdFx0XHR9IGNhdGNoKGUpIHt9XG5cdFx0XHRcdFx0Lypqc2hpbnQgZXZpbDpmYWxzZSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3NzQ2FjaGVbY3NzXTtcblx0XHR9O1xuXHR9KSgpO1xuXG5cdHZhciBzZXRSZXNvbHV0aW9uID0gZnVuY3Rpb24oIGNhbmRpZGF0ZSwgc2l6ZXNhdHRyICkge1xuXHRcdGlmICggY2FuZGlkYXRlLncgKSB7IC8vIGggPSBtZWFucyBoZWlnaHQ6IHx8IGRlc2NyaXB0b3IudHlwZSA9PT0gJ2gnIGRvIG5vdCBoYW5kbGUgeWV0Li4uXG5cdFx0XHRjYW5kaWRhdGUuY1dpZHRoID0gcGYuY2FsY0xpc3RMZW5ndGgoIHNpemVzYXR0ciB8fCBcIjEwMHZ3XCIgKTtcblx0XHRcdGNhbmRpZGF0ZS5yZXMgPSBjYW5kaWRhdGUudyAvIGNhbmRpZGF0ZS5jV2lkdGggO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYW5kaWRhdGUucmVzID0gY2FuZGlkYXRlLmQ7XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSBvcHRcblx0ICovXG5cdHZhciBwaWN0dXJlZmlsbCA9IGZ1bmN0aW9uKCBvcHQgKSB7XG5cblx0XHRpZiAoIWlzU3VwcG9ydFRlc3RSZWFkeSkge3JldHVybjt9XG5cblx0XHR2YXIgZWxlbWVudHMsIGksIHBsZW47XG5cblx0XHR2YXIgb3B0aW9ucyA9IG9wdCB8fCB7fTtcblxuXHRcdGlmICggb3B0aW9ucy5lbGVtZW50cyAmJiBvcHRpb25zLmVsZW1lbnRzLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0aWYgKCBvcHRpb25zLmVsZW1lbnRzLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiSU1HXCIgKSB7XG5cdFx0XHRcdG9wdGlvbnMuZWxlbWVudHMgPSAgWyBvcHRpb25zLmVsZW1lbnRzIF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zLmNvbnRleHQgPSBvcHRpb25zLmVsZW1lbnRzO1xuXHRcdFx0XHRvcHRpb25zLmVsZW1lbnRzID0gIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZWxlbWVudHMgPSBvcHRpb25zLmVsZW1lbnRzIHx8IHBmLnFzYSggKG9wdGlvbnMuY29udGV4dCB8fCBkb2N1bWVudCksICggb3B0aW9ucy5yZWV2YWx1YXRlIHx8IG9wdGlvbnMucmVzZWxlY3QgKSA/IHBmLnNlbCA6IHBmLnNlbFNob3J0ICk7XG5cblx0XHRpZiAoIChwbGVuID0gZWxlbWVudHMubGVuZ3RoKSApIHtcblxuXHRcdFx0cGYuc2V0dXBSdW4oIG9wdGlvbnMgKTtcblx0XHRcdGFscmVhZHlSdW4gPSB0cnVlO1xuXG5cdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBsZW47IGkrKyApIHtcblx0XHRcdFx0cGYuZmlsbEltZyhlbGVtZW50c1sgaSBdLCBvcHRpb25zKTtcblx0XHRcdH1cblxuXHRcdFx0cGYudGVhcmRvd25SdW4oIG9wdGlvbnMgKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIG91dHB1dHMgYSB3YXJuaW5nIGZvciB0aGUgZGV2ZWxvcGVyXG5cdCAqIEBwYXJhbSB7bWVzc2FnZX1cblx0ICogQHR5cGUge0Z1bmN0aW9ufVxuXHQgKi9cblx0d2FybiA9ICggd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuICkgP1xuXHRcdGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuXHRcdFx0Y29uc29sZS53YXJuKCBtZXNzYWdlICk7XG5cdFx0fSA6XG5cdFx0bm9vcFxuXHQ7XG5cblx0aWYgKCAhKGN1clNyY1Byb3AgaW4gaW1hZ2UpICkge1xuXHRcdGN1clNyY1Byb3AgPSBcInNyY1wiO1xuXHR9XG5cblx0Ly8gQWRkIHN1cHBvcnQgZm9yIHN0YW5kYXJkIG1pbWUgdHlwZXMuXG5cdHR5cGVzWyBcImltYWdlL2pwZWdcIiBdID0gdHJ1ZTtcblx0dHlwZXNbIFwiaW1hZ2UvZ2lmXCIgXSA9IHRydWU7XG5cdHR5cGVzWyBcImltYWdlL3BuZ1wiIF0gPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIGRldGVjdFR5cGVTdXBwb3J0KCB0eXBlLCB0eXBlVXJpICkge1xuXHRcdC8vIGJhc2VkIG9uIE1vZGVybml6cidzIGxvc3NsZXNzIGltZy13ZWJwIHRlc3Rcblx0XHQvLyBub3RlOiBhc3luY2hyb25vdXNcblx0XHR2YXIgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG5cdFx0aW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHlwZXNbIHR5cGUgXSA9IGZhbHNlO1xuXHRcdFx0cGljdHVyZWZpbGwoKTtcblx0XHR9O1xuXHRcdGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHlwZXNbIHR5cGUgXSA9IGltYWdlLndpZHRoID09PSAxO1xuXHRcdFx0cGljdHVyZWZpbGwoKTtcblx0XHR9O1xuXHRcdGltYWdlLnNyYyA9IHR5cGVVcmk7XG5cdFx0cmV0dXJuIFwicGVuZGluZ1wiO1xuXHR9XG5cblx0Ly8gdGVzdCBzdmcgc3VwcG9ydFxuXHR0eXBlc1sgXCJpbWFnZS9zdmcreG1sXCIgXSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoIFwiaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNJbWFnZVwiLCBcIjEuMVwiICk7XG5cblx0LyoqXG5cdCAqIHVwZGF0ZXMgdGhlIGludGVybmFsIHZXIHByb3BlcnR5IHdpdGggdGhlIGN1cnJlbnQgdmlld3BvcnQgd2lkdGggaW4gcHhcblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZU1ldHJpY3MoKSB7XG5cblx0XHRpc1Z3RGlydHkgPSBmYWxzZTtcblx0XHREUFIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0XHRjc3NDYWNoZSA9IHt9O1xuXHRcdHNpemVMZW5ndGhDYWNoZSA9IHt9O1xuXG5cdFx0cGYuRFBSID0gRFBSIHx8IDE7XG5cblx0XHR1bml0cy53aWR0aCA9IE1hdGgubWF4KHdpbmRvdy5pbm5lcldpZHRoIHx8IDAsIGRvY0VsZW0uY2xpZW50V2lkdGgpO1xuXHRcdHVuaXRzLmhlaWdodCA9IE1hdGgubWF4KHdpbmRvdy5pbm5lckhlaWdodCB8fCAwLCBkb2NFbGVtLmNsaWVudEhlaWdodCk7XG5cblx0XHR1bml0cy52dyA9IHVuaXRzLndpZHRoIC8gMTAwO1xuXHRcdHVuaXRzLnZoID0gdW5pdHMuaGVpZ2h0IC8gMTAwO1xuXG5cdFx0ZXZhbElkID0gWyB1bml0cy5oZWlnaHQsIHVuaXRzLndpZHRoLCBEUFIgXS5qb2luKFwiLVwiKTtcblxuXHRcdHVuaXRzLmVtID0gcGYuZ2V0RW1WYWx1ZSgpO1xuXHRcdHVuaXRzLnJlbSA9IHVuaXRzLmVtO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hvb3NlTG93UmVzKCBsb3dlclZhbHVlLCBoaWdoZXJWYWx1ZSwgZHByVmFsdWUsIGlzQ2FjaGVkICkge1xuXHRcdHZhciBib251c0ZhY3RvciwgdG9vTXVjaCwgYm9udXMsIG1lYW5EZW5zaXR5O1xuXG5cdFx0Ly9leHBlcmltZW50YWxcblx0XHRpZiAoY2ZnLmFsZ29yaXRobSA9PT0gXCJzYXZlRGF0YVwiICl7XG5cdFx0XHRpZiAoIGxvd2VyVmFsdWUgPiAyLjcgKSB7XG5cdFx0XHRcdG1lYW5EZW5zaXR5ID0gZHByVmFsdWUgKyAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9vTXVjaCA9IGhpZ2hlclZhbHVlIC0gZHByVmFsdWU7XG5cdFx0XHRcdGJvbnVzRmFjdG9yID0gTWF0aC5wb3cobG93ZXJWYWx1ZSAtIDAuNiwgMS41KTtcblxuXHRcdFx0XHRib251cyA9IHRvb011Y2ggKiBib251c0ZhY3RvcjtcblxuXHRcdFx0XHRpZiAoaXNDYWNoZWQpIHtcblx0XHRcdFx0XHRib251cyArPSAwLjEgKiBib251c0ZhY3Rvcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lYW5EZW5zaXR5ID0gbG93ZXJWYWx1ZSArIGJvbnVzO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZWFuRGVuc2l0eSA9IChkcHJWYWx1ZSA+IDEpID9cblx0XHRcdFx0TWF0aC5zcXJ0KGxvd2VyVmFsdWUgKiBoaWdoZXJWYWx1ZSkgOlxuXHRcdFx0XHRsb3dlclZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZWFuRGVuc2l0eSA+IGRwclZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXBwbHlCZXN0Q2FuZGlkYXRlKCBpbWcgKSB7XG5cdFx0dmFyIHNyY1NldENhbmRpZGF0ZXM7XG5cdFx0dmFyIG1hdGNoaW5nU2V0ID0gcGYuZ2V0U2V0KCBpbWcgKTtcblx0XHR2YXIgZXZhbHVhdGVkID0gZmFsc2U7XG5cdFx0aWYgKCBtYXRjaGluZ1NldCAhPT0gXCJwZW5kaW5nXCIgKSB7XG5cdFx0XHRldmFsdWF0ZWQgPSBldmFsSWQ7XG5cdFx0XHRpZiAoIG1hdGNoaW5nU2V0ICkge1xuXHRcdFx0XHRzcmNTZXRDYW5kaWRhdGVzID0gcGYuc2V0UmVzKCBtYXRjaGluZ1NldCApO1xuXHRcdFx0XHRwZi5hcHBseVNldENhbmRpZGF0ZSggc3JjU2V0Q2FuZGlkYXRlcywgaW1nICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGltZ1sgcGYubnMgXS5ldmFsZWQgPSBldmFsdWF0ZWQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhc2NlbmRpbmdTb3J0KCBhLCBiICkge1xuXHRcdHJldHVybiBhLnJlcyAtIGIucmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0U3JjVG9DdXIoIGltZywgc3JjLCBzZXQgKSB7XG5cdFx0dmFyIGNhbmRpZGF0ZTtcblx0XHRpZiAoICFzZXQgJiYgc3JjICkge1xuXHRcdFx0c2V0ID0gaW1nWyBwZi5ucyBdLnNldHM7XG5cdFx0XHRzZXQgPSBzZXQgJiYgc2V0W3NldC5sZW5ndGggLSAxXTtcblx0XHR9XG5cblx0XHRjYW5kaWRhdGUgPSBnZXRDYW5kaWRhdGVGb3JTcmMoc3JjLCBzZXQpO1xuXG5cdFx0aWYgKCBjYW5kaWRhdGUgKSB7XG5cdFx0XHRzcmMgPSBwZi5tYWtlVXJsKHNyYyk7XG5cdFx0XHRpbWdbIHBmLm5zIF0uY3VyU3JjID0gc3JjO1xuXHRcdFx0aW1nWyBwZi5ucyBdLmN1ckNhbiA9IGNhbmRpZGF0ZTtcblxuXHRcdFx0aWYgKCAhY2FuZGlkYXRlLnJlcyApIHtcblx0XHRcdFx0c2V0UmVzb2x1dGlvbiggY2FuZGlkYXRlLCBjYW5kaWRhdGUuc2V0LnNpemVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDYW5kaWRhdGVGb3JTcmMoIHNyYywgc2V0ICkge1xuXHRcdHZhciBpLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZXM7XG5cdFx0aWYgKCBzcmMgJiYgc2V0ICkge1xuXHRcdFx0Y2FuZGlkYXRlcyA9IHBmLnBhcnNlU2V0KCBzZXQgKTtcblx0XHRcdHNyYyA9IHBmLm1ha2VVcmwoc3JjKTtcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBzcmMgPT09IHBmLm1ha2VVcmwoY2FuZGlkYXRlc1sgaSBdLnVybCkgKSB7XG5cdFx0XHRcdFx0Y2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgaSBdO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRBbGxTb3VyY2VFbGVtZW50cyggcGljdHVyZSwgY2FuZGlkYXRlcyApIHtcblx0XHR2YXIgaSwgbGVuLCBzb3VyY2UsIHNyY3NldDtcblxuXHRcdC8vIFNQRUMgbWlzbWF0Y2ggaW50ZW5kZWQgZm9yIHNpemUgYW5kIHBlcmY6XG5cdFx0Ly8gYWN0dWFsbHkgb25seSBzb3VyY2UgZWxlbWVudHMgcHJlY2VkaW5nIHRoZSBpbWcgc2hvdWxkIGJlIHVzZWRcblx0XHQvLyBhbHNvIG5vdGU6IGRvbid0IHVzZSBxc2EgaGVyZSwgYmVjYXVzZSBJRTggc29tZXRpbWVzIGRvZXNuJ3QgbGlrZSBzb3VyY2UgYXMgdGhlIGtleSBwYXJ0IGluIGEgc2VsZWN0b3Jcblx0XHR2YXIgc291cmNlcyA9IHBpY3R1cmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwic291cmNlXCIgKTtcblxuXHRcdGZvciAoIGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0c291cmNlID0gc291cmNlc1sgaSBdO1xuXHRcdFx0c291cmNlWyBwZi5ucyBdID0gdHJ1ZTtcblx0XHRcdHNyY3NldCA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwic3Jjc2V0XCIgKTtcblxuXHRcdFx0Ly8gaWYgc291cmNlIGRvZXMgbm90IGhhdmUgYSBzcmNzZXQgYXR0cmlidXRlLCBza2lwXG5cdFx0XHRpZiAoIHNyY3NldCApIHtcblx0XHRcdFx0Y2FuZGlkYXRlcy5wdXNoKCB7XG5cdFx0XHRcdFx0c3Jjc2V0OiBzcmNzZXQsXG5cdFx0XHRcdFx0bWVkaWE6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwibWVkaWFcIiApLFxuXHRcdFx0XHRcdHR5cGU6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICksXG5cdFx0XHRcdFx0c2l6ZXM6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwic2l6ZXNcIiApXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU3Jjc2V0IFBhcnNlclxuXHQgKiBCeSBBbGV4IEJlbGwgfCAgTUlUIExpY2Vuc2Vcblx0ICpcblx0ICogQHJldHVybnMgQXJyYXkgW3t1cmw6IF8sIGQ6IF8sIHc6IF8sIGg6Xywgc2V0Ol8oPz8/Pyl9LCAuLi5dXG5cdCAqXG5cdCAqIEJhc2VkIHN1cGVyIGR1cGVyIGNsb3NlbHkgb24gdGhlIHJlZmVyZW5jZSBhbGdvcml0aG0gYXQ6XG5cdCAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNwYXJzZS1hLXNyY3NldC1hdHRyaWJ1dGVcblx0ICovXG5cblx0Ly8gMS4gTGV0IGlucHV0IGJlIHRoZSB2YWx1ZSBwYXNzZWQgdG8gdGhpcyBhbGdvcml0aG0uXG5cdC8vIChUTy1ETyA6IEV4cGxhaW4gd2hhdCBcInNldFwiIGFyZ3VtZW50IGlzIGhlcmUuIE1heWJlIGNob29zZSBhIG1vcmVcblx0Ly8gZGVzY3JpcHRpdmUgJiBtb3JlIHNlYXJjaGFibGUgbmFtZS4gIFNpbmNlIHBhc3NpbmcgdGhlIFwic2V0XCIgaW4gcmVhbGx5IGhhc1xuXHQvLyBub3RoaW5nIHRvIGRvIHdpdGggcGFyc2luZyBwcm9wZXIsIEkgd291bGQgcHJlZmVyIHRoaXMgYXNzaWdubWVudCBldmVudHVhbGx5XG5cdC8vIGdvIGluIGFuIGV4dGVybmFsIGZuLilcblx0ZnVuY3Rpb24gcGFyc2VTcmNzZXQoaW5wdXQsIHNldCkge1xuXG5cdFx0ZnVuY3Rpb24gY29sbGVjdENoYXJhY3RlcnMocmVnRXgpIHtcblx0XHRcdHZhciBjaGFycyxcblx0XHRcdCAgICBtYXRjaCA9IHJlZ0V4LmV4ZWMoaW5wdXQuc3Vic3RyaW5nKHBvcykpO1xuXHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdGNoYXJzID0gbWF0Y2hbIDAgXTtcblx0XHRcdFx0cG9zICs9IGNoYXJzLmxlbmd0aDtcblx0XHRcdFx0cmV0dXJuIGNoYXJzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aCxcblx0XHQgICAgdXJsLFxuXHRcdCAgICBkZXNjcmlwdG9ycyxcblx0XHQgICAgY3VycmVudERlc2NyaXB0b3IsXG5cdFx0ICAgIHN0YXRlLFxuXHRcdCAgICBjLFxuXG5cdFx0ICAgIC8vIDIuIExldCBwb3NpdGlvbiBiZSBhIHBvaW50ZXIgaW50byBpbnB1dCwgaW5pdGlhbGx5IHBvaW50aW5nIGF0IHRoZSBzdGFydFxuXHRcdCAgICAvLyAgICBvZiB0aGUgc3RyaW5nLlxuXHRcdCAgICBwb3MgPSAwLFxuXG5cdFx0ICAgIC8vIDMuIExldCBjYW5kaWRhdGVzIGJlIGFuIGluaXRpYWxseSBlbXB0eSBzb3VyY2Ugc2V0LlxuXHRcdCAgICBjYW5kaWRhdGVzID0gW107XG5cblx0XHQvKipcblx0XHQqIEFkZHMgZGVzY3JpcHRvciBwcm9wZXJ0aWVzIHRvIGEgY2FuZGlkYXRlLCBwdXNoZXMgdG8gdGhlIGNhbmRpZGF0ZXMgYXJyYXlcblx0XHQqIEByZXR1cm4gdW5kZWZpbmVkXG5cdFx0Ki9cblx0XHQvLyAoRGVjbGFyZWQgb3V0c2lkZSBvZiB0aGUgd2hpbGUgbG9vcCBzbyB0aGF0IGl0J3Mgb25seSBjcmVhdGVkIG9uY2UuXG5cdFx0Ly8gKFRoaXMgZm4gaXMgZGVmaW5lZCBiZWZvcmUgaXQgaXMgdXNlZCwgaW4gb3JkZXIgdG8gcGFzcyBKU0hJTlQuXG5cdFx0Ly8gVW5mb3J0dW5hdGVseSB0aGlzIGJyZWFrcyB0aGUgc2VxdWVuY2luZyBvZiB0aGUgc3BlYyBjb21tZW50cy4gOi8gKVxuXHRcdGZ1bmN0aW9uIHBhcnNlRGVzY3JpcHRvcnMoKSB7XG5cblx0XHRcdC8vIDkuIERlc2NyaXB0b3IgcGFyc2VyOiBMZXQgZXJyb3IgYmUgbm8uXG5cdFx0XHR2YXIgcEVycm9yID0gZmFsc2UsXG5cblx0XHRcdC8vIDEwLiBMZXQgd2lkdGggYmUgYWJzZW50LlxuXHRcdFx0Ly8gMTEuIExldCBkZW5zaXR5IGJlIGFic2VudC5cblx0XHRcdC8vIDEyLiBMZXQgZnV0dXJlLWNvbXBhdC1oIGJlIGFic2VudC4gKFdlJ3JlIGltcGxlbWVudGluZyBpdCBub3cgYXMgaClcblx0XHRcdCAgICB3LCBkLCBoLCBpLFxuXHRcdFx0ICAgIGNhbmRpZGF0ZSA9IHt9LFxuXHRcdFx0ICAgIGRlc2MsIGxhc3RDaGFyLCB2YWx1ZSwgaW50VmFsLCBmbG9hdFZhbDtcblxuXHRcdFx0Ly8gMTMuIEZvciBlYWNoIGRlc2NyaXB0b3IgaW4gZGVzY3JpcHRvcnMsIHJ1biB0aGUgYXBwcm9wcmlhdGUgc2V0IG9mIHN0ZXBzXG5cdFx0XHQvLyBmcm9tIHRoZSBmb2xsb3dpbmcgbGlzdDpcblx0XHRcdGZvciAoaSA9IDAgOyBpIDwgZGVzY3JpcHRvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZGVzYyA9IGRlc2NyaXB0b3JzWyBpIF07XG5cblx0XHRcdFx0bGFzdENoYXIgPSBkZXNjWyBkZXNjLmxlbmd0aCAtIDEgXTtcblx0XHRcdFx0dmFsdWUgPSBkZXNjLnN1YnN0cmluZygwLCBkZXNjLmxlbmd0aCAtIDEpO1xuXHRcdFx0XHRpbnRWYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXHRcdFx0XHRmbG9hdFZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBVKzAwNzcgTEFUSU4gU01BTEwgTEVUVEVSIFcgY2hhcmFjdGVyXG5cdFx0XHRcdGlmIChyZWdleE5vbk5lZ2F0aXZlSW50ZWdlci50ZXN0KHZhbHVlKSAmJiAobGFzdENoYXIgPT09IFwid1wiKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2lkdGggYW5kIGRlbnNpdHkgYXJlIG5vdCBib3RoIGFic2VudCwgdGhlbiBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdGlmICh3IHx8IGQpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBub24tbmVnYXRpdmUgaW50ZWdlcnMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgbGV0IHdpZHRoIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGludFZhbCA9PT0gMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHt3ID0gaW50VmFsO31cblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIGZsb2F0aW5nLXBvaW50IG51bWJlciBmb2xsb3dlZCBieVxuXHRcdFx0XHQvLyBhIFUrMDA3OCBMQVRJTiBTTUFMTCBMRVRURVIgWCBjaGFyYWN0ZXJcblx0XHRcdFx0fSBlbHNlIGlmIChyZWdleEZsb2F0aW5nUG9pbnQudGVzdCh2YWx1ZSkgJiYgKGxhc3RDaGFyID09PSBcInhcIikpIHtcblxuXHRcdFx0XHRcdC8vIElmIHdpZHRoLCBkZW5zaXR5IGFuZCBmdXR1cmUtY29tcGF0LWggYXJlIG5vdCBhbGwgYWJzZW50LCB0aGVuIGxldCBlcnJvclxuXHRcdFx0XHRcdC8vIGJlIHllcy5cblx0XHRcdFx0XHRpZiAodyB8fCBkIHx8IGgpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBmbG9hdGluZy1wb2ludCBudW1iZXIgdmFsdWVzIHRvIHRoZSBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXN1bHQgaXMgbGVzcyB0aGFuIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuIE90aGVyd2lzZSwgbGV0IGRlbnNpdHlcblx0XHRcdFx0XHQvLyBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChmbG9hdFZhbCA8IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7ZCA9IGZsb2F0VmFsO31cblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIGZvbGxvd2VkIGJ5XG5cdFx0XHRcdC8vIGEgVSswMDY4IExBVElOIFNNQUxMIExFVFRFUiBIIGNoYXJhY3RlclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyLnRlc3QodmFsdWUpICYmIChsYXN0Q2hhciA9PT0gXCJoXCIpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiBoZWlnaHQgYW5kIGRlbnNpdHkgYXJlIG5vdCBib3RoIGFic2VudCwgdGhlbiBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdGlmIChoIHx8IGQpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBub24tbmVnYXRpdmUgaW50ZWdlcnMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLiBPdGhlcndpc2UsIGxldCBmdXR1cmUtY29tcGF0LWhcblx0XHRcdFx0XHQvLyBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChpbnRWYWwgPT09IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7aCA9IGludFZhbDt9XG5cblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSwgTGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0fSBlbHNlIHtwRXJyb3IgPSB0cnVlO31cblx0XHRcdH0gLy8gKGNsb3NlIHN0ZXAgMTMgZm9yIGxvb3ApXG5cblx0XHRcdC8vIDE1LiBJZiBlcnJvciBpcyBzdGlsbCBubywgdGhlbiBhcHBlbmQgYSBuZXcgaW1hZ2Ugc291cmNlIHRvIGNhbmRpZGF0ZXMgd2hvc2Vcblx0XHRcdC8vIFVSTCBpcyB1cmwsIGFzc29jaWF0ZWQgd2l0aCBhIHdpZHRoIHdpZHRoIGlmIG5vdCBhYnNlbnQgYW5kIGEgcGl4ZWxcblx0XHRcdC8vIGRlbnNpdHkgZGVuc2l0eSBpZiBub3QgYWJzZW50LiBPdGhlcndpc2UsIHRoZXJlIGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0XHRpZiAoIXBFcnJvcikge1xuXHRcdFx0XHRjYW5kaWRhdGUudXJsID0gdXJsO1xuXG5cdFx0XHRcdGlmICh3KSB7IGNhbmRpZGF0ZS53ID0gdzt9XG5cdFx0XHRcdGlmIChkKSB7IGNhbmRpZGF0ZS5kID0gZDt9XG5cdFx0XHRcdGlmIChoKSB7IGNhbmRpZGF0ZS5oID0gaDt9XG5cdFx0XHRcdGlmICghaCAmJiAhZCAmJiAhdykge2NhbmRpZGF0ZS5kID0gMTt9XG5cdFx0XHRcdGlmIChjYW5kaWRhdGUuZCA9PT0gMSkge3NldC5oYXMxeCA9IHRydWU7fVxuXHRcdFx0XHRjYW5kaWRhdGUuc2V0ID0gc2V0O1xuXG5cdFx0XHRcdGNhbmRpZGF0ZXMucHVzaChjYW5kaWRhdGUpO1xuXHRcdFx0fVxuXHRcdH0gLy8gKGNsb3NlIHBhcnNlRGVzY3JpcHRvcnMgZm4pXG5cblx0XHQvKipcblx0XHQqIFRva2VuaXplcyBkZXNjcmlwdG9yIHByb3BlcnRpZXMgcHJpb3IgdG8gcGFyc2luZ1xuXHRcdCogUmV0dXJucyB1bmRlZmluZWQuXG5cdFx0KiAoQWdhaW4sIHRoaXMgZm4gaXMgZGVmaW5lZCBiZWZvcmUgaXQgaXMgdXNlZCwgaW4gb3JkZXIgdG8gcGFzcyBKU0hJTlQuXG5cdFx0KiBVbmZvcnR1bmF0ZWx5IHRoaXMgYnJlYWtzIHRoZSBsb2dpY2FsIHNlcXVlbmNpbmcgb2YgdGhlIHNwZWMgY29tbWVudHMuIDovIClcblx0XHQqL1xuXHRcdGZ1bmN0aW9uIHRva2VuaXplKCkge1xuXG5cdFx0XHQvLyA4LjEuIERlc2NyaXB0b3IgdG9rZW5pc2VyOiBTa2lwIHdoaXRlc3BhY2Vcblx0XHRcdGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ2V4TGVhZGluZ1NwYWNlcyk7XG5cblx0XHRcdC8vIDguMi4gTGV0IGN1cnJlbnQgZGVzY3JpcHRvciBiZSB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBcIlwiO1xuXG5cdFx0XHQvLyA4LjMuIExldCBzdGF0ZSBiZSBpbiBkZXNjcmlwdG9yLlxuXHRcdFx0c3RhdGUgPSBcImluIGRlc2NyaXB0b3JcIjtcblxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblxuXHRcdFx0XHQvLyA4LjQuIExldCBjIGJlIHRoZSBjaGFyYWN0ZXIgYXQgcG9zaXRpb24uXG5cdFx0XHRcdGMgPSBpbnB1dC5jaGFyQXQocG9zKTtcblxuXHRcdFx0XHQvLyAgRG8gdGhlIGZvbGxvd2luZyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIHN0YXRlLlxuXHRcdFx0XHQvLyAgRm9yIHRoZSBwdXJwb3NlIG9mIHRoaXMgc3RlcCwgXCJFT0ZcIiBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyIHJlcHJlc2VudGluZ1xuXHRcdFx0XHQvLyAgdGhhdCBwb3NpdGlvbiBpcyBwYXN0IHRoZSBlbmQgb2YgaW5wdXQuXG5cblx0XHRcdFx0Ly8gSW4gZGVzY3JpcHRvclxuXHRcdFx0XHRpZiAoc3RhdGUgPT09IFwiaW4gZGVzY3JpcHRvclwiKSB7XG5cdFx0XHRcdFx0Ly8gRG8gdGhlIGZvbGxvd2luZywgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBjOlxuXG5cdFx0XHRcdCAgLy8gU3BhY2UgY2hhcmFjdGVyXG5cdFx0XHRcdCAgLy8gSWYgY3VycmVudCBkZXNjcmlwdG9yIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0b1xuXHRcdFx0XHQgIC8vIGRlc2NyaXB0b3JzIGFuZCBsZXQgY3VycmVudCBkZXNjcmlwdG9yIGJlIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHRcdCAgLy8gU2V0IHN0YXRlIHRvIGFmdGVyIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0aWYgKGlzU3BhY2UoYykpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50RGVzY3JpcHRvcikge1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFwiYWZ0ZXIgZGVzY3JpcHRvclwiO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVSswMDJDIENPTU1BICgsKVxuXHRcdFx0XHRcdC8vIEFkdmFuY2UgcG9zaXRpb24gdG8gdGhlIG5leHQgY2hhcmFjdGVyIGluIGlucHV0LiBJZiBjdXJyZW50IGRlc2NyaXB0b3Jcblx0XHRcdFx0XHQvLyBpcyBub3QgZW1wdHksIGFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXBcblx0XHRcdFx0XHQvLyBsYWJlbGVkIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnREZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gVSswMDI4IExFRlQgUEFSRU5USEVTSVMgKCgpXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLiBTZXQgc3RhdGUgdG8gaW4gcGFyZW5zLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcXHUwMDI4XCIpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImluIHBhcmVuc1wiO1xuXG5cdFx0XHRcdFx0Ly8gRU9GXG5cdFx0XHRcdFx0Ly8gSWYgY3VycmVudCBkZXNjcmlwdG9yIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0b1xuXHRcdFx0XHRcdC8vIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudERlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8vIChlbmQgXCJpbiBkZXNjcmlwdG9yXCJcblxuXHRcdFx0XHQvLyBJbiBwYXJlbnNcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJpbiBwYXJlbnNcIikge1xuXG5cdFx0XHRcdFx0Ly8gVSswMDI5IFJJR0hUIFBBUkVOVEhFU0lTICgpKVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci4gU2V0IHN0YXRlIHRvIGluIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0aWYgKGMgPT09IFwiKVwiKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHRcdHN0YXRlID0gXCJpbiBkZXNjcmlwdG9yXCI7XG5cblx0XHRcdFx0XHQvLyBFT0Zcblx0XHRcdFx0XHQvLyBBcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWRcblx0XHRcdFx0XHQvLyBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFmdGVyIGRlc2NyaXB0b3Jcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJhZnRlciBkZXNjcmlwdG9yXCIpIHtcblxuXHRcdFx0XHRcdC8vIERvIHRoZSBmb2xsb3dpbmcsIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYzpcblx0XHRcdFx0XHQvLyBTcGFjZSBjaGFyYWN0ZXI6IFN0YXkgaW4gdGhpcyBzdGF0ZS5cblx0XHRcdFx0XHRpZiAoaXNTcGFjZShjKSkge1xuXG5cdFx0XHRcdFx0Ly8gRU9GOiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gU2V0IHN0YXRlIHRvIGluIGRlc2NyaXB0b3IuIFNldCBwb3NpdGlvbiB0byB0aGUgcHJldmlvdXMgY2hhcmFjdGVyIGluIGlucHV0LlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiaW4gZGVzY3JpcHRvclwiO1xuXHRcdFx0XHRcdFx0cG9zIC09IDE7XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZHZhbmNlIHBvc2l0aW9uIHRvIHRoZSBuZXh0IGNoYXJhY3RlciBpbiBpbnB1dC5cblx0XHRcdFx0cG9zICs9IDE7XG5cblx0XHRcdC8vIFJlcGVhdCB0aGlzIHN0ZXAuXG5cdFx0XHR9IC8vIChjbG9zZSB3aGlsZSB0cnVlIGxvb3ApXG5cdFx0fVxuXG5cdFx0Ly8gNC4gU3BsaXR0aW5nIGxvb3A6IENvbGxlY3QgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIHNwYWNlXG5cdFx0Ly8gICAgY2hhcmFjdGVycyBvciBVKzAwMkMgQ09NTUEgY2hhcmFjdGVycy4gSWYgYW55IFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzXG5cdFx0Ly8gICAgd2VyZSBjb2xsZWN0ZWQsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29sbGVjdENoYXJhY3RlcnMocmVnZXhMZWFkaW5nQ29tbWFzT3JTcGFjZXMpO1xuXG5cdFx0XHQvLyA1LiBJZiBwb3NpdGlvbiBpcyBwYXN0IHRoZSBlbmQgb2YgaW5wdXQsIHJldHVybiBjYW5kaWRhdGVzIGFuZCBhYm9ydCB0aGVzZSBzdGVwcy5cblx0XHRcdGlmIChwb3MgPj0gaW5wdXRMZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGNhbmRpZGF0ZXM7IC8vICh3ZSdyZSBkb25lLCB0aGlzIGlzIHRoZSBzb2xlIHJldHVybiBwYXRoKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyA2LiBDb2xsZWN0IGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyB0aGF0IGFyZSBub3Qgc3BhY2UgY2hhcmFjdGVycyxcblx0XHRcdC8vICAgIGFuZCBsZXQgdGhhdCBiZSB1cmwuXG5cdFx0XHR1cmwgPSBjb2xsZWN0Q2hhcmFjdGVycyhyZWdleExlYWRpbmdOb3RTcGFjZXMpO1xuXG5cdFx0XHQvLyA3LiBMZXQgZGVzY3JpcHRvcnMgYmUgYSBuZXcgZW1wdHkgbGlzdC5cblx0XHRcdGRlc2NyaXB0b3JzID0gW107XG5cblx0XHRcdC8vIDguIElmIHVybCBlbmRzIHdpdGggYSBVKzAwMkMgQ09NTUEgY2hhcmFjdGVyICgsKSwgZm9sbG93IHRoZXNlIHN1YnN0ZXBzOlxuXHRcdFx0Ly9cdFx0KDEpLiBSZW1vdmUgYWxsIHRyYWlsaW5nIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzIGZyb20gdXJsLiBJZiB0aGlzIHJlbW92ZWRcblx0XHRcdC8vICAgICAgICAgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHRcdGlmICh1cmwuc2xpY2UoLTEpID09PSBcIixcIikge1xuXHRcdFx0XHR1cmwgPSB1cmwucmVwbGFjZShyZWdleFRyYWlsaW5nQ29tbWFzLCBcIlwiKTtcblx0XHRcdFx0Ly8gKEp1bXAgYWhlYWQgdG8gc3RlcCA5IHRvIHNraXAgdG9rZW5pemF0aW9uIGFuZCBqdXN0IHB1c2ggdGhlIGNhbmRpZGF0ZSkuXG5cdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblxuXHRcdFx0Ly9cdE90aGVyd2lzZSwgZm9sbG93IHRoZXNlIHN1YnN0ZXBzOlxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9rZW5pemUoKTtcblx0XHRcdH0gLy8gKGNsb3NlIGVsc2Ugb2Ygc3RlcCA4KVxuXG5cdFx0Ly8gMTYuIFJldHVybiB0byB0aGUgc3RlcCBsYWJlbGVkIHNwbGl0dGluZyBsb29wLlxuXHRcdH0gLy8gKENsb3NlIG9mIGJpZyB3aGlsZSBsb29wLilcblx0fVxuXG5cdC8qXG5cdCAqIFNpemVzIFBhcnNlclxuXHQgKlxuXHQgKiBCeSBBbGV4IEJlbGwgfCAgTUlUIExpY2Vuc2Vcblx0ICpcblx0ICogTm9uLXN0cmljdCBidXQgYWNjdXJhdGUgYW5kIGxpZ2h0d2VpZ2h0IEpTIFBhcnNlciBmb3IgdGhlIHN0cmluZyB2YWx1ZSA8aW1nIHNpemVzPVwiaGVyZVwiPlxuXHQgKlxuXHQgKiBSZWZlcmVuY2UgYWxnb3JpdGhtIGF0OlxuXHQgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjcGFyc2UtYS1zaXplcy1hdHRyaWJ1dGVcblx0ICpcblx0ICogTW9zdCBjb21tZW50cyBhcmUgY29waWVkIGluIGRpcmVjdGx5IGZyb20gdGhlIHNwZWNcblx0ICogKGV4Y2VwdCBmb3IgY29tbWVudHMgaW4gcGFyZW5zKS5cblx0ICpcblx0ICogR3JhbW1hciBpczpcblx0ICogPHNvdXJjZS1zaXplLWxpc3Q+ID0gPHNvdXJjZS1zaXplPiMgWyAsIDxzb3VyY2Utc2l6ZS12YWx1ZT4gXT8gfCA8c291cmNlLXNpemUtdmFsdWU+XG5cdCAqIDxzb3VyY2Utc2l6ZT4gPSA8bWVkaWEtY29uZGl0aW9uPiA8c291cmNlLXNpemUtdmFsdWU+XG5cdCAqIDxzb3VyY2Utc2l6ZS12YWx1ZT4gPSA8bGVuZ3RoPlxuXHQgKiBodHRwOi8vd3d3LnczLm9yZy9odG1sL3dnL2RyYWZ0cy9odG1sL21hc3Rlci9lbWJlZGRlZC1jb250ZW50Lmh0bWwjYXR0ci1pbWctc2l6ZXNcblx0ICpcblx0ICogRS5nLiBcIihtYXgtd2lkdGg6IDMwZW0pIDEwMHZ3LCAobWF4LXdpZHRoOiA1MGVtKSA3MHZ3LCAxMDB2d1wiXG5cdCAqIG9yIFwiKG1pbi13aWR0aDogMzBlbSksIGNhbGMoMzB2dyAtIDE1cHgpXCIgb3IganVzdCBcIjMwdndcIlxuXHQgKlxuXHQgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWxpZCA8Y3NzLWxlbmd0aD4gd2l0aCBhIG1lZGlhIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byB0cnVlLFxuXHQgKiBvciBcIjEwMHZ3XCIgaWYgYWxsIHZhbGlkIG1lZGlhIGNvbmRpdGlvbnMgZXZhbHVhdGUgdG8gZmFsc2UuXG5cdCAqXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIHBhcnNlU2l6ZXMoc3RyVmFsdWUpIHtcblxuXHRcdC8vIChQZXJjZW50YWdlIENTUyBsZW5ndGhzIGFyZSBub3QgYWxsb3dlZCBpbiB0aGlzIGNhc2UsIHRvIGF2b2lkIGNvbmZ1c2lvbjpcblx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjdmFsaWQtc291cmNlLXNpemUtbGlzdFxuXHRcdC8vIENTUyBhbGxvd3MgYSBzaW5nbGUgb3B0aW9uYWwgcGx1cyBvciBtaW51cyBzaWduOlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI251bWJlcnNcblx0XHQvLyBDU1MgaXMgQVNDSUkgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNjaGFyYWN0ZXJzIClcblx0XHQvLyBTcGVjIGFsbG93cyBleHBvbmVudGlhbCBub3RhdGlvbiBmb3IgPG51bWJlcj4gdHlwZTpcblx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLyNudW1iZXJzXG5cdFx0dmFyIHJlZ2V4Q3NzTGVuZ3RoV2l0aFVuaXRzID0gL14oPzpbKy1dP1swLTldK3xbMC05XSpcXC5bMC05XSspKD86W2VFXVsrLV0/WzAtOV0rKT8oPzpjaHxjbXxlbXxleHxpbnxtbXxwY3xwdHxweHxyZW18dmh8dm1pbnx2bWF4fHZ3KSQvaTtcblxuXHRcdC8vIChUaGlzIGlzIGEgcXVpY2sgYW5kIGxlbmllbnQgdGVzdC4gQmVjYXVzZSBvZiBvcHRpb25hbCB1bmxpbWl0ZWQtZGVwdGggaW50ZXJuYWxcblx0XHQvLyBncm91cGluZyBwYXJlbnMgYW5kIHN0cmljdCBzcGFjaW5nIHJ1bGVzLCB0aGlzIGNvdWxkIGdldCB2ZXJ5IGNvbXBsaWNhdGVkLilcblx0XHR2YXIgcmVnZXhDc3NDYWxjID0gL15jYWxjXFwoKD86WzAtOWEteiBcXC5cXCtcXC1cXCpcXC9cXChcXCldKylcXCkkL2k7XG5cblx0XHR2YXIgaTtcblx0XHR2YXIgdW5wYXJzZWRTaXplc0xpc3Q7XG5cdFx0dmFyIHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoO1xuXHRcdHZhciB1bnBhcnNlZFNpemU7XG5cdFx0dmFyIGxhc3RDb21wb25lbnRWYWx1ZTtcblx0XHR2YXIgc2l6ZTtcblxuXHRcdC8vIFVUSUxJVFkgRlVOQ1RJT05TXG5cblx0XHQvLyAgKFRveSBDU1MgcGFyc2VyLiBUaGUgZ29hbHMgaGVyZSBhcmU6XG5cdFx0Ly8gIDEpIGV4cGFuc2l2ZSB0ZXN0IGNvdmVyYWdlIHdpdGhvdXQgdGhlIHdlaWdodCBvZiBhIGZ1bGwgQ1NTIHBhcnNlci5cblx0XHQvLyAgMikgQXZvaWRpbmcgcmVnZXggd2hlcmV2ZXIgY29udmVuaWVudC5cblx0XHQvLyAgUXVpY2sgdGVzdHM6IGh0dHA6Ly9qc2ZpZGRsZS5uZXQvZ3RudEw0Z3IvMy9cblx0XHQvLyAgUmV0dXJucyBhbiBhcnJheSBvZiBhcnJheXMuKVxuXHRcdGZ1bmN0aW9uIHBhcnNlQ29tcG9uZW50VmFsdWVzKHN0cikge1xuXHRcdFx0dmFyIGNocmN0cjtcblx0XHRcdHZhciBjb21wb25lbnQgPSBcIlwiO1xuXHRcdFx0dmFyIGNvbXBvbmVudEFycmF5ID0gW107XG5cdFx0XHR2YXIgbGlzdEFycmF5ID0gW107XG5cdFx0XHR2YXIgcGFyZW5EZXB0aCA9IDA7XG5cdFx0XHR2YXIgcG9zID0gMDtcblx0XHRcdHZhciBpbkNvbW1lbnQgPSBmYWxzZTtcblxuXHRcdFx0ZnVuY3Rpb24gcHVzaENvbXBvbmVudCgpIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudEFycmF5LnB1c2goY29tcG9uZW50KTtcblx0XHRcdFx0XHRjb21wb25lbnQgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHB1c2hDb21wb25lbnRBcnJheSgpIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudEFycmF5WzBdKSB7XG5cdFx0XHRcdFx0bGlzdEFycmF5LnB1c2goY29tcG9uZW50QXJyYXkpO1xuXHRcdFx0XHRcdGNvbXBvbmVudEFycmF5ID0gW107XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gKExvb3AgZm9yd2FyZHMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcuKVxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0Y2hyY3RyID0gc3RyLmNoYXJBdChwb3MpO1xuXG5cdFx0XHRcdGlmIChjaHJjdHIgPT09IFwiXCIpIHsgLy8gKCBFbmQgb2Ygc3RyaW5nIHJlYWNoZWQuKVxuXHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50QXJyYXkoKTtcblx0XHRcdFx0XHRyZXR1cm4gbGlzdEFycmF5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGluQ29tbWVudCkge1xuXHRcdFx0XHRcdGlmICgoY2hyY3RyID09PSBcIipcIikgJiYgKHN0cltwb3MgKyAxXSA9PT0gXCIvXCIpKSB7IC8vIChBdCBlbmQgb2YgYSBjb21tZW50Lilcblx0XHRcdFx0XHRcdGluQ29tbWVudCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0cG9zICs9IDI7XG5cdFx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7IC8vIChTa2lwIGFsbCBjaGFyYWN0ZXJzIGluc2lkZSBjb21tZW50cy4pXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNTcGFjZShjaHJjdHIpKSB7XG5cdFx0XHRcdFx0Ly8gKElmIHByZXZpb3VzIGNoYXJhY3RlciBpbiBsb29wIHdhcyBhbHNvIGEgc3BhY2UsIG9yIGlmXG5cdFx0XHRcdFx0Ly8gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nLCBkbyBub3QgYWRkIHNwYWNlIGNoYXIgdG9cblx0XHRcdFx0XHQvLyBjb21wb25lbnQuKVxuXHRcdFx0XHRcdGlmICggKHN0ci5jaGFyQXQocG9zIC0gMSkgJiYgaXNTcGFjZSggc3RyLmNoYXJBdChwb3MgLSAxKSApICkgfHwgIWNvbXBvbmVudCApIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwYXJlbkRlcHRoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0XHRwb3MgKz0xO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIChSZXBsYWNlIGFueSBzcGFjZSBjaGFyYWN0ZXIgd2l0aCBhIHBsYWluIHNwYWNlIGZvciBsZWdpYmlsaXR5Lilcblx0XHRcdFx0XHRcdGNocmN0ciA9IFwiIFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjaHJjdHIgPT09IFwiKFwiKSB7XG5cdFx0XHRcdFx0cGFyZW5EZXB0aCArPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNocmN0ciA9PT0gXCIpXCIpIHtcblx0XHRcdFx0XHRwYXJlbkRlcHRoIC09IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hyY3RyID09PSBcIixcIikge1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50QXJyYXkoKTtcblx0XHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fSBlbHNlIGlmICggKGNocmN0ciA9PT0gXCIvXCIpICYmIChzdHIuY2hhckF0KHBvcyArIDEpID09PSBcIipcIikgKSB7XG5cdFx0XHRcdFx0aW5Db21tZW50ID0gdHJ1ZTtcblx0XHRcdFx0XHRwb3MgKz0gMjtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbXBvbmVudCA9IGNvbXBvbmVudCArIGNocmN0cjtcblx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaXNWYWxpZE5vbk5lZ2F0aXZlU291cmNlU2l6ZVZhbHVlKHMpIHtcblx0XHRcdGlmIChyZWdleENzc0xlbmd0aFdpdGhVbml0cy50ZXN0KHMpICYmIChwYXJzZUZsb2F0KHMpID49IDApKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0aWYgKHJlZ2V4Q3NzQ2FsYy50ZXN0KHMpKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0Ly8gKCBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNudW1iZXJzIHNheXM6XG5cdFx0XHQvLyBcIi0wIGlzIGVxdWl2YWxlbnQgdG8gMCBhbmQgaXMgbm90IGEgbmVnYXRpdmUgbnVtYmVyLlwiIHdoaWNoIG1lYW5zIHRoYXRcblx0XHRcdC8vIHVuaXRsZXNzIHplcm8gYW5kIHVuaXRsZXNzIG5lZ2F0aXZlIHplcm8gbXVzdCBiZSBhY2NlcHRlZCBhcyBzcGVjaWFsIGNhc2VzLilcblx0XHRcdGlmICgocyA9PT0gXCIwXCIpIHx8IChzID09PSBcIi0wXCIpIHx8IChzID09PSBcIiswXCIpKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gYXNrZWQgdG8gcGFyc2UgYSBzaXplcyBhdHRyaWJ1dGUgZnJvbSBhbiBlbGVtZW50LCBwYXJzZSBhXG5cdFx0Ly8gY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgY29tcG9uZW50IHZhbHVlcyBmcm9tIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCdzXG5cdFx0Ly8gc2l6ZXMgYXR0cmlidXRlIChvciB0aGUgZW1wdHkgc3RyaW5nLCBpZiB0aGUgYXR0cmlidXRlIGlzIGFic2VudCksIGFuZCBsZXRcblx0XHQvLyB1bnBhcnNlZCBzaXplcyBsaXN0IGJlIHRoZSByZXN1bHQuXG5cdFx0Ly8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXN5bnRheC8jcGFyc2UtY29tbWEtc2VwYXJhdGVkLWxpc3Qtb2YtY29tcG9uZW50LXZhbHVlc1xuXG5cdFx0dW5wYXJzZWRTaXplc0xpc3QgPSBwYXJzZUNvbXBvbmVudFZhbHVlcyhzdHJWYWx1ZSk7XG5cdFx0dW5wYXJzZWRTaXplc0xpc3RMZW5ndGggPSB1bnBhcnNlZFNpemVzTGlzdC5sZW5ndGg7XG5cblx0XHQvLyBGb3IgZWFjaCB1bnBhcnNlZCBzaXplIGluIHVucGFyc2VkIHNpemVzIGxpc3Q6XG5cdFx0Zm9yIChpID0gMDsgaSA8IHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoOyBpKyspIHtcblx0XHRcdHVucGFyc2VkU2l6ZSA9IHVucGFyc2VkU2l6ZXNMaXN0W2ldO1xuXG5cdFx0XHQvLyAxLiBSZW1vdmUgYWxsIGNvbnNlY3V0aXZlIDx3aGl0ZXNwYWNlLXRva2VuPnMgZnJvbSB0aGUgZW5kIG9mIHVucGFyc2VkIHNpemUuXG5cdFx0XHQvLyAoIHBhcnNlQ29tcG9uZW50VmFsdWVzKCkgYWxyZWFkeSBvbWl0cyBzcGFjZXMgb3V0c2lkZSBvZiBwYXJlbnMuIClcblxuXHRcdFx0Ly8gSWYgdW5wYXJzZWQgc2l6ZSBpcyBub3cgZW1wdHksIHRoYXQgaXMgYSBwYXJzZSBlcnJvcjsgY29udGludWUgdG8gdGhlIG5leHRcblx0XHRcdC8vIGl0ZXJhdGlvbiBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vICggcGFyc2VDb21wb25lbnRWYWx1ZXMoKSB3b24ndCBwdXNoIGFuIGVtcHR5IGFycmF5LiApXG5cblx0XHRcdC8vIDIuIElmIHRoZSBsYXN0IGNvbXBvbmVudCB2YWx1ZSBpbiB1bnBhcnNlZCBzaXplIGlzIGEgdmFsaWQgbm9uLW5lZ2F0aXZlXG5cdFx0XHQvLyA8c291cmNlLXNpemUtdmFsdWU+LCBsZXQgc2l6ZSBiZSBpdHMgdmFsdWUgYW5kIHJlbW92ZSB0aGUgY29tcG9uZW50IHZhbHVlXG5cdFx0XHQvLyBmcm9tIHVucGFyc2VkIHNpemUuIEFueSBDU1MgZnVuY3Rpb24gb3RoZXIgdGhhbiB0aGUgY2FsYygpIGZ1bmN0aW9uIGlzXG5cdFx0XHQvLyBpbnZhbGlkLiBPdGhlcndpc2UsIHRoZXJlIGlzIGEgcGFyc2UgZXJyb3I7IGNvbnRpbnVlIHRvIHRoZSBuZXh0IGl0ZXJhdGlvblxuXHRcdFx0Ly8gb2YgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3Mtc3ludGF4LyNwYXJzZS1jb21wb25lbnQtdmFsdWVcblx0XHRcdGxhc3RDb21wb25lbnRWYWx1ZSA9IHVucGFyc2VkU2l6ZVt1bnBhcnNlZFNpemUubGVuZ3RoIC0gMV07XG5cblx0XHRcdGlmIChpc1ZhbGlkTm9uTmVnYXRpdmVTb3VyY2VTaXplVmFsdWUobGFzdENvbXBvbmVudFZhbHVlKSkge1xuXHRcdFx0XHRzaXplID0gbGFzdENvbXBvbmVudFZhbHVlO1xuXHRcdFx0XHR1bnBhcnNlZFNpemUucG9wKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gMy4gUmVtb3ZlIGFsbCBjb25zZWN1dGl2ZSA8d2hpdGVzcGFjZS10b2tlbj5zIGZyb20gdGhlIGVuZCBvZiB1bnBhcnNlZFxuXHRcdFx0Ly8gc2l6ZS4gSWYgdW5wYXJzZWQgc2l6ZSBpcyBub3cgZW1wdHksIHJldHVybiBzaXplIGFuZCBleGl0IHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gSWYgdGhpcyB3YXMgbm90IHRoZSBsYXN0IGl0ZW0gaW4gdW5wYXJzZWQgc2l6ZXMgbGlzdCwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdFx0aWYgKHVucGFyc2VkU2l6ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHNpemU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDQuIFBhcnNlIHRoZSByZW1haW5pbmcgY29tcG9uZW50IHZhbHVlcyBpbiB1bnBhcnNlZCBzaXplIGFzIGFcblx0XHRcdC8vIDxtZWRpYS1jb25kaXRpb24+LiBJZiBpdCBkb2VzIG5vdCBwYXJzZSBjb3JyZWN0bHksIG9yIGl0IGRvZXMgcGFyc2Vcblx0XHRcdC8vIGNvcnJlY3RseSBidXQgdGhlIDxtZWRpYS1jb25kaXRpb24+IGV2YWx1YXRlcyB0byBmYWxzZSwgY29udGludWUgdG8gdGhlXG5cdFx0XHQvLyBuZXh0IGl0ZXJhdGlvbiBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vIChQYXJzaW5nIGFsbCBwb3NzaWJsZSBjb21wb3VuZCBtZWRpYSBjb25kaXRpb25zIGluIEpTIGlzIGhlYXZ5LCBjb21wbGljYXRlZCxcblx0XHRcdC8vIGFuZCB0aGUgcGF5b2ZmIGlzIHVuY2xlYXIuIElzIHRoZXJlIGV2ZXIgYW4gc2l0dWF0aW9uIHdoZXJlIHRoZVxuXHRcdFx0Ly8gbWVkaWEgY29uZGl0aW9uIHBhcnNlcyBpbmNvcnJlY3RseSBidXQgc3RpbGwgc29tZWhvdyBldmFsdWF0ZXMgdG8gdHJ1ZT9cblx0XHRcdC8vIENhbiB3ZSBqdXN0IHJlbHkgb24gdGhlIGJyb3dzZXIvcG9seWZpbGwgdG8gZG8gaXQ/KVxuXHRcdFx0dW5wYXJzZWRTaXplID0gdW5wYXJzZWRTaXplLmpvaW4oXCIgXCIpO1xuXHRcdFx0aWYgKCEocGYubWF0Y2hlc01lZGlhKCB1bnBhcnNlZFNpemUgKSApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gNS4gUmV0dXJuIHNpemUgYW5kIGV4aXQgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHRyZXR1cm4gc2l6ZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgYWJvdmUgYWxnb3JpdGhtIGV4aGF1c3RzIHVucGFyc2VkIHNpemVzIGxpc3Qgd2l0aG91dCByZXR1cm5pbmcgYVxuXHRcdC8vIHNpemUgdmFsdWUsIHJldHVybiAxMDB2dy5cblx0XHRyZXR1cm4gXCIxMDB2d1wiO1xuXHR9XG5cblx0Ly8gbmFtZXNwYWNlXG5cdHBmLm5zID0gKFwicGZcIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKS5zdWJzdHIoMCwgOSk7XG5cblx0Ly8gc3Jjc2V0IHN1cHBvcnQgdGVzdFxuXHRwZi5zdXBTcmNzZXQgPSBcInNyY3NldFwiIGluIGltYWdlO1xuXHRwZi5zdXBTaXplcyA9IFwic2l6ZXNcIiBpbiBpbWFnZTtcblx0cGYuc3VwUGljdHVyZSA9ICEhd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudDtcblxuXHQvLyBVQyBicm93c2VyIGRvZXMgY2xhaW0gdG8gc3VwcG9ydCBzcmNzZXQgYW5kIHBpY3R1cmUsIGJ1dCBub3Qgc2l6ZXMsXG5cdC8vIHRoaXMgZXh0ZW5kZWQgdGVzdCByZXZlYWxzIHRoZSBicm93c2VyIGRvZXMgc3VwcG9ydCBub3RoaW5nXG5cdGlmIChwZi5zdXBTcmNzZXQgJiYgcGYuc3VwUGljdHVyZSAmJiAhcGYuc3VwU2l6ZXMpIHtcblx0XHQoZnVuY3Rpb24oaW1hZ2UyKSB7XG5cdFx0XHRpbWFnZS5zcmNzZXQgPSBcImRhdGE6LGFcIjtcblx0XHRcdGltYWdlMi5zcmMgPSBcImRhdGE6LGFcIjtcblx0XHRcdHBmLnN1cFNyY3NldCA9IGltYWdlLmNvbXBsZXRlID09PSBpbWFnZTIuY29tcGxldGU7XG5cdFx0XHRwZi5zdXBQaWN0dXJlID0gcGYuc3VwU3Jjc2V0ICYmIHBmLnN1cFBpY3R1cmU7XG5cdFx0fSkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSk7XG5cdH1cblxuXHQvLyBTYWZhcmk5IGhhcyBiYXNpYyBzdXBwb3J0IGZvciBzaXplcywgYnV0IGRvZXMndCBleHBvc2UgdGhlIGBzaXplc2AgaWRsIGF0dHJpYnV0ZVxuXHRpZiAocGYuc3VwU3Jjc2V0ICYmICFwZi5zdXBTaXplcykge1xuXG5cdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHdpZHRoMiA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQWdBQkFQQUFBUC8vL3dBQUFDSDVCQUFBQUFBQUxBQUFBQUFDQUFFQUFBSUNCQW9BT3c9PVwiO1xuXHRcdFx0dmFyIHdpZHRoMSA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjtcblx0XHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0dmFyIHRlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHdpZHRoID0gaW1nLndpZHRoO1xuXG5cdFx0XHRcdGlmICh3aWR0aCA9PT0gMikge1xuXHRcdFx0XHRcdHBmLnN1cFNpemVzID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IgPSBwZi5zdXBTcmNzZXQgJiYgIXBmLnN1cFNpemVzO1xuXG5cdFx0XHRcdGlzU3VwcG9ydFRlc3RSZWFkeSA9IHRydWU7XG5cdFx0XHRcdC8vIGZvcmNlIGFzeW5jXG5cdFx0XHRcdHNldFRpbWVvdXQocGljdHVyZWZpbGwpO1xuXHRcdFx0fTtcblxuXHRcdFx0aW1nLm9ubG9hZCA9IHRlc3Q7XG5cdFx0XHRpbWcub25lcnJvciA9IHRlc3Q7XG5cdFx0XHRpbWcuc2V0QXR0cmlidXRlKFwic2l6ZXNcIiwgXCI5cHhcIik7XG5cblx0XHRcdGltZy5zcmNzZXQgPSB3aWR0aDEgKyBcIiAxdyxcIiArIHdpZHRoMiArIFwiIDl3XCI7XG5cdFx0XHRpbWcuc3JjID0gd2lkdGgxO1xuXHRcdH0pKCk7XG5cblx0fSBlbHNlIHtcblx0XHRpc1N1cHBvcnRUZXN0UmVhZHkgPSB0cnVlO1xuXHR9XG5cblx0Ly8gdXNpbmcgcGYucXNhIGluc3RlYWQgb2YgZG9tIHRyYXZlcnNpbmcgZG9lcyBzY2FsZSBtdWNoIGJldHRlcixcblx0Ly8gZXNwZWNpYWxseSBvbiBzaXRlcyBtaXhpbmcgcmVzcG9uc2l2ZSBhbmQgbm9uLXJlc3BvbnNpdmUgaW1hZ2VzXG5cdHBmLnNlbFNob3J0ID0gXCJwaWN0dXJlPmltZyxpbWdbc3Jjc2V0XVwiO1xuXHRwZi5zZWwgPSBwZi5zZWxTaG9ydDtcblx0cGYuY2ZnID0gY2ZnO1xuXG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBwcm9wZXJ0eSBmb3IgYGRldmljZVBpeGVsUmF0aW9gICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqL1xuXHRwZi5EUFIgPSAoRFBSICB8fCAxICk7XG5cdHBmLnUgPSB1bml0cztcblxuXHQvLyBjb250YWluZXIgb2Ygc3VwcG9ydGVkIG1pbWUgdHlwZXMgdGhhdCBvbmUgbWlnaHQgbmVlZCB0byBxdWFsaWZ5IGJlZm9yZSB1c2luZ1xuXHRwZi50eXBlcyA9ICB0eXBlcztcblxuXHRwZi5zZXRTaXplID0gbm9vcDtcblxuXHQvKipcblx0ICogR2V0cyBhIHN0cmluZyBhbmQgcmV0dXJucyB0aGUgYWJzb2x1dGUgVVJMXG5cdCAqIEBwYXJhbSBzcmNcblx0ICogQHJldHVybnMge1N0cmluZ30gYWJzb2x1dGUgVVJMXG5cdCAqL1xuXG5cdHBmLm1ha2VVcmwgPSBtZW1vaXplKGZ1bmN0aW9uKHNyYykge1xuXHRcdGFuY2hvci5ocmVmID0gc3JjO1xuXHRcdHJldHVybiBhbmNob3IuaHJlZjtcblx0fSk7XG5cblx0LyoqXG5cdCAqIEdldHMgYSBET00gZWxlbWVudCBvciBkb2N1bWVudCBhbmQgYSBzZWxjdG9yIGFuZCByZXR1cm5zIHRoZSBmb3VuZCBtYXRjaGVzXG5cdCAqIENhbiBiZSBleHRlbmRlZCB3aXRoIGpRdWVyeS9TaXp6bGUgZm9yIElFNyBzdXBwb3J0XG5cdCAqIEBwYXJhbSBjb250ZXh0XG5cdCAqIEBwYXJhbSBzZWxcblx0ICogQHJldHVybnMge05vZGVMaXN0fEFycmF5fVxuXHQgKi9cblx0cGYucXNhID0gZnVuY3Rpb24oY29udGV4dCwgc2VsKSB7XG5cdFx0cmV0dXJuICggXCJxdWVyeVNlbGVjdG9yXCIgaW4gY29udGV4dCApID8gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkgOiBbXTtcblx0fTtcblxuXHQvKipcblx0ICogU2hvcnRjdXQgbWV0aG9kIGZvciBtYXRjaE1lZGlhICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqIHdldGhlciBuYXRpdmUgb3IgcGYubU1RIGlzIHVzZWQgd2lsbCBiZSBkZWNpZGVkIGxhenkgb24gZmlyc3QgY2FsbFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHBmLm1hdGNoZXNNZWRpYSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggd2luZG93Lm1hdGNoTWVkaWEgJiYgKG1hdGNoTWVkaWEoIFwiKG1pbi13aWR0aDogMC4xZW0pXCIgKSB8fCB7fSkubWF0Y2hlcyApIHtcblx0XHRcdHBmLm1hdGNoZXNNZWRpYSA9IGZ1bmN0aW9uKCBtZWRpYSApIHtcblx0XHRcdFx0cmV0dXJuICFtZWRpYSB8fCAoIG1hdGNoTWVkaWEoIG1lZGlhICkubWF0Y2hlcyApO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGYubWF0Y2hlc01lZGlhID0gcGYubU1RO1xuXHRcdH1cblxuXHRcdHJldHVybiBwZi5tYXRjaGVzTWVkaWEuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBIHNpbXBsaWZpZWQgbWF0Y2hNZWRpYSBpbXBsZW1lbnRhdGlvbiBmb3IgSUU4IGFuZCBJRTlcblx0ICogaGFuZGxlcyBvbmx5IG1pbi13aWR0aC9tYXgtd2lkdGggd2l0aCBweCBvciBlbSB2YWx1ZXNcblx0ICogQHBhcmFtIG1lZGlhXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cGYubU1RID0gZnVuY3Rpb24oIG1lZGlhICkge1xuXHRcdHJldHVybiBtZWRpYSA/IGV2YWxDU1MobWVkaWEpIDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgY2FsY3VsYXRlZCBsZW5ndGggaW4gY3NzIHBpeGVsIGZyb20gdGhlIGdpdmVuIHNvdXJjZVNpemVWYWx1ZVxuXHQgKiBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLTMvI2xlbmd0aC12YWx1ZVxuXHQgKiBpbnRlbmRlZCBTcGVjIG1pc21hdGNoZXM6XG5cdCAqICogRG9lcyBub3QgY2hlY2sgZm9yIGludmFsaWQgdXNlIG9mIENTUyBmdW5jdGlvbnNcblx0ICogKiBEb2VzIGhhbmRsZSBhIGNvbXB1dGVkIGxlbmd0aCBvZiAwIHRoZSBzYW1lIGFzIGEgbmVnYXRpdmUgYW5kIHRoZXJlZm9yZSBpbnZhbGlkIHZhbHVlXG5cdCAqIEBwYXJhbSBzb3VyY2VTaXplVmFsdWVcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdHBmLmNhbGNMZW5ndGggPSBmdW5jdGlvbiggc291cmNlU2l6ZVZhbHVlICkge1xuXG5cdFx0dmFyIHZhbHVlID0gZXZhbENTUyhzb3VyY2VTaXplVmFsdWUsIHRydWUpIHx8IGZhbHNlO1xuXHRcdGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHZhbHVlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHR5cGUgc3RyaW5nIGFuZCBjaGVja3MgaWYgaXRzIHN1cHBvcnRlZFxuXHQgKi9cblxuXHRwZi5zdXBwb3J0c1R5cGUgPSBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gKCB0eXBlICkgPyB0eXBlc1sgdHlwZSBdIDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogUGFyc2VzIGEgc291cmNlU2l6ZSBpbnRvIG1lZGlhQ29uZGl0aW9uIChtZWRpYSkgYW5kIHNvdXJjZVNpemVWYWx1ZSAobGVuZ3RoKVxuXHQgKiBAcGFyYW0gc291cmNlU2l6ZVN0clxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHBmLnBhcnNlU2l6ZSA9IG1lbW9pemUoZnVuY3Rpb24oIHNvdXJjZVNpemVTdHIgKSB7XG5cdFx0dmFyIG1hdGNoID0gKCBzb3VyY2VTaXplU3RyIHx8IFwiXCIgKS5tYXRjaChyZWdTaXplKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bWVkaWE6IG1hdGNoICYmIG1hdGNoWzFdLFxuXHRcdFx0bGVuZ3RoOiBtYXRjaCAmJiBtYXRjaFsyXVxuXHRcdH07XG5cdH0pO1xuXG5cdHBmLnBhcnNlU2V0ID0gZnVuY3Rpb24oIHNldCApIHtcblx0XHRpZiAoICFzZXQuY2FuZHMgKSB7XG5cdFx0XHRzZXQuY2FuZHMgPSBwYXJzZVNyY3NldChzZXQuc3Jjc2V0LCBzZXQpO1xuXHRcdH1cblx0XHRyZXR1cm4gc2V0LmNhbmRzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm5zIDFlbSBpbiBjc3MgcHggZm9yIGh0bWwvYm9keSBkZWZhdWx0IHNpemVcblx0ICogZnVuY3Rpb24gdGFrZW4gZnJvbSByZXNwb25kanNcblx0ICogQHJldHVybnMgeyp8bnVtYmVyfVxuXHQgKi9cblx0cGYuZ2V0RW1WYWx1ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBib2R5O1xuXHRcdGlmICggIWVtaW5weCAmJiAoYm9keSA9IGRvY3VtZW50LmJvZHkpICkge1xuXHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcblx0XHRcdFx0b3JpZ2luYWxIVE1MQ1NTID0gZG9jRWxlbS5zdHlsZS5jc3NUZXh0LFxuXHRcdFx0XHRvcmlnaW5hbEJvZHlDU1MgPSBib2R5LnN0eWxlLmNzc1RleHQ7XG5cblx0XHRcdGRpdi5zdHlsZS5jc3NUZXh0ID0gYmFzZVN0eWxlO1xuXG5cdFx0XHQvLyAxZW0gaW4gYSBtZWRpYSBxdWVyeSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRlZmF1bHQgZm9udCBzaXplIG9mIHRoZSBicm93c2VyXG5cdFx0XHQvLyByZXNldCBkb2NFbGVtIGFuZCBib2R5IHRvIGVuc3VyZSB0aGUgY29ycmVjdCB2YWx1ZSBpcyByZXR1cm5lZFxuXHRcdFx0ZG9jRWxlbS5zdHlsZS5jc3NUZXh0ID0gZnNDc3M7XG5cdFx0XHRib2R5LnN0eWxlLmNzc1RleHQgPSBmc0NzcztcblxuXHRcdFx0Ym9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG5cdFx0XHRlbWlucHggPSBkaXYub2Zmc2V0V2lkdGg7XG5cdFx0XHRib2R5LnJlbW92ZUNoaWxkKCBkaXYgKTtcblxuXHRcdFx0Ly9hbHNvIHVwZGF0ZSBlbWlucHggYmVmb3JlIHJldHVybmluZ1xuXHRcdFx0ZW1pbnB4ID0gcGFyc2VGbG9hdCggZW1pbnB4LCAxMCApO1xuXG5cdFx0XHQvLyByZXN0b3JlIHRoZSBvcmlnaW5hbCB2YWx1ZXNcblx0XHRcdGRvY0VsZW0uc3R5bGUuY3NzVGV4dCA9IG9yaWdpbmFsSFRNTENTUztcblx0XHRcdGJvZHkuc3R5bGUuY3NzVGV4dCA9IG9yaWdpbmFsQm9keUNTUztcblxuXHRcdH1cblx0XHRyZXR1cm4gZW1pbnB4IHx8IDE2O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHN0cmluZyBvZiBzaXplcyBhbmQgcmV0dXJucyB0aGUgd2lkdGggaW4gcGl4ZWxzIGFzIGEgbnVtYmVyXG5cdCAqL1xuXHRwZi5jYWxjTGlzdExlbmd0aCA9IGZ1bmN0aW9uKCBzb3VyY2VTaXplTGlzdFN0ciApIHtcblx0XHQvLyBTcGxpdCB1cCBzb3VyY2Ugc2l6ZSBsaXN0LCBpZSAoIG1heC13aWR0aDogMzBlbSApIDEwMCUsICggbWF4LXdpZHRoOiA1MGVtICkgNTAlLCAzMyVcblx0XHQvL1xuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgKG1pbi13aWR0aDozMGVtKSBjYWxjKDMwJSAtIDE1cHgpXG5cdFx0aWYgKCAhKHNvdXJjZVNpemVMaXN0U3RyIGluIHNpemVMZW5ndGhDYWNoZSkgfHwgY2ZnLnVUICkge1xuXHRcdFx0dmFyIHdpbm5pbmdMZW5ndGggPSBwZi5jYWxjTGVuZ3RoKCBwYXJzZVNpemVzKCBzb3VyY2VTaXplTGlzdFN0ciApICk7XG5cblx0XHRcdHNpemVMZW5ndGhDYWNoZVsgc291cmNlU2l6ZUxpc3RTdHIgXSA9ICF3aW5uaW5nTGVuZ3RoID8gdW5pdHMud2lkdGggOiB3aW5uaW5nTGVuZ3RoO1xuXHRcdH1cblxuXHRcdHJldHVybiBzaXplTGVuZ3RoQ2FjaGVbIHNvdXJjZVNpemVMaXN0U3RyIF07XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgY2FuZGlkYXRlIG9iamVjdCB3aXRoIGEgc3Jjc2V0IHByb3BlcnR5IGluIHRoZSBmb3JtIG9mIHVybC9cblx0ICogZXguIFwiaW1hZ2VzL3BpYy1tZWRpdW0ucG5nIDF4LCBpbWFnZXMvcGljLW1lZGl1bS0yeC5wbmcgMnhcIiBvclxuXHQgKiAgICAgXCJpbWFnZXMvcGljLW1lZGl1bS5wbmcgNDAwdywgaW1hZ2VzL3BpYy1tZWRpdW0tMngucG5nIDgwMHdcIiBvclxuXHQgKiAgICAgXCJpbWFnZXMvcGljLXNtYWxsLnBuZ1wiXG5cdCAqIEdldCBhbiBhcnJheSBvZiBpbWFnZSBjYW5kaWRhdGVzIGluIHRoZSBmb3JtIG9mXG5cdCAqICAgICAge3VybDogXCIvZm9vL2Jhci5wbmdcIiwgcmVzb2x1dGlvbjogMX1cblx0ICogd2hlcmUgcmVzb2x1dGlvbiBpcyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLTMvI3Jlc29sdXRpb24tdmFsdWVcblx0ICogSWYgc2l6ZXMgaXMgc3BlY2lmaWVkLCByZXMgaXMgY2FsY3VsYXRlZFxuXHQgKi9cblx0cGYuc2V0UmVzID0gZnVuY3Rpb24oIHNldCApIHtcblx0XHR2YXIgY2FuZGlkYXRlcztcblx0XHRpZiAoIHNldCApIHtcblxuXHRcdFx0Y2FuZGlkYXRlcyA9IHBmLnBhcnNlU2V0KCBzZXQgKTtcblxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBsZW4gPSBjYW5kaWRhdGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRzZXRSZXNvbHV0aW9uKCBjYW5kaWRhdGVzWyBpIF0sIHNldC5zaXplcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlcztcblx0fTtcblxuXHRwZi5zZXRSZXMucmVzID0gc2V0UmVzb2x1dGlvbjtcblxuXHRwZi5hcHBseVNldENhbmRpZGF0ZSA9IGZ1bmN0aW9uKCBjYW5kaWRhdGVzLCBpbWcgKSB7XG5cdFx0aWYgKCAhY2FuZGlkYXRlcy5sZW5ndGggKSB7cmV0dXJuO31cblx0XHR2YXIgY2FuZGlkYXRlLFxuXHRcdFx0aSxcblx0XHRcdGosXG5cdFx0XHRsZW5ndGgsXG5cdFx0XHRiZXN0Q2FuZGlkYXRlLFxuXHRcdFx0Y3VyU3JjLFxuXHRcdFx0Y3VyQ2FuLFxuXHRcdFx0Y2FuZGlkYXRlU3JjLFxuXHRcdFx0YWJvcnRDdXJTcmM7XG5cblx0XHR2YXIgaW1hZ2VEYXRhID0gaW1nWyBwZi5ucyBdO1xuXHRcdHZhciBkcHIgPSBwZi5EUFI7XG5cblx0XHRjdXJTcmMgPSBpbWFnZURhdGEuY3VyU3JjIHx8IGltZ1tjdXJTcmNQcm9wXTtcblxuXHRcdGN1ckNhbiA9IGltYWdlRGF0YS5jdXJDYW4gfHwgc2V0U3JjVG9DdXIoaW1nLCBjdXJTcmMsIGNhbmRpZGF0ZXNbMF0uc2V0KTtcblxuXHRcdC8vIGlmIHdlIGhhdmUgYSBjdXJyZW50IHNvdXJjZSwgd2UgbWlnaHQgZWl0aGVyIGJlY29tZSBsYXp5IG9yIGdpdmUgdGhpcyBzb3VyY2Ugc29tZSBhZHZhbnRhZ2Vcblx0XHRpZiAoIGN1ckNhbiAmJiBjdXJDYW4uc2V0ID09PSBjYW5kaWRhdGVzWyAwIF0uc2V0ICkge1xuXG5cdFx0XHQvLyBpZiBicm93c2VyIGNhbiBhYm9ydCBpbWFnZSByZXF1ZXN0IGFuZCB0aGUgaW1hZ2UgaGFzIGEgaGlnaGVyIHBpeGVsIGRlbnNpdHkgdGhhbiBuZWVkZWRcblx0XHRcdC8vIGFuZCB0aGlzIGltYWdlIGlzbid0IGRvd25sb2FkZWQgeWV0LCB3ZSBza2lwIG5leHQgcGFydCBhbmQgdHJ5IHRvIHNhdmUgYmFuZHdpZHRoXG5cdFx0XHRhYm9ydEN1clNyYyA9IChzdXBwb3J0QWJvcnQgJiYgIWltZy5jb21wbGV0ZSAmJiBjdXJDYW4ucmVzIC0gMC4xID4gZHByKTtcblxuXHRcdFx0aWYgKCAhYWJvcnRDdXJTcmMgKSB7XG5cdFx0XHRcdGN1ckNhbi5jYWNoZWQgPSB0cnVlO1xuXG5cdFx0XHRcdC8vIGlmIGN1cnJlbnQgY2FuZGlkYXRlIGlzIFwiYmVzdFwiLCBcImJldHRlclwiIG9yIFwib2theVwiLFxuXHRcdFx0XHQvLyBzZXQgaXQgdG8gYmVzdENhbmRpZGF0ZVxuXHRcdFx0XHRpZiAoIGN1ckNhbi5yZXMgPj0gZHByICkge1xuXHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjdXJDYW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFiZXN0Q2FuZGlkYXRlICkge1xuXG5cdFx0XHRjYW5kaWRhdGVzLnNvcnQoIGFzY2VuZGluZ1NvcnQgKTtcblxuXHRcdFx0bGVuZ3RoID0gY2FuZGlkYXRlcy5sZW5ndGg7XG5cdFx0XHRiZXN0Q2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgbGVuZ3RoIC0gMSBdO1xuXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRjYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBpIF07XG5cdFx0XHRcdGlmICggY2FuZGlkYXRlLnJlcyA+PSBkcHIgKSB7XG5cdFx0XHRcdFx0aiA9IGkgLSAxO1xuXG5cdFx0XHRcdFx0Ly8gd2UgaGF2ZSBmb3VuZCB0aGUgcGVyZmVjdCBjYW5kaWRhdGUsXG5cdFx0XHRcdFx0Ly8gYnV0IGxldCdzIGltcHJvdmUgdGhpcyBhIGxpdHRsZSBiaXQgd2l0aCBzb21lIGFzc3VtcHRpb25zIDstKVxuXHRcdFx0XHRcdGlmIChjYW5kaWRhdGVzWyBqIF0gJiZcblx0XHRcdFx0XHRcdChhYm9ydEN1clNyYyB8fCBjdXJTcmMgIT09IHBmLm1ha2VVcmwoIGNhbmRpZGF0ZS51cmwgKSkgJiZcblx0XHRcdFx0XHRcdGNob29zZUxvd1JlcyhjYW5kaWRhdGVzWyBqIF0ucmVzLCBjYW5kaWRhdGUucmVzLCBkcHIsIGNhbmRpZGF0ZXNbIGogXS5jYWNoZWQpKSB7XG5cblx0XHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBqIF07XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGNhbmRpZGF0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGJlc3RDYW5kaWRhdGUgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZVNyYyA9IHBmLm1ha2VVcmwoIGJlc3RDYW5kaWRhdGUudXJsICk7XG5cblx0XHRcdGltYWdlRGF0YS5jdXJTcmMgPSBjYW5kaWRhdGVTcmM7XG5cdFx0XHRpbWFnZURhdGEuY3VyQ2FuID0gYmVzdENhbmRpZGF0ZTtcblxuXHRcdFx0aWYgKCBjYW5kaWRhdGVTcmMgIT09IGN1clNyYyApIHtcblx0XHRcdFx0cGYuc2V0U3JjKCBpbWcsIGJlc3RDYW5kaWRhdGUgKTtcblx0XHRcdH1cblx0XHRcdHBmLnNldFNpemUoIGltZyApO1xuXHRcdH1cblx0fTtcblxuXHRwZi5zZXRTcmMgPSBmdW5jdGlvbiggaW1nLCBiZXN0Q2FuZGlkYXRlICkge1xuXHRcdHZhciBvcmlnV2lkdGg7XG5cdFx0aW1nLnNyYyA9IGJlc3RDYW5kaWRhdGUudXJsO1xuXG5cdFx0Ly8gYWx0aG91Z2ggdGhpcyBpcyBhIHNwZWNpZmljIFNhZmFyaSBpc3N1ZSwgd2UgZG9uJ3Qgd2FudCB0byB0YWtlIHRvbyBtdWNoIGRpZmZlcmVudCBjb2RlIHBhdGhzXG5cdFx0aWYgKCBiZXN0Q2FuZGlkYXRlLnNldC50eXBlID09PSBcImltYWdlL3N2Zyt4bWxcIiApIHtcblx0XHRcdG9yaWdXaWR0aCA9IGltZy5zdHlsZS53aWR0aDtcblx0XHRcdGltZy5zdHlsZS53aWR0aCA9IChpbWcub2Zmc2V0V2lkdGggKyAxKSArIFwicHhcIjtcblxuXHRcdFx0Ly8gbmV4dCBsaW5lIG9ubHkgc2hvdWxkIHRyaWdnZXIgYSByZXBhaW50XG5cdFx0XHQvLyBpZi4uLiBpcyBvbmx5IGRvbmUgdG8gdHJpY2sgZGVhZCBjb2RlIHJlbW92YWxcblx0XHRcdGlmICggaW1nLm9mZnNldFdpZHRoICsgMSApIHtcblx0XHRcdFx0aW1nLnN0eWxlLndpZHRoID0gb3JpZ1dpZHRoO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRwZi5nZXRTZXQgPSBmdW5jdGlvbiggaW1nICkge1xuXHRcdHZhciBpLCBzZXQsIHN1cHBvcnRzVHlwZTtcblx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcblx0XHR2YXIgc2V0cyA9IGltZyBbIHBmLm5zIF0uc2V0cztcblxuXHRcdGZvciAoIGkgPSAwOyBpIDwgc2V0cy5sZW5ndGggJiYgIW1hdGNoOyBpKysgKSB7XG5cdFx0XHRzZXQgPSBzZXRzW2ldO1xuXG5cdFx0XHRpZiAoICFzZXQuc3Jjc2V0IHx8ICFwZi5tYXRjaGVzTWVkaWEoIHNldC5tZWRpYSApIHx8ICEoc3VwcG9ydHNUeXBlID0gcGYuc3VwcG9ydHNUeXBlKCBzZXQudHlwZSApKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3VwcG9ydHNUeXBlID09PSBcInBlbmRpbmdcIiApIHtcblx0XHRcdFx0c2V0ID0gc3VwcG9ydHNUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRtYXRjaCA9IHNldDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaDtcblx0fTtcblxuXHRwZi5wYXJzZVNldHMgPSBmdW5jdGlvbiggZWxlbWVudCwgcGFyZW50LCBvcHRpb25zICkge1xuXHRcdHZhciBzcmNzZXRBdHRyaWJ1dGUsIGltYWdlU2V0LCBpc1dEZXNjcmlwb3IsIHNyY3NldFBhcnNlZDtcblxuXHRcdHZhciBoYXNQaWN0dXJlID0gcGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIlBJQ1RVUkVcIjtcblx0XHR2YXIgaW1hZ2VEYXRhID0gZWxlbWVudFsgcGYubnMgXTtcblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyYyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3JjICkge1xuXHRcdFx0aW1hZ2VEYXRhLnNyYyA9IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzcmNcIiApO1xuXHRcdFx0aWYgKCBpbWFnZURhdGEuc3JjICkge1xuXHRcdFx0XHRzZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY0F0dHIsIGltYWdlRGF0YS5zcmMgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3JjQXR0ciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyY3NldCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3Jjc2V0IHx8ICFwZi5zdXBTcmNzZXQgfHwgZWxlbWVudC5zcmNzZXQgKSB7XG5cdFx0XHRzcmNzZXRBdHRyaWJ1dGUgPSBnZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIFwic3Jjc2V0XCIgKTtcblx0XHRcdGltYWdlRGF0YS5zcmNzZXQgPSBzcmNzZXRBdHRyaWJ1dGU7XG5cdFx0XHRzcmNzZXRQYXJzZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5zZXRzID0gW107XG5cblx0XHRpZiAoIGhhc1BpY3R1cmUgKSB7XG5cdFx0XHRpbWFnZURhdGEucGljID0gdHJ1ZTtcblx0XHRcdGdldEFsbFNvdXJjZUVsZW1lbnRzKCBwYXJlbnQsIGltYWdlRGF0YS5zZXRzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3Jjc2V0ICkge1xuXHRcdFx0aW1hZ2VTZXQgPSB7XG5cdFx0XHRcdHNyY3NldDogaW1hZ2VEYXRhLnNyY3NldCxcblx0XHRcdFx0c2l6ZXM6IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzaXplc1wiIClcblx0XHRcdH07XG5cblx0XHRcdGltYWdlRGF0YS5zZXRzLnB1c2goIGltYWdlU2V0ICk7XG5cblx0XHRcdGlzV0Rlc2NyaXBvciA9IChhbHdheXNDaGVja1dEZXNjcmlwdG9yIHx8IGltYWdlRGF0YS5zcmMpICYmIHJlZ1dEZXNjLnRlc3QoaW1hZ2VEYXRhLnNyY3NldCB8fCBcIlwiKTtcblxuXHRcdFx0Ly8gYWRkIG5vcm1hbCBzcmMgYXMgY2FuZGlkYXRlLCBpZiBzb3VyY2UgaGFzIG5vIHcgZGVzY3JpcHRvclxuXHRcdFx0aWYgKCAhaXNXRGVzY3JpcG9yICYmIGltYWdlRGF0YS5zcmMgJiYgIWdldENhbmRpZGF0ZUZvclNyYyhpbWFnZURhdGEuc3JjLCBpbWFnZVNldCkgJiYgIWltYWdlU2V0LmhhczF4ICkge1xuXHRcdFx0XHRpbWFnZVNldC5zcmNzZXQgKz0gXCIsIFwiICsgaW1hZ2VEYXRhLnNyYztcblx0XHRcdFx0aW1hZ2VTZXQuY2FuZHMucHVzaCh7XG5cdFx0XHRcdFx0dXJsOiBpbWFnZURhdGEuc3JjLFxuXHRcdFx0XHRcdGQ6IDEsXG5cdFx0XHRcdFx0c2V0OiBpbWFnZVNldFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSBpZiAoIGltYWdlRGF0YS5zcmMgKSB7XG5cdFx0XHRpbWFnZURhdGEuc2V0cy5wdXNoKCB7XG5cdFx0XHRcdHNyY3NldDogaW1hZ2VEYXRhLnNyYyxcblx0XHRcdFx0c2l6ZXM6IG51bGxcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpbWFnZURhdGEuY3VyQ2FuID0gbnVsbDtcblx0XHRpbWFnZURhdGEuY3VyU3JjID0gdW5kZWZpbmVkO1xuXG5cdFx0Ly8gaWYgaW1nIGhhcyBwaWN0dXJlIG9yIHRoZSBzcmNzZXQgd2FzIHJlbW92ZWQgb3IgaGFzIGEgc3Jjc2V0IGFuZCBkb2VzIG5vdCBzdXBwb3J0IHNyY3NldCBhdCBhbGxcblx0XHQvLyBvciBoYXMgYSB3IGRlc2NyaXB0b3IgKGFuZCBkb2VzIG5vdCBzdXBwb3J0IHNpemVzKSBzZXQgc3VwcG9ydCB0byBmYWxzZSB0byBldmFsdWF0ZVxuXHRcdGltYWdlRGF0YS5zdXBwb3J0ZWQgPSAhKCBoYXNQaWN0dXJlIHx8ICggaW1hZ2VTZXQgJiYgIXBmLnN1cFNyY3NldCApIHx8IChpc1dEZXNjcmlwb3IgJiYgIXBmLnN1cFNpemVzKSApO1xuXG5cdFx0aWYgKCBzcmNzZXRQYXJzZWQgJiYgcGYuc3VwU3Jjc2V0ICYmICFpbWFnZURhdGEuc3VwcG9ydGVkICkge1xuXHRcdFx0aWYgKCBzcmNzZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdHNldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3Jjc2V0QXR0ciwgc3Jjc2V0QXR0cmlidXRlICk7XG5cdFx0XHRcdGVsZW1lbnQuc3Jjc2V0ID0gXCJcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3Jjc2V0QXR0ciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpbWFnZURhdGEuc3VwcG9ydGVkICYmICFpbWFnZURhdGEuc3Jjc2V0ICYmICgoIWltYWdlRGF0YS5zcmMgJiYgZWxlbWVudC5zcmMpIHx8ICBlbGVtZW50LnNyYyAhPT0gcGYubWFrZVVybChpbWFnZURhdGEuc3JjKSkpIHtcblx0XHRcdGlmIChpbWFnZURhdGEuc3JjID09PSBudWxsKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zcmMgPSBpbWFnZURhdGEuc3JjO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5wYXJzZWQgPSB0cnVlO1xuXHR9O1xuXG5cdHBmLmZpbGxJbWcgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG5cdFx0dmFyIGltYWdlRGF0YTtcblx0XHR2YXIgZXh0cmVtZSA9IG9wdGlvbnMucmVzZWxlY3QgfHwgb3B0aW9ucy5yZWV2YWx1YXRlO1xuXG5cdFx0Ly8gZXhwYW5kbyBmb3IgY2FjaGluZyBkYXRhIG9uIHRoZSBpbWdcblx0XHRpZiAoICFlbGVtZW50WyBwZi5ucyBdICkge1xuXHRcdFx0ZWxlbWVudFsgcGYubnMgXSA9IHt9O1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YSA9IGVsZW1lbnRbIHBmLm5zIF07XG5cblx0XHQvLyBpZiB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZCwgc2tpcCBpdFxuXHRcdC8vIHVubGVzcyBgb3B0aW9ucy5yZWV2YWx1YXRlYCBpcyBzZXQgdG8gdHJ1ZSAoIHRoaXMsIGZvciBleGFtcGxlLFxuXHRcdC8vIGlzIHNldCB0byB0cnVlIHdoZW4gcnVubmluZyBgcGljdHVyZWZpbGxgIG9uIGByZXNpemVgICkuXG5cdFx0aWYgKCAhZXh0cmVtZSAmJiBpbWFnZURhdGEuZXZhbGVkID09PSBldmFsSWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCAhaW1hZ2VEYXRhLnBhcnNlZCB8fCBvcHRpb25zLnJlZXZhbHVhdGUgKSB7XG5cdFx0XHRwZi5wYXJzZVNldHMoIGVsZW1lbnQsIGVsZW1lbnQucGFyZW50Tm9kZSwgb3B0aW9ucyApO1xuXHRcdH1cblxuXHRcdGlmICggIWltYWdlRGF0YS5zdXBwb3J0ZWQgKSB7XG5cdFx0XHRhcHBseUJlc3RDYW5kaWRhdGUoIGVsZW1lbnQgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW1hZ2VEYXRhLmV2YWxlZCA9IGV2YWxJZDtcblx0XHR9XG5cdH07XG5cblx0cGYuc2V0dXBSdW4gPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoICFhbHJlYWR5UnVuIHx8IGlzVndEaXJ0eSB8fCAoRFBSICE9PSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykgKSB7XG5cdFx0XHR1cGRhdGVNZXRyaWNzKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIElmIHBpY3R1cmUgaXMgc3VwcG9ydGVkLCB3ZWxsLCB0aGF0J3MgYXdlc29tZS5cblx0aWYgKCBwZi5zdXBQaWN0dXJlICkge1xuXHRcdHBpY3R1cmVmaWxsID0gbm9vcDtcblx0XHRwZi5maWxsSW1nID0gbm9vcDtcblx0fSBlbHNlIHtcblxuXHRcdCAvLyBTZXQgdXAgcGljdHVyZSBwb2x5ZmlsbCBieSBwb2xsaW5nIHRoZSBkb2N1bWVudFxuXHRcdChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc0RvbVJlYWR5O1xuXHRcdFx0dmFyIHJlZ1JlYWR5ID0gd2luZG93LmF0dGFjaEV2ZW50ID8gL2QkfF5jLyA6IC9kJHxeY3xeaS87XG5cblx0XHRcdHZhciBydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlIHx8IFwiXCI7XG5cblx0XHRcdFx0dGltZXJJZCA9IHNldFRpbWVvdXQocnVuLCByZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIiA/IDIwMCA6ICA5OTkpO1xuXHRcdFx0XHRpZiAoIGRvY3VtZW50LmJvZHkgKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoKTtcblx0XHRcdFx0XHRpc0RvbVJlYWR5ID0gaXNEb21SZWFkeSB8fCByZWdSZWFkeS50ZXN0KHJlYWR5U3RhdGUpO1xuXHRcdFx0XHRcdGlmICggaXNEb21SZWFkeSApIHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCggdGltZXJJZCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgdGltZXJJZCA9IHNldFRpbWVvdXQocnVuLCBkb2N1bWVudC5ib2R5ID8gOSA6IDk5KTtcblxuXHRcdFx0Ly8gQWxzbyBhdHRhY2ggcGljdHVyZWZpbGwgb24gcmVzaXplIGFuZCByZWFkeXN0YXRlY2hhbmdlXG5cdFx0XHQvLyBodHRwOi8vbW9kZXJuamF2YXNjcmlwdC5ibG9nc3BvdC5jb20vMjAxMy8wOC9idWlsZGluZy1iZXR0ZXItZGVib3VuY2UuaHRtbFxuXHRcdFx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuXHRcdFx0XHR2YXIgdGltZW91dCwgdGltZXN0YW1wO1xuXHRcdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgbGFzdCA9IChuZXcgRGF0ZSgpKSAtIHRpbWVzdGFtcDtcblxuXHRcdFx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0XHRmdW5jKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0XHRcdFx0aWYgKCF0aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHRcdHZhciBsYXN0Q2xpZW50V2lkdGggPSBkb2NFbGVtLmNsaWVudEhlaWdodDtcblx0XHRcdHZhciBvblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpc1Z3RGlydHkgPSBNYXRoLm1heCh3aW5kb3cuaW5uZXJXaWR0aCB8fCAwLCBkb2NFbGVtLmNsaWVudFdpZHRoKSAhPT0gdW5pdHMud2lkdGggfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgIT09IGxhc3RDbGllbnRXaWR0aDtcblx0XHRcdFx0bGFzdENsaWVudFdpZHRoID0gZG9jRWxlbS5jbGllbnRIZWlnaHQ7XG5cdFx0XHRcdGlmICggaXNWd0RpcnR5ICkge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdG9uKCB3aW5kb3csIFwicmVzaXplXCIsIGRlYm91bmNlKG9uUmVzaXplLCA5OSApICk7XG5cdFx0XHRvbiggZG9jdW1lbnQsIFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBydW4gKTtcblx0XHR9KSgpO1xuXHR9XG5cblx0cGYucGljdHVyZWZpbGwgPSBwaWN0dXJlZmlsbDtcblx0Ly91c2UgdGhpcyBpbnRlcm5hbGx5IGZvciBlYXN5IG1vbmtleSBwYXRjaGluZy9wZXJmb3JtYW5jZSB0ZXN0aW5nXG5cdHBmLmZpbGxJbWdzID0gcGljdHVyZWZpbGw7XG5cdHBmLnRlYXJkb3duUnVuID0gbm9vcDtcblxuXHQvKiBleHBvc2UgbWV0aG9kcyBmb3IgdGVzdGluZyAqL1xuXHRwaWN0dXJlZmlsbC5fID0gcGY7XG5cblx0d2luZG93LnBpY3R1cmVmaWxsQ0ZHID0ge1xuXHRcdHBmOiBwZixcblx0XHRwdXNoOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHR2YXIgbmFtZSA9IGFyZ3Muc2hpZnQoKTtcblx0XHRcdGlmICh0eXBlb2YgcGZbbmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRwZltuYW1lXS5hcHBseShwZiwgYXJncyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjZmdbbmFtZV0gPSBhcmdzWzBdO1xuXHRcdFx0XHRpZiAoYWxyZWFkeVJ1bikge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCB7IHJlc2VsZWN0OiB0cnVlIH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHR3aGlsZSAoc2V0T3B0aW9ucyAmJiBzZXRPcHRpb25zLmxlbmd0aCkge1xuXHRcdHdpbmRvdy5waWN0dXJlZmlsbENGRy5wdXNoKHNldE9wdGlvbnMuc2hpZnQoKSk7XG5cdH1cblxuXHQvKiBleHBvc2UgcGljdHVyZWZpbGwgKi9cblx0d2luZG93LnBpY3R1cmVmaWxsID0gcGljdHVyZWZpbGw7XG5cblx0LyogZXhwb3NlIHBpY3R1cmVmaWxsICovXG5cdGlmICggdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Ly8gQ29tbW9uSlMsIGp1c3QgZXhwb3J0XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBwaWN0dXJlZmlsbDtcblx0fSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cdFx0Ly8gQU1EIHN1cHBvcnRcblx0XHRkZWZpbmUoIFwicGljdHVyZWZpbGxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBwaWN0dXJlZmlsbDsgfSApO1xuXHR9XG5cblx0Ly8gSUU4IGV2YWxzIHRoaXMgc3luYywgc28gaXQgbXVzdCBiZSB0aGUgbGFzdCB0aGluZyB3ZSBkb1xuXHRpZiAoICFwZi5zdXBQaWN0dXJlICkge1xuXHRcdHR5cGVzWyBcImltYWdlL3dlYnBcIiBdID0gZGV0ZWN0VHlwZVN1cHBvcnQoXCJpbWFnZS93ZWJwXCIsIFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmtvQUFBQlhSVUpRVmxBNFdBb0FBQUFRQUFBQUFBQUFBQUFBUVV4UVNBd0FBQUFCQnhBUi9ROUVSUDhEQUFCV1VEZ2dHQUFBQURBQkFKMEJLZ0VBQVFBREFEUWxwQUFEY0FEKysvMVFBQT09XCIgKTtcblx0fVxuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQgKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyohXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiBJY29Nb29uLmlvXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vS2V5YW1vb24vc3ZneHVzZVxuICogQHZlcnNpb24gICAxLjEuMTdcbiAqL1xuLypqc2xpbnQgYnJvd3NlcjogdHJ1ZSAqL1xuLypnbG9iYWwgWERvbWFpblJlcXVlc3QsIE11dGF0aW9uT2JzZXJ2ZXIsIHdpbmRvdyAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBob2xkcyB4aHIgb2JqZWN0cyB0byBwcmV2ZW50IG11bHRpcGxlIHJlcXVlc3RzXG4gICAgICAgIHZhciBjaGVja1VzZUVsZW1zLFxuICAgICAgICAgICAgdGlkOyAvLyB0aW1lb3V0IGlkXG4gICAgICAgIHZhciBkZWJvdW5jZWRDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aWQpO1xuICAgICAgICAgICAgdGlkID0gc2V0VGltZW91dChjaGVja1VzZUVsZW1zLCAxMDApO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlZENoZWNrLCBmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihkZWJvdW5jZWRDaGVjayk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCBkZWJvdW5jZWRDaGVjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZGVib3VuY2VkQ2hlY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgY3JlYXRlUmVxdWVzdCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgIC8vIEluIElFIDksIGNyb3NzIGRvbWFpbiByZXF1ZXN0cyBjYW4gb25seSBiZSBzZW50IHVzaW5nIFhEb21haW5SZXF1ZXN0LlxuICAgICAgICAgICAgLy8gWERvbWFpblJlcXVlc3Qgd291bGQgZmFpbCBpZiBDT1JTIGhlYWRlcnMgYXJlIG5vdCBzZXQuXG4gICAgICAgICAgICAvLyBUaGVyZWZvcmUsIFhEb21haW5SZXF1ZXN0IHNob3VsZCBvbmx5IGJlIHVzZWQgd2l0aCBjcm9zcyBkb21haW4gcmVxdWVzdHMuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRIb3N0bmFtZShocmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgYS5ocmVmID0gaHJlZjtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5ob3N0bmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBSZXF1ZXN0O1xuICAgICAgICAgICAgdmFyIGhuYW1lID0gbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgICAgICAgICB2YXIgaG5hbWUyO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBobmFtZTIgPSBnZXRIb3N0bmFtZSh1cmwpO1xuICAgICAgICAgICAgICAgIGlmIChSZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9PT0gdW5kZWZpbmVkICYmIGhuYW1lMiAhPT0gJycgJiYgaG5hbWUyICE9PSBobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gWERvbWFpblJlcXVlc3QgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVxdWVzdDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG4gICAgICAgIGNoZWNrVXNlRWxlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmFzZSxcbiAgICAgICAgICAgICAgICBiY3IsXG4gICAgICAgICAgICAgICAgZmFsbGJhY2sgPSAnJywgLy8gb3B0aW9uYWwgZmFsbGJhY2sgVVJMIGluIGNhc2Ugbm8gYmFzZSBwYXRoIHRvIFNWRyBmaWxlIHdhcyBnaXZlbiBhbmQgbm8gc3ltYm9sIGRlZmluaXRpb24gd2FzIGZvdW5kLlxuICAgICAgICAgICAgICAgIGhhc2gsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBpblByb2dyZXNzQ291bnQgPSAwLFxuICAgICAgICAgICAgICAgIGlzSGlkZGVuLFxuICAgICAgICAgICAgICAgIFJlcXVlc3QsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHVzZXMsXG4gICAgICAgICAgICAgICAgeGhyO1xuICAgICAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZUlmRG9uZSgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBkb25lIHdpdGggbWFraW5nIGNoYW5nZXMsIHN0YXJ0IHdhdGNoaW5nIGZvciBjaGFnbmVzIGluIERPTSBhZ2FpblxuICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgIGlmIChpblByb2dyZXNzQ291bnQgPT09IDApIHsgLy8gaWYgYWxsIHhocnMgd2VyZSByZXNvbHZlZFxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlQ2hhbmdlcygpOyAvLyB3YXRjaCBmb3IgY2hhbmdlcyB0byBET01cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhdHRyVXBkYXRlRnVuYyhzcGVjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlW3NwZWMuYmFzZV0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWMudXNlRWwuc2V0QXR0cmlidXRlTlMoeGxpbmtOUywgJ3hsaW5rOmhyZWYnLCAnIycgKyBzcGVjLmhhc2gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9ubG9hZEZ1bmMoeGhyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3gnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN2ZztcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHguaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgc3ZnID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3ZnJylbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKHN2ZywgYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uRXJyb3JUaW1lb3V0KHhocikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVJZkRvbmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW5vYnNlcnZlQ2hhbmdlcygpOyAvLyBzdG9wIHdhdGNoaW5nIGZvciBjaGFuZ2VzIHRvIERPTVxuICAgICAgICAgICAgLy8gZmluZCBhbGwgdXNlIGVsZW1lbnRzXG4gICAgICAgICAgICB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VzZScpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBiY3IgPSB1c2VzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsZWQgdG8gZ2V0IGJvdW5kaW5nIHJlY3RhbmdsZSBvZiB0aGUgdXNlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgYmNyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVybCA9IHVzZXNbaV0uZ2V0QXR0cmlidXRlTlMoeGxpbmtOUywgJ2hyZWYnKS5zcGxpdCgnIycpO1xuICAgICAgICAgICAgICAgIGJhc2UgPSB1cmxbMF07XG4gICAgICAgICAgICAgICAgaGFzaCA9IHVybFsxXTtcbiAgICAgICAgICAgICAgICBpc0hpZGRlbiA9IGJjciAmJiBiY3IubGVmdCA9PT0gMCAmJiBiY3IucmlnaHQgPT09IDAgJiYgYmNyLnRvcCA9PT0gMCAmJiBiY3IuYm90dG9tID09PSAwO1xuICAgICAgICAgICAgICAgIGlmIChiY3IgJiYgYmNyLndpZHRoID09PSAwICYmIGJjci5oZWlnaHQgPT09IDAgJiYgIWlzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1c2UgZWxlbWVudCBpcyBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHJlZmVyZW5jZSB0byBhbiBleHRlcm5hbCBTVkcsIHRyeSB0byBmZXRjaCBpdFxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIG9wdGlvbmFsIGZhbGxiYWNrIFVSTCBpZiB0aGVyZSBpcyBubyByZWZlcmVuY2UgdG8gYW4gZXh0ZXJuYWwgU1ZHXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWxsYmFjayAmJiAhYmFzZS5sZW5ndGggJiYgaGFzaCAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UgPSBmYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlIHVwZGF0aW5nIHhsaW5rOmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IGNhY2hlW2Jhc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhociAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRydWUgc2lnbmlmaWVzIHRoYXQgcHJlcGVuZGluZyB0aGUgU1ZHIHdhcyBub3QgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGF0dHJVcGRhdGVGdW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRWw6IHVzZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdChiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IG5ldyBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2Jhc2VdID0geGhyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gb25sb2FkRnVuYyh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IG9uRXJyb3JUaW1lb3V0KHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBvbkVycm9yVGltZW91dCh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3NDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVtiYXNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhpcyBVUkwgaWYgdGhlIHVzZSBlbGVtZW50IHdhcyBub3QgZW1wdHkgYW5kIG5vIHJlcXVlc3Qgd2FzIHNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhY2hlW2Jhc2VdLm9ubG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0IHR1cm5zIG91dCB0aGF0IHByZXBlbmRpbmcgdGhlIFNWRyBpcyBub3QgbmVjZXNzYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFib3J0IHRoZSBpbi1wcm9ncmVzcyB4aHIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVtiYXNlXS5vbmxvYWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVbYmFzZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXNlcyA9ICcnO1xuICAgICAgICAgICAgaW5Qcm9ncmVzc0NvdW50ICs9IDE7XG4gICAgICAgICAgICBvYnNlcnZlSWZEb25lKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFRoZSBsb2FkIGV2ZW50IGZpcmVzIHdoZW4gYWxsIHJlc291cmNlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcsIHdoaWNoIGFsbG93cyBkZXRlY3Rpbmcgd2hldGhlciBTVkcgdXNlIGVsZW1lbnRzIGFyZSBlbXB0eS5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiB3aW5Mb2FkKCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB3aW5Mb2FkLCBmYWxzZSk7IC8vIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAgICAgICAgICB0aWQgPSBzZXRUaW1lb3V0KGNoZWNrVXNlRWxlbXMsIDApO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxufSgpKTtcbiIsImltcG9ydCBmb250cyBmcm9tICcuL21vZHVsZXMvZm9udHMnO1xuaW1wb3J0IG5hdiBmcm9tICcuL21vZHVsZXMvbmF2JztcbmltcG9ydCBnYWxsZXJ5IGZyb20gJy4vbW9kdWxlcy9nYWxsZXJ5JztcbmltcG9ydCBoaWdobGlnaHQgZnJvbSAnLi9tb2R1bGVzL2hpZ2hsaWdodCc7XG5pbXBvcnQgc291cmNlY29kZSBmcm9tICcuL21vZHVsZXMvc291cmNlY29kZSc7XG5pbXBvcnQgc2VjdGlvbmNoYW5nZSBmcm9tICcuL21vZHVsZXMvc2VjdGlvbmNoYW5nZSc7XG5pbXBvcnQgd2VsY29tZSBmcm9tICcuL21vZHVsZXMvd2VsY29tZSc7XG5cbi8vIGltcG9ydCBhbnkgcG9seWZpbGxzIGFuZCBvdGhlciBsaWJzIHlvdSB3YW50IHRvIHVzZSBpbiBvbGRlciBicm93c2VycyBoZXJlXG5pbXBvcnQgJ3N2Z3h1c2UnO1xuaW1wb3J0ICdwaWN0dXJlZmlsbCc7XG5cbi8vIGxldHMgY2hlY2sgaWYgd2UgaGF2ZSBhIG1vZGVybiBicm93c2VyLCBhbmQgdGhlbiwgZW5oYW5jZSFcbi8vIEVkZ2UsIEZpcmVmb3gsIENocm9tZSwgT3BlcmEgYXMgd2VsbCBhcyBJRTEwKywgaU9TNysgYW5kIEFuZHJvaWQgNC40K1xuaWYgKCd2aXNpYmlsaXR5U3RhdGUnIGluIGRvY3VtZW50KSB7XG4gIC8vIHJlbW92ZSB0aGUgbm8tanMgY2xhc3NcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5cbiAgLy8gbG9hZCBhbGwgbW9kdWxlc1xuICBmb250cygpO1xuICBuYXYoKTtcbiAgZ2FsbGVyeSgpO1xuICBoaWdobGlnaHQoKTtcbiAgc2VjdGlvbmNoYW5nZSgpO1xuICBzb3VyY2Vjb2RlKCk7XG4gIHdlbGNvbWUoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IChsaW5rKSA9PiB7XG4gIC8vIHRoaXMgYWRkcyBhIGRlbGF5IHRvIHRoZSBzZWN0aW9uLWNoYW5nZSBjbGljay1hY3Rpb24sXG4gIC8vIGZha2luZyBhIHNsaWRlIHRyYW5zaXRpb24gYnkgYWRkaW5nIHRoZSAtLWNoYW5nZSBjbGFzc1xuXG4gIGxpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1zZWN0aW9uLS1jaGFuZ2UnKTtcblxuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICB9LCAzMDApOyAvLyBhbmltYXRpb24gaXMgNDAwbXMsIHNvIHdhaXQgMzAwbXNcbn07XG4iLCJpbXBvcnQgT2JzZXJ2ZXIgZnJvbSAnZm9udGZhY2VvYnNlcnZlcic7XG5pbXBvcnQgcHJvbWlzZXNQb2x5ZmlsbCBmcm9tICdlczYtcHJvbWlzZSc7XG5pbXBvcnQgc2hhcmVkIGZyb20gJy4uL3NoYXJlZGNvbmZpZyc7XG5cbmNvbnN0IGZvbnRDb25maWcgPSBzaGFyZWRbJ2ZvbnQtY29uZmlnJ107XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgZm9udE9ic2VydmVycyA9IFtdO1xuXG4gIC8vIGdldCBldmVyeSBmb250IGZyb20gdGhlIHNoYXJlZGNvbmZpZywgY2hlY2sgaWYgZm9udGZhY2UgaXMgbmVlZGVkXG4gIC8vIGFuZCBhZGQgYSBuZXcgZmYtb2JzZXJ2ZXIgd2hpY2ggbGF0ZXIgd2lsbCBiZSBoYW5kbGVkIHdpdGggUHJvbWlzZS5hbGxcbiAgT2JqZWN0LmtleXMoZm9udENvbmZpZykuZm9yRWFjaCgoZm9udCkgPT4ge1xuICAgIGlmIChmb250Q29uZmlnW2ZvbnRdLmZvbnRmYWNlKSB7XG4gICAgICBmb250T2JzZXJ2ZXJzLnB1c2goXG4gICAgICAgIG5ldyBPYnNlcnZlcihmb250Q29uZmlnW2ZvbnRdLmZhbWlseS5yZXBsYWNlKC8nL2csICcnKSwge1xuICAgICAgICAgIHdlaWdodDogZm9udENvbmZpZ1tmb250XS53ZWlnaHQsXG4gICAgICAgICAgc3R5bGU6IGZvbnRDb25maWdbZm9udF0uc3R5bGVcbiAgICAgICAgfSkuY2hlY2soKVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmb250T2JzZXJ2ZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgcHJvbWlzZXNQb2x5ZmlsbC5wb2x5ZmlsbCgpOyAvLyBmb3Igc3R1cGlkIGJyb3dzZXJzLCBwb2x5ZmlsbCBwcm9taXNlc1xuXG4gICAgUHJvbWlzZS5hbGwoZm9udE9ic2VydmVycylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgbGlnaHRib3ggZnJvbSAnYmFndWV0dGVib3guanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGxpZ2h0Ym94LnJ1bignLmpzLWdhbGxlcnknKTtcbn07XG4iLCJpbXBvcnQgbG9hZCBmcm9tICdmZy1sb2FkanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHByZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xuXG4gIC8vIGlmIHRoZXJlIGFyZSBhbnkgcHJlLWVsZW1lbnRzIG9uIHRoZSBwYWdlLCBsb2FkIHRoZSBjb2RlLWhpZ2hsaWdodGluZ1xuICAvLyBwbHVnaW4gd2l0aCBmaWxhbWVudGdyb3VwcyBsb2FkLWpzLCBhbmQgdGhlbiBleGVjdXRlIGl0IG9uIGV2ZXJ5IHByZVxuICBpZiAocHJlLmxlbmd0aCA+IDApIHtcbiAgICAvLyBsb2FkIHRoZSBoaWdobGlnaHQganNcbiAgICBsb2FkKCcvYXNzZXRzL2pzL2hpZ2hsaWdodC5taW4uanMnLCAoKSA9PiB7XG4gICAgICBbIC4uLnByZSBdLmZvckVhY2goKGNvZGVibG9jaykgPT4ge1xuICAgICAgICB3aW5kb3cuaGxqcy5oaWdobGlnaHRCbG9jayhjb2RlYmxvY2spO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgc2hhcmVkIGZyb20gJy4uL3NoYXJlZGNvbmZpZyc7XG5cbmNvbnN0IGJyZWFrcG9pbnRzID0gc2hhcmVkLmJyZWFrcG9pbnRzO1xuXG4vLyBzYW1lIHVzYWdlIGFzIHRoZSBtZWRpYXF1ZXJ5LXNjc3MtbWl4aW4sIGp1c3Rcbi8vIHByb3ZpZGUgdGhlIHNob3J0Y29kZSB1c2VkIGluIHRoZSBzY3NzLWZpbGUgYW5kIGlmIGl0XG4vLyBpcyBhIGN1c3RvbSBxdWVyeS4gdGhpcyBtb2R1bGUgcmV0dXJuIHRydWUgaWYgdGhlXG4vLyBnaXZlbiBicmVha3BvaW50IG1hdGNoZXMgb3IgZmFsc2UgaWYgaXQgZG9lc250XG5cbmV4cG9ydCBkZWZhdWx0IChzaG9ydGNvZGUsIGN1c3RvbSA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gYnJlYWtwb2ludHNbc2hvcnRjb2RlXTtcbiAgbGV0IHF1ZXJ5ID0gJyc7XG5cbiAgaWYgKGN1c3RvbSkge1xuICAgIC8vIGlmIHdlIGhhdmUgYSBjdXN0b20gcXVlcnksIHVzZSAnYXMgaXMnLCByZW1vdmUgcXVvdGVzXG4gICAgcXVlcnkgPSBicmVha3BvaW50c1tzaG9ydGNvZGVdLnJlcGxhY2UoLycvZywgJycpO1xuXG4gIH0gZWxzZSBpZiAodmFsdWUubWF0Y2goJ3B4JykpIHtcbiAgICAvLyB3ZSBoYXZlIHRoZSBkZWZhdWx0IG1pbi13aWR0aFxuICAgIC8vIGNvbnZlcnQgdG8gZW0tdmFsdWUgaWYgaXQgaXMgYSBwaXhlbC12YWx1ZVxuICAgIGNvbnN0IHB4VmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgY29uc3QgZW1WYWx1ZSA9IHB4VmFsdWUgLyAxNjtcblxuICAgIHF1ZXJ5ID0gYChtaW4td2lkdGg6ICR7ZW1WYWx1ZX1lbSlgO1xuXG4gIH0gZWxzZSB7IC8vIHVzZSB0aGUgdmFsdWUgYXMgaXQgaXNcbiAgICBxdWVyeSA9IGAobWluLXdpZHRoOiAke3ZhbHVlfSlgO1xuICB9XG5cbiAgLy8gcmV0dXJuIHRoZSBtYXRjaGVzIGJvb2xlYW5cbiAgcmV0dXJuICh3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcyk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbmF2Jyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2dnbGUtbmF2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1oZWFkZXInKTtcblxuICAvLyBuYXZpZ2F0aW9uIGJ1dHRvbiBvbiBjbGljaywgYmFzaWMgdG9nZ2xpbmcgb2YgY2xhc3Nlc1xuICBpZiAoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdi0tYWN0aXZlJyk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1uYXYtLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IG1xIGZyb20gJy4vbWVkaWFxdWVyeSc7XG5pbXBvcnQgY2xpY2tzZWN0aW9uIGZyb20gJy4vY2xpY2tzZWN0aW9uJztcblxuY29uc3Qgc2VjdGlvbkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNlY3Rpb25jaGFuZ2UnKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW5hdl9fbGluaycpO1xuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wYWdlJyk7XG5cbi8vIHNpbXVsYXRlIHNlY3Rpb25jaGFuZ2UgZm9yIG5hdmlnYXRpb24gY2xpY2tzIG9uIGxhcmdlIGRpc3BsYXlzXG4vLyBidXQgb25seSBpZiB3ZSBhcmUgb24gY29udGFjdC93b3JrL2Jsb2cvbGVnYWwtbm90aWNlIHBhZ2VzXG5jb25zdCBjaGFuZ2VTZWN0aW9ucyA9IChtcSgneGwnKSAmJiAoXG4gIHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLS13b3JrJykgfHxcbiAgcGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2UtLWNvbnRhY3QnKSB8fFxuICBwYWdlLmNsYXNzTGlzdC5jb250YWlucygncGFnZS0tYmxvZycpIHx8XG4gIHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLS1sZWdhbC1ub3RpY2UnKVxuKSk7XG5cbmNvbnN0IG1lbnVDbGljayA9IChsaW5rKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICBjb25zdCBzZWN0aW9ucyA9IFsgJ3dvcmsnLCAnZmFrZScsICdibG9nJywgJ2NvbnRhY3QnIF07XG4gIGxldCBzZWN0aW9uTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saW5rLXNlY3Rpb24tLSR7dGFyZ2V0fWApO1xuXG4gIC8vIGlmIHRoZSBzZWN0aW9uY2hhbmdlIGxpbmsgZG9lcyBub3QgZXhpc3QsIHRoZSBtb2RpZnkgdGhlIG9uZSBleGlzdGluZ1xuICAvLyBhbmQgY2hhbmdlIGNvbG9yICsgdGFyZ2V0XG4gIGlmICghc2VjdGlvbkxpbmspIHtcbiAgICBzZWN0aW9uTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLXNlY3Rpb24nKTtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWMpID0+IHtcbiAgICAgIHNlY3Rpb25MaW5rLmNsYXNzTGlzdC5yZW1vdmUoYGxpbmstc2VjdGlvbi0tJHtzZWN9YCk7XG4gICAgfSk7XG4gICAgc2VjdGlvbkxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgc2VjdGlvbkxpbmsuY2xhc3NMaXN0LmFkZChgbGluay1zZWN0aW9uLS0ke3RhcmdldH1gKTtcbiAgfVxuXG4gIGNsaWNrc2VjdGlvbihzZWN0aW9uTGluayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIGFsd2F5cyBhcHBseSB0aGlzIGV2ZW50IHRvIGFsbCB0aGUgc2VjdGlvbmxpbmtzXG4gIFsgLi4uc2VjdGlvbkxpbmtzIF0uZm9yRWFjaCgoc2VjdGlvbkxpbmspID0+IHtcbiAgICBzZWN0aW9uTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjbGlja3NlY3Rpb24oc2VjdGlvbkxpbmspO1xuICAgIH0sIGZhbHNlKTtcbiAgfSk7XG5cbiAgLy8gYW5kIHRvIHRoZSBtZW51IGxpbmtzIGlmIG5lZWRlZFxuICBpZiAoY2hhbmdlU2VjdGlvbnMpIHtcbiAgICBbIC4uLmxpbmtzIF0uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbWVudUNsaWNrKGxpbmspO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgaGlnaGxpZ2h0IGZyb20gJy4vaGlnaGxpZ2h0JztcblxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jb2RlJyk7XG5cbmNvbnN0IGhpZGVXZWxjb21lID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utd2VsY29tZScpLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG59O1xuXG5jb25zdCBpbmplY3RTb3VyY2Vib3ggPSAoaHRtbCkgPT4ge1xuICBjb25zdCBzb3VyY2Vib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBzb3VyY2Vib3guY2xhc3NMaXN0LmFkZCgnc291cmNlYm94Jyk7XG4gIHNvdXJjZWJveC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInNvdXJjZWJveF9faW5uZXJcIj5cbiAgICAgIDxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1odG1sIGpzLXNvdXJjZWJveFwiPjwvY29kZT48L3ByZT5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNvdXJjZWJveCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zb3VyY2Vib3gnKS50ZXh0Q29udGVudCA9IGh0bWw7XG4gIGhpZ2hsaWdodCgpO1xuICBoaWRlV2VsY29tZSgpO1xufTtcblxuY29uc3QgYnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IHNvdXJjZWJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2Vib3gnKTtcblxuICAvLyBnZXQgdGhlIHNvdXJjZWNvZGUgZm9yIHRoZSBwYWdlLCBpZiBpdCBpcyBub3QgYWxyZWFkeSBzaG93biwgdmlhIGFqYXhcbiAgaWYgKCFzb3VyY2Vib3gpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uIGFqYXhDYWxsICgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgaW5qZWN0U291cmNlYm94KHRoaXMucmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1ZXN0LnNlbmQoKTtcblxuICB9IGVsc2UgeyAvLyByZW1vdmUgdGhlIHNvdXJjZWJveFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc291cmNlYm94KTtcbiAgfVxufTtcblxuXG4vLyBzZXQgdGhlIGNsaWNrIGV2ZW50cywgaWYgdGhlIGNvZGUgYnV0dG9uIGlzIGNsaWNrZWQsIHNob3dcbi8vIHRoZSBzb3VyY2Vjb2RlIG9mIHRoZSBwYWdlLCBqdXN0IGEgc21hbGwgZ2ltbWljayA7KVxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBbIC4uLmJ1dHRvbnMgXS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidXR0b25DbGljayk7XG4gIH0pO1xufTtcbiIsImNvbnN0IGNsb3NlV2VsY29tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS13ZWxjb21lJyk7XG5cbmNvbnN0IHdlbGNvbWVEb25lID0gKCkgPT4ge1xuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXdlbGNvbWUnKS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lLS1kb25lJyk7XG4gIH0sIDgwMCk7IC8vIGFuaW1hdGlvbiB0aW1lIGlzIDcwMG1zXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIHNldCB0aGUgZXZlbnQgdG8gdGhlIGVzYy1rZXkgdG8gZGlzbWlzcyBzcGxhc2ggaW50cm9cbiAgZG9jdW1lbnQub25rZXlkb3duID0gKGUpID0+IHtcbiAgICBjb25zdCBldmVudCA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGNvbnN0IGlzSG9tZXBhZ2UgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2l0ZS0taG9tZXBhZ2UnKTtcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyAmJiBpc0hvbWVwYWdlICYmIGNsb3NlV2VsY29tZSkge1xuICAgICAgY2xvc2VXZWxjb21lLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICB3ZWxjb21lRG9uZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyByZW1vdmUgdGhlIHRyYW5zaXRpb24gYWZ0ZXIgaXQgY2hhbmdlZFxuICBpZiAoY2xvc2VXZWxjb21lKSB7XG4gICAgY2xvc2VXZWxjb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHdlbGNvbWVEb25lKTtcbiAgICBjbG9zZVdlbGNvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3ZWxjb21lRG9uZSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cz17IFwidmVyc2lvblwiOiBcIjMuMC4wXCIsXCJoYXNoXCI6IDY0OTIwNzc3LFxuXCJicmVha3BvaW50c1wiOiB7XG4gIFwic1wiOiBcIjQ4MHB4XCIsXG4gIFwibVwiOiBcIjY0MHB4XCIsXG4gIFwibFwiOiBcIjcyMHB4XCIsXG4gIFwieGxcIjogXCI5NjBweFwiLFxuICBcInh4bFwiOiBcIjExMDBweFwiLFxuICBcInh4eGxcIjogXCIxMjUwcHhcIixcbiAgXCJ4eHh4bFwiOiBcIjE2MDBweFwiLCAgXCJtaW5oZWlnaHRcIjogXCInKG1pbi1oZWlnaHQ6IDQ4MHB4KSdcIlxufSxcblwiZm9udC1jb25maWdcIjoge1xuICBcImRlZmF1bHRcIjoge1xuICAgIFwiZmFtaWx5XCI6IFwiJ0dlb21hbmlzdCdcIixcbiAgICBcImZhbGxiYWNrXCI6IFwiJ0hlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXCIsXG4gICAgXCJ3ZWlnaHRcIjogNjAwLFxuICAgIFwic3R5bGVcIjogXCJub3JtYWxcIixcbiAgICBcImxpbmUtaGVpZ2h0XCI6IDEuMzMzMyxcbiAgICBcImZvbnRmYWNlXCI6IHRydWUsXG4gICAgXCJmaWxlXCI6IFwiJ2dlb21hbmlzdC1tZWRpdW0nXCJcbiAgfSwgIFwicmVndWxhclwiOiB7XG4gICAgXCJmYW1pbHlcIjogXCInR2VvbWFuaXN0J1wiLFxuICAgIFwiZmFsbGJhY2tcIjogXCInSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcIixcbiAgICBcIndlaWdodFwiOiA0MDAsXG4gICAgXCJzdHlsZVwiOiBcIm5vcm1hbFwiLFxuICAgIFwiZm9udGZhY2VcIjogdHJ1ZSxcbiAgICBcImZpbGVcIjogXCInZ2VvbWFuaXN0LXJlZ3VsYXInXCJcbiAgfSwgIFwiY29kZVwiOiB7XG4gICAgXCJmYW1pbHlcIjogXCInSW5jb25zb2xhdGEnXCIsXG4gICAgXCJmYWxsYmFja1wiOiBcIidIYWNrLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlJ1wiLFxuICAgIFwid2VpZ2h0XCI6IDQwMCxcbiAgICBcInN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJsaW5lLWhlaWdodFwiOiAxLjIsXG4gICAgXCJmb250ZmFjZVwiOiBmYWxzZVxuICB9XG59LFxuXCJmb250LXNpemVzXCI6IHtcbiAgXCJoMVwiOiBcIjY0cHhcIixcbiAgXCJoMS1tb2JpbGVcIjogXCIzNnB4XCIsXG4gIFwiaDJcIjogXCI0OHB4XCIsXG4gIFwiaDNcIjogXCIyNHB4XCIsXG4gIFwiaDRcIjogXCIxOHB4XCIsXG4gIFwic21hbGxcIjogXCIxNHB4XCIsXG4gIFwiZGVmYXVsdFwiOiBcIjI0cHhcIlxufSB9Il19
