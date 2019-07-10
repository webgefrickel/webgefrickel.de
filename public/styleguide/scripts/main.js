(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var fontfaceobserver_standalone = createCommonjsModule(function (module) {
	  /* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */
	  (function () {
	    function l(a, b) {
	      document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b);
	    }

	    function m(a) {
	      document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
	        document.removeEventListener("DOMContentLoaded", c);
	        a();
	      }) : document.attachEvent("onreadystatechange", function k() {
	        if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), a();
	      });
	    }

	    function t(a) {
	      this.a = document.createElement("div");
	      this.a.setAttribute("aria-hidden", "true");
	      this.a.appendChild(document.createTextNode(a));
	      this.b = document.createElement("span");
	      this.c = document.createElement("span");
	      this.h = document.createElement("span");
	      this.f = document.createElement("span");
	      this.g = -1;
	      this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	      this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	      this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	      this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
	      this.b.appendChild(this.h);
	      this.c.appendChild(this.f);
	      this.a.appendChild(this.b);
	      this.a.appendChild(this.c);
	    }

	    function u(a, b) {
	      a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";";
	    }

	    function z(a) {
	      var b = a.a.offsetWidth,
	          c = b + 100;
	      a.f.style.width = c + "px";
	      a.c.scrollLeft = c;
	      a.b.scrollLeft = a.b.scrollWidth + 100;
	      return a.g !== b ? (a.g = b, !0) : !1;
	    }

	    function A(a, b) {
	      function c() {
	        var a = k;
	        z(a) && a.a.parentNode && b(a.g);
	      }

	      var k = a;
	      l(a.b, c);
	      l(a.c, c);
	      z(a);
	    }

	    function B(a, b) {
	      var c = b || {};
	      this.family = a;
	      this.style = c.style || "normal";
	      this.weight = c.weight || "normal";
	      this.stretch = c.stretch || "normal";
	    }

	    var C = null,
	        D = null,
	        E = null,
	        F = null;

	    function G() {
	      if (null === D) if (J() && /Apple/.test(window.navigator.vendor)) {
	        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
	        D = !!a && 603 > parseInt(a[1], 10);
	      } else D = !1;
	      return D;
	    }

	    function J() {
	      null === F && (F = !!document.fonts);
	      return F;
	    }

	    function K() {
	      if (null === E) {
	        var a = document.createElement("div");

	        try {
	          a.style.font = "condensed 100px sans-serif";
	        } catch (b) {}

	        E = "" !== a.style.font;
	      }

	      return E;
	    }

	    function L(a, b) {
	      return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ");
	    }

	    B.prototype.load = function (a, b) {
	      var c = this,
	          k = a || "BESbswy",
	          r = 0,
	          n = b || 3E3,
	          H = new Date().getTime();
	      return new Promise(function (a, b) {
	        if (J() && !G()) {
	          var M = new Promise(function (a, b) {
	            function e() {
	              new Date().getTime() - H >= n ? b(Error("" + n + "ms timeout exceeded")) : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function (c) {
	                1 <= c.length ? a() : setTimeout(e, 25);
	              }, b);
	            }

	            e();
	          }),
	              N = new Promise(function (a, c) {
	            r = setTimeout(function () {
	              c(Error("" + n + "ms timeout exceeded"));
	            }, n);
	          });
	          Promise.race([N, M]).then(function () {
	            clearTimeout(r);
	            a(c);
	          }, b);
	        } else m(function () {
	          function v() {
	            var b;
	            if (b = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h) (b = f != g && f != h && g != h) || (null === C && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), C = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = C && (f == w && g == w && h == w || f == x && g == x && h == x || f == y && g == y && h == y)), b = !b;
	            b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(r), a(c));
	          }

	          function I() {
	            if (new Date().getTime() - H >= n) d.parentNode && d.parentNode.removeChild(d), b(Error("" + n + "ms timeout exceeded"));else {
	              var a = document.hidden;
	              if (!0 === a || void 0 === a) f = e.a.offsetWidth, g = p.a.offsetWidth, h = q.a.offsetWidth, v();
	              r = setTimeout(I, 50);
	            }
	          }

	          var e = new t(k),
	              p = new t(k),
	              q = new t(k),
	              f = -1,
	              g = -1,
	              h = -1,
	              w = -1,
	              x = -1,
	              y = -1,
	              d = document.createElement("div");
	          d.dir = "ltr";
	          u(e, L(c, "sans-serif"));
	          u(p, L(c, "serif"));
	          u(q, L(c, "monospace"));
	          d.appendChild(e.a);
	          d.appendChild(p.a);
	          d.appendChild(q.a);
	          document.body.appendChild(d);
	          w = e.a.offsetWidth;
	          x = p.a.offsetWidth;
	          y = q.a.offsetWidth;
	          I();
	          A(e, function (a) {
	            f = a;
	            v();
	          });
	          u(e, L(c, '"' + c.family + '",sans-serif'));
	          A(p, function (a) {
	            g = a;
	            v();
	          });
	          u(p, L(c, '"' + c.family + '",serif'));
	          A(q, function (a) {
	            h = a;
	            v();
	          });
	          u(q, L(c, '"' + c.family + '",monospace'));
	        });
	      });
	    };

	    module.exports = B;
	  })();
	});

	var fonts = {
		"default": {
			family: "Geomanist",
			fallback: "sans-serif",
			weight: 600,
			style: "normal",
			fontface: true,
			file: "geomanist-medium"
		},
		regular: {
			family: "Geomanist",
			fallback: "sans-serif",
			weight: 400,
			style: "normal",
			fontface: true,
			file: "geomanist-regular"
		},
		code: {
			family: "Menlo",
			fallback: "monospace",
			weight: 400,
			style: "normal",
			fontface: false
		}
	};

	var _globals_fontloader = (() => {
	  const fontObservers = [];

	  if (sessionStorage.fontsLoaded) {
	    document.documentElement.classList.add('fonts-loaded');
	    return;
	  }

	  Object.keys(fonts).forEach(font => {
	    const f = fonts[font];

	    if (f.fontface) {
	      fontObservers.push(new fontfaceobserver_standalone(f.family.replace(/'/g, ''), {
	        weight: f.weight,
	        style: f.style
	      }));
	    }
	  });

	  if (fontObservers.length >= 1) {
	    Promise.all(fontObservers).then(() => {
	      document.documentElement.classList.add('fonts-loaded'); // Optimization for Repeat Views

	      sessionStorage.fontsLoaded = true;
	    });
	  }
	});

	var _globals_nodelistforeach = (() => {
	  if (window.NodeList && !NodeList.prototype.forEach) {
	    NodeList.prototype.forEach = function (callback, thisArg) {
	      thisArg = thisArg || window;

	      for (let i = 0; i < this.length; i++) {
	        callback.call(thisArg, this[i], i, this);
	      }
	    };
	  }
	});

	var _globals_vhfix = (() => {
	  const setVh = () => {
	    const vh = window.innerHeight * 0.01;
	    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	  };

	  setVh();
	  window.addEventListener('resize', () => {
	    window.requestAnimationFrame(() => {
	      setVh();
	    });
	  });
	});

	var baguetteBox = createCommonjsModule(function (module, exports) {
	  /*!
	   * baguetteBox.js
	   * @author  feimosi
	   * @version %%INJECT_VERSION%%
	   * @url https://github.com/feimosi/baguetteBox.js
	   */

	  /* global define, module */
	  (function (root, factory) {

	    {
	      module.exports = factory();
	    }
	  })(commonjsGlobal, function () {

	    var leftArrow = '<svg width="44" height="60">' + '<polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"' + 'stroke-linecap="butt" fill="none" stroke-linejoin="round"/>' + '</svg>',
	        rightArrow = '<svg width="44" height="60">' + '<polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"' + 'stroke-linecap="butt" fill="none" stroke-linejoin="round"/>' + '</svg>',
	        closeX = '<svg width="30" height="30">' + '<g stroke="rgb(160,160,160)" stroke-width="4">' + '<line x1="5" y1="5" x2="25" y2="25"/>' + '<line x1="5" y1="25" x2="25" y2="5"/>' + '</g></svg>'; // Global options and their defaults

	    var options = {},
	        defaults = {
	      captions: true,
	      buttons: 'auto',
	      fullScreen: false,
	      noScrollbars: false,
	      bodyClass: 'baguetteBox-open',
	      titleTag: false,
	      async: false,
	      preload: 2,
	      animation: 'slideIn',
	      afterShow: null,
	      afterHide: null,
	      onChange: null,
	      overlayBackgroundColor: 'rgba(0,0,0,.8)'
	    }; // Object containing information about features compatibility

	    var supports = {}; // DOM Elements references

	    var overlay, slider, previousButton, nextButton, closeButton; // An array with all images in the current gallery

	    var currentGallery = []; // Current image index inside the slider

	    var currentIndex = 0; // Visibility of the overlay

	    var isOverlayVisible = false; // Touch event start position (for slide gesture)

	    var touch = {}; // If set to true ignore touch events because animation was already fired

	    var touchFlag = false; // Regex pattern to match image files

	    var regex = /.+\.(gif|jpe?g|png|webp)/i; // Object of all used galleries

	    var data = {}; // Array containing temporary images DOM elements

	    var imagesElements = []; // The last focused element before opening the overlay

	    var documentLastFocus = null;

	    var overlayClickHandler = function overlayClickHandler(event) {
	      // Close the overlay when user clicks directly on the background
	      if (event.target.id.indexOf('baguette-img') !== -1) {
	        hideOverlay();
	      }
	    };

	    var previousButtonClickHandler = function previousButtonClickHandler(event) {
	      event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions

	      showPreviousImage();
	    };

	    var nextButtonClickHandler = function nextButtonClickHandler(event) {
	      event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions

	      showNextImage();
	    };

	    var closeButtonClickHandler = function closeButtonClickHandler(event) {
	      event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions

	      hideOverlay();
	    };

	    var touchstartHandler = function touchstartHandler(event) {
	      touch.count++;

	      if (touch.count > 1) {
	        touch.multitouch = true;
	      } // Save x and y axis position


	      touch.startX = event.changedTouches[0].pageX;
	      touch.startY = event.changedTouches[0].pageY;
	    };

	    var touchmoveHandler = function touchmoveHandler(event) {
	      // If action was already triggered or multitouch return
	      if (touchFlag || touch.multitouch) {
	        return;
	      }

	      event.preventDefault ? event.preventDefault() : event.returnValue = false; // eslint-disable-line no-unused-expressions

	      var touchEvent = event.touches[0] || event.changedTouches[0]; // Move at least 40 pixels to trigger the action

	      if (touchEvent.pageX - touch.startX > 40) {
	        touchFlag = true;
	        showPreviousImage();
	      } else if (touchEvent.pageX - touch.startX < -40) {
	        touchFlag = true;
	        showNextImage(); // Move 100 pixels up to close the overlay
	      } else if (touch.startY - touchEvent.pageY > 100) {
	        hideOverlay();
	      }
	    };

	    var touchendHandler = function touchendHandler() {
	      touch.count--;

	      if (touch.count <= 0) {
	        touch.multitouch = false;
	      }

	      touchFlag = false;
	    };

	    var contextmenuHandler = function contextmenuHandler() {
	      touchendHandler();
	    };

	    var trapFocusInsideOverlay = function trapFocusInsideOverlay(event) {
	      if (overlay.style.display === 'block' && overlay.contains && !overlay.contains(event.target)) {
	        event.stopPropagation();
	        initFocus();
	      }
	    }; // forEach polyfill for IE8
	    // http://stackoverflow.com/a/14827443/1077846

	    /* eslint-disable */


	    if (![].forEach) {
	      Array.prototype.forEach = function (callback, thisArg) {
	        for (var i = 0; i < this.length; i++) {
	          callback.call(thisArg, this[i], i, this);
	        }
	      };
	    } // filter polyfill for IE8
	    // https://gist.github.com/eliperelman/1031656


	    if (![].filter) {
	      Array.prototype.filter = function (a, b, c, d, e) {
	        c = this;
	        d = [];

	        for (e = 0; e < c.length; e++) a.call(b, c[e], e, c) && d.push(c[e]);

	        return d;
	      };
	    }
	    /* eslint-enable */
	    // Script entry point


	    function run(selector, userOptions) {
	      // Fill supports object
	      supports.transforms = testTransformsSupport();
	      supports.svg = testSvgSupport();
	      supports.passiveEvents = testPassiveEventsSupport();
	      buildOverlay();
	      removeFromCache(selector);
	      return bindImageClickListeners(selector, userOptions);
	    }

	    function bindImageClickListeners(selector, userOptions) {
	      // For each gallery bind a click event to every image inside it
	      var galleryNodeList = document.querySelectorAll(selector);
	      var selectorData = {
	        galleries: [],
	        nodeList: galleryNodeList
	      };
	      data[selector] = selectorData;
	      [].forEach.call(galleryNodeList, function (galleryElement) {
	        if (userOptions && userOptions.filter) {
	          regex = userOptions.filter;
	        } // Get nodes from gallery elements or single-element galleries


	        var tagsNodeList = [];

	        if (galleryElement.tagName === 'A') {
	          tagsNodeList = [galleryElement];
	        } else {
	          tagsNodeList = galleryElement.getElementsByTagName('a');
	        } // Filter 'a' elements from those not linking to images


	        tagsNodeList = [].filter.call(tagsNodeList, function (element) {
	          if (element.className.indexOf(userOptions && userOptions.ignoreClass) === -1) {
	            return regex.test(element.href);
	          }
	        });

	        if (tagsNodeList.length === 0) {
	          return;
	        }

	        var gallery = [];
	        [].forEach.call(tagsNodeList, function (imageElement, imageIndex) {
	          var imageElementClickHandler = function imageElementClickHandler(event) {
	            event.preventDefault ? event.preventDefault() : event.returnValue = false; // eslint-disable-line no-unused-expressions

	            prepareOverlay(gallery, userOptions);
	            showOverlay(imageIndex);
	          };

	          var imageItem = {
	            eventHandler: imageElementClickHandler,
	            imageElement: imageElement
	          };
	          bind(imageElement, 'click', imageElementClickHandler);
	          gallery.push(imageItem);
	        });
	        selectorData.galleries.push(gallery);
	      });
	      return selectorData.galleries;
	    }

	    function clearCachedData() {
	      for (var selector in data) {
	        if (data.hasOwnProperty(selector)) {
	          removeFromCache(selector);
	        }
	      }
	    }

	    function removeFromCache(selector) {
	      if (!data.hasOwnProperty(selector)) {
	        return;
	      }

	      var galleries = data[selector].galleries;
	      [].forEach.call(galleries, function (gallery) {
	        [].forEach.call(gallery, function (imageItem) {
	          unbind(imageItem.imageElement, 'click', imageItem.eventHandler);
	        });

	        if (currentGallery === gallery) {
	          currentGallery = [];
	        }
	      });
	      delete data[selector];
	    }

	    function buildOverlay() {
	      overlay = getByID('baguetteBox-overlay'); // Check if the overlay already exists

	      if (overlay) {
	        slider = getByID('baguetteBox-slider');
	        previousButton = getByID('previous-button');
	        nextButton = getByID('next-button');
	        closeButton = getByID('close-button');
	        return;
	      } // Create overlay element


	      overlay = create('div');
	      overlay.setAttribute('role', 'dialog');
	      overlay.id = 'baguetteBox-overlay';
	      document.getElementsByTagName('body')[0].appendChild(overlay); // Create gallery slider element

	      slider = create('div');
	      slider.id = 'baguetteBox-slider';
	      overlay.appendChild(slider); // Create all necessary buttons

	      previousButton = create('button');
	      previousButton.setAttribute('type', 'button');
	      previousButton.id = 'previous-button';
	      previousButton.setAttribute('aria-label', 'Previous');
	      previousButton.innerHTML = supports.svg ? leftArrow : '&lt;';
	      overlay.appendChild(previousButton);
	      nextButton = create('button');
	      nextButton.setAttribute('type', 'button');
	      nextButton.id = 'next-button';
	      nextButton.setAttribute('aria-label', 'Next');
	      nextButton.innerHTML = supports.svg ? rightArrow : '&gt;';
	      overlay.appendChild(nextButton);
	      closeButton = create('button');
	      closeButton.setAttribute('type', 'button');
	      closeButton.id = 'close-button';
	      closeButton.setAttribute('aria-label', 'Close');
	      closeButton.innerHTML = supports.svg ? closeX : '&times;';
	      overlay.appendChild(closeButton);
	      previousButton.className = nextButton.className = closeButton.className = 'baguetteBox-button';
	      bindEvents();
	    }

	    function keyDownHandler(event) {
	      switch (event.keyCode) {
	        case 37:
	          // Left arrow
	          showPreviousImage();
	          break;

	        case 39:
	          // Right arrow
	          showNextImage();
	          break;

	        case 27:
	          // Esc
	          hideOverlay();
	          break;

	        case 36:
	          // Home
	          showFirstImage(event);
	          break;

	        case 35:
	          // End
	          showLastImage(event);
	          break;
	      }
	    }

	    function bindEvents() {
	      var options = supports.passiveEvents ? {
	        passive: true
	      } : null;
	      bind(overlay, 'click', overlayClickHandler);
	      bind(previousButton, 'click', previousButtonClickHandler);
	      bind(nextButton, 'click', nextButtonClickHandler);
	      bind(closeButton, 'click', closeButtonClickHandler);
	      bind(slider, 'contextmenu', contextmenuHandler);
	      bind(overlay, 'touchstart', touchstartHandler, options);
	      bind(overlay, 'touchmove', touchmoveHandler, options);
	      bind(overlay, 'touchend', touchendHandler);
	      bind(document, 'focus', trapFocusInsideOverlay, true);
	    }

	    function unbindEvents() {
	      var options = supports.passiveEvents ? {
	        passive: true
	      } : null;
	      unbind(overlay, 'click', overlayClickHandler);
	      unbind(previousButton, 'click', previousButtonClickHandler);
	      unbind(nextButton, 'click', nextButtonClickHandler);
	      unbind(closeButton, 'click', closeButtonClickHandler);
	      unbind(slider, 'contextmenu', contextmenuHandler);
	      unbind(overlay, 'touchstart', touchstartHandler, options);
	      unbind(overlay, 'touchmove', touchmoveHandler, options);
	      unbind(overlay, 'touchend', touchendHandler);
	      unbind(document, 'focus', trapFocusInsideOverlay, true);
	    }

	    function prepareOverlay(gallery, userOptions) {
	      // If the same gallery is being opened prevent from loading it once again
	      if (currentGallery === gallery) {
	        return;
	      }

	      currentGallery = gallery; // Update gallery specific options

	      setOptions(userOptions); // Empty slider of previous contents (more effective than .innerHTML = "")

	      while (slider.firstChild) {
	        slider.removeChild(slider.firstChild);
	      }

	      imagesElements.length = 0;
	      var imagesFiguresIds = [];
	      var imagesCaptionsIds = []; // Prepare and append images containers and populate figure and captions IDs arrays

	      for (var i = 0, fullImage; i < gallery.length; i++) {
	        fullImage = create('div');
	        fullImage.className = 'full-image';
	        fullImage.id = 'baguette-img-' + i;
	        imagesElements.push(fullImage);
	        imagesFiguresIds.push('baguetteBox-figure-' + i);
	        imagesCaptionsIds.push('baguetteBox-figcaption-' + i);
	        slider.appendChild(imagesElements[i]);
	      }

	      overlay.setAttribute('aria-labelledby', imagesFiguresIds.join(' '));
	      overlay.setAttribute('aria-describedby', imagesCaptionsIds.join(' '));
	    }

	    function setOptions(newOptions) {
	      if (!newOptions) {
	        newOptions = {};
	      } // Fill options object


	      for (var item in defaults) {
	        options[item] = defaults[item];

	        if (typeof newOptions[item] !== 'undefined') {
	          options[item] = newOptions[item];
	        }
	      }
	      /* Apply new options */
	      // Change transition for proper animation


	      slider.style.transition = slider.style.webkitTransition = options.animation === 'fadeIn' ? 'opacity .4s ease' : options.animation === 'slideIn' ? '' : 'none'; // Hide buttons if necessary

	      if (options.buttons === 'auto' && ('ontouchstart' in window || currentGallery.length === 1)) {
	        options.buttons = false;
	      } // Set buttons style to hide or display them


	      previousButton.style.display = nextButton.style.display = options.buttons ? '' : 'none'; // Set overlay color

	      try {
	        overlay.style.backgroundColor = options.overlayBackgroundColor;
	      } catch (e) {// Silence the error and continue
	      }
	    }

	    function showOverlay(chosenImageIndex) {
	      if (options.noScrollbars) {
	        document.documentElement.style.overflowY = 'hidden';
	        document.body.style.overflowY = 'scroll';
	      }

	      if (overlay.style.display === 'block') {
	        return;
	      }

	      bind(document, 'keydown', keyDownHandler);
	      currentIndex = chosenImageIndex;
	      touch = {
	        count: 0,
	        startX: null,
	        startY: null
	      };
	      loadImage(currentIndex, function () {
	        preloadNext(currentIndex);
	        preloadPrev(currentIndex);
	      });
	      updateOffset();
	      overlay.style.display = 'block';

	      if (options.fullScreen) {
	        enterFullScreen();
	      } // Fade in overlay


	      setTimeout(function () {
	        overlay.className = 'visible';

	        if (options.bodyClass && document.body.classList) {
	          document.body.classList.add(options.bodyClass);
	        }

	        if (options.afterShow) {
	          options.afterShow();
	        }
	      }, 50);

	      if (options.onChange) {
	        options.onChange(currentIndex, imagesElements.length);
	      }

	      documentLastFocus = document.activeElement;
	      initFocus();
	      isOverlayVisible = true;
	    }

	    function initFocus() {
	      if (options.buttons) {
	        previousButton.focus();
	      } else {
	        closeButton.focus();
	      }
	    }

	    function enterFullScreen() {
	      if (overlay.requestFullscreen) {
	        overlay.requestFullscreen();
	      } else if (overlay.webkitRequestFullscreen) {
	        overlay.webkitRequestFullscreen();
	      } else if (overlay.mozRequestFullScreen) {
	        overlay.mozRequestFullScreen();
	      }
	    }

	    function exitFullscreen() {
	      if (document.exitFullscreen) {
	        document.exitFullscreen();
	      } else if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen();
	      } else if (document.webkitExitFullscreen) {
	        document.webkitExitFullscreen();
	      }
	    }

	    function hideOverlay() {
	      if (options.noScrollbars) {
	        document.documentElement.style.overflowY = 'auto';
	        document.body.style.overflowY = 'auto';
	      }

	      if (overlay.style.display === 'none') {
	        return;
	      }

	      unbind(document, 'keydown', keyDownHandler); // Fade out and hide the overlay

	      overlay.className = '';
	      setTimeout(function () {
	        overlay.style.display = 'none';

	        if (document.fullscreen) {
	          exitFullscreen();
	        }

	        if (options.bodyClass && document.body.classList) {
	          document.body.classList.remove(options.bodyClass);
	        }

	        if (options.afterHide) {
	          options.afterHide();
	        }

	        documentLastFocus && documentLastFocus.focus();
	        isOverlayVisible = false;
	      }, 500);
	    }

	    function loadImage(index, callback) {
	      var imageContainer = imagesElements[index];
	      var galleryItem = currentGallery[index]; // Return if the index exceeds prepared images in the overlay
	      // or if the current gallery has been changed / closed

	      if (typeof imageContainer === 'undefined' || typeof galleryItem === 'undefined') {
	        return;
	      } // If image is already loaded run callback and return


	      if (imageContainer.getElementsByTagName('img')[0]) {
	        if (callback) {
	          callback();
	        }

	        return;
	      } // Get element reference, optional caption and source path


	      var imageElement = galleryItem.imageElement;
	      var thumbnailElement = imageElement.getElementsByTagName('img')[0];
	      var imageCaption = typeof options.captions === 'function' ? options.captions.call(currentGallery, imageElement) : imageElement.getAttribute('data-caption') || imageElement.title;
	      var imageSrc = getImageSrc(imageElement); // Prepare figure element

	      var figure = create('figure');
	      figure.id = 'baguetteBox-figure-' + index;
	      figure.innerHTML = '<div class="baguetteBox-spinner">' + '<div class="baguetteBox-double-bounce1"></div>' + '<div class="baguetteBox-double-bounce2"></div>' + '</div>'; // Insert caption if available

	      if (options.captions && imageCaption) {
	        var figcaption = create('figcaption');
	        figcaption.id = 'baguetteBox-figcaption-' + index;
	        figcaption.innerHTML = imageCaption;
	        figure.appendChild(figcaption);
	      }

	      imageContainer.appendChild(figure); // Prepare gallery img element

	      var image = create('img');

	      image.onload = function () {
	        // Remove loader element
	        var spinner = document.querySelector('#baguette-img-' + index + ' .baguetteBox-spinner');
	        figure.removeChild(spinner);

	        if (!options.async && callback) {
	          callback();
	        }
	      };

	      image.setAttribute('src', imageSrc);
	      image.alt = thumbnailElement ? thumbnailElement.alt || '' : '';

	      if (options.titleTag && imageCaption) {
	        image.title = imageCaption;
	      }

	      figure.appendChild(image); // Run callback

	      if (options.async && callback) {
	        callback();
	      }
	    } // Get image source location, mostly used for responsive images


	    function getImageSrc(image) {
	      // Set default image path from href
	      var result = image.href; // If dataset is supported find the most suitable image

	      if (image.dataset) {
	        var srcs = []; // Get all possible image versions depending on the resolution

	        for (var item in image.dataset) {
	          if (item.substring(0, 3) === 'at-' && !isNaN(item.substring(3))) {
	            srcs[item.replace('at-', '')] = image.dataset[item];
	          }
	        } // Sort resolutions ascending


	        var keys = Object.keys(srcs).sort(function (a, b) {
	          return parseInt(a, 10) < parseInt(b, 10) ? -1 : 1;
	        }); // Get real screen resolution

	        var width = window.innerWidth * window.devicePixelRatio; // Find the first image bigger than or equal to the current width

	        var i = 0;

	        while (i < keys.length - 1 && keys[i] < width) {
	          i++;
	        }

	        result = srcs[keys[i]] || result;
	      }

	      return result;
	    } // Return false at the right end of the gallery


	    function showNextImage() {
	      return show(currentIndex + 1);
	    } // Return false at the left end of the gallery


	    function showPreviousImage() {
	      return show(currentIndex - 1);
	    } // Return false at the left end of the gallery


	    function showFirstImage(event) {
	      if (event) {
	        event.preventDefault();
	      }

	      return show(0);
	    } // Return false at the right end of the gallery


	    function showLastImage(event) {
	      if (event) {
	        event.preventDefault();
	      }

	      return show(currentGallery.length - 1);
	    }
	    /**
	     * Move the gallery to a specific index
	     * @param `index` {number} - the position of the image
	     * @param `gallery` {array} - gallery which should be opened, if omitted assumes the currently opened one
	     * @return {boolean} - true on success or false if the index is invalid
	     */


	    function show(index, gallery) {
	      if (!isOverlayVisible && index >= 0 && index < gallery.length) {
	        prepareOverlay(gallery, options);
	        showOverlay(index);
	        return true;
	      }

	      if (index < 0) {
	        if (options.animation) {
	          bounceAnimation('left');
	        }

	        return false;
	      }

	      if (index >= imagesElements.length) {
	        if (options.animation) {
	          bounceAnimation('right');
	        }

	        return false;
	      }

	      currentIndex = index;
	      loadImage(currentIndex, function () {
	        preloadNext(currentIndex);
	        preloadPrev(currentIndex);
	      });
	      updateOffset();

	      if (options.onChange) {
	        options.onChange(currentIndex, imagesElements.length);
	      }

	      return true;
	    }
	    /**
	     * Triggers the bounce animation
	     * @param {('left'|'right')} direction - Direction of the movement
	     */


	    function bounceAnimation(direction) {
	      slider.className = 'bounce-from-' + direction;
	      setTimeout(function () {
	        slider.className = '';
	      }, 400);
	    }

	    function updateOffset() {
	      var offset = -currentIndex * 100 + '%';

	      if (options.animation === 'fadeIn') {
	        slider.style.opacity = 0;
	        setTimeout(function () {
	          supports.transforms ? slider.style.transform = slider.style.webkitTransform = 'translate3d(' + offset + ',0,0)' : slider.style.left = offset;
	          slider.style.opacity = 1;
	        }, 400);
	      } else {
	        supports.transforms ? slider.style.transform = slider.style.webkitTransform = 'translate3d(' + offset + ',0,0)' : slider.style.left = offset;
	      }
	    } // CSS 3D Transforms test


	    function testTransformsSupport() {
	      var div = create('div');
	      return typeof div.style.perspective !== 'undefined' || typeof div.style.webkitPerspective !== 'undefined';
	    } // Inline SVG test


	    function testSvgSupport() {
	      var div = create('div');
	      div.innerHTML = '<svg/>';
	      return (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
	    } // Borrowed from https://github.com/seiyria/bootstrap-slider/pull/680/files

	    /* eslint-disable getter-return */


	    function testPassiveEventsSupport() {
	      var passiveEvents = false;

	      try {
	        var opts = Object.defineProperty({}, 'passive', {
	          get: function get() {
	            passiveEvents = true;
	          }
	        });
	        window.addEventListener('test', null, opts);
	      } catch (e) {
	        /* Silence the error and continue */
	      }

	      return passiveEvents;
	    }
	    /* eslint-enable getter-return */


	    function preloadNext(index) {
	      if (index - currentIndex >= options.preload) {
	        return;
	      }

	      loadImage(index + 1, function () {
	        preloadNext(index + 1);
	      });
	    }

	    function preloadPrev(index) {
	      if (currentIndex - index >= options.preload) {
	        return;
	      }

	      loadImage(index - 1, function () {
	        preloadPrev(index - 1);
	      });
	    }

	    function bind(element, event, callback, options) {
	      if (element.addEventListener) {
	        element.addEventListener(event, callback, options);
	      } else {
	        // IE8 fallback
	        element.attachEvent('on' + event, function (event) {
	          // `event` and `event.target` are not provided in IE8
	          event = event || window.event;
	          event.target = event.target || event.srcElement;
	          callback(event);
	        });
	      }
	    }

	    function unbind(element, event, callback, options) {
	      if (element.removeEventListener) {
	        element.removeEventListener(event, callback, options);
	      } else {
	        // IE8 fallback
	        element.detachEvent('on' + event, callback);
	      }
	    }

	    function getByID(id) {
	      return document.getElementById(id);
	    }

	    function create(element) {
	      return document.createElement(element);
	    }

	    function destroyPlugin() {
	      unbindEvents();
	      clearCachedData();
	      unbind(document, 'keydown', keyDownHandler);
	      document.getElementsByTagName('body')[0].removeChild(document.getElementById('baguetteBox-overlay'));
	      data = {};
	      currentGallery = [];
	      currentIndex = 0;
	    }

	    return {
	      run: run,
	      show: show,
	      showNext: showNextImage,
	      showPrevious: showPreviousImage,
	      hide: hideOverlay,
	      destroy: destroyPlugin
	    };
	  });
	});

	var _patterns__3Components$gallery$gallery = (() => {
	  baguetteBox.run('.js-gallery');
	});

	var _patterns__3Components$nav$nav = (() => {
	  const nav = document.querySelector('.js-nav');
	  const button = document.querySelector('.js-toggle-nav');
	  const header = document.querySelector('.js-header'); // navigation button on click, basic toggling of classes

	  if (button) {
	    button.addEventListener('click', () => {
	      nav.classList.toggle('nav--active');
	      header.classList.toggle('header--nav--active');
	    });
	  }
	});

	const closeWelcome = document.getElementById('close-welcome');

	const welcomeDone = () => {
	  window.setTimeout(() => {
	    document.querySelector('.js-welcome').classList.add('welcome--done');
	  }, 800); // animation time is 700ms
	};

	var _patterns__3Components$welcome$welcome = (() => {
	  // set the event to the esc-key to dismiss splash intro
	  document.onkeydown = e => {
	    const event = e || window.event;
	    const isHomepage = document.body.classList.contains('site--homepage');

	    if (event.keyCode === 27 && isHomepage && closeWelcome) {
	      closeWelcome.setAttribute('checked', 'checked');
	      welcomeDone();
	    }
	  }; // remove the transition after it changed


	  if (closeWelcome) {
	    closeWelcome.addEventListener('change', welcomeDone);
	    closeWelcome.addEventListener('click', welcomeDone);
	  }
	});

	const globals = {
	  fontloader: _globals_fontloader,
	  nodelistforeach: _globals_nodelistforeach,
	  vhfix: _globals_vhfix
	};
	Object.freeze(globals);
	const patterns = {
	  _3Components$gallery$gallery: _patterns__3Components$gallery$gallery,
	  _3Components$nav$nav: _patterns__3Components$nav$nav,
	  _3Components$welcome$welcome: _patterns__3Components$welcome$welcome
	};
	Object.freeze(patterns); // js has loaded—remove the no-js class

	document.documentElement.classList.remove('no-js'); // load and execute all scripts from global and all patterns automatically
	// but exclude test and config files — those should not be executed

	[globals, patterns].forEach(module => {
	  Object.keys(module).forEach(i => {
	    module[i]();
	  });
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5zdGFuZGFsb25lLmpzIiwiLi4vLi4vLi4vc3JjL3NjcmlwdHMvMy1nbG9iYWwvZm9udGxvYWRlci5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL25vZGVsaXN0Zm9yZWFjaC5qcyIsIi4uLy4uLy4uL3NyYy9zY3JpcHRzLzMtZ2xvYmFsL3ZoZml4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhZ3VldHRlYm94LmpzL3NyYy9iYWd1ZXR0ZUJveC5qcyIsIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy8zLWNvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmpzIiwiLi4vLi4vLi4vc3JjL3BhdHRlcm5zLzMtY29tcG9uZW50cy9uYXYvbmF2LmpzIiwiLi4vLi4vLi4vc3JjL3BhdHRlcm5zLzMtY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuanMiLCIuLi8uLi8uLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEZvbnQgRmFjZSBPYnNlcnZlciB2Mi4xLjAgLSDCqSBCcmFtIFN0ZWluLiBMaWNlbnNlOiBCU0QtMy1DbGF1c2UgKi8oZnVuY3Rpb24oKXtmdW5jdGlvbiBsKGEsYil7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixiLCExKTphLmF0dGFjaEV2ZW50KFwic2Nyb2xsXCIsYil9ZnVuY3Rpb24gbShhKXtkb2N1bWVudC5ib2R5P2EoKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24gYygpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYyk7YSgpfSk6ZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbiBrKCl7aWYoXCJpbnRlcmFjdGl2ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlfHxcImNvbXBsZXRlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGUpZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixrKSxhKCl9KX07ZnVuY3Rpb24gdChhKXt0aGlzLmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmEuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dGhpcy5hLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTt0aGlzLmI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5jPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5nPS0xO3RoaXMuYi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5jLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjtcbnRoaXMuZi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5oLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDAlO2hlaWdodDoyMDAlO2ZvbnQtc2l6ZToxNnB4O21heC13aWR0aDpub25lO1wiO3RoaXMuYi5hcHBlbmRDaGlsZCh0aGlzLmgpO3RoaXMuYy5hcHBlbmRDaGlsZCh0aGlzLmYpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmIpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmMpfVxuZnVuY3Rpb24gdShhLGIpe2EuYS5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7bWluLXdpZHRoOjIwcHg7bWluLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO21hcmdpbjowO3BhZGRpbmc6MDt0b3A6LTk5OXB4O3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXN5bnRoZXNpczpub25lO2ZvbnQ6XCIrYitcIjtcIn1mdW5jdGlvbiB6KGEpe3ZhciBiPWEuYS5vZmZzZXRXaWR0aCxjPWIrMTAwO2EuZi5zdHlsZS53aWR0aD1jK1wicHhcIjthLmMuc2Nyb2xsTGVmdD1jO2EuYi5zY3JvbGxMZWZ0PWEuYi5zY3JvbGxXaWR0aCsxMDA7cmV0dXJuIGEuZyE9PWI/KGEuZz1iLCEwKTohMX1mdW5jdGlvbiBBKGEsYil7ZnVuY3Rpb24gYygpe3ZhciBhPWs7eihhKSYmYS5hLnBhcmVudE5vZGUmJmIoYS5nKX12YXIgaz1hO2woYS5iLGMpO2woYS5jLGMpO3ooYSl9O2Z1bmN0aW9uIEIoYSxiKXt2YXIgYz1ifHx7fTt0aGlzLmZhbWlseT1hO3RoaXMuc3R5bGU9Yy5zdHlsZXx8XCJub3JtYWxcIjt0aGlzLndlaWdodD1jLndlaWdodHx8XCJub3JtYWxcIjt0aGlzLnN0cmV0Y2g9Yy5zdHJldGNofHxcIm5vcm1hbFwifXZhciBDPW51bGwsRD1udWxsLEU9bnVsbCxGPW51bGw7ZnVuY3Rpb24gRygpe2lmKG51bGw9PT1EKWlmKEooKSYmL0FwcGxlLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKSl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO0Q9ISFhJiY2MDM+cGFyc2VJbnQoYVsxXSwxMCl9ZWxzZSBEPSExO3JldHVybiBEfWZ1bmN0aW9uIEooKXtudWxsPT09RiYmKEY9ISFkb2N1bWVudC5mb250cyk7cmV0dXJuIEZ9XG5mdW5jdGlvbiBLKCl7aWYobnVsbD09PUUpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e2Euc3R5bGUuZm9udD1cImNvbmRlbnNlZCAxMDBweCBzYW5zLXNlcmlmXCJ9Y2F0Y2goYil7fUU9XCJcIiE9PWEuc3R5bGUuZm9udH1yZXR1cm4gRX1mdW5jdGlvbiBMKGEsYil7cmV0dXJuW2Euc3R5bGUsYS53ZWlnaHQsSygpP2Euc3RyZXRjaDpcIlwiLFwiMTAwcHhcIixiXS5qb2luKFwiIFwiKX1cbkIucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGs9YXx8XCJCRVNic3d5XCIscj0wLG49Ynx8M0UzLEg9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7aWYoSigpJiYhRygpKXt2YXIgTT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGUoKXsobmV3IERhdGUpLmdldFRpbWUoKS1IPj1uP2IoRXJyb3IoXCJcIituK1wibXMgdGltZW91dCBleGNlZWRlZFwiKSk6ZG9jdW1lbnQuZm9udHMubG9hZChMKGMsJ1wiJytjLmZhbWlseSsnXCInKSxrKS50aGVuKGZ1bmN0aW9uKGMpezE8PWMubGVuZ3RoP2EoKTpzZXRUaW1lb3V0KGUsMjUpfSxiKX1lKCl9KSxOPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYyl7cj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyhFcnJvcihcIlwiK24rXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKX0sbil9KTtQcm9taXNlLnJhY2UoW04sTV0pLnRoZW4oZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocik7YShjKX0sXG5iKX1lbHNlIG0oZnVuY3Rpb24oKXtmdW5jdGlvbiB2KCl7dmFyIGI7aWYoYj0tMSE9ZiYmLTEhPWd8fC0xIT1mJiYtMSE9aHx8LTEhPWcmJi0xIT1oKShiPWYhPWcmJmYhPWgmJmchPWgpfHwobnVsbD09PUMmJihiPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxDPSEhYiYmKDUzNj5wYXJzZUludChiWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYlsxXSwxMCkmJjExPj1wYXJzZUludChiWzJdLDEwKSkpLGI9QyYmKGY9PXcmJmc9PXcmJmg9PXd8fGY9PXgmJmc9PXgmJmg9PXh8fGY9PXkmJmc9PXkmJmg9PXkpKSxiPSFiO2ImJihkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxjbGVhclRpbWVvdXQociksYShjKSl9ZnVuY3Rpb24gSSgpe2lmKChuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PW4pZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksYihFcnJvcihcIlwiK1xubitcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpO2Vsc2V7dmFyIGE9ZG9jdW1lbnQuaGlkZGVuO2lmKCEwPT09YXx8dm9pZCAwPT09YSlmPWUuYS5vZmZzZXRXaWR0aCxnPXAuYS5vZmZzZXRXaWR0aCxoPXEuYS5vZmZzZXRXaWR0aCx2KCk7cj1zZXRUaW1lb3V0KEksNTApfX12YXIgZT1uZXcgdChrKSxwPW5ldyB0KGspLHE9bmV3IHQoayksZj0tMSxnPS0xLGg9LTEsdz0tMSx4PS0xLHk9LTEsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2QuZGlyPVwibHRyXCI7dShlLEwoYyxcInNhbnMtc2VyaWZcIikpO3UocCxMKGMsXCJzZXJpZlwiKSk7dShxLEwoYyxcIm1vbm9zcGFjZVwiKSk7ZC5hcHBlbmRDaGlsZChlLmEpO2QuYXBwZW5kQ2hpbGQocC5hKTtkLmFwcGVuZENoaWxkKHEuYSk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTt3PWUuYS5vZmZzZXRXaWR0aDt4PXAuYS5vZmZzZXRXaWR0aDt5PXEuYS5vZmZzZXRXaWR0aDtJKCk7QShlLGZ1bmN0aW9uKGEpe2Y9YTt2KCl9KTt1KGUsXG5MKGMsJ1wiJytjLmZhbWlseSsnXCIsc2Fucy1zZXJpZicpKTtBKHAsZnVuY3Rpb24oYSl7Zz1hO3YoKX0pO3UocCxMKGMsJ1wiJytjLmZhbWlseSsnXCIsc2VyaWYnKSk7QShxLGZ1bmN0aW9uKGEpe2g9YTt2KCl9KTt1KHEsTChjLCdcIicrYy5mYW1pbHkrJ1wiLG1vbm9zcGFjZScpKX0pfSl9O1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPUI6KHdpbmRvdy5Gb250RmFjZU9ic2VydmVyPUIsd2luZG93LkZvbnRGYWNlT2JzZXJ2ZXIucHJvdG90eXBlLmxvYWQ9Qi5wcm90b3R5cGUubG9hZCk7fSgpKTtcbiIsImltcG9ydCBGb250RmFjZU9ic2VydmVyIGZyb20gJ2ZvbnRmYWNlb2JzZXJ2ZXInO1xuaW1wb3J0IHsgZm9udHMgfSBmcm9tICd+Y29uZmlnL2ZvbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBmb250T2JzZXJ2ZXJzID0gW107XG5cbiAgaWYgKHNlc3Npb25TdG9yYWdlLmZvbnRzTG9hZGVkKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKGZvbnRzKS5mb3JFYWNoKGZvbnQgPT4ge1xuICAgIGNvbnN0IGYgPSBmb250c1tmb250XTtcblxuICAgIGlmIChmLmZvbnRmYWNlKSB7XG4gICAgICBmb250T2JzZXJ2ZXJzLnB1c2goXG4gICAgICAgIG5ldyBGb250RmFjZU9ic2VydmVyKGYuZmFtaWx5LnJlcGxhY2UoLycvZywgJycpLCB7XG4gICAgICAgICAgd2VpZ2h0OiBmLndlaWdodCxcbiAgICAgICAgICBzdHlsZTogZi5zdHlsZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZm9udE9ic2VydmVycy5sZW5ndGggPj0gMSkge1xuICAgIFByb21pc2UuYWxsKGZvbnRPYnNlcnZlcnMpLnRoZW4oKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgICAgLy8gT3B0aW1pemF0aW9uIGZvciBSZXBlYXQgVmlld3NcbiAgICAgIHNlc3Npb25TdG9yYWdlLmZvbnRzTG9hZGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgaWYgKHdpbmRvdy5Ob2RlTGlzdCAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICB0aGlzQXJnID0gdGhpc0FyZyB8fCB3aW5kb3c7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBzZXRWaCA9ICgpID0+IHtcbiAgICBjb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgfTtcblxuICBzZXRWaCgpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc2V0VmgoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiLyohXG4gKiBiYWd1ZXR0ZUJveC5qc1xuICogQGF1dGhvciAgZmVpbW9zaVxuICogQHZlcnNpb24gJSVJTkpFQ1RfVkVSU0lPTiUlXG4gKiBAdXJsIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWltb3NpL2JhZ3VldHRlQm94LmpzXG4gKi9cblxuLyogZ2xvYmFsIGRlZmluZSwgbW9kdWxlICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LmJhZ3VldHRlQm94ID0gZmFjdG9yeSgpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vIFNWRyBzaGFwZXMgdXNlZCBvbiB0aGUgYnV0dG9uc1xuICAgIHZhciBsZWZ0QXJyb3cgPSAnPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNjBcIj4nICtcbiAgICAgICAgICAgICc8cG9seWxpbmUgcG9pbnRzPVwiMzAgMTAgMTAgMzAgMzAgNTBcIiBzdHJva2U9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIiBzdHJva2Utd2lkdGg9XCI0XCInICtcbiAgICAgICAgICAgICAgJ3N0cm9rZS1saW5lY2FwPVwiYnV0dFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+JyArXG4gICAgICAgICAgICAnPC9zdmc+JyxcbiAgICAgICAgcmlnaHRBcnJvdyA9ICc8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI2MFwiPicgK1xuICAgICAgICAgICAgJzxwb2x5bGluZSBwb2ludHM9XCIxNCAxMCAzNCAzMCAxNCA1MFwiIHN0cm9rZT1cInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiIHN0cm9rZS13aWR0aD1cIjRcIicgK1xuICAgICAgICAgICAgICAnc3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz4nICtcbiAgICAgICAgICAgICc8L3N2Zz4nLFxuICAgICAgICBjbG9zZVggPSAnPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj4nICtcbiAgICAgICAgICAgICc8ZyBzdHJva2U9XCJyZ2IoMTYwLDE2MCwxNjApXCIgc3Ryb2tlLXdpZHRoPVwiNFwiPicgK1xuICAgICAgICAgICAgJzxsaW5lIHgxPVwiNVwiIHkxPVwiNVwiIHgyPVwiMjVcIiB5Mj1cIjI1XCIvPicgK1xuICAgICAgICAgICAgJzxsaW5lIHgxPVwiNVwiIHkxPVwiMjVcIiB4Mj1cIjI1XCIgeTI9XCI1XCIvPicgK1xuICAgICAgICAgICAgJzwvZz48L3N2Zz4nO1xuICAgIC8vIEdsb2JhbCBvcHRpb25zIGFuZCB0aGVpciBkZWZhdWx0c1xuICAgIHZhciBvcHRpb25zID0ge30sXG4gICAgICAgIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY2FwdGlvbnM6IHRydWUsXG4gICAgICAgICAgICBidXR0b25zOiAnYXV0bycsXG4gICAgICAgICAgICBmdWxsU2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIG5vU2Nyb2xsYmFyczogZmFsc2UsXG4gICAgICAgICAgICBib2R5Q2xhc3M6ICdiYWd1ZXR0ZUJveC1vcGVuJyxcbiAgICAgICAgICAgIHRpdGxlVGFnOiBmYWxzZSxcbiAgICAgICAgICAgIGFzeW5jOiBmYWxzZSxcbiAgICAgICAgICAgIHByZWxvYWQ6IDIsXG4gICAgICAgICAgICBhbmltYXRpb246ICdzbGlkZUluJyxcbiAgICAgICAgICAgIGFmdGVyU2hvdzogbnVsbCxcbiAgICAgICAgICAgIGFmdGVySGlkZTogbnVsbCxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBudWxsLFxuICAgICAgICAgICAgb3ZlcmxheUJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjgpJ1xuICAgICAgICB9O1xuICAgIC8vIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IGZlYXR1cmVzIGNvbXBhdGliaWxpdHlcbiAgICB2YXIgc3VwcG9ydHMgPSB7fTtcbiAgICAvLyBET00gRWxlbWVudHMgcmVmZXJlbmNlc1xuICAgIHZhciBvdmVybGF5LCBzbGlkZXIsIHByZXZpb3VzQnV0dG9uLCBuZXh0QnV0dG9uLCBjbG9zZUJ1dHRvbjtcbiAgICAvLyBBbiBhcnJheSB3aXRoIGFsbCBpbWFnZXMgaW4gdGhlIGN1cnJlbnQgZ2FsbGVyeVxuICAgIHZhciBjdXJyZW50R2FsbGVyeSA9IFtdO1xuICAgIC8vIEN1cnJlbnQgaW1hZ2UgaW5kZXggaW5zaWRlIHRoZSBzbGlkZXJcbiAgICB2YXIgY3VycmVudEluZGV4ID0gMDtcbiAgICAvLyBWaXNpYmlsaXR5IG9mIHRoZSBvdmVybGF5XG4gICAgdmFyIGlzT3ZlcmxheVZpc2libGUgPSBmYWxzZTtcbiAgICAvLyBUb3VjaCBldmVudCBzdGFydCBwb3NpdGlvbiAoZm9yIHNsaWRlIGdlc3R1cmUpXG4gICAgdmFyIHRvdWNoID0ge307XG4gICAgLy8gSWYgc2V0IHRvIHRydWUgaWdub3JlIHRvdWNoIGV2ZW50cyBiZWNhdXNlIGFuaW1hdGlvbiB3YXMgYWxyZWFkeSBmaXJlZFxuICAgIHZhciB0b3VjaEZsYWcgPSBmYWxzZTtcbiAgICAvLyBSZWdleCBwYXR0ZXJuIHRvIG1hdGNoIGltYWdlIGZpbGVzXG4gICAgdmFyIHJlZ2V4ID0gLy4rXFwuKGdpZnxqcGU/Z3xwbmd8d2VicCkvaTtcbiAgICAvLyBPYmplY3Qgb2YgYWxsIHVzZWQgZ2FsbGVyaWVzXG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICAvLyBBcnJheSBjb250YWluaW5nIHRlbXBvcmFyeSBpbWFnZXMgRE9NIGVsZW1lbnRzXG4gICAgdmFyIGltYWdlc0VsZW1lbnRzID0gW107XG4gICAgLy8gVGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IGJlZm9yZSBvcGVuaW5nIHRoZSBvdmVybGF5XG4gICAgdmFyIGRvY3VtZW50TGFzdEZvY3VzID0gbnVsbDtcbiAgICB2YXIgb3ZlcmxheUNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vIENsb3NlIHRoZSBvdmVybGF5IHdoZW4gdXNlciBjbGlja3MgZGlyZWN0bHkgb24gdGhlIGJhY2tncm91bmRcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pZC5pbmRleE9mKCdiYWd1ZXR0ZS1pbWcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGhpZGVPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBwcmV2aW91c0J1dHRvbkNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA/IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIDogZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgc2hvd1ByZXZpb3VzSW1hZ2UoKTtcbiAgICB9O1xuICAgIHZhciBuZXh0QnV0dG9uQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgOiBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICBzaG93TmV4dEltYWdlKCk7XG4gICAgfTtcbiAgICB2YXIgY2xvc2VCdXR0b25DbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPyBldmVudC5zdG9wUHJvcGFnYXRpb24oKSA6IGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIGhpZGVPdmVybGF5KCk7XG4gICAgfTtcbiAgICB2YXIgdG91Y2hzdGFydEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB0b3VjaC5jb3VudCsrO1xuICAgICAgICBpZiAodG91Y2guY291bnQgPiAxKSB7XG4gICAgICAgICAgICB0b3VjaC5tdWx0aXRvdWNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTYXZlIHggYW5kIHkgYXhpcyBwb3NpdGlvblxuICAgICAgICB0b3VjaC5zdGFydFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgdG91Y2guc3RhcnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgfTtcbiAgICB2YXIgdG91Y2htb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vIElmIGFjdGlvbiB3YXMgYWxyZWFkeSB0cmlnZ2VyZWQgb3IgbXVsdGl0b3VjaCByZXR1cm5cbiAgICAgICAgaWYgKHRvdWNoRmxhZyB8fCB0b3VjaC5tdWx0aXRvdWNoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIDogZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgdmFyIHRvdWNoRXZlbnQgPSBldmVudC50b3VjaGVzWzBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAvLyBNb3ZlIGF0IGxlYXN0IDQwIHBpeGVscyB0byB0cmlnZ2VyIHRoZSBhY3Rpb25cbiAgICAgICAgaWYgKHRvdWNoRXZlbnQucGFnZVggLSB0b3VjaC5zdGFydFggPiA0MCkge1xuICAgICAgICAgICAgdG91Y2hGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIHNob3dQcmV2aW91c0ltYWdlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG91Y2hFdmVudC5wYWdlWCAtIHRvdWNoLnN0YXJ0WCA8IC00MCkge1xuICAgICAgICAgICAgdG91Y2hGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIHNob3dOZXh0SW1hZ2UoKTtcbiAgICAgICAgLy8gTW92ZSAxMDAgcGl4ZWxzIHVwIHRvIGNsb3NlIHRoZSBvdmVybGF5XG4gICAgICAgIH0gZWxzZSBpZiAodG91Y2guc3RhcnRZIC0gdG91Y2hFdmVudC5wYWdlWSA+IDEwMCkge1xuICAgICAgICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHRvdWNoZW5kSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b3VjaC5jb3VudC0tO1xuICAgICAgICBpZiAodG91Y2guY291bnQgPD0gMCkge1xuICAgICAgICAgICAgdG91Y2gubXVsdGl0b3VjaCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRvdWNoRmxhZyA9IGZhbHNlO1xuICAgIH07XG4gICAgdmFyIGNvbnRleHRtZW51SGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b3VjaGVuZEhhbmRsZXIoKTtcbiAgICB9O1xuXG4gICAgdmFyIHRyYXBGb2N1c0luc2lkZU92ZXJsYXkgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAob3ZlcmxheS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snICYmIChvdmVybGF5LmNvbnRhaW5zICYmICFvdmVybGF5LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGluaXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGZvckVhY2ggcG9seWZpbGwgZm9yIElFOFxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0ODI3NDQzLzEwNzc4NDZcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIGlmICghW10uZm9yRWFjaCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGZpbHRlciBwb2x5ZmlsbCBmb3IgSUU4XG4gICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZWxpcGVyZWxtYW4vMTAzMTY1NlxuICAgIGlmICghW10uZmlsdGVyKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbihhLCBiLCBjLCBkLCBlKSB7XG4gICAgICAgICAgICBjID0gdGhpcztcbiAgICAgICAgICAgIGQgPSBbXTtcbiAgICAgICAgICAgIGZvciAoZSA9IDA7IGUgPCBjLmxlbmd0aDsgZSsrKVxuICAgICAgICAgICAgICAgIGEuY2FsbChiLCBjW2VdLCBlLCBjKSAmJiBkLnB1c2goY1tlXSk7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gICAgLy8gU2NyaXB0IGVudHJ5IHBvaW50XG4gICAgZnVuY3Rpb24gcnVuKHNlbGVjdG9yLCB1c2VyT3B0aW9ucykge1xuICAgICAgICAvLyBGaWxsIHN1cHBvcnRzIG9iamVjdFxuICAgICAgICBzdXBwb3J0cy50cmFuc2Zvcm1zID0gdGVzdFRyYW5zZm9ybXNTdXBwb3J0KCk7XG4gICAgICAgIHN1cHBvcnRzLnN2ZyA9IHRlc3RTdmdTdXBwb3J0KCk7XG4gICAgICAgIHN1cHBvcnRzLnBhc3NpdmVFdmVudHMgPSB0ZXN0UGFzc2l2ZUV2ZW50c1N1cHBvcnQoKTtcblxuICAgICAgICBidWlsZE92ZXJsYXkoKTtcbiAgICAgICAgcmVtb3ZlRnJvbUNhY2hlKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGJpbmRJbWFnZUNsaWNrTGlzdGVuZXJzKHNlbGVjdG9yLCB1c2VyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEltYWdlQ2xpY2tMaXN0ZW5lcnMoc2VsZWN0b3IsIHVzZXJPcHRpb25zKSB7XG4gICAgICAgIC8vIEZvciBlYWNoIGdhbGxlcnkgYmluZCBhIGNsaWNrIGV2ZW50IHRvIGV2ZXJ5IGltYWdlIGluc2lkZSBpdFxuICAgICAgICB2YXIgZ2FsbGVyeU5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIHZhciBzZWxlY3RvckRhdGEgPSB7XG4gICAgICAgICAgICBnYWxsZXJpZXM6IFtdLFxuICAgICAgICAgICAgbm9kZUxpc3Q6IGdhbGxlcnlOb2RlTGlzdFxuICAgICAgICB9O1xuICAgICAgICBkYXRhW3NlbGVjdG9yXSA9IHNlbGVjdG9yRGF0YTtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZ2FsbGVyeU5vZGVMaXN0LCBmdW5jdGlvbihnYWxsZXJ5RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHVzZXJPcHRpb25zICYmIHVzZXJPcHRpb25zLmZpbHRlcikge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdXNlck9wdGlvbnMuZmlsdGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXQgbm9kZXMgZnJvbSBnYWxsZXJ5IGVsZW1lbnRzIG9yIHNpbmdsZS1lbGVtZW50IGdhbGxlcmllc1xuICAgICAgICAgICAgdmFyIHRhZ3NOb2RlTGlzdCA9IFtdO1xuICAgICAgICAgICAgaWYgKGdhbGxlcnlFbGVtZW50LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICAgICAgICAgIHRhZ3NOb2RlTGlzdCA9IFtnYWxsZXJ5RWxlbWVudF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhZ3NOb2RlTGlzdCA9IGdhbGxlcnlFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZpbHRlciAnYScgZWxlbWVudHMgZnJvbSB0aG9zZSBub3QgbGlua2luZyB0byBpbWFnZXNcbiAgICAgICAgICAgIHRhZ3NOb2RlTGlzdCA9IFtdLmZpbHRlci5jYWxsKHRhZ3NOb2RlTGlzdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKHVzZXJPcHRpb25zICYmIHVzZXJPcHRpb25zLmlnbm9yZUNsYXNzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoZWxlbWVudC5ocmVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0YWdzTm9kZUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZ2FsbGVyeSA9IFtdO1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHRhZ3NOb2RlTGlzdCwgZnVuY3Rpb24oaW1hZ2VFbGVtZW50LCBpbWFnZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlRWxlbWVudENsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID8gZXZlbnQucHJldmVudERlZmF1bHQoKSA6IGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVPdmVybGF5KGdhbGxlcnksIHVzZXJPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd092ZXJsYXkoaW1hZ2VJbmRleCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXI6IGltYWdlRWxlbWVudENsaWNrSGFuZGxlcixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50OiBpbWFnZUVsZW1lbnRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJpbmQoaW1hZ2VFbGVtZW50LCAnY2xpY2snLCBpbWFnZUVsZW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgICAgIGdhbGxlcnkucHVzaChpbWFnZUl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxlY3RvckRhdGEuZ2FsbGVyaWVzLnB1c2goZ2FsbGVyeSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RvckRhdGEuZ2FsbGVyaWVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyQ2FjaGVkRGF0YSgpIHtcbiAgICAgICAgZm9yICh2YXIgc2VsZWN0b3IgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUNhY2hlKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21DYWNoZShzZWxlY3Rvcikge1xuICAgICAgICBpZiAoIWRhdGEuaGFzT3duUHJvcGVydHkoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdhbGxlcmllcyA9IGRhdGFbc2VsZWN0b3JdLmdhbGxlcmllcztcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGdhbGxlcmllcywgZnVuY3Rpb24oZ2FsbGVyeSkge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGdhbGxlcnksIGZ1bmN0aW9uKGltYWdlSXRlbSkge1xuICAgICAgICAgICAgICAgIHVuYmluZChpbWFnZUl0ZW0uaW1hZ2VFbGVtZW50LCAnY2xpY2snLCBpbWFnZUl0ZW0uZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudEdhbGxlcnkgPT09IGdhbGxlcnkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50R2FsbGVyeSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGUgZGF0YVtzZWxlY3Rvcl07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRPdmVybGF5KCkge1xuICAgICAgICBvdmVybGF5ID0gZ2V0QnlJRCgnYmFndWV0dGVCb3gtb3ZlcmxheScpO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgb3ZlcmxheSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBpZiAob3ZlcmxheSkge1xuICAgICAgICAgICAgc2xpZGVyID0gZ2V0QnlJRCgnYmFndWV0dGVCb3gtc2xpZGVyJyk7XG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbiA9IGdldEJ5SUQoJ3ByZXZpb3VzLWJ1dHRvbicpO1xuICAgICAgICAgICAgbmV4dEJ1dHRvbiA9IGdldEJ5SUQoJ25leHQtYnV0dG9uJyk7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbiA9IGdldEJ5SUQoJ2Nsb3NlLWJ1dHRvbicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSBvdmVybGF5IGVsZW1lbnRcbiAgICAgICAgb3ZlcmxheSA9IGNyZWF0ZSgnZGl2Jyk7XG4gICAgICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICAgICAgICBvdmVybGF5LmlkID0gJ2JhZ3VldHRlQm94LW92ZXJsYXknO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgICAvLyBDcmVhdGUgZ2FsbGVyeSBzbGlkZXIgZWxlbWVudFxuICAgICAgICBzbGlkZXIgPSBjcmVhdGUoJ2RpdicpO1xuICAgICAgICBzbGlkZXIuaWQgPSAnYmFndWV0dGVCb3gtc2xpZGVyJztcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZChzbGlkZXIpO1xuICAgICAgICAvLyBDcmVhdGUgYWxsIG5lY2Vzc2FyeSBidXR0b25zXG4gICAgICAgIHByZXZpb3VzQnV0dG9uID0gY3JlYXRlKCdidXR0b24nKTtcbiAgICAgICAgcHJldmlvdXNCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5pZCA9ICdwcmV2aW91cy1idXR0b24nO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnUHJldmlvdXMnKTtcbiAgICAgICAgcHJldmlvdXNCdXR0b24uaW5uZXJIVE1MID0gc3VwcG9ydHMuc3ZnID8gbGVmdEFycm93IDogJyZsdDsnO1xuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKHByZXZpb3VzQnV0dG9uKTtcblxuICAgICAgICBuZXh0QnV0dG9uID0gY3JlYXRlKCdidXR0b24nKTtcbiAgICAgICAgbmV4dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIG5leHRCdXR0b24uaWQgPSAnbmV4dC1idXR0b24nO1xuICAgICAgICBuZXh0QnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdOZXh0Jyk7XG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJIVE1MID0gc3VwcG9ydHMuc3ZnID8gcmlnaHRBcnJvdyA6ICcmZ3Q7JztcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKTtcblxuICAgICAgICBjbG9zZUJ1dHRvbiA9IGNyZWF0ZSgnYnV0dG9uJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgY2xvc2VCdXR0b24uaWQgPSAnY2xvc2UtYnV0dG9uJztcbiAgICAgICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Nsb3NlJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IHN1cHBvcnRzLnN2ZyA/IGNsb3NlWCA6ICcmdGltZXM7JztcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NOYW1lID0gbmV4dEJ1dHRvbi5jbGFzc05hbWUgPSBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAnYmFndWV0dGVCb3gtYnV0dG9uJztcblxuICAgICAgICBiaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnQgYXJyb3dcbiAgICAgICAgICAgIHNob3dQcmV2aW91c0ltYWdlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTogLy8gUmlnaHQgYXJyb3dcbiAgICAgICAgICAgIHNob3dOZXh0SW1hZ2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OiAvLyBFc2NcbiAgICAgICAgICAgIGhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNjogLy8gSG9tZVxuICAgICAgICAgICAgc2hvd0ZpcnN0SW1hZ2UoZXZlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzU6IC8vIEVuZFxuICAgICAgICAgICAgc2hvd0xhc3RJbWFnZShldmVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gc3VwcG9ydHMucGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogbnVsbDtcbiAgICAgICAgYmluZChvdmVybGF5LCAnY2xpY2snLCBvdmVybGF5Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgYmluZChwcmV2aW91c0J1dHRvbiwgJ2NsaWNrJywgcHJldmlvdXNCdXR0b25DbGlja0hhbmRsZXIpO1xuICAgICAgICBiaW5kKG5leHRCdXR0b24sICdjbGljaycsIG5leHRCdXR0b25DbGlja0hhbmRsZXIpO1xuICAgICAgICBiaW5kKGNsb3NlQnV0dG9uLCAnY2xpY2snLCBjbG9zZUJ1dHRvbkNsaWNrSGFuZGxlcik7XG4gICAgICAgIGJpbmQoc2xpZGVyLCAnY29udGV4dG1lbnUnLCBjb250ZXh0bWVudUhhbmRsZXIpO1xuICAgICAgICBiaW5kKG92ZXJsYXksICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydEhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICBiaW5kKG92ZXJsYXksICd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgYmluZChvdmVybGF5LCAndG91Y2hlbmQnLCB0b3VjaGVuZEhhbmRsZXIpO1xuICAgICAgICBiaW5kKGRvY3VtZW50LCAnZm9jdXMnLCB0cmFwRm9jdXNJbnNpZGVPdmVybGF5LCB0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gc3VwcG9ydHMucGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogbnVsbDtcbiAgICAgICAgdW5iaW5kKG92ZXJsYXksICdjbGljaycsIG92ZXJsYXlDbGlja0hhbmRsZXIpO1xuICAgICAgICB1bmJpbmQocHJldmlvdXNCdXR0b24sICdjbGljaycsIHByZXZpb3VzQnV0dG9uQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgdW5iaW5kKG5leHRCdXR0b24sICdjbGljaycsIG5leHRCdXR0b25DbGlja0hhbmRsZXIpO1xuICAgICAgICB1bmJpbmQoY2xvc2VCdXR0b24sICdjbGljaycsIGNsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgdW5iaW5kKHNsaWRlciwgJ2NvbnRleHRtZW51JywgY29udGV4dG1lbnVIYW5kbGVyKTtcbiAgICAgICAgdW5iaW5kKG92ZXJsYXksICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydEhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB1bmJpbmQob3ZlcmxheSwgJ3RvdWNobW92ZScsIHRvdWNobW92ZUhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB1bmJpbmQob3ZlcmxheSwgJ3RvdWNoZW5kJywgdG91Y2hlbmRIYW5kbGVyKTtcbiAgICAgICAgdW5iaW5kKGRvY3VtZW50LCAnZm9jdXMnLCB0cmFwRm9jdXNJbnNpZGVPdmVybGF5LCB0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlT3ZlcmxheShnYWxsZXJ5LCB1c2VyT3B0aW9ucykge1xuICAgICAgICAvLyBJZiB0aGUgc2FtZSBnYWxsZXJ5IGlzIGJlaW5nIG9wZW5lZCBwcmV2ZW50IGZyb20gbG9hZGluZyBpdCBvbmNlIGFnYWluXG4gICAgICAgIGlmIChjdXJyZW50R2FsbGVyeSA9PT0gZ2FsbGVyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRHYWxsZXJ5ID0gZ2FsbGVyeTtcbiAgICAgICAgLy8gVXBkYXRlIGdhbGxlcnkgc3BlY2lmaWMgb3B0aW9uc1xuICAgICAgICBzZXRPcHRpb25zKHVzZXJPcHRpb25zKTtcbiAgICAgICAgLy8gRW1wdHkgc2xpZGVyIG9mIHByZXZpb3VzIGNvbnRlbnRzIChtb3JlIGVmZmVjdGl2ZSB0aGFuIC5pbm5lckhUTUwgPSBcIlwiKVxuICAgICAgICB3aGlsZSAoc2xpZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHNsaWRlci5yZW1vdmVDaGlsZChzbGlkZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2VzRWxlbWVudHMubGVuZ3RoID0gMDtcblxuICAgICAgICB2YXIgaW1hZ2VzRmlndXJlc0lkcyA9IFtdO1xuICAgICAgICB2YXIgaW1hZ2VzQ2FwdGlvbnNJZHMgPSBbXTtcbiAgICAgICAgLy8gUHJlcGFyZSBhbmQgYXBwZW5kIGltYWdlcyBjb250YWluZXJzIGFuZCBwb3B1bGF0ZSBmaWd1cmUgYW5kIGNhcHRpb25zIElEcyBhcnJheXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGZ1bGxJbWFnZTsgaSA8IGdhbGxlcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZ1bGxJbWFnZSA9IGNyZWF0ZSgnZGl2Jyk7XG4gICAgICAgICAgICBmdWxsSW1hZ2UuY2xhc3NOYW1lID0gJ2Z1bGwtaW1hZ2UnO1xuICAgICAgICAgICAgZnVsbEltYWdlLmlkID0gJ2JhZ3VldHRlLWltZy0nICsgaTtcbiAgICAgICAgICAgIGltYWdlc0VsZW1lbnRzLnB1c2goZnVsbEltYWdlKTtcblxuICAgICAgICAgICAgaW1hZ2VzRmlndXJlc0lkcy5wdXNoKCdiYWd1ZXR0ZUJveC1maWd1cmUtJyArIGkpO1xuICAgICAgICAgICAgaW1hZ2VzQ2FwdGlvbnNJZHMucHVzaCgnYmFndWV0dGVCb3gtZmlnY2FwdGlvbi0nICsgaSk7XG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoaW1hZ2VzRWxlbWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBpbWFnZXNGaWd1cmVzSWRzLmpvaW4oJyAnKSk7XG4gICAgICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgaW1hZ2VzQ2FwdGlvbnNJZHMuam9pbignICcpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFuZXdPcHRpb25zKSB7XG4gICAgICAgICAgICBuZXdPcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlsbCBvcHRpb25zIG9iamVjdFxuICAgICAgICBmb3IgKHZhciBpdGVtIGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBvcHRpb25zW2l0ZW1dID0gZGVmYXVsdHNbaXRlbV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld09wdGlvbnNbaXRlbV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1tpdGVtXSA9IG5ld09wdGlvbnNbaXRlbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogQXBwbHkgbmV3IG9wdGlvbnMgKi9cbiAgICAgICAgLy8gQ2hhbmdlIHRyYW5zaXRpb24gZm9yIHByb3BlciBhbmltYXRpb25cbiAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zaXRpb24gPSBzbGlkZXIuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9IChvcHRpb25zLmFuaW1hdGlvbiA9PT0gJ2ZhZGVJbicgPyAnb3BhY2l0eSAuNHMgZWFzZScgOlxuICAgICAgICAgICAgb3B0aW9ucy5hbmltYXRpb24gPT09ICdzbGlkZUluJyA/ICcnIDogJ25vbmUnKTtcbiAgICAgICAgLy8gSGlkZSBidXR0b25zIGlmIG5lY2Vzc2FyeVxuICAgICAgICBpZiAob3B0aW9ucy5idXR0b25zID09PSAnYXV0bycgJiYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBjdXJyZW50R2FsbGVyeS5sZW5ndGggPT09IDEpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmJ1dHRvbnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgYnV0dG9ucyBzdHlsZSB0byBoaWRlIG9yIGRpc3BsYXkgdGhlbVxuICAgICAgICBwcmV2aW91c0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gbmV4dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gKG9wdGlvbnMuYnV0dG9ucyA/ICcnIDogJ25vbmUnKTtcbiAgICAgICAgLy8gU2V0IG92ZXJsYXkgY29sb3JcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5vdmVybGF5QmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBTaWxlbmNlIHRoZSBlcnJvciBhbmQgY29udGludWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dPdmVybGF5KGNob3NlbkltYWdlSW5kZXgpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9TY3JvbGxiYXJzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdmVybGF5LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJpbmQoZG9jdW1lbnQsICdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgICAgICBjdXJyZW50SW5kZXggPSBjaG9zZW5JbWFnZUluZGV4O1xuICAgICAgICB0b3VjaCA9IHtcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgc3RhcnRYOiBudWxsLFxuICAgICAgICAgICAgc3RhcnRZOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIGxvYWRJbWFnZShjdXJyZW50SW5kZXgsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJlbG9hZE5leHQoY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIHByZWxvYWRQcmV2KGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZU9mZnNldCgpO1xuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpZiAob3B0aW9ucy5mdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICBlbnRlckZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGYWRlIGluIG92ZXJsYXlcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYm9keUNsYXNzICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKG9wdGlvbnMuYm9keUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFmdGVyU2hvdykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJTaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwKTtcbiAgICAgICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9wdGlvbnMub25DaGFuZ2UoY3VycmVudEluZGV4LCBpbWFnZXNFbGVtZW50cy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50TGFzdEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgaW5pdEZvY3VzKCk7XG4gICAgICAgIGlzT3ZlcmxheVZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRGb2N1cygpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYnV0dG9ucykge1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgICAgIGlmIChvdmVybGF5LnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBvdmVybGF5LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3ZlcmxheS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgb3ZlcmxheS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKG92ZXJsYXkubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIG92ZXJsYXkubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm5vU2Nyb2xsYmFycykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdmVybGF5LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdW5iaW5kKGRvY3VtZW50LCAna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICAgICAgLy8gRmFkZSBvdXQgYW5kIGhpZGUgdGhlIG92ZXJsYXlcbiAgICAgICAgb3ZlcmxheS5jbGFzc05hbWUgPSAnJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmJvZHlDbGFzcyAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShvcHRpb25zLmJvZHlDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hZnRlckhpZGUpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmFmdGVySGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnRMYXN0Rm9jdXMgJiYgZG9jdW1lbnRMYXN0Rm9jdXMuZm9jdXMoKTtcbiAgICAgICAgICAgIGlzT3ZlcmxheVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkSW1hZ2UoaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBpbWFnZUNvbnRhaW5lciA9IGltYWdlc0VsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgdmFyIGdhbGxlcnlJdGVtID0gY3VycmVudEdhbGxlcnlbaW5kZXhdO1xuXG4gICAgICAgIC8vIFJldHVybiBpZiB0aGUgaW5kZXggZXhjZWVkcyBwcmVwYXJlZCBpbWFnZXMgaW4gdGhlIG92ZXJsYXlcbiAgICAgICAgLy8gb3IgaWYgdGhlIGN1cnJlbnQgZ2FsbGVyeSBoYXMgYmVlbiBjaGFuZ2VkIC8gY2xvc2VkXG4gICAgICAgIGlmICh0eXBlb2YgaW1hZ2VDb250YWluZXIgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBnYWxsZXJ5SXRlbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGltYWdlIGlzIGFscmVhZHkgbG9hZGVkIHJ1biBjYWxsYmFjayBhbmQgcmV0dXJuXG4gICAgICAgIGlmIChpbWFnZUNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0pIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgZWxlbWVudCByZWZlcmVuY2UsIG9wdGlvbmFsIGNhcHRpb24gYW5kIHNvdXJjZSBwYXRoXG4gICAgICAgIHZhciBpbWFnZUVsZW1lbnQgPSBnYWxsZXJ5SXRlbS5pbWFnZUVsZW1lbnQ7XG4gICAgICAgIHZhciB0aHVtYm5haWxFbGVtZW50ID0gaW1hZ2VFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXTtcbiAgICAgICAgdmFyIGltYWdlQ2FwdGlvbiA9IHR5cGVvZiBvcHRpb25zLmNhcHRpb25zID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgIG9wdGlvbnMuY2FwdGlvbnMuY2FsbChjdXJyZW50R2FsbGVyeSwgaW1hZ2VFbGVtZW50KSA6XG4gICAgICAgICAgICBpbWFnZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhcHRpb24nKSB8fCBpbWFnZUVsZW1lbnQudGl0bGU7XG4gICAgICAgIHZhciBpbWFnZVNyYyA9IGdldEltYWdlU3JjKGltYWdlRWxlbWVudCk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBmaWd1cmUgZWxlbWVudFxuICAgICAgICB2YXIgZmlndXJlID0gY3JlYXRlKCdmaWd1cmUnKTtcbiAgICAgICAgZmlndXJlLmlkID0gJ2JhZ3VldHRlQm94LWZpZ3VyZS0nICsgaW5kZXg7XG4gICAgICAgIGZpZ3VyZS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LXNwaW5uZXJcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTFcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTJcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nO1xuICAgICAgICAvLyBJbnNlcnQgY2FwdGlvbiBpZiBhdmFpbGFibGVcbiAgICAgICAgaWYgKG9wdGlvbnMuY2FwdGlvbnMgJiYgaW1hZ2VDYXB0aW9uKSB7XG4gICAgICAgICAgICB2YXIgZmlnY2FwdGlvbiA9IGNyZWF0ZSgnZmlnY2FwdGlvbicpO1xuICAgICAgICAgICAgZmlnY2FwdGlvbi5pZCA9ICdiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLScgKyBpbmRleDtcbiAgICAgICAgICAgIGZpZ2NhcHRpb24uaW5uZXJIVE1MID0gaW1hZ2VDYXB0aW9uO1xuICAgICAgICAgICAgZmlndXJlLmFwcGVuZENoaWxkKGZpZ2NhcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpZ3VyZSk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBnYWxsZXJ5IGltZyBlbGVtZW50XG4gICAgICAgIHZhciBpbWFnZSA9IGNyZWF0ZSgnaW1nJyk7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGxvYWRlciBlbGVtZW50XG4gICAgICAgICAgICB2YXIgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWd1ZXR0ZS1pbWctJyArIGluZGV4ICsgJyAuYmFndWV0dGVCb3gtc3Bpbm5lcicpO1xuICAgICAgICAgICAgZmlndXJlLnJlbW92ZUNoaWxkKHNwaW5uZXIpO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFzeW5jICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZVNyYyk7XG4gICAgICAgIGltYWdlLmFsdCA9IHRodW1ibmFpbEVsZW1lbnQgPyB0aHVtYm5haWxFbGVtZW50LmFsdCB8fCAnJyA6ICcnO1xuICAgICAgICBpZiAob3B0aW9ucy50aXRsZVRhZyAmJiBpbWFnZUNhcHRpb24pIHtcbiAgICAgICAgICAgIGltYWdlLnRpdGxlID0gaW1hZ2VDYXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgLy8gUnVuIGNhbGxiYWNrXG4gICAgICAgIGlmIChvcHRpb25zLmFzeW5jICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IGltYWdlIHNvdXJjZSBsb2NhdGlvbiwgbW9zdGx5IHVzZWQgZm9yIHJlc3BvbnNpdmUgaW1hZ2VzXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2VTcmMoaW1hZ2UpIHtcbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgaW1hZ2UgcGF0aCBmcm9tIGhyZWZcbiAgICAgICAgdmFyIHJlc3VsdCA9IGltYWdlLmhyZWY7XG4gICAgICAgIC8vIElmIGRhdGFzZXQgaXMgc3VwcG9ydGVkIGZpbmQgdGhlIG1vc3Qgc3VpdGFibGUgaW1hZ2VcbiAgICAgICAgaWYgKGltYWdlLmRhdGFzZXQpIHtcbiAgICAgICAgICAgIHZhciBzcmNzID0gW107XG4gICAgICAgICAgICAvLyBHZXQgYWxsIHBvc3NpYmxlIGltYWdlIHZlcnNpb25zIGRlcGVuZGluZyBvbiB0aGUgcmVzb2x1dGlvblxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBpbiBpbWFnZS5kYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3Vic3RyaW5nKDAsIDMpID09PSAnYXQtJyAmJiAhaXNOYU4oaXRlbS5zdWJzdHJpbmcoMykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNyY3NbaXRlbS5yZXBsYWNlKCdhdC0nLCAnJyldID0gaW1hZ2UuZGF0YXNldFtpdGVtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTb3J0IHJlc29sdXRpb25zIGFzY2VuZGluZ1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzcmNzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApIDwgcGFyc2VJbnQoYiwgMTApID8gLTEgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBHZXQgcmVhbCBzY3JlZW4gcmVzb2x1dGlvblxuICAgICAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGltYWdlIGJpZ2dlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBjdXJyZW50IHdpZHRoXG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IGtleXMubGVuZ3RoIC0gMSAmJiBrZXlzW2ldIDwgd2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSBzcmNzW2tleXNbaV1dIHx8IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIFJldHVybiBmYWxzZSBhdCB0aGUgcmlnaHQgZW5kIG9mIHRoZSBnYWxsZXJ5XG4gICAgZnVuY3Rpb24gc2hvd05leHRJbWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHNob3coY3VycmVudEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGZhbHNlIGF0IHRoZSBsZWZ0IGVuZCBvZiB0aGUgZ2FsbGVyeVxuICAgIGZ1bmN0aW9uIHNob3dQcmV2aW91c0ltYWdlKCkge1xuICAgICAgICByZXR1cm4gc2hvdyhjdXJyZW50SW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gZmFsc2UgYXQgdGhlIGxlZnQgZW5kIG9mIHRoZSBnYWxsZXJ5XG4gICAgZnVuY3Rpb24gc2hvd0ZpcnN0SW1hZ2UoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaG93KDApO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBmYWxzZSBhdCB0aGUgcmlnaHQgZW5kIG9mIHRoZSBnYWxsZXJ5XG4gICAgZnVuY3Rpb24gc2hvd0xhc3RJbWFnZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNob3coY3VycmVudEdhbGxlcnkubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSB0aGUgZ2FsbGVyeSB0byBhIHNwZWNpZmljIGluZGV4XG4gICAgICogQHBhcmFtIGBpbmRleGAge251bWJlcn0gLSB0aGUgcG9zaXRpb24gb2YgdGhlIGltYWdlXG4gICAgICogQHBhcmFtIGBnYWxsZXJ5YCB7YXJyYXl9IC0gZ2FsbGVyeSB3aGljaCBzaG91bGQgYmUgb3BlbmVkLCBpZiBvbWl0dGVkIGFzc3VtZXMgdGhlIGN1cnJlbnRseSBvcGVuZWQgb25lXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSB0cnVlIG9uIHN1Y2Nlc3Mgb3IgZmFsc2UgaWYgdGhlIGluZGV4IGlzIGludmFsaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaG93KGluZGV4LCBnYWxsZXJ5KSB7XG4gICAgICAgIGlmICghaXNPdmVybGF5VmlzaWJsZSAmJiBpbmRleCA+PSAwICYmIGluZGV4IDwgZ2FsbGVyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByZXBhcmVPdmVybGF5KGdhbGxlcnksIG9wdGlvbnMpO1xuICAgICAgICAgICAgc2hvd092ZXJsYXkoaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYm91bmNlQW5pbWF0aW9uKCdsZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID49IGltYWdlc0VsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYm91bmNlQW5pbWF0aW9uKCdyaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIGxvYWRJbWFnZShjdXJyZW50SW5kZXgsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJlbG9hZE5leHQoY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIHByZWxvYWRQcmV2KGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVPZmZzZXQoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5vbkNoYW5nZShjdXJyZW50SW5kZXgsIGltYWdlc0VsZW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyB0aGUgYm91bmNlIGFuaW1hdGlvblxuICAgICAqIEBwYXJhbSB7KCdsZWZ0J3wncmlnaHQnKX0gZGlyZWN0aW9uIC0gRGlyZWN0aW9uIG9mIHRoZSBtb3ZlbWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGJvdW5jZUFuaW1hdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgc2xpZGVyLmNsYXNzTmFtZSA9ICdib3VuY2UtZnJvbS0nICsgZGlyZWN0aW9uO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTmFtZSA9ICcnO1xuICAgICAgICB9LCA0MDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU9mZnNldCgpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IC1jdXJyZW50SW5kZXggKiAxMDAgKyAnJSc7XG4gICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGlvbiA9PT0gJ2ZhZGVJbicpIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydHMudHJhbnNmb3JtcyA/XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBzbGlkZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyBvZmZzZXQgKyAnLDAsMCknXG4gICAgICAgICAgICAgICAgICAgIDogc2xpZGVyLnN0eWxlLmxlZnQgPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgc2xpZGVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cHBvcnRzLnRyYW5zZm9ybXMgP1xuICAgICAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBzbGlkZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyBvZmZzZXQgKyAnLDAsMCknXG4gICAgICAgICAgICAgICAgOiBzbGlkZXIuc3R5bGUubGVmdCA9IG9mZnNldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENTUyAzRCBUcmFuc2Zvcm1zIHRlc3RcbiAgICBmdW5jdGlvbiB0ZXN0VHJhbnNmb3Jtc1N1cHBvcnQoKSB7XG4gICAgICAgIHZhciBkaXYgPSBjcmVhdGUoJ2RpdicpO1xuICAgICAgICByZXR1cm4gdHlwZW9mIGRpdi5zdHlsZS5wZXJzcGVjdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRpdi5zdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgLy8gSW5saW5lIFNWRyB0ZXN0XG4gICAgZnVuY3Rpb24gdGVzdFN2Z1N1cHBvcnQoKSB7XG4gICAgICAgIHZhciBkaXYgPSBjcmVhdGUoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzxzdmcvPic7XG4gICAgICAgIHJldHVybiAoZGl2LmZpcnN0Q2hpbGQgJiYgZGl2LmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKSA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICB9XG5cbiAgICAvLyBCb3Jyb3dlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWl5cmlhL2Jvb3RzdHJhcC1zbGlkZXIvcHVsbC82ODAvZmlsZXNcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBnZXR0ZXItcmV0dXJuICovXG4gICAgZnVuY3Rpb24gdGVzdFBhc3NpdmVFdmVudHNTdXBwb3J0KCkge1xuICAgICAgICB2YXIgcGFzc2l2ZUV2ZW50cyA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NpdmVFdmVudHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyAvKiBTaWxlbmNlIHRoZSBlcnJvciBhbmQgY29udGludWUgKi8gfVxuXG4gICAgICAgIHJldHVybiBwYXNzaXZlRXZlbnRzO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIGdldHRlci1yZXR1cm4gKi9cblxuICAgIGZ1bmN0aW9uIHByZWxvYWROZXh0KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCAtIGN1cnJlbnRJbmRleCA+PSBvcHRpb25zLnByZWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2FkSW1hZ2UoaW5kZXggKyAxLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHByZWxvYWROZXh0KGluZGV4ICsgMSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZWxvYWRQcmV2KGluZGV4KSB7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggLSBpbmRleCA+PSBvcHRpb25zLnByZWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2FkSW1hZ2UoaW5kZXggLSAxLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHByZWxvYWRQcmV2KGluZGV4IC0gMSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmQoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSUU4IGZhbGxiYWNrXG4gICAgICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBgZXZlbnRgIGFuZCBgZXZlbnQudGFyZ2V0YCBhcmUgbm90IHByb3ZpZGVkIGluIElFOFxuICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5iaW5kKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBpZiAoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElFOCBmYWxsYmFja1xuICAgICAgICAgICAgZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJ5SUQoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGUoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95UGx1Z2luKCkge1xuICAgICAgICB1bmJpbmRFdmVudHMoKTtcbiAgICAgICAgY2xlYXJDYWNoZWREYXRhKCk7XG4gICAgICAgIHVuYmluZChkb2N1bWVudCwgJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0ucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhZ3VldHRlQm94LW92ZXJsYXknKSk7XG4gICAgICAgIGRhdGEgPSB7fTtcbiAgICAgICAgY3VycmVudEdhbGxlcnkgPSBbXTtcbiAgICAgICAgY3VycmVudEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBydW46IHJ1bixcbiAgICAgICAgc2hvdzogc2hvdyxcbiAgICAgICAgc2hvd05leHQ6IHNob3dOZXh0SW1hZ2UsXG4gICAgICAgIHNob3dQcmV2aW91czogc2hvd1ByZXZpb3VzSW1hZ2UsXG4gICAgICAgIGhpZGU6IGhpZGVPdmVybGF5LFxuICAgICAgICBkZXN0cm95OiBkZXN0cm95UGx1Z2luXG4gICAgfTtcbn0pKTtcbiIsImltcG9ydCBsaWdodGJveCBmcm9tICd+bW9kdWxlL2JhZ3VldHRlYm94LmpzL3NyYy9iYWd1ZXR0ZUJveCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgbGlnaHRib3gucnVuKCcuanMtZ2FsbGVyeScpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5hdicpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9nZ2xlLW5hdicpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyJyk7XG5cbiAgLy8gbmF2aWdhdGlvbiBidXR0b24gb24gY2xpY2ssIGJhc2ljIHRvZ2dsaW5nIG9mIGNsYXNzZXNcbiAgaWYgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFjdGl2ZScpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci0tbmF2LS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxufTtcbiIsImNvbnN0IGNsb3NlV2VsY29tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS13ZWxjb21lJyk7XG5cbmNvbnN0IHdlbGNvbWVEb25lID0gKCkgPT4ge1xuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXdlbGNvbWUnKS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lLS1kb25lJyk7XG4gIH0sIDgwMCk7IC8vIGFuaW1hdGlvbiB0aW1lIGlzIDcwMG1zXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIHNldCB0aGUgZXZlbnQgdG8gdGhlIGVzYy1rZXkgdG8gZGlzbWlzcyBzcGxhc2ggaW50cm9cbiAgZG9jdW1lbnQub25rZXlkb3duID0gZSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBjb25zdCBpc0hvbWVwYWdlID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpdGUtLWhvbWVwYWdlJyk7XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgJiYgaXNIb21lcGFnZSAmJiBjbG9zZVdlbGNvbWUpIHtcbiAgICAgIGNsb3NlV2VsY29tZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgd2VsY29tZURvbmUoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcmVtb3ZlIHRoZSB0cmFuc2l0aW9uIGFmdGVyIGl0IGNoYW5nZWRcbiAgaWYgKGNsb3NlV2VsY29tZSkge1xuICAgIGNsb3NlV2VsY29tZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB3ZWxjb21lRG9uZSk7XG4gICAgY2xvc2VXZWxjb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2VsY29tZURvbmUpO1xuICB9XG59O1xuIiwiaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuLzMtZ2xvYmFsLyEoKi50ZXN0fCouY29uZmlnKS5qcyc7XG5pbXBvcnQgKiBhcyBwYXR0ZXJucyBmcm9tICcuLi9wYXR0ZXJucy8qKi8hKCoudGVzdHwqLmNvbmZpZykuanMnO1xuXG4vLyBqcyBoYXMgbG9hZGVk4oCUcmVtb3ZlIHRoZSBuby1qcyBjbGFzc1xuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5cbi8vIGxvYWQgYW5kIGV4ZWN1dGUgYWxsIHNjcmlwdHMgZnJvbSBnbG9iYWwgYW5kIGFsbCBwYXR0ZXJucyBhdXRvbWF0aWNhbGx5XG4vLyBidXQgZXhjbHVkZSB0ZXN0IGFuZCBjb25maWcgZmlsZXMg4oCUIHRob3NlIHNob3VsZCBub3QgYmUgZXhlY3V0ZWRcbltnbG9iYWxzLCBwYXR0ZXJuc10uZm9yRWFjaChtb2R1bGUgPT4ge1xuICBPYmplY3Qua2V5cyhtb2R1bGUpLmZvckVhY2goaSA9PiB7XG4gICAgbW9kdWxlW2ldKCk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsibCIsImEiLCJiIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJtIiwiYm9keSIsImMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiayIsInJlYWR5U3RhdGUiLCJkZXRhY2hFdmVudCIsInQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImgiLCJmIiwiZyIsInN0eWxlIiwiY3NzVGV4dCIsInUiLCJ6Iiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsInNjcm9sbExlZnQiLCJzY3JvbGxXaWR0aCIsIkEiLCJwYXJlbnROb2RlIiwiQiIsImZhbWlseSIsIndlaWdodCIsInN0cmV0Y2giLCJDIiwiRCIsIkUiLCJGIiwiRyIsIkoiLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidmVuZG9yIiwiZXhlYyIsInVzZXJBZ2VudCIsInBhcnNlSW50IiwiZm9udHMiLCJLIiwiZm9udCIsIkwiLCJqb2luIiwicHJvdG90eXBlIiwibG9hZCIsInIiLCJuIiwiSCIsIkRhdGUiLCJnZXRUaW1lIiwiUHJvbWlzZSIsIk0iLCJlIiwiRXJyb3IiLCJ0aGVuIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIk4iLCJyYWNlIiwiY2xlYXJUaW1lb3V0IiwidiIsInciLCJ4IiwieSIsImQiLCJyZW1vdmVDaGlsZCIsIkkiLCJoaWRkZW4iLCJwIiwicSIsImRpciIsIm1vZHVsZSIsImZvbnRPYnNlcnZlcnMiLCJzZXNzaW9uU3RvcmFnZSIsImZvbnRzTG9hZGVkIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJmb250ZmFjZSIsInB1c2giLCJGb250RmFjZU9ic2VydmVyIiwicmVwbGFjZSIsImFsbCIsIk5vZGVMaXN0IiwiY2FsbGJhY2siLCJ0aGlzQXJnIiwiaSIsImNhbGwiLCJzZXRWaCIsInZoIiwiaW5uZXJIZWlnaHQiLCJzZXRQcm9wZXJ0eSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJvb3QiLCJmYWN0b3J5IiwidGhpcyIsImxlZnRBcnJvdyIsInJpZ2h0QXJyb3ciLCJjbG9zZVgiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJjYXB0aW9ucyIsImJ1dHRvbnMiLCJmdWxsU2NyZWVuIiwibm9TY3JvbGxiYXJzIiwiYm9keUNsYXNzIiwidGl0bGVUYWciLCJhc3luYyIsInByZWxvYWQiLCJhbmltYXRpb24iLCJhZnRlclNob3ciLCJhZnRlckhpZGUiLCJvbkNoYW5nZSIsIm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3IiLCJzdXBwb3J0cyIsIm92ZXJsYXkiLCJzbGlkZXIiLCJwcmV2aW91c0J1dHRvbiIsIm5leHRCdXR0b24iLCJjbG9zZUJ1dHRvbiIsImN1cnJlbnRHYWxsZXJ5IiwiY3VycmVudEluZGV4IiwiaXNPdmVybGF5VmlzaWJsZSIsInRvdWNoIiwidG91Y2hGbGFnIiwicmVnZXgiLCJkYXRhIiwiaW1hZ2VzRWxlbWVudHMiLCJkb2N1bWVudExhc3RGb2N1cyIsIm92ZXJsYXlDbGlja0hhbmRsZXIiLCJldmVudCIsInRhcmdldCIsImlkIiwiaW5kZXhPZiIsImhpZGVPdmVybGF5IiwicHJldmlvdXNCdXR0b25DbGlja0hhbmRsZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJzaG93UHJldmlvdXNJbWFnZSIsIm5leHRCdXR0b25DbGlja0hhbmRsZXIiLCJzaG93TmV4dEltYWdlIiwiY2xvc2VCdXR0b25DbGlja0hhbmRsZXIiLCJ0b3VjaHN0YXJ0SGFuZGxlciIsImNvdW50IiwibXVsdGl0b3VjaCIsInN0YXJ0WCIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJzdGFydFkiLCJwYWdlWSIsInRvdWNobW92ZUhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwidG91Y2hFdmVudCIsInRvdWNoZXMiLCJ0b3VjaGVuZEhhbmRsZXIiLCJjb250ZXh0bWVudUhhbmRsZXIiLCJ0cmFwRm9jdXNJbnNpZGVPdmVybGF5IiwiZGlzcGxheSIsImNvbnRhaW5zIiwiaW5pdEZvY3VzIiwiQXJyYXkiLCJmaWx0ZXIiLCJydW4iLCJzZWxlY3RvciIsInVzZXJPcHRpb25zIiwidHJhbnNmb3JtcyIsInRlc3RUcmFuc2Zvcm1zU3VwcG9ydCIsInN2ZyIsInRlc3RTdmdTdXBwb3J0IiwicGFzc2l2ZUV2ZW50cyIsInRlc3RQYXNzaXZlRXZlbnRzU3VwcG9ydCIsImJ1aWxkT3ZlcmxheSIsInJlbW92ZUZyb21DYWNoZSIsImJpbmRJbWFnZUNsaWNrTGlzdGVuZXJzIiwiZ2FsbGVyeU5vZGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdG9yRGF0YSIsImdhbGxlcmllcyIsIm5vZGVMaXN0IiwiZ2FsbGVyeUVsZW1lbnQiLCJ0YWdzTm9kZUxpc3QiLCJ0YWdOYW1lIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiaWdub3JlQ2xhc3MiLCJocmVmIiwiZ2FsbGVyeSIsImltYWdlRWxlbWVudCIsImltYWdlSW5kZXgiLCJpbWFnZUVsZW1lbnRDbGlja0hhbmRsZXIiLCJwcmVwYXJlT3ZlcmxheSIsInNob3dPdmVybGF5IiwiaW1hZ2VJdGVtIiwiZXZlbnRIYW5kbGVyIiwiYmluZCIsImNsZWFyQ2FjaGVkRGF0YSIsImhhc093blByb3BlcnR5IiwidW5iaW5kIiwiZ2V0QnlJRCIsImNyZWF0ZSIsImlubmVySFRNTCIsImJpbmRFdmVudHMiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJzaG93Rmlyc3RJbWFnZSIsInNob3dMYXN0SW1hZ2UiLCJwYXNzaXZlIiwidW5iaW5kRXZlbnRzIiwic2V0T3B0aW9ucyIsImZpcnN0Q2hpbGQiLCJpbWFnZXNGaWd1cmVzSWRzIiwiaW1hZ2VzQ2FwdGlvbnNJZHMiLCJmdWxsSW1hZ2UiLCJuZXdPcHRpb25zIiwiaXRlbSIsInRyYW5zaXRpb24iLCJ3ZWJraXRUcmFuc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiY2hvc2VuSW1hZ2VJbmRleCIsIm92ZXJmbG93WSIsImxvYWRJbWFnZSIsInByZWxvYWROZXh0IiwicHJlbG9hZFByZXYiLCJ1cGRhdGVPZmZzZXQiLCJlbnRlckZ1bGxTY3JlZW4iLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsImZ1bGxzY3JlZW4iLCJyZW1vdmUiLCJpbmRleCIsImltYWdlQ29udGFpbmVyIiwiZ2FsbGVyeUl0ZW0iLCJ0aHVtYm5haWxFbGVtZW50IiwiaW1hZ2VDYXB0aW9uIiwiZ2V0QXR0cmlidXRlIiwidGl0bGUiLCJpbWFnZVNyYyIsImdldEltYWdlU3JjIiwiZmlndXJlIiwiZmlnY2FwdGlvbiIsImltYWdlIiwib25sb2FkIiwic3Bpbm5lciIsInF1ZXJ5U2VsZWN0b3IiLCJhbHQiLCJyZXN1bHQiLCJkYXRhc2V0Iiwic3JjcyIsInN1YnN0cmluZyIsImlzTmFOIiwic29ydCIsImlubmVyV2lkdGgiLCJkZXZpY2VQaXhlbFJhdGlvIiwic2hvdyIsImJvdW5jZUFuaW1hdGlvbiIsImRpcmVjdGlvbiIsIm9mZnNldCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ3ZWJraXRUcmFuc2Zvcm0iLCJsZWZ0IiwiZGl2IiwicGVyc3BlY3RpdmUiLCJ3ZWJraXRQZXJzcGVjdGl2ZSIsIm5hbWVzcGFjZVVSSSIsIm9wdHMiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNyY0VsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRlc3Ryb3lQbHVnaW4iLCJzaG93TmV4dCIsInNob3dQcmV2aW91cyIsImhpZGUiLCJkZXN0cm95IiwibGlnaHRib3giLCJuYXYiLCJidXR0b24iLCJoZWFkZXIiLCJ0b2dnbGUiLCJjbG9zZVdlbGNvbWUiLCJ3ZWxjb21lRG9uZSIsIm9ua2V5ZG93biIsImlzSG9tZXBhZ2UiLCJnbG9iYWxzIiwicGF0dGVybnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Q0FBQTtDQUFzRSxlQUFVO0NBQUMsYUFBU0EsQ0FBVCxDQUFXQyxDQUFYLEVBQWFDLENBQWIsRUFBZTtDQUFDQyxNQUFBQSxRQUFRLENBQUNDLGdCQUFULEdBQTBCSCxDQUFDLENBQUNHLGdCQUFGLENBQW1CLFFBQW5CLEVBQTRCRixDQUE1QixFQUE4QixDQUFDLENBQS9CLENBQTFCLEdBQTRERCxDQUFDLENBQUNJLFdBQUYsQ0FBYyxRQUFkLEVBQXVCSCxDQUF2QixDQUE1RDtDQUFzRjs7Q0FBQSxhQUFTSSxDQUFULENBQVdMLENBQVgsRUFBYTtDQUFDRSxNQUFBQSxRQUFRLENBQUNJLElBQVQsR0FBY04sQ0FBQyxFQUFmLEdBQWtCRSxRQUFRLENBQUNDLGdCQUFULEdBQTBCRCxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE2QyxTQUFTSSxDQUFULEdBQVk7Q0FBQ0wsUUFBQUEsUUFBUSxDQUFDTSxtQkFBVCxDQUE2QixrQkFBN0IsRUFBZ0RELENBQWhEO0NBQW1EUCxRQUFBQSxDQUFDO0NBQUcsT0FBakgsQ0FBMUIsR0FBNklFLFFBQVEsQ0FBQ0UsV0FBVCxDQUFxQixvQkFBckIsRUFBMEMsU0FBU0ssQ0FBVCxHQUFZO0NBQUMsWUFBRyxpQkFBZVAsUUFBUSxDQUFDUSxVQUF4QixJQUFvQyxjQUFZUixRQUFRLENBQUNRLFVBQTVELEVBQXVFUixRQUFRLENBQUNTLFdBQVQsQ0FBcUIsb0JBQXJCLEVBQTBDRixDQUExQyxHQUE2Q1QsQ0FBQyxFQUE5QztDQUFpRCxPQUEvSyxDQUEvSjtDQUFnVjs7Q0FBQyxhQUFTWSxDQUFULENBQVdaLENBQVgsRUFBYTtDQUFDLFdBQUtBLENBQUwsR0FBT0UsUUFBUSxDQUFDVyxhQUFULENBQXVCLEtBQXZCLENBQVA7Q0FBcUMsV0FBS2IsQ0FBTCxDQUFPYyxZQUFQLENBQW9CLGFBQXBCLEVBQWtDLE1BQWxDO0NBQTBDLFdBQUtkLENBQUwsQ0FBT2UsV0FBUCxDQUFtQmIsUUFBUSxDQUFDYyxjQUFULENBQXdCaEIsQ0FBeEIsQ0FBbkI7Q0FBK0MsV0FBS0MsQ0FBTCxHQUFPQyxRQUFRLENBQUNXLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUDtDQUFzQyxXQUFLTixDQUFMLEdBQU9MLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixNQUF2QixDQUFQO0NBQXNDLFdBQUtJLENBQUwsR0FBT2YsUUFBUSxDQUFDVyxhQUFULENBQXVCLE1BQXZCLENBQVA7Q0FBc0MsV0FBS0ssQ0FBTCxHQUFPaEIsUUFBUSxDQUFDVyxhQUFULENBQXVCLE1BQXZCLENBQVA7Q0FBc0MsV0FBS00sQ0FBTCxHQUFPLENBQUMsQ0FBUjtDQUFVLFdBQUtsQixDQUFMLENBQU9tQixLQUFQLENBQWFDLE9BQWIsR0FBcUIsOEdBQXJCO0NBQW9JLFdBQUtkLENBQUwsQ0FBT2EsS0FBUCxDQUFhQyxPQUFiLEdBQXFCLDhHQUFyQjtDQUN4OEIsV0FBS0gsQ0FBTCxDQUFPRSxLQUFQLENBQWFDLE9BQWIsR0FBcUIsOEdBQXJCO0NBQW9JLFdBQUtKLENBQUwsQ0FBT0csS0FBUCxDQUFhQyxPQUFiLEdBQXFCLDRFQUFyQjtDQUFrRyxXQUFLcEIsQ0FBTCxDQUFPYyxXQUFQLENBQW1CLEtBQUtFLENBQXhCO0NBQTJCLFdBQUtWLENBQUwsQ0FBT1EsV0FBUCxDQUFtQixLQUFLRyxDQUF4QjtDQUEyQixXQUFLbEIsQ0FBTCxDQUFPZSxXQUFQLENBQW1CLEtBQUtkLENBQXhCO0NBQTJCLFdBQUtELENBQUwsQ0FBT2UsV0FBUCxDQUFtQixLQUFLUixDQUF4QjtDQUEyQjs7Q0FDbFYsYUFBU2UsQ0FBVCxDQUFXdEIsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7Q0FBQ0QsTUFBQUEsQ0FBQyxDQUFDQSxDQUFGLENBQUlvQixLQUFKLENBQVVDLE9BQVYsR0FBa0IsK0xBQTZMcEIsQ0FBN0wsR0FBK0wsR0FBak47Q0FBcU47O0NBQUEsYUFBU3NCLENBQVQsQ0FBV3ZCLENBQVgsRUFBYTtDQUFDLFVBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDQSxDQUFGLENBQUl3QixXQUFWO0NBQUEsVUFBc0JqQixDQUFDLEdBQUNOLENBQUMsR0FBQyxHQUExQjtDQUE4QkQsTUFBQUEsQ0FBQyxDQUFDa0IsQ0FBRixDQUFJRSxLQUFKLENBQVVLLEtBQVYsR0FBZ0JsQixDQUFDLEdBQUMsSUFBbEI7Q0FBdUJQLE1BQUFBLENBQUMsQ0FBQ08sQ0FBRixDQUFJbUIsVUFBSixHQUFlbkIsQ0FBZjtDQUFpQlAsTUFBQUEsQ0FBQyxDQUFDQyxDQUFGLENBQUl5QixVQUFKLEdBQWUxQixDQUFDLENBQUNDLENBQUYsQ0FBSTBCLFdBQUosR0FBZ0IsR0FBL0I7Q0FBbUMsYUFBTzNCLENBQUMsQ0FBQ21CLENBQUYsS0FBTWxCLENBQU4sSUFBU0QsQ0FBQyxDQUFDbUIsQ0FBRixHQUFJbEIsQ0FBSixFQUFNLENBQUMsQ0FBaEIsSUFBbUIsQ0FBQyxDQUEzQjtDQUE2Qjs7Q0FBQSxhQUFTMkIsQ0FBVCxDQUFXNUIsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7Q0FBQyxlQUFTTSxDQUFULEdBQVk7Q0FBQyxZQUFJUCxDQUFDLEdBQUNTLENBQU47Q0FBUWMsUUFBQUEsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFELElBQU1BLENBQUMsQ0FBQ0EsQ0FBRixDQUFJNkIsVUFBVixJQUFzQjVCLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDbUIsQ0FBSCxDQUF2QjtDQUE2Qjs7Q0FBQSxVQUFJVixDQUFDLEdBQUNULENBQU47Q0FBUUQsTUFBQUEsQ0FBQyxDQUFDQyxDQUFDLENBQUNDLENBQUgsRUFBS00sQ0FBTCxDQUFEO0NBQVNSLE1BQUFBLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDTyxDQUFILEVBQUtBLENBQUwsQ0FBRDtDQUFTZ0IsTUFBQUEsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFEO0NBQUs7O0NBQUMsYUFBUzhCLENBQVQsQ0FBVzlCLENBQVgsRUFBYUMsQ0FBYixFQUFlO0NBQUMsVUFBSU0sQ0FBQyxHQUFDTixDQUFDLElBQUUsRUFBVDtDQUFZLFdBQUs4QixNQUFMLEdBQVkvQixDQUFaO0NBQWMsV0FBS29CLEtBQUwsR0FBV2IsQ0FBQyxDQUFDYSxLQUFGLElBQVMsUUFBcEI7Q0FBNkIsV0FBS1ksTUFBTCxHQUFZekIsQ0FBQyxDQUFDeUIsTUFBRixJQUFVLFFBQXRCO0NBQStCLFdBQUtDLE9BQUwsR0FBYTFCLENBQUMsQ0FBQzBCLE9BQUYsSUFBVyxRQUF4QjtDQUFpQzs7Q0FBQSxRQUFJQyxDQUFDLEdBQUMsSUFBTjtDQUFBLFFBQVdDLENBQUMsR0FBQyxJQUFiO0NBQUEsUUFBa0JDLENBQUMsR0FBQyxJQUFwQjtDQUFBLFFBQXlCQyxDQUFDLEdBQUMsSUFBM0I7O0NBQWdDLGFBQVNDLENBQVQsR0FBWTtDQUFDLFVBQUcsU0FBT0gsQ0FBVixFQUFZLElBQUdJLENBQUMsTUFBSSxRQUFRQyxJQUFSLENBQWFDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsTUFBOUIsQ0FBUixFQUE4QztDQUFDLFlBQUkzQyxDQUFDLEdBQUMsb0RBQW9ENEMsSUFBcEQsQ0FBeURILE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkcsU0FBMUUsQ0FBTjtDQUEyRlYsUUFBQUEsQ0FBQyxHQUFDLENBQUMsQ0FBQ25DLENBQUYsSUFBSyxNQUFJOEMsUUFBUSxDQUFDOUMsQ0FBQyxDQUFDLENBQUQsQ0FBRixFQUFNLEVBQU4sQ0FBbkI7Q0FBNkIsT0FBdkssTUFBNEttQyxDQUFDLEdBQUMsQ0FBQyxDQUFIO0NBQUssYUFBT0EsQ0FBUDtDQUFTOztDQUFBLGFBQVNJLENBQVQsR0FBWTtDQUFDLGVBQU9GLENBQVAsS0FBV0EsQ0FBQyxHQUFDLENBQUMsQ0FBQ25DLFFBQVEsQ0FBQzZDLEtBQXhCO0NBQStCLGFBQU9WLENBQVA7Q0FBUzs7Q0FDMTRCLGFBQVNXLENBQVQsR0FBWTtDQUFDLFVBQUcsU0FBT1osQ0FBVixFQUFZO0NBQUMsWUFBSXBDLENBQUMsR0FBQ0UsUUFBUSxDQUFDVyxhQUFULENBQXVCLEtBQXZCLENBQU47O0NBQW9DLFlBQUc7Q0FBQ2IsVUFBQUEsQ0FBQyxDQUFDb0IsS0FBRixDQUFRNkIsSUFBUixHQUFhLDRCQUFiO0NBQTBDLFNBQTlDLENBQThDLE9BQU1oRCxDQUFOLEVBQVE7O0NBQUVtQyxRQUFBQSxDQUFDLEdBQUMsT0FBS3BDLENBQUMsQ0FBQ29CLEtBQUYsQ0FBUTZCLElBQWY7Q0FBb0I7O0NBQUEsYUFBT2IsQ0FBUDtDQUFTOztDQUFBLGFBQVNjLENBQVQsQ0FBV2xELENBQVgsRUFBYUMsQ0FBYixFQUFlO0NBQUMsYUFBTSxDQUFDRCxDQUFDLENBQUNvQixLQUFILEVBQVNwQixDQUFDLENBQUNnQyxNQUFYLEVBQWtCZ0IsQ0FBQyxLQUFHaEQsQ0FBQyxDQUFDaUMsT0FBTCxHQUFhLEVBQWhDLEVBQW1DLE9BQW5DLEVBQTJDaEMsQ0FBM0MsRUFBOENrRCxJQUE5QyxDQUFtRCxHQUFuRCxDQUFOO0NBQThEOztDQUNqT3JCLElBQUFBLENBQUMsQ0FBQ3NCLFNBQUYsQ0FBWUMsSUFBWixHQUFpQixVQUFTckQsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7Q0FBQyxVQUFJTSxDQUFDLEdBQUMsSUFBTjtDQUFBLFVBQVdFLENBQUMsR0FBQ1QsQ0FBQyxJQUFFLFNBQWhCO0NBQUEsVUFBMEJzRCxDQUFDLEdBQUMsQ0FBNUI7Q0FBQSxVQUE4QkMsQ0FBQyxHQUFDdEQsQ0FBQyxJQUFFLEdBQW5DO0NBQUEsVUFBdUN1RCxDQUFDLEdBQUUsSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBekM7Q0FBOEQsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBUzNELENBQVQsRUFBV0MsQ0FBWCxFQUFhO0NBQUMsWUFBR3NDLENBQUMsTUFBSSxDQUFDRCxDQUFDLEVBQVYsRUFBYTtDQUFDLGNBQUlzQixDQUFDLEdBQUMsSUFBSUQsT0FBSixDQUFZLFVBQVMzRCxDQUFULEVBQVdDLENBQVgsRUFBYTtDQUFDLHFCQUFTNEQsQ0FBVCxHQUFZO0NBQUUsa0JBQUlKLElBQUosRUFBRCxDQUFXQyxPQUFYLEtBQXFCRixDQUFyQixJQUF3QkQsQ0FBeEIsR0FBMEJ0RCxDQUFDLENBQUM2RCxLQUFLLENBQUMsS0FBR1AsQ0FBSCxHQUFLLHFCQUFOLENBQU4sQ0FBM0IsR0FBK0RyRCxRQUFRLENBQUM2QyxLQUFULENBQWVNLElBQWYsQ0FBb0JILENBQUMsQ0FBQzNDLENBQUQsRUFBRyxNQUFJQSxDQUFDLENBQUN3QixNQUFOLEdBQWEsR0FBaEIsQ0FBckIsRUFBMEN0QixDQUExQyxFQUE2Q3NELElBQTdDLENBQWtELFVBQVN4RCxDQUFULEVBQVc7Q0FBQyxxQkFBR0EsQ0FBQyxDQUFDeUQsTUFBTCxHQUFZaEUsQ0FBQyxFQUFiLEdBQWdCaUUsVUFBVSxDQUFDSixDQUFELEVBQUcsRUFBSCxDQUExQjtDQUFpQyxlQUEvRixFQUFnRzVELENBQWhHLENBQS9EO0NBQWtLOztDQUFBNEQsWUFBQUEsQ0FBQztDQUFHLFdBQTdNLENBQU47Q0FBQSxjQUFxTkssQ0FBQyxHQUFDLElBQUlQLE9BQUosQ0FBWSxVQUFTM0QsQ0FBVCxFQUFXTyxDQUFYLEVBQWE7Q0FBQytDLFlBQUFBLENBQUMsR0FBQ1csVUFBVSxDQUFDLFlBQVU7Q0FBQzFELGNBQUFBLENBQUMsQ0FBQ3VELEtBQUssQ0FBQyxLQUFHUCxDQUFILEdBQUsscUJBQU4sQ0FBTixDQUFEO0NBQXFDLGFBQWpELEVBQWtEQSxDQUFsRCxDQUFaO0NBQWlFLFdBQTNGLENBQXZOO0NBQW9USSxVQUFBQSxPQUFPLENBQUNRLElBQVIsQ0FBYSxDQUFDRCxDQUFELEVBQUdOLENBQUgsQ0FBYixFQUFvQkcsSUFBcEIsQ0FBeUIsWUFBVTtDQUFDSyxZQUFBQSxZQUFZLENBQUNkLENBQUQsQ0FBWjtDQUFnQnRELFlBQUFBLENBQUMsQ0FBQ08sQ0FBRCxDQUFEO0NBQUssV0FBekQsRUFDaGNOLENBRGdjO0NBQzdiLFNBRDJILE1BQ3RISSxDQUFDLENBQUMsWUFBVTtDQUFDLG1CQUFTZ0UsQ0FBVCxHQUFZO0NBQUMsZ0JBQUlwRSxDQUFKO0NBQU0sZ0JBQUdBLENBQUMsR0FBQyxDQUFDLENBQUQsSUFBSWlCLENBQUosSUFBTyxDQUFDLENBQUQsSUFBSUMsQ0FBWCxJQUFjLENBQUMsQ0FBRCxJQUFJRCxDQUFKLElBQU8sQ0FBQyxDQUFELElBQUlELENBQXpCLElBQTRCLENBQUMsQ0FBRCxJQUFJRSxDQUFKLElBQU8sQ0FBQyxDQUFELElBQUlGLENBQTVDLEVBQThDLENBQUNoQixDQUFDLEdBQUNpQixDQUFDLElBQUVDLENBQUgsSUFBTUQsQ0FBQyxJQUFFRCxDQUFULElBQVlFLENBQUMsSUFBRUYsQ0FBbEIsTUFBdUIsU0FBT2lCLENBQVAsS0FBV2pDLENBQUMsR0FBQyxzQ0FBc0MyQyxJQUF0QyxDQUEyQ0gsTUFBTSxDQUFDQyxTQUFQLENBQWlCRyxTQUE1RCxDQUFGLEVBQXlFWCxDQUFDLEdBQUMsQ0FBQyxDQUFDakMsQ0FBRixLQUFNLE1BQUk2QyxRQUFRLENBQUM3QyxDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU0sRUFBTixDQUFaLElBQXVCLFFBQU02QyxRQUFRLENBQUM3QyxDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU0sRUFBTixDQUFkLElBQXlCLE1BQUk2QyxRQUFRLENBQUM3QyxDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU0sRUFBTixDQUFsRSxDQUF0RixHQUFvS0EsQ0FBQyxHQUFDaUMsQ0FBQyxLQUFHaEIsQ0FBQyxJQUFFb0QsQ0FBSCxJQUFNbkQsQ0FBQyxJQUFFbUQsQ0FBVCxJQUFZckQsQ0FBQyxJQUFFcUQsQ0FBZixJQUFrQnBELENBQUMsSUFBRXFELENBQUgsSUFBTXBELENBQUMsSUFBRW9ELENBQVQsSUFBWXRELENBQUMsSUFBRXNELENBQWpDLElBQW9DckQsQ0FBQyxJQUFFc0QsQ0FBSCxJQUFNckQsQ0FBQyxJQUFFcUQsQ0FBVCxJQUFZdkQsQ0FBQyxJQUFFdUQsQ0FBdEQsQ0FBOUwsR0FBd1B2RSxDQUFDLEdBQUMsQ0FBQ0EsQ0FBM1A7Q0FBNlBBLFlBQUFBLENBQUMsS0FBR3dFLENBQUMsQ0FBQzVDLFVBQUYsSUFBYzRDLENBQUMsQ0FBQzVDLFVBQUYsQ0FBYTZDLFdBQWIsQ0FBeUJELENBQXpCLENBQWQsRUFBMENMLFlBQVksQ0FBQ2QsQ0FBRCxDQUF0RCxFQUEwRHRELENBQUMsQ0FBQ08sQ0FBRCxDQUE5RCxDQUFEO0NBQW9FOztDQUFBLG1CQUFTb0UsQ0FBVCxHQUFZO0NBQUMsZ0JBQUksSUFBSWxCLElBQUosRUFBRCxDQUFXQyxPQUFYLEtBQXFCRixDQUFyQixJQUF3QkQsQ0FBM0IsRUFBNkJrQixDQUFDLENBQUM1QyxVQUFGLElBQWM0QyxDQUFDLENBQUM1QyxVQUFGLENBQWE2QyxXQUFiLENBQXlCRCxDQUF6QixDQUFkLEVBQTBDeEUsQ0FBQyxDQUFDNkQsS0FBSyxDQUFDLEtBQ25mUCxDQURtZixHQUNqZixxQkFEZ2YsQ0FBTixDQUEzQyxDQUE3QixLQUN0WTtDQUFDLGtCQUFJdkQsQ0FBQyxHQUFDRSxRQUFRLENBQUMwRSxNQUFmO0NBQXNCLGtCQUFHLENBQUMsQ0FBRCxLQUFLNUUsQ0FBTCxJQUFRLEtBQUssQ0FBTCxLQUFTQSxDQUFwQixFQUFzQmtCLENBQUMsR0FBQzJDLENBQUMsQ0FBQzdELENBQUYsQ0FBSXdCLFdBQU4sRUFBa0JMLENBQUMsR0FBQzBELENBQUMsQ0FBQzdFLENBQUYsQ0FBSXdCLFdBQXhCLEVBQW9DUCxDQUFDLEdBQUM2RCxDQUFDLENBQUM5RSxDQUFGLENBQUl3QixXQUExQyxFQUFzRDZDLENBQUMsRUFBdkQ7Q0FBMERmLGNBQUFBLENBQUMsR0FBQ1csVUFBVSxDQUFDVSxDQUFELEVBQUcsRUFBSCxDQUFaO0NBQW1CO0NBQUM7O0NBQUEsY0FBSWQsQ0FBQyxHQUFDLElBQUlqRCxDQUFKLENBQU1ILENBQU4sQ0FBTjtDQUFBLGNBQWVvRSxDQUFDLEdBQUMsSUFBSWpFLENBQUosQ0FBTUgsQ0FBTixDQUFqQjtDQUFBLGNBQTBCcUUsQ0FBQyxHQUFDLElBQUlsRSxDQUFKLENBQU1ILENBQU4sQ0FBNUI7Q0FBQSxjQUFxQ1MsQ0FBQyxHQUFDLENBQUMsQ0FBeEM7Q0FBQSxjQUEwQ0MsQ0FBQyxHQUFDLENBQUMsQ0FBN0M7Q0FBQSxjQUErQ0YsQ0FBQyxHQUFDLENBQUMsQ0FBbEQ7Q0FBQSxjQUFvRHFELENBQUMsR0FBQyxDQUFDLENBQXZEO0NBQUEsY0FBeURDLENBQUMsR0FBQyxDQUFDLENBQTVEO0NBQUEsY0FBOERDLENBQUMsR0FBQyxDQUFDLENBQWpFO0NBQUEsY0FBbUVDLENBQUMsR0FBQ3ZFLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixLQUF2QixDQUFyRTtDQUFtRzRELFVBQUFBLENBQUMsQ0FBQ00sR0FBRixHQUFNLEtBQU47Q0FBWXpELFVBQUFBLENBQUMsQ0FBQ3VDLENBQUQsRUFBR1gsQ0FBQyxDQUFDM0MsQ0FBRCxFQUFHLFlBQUgsQ0FBSixDQUFEO0NBQXVCZSxVQUFBQSxDQUFDLENBQUN1RCxDQUFELEVBQUczQixDQUFDLENBQUMzQyxDQUFELEVBQUcsT0FBSCxDQUFKLENBQUQ7Q0FBa0JlLFVBQUFBLENBQUMsQ0FBQ3dELENBQUQsRUFBRzVCLENBQUMsQ0FBQzNDLENBQUQsRUFBRyxXQUFILENBQUosQ0FBRDtDQUFzQmtFLFVBQUFBLENBQUMsQ0FBQzFELFdBQUYsQ0FBYzhDLENBQUMsQ0FBQzdELENBQWhCO0NBQW1CeUUsVUFBQUEsQ0FBQyxDQUFDMUQsV0FBRixDQUFjOEQsQ0FBQyxDQUFDN0UsQ0FBaEI7Q0FBbUJ5RSxVQUFBQSxDQUFDLENBQUMxRCxXQUFGLENBQWMrRCxDQUFDLENBQUM5RSxDQUFoQjtDQUFtQkUsVUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWNTLFdBQWQsQ0FBMEIwRCxDQUExQjtDQUE2QkgsVUFBQUEsQ0FBQyxHQUFDVCxDQUFDLENBQUM3RCxDQUFGLENBQUl3QixXQUFOO0NBQWtCK0MsVUFBQUEsQ0FBQyxHQUFDTSxDQUFDLENBQUM3RSxDQUFGLENBQUl3QixXQUFOO0NBQWtCZ0QsVUFBQUEsQ0FBQyxHQUFDTSxDQUFDLENBQUM5RSxDQUFGLENBQUl3QixXQUFOO0NBQWtCbUQsVUFBQUEsQ0FBQztDQUFHL0MsVUFBQUEsQ0FBQyxDQUFDaUMsQ0FBRCxFQUFHLFVBQVM3RCxDQUFULEVBQVc7Q0FBQ2tCLFlBQUFBLENBQUMsR0FBQ2xCLENBQUY7Q0FBSXFFLFlBQUFBLENBQUM7Q0FBRyxXQUF2QixDQUFEO0NBQTBCL0MsVUFBQUEsQ0FBQyxDQUFDdUMsQ0FBRCxFQUNsZlgsQ0FBQyxDQUFDM0MsQ0FBRCxFQUFHLE1BQUlBLENBQUMsQ0FBQ3dCLE1BQU4sR0FBYSxjQUFoQixDQURpZixDQUFEO0NBQy9jSCxVQUFBQSxDQUFDLENBQUNpRCxDQUFELEVBQUcsVUFBUzdFLENBQVQsRUFBVztDQUFDbUIsWUFBQUEsQ0FBQyxHQUFDbkIsQ0FBRjtDQUFJcUUsWUFBQUEsQ0FBQztDQUFHLFdBQXZCLENBQUQ7Q0FBMEIvQyxVQUFBQSxDQUFDLENBQUN1RCxDQUFELEVBQUczQixDQUFDLENBQUMzQyxDQUFELEVBQUcsTUFBSUEsQ0FBQyxDQUFDd0IsTUFBTixHQUFhLFNBQWhCLENBQUosQ0FBRDtDQUFpQ0gsVUFBQUEsQ0FBQyxDQUFDa0QsQ0FBRCxFQUFHLFVBQVM5RSxDQUFULEVBQVc7Q0FBQ2lCLFlBQUFBLENBQUMsR0FBQ2pCLENBQUY7Q0FBSXFFLFlBQUFBLENBQUM7Q0FBRyxXQUF2QixDQUFEO0NBQTBCL0MsVUFBQUEsQ0FBQyxDQUFDd0QsQ0FBRCxFQUFHNUIsQ0FBQyxDQUFDM0MsQ0FBRCxFQUFHLE1BQUlBLENBQUMsQ0FBQ3dCLE1BQU4sR0FBYSxhQUFoQixDQUFKLENBQUQ7Q0FBcUMsU0FGbkosQ0FBRDtDQUVzSixPQUgxRCxDQUFQO0NBR21FLEtBSGhLOztDQUdpSyxJQUF5QmlELGNBQUEsR0FBZWxELENBQXhDO0NBQStILEdBUDFOLEdBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR3JFLDRCQUFlLE1BQU07Q0FDbkIsUUFBTW1ELGFBQWEsR0FBRyxFQUF0Qjs7Q0FFQSxNQUFJQyxjQUFjLENBQUNDLFdBQW5CLEVBQWdDO0NBQzlCakYsSUFBQUEsUUFBUSxDQUFDa0YsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNDLEdBQW5DLENBQXVDLGNBQXZDO0NBQ0E7Q0FDRDs7Q0FFREMsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVl6QyxLQUFaLEVBQW1CMEMsT0FBbkIsQ0FBMkJ4QyxJQUFJLElBQUk7Q0FDakMsVUFBTS9CLENBQUMsR0FBRzZCLEtBQUssQ0FBQ0UsSUFBRCxDQUFmOztDQUVBLFFBQUkvQixDQUFDLENBQUN3RSxRQUFOLEVBQWdCO0NBQ2RULE1BQUFBLGFBQWEsQ0FBQ1UsSUFBZCxDQUNFLElBQUlDLDJCQUFKLENBQXFCMUUsQ0FBQyxDQUFDYSxNQUFGLENBQVM4RCxPQUFULENBQWlCLElBQWpCLEVBQXVCLEVBQXZCLENBQXJCLEVBQWlEO0NBQy9DN0QsUUFBQUEsTUFBTSxFQUFFZCxDQUFDLENBQUNjLE1BRHFDO0NBRS9DWixRQUFBQSxLQUFLLEVBQUVGLENBQUMsQ0FBQ0U7Q0FGc0MsT0FBakQsQ0FERjtDQU1EO0NBQ0YsR0FYRDs7Q0FhQSxNQUFJNkQsYUFBYSxDQUFDakIsTUFBZCxJQUF3QixDQUE1QixFQUErQjtDQUM3QkwsSUFBQUEsT0FBTyxDQUFDbUMsR0FBUixDQUFZYixhQUFaLEVBQTJCbEIsSUFBM0IsQ0FBZ0MsTUFBTTtDQUNwQzdELE1BQUFBLFFBQVEsQ0FBQ2tGLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1QyxjQUF2QyxFQURvQzs7Q0FHcENKLE1BQUFBLGNBQWMsQ0FBQ0MsV0FBZixHQUE2QixJQUE3QjtDQUNELEtBSkQ7Q0FLRDtDQUNGLENBNUJEOztBQ0hBLGlDQUFlLE1BQU07Q0FDbkIsTUFBSTFDLE1BQU0sQ0FBQ3NELFFBQVAsSUFBbUIsQ0FBQ0EsUUFBUSxDQUFDM0MsU0FBVCxDQUFtQnFDLE9BQTNDLEVBQW9EO0NBQ2xETSxJQUFBQSxRQUFRLENBQUMzQyxTQUFULENBQW1CcUMsT0FBbkIsR0FBNkIsVUFBU08sUUFBVCxFQUFtQkMsT0FBbkIsRUFBNEI7Q0FDdkRBLE1BQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJeEQsTUFBckI7O0NBQ0EsV0FBSyxJQUFJeUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLbEMsTUFBekIsRUFBaUNrQyxDQUFDLEVBQWxDLEVBQXNDO0NBQ3BDRixRQUFBQSxRQUFRLENBQUNHLElBQVQsQ0FBY0YsT0FBZCxFQUF1QixLQUFLQyxDQUFMLENBQXZCLEVBQWdDQSxDQUFoQyxFQUFtQyxJQUFuQztDQUNEO0NBQ0YsS0FMRDtDQU1EO0NBQ0YsQ0FURDs7QUNBQSx1QkFBZSxNQUFNO0NBQ25CLFFBQU1FLEtBQUssR0FBRyxNQUFNO0NBQ2xCLFVBQU1DLEVBQUUsR0FBRzVELE1BQU0sQ0FBQzZELFdBQVAsR0FBcUIsSUFBaEM7Q0FDQXBHLElBQUFBLFFBQVEsQ0FBQ2tGLGVBQVQsQ0FBeUJoRSxLQUF6QixDQUErQm1GLFdBQS9CLENBQTJDLE1BQTNDLFlBQXNERixFQUF0RDtDQUNELEdBSEQ7O0NBS0FELEVBQUFBLEtBQUs7Q0FDTDNELEVBQUFBLE1BQU0sQ0FBQ3RDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLE1BQU07Q0FDdENzQyxJQUFBQSxNQUFNLENBQUMrRCxxQkFBUCxDQUE2QixNQUFNO0NBQ2pDSixNQUFBQSxLQUFLO0NBQ04sS0FGRDtDQUdELEdBSkQ7Q0FLRCxDQVpEOzs7Q0NBQTs7Ozs7Ozs7Q0FTQyxhQUFVSyxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUN0QjtDQUNBLElBRXdDO0NBQ3BDMUIsTUFBQUEsY0FBQSxHQUFpQjBCLE9BQU8sRUFBeEI7Q0FDSCxLQUZNO0NBS1YsR0FUQSxFQVNDQyxjQVRELEVBU08sWUFBWTtBQUNoQjtDQUdBLFFBQUlDLFNBQVMsR0FBRyxpQ0FDUixzRkFEUSxHQUVOLDZEQUZNLEdBR1IsUUFIUjtDQUFBLFFBSUlDLFVBQVUsR0FBRyxpQ0FDVCxzRkFEUyxHQUVQLDZEQUZPLEdBR1QsUUFQUjtDQUFBLFFBUUlDLE1BQU0sR0FBRyxpQ0FDTCxnREFESyxHQUVMLHVDQUZLLEdBR0wsdUNBSEssR0FJTCxZQVpSLENBSmdCOztDQWtCaEIsUUFBSUMsT0FBTyxHQUFHLEVBQWQ7Q0FBQSxRQUNJQyxRQUFRLEdBQUc7Q0FDUEMsTUFBQUEsUUFBUSxFQUFFLElBREg7Q0FFUEMsTUFBQUEsT0FBTyxFQUFFLE1BRkY7Q0FHUEMsTUFBQUEsVUFBVSxFQUFFLEtBSEw7Q0FJUEMsTUFBQUEsWUFBWSxFQUFFLEtBSlA7Q0FLUEMsTUFBQUEsU0FBUyxFQUFFLGtCQUxKO0NBTVBDLE1BQUFBLFFBQVEsRUFBRSxLQU5IO0NBT1BDLE1BQUFBLEtBQUssRUFBRSxLQVBBO0NBUVBDLE1BQUFBLE9BQU8sRUFBRSxDQVJGO0NBU1BDLE1BQUFBLFNBQVMsRUFBRSxTQVRKO0NBVVBDLE1BQUFBLFNBQVMsRUFBRSxJQVZKO0NBV1BDLE1BQUFBLFNBQVMsRUFBRSxJQVhKO0NBWVBDLE1BQUFBLFFBQVEsRUFBRSxJQVpIO0NBYVBDLE1BQUFBLHNCQUFzQixFQUFFO0NBYmpCLEtBRGYsQ0FsQmdCOztDQW1DaEIsUUFBSUMsUUFBUSxHQUFHLEVBQWYsQ0FuQ2dCOztDQXFDaEIsUUFBSUMsT0FBSixFQUFhQyxNQUFiLEVBQXFCQyxjQUFyQixFQUFxQ0MsVUFBckMsRUFBaURDLFdBQWpELENBckNnQjs7Q0F1Q2hCLFFBQUlDLGNBQWMsR0FBRyxFQUFyQixDQXZDZ0I7O0NBeUNoQixRQUFJQyxZQUFZLEdBQUcsQ0FBbkIsQ0F6Q2dCOztDQTJDaEIsUUFBSUMsZ0JBQWdCLEdBQUcsS0FBdkIsQ0EzQ2dCOztDQTZDaEIsUUFBSUMsS0FBSyxHQUFHLEVBQVosQ0E3Q2dCOztDQStDaEIsUUFBSUMsU0FBUyxHQUFHLEtBQWhCLENBL0NnQjs7Q0FpRGhCLFFBQUlDLEtBQUssR0FBRywyQkFBWixDQWpEZ0I7O0NBbURoQixRQUFJQyxJQUFJLEdBQUcsRUFBWCxDQW5EZ0I7O0NBcURoQixRQUFJQyxjQUFjLEdBQUcsRUFBckIsQ0FyRGdCOztDQXVEaEIsUUFBSUMsaUJBQWlCLEdBQUcsSUFBeEI7O0NBQ0EsUUFBSUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFTQyxLQUFULEVBQWdCOztDQUV0QyxVQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsRUFBYixDQUFnQkMsT0FBaEIsQ0FBd0IsY0FBeEIsTUFBNEMsQ0FBQyxDQUFqRCxFQUFvRDtDQUNoREMsUUFBQUEsV0FBVztDQUNkO0NBQ0osS0FMRDs7Q0FNQSxRQUFJQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQVNMLEtBQVQsRUFBZ0I7Q0FDN0NBLE1BQUFBLEtBQUssQ0FBQ00sZUFBTixHQUF3Qk4sS0FBSyxDQUFDTSxlQUFOLEVBQXhCLEdBQWtETixLQUFLLENBQUNPLFlBQU4sR0FBcUIsSUFBdkUsQ0FENkM7O0NBRTdDQyxNQUFBQSxpQkFBaUI7Q0FDcEIsS0FIRDs7Q0FJQSxRQUFJQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQVNULEtBQVQsRUFBZ0I7Q0FDekNBLE1BQUFBLEtBQUssQ0FBQ00sZUFBTixHQUF3Qk4sS0FBSyxDQUFDTSxlQUFOLEVBQXhCLEdBQWtETixLQUFLLENBQUNPLFlBQU4sR0FBcUIsSUFBdkUsQ0FEeUM7O0NBRXpDRyxNQUFBQSxhQUFhO0NBQ2hCLEtBSEQ7O0NBSUEsUUFBSUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFTWCxLQUFULEVBQWdCO0NBQzFDQSxNQUFBQSxLQUFLLENBQUNNLGVBQU4sR0FBd0JOLEtBQUssQ0FBQ00sZUFBTixFQUF4QixHQUFrRE4sS0FBSyxDQUFDTyxZQUFOLEdBQXFCLElBQXZFLENBRDBDOztDQUUxQ0gsTUFBQUEsV0FBVztDQUNkLEtBSEQ7O0NBSUEsUUFBSVEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFTWixLQUFULEVBQWdCO0NBQ3BDUCxNQUFBQSxLQUFLLENBQUNvQixLQUFOOztDQUNBLFVBQUlwQixLQUFLLENBQUNvQixLQUFOLEdBQWMsQ0FBbEIsRUFBcUI7Q0FDakJwQixRQUFBQSxLQUFLLENBQUNxQixVQUFOLEdBQW1CLElBQW5CO0NBQ0gsT0FKbUM7OztDQU1wQ3JCLE1BQUFBLEtBQUssQ0FBQ3NCLE1BQU4sR0FBZWYsS0FBSyxDQUFDZ0IsY0FBTixDQUFxQixDQUFyQixFQUF3QkMsS0FBdkM7Q0FDQXhCLE1BQUFBLEtBQUssQ0FBQ3lCLE1BQU4sR0FBZWxCLEtBQUssQ0FBQ2dCLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0JHLEtBQXZDO0NBQ0gsS0FSRDs7Q0FTQSxRQUFJQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQVNwQixLQUFULEVBQWdCOztDQUVuQyxVQUFJTixTQUFTLElBQUlELEtBQUssQ0FBQ3FCLFVBQXZCLEVBQW1DO0NBQy9CO0NBQ0g7O0NBQ0RkLE1BQUFBLEtBQUssQ0FBQ3FCLGNBQU4sR0FBdUJyQixLQUFLLENBQUNxQixjQUFOLEVBQXZCLEdBQWdEckIsS0FBSyxDQUFDc0IsV0FBTixHQUFvQixLQUFwRSxDQUxtQzs7Q0FNbkMsVUFBSUMsVUFBVSxHQUFHdkIsS0FBSyxDQUFDd0IsT0FBTixDQUFjLENBQWQsS0FBb0J4QixLQUFLLENBQUNnQixjQUFOLENBQXFCLENBQXJCLENBQXJDLENBTm1DOztDQVFuQyxVQUFJTyxVQUFVLENBQUNOLEtBQVgsR0FBbUJ4QixLQUFLLENBQUNzQixNQUF6QixHQUFrQyxFQUF0QyxFQUEwQztDQUN0Q3JCLFFBQUFBLFNBQVMsR0FBRyxJQUFaO0NBQ0FjLFFBQUFBLGlCQUFpQjtDQUNwQixPQUhELE1BR08sSUFBSWUsVUFBVSxDQUFDTixLQUFYLEdBQW1CeEIsS0FBSyxDQUFDc0IsTUFBekIsR0FBa0MsQ0FBQyxFQUF2QyxFQUEyQztDQUM5Q3JCLFFBQUFBLFNBQVMsR0FBRyxJQUFaO0NBQ0FnQixRQUFBQSxhQUFhLEdBRmlDO0NBSWpELE9BSk0sTUFJQSxJQUFJakIsS0FBSyxDQUFDeUIsTUFBTixHQUFlSyxVQUFVLENBQUNKLEtBQTFCLEdBQWtDLEdBQXRDLEVBQTJDO0NBQzlDZixRQUFBQSxXQUFXO0NBQ2Q7Q0FDSixLQWxCRDs7Q0FtQkEsUUFBSXFCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBVztDQUM3QmhDLE1BQUFBLEtBQUssQ0FBQ29CLEtBQU47O0NBQ0EsVUFBSXBCLEtBQUssQ0FBQ29CLEtBQU4sSUFBZSxDQUFuQixFQUFzQjtDQUNsQnBCLFFBQUFBLEtBQUssQ0FBQ3FCLFVBQU4sR0FBbUIsS0FBbkI7Q0FDSDs7Q0FDRHBCLE1BQUFBLFNBQVMsR0FBRyxLQUFaO0NBQ0gsS0FORDs7Q0FPQSxRQUFJZ0Msa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFXO0NBQ2hDRCxNQUFBQSxlQUFlO0NBQ2xCLEtBRkQ7O0NBSUEsUUFBSUUsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFTM0IsS0FBVCxFQUFnQjtDQUN6QyxVQUFJZixPQUFPLENBQUMzRyxLQUFSLENBQWNzSixPQUFkLEtBQTBCLE9BQTFCLElBQXNDM0MsT0FBTyxDQUFDNEMsUUFBUixJQUFvQixDQUFDNUMsT0FBTyxDQUFDNEMsUUFBUixDQUFpQjdCLEtBQUssQ0FBQ0MsTUFBdkIsQ0FBL0QsRUFBZ0c7Q0FDNUZELFFBQUFBLEtBQUssQ0FBQ00sZUFBTjtDQUNBd0IsUUFBQUEsU0FBUztDQUNaO0NBQ0osS0FMRCxDQWpIZ0I7Ozs7OztDQTJIaEIsUUFBSSxDQUFDLEdBQUduRixPQUFSLEVBQWlCO0NBQ2JvRixNQUFBQSxLQUFLLENBQUN6SCxTQUFOLENBQWdCcUMsT0FBaEIsR0FBMEIsVUFBU08sUUFBVCxFQUFtQkMsT0FBbkIsRUFBNEI7Q0FDbEQsYUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtsQyxNQUF6QixFQUFpQ2tDLENBQUMsRUFBbEMsRUFBc0M7Q0FDbENGLFVBQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRixPQUFkLEVBQXVCLEtBQUtDLENBQUwsQ0FBdkIsRUFBZ0NBLENBQWhDLEVBQW1DLElBQW5DO0NBQ0g7Q0FDSixPQUpEO0NBS0gsS0FqSWU7Ozs7Q0FxSWhCLFFBQUksQ0FBQyxHQUFHNEUsTUFBUixFQUFnQjtDQUNaRCxNQUFBQSxLQUFLLENBQUN6SCxTQUFOLENBQWdCMEgsTUFBaEIsR0FBeUIsVUFBUzlLLENBQVQsRUFBWUMsQ0FBWixFQUFlTSxDQUFmLEVBQWtCa0UsQ0FBbEIsRUFBcUJaLENBQXJCLEVBQXdCO0NBQzdDdEQsUUFBQUEsQ0FBQyxHQUFHLElBQUo7Q0FDQWtFLFFBQUFBLENBQUMsR0FBRyxFQUFKOztDQUNBLGFBQUtaLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3RELENBQUMsQ0FBQ3lELE1BQWxCLEVBQTBCSCxDQUFDLEVBQTNCLEVBQ0k3RCxDQUFDLENBQUNtRyxJQUFGLENBQU9sRyxDQUFQLEVBQVVNLENBQUMsQ0FBQ3NELENBQUQsQ0FBWCxFQUFnQkEsQ0FBaEIsRUFBbUJ0RCxDQUFuQixLQUF5QmtFLENBQUMsQ0FBQ2tCLElBQUYsQ0FBT3BGLENBQUMsQ0FBQ3NELENBQUQsQ0FBUixDQUF6Qjs7Q0FDSixlQUFPWSxDQUFQO0NBQ0gsT0FORDtDQU9IOzs7OztDQUlELGFBQVNzRyxHQUFULENBQWFDLFFBQWIsRUFBdUJDLFdBQXZCLEVBQW9DOztDQUVoQ25ELE1BQUFBLFFBQVEsQ0FBQ29ELFVBQVQsR0FBc0JDLHFCQUFxQixFQUEzQztDQUNBckQsTUFBQUEsUUFBUSxDQUFDc0QsR0FBVCxHQUFlQyxjQUFjLEVBQTdCO0NBQ0F2RCxNQUFBQSxRQUFRLENBQUN3RCxhQUFULEdBQXlCQyx3QkFBd0IsRUFBakQ7Q0FFQUMsTUFBQUEsWUFBWTtDQUNaQyxNQUFBQSxlQUFlLENBQUNULFFBQUQsQ0FBZjtDQUNBLGFBQU9VLHVCQUF1QixDQUFDVixRQUFELEVBQVdDLFdBQVgsQ0FBOUI7Q0FDSDs7Q0FFRCxhQUFTUyx1QkFBVCxDQUFpQ1YsUUFBakMsRUFBMkNDLFdBQTNDLEVBQXdEOztDQUVwRCxVQUFJVSxlQUFlLEdBQUd6TCxRQUFRLENBQUMwTCxnQkFBVCxDQUEwQlosUUFBMUIsQ0FBdEI7Q0FDQSxVQUFJYSxZQUFZLEdBQUc7Q0FDZkMsUUFBQUEsU0FBUyxFQUFFLEVBREk7Q0FFZkMsUUFBQUEsUUFBUSxFQUFFSjtDQUZLLE9BQW5CO0NBSUFqRCxNQUFBQSxJQUFJLENBQUNzQyxRQUFELENBQUosR0FBaUJhLFlBQWpCO0NBRUEsU0FBR3BHLE9BQUgsQ0FBV1UsSUFBWCxDQUFnQndGLGVBQWhCLEVBQWlDLFVBQVNLLGNBQVQsRUFBeUI7Q0FDdEQsWUFBSWYsV0FBVyxJQUFJQSxXQUFXLENBQUNILE1BQS9CLEVBQXVDO0NBQ25DckMsVUFBQUEsS0FBSyxHQUFHd0MsV0FBVyxDQUFDSCxNQUFwQjtDQUNILFNBSHFEOzs7Q0FNdEQsWUFBSW1CLFlBQVksR0FBRyxFQUFuQjs7Q0FDQSxZQUFJRCxjQUFjLENBQUNFLE9BQWYsS0FBMkIsR0FBL0IsRUFBb0M7Q0FDaENELFVBQUFBLFlBQVksR0FBRyxDQUFDRCxjQUFELENBQWY7Q0FDSCxTQUZELE1BRU87Q0FDSEMsVUFBQUEsWUFBWSxHQUFHRCxjQUFjLENBQUNHLG9CQUFmLENBQW9DLEdBQXBDLENBQWY7Q0FDSCxTQVhxRDs7O0NBY3RERixRQUFBQSxZQUFZLEdBQUcsR0FBR25CLE1BQUgsQ0FBVTNFLElBQVYsQ0FBZThGLFlBQWYsRUFBNkIsVUFBU0csT0FBVCxFQUFrQjtDQUMxRCxjQUFJQSxPQUFPLENBQUNDLFNBQVIsQ0FBa0JwRCxPQUFsQixDQUEwQmdDLFdBQVcsSUFBSUEsV0FBVyxDQUFDcUIsV0FBckQsTUFBc0UsQ0FBQyxDQUEzRSxFQUE4RTtDQUMxRSxtQkFBTzdELEtBQUssQ0FBQ2pHLElBQU4sQ0FBVzRKLE9BQU8sQ0FBQ0csSUFBbkIsQ0FBUDtDQUNIO0NBQ0osU0FKYyxDQUFmOztDQUtBLFlBQUlOLFlBQVksQ0FBQ2pJLE1BQWIsS0FBd0IsQ0FBNUIsRUFBK0I7Q0FDM0I7Q0FDSDs7Q0FFRCxZQUFJd0ksT0FBTyxHQUFHLEVBQWQ7Q0FDQSxXQUFHL0csT0FBSCxDQUFXVSxJQUFYLENBQWdCOEYsWUFBaEIsRUFBOEIsVUFBU1EsWUFBVCxFQUF1QkMsVUFBdkIsRUFBbUM7Q0FDN0QsY0FBSUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFTN0QsS0FBVCxFQUFnQjtDQUMzQ0EsWUFBQUEsS0FBSyxDQUFDcUIsY0FBTixHQUF1QnJCLEtBQUssQ0FBQ3FCLGNBQU4sRUFBdkIsR0FBZ0RyQixLQUFLLENBQUNzQixXQUFOLEdBQW9CLEtBQXBFLENBRDJDOztDQUUzQ3dDLFlBQUFBLGNBQWMsQ0FBQ0osT0FBRCxFQUFVdkIsV0FBVixDQUFkO0NBQ0E0QixZQUFBQSxXQUFXLENBQUNILFVBQUQsQ0FBWDtDQUNILFdBSkQ7O0NBS0EsY0FBSUksU0FBUyxHQUFHO0NBQ1pDLFlBQUFBLFlBQVksRUFBRUosd0JBREY7Q0FFWkYsWUFBQUEsWUFBWSxFQUFFQTtDQUZGLFdBQWhCO0NBSUFPLFVBQUFBLElBQUksQ0FBQ1AsWUFBRCxFQUFlLE9BQWYsRUFBd0JFLHdCQUF4QixDQUFKO0NBQ0FILFVBQUFBLE9BQU8sQ0FBQzdHLElBQVIsQ0FBYW1ILFNBQWI7Q0FDSCxTQVpEO0NBYUFqQixRQUFBQSxZQUFZLENBQUNDLFNBQWIsQ0FBdUJuRyxJQUF2QixDQUE0QjZHLE9BQTVCO0NBQ0gsT0F0Q0Q7Q0F3Q0EsYUFBT1gsWUFBWSxDQUFDQyxTQUFwQjtDQUNIOztDQUVELGFBQVNtQixlQUFULEdBQTJCO0NBQ3ZCLFdBQUssSUFBSWpDLFFBQVQsSUFBcUJ0QyxJQUFyQixFQUEyQjtDQUN2QixZQUFJQSxJQUFJLENBQUN3RSxjQUFMLENBQW9CbEMsUUFBcEIsQ0FBSixFQUFtQztDQUMvQlMsVUFBQUEsZUFBZSxDQUFDVCxRQUFELENBQWY7Q0FDSDtDQUNKO0NBQ0o7O0NBRUQsYUFBU1MsZUFBVCxDQUF5QlQsUUFBekIsRUFBbUM7Q0FDL0IsVUFBSSxDQUFDdEMsSUFBSSxDQUFDd0UsY0FBTCxDQUFvQmxDLFFBQXBCLENBQUwsRUFBb0M7Q0FDaEM7Q0FDSDs7Q0FDRCxVQUFJYyxTQUFTLEdBQUdwRCxJQUFJLENBQUNzQyxRQUFELENBQUosQ0FBZWMsU0FBL0I7Q0FDQSxTQUFHckcsT0FBSCxDQUFXVSxJQUFYLENBQWdCMkYsU0FBaEIsRUFBMkIsVUFBU1UsT0FBVCxFQUFrQjtDQUN6QyxXQUFHL0csT0FBSCxDQUFXVSxJQUFYLENBQWdCcUcsT0FBaEIsRUFBeUIsVUFBU00sU0FBVCxFQUFvQjtDQUN6Q0ssVUFBQUEsTUFBTSxDQUFDTCxTQUFTLENBQUNMLFlBQVgsRUFBeUIsT0FBekIsRUFBa0NLLFNBQVMsQ0FBQ0MsWUFBNUMsQ0FBTjtDQUNILFNBRkQ7O0NBSUEsWUFBSTNFLGNBQWMsS0FBS29FLE9BQXZCLEVBQWdDO0NBQzVCcEUsVUFBQUEsY0FBYyxHQUFHLEVBQWpCO0NBQ0g7Q0FDSixPQVJEO0NBVUEsYUFBT00sSUFBSSxDQUFDc0MsUUFBRCxDQUFYO0NBQ0g7O0NBRUQsYUFBU1EsWUFBVCxHQUF3QjtDQUNwQnpELE1BQUFBLE9BQU8sR0FBR3FGLE9BQU8sQ0FBQyxxQkFBRCxDQUFqQixDQURvQjs7Q0FHcEIsVUFBSXJGLE9BQUosRUFBYTtDQUNUQyxRQUFBQSxNQUFNLEdBQUdvRixPQUFPLENBQUMsb0JBQUQsQ0FBaEI7Q0FDQW5GLFFBQUFBLGNBQWMsR0FBR21GLE9BQU8sQ0FBQyxpQkFBRCxDQUF4QjtDQUNBbEYsUUFBQUEsVUFBVSxHQUFHa0YsT0FBTyxDQUFDLGFBQUQsQ0FBcEI7Q0FDQWpGLFFBQUFBLFdBQVcsR0FBR2lGLE9BQU8sQ0FBQyxjQUFELENBQXJCO0NBQ0E7Q0FDSCxPQVRtQjs7O0NBV3BCckYsTUFBQUEsT0FBTyxHQUFHc0YsTUFBTSxDQUFDLEtBQUQsQ0FBaEI7Q0FDQXRGLE1BQUFBLE9BQU8sQ0FBQ2pILFlBQVIsQ0FBcUIsTUFBckIsRUFBNkIsUUFBN0I7Q0FDQWlILE1BQUFBLE9BQU8sQ0FBQ2lCLEVBQVIsR0FBYSxxQkFBYjtDQUNBOUksTUFBQUEsUUFBUSxDQUFDaU0sb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNwTCxXQUF6QyxDQUFxRGdILE9BQXJELEVBZG9COztDQWdCcEJDLE1BQUFBLE1BQU0sR0FBR3FGLE1BQU0sQ0FBQyxLQUFELENBQWY7Q0FDQXJGLE1BQUFBLE1BQU0sQ0FBQ2dCLEVBQVAsR0FBWSxvQkFBWjtDQUNBakIsTUFBQUEsT0FBTyxDQUFDaEgsV0FBUixDQUFvQmlILE1BQXBCLEVBbEJvQjs7Q0FvQnBCQyxNQUFBQSxjQUFjLEdBQUdvRixNQUFNLENBQUMsUUFBRCxDQUF2QjtDQUNBcEYsTUFBQUEsY0FBYyxDQUFDbkgsWUFBZixDQUE0QixNQUE1QixFQUFvQyxRQUFwQztDQUNBbUgsTUFBQUEsY0FBYyxDQUFDZSxFQUFmLEdBQW9CLGlCQUFwQjtDQUNBZixNQUFBQSxjQUFjLENBQUNuSCxZQUFmLENBQTRCLFlBQTVCLEVBQTBDLFVBQTFDO0NBQ0FtSCxNQUFBQSxjQUFjLENBQUNxRixTQUFmLEdBQTJCeEYsUUFBUSxDQUFDc0QsR0FBVCxHQUFleEUsU0FBZixHQUEyQixNQUF0RDtDQUNBbUIsTUFBQUEsT0FBTyxDQUFDaEgsV0FBUixDQUFvQmtILGNBQXBCO0NBRUFDLE1BQUFBLFVBQVUsR0FBR21GLE1BQU0sQ0FBQyxRQUFELENBQW5CO0NBQ0FuRixNQUFBQSxVQUFVLENBQUNwSCxZQUFYLENBQXdCLE1BQXhCLEVBQWdDLFFBQWhDO0NBQ0FvSCxNQUFBQSxVQUFVLENBQUNjLEVBQVgsR0FBZ0IsYUFBaEI7Q0FDQWQsTUFBQUEsVUFBVSxDQUFDcEgsWUFBWCxDQUF3QixZQUF4QixFQUFzQyxNQUF0QztDQUNBb0gsTUFBQUEsVUFBVSxDQUFDb0YsU0FBWCxHQUF1QnhGLFFBQVEsQ0FBQ3NELEdBQVQsR0FBZXZFLFVBQWYsR0FBNEIsTUFBbkQ7Q0FDQWtCLE1BQUFBLE9BQU8sQ0FBQ2hILFdBQVIsQ0FBb0JtSCxVQUFwQjtDQUVBQyxNQUFBQSxXQUFXLEdBQUdrRixNQUFNLENBQUMsUUFBRCxDQUFwQjtDQUNBbEYsTUFBQUEsV0FBVyxDQUFDckgsWUFBWixDQUF5QixNQUF6QixFQUFpQyxRQUFqQztDQUNBcUgsTUFBQUEsV0FBVyxDQUFDYSxFQUFaLEdBQWlCLGNBQWpCO0NBQ0FiLE1BQUFBLFdBQVcsQ0FBQ3JILFlBQVosQ0FBeUIsWUFBekIsRUFBdUMsT0FBdkM7Q0FDQXFILE1BQUFBLFdBQVcsQ0FBQ21GLFNBQVosR0FBd0J4RixRQUFRLENBQUNzRCxHQUFULEdBQWV0RSxNQUFmLEdBQXdCLFNBQWhEO0NBQ0FpQixNQUFBQSxPQUFPLENBQUNoSCxXQUFSLENBQW9Cb0gsV0FBcEI7Q0FFQUYsTUFBQUEsY0FBYyxDQUFDb0UsU0FBZixHQUEyQm5FLFVBQVUsQ0FBQ21FLFNBQVgsR0FBdUJsRSxXQUFXLENBQUNrRSxTQUFaLEdBQXdCLG9CQUExRTtDQUVBa0IsTUFBQUEsVUFBVTtDQUNiOztDQUVELGFBQVNDLGNBQVQsQ0FBd0IxRSxLQUF4QixFQUErQjtDQUMzQixjQUFRQSxLQUFLLENBQUMyRSxPQUFkO0NBQ0EsYUFBSyxFQUFMOztDQUNJbkUsVUFBQUEsaUJBQWlCO0NBQ2pCOztDQUNKLGFBQUssRUFBTDs7Q0FDSUUsVUFBQUEsYUFBYTtDQUNiOztDQUNKLGFBQUssRUFBTDs7Q0FDSU4sVUFBQUEsV0FBVztDQUNYOztDQUNKLGFBQUssRUFBTDs7Q0FDSXdFLFVBQUFBLGNBQWMsQ0FBQzVFLEtBQUQsQ0FBZDtDQUNBOztDQUNKLGFBQUssRUFBTDs7Q0FDSTZFLFVBQUFBLGFBQWEsQ0FBQzdFLEtBQUQsQ0FBYjtDQUNBO0NBZko7Q0FpQkg7O0NBRUQsYUFBU3lFLFVBQVQsR0FBc0I7Q0FDbEIsVUFBSXhHLE9BQU8sR0FBR2UsUUFBUSxDQUFDd0QsYUFBVCxHQUF5QjtDQUFFc0MsUUFBQUEsT0FBTyxFQUFFO0NBQVgsT0FBekIsR0FBNkMsSUFBM0Q7Q0FDQVosTUFBQUEsSUFBSSxDQUFDakYsT0FBRCxFQUFVLE9BQVYsRUFBbUJjLG1CQUFuQixDQUFKO0NBQ0FtRSxNQUFBQSxJQUFJLENBQUMvRSxjQUFELEVBQWlCLE9BQWpCLEVBQTBCa0IsMEJBQTFCLENBQUo7Q0FDQTZELE1BQUFBLElBQUksQ0FBQzlFLFVBQUQsRUFBYSxPQUFiLEVBQXNCcUIsc0JBQXRCLENBQUo7Q0FDQXlELE1BQUFBLElBQUksQ0FBQzdFLFdBQUQsRUFBYyxPQUFkLEVBQXVCc0IsdUJBQXZCLENBQUo7Q0FDQXVELE1BQUFBLElBQUksQ0FBQ2hGLE1BQUQsRUFBUyxhQUFULEVBQXdCd0Msa0JBQXhCLENBQUo7Q0FDQXdDLE1BQUFBLElBQUksQ0FBQ2pGLE9BQUQsRUFBVSxZQUFWLEVBQXdCMkIsaUJBQXhCLEVBQTJDM0MsT0FBM0MsQ0FBSjtDQUNBaUcsTUFBQUEsSUFBSSxDQUFDakYsT0FBRCxFQUFVLFdBQVYsRUFBdUJtQyxnQkFBdkIsRUFBeUNuRCxPQUF6QyxDQUFKO0NBQ0FpRyxNQUFBQSxJQUFJLENBQUNqRixPQUFELEVBQVUsVUFBVixFQUFzQndDLGVBQXRCLENBQUo7Q0FDQXlDLE1BQUFBLElBQUksQ0FBQzlNLFFBQUQsRUFBVyxPQUFYLEVBQW9CdUssc0JBQXBCLEVBQTRDLElBQTVDLENBQUo7Q0FDSDs7Q0FFRCxhQUFTb0QsWUFBVCxHQUF3QjtDQUNwQixVQUFJOUcsT0FBTyxHQUFHZSxRQUFRLENBQUN3RCxhQUFULEdBQXlCO0NBQUVzQyxRQUFBQSxPQUFPLEVBQUU7Q0FBWCxPQUF6QixHQUE2QyxJQUEzRDtDQUNBVCxNQUFBQSxNQUFNLENBQUNwRixPQUFELEVBQVUsT0FBVixFQUFtQmMsbUJBQW5CLENBQU47Q0FDQXNFLE1BQUFBLE1BQU0sQ0FBQ2xGLGNBQUQsRUFBaUIsT0FBakIsRUFBMEJrQiwwQkFBMUIsQ0FBTjtDQUNBZ0UsTUFBQUEsTUFBTSxDQUFDakYsVUFBRCxFQUFhLE9BQWIsRUFBc0JxQixzQkFBdEIsQ0FBTjtDQUNBNEQsTUFBQUEsTUFBTSxDQUFDaEYsV0FBRCxFQUFjLE9BQWQsRUFBdUJzQix1QkFBdkIsQ0FBTjtDQUNBMEQsTUFBQUEsTUFBTSxDQUFDbkYsTUFBRCxFQUFTLGFBQVQsRUFBd0J3QyxrQkFBeEIsQ0FBTjtDQUNBMkMsTUFBQUEsTUFBTSxDQUFDcEYsT0FBRCxFQUFVLFlBQVYsRUFBd0IyQixpQkFBeEIsRUFBMkMzQyxPQUEzQyxDQUFOO0NBQ0FvRyxNQUFBQSxNQUFNLENBQUNwRixPQUFELEVBQVUsV0FBVixFQUF1Qm1DLGdCQUF2QixFQUF5Q25ELE9BQXpDLENBQU47Q0FDQW9HLE1BQUFBLE1BQU0sQ0FBQ3BGLE9BQUQsRUFBVSxVQUFWLEVBQXNCd0MsZUFBdEIsQ0FBTjtDQUNBNEMsTUFBQUEsTUFBTSxDQUFDak4sUUFBRCxFQUFXLE9BQVgsRUFBb0J1SyxzQkFBcEIsRUFBNEMsSUFBNUMsQ0FBTjtDQUNIOztDQUVELGFBQVNtQyxjQUFULENBQXdCSixPQUF4QixFQUFpQ3ZCLFdBQWpDLEVBQThDOztDQUUxQyxVQUFJN0MsY0FBYyxLQUFLb0UsT0FBdkIsRUFBZ0M7Q0FDNUI7Q0FDSDs7Q0FDRHBFLE1BQUFBLGNBQWMsR0FBR29FLE9BQWpCLENBTDBDOztDQU8xQ3NCLE1BQUFBLFVBQVUsQ0FBQzdDLFdBQUQsQ0FBVixDQVAwQzs7Q0FTMUMsYUFBT2pELE1BQU0sQ0FBQytGLFVBQWQsRUFBMEI7Q0FDdEIvRixRQUFBQSxNQUFNLENBQUN0RCxXQUFQLENBQW1Cc0QsTUFBTSxDQUFDK0YsVUFBMUI7Q0FDSDs7Q0FDRHBGLE1BQUFBLGNBQWMsQ0FBQzNFLE1BQWYsR0FBd0IsQ0FBeEI7Q0FFQSxVQUFJZ0ssZ0JBQWdCLEdBQUcsRUFBdkI7Q0FDQSxVQUFJQyxpQkFBaUIsR0FBRyxFQUF4QixDQWYwQzs7Q0FpQjFDLFdBQUssSUFBSS9ILENBQUMsR0FBRyxDQUFSLEVBQVdnSSxTQUFoQixFQUEyQmhJLENBQUMsR0FBR3NHLE9BQU8sQ0FBQ3hJLE1BQXZDLEVBQStDa0MsQ0FBQyxFQUFoRCxFQUFvRDtDQUNoRGdJLFFBQUFBLFNBQVMsR0FBR2IsTUFBTSxDQUFDLEtBQUQsQ0FBbEI7Q0FDQWEsUUFBQUEsU0FBUyxDQUFDN0IsU0FBVixHQUFzQixZQUF0QjtDQUNBNkIsUUFBQUEsU0FBUyxDQUFDbEYsRUFBVixHQUFlLGtCQUFrQjlDLENBQWpDO0NBQ0F5QyxRQUFBQSxjQUFjLENBQUNoRCxJQUFmLENBQW9CdUksU0FBcEI7Q0FFQUYsUUFBQUEsZ0JBQWdCLENBQUNySSxJQUFqQixDQUFzQix3QkFBd0JPLENBQTlDO0NBQ0ErSCxRQUFBQSxpQkFBaUIsQ0FBQ3RJLElBQWxCLENBQXVCLDRCQUE0Qk8sQ0FBbkQ7Q0FDQThCLFFBQUFBLE1BQU0sQ0FBQ2pILFdBQVAsQ0FBbUI0SCxjQUFjLENBQUN6QyxDQUFELENBQWpDO0NBQ0g7O0NBQ0Q2QixNQUFBQSxPQUFPLENBQUNqSCxZQUFSLENBQXFCLGlCQUFyQixFQUF3Q2tOLGdCQUFnQixDQUFDN0ssSUFBakIsQ0FBc0IsR0FBdEIsQ0FBeEM7Q0FDQTRFLE1BQUFBLE9BQU8sQ0FBQ2pILFlBQVIsQ0FBcUIsa0JBQXJCLEVBQXlDbU4saUJBQWlCLENBQUM5SyxJQUFsQixDQUF1QixHQUF2QixDQUF6QztDQUNIOztDQUVELGFBQVMySyxVQUFULENBQW9CSyxVQUFwQixFQUFnQztDQUM1QixVQUFJLENBQUNBLFVBQUwsRUFBaUI7Q0FDYkEsUUFBQUEsVUFBVSxHQUFHLEVBQWI7Q0FDSCxPQUgyQjs7O0NBSzVCLFdBQUssSUFBSUMsSUFBVCxJQUFpQnBILFFBQWpCLEVBQTJCO0NBQ3ZCRCxRQUFBQSxPQUFPLENBQUNxSCxJQUFELENBQVAsR0FBZ0JwSCxRQUFRLENBQUNvSCxJQUFELENBQXhCOztDQUNBLFlBQUksT0FBT0QsVUFBVSxDQUFDQyxJQUFELENBQWpCLEtBQTRCLFdBQWhDLEVBQTZDO0NBQ3pDckgsVUFBQUEsT0FBTyxDQUFDcUgsSUFBRCxDQUFQLEdBQWdCRCxVQUFVLENBQUNDLElBQUQsQ0FBMUI7Q0FDSDtDQUNKOzs7OztDQUdEcEcsTUFBQUEsTUFBTSxDQUFDNUcsS0FBUCxDQUFhaU4sVUFBYixHQUEwQnJHLE1BQU0sQ0FBQzVHLEtBQVAsQ0FBYWtOLGdCQUFiLEdBQWlDdkgsT0FBTyxDQUFDVSxTQUFSLEtBQXNCLFFBQXRCLEdBQWlDLGtCQUFqQyxHQUN2RFYsT0FBTyxDQUFDVSxTQUFSLEtBQXNCLFNBQXRCLEdBQWtDLEVBQWxDLEdBQXVDLE1BRDNDLENBYjRCOztDQWdCNUIsVUFBSVYsT0FBTyxDQUFDRyxPQUFSLEtBQW9CLE1BQXBCLEtBQStCLGtCQUFrQnpFLE1BQWxCLElBQTRCMkYsY0FBYyxDQUFDcEUsTUFBZixLQUEwQixDQUFyRixDQUFKLEVBQTZGO0NBQ3pGK0MsUUFBQUEsT0FBTyxDQUFDRyxPQUFSLEdBQWtCLEtBQWxCO0NBQ0gsT0FsQjJCOzs7Q0FvQjVCZSxNQUFBQSxjQUFjLENBQUM3RyxLQUFmLENBQXFCc0osT0FBckIsR0FBK0J4QyxVQUFVLENBQUM5RyxLQUFYLENBQWlCc0osT0FBakIsR0FBNEIzRCxPQUFPLENBQUNHLE9BQVIsR0FBa0IsRUFBbEIsR0FBdUIsTUFBbEYsQ0FwQjRCOztDQXNCNUIsVUFBSTtDQUNBYSxRQUFBQSxPQUFPLENBQUMzRyxLQUFSLENBQWNtTixlQUFkLEdBQWdDeEgsT0FBTyxDQUFDYyxzQkFBeEM7Q0FDSCxPQUZELENBRUUsT0FBT2hFLENBQVAsRUFBVTtDQUVYO0NBQ0o7O0NBRUQsYUFBU2dKLFdBQVQsQ0FBcUIyQixnQkFBckIsRUFBdUM7Q0FDbkMsVUFBSXpILE9BQU8sQ0FBQ0ssWUFBWixFQUEwQjtDQUN0QmxILFFBQUFBLFFBQVEsQ0FBQ2tGLGVBQVQsQ0FBeUJoRSxLQUF6QixDQUErQnFOLFNBQS9CLEdBQTJDLFFBQTNDO0NBQ0F2TyxRQUFBQSxRQUFRLENBQUNJLElBQVQsQ0FBY2MsS0FBZCxDQUFvQnFOLFNBQXBCLEdBQWdDLFFBQWhDO0NBQ0g7O0NBQ0QsVUFBSTFHLE9BQU8sQ0FBQzNHLEtBQVIsQ0FBY3NKLE9BQWQsS0FBMEIsT0FBOUIsRUFBdUM7Q0FDbkM7Q0FDSDs7Q0FFRHNDLE1BQUFBLElBQUksQ0FBQzlNLFFBQUQsRUFBVyxTQUFYLEVBQXNCc04sY0FBdEIsQ0FBSjtDQUNBbkYsTUFBQUEsWUFBWSxHQUFHbUcsZ0JBQWY7Q0FDQWpHLE1BQUFBLEtBQUssR0FBRztDQUNKb0IsUUFBQUEsS0FBSyxFQUFFLENBREg7Q0FFSkUsUUFBQUEsTUFBTSxFQUFFLElBRko7Q0FHSkcsUUFBQUEsTUFBTSxFQUFFO0NBSEosT0FBUjtDQUtBMEUsTUFBQUEsU0FBUyxDQUFDckcsWUFBRCxFQUFlLFlBQVc7Q0FDL0JzRyxRQUFBQSxXQUFXLENBQUN0RyxZQUFELENBQVg7Q0FDQXVHLFFBQUFBLFdBQVcsQ0FBQ3ZHLFlBQUQsQ0FBWDtDQUNILE9BSFEsQ0FBVDtDQUtBd0csTUFBQUEsWUFBWTtDQUNaOUcsTUFBQUEsT0FBTyxDQUFDM0csS0FBUixDQUFjc0osT0FBZCxHQUF3QixPQUF4Qjs7Q0FDQSxVQUFJM0QsT0FBTyxDQUFDSSxVQUFaLEVBQXdCO0NBQ3BCMkgsUUFBQUEsZUFBZTtDQUNsQixPQXpCa0M7OztDQTJCbkM3SyxNQUFBQSxVQUFVLENBQUMsWUFBVztDQUNsQjhELFFBQUFBLE9BQU8sQ0FBQ3NFLFNBQVIsR0FBb0IsU0FBcEI7O0NBQ0EsWUFBSXRGLE9BQU8sQ0FBQ00sU0FBUixJQUFxQm5ILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjK0UsU0FBdkMsRUFBa0Q7Q0FDOUNuRixVQUFBQSxRQUFRLENBQUNJLElBQVQsQ0FBYytFLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCeUIsT0FBTyxDQUFDTSxTQUFwQztDQUNIOztDQUNELFlBQUlOLE9BQU8sQ0FBQ1csU0FBWixFQUF1QjtDQUNuQlgsVUFBQUEsT0FBTyxDQUFDVyxTQUFSO0NBQ0g7Q0FDSixPQVJTLEVBUVAsRUFSTyxDQUFWOztDQVNBLFVBQUlYLE9BQU8sQ0FBQ2EsUUFBWixFQUFzQjtDQUNsQmIsUUFBQUEsT0FBTyxDQUFDYSxRQUFSLENBQWlCUyxZQUFqQixFQUErQk0sY0FBYyxDQUFDM0UsTUFBOUM7Q0FDSDs7Q0FDRDRFLE1BQUFBLGlCQUFpQixHQUFHMUksUUFBUSxDQUFDNk8sYUFBN0I7Q0FDQW5FLE1BQUFBLFNBQVM7Q0FDVHRDLE1BQUFBLGdCQUFnQixHQUFHLElBQW5CO0NBQ0g7O0NBRUQsYUFBU3NDLFNBQVQsR0FBcUI7Q0FDakIsVUFBSTdELE9BQU8sQ0FBQ0csT0FBWixFQUFxQjtDQUNqQmUsUUFBQUEsY0FBYyxDQUFDK0csS0FBZjtDQUNILE9BRkQsTUFFTztDQUNIN0csUUFBQUEsV0FBVyxDQUFDNkcsS0FBWjtDQUNIO0NBQ0o7O0NBRUQsYUFBU0YsZUFBVCxHQUEyQjtDQUN2QixVQUFJL0csT0FBTyxDQUFDa0gsaUJBQVosRUFBK0I7Q0FDM0JsSCxRQUFBQSxPQUFPLENBQUNrSCxpQkFBUjtDQUNILE9BRkQsTUFFTyxJQUFJbEgsT0FBTyxDQUFDbUgsdUJBQVosRUFBcUM7Q0FDeENuSCxRQUFBQSxPQUFPLENBQUNtSCx1QkFBUjtDQUNILE9BRk0sTUFFQSxJQUFJbkgsT0FBTyxDQUFDb0gsb0JBQVosRUFBa0M7Q0FDckNwSCxRQUFBQSxPQUFPLENBQUNvSCxvQkFBUjtDQUNIO0NBQ0o7O0NBRUQsYUFBU0MsY0FBVCxHQUEwQjtDQUN0QixVQUFJbFAsUUFBUSxDQUFDa1AsY0FBYixFQUE2QjtDQUN6QmxQLFFBQUFBLFFBQVEsQ0FBQ2tQLGNBQVQ7Q0FDSCxPQUZELE1BRU8sSUFBSWxQLFFBQVEsQ0FBQ21QLG1CQUFiLEVBQWtDO0NBQ3JDblAsUUFBQUEsUUFBUSxDQUFDbVAsbUJBQVQ7Q0FDSCxPQUZNLE1BRUEsSUFBSW5QLFFBQVEsQ0FBQ29QLG9CQUFiLEVBQW1DO0NBQ3RDcFAsUUFBQUEsUUFBUSxDQUFDb1Asb0JBQVQ7Q0FDSDtDQUNKOztDQUVELGFBQVNwRyxXQUFULEdBQXVCO0NBQ25CLFVBQUluQyxPQUFPLENBQUNLLFlBQVosRUFBMEI7Q0FDdEJsSCxRQUFBQSxRQUFRLENBQUNrRixlQUFULENBQXlCaEUsS0FBekIsQ0FBK0JxTixTQUEvQixHQUEyQyxNQUEzQztDQUNBdk8sUUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWNjLEtBQWQsQ0FBb0JxTixTQUFwQixHQUFnQyxNQUFoQztDQUNIOztDQUNELFVBQUkxRyxPQUFPLENBQUMzRyxLQUFSLENBQWNzSixPQUFkLEtBQTBCLE1BQTlCLEVBQXNDO0NBQ2xDO0NBQ0g7O0NBRUR5QyxNQUFBQSxNQUFNLENBQUNqTixRQUFELEVBQVcsU0FBWCxFQUFzQnNOLGNBQXRCLENBQU4sQ0FUbUI7O0NBV25CekYsTUFBQUEsT0FBTyxDQUFDc0UsU0FBUixHQUFvQixFQUFwQjtDQUNBcEksTUFBQUEsVUFBVSxDQUFDLFlBQVc7Q0FDbEI4RCxRQUFBQSxPQUFPLENBQUMzRyxLQUFSLENBQWNzSixPQUFkLEdBQXdCLE1BQXhCOztDQUNBLFlBQUl4SyxRQUFRLENBQUNxUCxVQUFiLEVBQXlCO0NBQ3JCSCxVQUFBQSxjQUFjO0NBQ2pCOztDQUNELFlBQUlySSxPQUFPLENBQUNNLFNBQVIsSUFBcUJuSCxRQUFRLENBQUNJLElBQVQsQ0FBYytFLFNBQXZDLEVBQWtEO0NBQzlDbkYsVUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWMrRSxTQUFkLENBQXdCbUssTUFBeEIsQ0FBK0J6SSxPQUFPLENBQUNNLFNBQXZDO0NBQ0g7O0NBQ0QsWUFBSU4sT0FBTyxDQUFDWSxTQUFaLEVBQXVCO0NBQ25CWixVQUFBQSxPQUFPLENBQUNZLFNBQVI7Q0FDSDs7Q0FDRGlCLFFBQUFBLGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQ29HLEtBQWxCLEVBQXJCO0NBQ0ExRyxRQUFBQSxnQkFBZ0IsR0FBRyxLQUFuQjtDQUNILE9BYlMsRUFhUCxHQWJPLENBQVY7Q0FjSDs7Q0FFRCxhQUFTb0csU0FBVCxDQUFtQmUsS0FBbkIsRUFBMEJ6SixRQUExQixFQUFvQztDQUNoQyxVQUFJMEosY0FBYyxHQUFHL0csY0FBYyxDQUFDOEcsS0FBRCxDQUFuQztDQUNBLFVBQUlFLFdBQVcsR0FBR3ZILGNBQWMsQ0FBQ3FILEtBQUQsQ0FBaEMsQ0FGZ0M7OztDQU1oQyxVQUFJLE9BQU9DLGNBQVAsS0FBMEIsV0FBMUIsSUFBeUMsT0FBT0MsV0FBUCxLQUF1QixXQUFwRSxFQUFpRjtDQUM3RTtDQUNILE9BUitCOzs7Q0FXaEMsVUFBSUQsY0FBYyxDQUFDdkQsb0JBQWYsQ0FBb0MsS0FBcEMsRUFBMkMsQ0FBM0MsQ0FBSixFQUFtRDtDQUMvQyxZQUFJbkcsUUFBSixFQUFjO0NBQ1ZBLFVBQUFBLFFBQVE7Q0FDWDs7Q0FDRDtDQUNILE9BaEIrQjs7O0NBbUJoQyxVQUFJeUcsWUFBWSxHQUFHa0QsV0FBVyxDQUFDbEQsWUFBL0I7Q0FDQSxVQUFJbUQsZ0JBQWdCLEdBQUduRCxZQUFZLENBQUNOLG9CQUFiLENBQWtDLEtBQWxDLEVBQXlDLENBQXpDLENBQXZCO0NBQ0EsVUFBSTBELFlBQVksR0FBRyxPQUFPOUksT0FBTyxDQUFDRSxRQUFmLEtBQTRCLFVBQTVCLEdBQ2ZGLE9BQU8sQ0FBQ0UsUUFBUixDQUFpQmQsSUFBakIsQ0FBc0JpQyxjQUF0QixFQUFzQ3FFLFlBQXRDLENBRGUsR0FFZkEsWUFBWSxDQUFDcUQsWUFBYixDQUEwQixjQUExQixLQUE2Q3JELFlBQVksQ0FBQ3NELEtBRjlEO0NBR0EsVUFBSUMsUUFBUSxHQUFHQyxXQUFXLENBQUN4RCxZQUFELENBQTFCLENBeEJnQzs7Q0EyQmhDLFVBQUl5RCxNQUFNLEdBQUc3QyxNQUFNLENBQUMsUUFBRCxDQUFuQjtDQUNBNkMsTUFBQUEsTUFBTSxDQUFDbEgsRUFBUCxHQUFZLHdCQUF3QnlHLEtBQXBDO0NBQ0FTLE1BQUFBLE1BQU0sQ0FBQzVDLFNBQVAsR0FBbUIsc0NBQ2YsZ0RBRGUsR0FFZixnREFGZSxHQUdmLFFBSEosQ0E3QmdDOztDQWtDaEMsVUFBSXZHLE9BQU8sQ0FBQ0UsUUFBUixJQUFvQjRJLFlBQXhCLEVBQXNDO0NBQ2xDLFlBQUlNLFVBQVUsR0FBRzlDLE1BQU0sQ0FBQyxZQUFELENBQXZCO0NBQ0E4QyxRQUFBQSxVQUFVLENBQUNuSCxFQUFYLEdBQWdCLDRCQUE0QnlHLEtBQTVDO0NBQ0FVLFFBQUFBLFVBQVUsQ0FBQzdDLFNBQVgsR0FBdUJ1QyxZQUF2QjtDQUNBSyxRQUFBQSxNQUFNLENBQUNuUCxXQUFQLENBQW1Cb1AsVUFBbkI7Q0FDSDs7Q0FDRFQsTUFBQUEsY0FBYyxDQUFDM08sV0FBZixDQUEyQm1QLE1BQTNCLEVBeENnQzs7Q0EyQ2hDLFVBQUlFLEtBQUssR0FBRy9DLE1BQU0sQ0FBQyxLQUFELENBQWxCOztDQUNBK0MsTUFBQUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsWUFBVzs7Q0FFdEIsWUFBSUMsT0FBTyxHQUFHcFEsUUFBUSxDQUFDcVEsYUFBVCxDQUF1QixtQkFBbUJkLEtBQW5CLEdBQTJCLHVCQUFsRCxDQUFkO0NBQ0FTLFFBQUFBLE1BQU0sQ0FBQ3hMLFdBQVAsQ0FBbUI0TCxPQUFuQjs7Q0FDQSxZQUFJLENBQUN2SixPQUFPLENBQUNRLEtBQVQsSUFBa0J2QixRQUF0QixFQUFnQztDQUM1QkEsVUFBQUEsUUFBUTtDQUNYO0NBQ0osT0FQRDs7Q0FRQW9LLE1BQUFBLEtBQUssQ0FBQ3RQLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEJrUCxRQUExQjtDQUNBSSxNQUFBQSxLQUFLLENBQUNJLEdBQU4sR0FBWVosZ0JBQWdCLEdBQUdBLGdCQUFnQixDQUFDWSxHQUFqQixJQUF3QixFQUEzQixHQUFnQyxFQUE1RDs7Q0FDQSxVQUFJekosT0FBTyxDQUFDTyxRQUFSLElBQW9CdUksWUFBeEIsRUFBc0M7Q0FDbENPLFFBQUFBLEtBQUssQ0FBQ0wsS0FBTixHQUFjRixZQUFkO0NBQ0g7O0NBQ0RLLE1BQUFBLE1BQU0sQ0FBQ25QLFdBQVAsQ0FBbUJxUCxLQUFuQixFQXpEZ0M7O0NBNERoQyxVQUFJckosT0FBTyxDQUFDUSxLQUFSLElBQWlCdkIsUUFBckIsRUFBK0I7Q0FDM0JBLFFBQUFBLFFBQVE7Q0FDWDtDQUNKLEtBcmlCZTs7O0NBd2lCaEIsYUFBU2lLLFdBQVQsQ0FBcUJHLEtBQXJCLEVBQTRCOztDQUV4QixVQUFJSyxNQUFNLEdBQUdMLEtBQUssQ0FBQzdELElBQW5CLENBRndCOztDQUl4QixVQUFJNkQsS0FBSyxDQUFDTSxPQUFWLEVBQW1CO0NBQ2YsWUFBSUMsSUFBSSxHQUFHLEVBQVgsQ0FEZTs7Q0FHZixhQUFLLElBQUl2QyxJQUFULElBQWlCZ0MsS0FBSyxDQUFDTSxPQUF2QixFQUFnQztDQUM1QixjQUFJdEMsSUFBSSxDQUFDd0MsU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsTUFBeUIsS0FBekIsSUFBa0MsQ0FBQ0MsS0FBSyxDQUFDekMsSUFBSSxDQUFDd0MsU0FBTCxDQUFlLENBQWYsQ0FBRCxDQUE1QyxFQUFpRTtDQUM3REQsWUFBQUEsSUFBSSxDQUFDdkMsSUFBSSxDQUFDdkksT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBRCxDQUFKLEdBQWdDdUssS0FBSyxDQUFDTSxPQUFOLENBQWN0QyxJQUFkLENBQWhDO0NBQ0g7Q0FDSixTQVBjOzs7Q0FTZixZQUFJNUksSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQVAsQ0FBWW1MLElBQVosRUFBa0JHLElBQWxCLENBQXVCLFVBQVM5USxDQUFULEVBQVlDLENBQVosRUFBZTtDQUM3QyxpQkFBTzZDLFFBQVEsQ0FBQzlDLENBQUQsRUFBSSxFQUFKLENBQVIsR0FBa0I4QyxRQUFRLENBQUM3QyxDQUFELEVBQUksRUFBSixDQUExQixHQUFvQyxDQUFDLENBQXJDLEdBQXlDLENBQWhEO0NBQ0gsU0FGVSxDQUFYLENBVGU7O0NBYWYsWUFBSXdCLEtBQUssR0FBR2dCLE1BQU0sQ0FBQ3NPLFVBQVAsR0FBb0J0TyxNQUFNLENBQUN1TyxnQkFBdkMsQ0FiZTs7Q0FlZixZQUFJOUssQ0FBQyxHQUFHLENBQVI7O0NBQ0EsZUFBT0EsQ0FBQyxHQUFHVixJQUFJLENBQUN4QixNQUFMLEdBQWMsQ0FBbEIsSUFBdUJ3QixJQUFJLENBQUNVLENBQUQsQ0FBSixHQUFVekUsS0FBeEMsRUFBK0M7Q0FDM0N5RSxVQUFBQSxDQUFDO0NBQ0o7O0NBQ0R1SyxRQUFBQSxNQUFNLEdBQUdFLElBQUksQ0FBQ25MLElBQUksQ0FBQ1UsQ0FBRCxDQUFMLENBQUosSUFBaUJ1SyxNQUExQjtDQUNIOztDQUNELGFBQU9BLE1BQVA7Q0FDSCxLQWxrQmU7OztDQXFrQmhCLGFBQVNqSCxhQUFULEdBQXlCO0NBQ3JCLGFBQU95SCxJQUFJLENBQUM1SSxZQUFZLEdBQUcsQ0FBaEIsQ0FBWDtDQUNILEtBdmtCZTs7O0NBMGtCaEIsYUFBU2lCLGlCQUFULEdBQTZCO0NBQ3pCLGFBQU8ySCxJQUFJLENBQUM1SSxZQUFZLEdBQUcsQ0FBaEIsQ0FBWDtDQUNILEtBNWtCZTs7O0NBK2tCaEIsYUFBU3FGLGNBQVQsQ0FBd0I1RSxLQUF4QixFQUErQjtDQUMzQixVQUFJQSxLQUFKLEVBQVc7Q0FDUEEsUUFBQUEsS0FBSyxDQUFDcUIsY0FBTjtDQUNIOztDQUNELGFBQU84RyxJQUFJLENBQUMsQ0FBRCxDQUFYO0NBQ0gsS0FwbEJlOzs7Q0F1bEJoQixhQUFTdEQsYUFBVCxDQUF1QjdFLEtBQXZCLEVBQThCO0NBQzFCLFVBQUlBLEtBQUosRUFBVztDQUNQQSxRQUFBQSxLQUFLLENBQUNxQixjQUFOO0NBQ0g7O0NBQ0QsYUFBTzhHLElBQUksQ0FBQzdJLGNBQWMsQ0FBQ3BFLE1BQWYsR0FBd0IsQ0FBekIsQ0FBWDtDQUNIOzs7Ozs7Ozs7Q0FRRCxhQUFTaU4sSUFBVCxDQUFjeEIsS0FBZCxFQUFxQmpELE9BQXJCLEVBQThCO0NBQzFCLFVBQUksQ0FBQ2xFLGdCQUFELElBQXFCbUgsS0FBSyxJQUFJLENBQTlCLElBQW1DQSxLQUFLLEdBQUdqRCxPQUFPLENBQUN4SSxNQUF2RCxFQUErRDtDQUMzRDRJLFFBQUFBLGNBQWMsQ0FBQ0osT0FBRCxFQUFVekYsT0FBVixDQUFkO0NBQ0E4RixRQUFBQSxXQUFXLENBQUM0QyxLQUFELENBQVg7Q0FDQSxlQUFPLElBQVA7Q0FDSDs7Q0FDRCxVQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0NBQ1gsWUFBSTFJLE9BQU8sQ0FBQ1UsU0FBWixFQUF1QjtDQUNuQnlKLFVBQUFBLGVBQWUsQ0FBQyxNQUFELENBQWY7Q0FDSDs7Q0FDRCxlQUFPLEtBQVA7Q0FDSDs7Q0FDRCxVQUFJekIsS0FBSyxJQUFJOUcsY0FBYyxDQUFDM0UsTUFBNUIsRUFBb0M7Q0FDaEMsWUFBSStDLE9BQU8sQ0FBQ1UsU0FBWixFQUF1QjtDQUNuQnlKLFVBQUFBLGVBQWUsQ0FBQyxPQUFELENBQWY7Q0FDSDs7Q0FDRCxlQUFPLEtBQVA7Q0FDSDs7Q0FFRDdJLE1BQUFBLFlBQVksR0FBR29ILEtBQWY7Q0FDQWYsTUFBQUEsU0FBUyxDQUFDckcsWUFBRCxFQUFlLFlBQVc7Q0FDL0JzRyxRQUFBQSxXQUFXLENBQUN0RyxZQUFELENBQVg7Q0FDQXVHLFFBQUFBLFdBQVcsQ0FBQ3ZHLFlBQUQsQ0FBWDtDQUNILE9BSFEsQ0FBVDtDQUlBd0csTUFBQUEsWUFBWTs7Q0FFWixVQUFJOUgsT0FBTyxDQUFDYSxRQUFaLEVBQXNCO0NBQ2xCYixRQUFBQSxPQUFPLENBQUNhLFFBQVIsQ0FBaUJTLFlBQWpCLEVBQStCTSxjQUFjLENBQUMzRSxNQUE5QztDQUNIOztDQUVELGFBQU8sSUFBUDtDQUNIOzs7Ozs7O0NBTUQsYUFBU2tOLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW9DO0NBQ2hDbkosTUFBQUEsTUFBTSxDQUFDcUUsU0FBUCxHQUFtQixpQkFBaUI4RSxTQUFwQztDQUNBbE4sTUFBQUEsVUFBVSxDQUFDLFlBQVc7Q0FDbEIrRCxRQUFBQSxNQUFNLENBQUNxRSxTQUFQLEdBQW1CLEVBQW5CO0NBQ0gsT0FGUyxFQUVQLEdBRk8sQ0FBVjtDQUdIOztDQUVELGFBQVN3QyxZQUFULEdBQXdCO0NBQ3BCLFVBQUl1QyxNQUFNLEdBQUcsQ0FBQy9JLFlBQUQsR0FBZ0IsR0FBaEIsR0FBc0IsR0FBbkM7O0NBQ0EsVUFBSXRCLE9BQU8sQ0FBQ1UsU0FBUixLQUFzQixRQUExQixFQUFvQztDQUNoQ08sUUFBQUEsTUFBTSxDQUFDNUcsS0FBUCxDQUFhaVEsT0FBYixHQUF1QixDQUF2QjtDQUNBcE4sUUFBQUEsVUFBVSxDQUFDLFlBQVc7Q0FDbEI2RCxVQUFBQSxRQUFRLENBQUNvRCxVQUFULEdBQ0lsRCxNQUFNLENBQUM1RyxLQUFQLENBQWFrUSxTQUFiLEdBQXlCdEosTUFBTSxDQUFDNUcsS0FBUCxDQUFhbVEsZUFBYixHQUErQixpQkFBaUJILE1BQWpCLEdBQTBCLE9BRHRGLEdBRU1wSixNQUFNLENBQUM1RyxLQUFQLENBQWFvUSxJQUFiLEdBQW9CSixNQUYxQjtDQUdBcEosVUFBQUEsTUFBTSxDQUFDNUcsS0FBUCxDQUFhaVEsT0FBYixHQUF1QixDQUF2QjtDQUNILFNBTFMsRUFLUCxHQUxPLENBQVY7Q0FNSCxPQVJELE1BUU87Q0FDSHZKLFFBQUFBLFFBQVEsQ0FBQ29ELFVBQVQsR0FDSWxELE1BQU0sQ0FBQzVHLEtBQVAsQ0FBYWtRLFNBQWIsR0FBeUJ0SixNQUFNLENBQUM1RyxLQUFQLENBQWFtUSxlQUFiLEdBQStCLGlCQUFpQkgsTUFBakIsR0FBMEIsT0FEdEYsR0FFTXBKLE1BQU0sQ0FBQzVHLEtBQVAsQ0FBYW9RLElBQWIsR0FBb0JKLE1BRjFCO0NBR0g7Q0FDSixLQS9wQmU7OztDQWtxQmhCLGFBQVNqRyxxQkFBVCxHQUFpQztDQUM3QixVQUFJc0csR0FBRyxHQUFHcEUsTUFBTSxDQUFDLEtBQUQsQ0FBaEI7Q0FDQSxhQUFPLE9BQU9vRSxHQUFHLENBQUNyUSxLQUFKLENBQVVzUSxXQUFqQixLQUFpQyxXQUFqQyxJQUFnRCxPQUFPRCxHQUFHLENBQUNyUSxLQUFKLENBQVV1USxpQkFBakIsS0FBdUMsV0FBOUY7Q0FDSCxLQXJxQmU7OztDQXdxQmhCLGFBQVN0RyxjQUFULEdBQTBCO0NBQ3RCLFVBQUlvRyxHQUFHLEdBQUdwRSxNQUFNLENBQUMsS0FBRCxDQUFoQjtDQUNBb0UsTUFBQUEsR0FBRyxDQUFDbkUsU0FBSixHQUFnQixRQUFoQjtDQUNBLGFBQU8sQ0FBQ21FLEdBQUcsQ0FBQzFELFVBQUosSUFBa0IwRCxHQUFHLENBQUMxRCxVQUFKLENBQWU2RCxZQUFsQyxNQUFvRCw0QkFBM0Q7Q0FDSCxLQTVxQmU7Ozs7O0NBZ3JCaEIsYUFBU3JHLHdCQUFULEdBQW9DO0NBQ2hDLFVBQUlELGFBQWEsR0FBRyxLQUFwQjs7Q0FDQSxVQUFJO0NBQ0EsWUFBSXVHLElBQUksR0FBR3RNLE1BQU0sQ0FBQ3VNLGNBQVAsQ0FBc0IsRUFBdEIsRUFBMEIsU0FBMUIsRUFBcUM7Q0FDNUNDLFVBQUFBLEdBQUcsRUFBRSxlQUFXO0NBQ1p6RyxZQUFBQSxhQUFhLEdBQUcsSUFBaEI7Q0FDSDtDQUgyQyxTQUFyQyxDQUFYO0NBS0E3SSxRQUFBQSxNQUFNLENBQUN0QyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxJQUFoQyxFQUFzQzBSLElBQXRDO0NBQ0gsT0FQRCxDQU9FLE9BQU9oTyxDQUFQLEVBQVU7O0NBQXdDOztDQUVwRCxhQUFPeUgsYUFBUDtDQUNIOzs7O0NBR0QsYUFBU3FELFdBQVQsQ0FBcUJjLEtBQXJCLEVBQTRCO0NBQ3hCLFVBQUlBLEtBQUssR0FBR3BILFlBQVIsSUFBd0J0QixPQUFPLENBQUNTLE9BQXBDLEVBQTZDO0NBQ3pDO0NBQ0g7O0NBQ0RrSCxNQUFBQSxTQUFTLENBQUNlLEtBQUssR0FBRyxDQUFULEVBQVksWUFBVztDQUM1QmQsUUFBQUEsV0FBVyxDQUFDYyxLQUFLLEdBQUcsQ0FBVCxDQUFYO0NBQ0gsT0FGUSxDQUFUO0NBR0g7O0NBRUQsYUFBU2IsV0FBVCxDQUFxQmEsS0FBckIsRUFBNEI7Q0FDeEIsVUFBSXBILFlBQVksR0FBR29ILEtBQWYsSUFBd0IxSSxPQUFPLENBQUNTLE9BQXBDLEVBQTZDO0NBQ3pDO0NBQ0g7O0NBQ0RrSCxNQUFBQSxTQUFTLENBQUNlLEtBQUssR0FBRyxDQUFULEVBQVksWUFBVztDQUM1QmIsUUFBQUEsV0FBVyxDQUFDYSxLQUFLLEdBQUcsQ0FBVCxDQUFYO0NBQ0gsT0FGUSxDQUFUO0NBR0g7O0NBRUQsYUFBU3pDLElBQVQsQ0FBY1osT0FBZCxFQUF1QnRELEtBQXZCLEVBQThCOUMsUUFBOUIsRUFBd0NlLE9BQXhDLEVBQWlEO0NBQzdDLFVBQUlxRixPQUFPLENBQUNqTSxnQkFBWixFQUE4QjtDQUMxQmlNLFFBQUFBLE9BQU8sQ0FBQ2pNLGdCQUFSLENBQXlCMkksS0FBekIsRUFBZ0M5QyxRQUFoQyxFQUEwQ2UsT0FBMUM7Q0FDSCxPQUZELE1BRU87O0NBRUhxRixRQUFBQSxPQUFPLENBQUNoTSxXQUFSLENBQW9CLE9BQU8wSSxLQUEzQixFQUFrQyxVQUFTQSxLQUFULEVBQWdCOztDQUU5Q0EsVUFBQUEsS0FBSyxHQUFHQSxLQUFLLElBQUlyRyxNQUFNLENBQUNxRyxLQUF4QjtDQUNBQSxVQUFBQSxLQUFLLENBQUNDLE1BQU4sR0FBZUQsS0FBSyxDQUFDQyxNQUFOLElBQWdCRCxLQUFLLENBQUNrSixVQUFyQztDQUNBaE0sVUFBQUEsUUFBUSxDQUFDOEMsS0FBRCxDQUFSO0NBQ0gsU0FMRDtDQU1IO0NBQ0o7O0NBRUQsYUFBU3FFLE1BQVQsQ0FBZ0JmLE9BQWhCLEVBQXlCdEQsS0FBekIsRUFBZ0M5QyxRQUFoQyxFQUEwQ2UsT0FBMUMsRUFBbUQ7Q0FDL0MsVUFBSXFGLE9BQU8sQ0FBQzVMLG1CQUFaLEVBQWlDO0NBQzdCNEwsUUFBQUEsT0FBTyxDQUFDNUwsbUJBQVIsQ0FBNEJzSSxLQUE1QixFQUFtQzlDLFFBQW5DLEVBQTZDZSxPQUE3QztDQUNILE9BRkQsTUFFTzs7Q0FFSHFGLFFBQUFBLE9BQU8sQ0FBQ3pMLFdBQVIsQ0FBb0IsT0FBT21JLEtBQTNCLEVBQWtDOUMsUUFBbEM7Q0FDSDtDQUNKOztDQUVELGFBQVNvSCxPQUFULENBQWlCcEUsRUFBakIsRUFBcUI7Q0FDakIsYUFBTzlJLFFBQVEsQ0FBQytSLGNBQVQsQ0FBd0JqSixFQUF4QixDQUFQO0NBQ0g7O0NBRUQsYUFBU3FFLE1BQVQsQ0FBZ0JqQixPQUFoQixFQUF5QjtDQUNyQixhQUFPbE0sUUFBUSxDQUFDVyxhQUFULENBQXVCdUwsT0FBdkIsQ0FBUDtDQUNIOztDQUVELGFBQVM4RixhQUFULEdBQXlCO0NBQ3JCckUsTUFBQUEsWUFBWTtDQUNaWixNQUFBQSxlQUFlO0NBQ2ZFLE1BQUFBLE1BQU0sQ0FBQ2pOLFFBQUQsRUFBVyxTQUFYLEVBQXNCc04sY0FBdEIsQ0FBTjtDQUNBdE4sTUFBQUEsUUFBUSxDQUFDaU0sb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUN6SCxXQUF6QyxDQUFxRHhFLFFBQVEsQ0FBQytSLGNBQVQsQ0FBd0IscUJBQXhCLENBQXJEO0NBQ0F2SixNQUFBQSxJQUFJLEdBQUcsRUFBUDtDQUNBTixNQUFBQSxjQUFjLEdBQUcsRUFBakI7Q0FDQUMsTUFBQUEsWUFBWSxHQUFHLENBQWY7Q0FDSDs7Q0FFRCxXQUFPO0NBQ0gwQyxNQUFBQSxHQUFHLEVBQUVBLEdBREY7Q0FFSGtHLE1BQUFBLElBQUksRUFBRUEsSUFGSDtDQUdIa0IsTUFBQUEsUUFBUSxFQUFFM0ksYUFIUDtDQUlINEksTUFBQUEsWUFBWSxFQUFFOUksaUJBSlg7Q0FLSCtJLE1BQUFBLElBQUksRUFBRW5KLFdBTEg7Q0FNSG9KLE1BQUFBLE9BQU8sRUFBRUo7Q0FOTixLQUFQO0NBUUgsR0Ezd0JBLENBQUQ7OztBQ1BBLCtDQUFlLE1BQU07Q0FDbkJLLEVBQUFBLFdBQVEsQ0FBQ3hILEdBQVQsQ0FBYSxhQUFiO0NBQ0QsQ0FGRDs7QUNGQSx1Q0FBZSxNQUFNO0NBQ25CLFFBQU15SCxHQUFHLEdBQUd0UyxRQUFRLENBQUNxUSxhQUFULENBQXVCLFNBQXZCLENBQVo7Q0FDQSxRQUFNa0MsTUFBTSxHQUFHdlMsUUFBUSxDQUFDcVEsYUFBVCxDQUF1QixnQkFBdkIsQ0FBZjtDQUNBLFFBQU1tQyxNQUFNLEdBQUd4UyxRQUFRLENBQUNxUSxhQUFULENBQXVCLFlBQXZCLENBQWYsQ0FIbUI7O0NBTW5CLE1BQUlrQyxNQUFKLEVBQVk7Q0FDVkEsSUFBQUEsTUFBTSxDQUFDdFMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsTUFBTTtDQUNyQ3FTLE1BQUFBLEdBQUcsQ0FBQ25OLFNBQUosQ0FBY3NOLE1BQWQsQ0FBcUIsYUFBckI7Q0FDQUQsTUFBQUEsTUFBTSxDQUFDck4sU0FBUCxDQUFpQnNOLE1BQWpCLENBQXdCLHFCQUF4QjtDQUNELEtBSEQ7Q0FJRDtDQUNGLENBWkQ7O0NDQUEsTUFBTUMsWUFBWSxHQUFHMVMsUUFBUSxDQUFDK1IsY0FBVCxDQUF3QixlQUF4QixDQUFyQjs7Q0FFQSxNQUFNWSxXQUFXLEdBQUcsTUFBTTtDQUN4QnBRLEVBQUFBLE1BQU0sQ0FBQ3dCLFVBQVAsQ0FBa0IsTUFBTTtDQUN0Qi9ELElBQUFBLFFBQVEsQ0FBQ3FRLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NsTCxTQUF0QyxDQUFnREMsR0FBaEQsQ0FBb0QsZUFBcEQ7Q0FDRCxHQUZELEVBRUcsR0FGSCxFQUR3QjtDQUl6QixDQUpEOztBQU1BLCtDQUFlLE1BQU07Q0FDbkI7Q0FDQXBGLEVBQUFBLFFBQVEsQ0FBQzRTLFNBQVQsR0FBcUJqUCxDQUFDLElBQUk7Q0FDeEIsVUFBTWlGLEtBQUssR0FBR2pGLENBQUMsSUFBSXBCLE1BQU0sQ0FBQ3FHLEtBQTFCO0NBQ0EsVUFBTWlLLFVBQVUsR0FBRzdTLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjK0UsU0FBZCxDQUF3QnNGLFFBQXhCLENBQWlDLGdCQUFqQyxDQUFuQjs7Q0FFQSxRQUFJN0IsS0FBSyxDQUFDMkUsT0FBTixLQUFrQixFQUFsQixJQUF3QnNGLFVBQXhCLElBQXNDSCxZQUExQyxFQUF3RDtDQUN0REEsTUFBQUEsWUFBWSxDQUFDOVIsWUFBYixDQUEwQixTQUExQixFQUFxQyxTQUFyQztDQUNBK1IsTUFBQUEsV0FBVztDQUNaO0NBQ0YsR0FSRCxDQUZtQjs7O0NBYW5CLE1BQUlELFlBQUosRUFBa0I7Q0FDaEJBLElBQUFBLFlBQVksQ0FBQ3pTLGdCQUFiLENBQThCLFFBQTlCLEVBQXdDMFMsV0FBeEM7Q0FDQUQsSUFBQUEsWUFBWSxDQUFDelMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMwUyxXQUF2QztDQUNEO0NBQ0YsQ0FqQkQ7Ozs7Ozs7Ozs7Ozs7OztDQ0pBM1MsUUFBUSxDQUFDa0YsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNtSyxNQUFuQyxDQUEwQyxPQUExQztDQUdBOztDQUNBLENBQUN3RCxPQUFELEVBQVVDLFFBQVYsRUFBb0J4TixPQUFwQixDQUE0QlQsTUFBTSxJQUFJO0NBQ3BDTyxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVIsTUFBWixFQUFvQlMsT0FBcEIsQ0FBNEJTLENBQUMsSUFBSTtDQUMvQmxCLElBQUFBLE1BQU0sQ0FBQ2tCLENBQUQsQ0FBTjtDQUNELEdBRkQ7Q0FHRCxDQUpEOzs7OyJ9
