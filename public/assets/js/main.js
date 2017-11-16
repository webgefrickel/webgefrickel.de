(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var baguetteBox = createCommonjsModule(function (module, exports) {
    /*!
     * baguetteBox.js
     * @author  feimosi
     * @version %%INJECT_VERSION%%
     * @url https://github.com/feimosi/baguetteBox.js
     */

    /* global define, module */

    (function (root, factory) {
        if (typeof undefined === 'function' && undefined.amd) {
            undefined(factory);
        } else {
            module.exports = factory();
        }
    })(commonjsGlobal, function () {
        var leftArrow = '<svg width="44" height="60">' + '<polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"' + 'stroke-linecap="butt" fill="none" stroke-linejoin="round"/>' + '</svg>',
            rightArrow = '<svg width="44" height="60">' + '<polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"' + 'stroke-linecap="butt" fill="none" stroke-linejoin="round"/>' + '</svg>',
            closeX = '<svg width="30" height="30">' + '<g stroke="rgb(160,160,160)" stroke-width="4">' + '<line x1="5" y1="5" x2="25" y2="25"/>' + '<line x1="5" y1="25" x2="25" y2="5"/>' + '</g></svg>';
        // Global options and their defaults
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
        };
        // Object containing information about features compatibility
        var supports = {};
        // DOM Elements references
        var overlay, slider, previousButton, nextButton, closeButton;
        // An array with all images in the current gallery
        var currentGallery = [];
        // Current image index inside the slider
        var currentIndex = 0;
        // Touch event start position (for slide gesture)
        var touch = {};
        // If set to true ignore touch events because animation was already fired
        var touchFlag = false;
        // Regex pattern to match image files
        var regex = /.+\.(gif|jpe?g|png|webp)/i;
        // Object of all used galleries
        var data = {};
        // Array containing temporary images DOM elements
        var imagesElements = [];
        // The last focused element before opening the overlay
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
            }
            // Save x and y axis position
            touch.startX = event.changedTouches[0].pageX;
            touch.startY = event.changedTouches[0].pageY;
        };
        var touchmoveHandler = function touchmoveHandler(event) {
            // If action was already triggered or multitouch return
            if (touchFlag || touch.multitouch) {
                return;
            }
            event.preventDefault ? event.preventDefault() : event.returnValue = false; // eslint-disable-line no-unused-expressions
            var touchEvent = event.touches[0] || event.changedTouches[0];
            // Move at least 40 pixels to trigger the action
            if (touchEvent.pageX - touch.startX > 40) {
                touchFlag = true;
                showPreviousImage();
            } else if (touchEvent.pageX - touch.startX < -40) {
                touchFlag = true;
                showNextImage();
                // Move 100 pixels up to close the overlay
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
        };

        // forEach polyfill for IE8
        // http://stackoverflow.com/a/14827443/1077846
        /* eslint-disable */
        if (![].forEach) {
            Array.prototype.forEach = function (callback, thisArg) {
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }

        // filter polyfill for IE8
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
            supports.svg = testSVGSupport();

            buildOverlay();
            removeFromCache(selector);
            bindImageClickListeners(selector, userOptions);
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
                }

                // Get nodes from gallery elements or single-element galleries
                var tagsNodeList = [];
                if (galleryElement.tagName === 'A') {
                    tagsNodeList = [galleryElement];
                } else {
                    tagsNodeList = galleryElement.getElementsByTagName('a');
                }

                // Filter 'a' elements from those not linking to images
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
            overlay = getByID('baguetteBox-overlay');
            // Check if the overlay already exists
            if (overlay) {
                slider = getByID('baguetteBox-slider');
                previousButton = getByID('previous-button');
                nextButton = getByID('next-button');
                closeButton = getByID('close-button');
                return;
            }
            // Create overlay element
            overlay = create('div');
            overlay.setAttribute('role', 'dialog');
            overlay.id = 'baguetteBox-overlay';
            document.getElementsByTagName('body')[0].appendChild(overlay);
            // Create gallery slider element
            slider = create('div');
            slider.id = 'baguetteBox-slider';
            overlay.appendChild(slider);
            // Create all necessary buttons
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
            }
        }

        function bindEvents() {
            bind(overlay, 'click', overlayClickHandler);
            bind(previousButton, 'click', previousButtonClickHandler);
            bind(nextButton, 'click', nextButtonClickHandler);
            bind(closeButton, 'click', closeButtonClickHandler);
            bind(slider, 'contextmenu', contextmenuHandler);
            bind(overlay, 'touchstart', touchstartHandler);
            bind(overlay, 'touchmove', touchmoveHandler);
            bind(overlay, 'touchend', touchendHandler);
            bind(document, 'focus', trapFocusInsideOverlay, true);
        }

        function unbindEvents() {
            unbind(overlay, 'click', overlayClickHandler);
            unbind(previousButton, 'click', previousButtonClickHandler);
            unbind(nextButton, 'click', nextButtonClickHandler);
            unbind(closeButton, 'click', closeButtonClickHandler);
            unbind(slider, 'contextmenu', contextmenuHandler);
            unbind(overlay, 'touchstart', touchstartHandler);
            unbind(overlay, 'touchmove', touchmoveHandler);
            unbind(overlay, 'touchend', touchendHandler);
            unbind(document, 'focus', trapFocusInsideOverlay, true);
        }

        function prepareOverlay(gallery, userOptions) {
            // If the same gallery is being opened prevent from loading it once again
            if (currentGallery === gallery) {
                return;
            }
            currentGallery = gallery;
            // Update gallery specific options
            setOptions(userOptions);
            // Empty slider of previous contents (more effective than .innerHTML = "")
            while (slider.firstChild) {
                slider.removeChild(slider.firstChild);
            }
            imagesElements.length = 0;

            var imagesFiguresIds = [];
            var imagesCaptionsIds = [];
            // Prepare and append images containers and populate figure and captions IDs arrays
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
            }
            // Fill options object
            for (var item in defaults) {
                options[item] = defaults[item];
                if (typeof newOptions[item] !== 'undefined') {
                    options[item] = newOptions[item];
                }
            }
            /* Apply new options */
            // Change transition for proper animation
            slider.style.transition = slider.style.webkitTransition = options.animation === 'fadeIn' ? 'opacity .4s ease' : options.animation === 'slideIn' ? '' : 'none';
            // Hide buttons if necessary
            if (options.buttons === 'auto' && ('ontouchstart' in window || currentGallery.length === 1)) {
                options.buttons = false;
            }
            // Set buttons style to hide or display them
            previousButton.style.display = nextButton.style.display = options.buttons ? '' : 'none';
            // Set overlay color
            try {
                overlay.style.backgroundColor = options.overlayBackgroundColor;
            } catch (e) {
                // Silence the error and continue
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
            }
            // Fade in overlay
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

            unbind(document, 'keydown', keyDownHandler);
            // Fade out and hide the overlay
            overlay.className = '';
            setTimeout(function () {
                overlay.style.display = 'none';
                exitFullscreen();
                if (options.bodyClass && document.body.classList) {
                    document.body.classList.remove(options.bodyClass);
                }
                if (options.afterHide) {
                    options.afterHide();
                }
                documentLastFocus && documentLastFocus.focus();
            }, 500);
        }

        function loadImage(index, callback) {
            var imageContainer = imagesElements[index];
            var galleryItem = currentGallery[index];

            // Return if the index exceeds prepared images in the overlay
            // or if the current gallery has been changed / closed
            if (typeof imageContainer === 'undefined' || typeof galleryItem === 'undefined') {
                return;
            }

            // If image is already loaded run callback and return
            if (imageContainer.getElementsByTagName('img')[0]) {
                if (callback) {
                    callback();
                }
                return;
            }

            // Get element reference, optional caption and source path
            var imageElement = galleryItem.imageElement;
            var thumbnailElement = imageElement.getElementsByTagName('img')[0];
            var imageCaption = typeof options.captions === 'function' ? options.captions.call(currentGallery, imageElement) : imageElement.getAttribute('data-caption') || imageElement.title;
            var imageSrc = getImageSrc(imageElement);

            // Prepare figure element
            var figure = create('figure');
            figure.id = 'baguetteBox-figure-' + index;
            figure.innerHTML = '<div class="baguetteBox-spinner">' + '<div class="baguetteBox-double-bounce1"></div>' + '<div class="baguetteBox-double-bounce2"></div>' + '</div>';
            // Insert caption if available
            if (options.captions && imageCaption) {
                var figcaption = create('figcaption');
                figcaption.id = 'baguetteBox-figcaption-' + index;
                figcaption.innerHTML = imageCaption;
                figure.appendChild(figcaption);
            }
            imageContainer.appendChild(figure);

            // Prepare gallery img element
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
            figure.appendChild(image);

            // Run callback
            if (options.async && callback) {
                callback();
            }
        }

        // Get image source location, mostly used for responsive images
        function getImageSrc(image) {
            // Set default image path from href
            var result = image.href;
            // If dataset is supported find the most suitable image
            if (image.dataset) {
                var srcs = [];
                // Get all possible image versions depending on the resolution
                for (var item in image.dataset) {
                    if (item.substring(0, 3) === 'at-' && !isNaN(item.substring(3))) {
                        srcs[item.replace('at-', '')] = image.dataset[item];
                    }
                }
                // Sort resolutions ascending
                var keys = Object.keys(srcs).sort(function (a, b) {
                    return parseInt(a, 10) < parseInt(b, 10) ? -1 : 1;
                });
                // Get real screen resolution
                var width = window.innerWidth * window.devicePixelRatio;
                // Find the first image bigger than or equal to the current width
                var i = 0;
                while (i < keys.length - 1 && keys[i] < width) {
                    i++;
                }
                result = srcs[keys[i]] || result;
            }
            return result;
        }

        // Return false at the right end of the gallery
        function showNextImage() {
            var returnValue;
            // Check if next image exists
            if (currentIndex <= imagesElements.length - 2) {
                currentIndex++;
                updateOffset();
                preloadNext(currentIndex);
                returnValue = true;
            } else if (options.animation) {
                slider.className = 'bounce-from-right';
                setTimeout(function () {
                    slider.className = '';
                }, 400);
                returnValue = false;
            }
            if (options.onChange) {
                options.onChange(currentIndex, imagesElements.length);
            }
            return returnValue;
        }

        // Return false at the left end of the gallery
        function showPreviousImage() {
            var returnValue;
            // Check if previous image exists
            if (currentIndex >= 1) {
                currentIndex--;
                updateOffset();
                preloadPrev(currentIndex);
                returnValue = true;
            } else if (options.animation) {
                slider.className = 'bounce-from-left';
                setTimeout(function () {
                    slider.className = '';
                }, 400);
                returnValue = false;
            }
            if (options.onChange) {
                options.onChange(currentIndex, imagesElements.length);
            }
            return returnValue;
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
        }

        // CSS 3D Transforms test
        function testTransformsSupport() {
            var div = create('div');
            return typeof div.style.perspective !== 'undefined' || typeof div.style.webkitPerspective !== 'undefined';
        }

        // Inline SVG test
        function testSVGSupport() {
            var div = create('div');
            div.innerHTML = '<svg/>';
            return (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
        }

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

        function bind(element, event, callback, useCapture) {
            if (element.addEventListener) {
                element.addEventListener(event, callback, useCapture);
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

        function unbind(element, event, callback, useCapture) {
            if (element.removeEventListener) {
                element.removeEventListener(event, callback, useCapture);
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
            showNext: showNextImage,
            showPrevious: showPreviousImage,
            destroy: destroyPlugin
        };
    });
});

var _components_gallery$gallery = (() => {
  baguetteBox.run('.js-gallery');
});

var _components_nav$nav = (() => {
  const nav = document.querySelector('.js-nav');
  const button = document.querySelector('.js-toggle-nav');
  const header = document.querySelector('.js-header');

  // navigation button on click, basic toggling of classes
  if (button) {
    button.addEventListener('click', () => {
      nav.classList.toggle('nav--active');
      header.classList.toggle('header--nav--active');
    });
  }
});

var breakpoints = { "s": 480, "m": 640, "l": 720, "xl": 960, "xxl": 1100, "xxxl": 1250, "xxxxl": 1600 };

// same usage as the mediaquery-scss-mixin, just
// provide the shortcode used in the scss-file and if it
// is a custom query. this module return true if the
// given breakpoint matches or false if it doesnt

var mediaquery = (shortcode => {
  const value = breakpoints[shortcode];
  let query = '';

  if (value) {
    // we have the default min-width
    const pxValue = parseInt(value, 10);
    query = `(min-width: ${pxValue}px)`;
  }

  // return the matches boolean
  return window.matchMedia(query).matches;
});

const sectionLinks = document.querySelectorAll('.js-sectionchange');
const links = document.querySelectorAll('.js-nav__link');
const page = document.querySelector('.js-page');

const clicksection = link => {
  link.classList.add('link-section--change');

  window.setTimeout(() => {
    window.location.href = link.getAttribute('href');
  }, 100); // animation is 150ms, so wait 100ms
};

// simulate sectionchange for navigation clicks on large displays
// but only if we are on contact/work/blog/legal-notice pages
const changeSections = mediaquery('xl') && (page.classList.contains('page--work') || page.classList.contains('page--contact') || page.classList.contains('page--blog') || page.classList.contains('page--legal-notice'));

const menuClick = link => {
  const target = link.getAttribute('data-target');
  const sections = ['work', 'fake', 'blog', 'contact'];
  let sectionLink = document.querySelector(`.link-section--${target}`);

  // if the sectionchange link does not exist, the modify the one existing
  // and change color + target
  if (!sectionLink) {
    sectionLink = document.querySelector('.link-section');
    sections.forEach(sec => {
      sectionLink.classList.remove(`link-section--${sec}`);
    });
    sectionLink.setAttribute('href', link.getAttribute('href'));
    sectionLink.classList.add(`link-section--${target}`);
  }

  clicksection(sectionLink);
};

var _components_sectionchange$sectionchange = (() => {
  // always apply this event to all the sectionlinks
  [...sectionLinks].forEach(sectionLink => {
    sectionLink.addEventListener('click', e => {
      e.preventDefault();
      clicksection(sectionLink);
    }, false);
  });

  // and to the menu links if needed
  if (changeSections) {
    [...links].forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        menuClick(link);
      });
    });
  }
});

const closeWelcome = document.getElementById('close-welcome');

const welcomeDone = () => {
  window.setTimeout(() => {
    document.querySelector('.js-welcome').classList.add('welcome--done');
  }, 800); // animation time is 700ms
};

var _components_welcome$welcome = (() => {
  // set the event to the esc-key to dismiss splash intro
  document.onkeydown = e => {
    const event = e || window.event;
    const isHomepage = document.body.classList.contains('site--homepage');

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

var fontfaceobserver = createCommonjsModule(function (module) {
  /* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function () {
    var f,
        g = [];function l(a) {
      g.push(a);1 == g.length && f();
    }function m() {
      for (; g.length;) g[0](), g.shift();
    }f = function f() {
      setTimeout(m);
    };function n(a) {
      this.a = p;this.b = void 0;this.f = [];var b = this;try {
        a(function (a) {
          q(b, a);
        }, function (a) {
          r(b, a);
        });
      } catch (c) {
        r(b, c);
      }
    }var p = 2;function t(a) {
      return new n(function (b, c) {
        c(a);
      });
    }function u(a) {
      return new n(function (b) {
        b(a);
      });
    }function q(a, b) {
      if (a.a == p) {
        if (b == a) throw new TypeError();var c = !1;try {
          var d = b && b.then;if (null != b && "object" == typeof b && "function" == typeof d) {
            d.call(b, function (b) {
              c || q(a, b);c = !0;
            }, function (b) {
              c || r(a, b);c = !0;
            });return;
          }
        } catch (e) {
          c || r(a, e);return;
        }a.a = 0;a.b = b;v(a);
      }
    }
    function r(a, b) {
      if (a.a == p) {
        if (b == a) throw new TypeError();a.a = 1;a.b = b;v(a);
      }
    }function v(a) {
      l(function () {
        if (a.a != p) for (; a.f.length;) {
          var b = a.f.shift(),
              c = b[0],
              d = b[1],
              e = b[2],
              b = b[3];try {
            0 == a.a ? "function" == typeof c ? e(c.call(void 0, a.b)) : e(a.b) : 1 == a.a && ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b));
          } catch (h) {
            b(h);
          }
        }
      });
    }n.prototype.g = function (a) {
      return this.c(void 0, a);
    };n.prototype.c = function (a, b) {
      var c = this;return new n(function (d, e) {
        c.f.push([a, b, d, e]);v(c);
      });
    };
    function w(a) {
      return new n(function (b, c) {
        function d(c) {
          return function (d) {
            h[c] = d;e += 1;e == a.length && b(h);
          };
        }var e = 0,
            h = [];0 == a.length && b(h);for (var k = 0; k < a.length; k += 1) u(a[k]).c(d(k), c);
      });
    }function x(a) {
      return new n(function (b, c) {
        for (var d = 0; d < a.length; d += 1) u(a[d]).c(b, c);
      });
    }window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
  })();

  (function () {
    function l(a, b) {
      document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b);
    }function m(a) {
      document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
        document.removeEventListener("DOMContentLoaded", c);a();
      }) : document.attachEvent("onreadystatechange", function k() {
        if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), a();
      });
    }function r(a) {
      this.a = document.createElement("div");this.a.setAttribute("aria-hidden", "true");this.a.appendChild(document.createTextNode(a));this.b = document.createElement("span");this.c = document.createElement("span");this.h = document.createElement("span");this.f = document.createElement("span");this.g = -1;this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
      this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c);
    }
    function t(a, b) {
      a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";";
    }function y(a) {
      var b = a.a.offsetWidth,
          c = b + 100;a.f.style.width = c + "px";a.c.scrollLeft = c;a.b.scrollLeft = a.b.scrollWidth + 100;return a.g !== b ? (a.g = b, !0) : !1;
    }function z(a, b) {
      function c() {
        var a = k;y(a) && a.a.parentNode && b(a.g);
      }var k = a;l(a.b, c);l(a.c, c);y(a);
    }function A(a, b) {
      var c = b || {};this.family = a;this.style = c.style || "normal";this.weight = c.weight || "normal";this.stretch = c.stretch || "normal";
    }var B = null,
        C = null,
        E = null,
        F = null;function G() {
      if (null === C) if (J() && /Apple/.test(window.navigator.vendor)) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C = !!a && 603 > parseInt(a[1], 10);
      } else C = !1;return C;
    }function J() {
      null === F && (F = !!document.fonts);return F;
    }
    function K() {
      if (null === E) {
        var a = document.createElement("div");try {
          a.style.font = "condensed 100px sans-serif";
        } catch (b) {}E = "" !== a.style.font;
      }return E;
    }function L(a, b) {
      return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ");
    }
    A.prototype.load = function (a, b) {
      var c = this,
          k = a || "BESbswy",
          q = 0,
          D = b || 3E3,
          H = new Date().getTime();return new Promise(function (a, b) {
        if (J() && !G()) {
          var M = new Promise(function (a, b) {
            function e() {
              new Date().getTime() - H >= D ? b() : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function (c) {
                1 <= c.length ? a() : setTimeout(e, 25);
              }, function () {
                b();
              });
            }e();
          }),
              N = new Promise(function (a, c) {
            q = setTimeout(c, D);
          });Promise.race([N, M]).then(function () {
            clearTimeout(q);a(c);
          }, function () {
            b(c);
          });
        } else m(function () {
          function u() {
            var b;if (b = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h) (b = f != g && f != h && g != h) || (null === B && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), B = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = B && (f == v && g == v && h == v || f == w && g == w && h == w || f == x && g == x && h == x)), b = !b;b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(q), a(c));
          }function I() {
            if (new Date().getTime() - H >= D) d.parentNode && d.parentNode.removeChild(d), b(c);else {
              var a = document.hidden;if (!0 === a || void 0 === a) f = e.a.offsetWidth, g = n.a.offsetWidth, h = p.a.offsetWidth, u();q = setTimeout(I, 50);
            }
          }var e = new r(k),
              n = new r(k),
              p = new r(k),
              f = -1,
              g = -1,
              h = -1,
              v = -1,
              w = -1,
              x = -1,
              d = document.createElement("div");d.dir = "ltr";t(e, L(c, "sans-serif"));t(n, L(c, "serif"));t(p, L(c, "monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v = e.a.offsetWidth;w = n.a.offsetWidth;x = p.a.offsetWidth;I();z(e, function (a) {
            f = a;u();
          });t(e, L(c, '"' + c.family + '",sans-serif'));z(n, function (a) {
            g = a;u();
          });t(n, L(c, '"' + c.family + '",serif'));
          z(p, function (a) {
            h = a;u();
          });t(p, L(c, '"' + c.family + '",monospace'));
        });
      });
    };module.exports = A;
  })();
});

var fonts = [{ "default": { "family": "Geomanist", "fallback": "sans-serif", "weight": 600, "style": "normal", "fontface": true, "file": "geomanist-medium" }, "regular": { "family": "Geomanist", "fallback": "sans-serif", "weight": 400, "style": "normal", "fontface": true, "file": "geomanist-regular" }, "code": { "family": "Fira Code", "fallback": "Hack, Menlo, Courier, monospace", "weight": 400, "style": "normal", "fontface": false } }];

var _globals_fontloader = (() => {
  const fontObservers = [];

  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add('fonts-loaded');
    return;
  }

  Object.keys(fonts).forEach(fontObject => {
    Object.keys(fonts[fontObject]).forEach(font => {
      const f = fonts[fontObject][font];
      if (f.fontface) {
        fontObservers.push(new fontfaceobserver(f.family.replace(/'/g, ''), {
          weight: f.weight,
          style: f.style
        }));
      }
    });
  });

  if (fontObservers.length >= 1) {
    Promise.all(fontObservers).then(() => {
      document.documentElement.classList.add('fonts-loaded');
      // Optimization for Repeat Views
      sessionStorage.fontsLoaded = true;
    });
  }
});

const components = {
  gallery$gallery: _components_gallery$gallery,
  nav$nav: _components_nav$nav,
  sectionchange$sectionchange: _components_sectionchange$sectionchange,
  welcome$welcome: _components_welcome$welcome
};
Object.freeze(components);
const globals = {
  fontloader: _globals_fontloader
};
Object.freeze(globals);
const other = {};
Object.freeze(other);


const load = [globals, other, components];

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

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhZ3VldHRlYm94LmpzL3NyYy9iYWd1ZXR0ZUJveC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdi9uYXYuanMiLCIuLi8uLi8uLi9zcmMvamF2YXNjcmlwdHMvMS1zaGFyZWQvYnJlYWtwb2ludHMuanMiLCIuLi8uLi8uLi9zcmMvamF2YXNjcmlwdHMvMi1oZWxwZXJzL21lZGlhcXVlcnkuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uY2hhbmdlL3NlY3Rpb25jaGFuZ2UuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udGZhY2VvYnNlcnZlci9mb250ZmFjZW9ic2VydmVyLmpzIiwiLi4vLi4vLi4vc3JjL2phdmFzY3JpcHRzLzEtc2hhcmVkL2ZvbnRzLmpzIiwiLi4vLi4vLi4vc3JjL2phdmFzY3JpcHRzLzQtZ2xvYmFsL2ZvbnRsb2FkZXIuanMiLCIuLi8uLi8uLi9zcmMvamF2YXNjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGJhZ3VldHRlQm94LmpzXG4gKiBAYXV0aG9yICBmZWltb3NpXG4gKiBAdmVyc2lvbiAlJUlOSkVDVF9WRVJTSU9OJSVcbiAqIEB1cmwgaHR0cHM6Ly9naXRodWIuY29tL2ZlaW1vc2kvYmFndWV0dGVCb3guanNcbiAqL1xuXG4vKiBnbG9iYWwgZGVmaW5lLCBtb2R1bGUgKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuYmFndWV0dGVCb3ggPSBmYWN0b3J5KCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gU1ZHIHNoYXBlcyB1c2VkIG9uIHRoZSBidXR0b25zXG4gICAgdmFyIGxlZnRBcnJvdyA9ICc8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI2MFwiPicgK1xuICAgICAgICAgICAgJzxwb2x5bGluZSBwb2ludHM9XCIzMCAxMCAxMCAzMCAzMCA1MFwiIHN0cm9rZT1cInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiIHN0cm9rZS13aWR0aD1cIjRcIicgK1xuICAgICAgICAgICAgICAnc3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz4nICtcbiAgICAgICAgICAgICc8L3N2Zz4nLFxuICAgICAgICByaWdodEFycm93ID0gJzxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjYwXCI+JyArXG4gICAgICAgICAgICAnPHBvbHlsaW5lIHBvaW50cz1cIjE0IDEwIDM0IDMwIDE0IDUwXCIgc3Ryb2tlPVwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIgc3Ryb2tlLXdpZHRoPVwiNFwiJyArXG4gICAgICAgICAgICAgICdzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPicgK1xuICAgICAgICAgICAgJzwvc3ZnPicsXG4gICAgICAgIGNsb3NlWCA9ICc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPicgK1xuICAgICAgICAgICAgJzxnIHN0cm9rZT1cInJnYigxNjAsMTYwLDE2MClcIiBzdHJva2Utd2lkdGg9XCI0XCI+JyArXG4gICAgICAgICAgICAnPGxpbmUgeDE9XCI1XCIgeTE9XCI1XCIgeDI9XCIyNVwiIHkyPVwiMjVcIi8+JyArXG4gICAgICAgICAgICAnPGxpbmUgeDE9XCI1XCIgeTE9XCIyNVwiIHgyPVwiMjVcIiB5Mj1cIjVcIi8+JyArXG4gICAgICAgICAgICAnPC9nPjwvc3ZnPic7XG4gICAgLy8gR2xvYmFsIG9wdGlvbnMgYW5kIHRoZWlyIGRlZmF1bHRzXG4gICAgdmFyIG9wdGlvbnMgPSB7fSxcbiAgICAgICAgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjYXB0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgIGJ1dHRvbnM6ICdhdXRvJyxcbiAgICAgICAgICAgIGZ1bGxTY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgbm9TY3JvbGxiYXJzOiBmYWxzZSxcbiAgICAgICAgICAgIGJvZHlDbGFzczogJ2JhZ3VldHRlQm94LW9wZW4nLFxuICAgICAgICAgICAgdGl0bGVUYWc6IGZhbHNlLFxuICAgICAgICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgICAgICAgcHJlbG9hZDogMixcbiAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlSW4nLFxuICAgICAgICAgICAgYWZ0ZXJTaG93OiBudWxsLFxuICAgICAgICAgICAgYWZ0ZXJIaWRlOiBudWxsLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG51bGwsXG4gICAgICAgICAgICBvdmVybGF5QmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuOCknXG4gICAgICAgIH07XG4gICAgLy8gT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgZmVhdHVyZXMgY29tcGF0aWJpbGl0eVxuICAgIHZhciBzdXBwb3J0cyA9IHt9O1xuICAgIC8vIERPTSBFbGVtZW50cyByZWZlcmVuY2VzXG4gICAgdmFyIG92ZXJsYXksIHNsaWRlciwgcHJldmlvdXNCdXR0b24sIG5leHRCdXR0b24sIGNsb3NlQnV0dG9uO1xuICAgIC8vIEFuIGFycmF5IHdpdGggYWxsIGltYWdlcyBpbiB0aGUgY3VycmVudCBnYWxsZXJ5XG4gICAgdmFyIGN1cnJlbnRHYWxsZXJ5ID0gW107XG4gICAgLy8gQ3VycmVudCBpbWFnZSBpbmRleCBpbnNpZGUgdGhlIHNsaWRlclxuICAgIHZhciBjdXJyZW50SW5kZXggPSAwO1xuICAgIC8vIFRvdWNoIGV2ZW50IHN0YXJ0IHBvc2l0aW9uIChmb3Igc2xpZGUgZ2VzdHVyZSlcbiAgICB2YXIgdG91Y2ggPSB7fTtcbiAgICAvLyBJZiBzZXQgdG8gdHJ1ZSBpZ25vcmUgdG91Y2ggZXZlbnRzIGJlY2F1c2UgYW5pbWF0aW9uIHdhcyBhbHJlYWR5IGZpcmVkXG4gICAgdmFyIHRvdWNoRmxhZyA9IGZhbHNlO1xuICAgIC8vIFJlZ2V4IHBhdHRlcm4gdG8gbWF0Y2ggaW1hZ2UgZmlsZXNcbiAgICB2YXIgcmVnZXggPSAvLitcXC4oZ2lmfGpwZT9nfHBuZ3x3ZWJwKS9pO1xuICAgIC8vIE9iamVjdCBvZiBhbGwgdXNlZCBnYWxsZXJpZXNcbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIC8vIEFycmF5IGNvbnRhaW5pbmcgdGVtcG9yYXJ5IGltYWdlcyBET00gZWxlbWVudHNcbiAgICB2YXIgaW1hZ2VzRWxlbWVudHMgPSBbXTtcbiAgICAvLyBUaGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgYmVmb3JlIG9wZW5pbmcgdGhlIG92ZXJsYXlcbiAgICB2YXIgZG9jdW1lbnRMYXN0Rm9jdXMgPSBudWxsO1xuICAgIHZhciBvdmVybGF5Q2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gQ2xvc2UgdGhlIG92ZXJsYXkgd2hlbiB1c2VyIGNsaWNrcyBkaXJlY3RseSBvbiB0aGUgYmFja2dyb3VuZFxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkLmluZGV4T2YoJ2JhZ3VldHRlLWltZycpICE9PSAtMSkge1xuICAgICAgICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHByZXZpb3VzQnV0dG9uQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgOiBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICBzaG93UHJldmlvdXNJbWFnZSgpO1xuICAgIH07XG4gICAgdmFyIG5leHRCdXR0b25DbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPyBldmVudC5zdG9wUHJvcGFnYXRpb24oKSA6IGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIHNob3dOZXh0SW1hZ2UoKTtcbiAgICB9O1xuICAgIHZhciBjbG9zZUJ1dHRvbkNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA/IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIDogZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICB9O1xuICAgIHZhciB0b3VjaHN0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHRvdWNoLmNvdW50Kys7XG4gICAgICAgIGlmICh0b3VjaC5jb3VudCA+IDEpIHtcbiAgICAgICAgICAgIHRvdWNoLm11bHRpdG91Y2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNhdmUgeCBhbmQgeSBheGlzIHBvc2l0aW9uXG4gICAgICAgIHRvdWNoLnN0YXJ0WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICB0b3VjaC5zdGFydFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB9O1xuICAgIHZhciB0b3VjaG1vdmVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gSWYgYWN0aW9uIHdhcyBhbHJlYWR5IHRyaWdnZXJlZCBvciBtdWx0aXRvdWNoIHJldHVyblxuICAgICAgICBpZiAodG91Y2hGbGFnIHx8IHRvdWNoLm11bHRpdG91Y2gpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA/IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgOiBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIC8vIE1vdmUgYXQgbGVhc3QgNDAgcGl4ZWxzIHRvIHRyaWdnZXIgdGhlIGFjdGlvblxuICAgICAgICBpZiAodG91Y2hFdmVudC5wYWdlWCAtIHRvdWNoLnN0YXJ0WCA+IDQwKSB7XG4gICAgICAgICAgICB0b3VjaEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgc2hvd1ByZXZpb3VzSW1hZ2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0b3VjaEV2ZW50LnBhZ2VYIC0gdG91Y2guc3RhcnRYIDwgLTQwKSB7XG4gICAgICAgICAgICB0b3VjaEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgc2hvd05leHRJbWFnZSgpO1xuICAgICAgICAvLyBNb3ZlIDEwMCBwaXhlbHMgdXAgdG8gY2xvc2UgdGhlIG92ZXJsYXlcbiAgICAgICAgfSBlbHNlIGlmICh0b3VjaC5zdGFydFkgLSB0b3VjaEV2ZW50LnBhZ2VZID4gMTAwKSB7XG4gICAgICAgICAgICBoaWRlT3ZlcmxheSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgdG91Y2hlbmRIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvdWNoLmNvdW50LS07XG4gICAgICAgIGlmICh0b3VjaC5jb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0b3VjaC5tdWx0aXRvdWNoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdG91Y2hGbGFnID0gZmFsc2U7XG4gICAgfTtcbiAgICB2YXIgY29udGV4dG1lbnVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvdWNoZW5kSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICB2YXIgdHJhcEZvY3VzSW5zaWRlT3ZlcmxheSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChvdmVybGF5LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgJiYgKG92ZXJsYXkuY29udGFpbnMgJiYgIW92ZXJsYXkuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaW5pdEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZm9yRWFjaCBwb2x5ZmlsbCBmb3IgSUU4XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQ4Mjc0NDMvMTA3Nzg0NlxuICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgaWYgKCFbXS5mb3JFYWNoKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIHBvbHlmaWxsIGZvciBJRThcbiAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9lbGlwZXJlbG1hbi8xMDMxNjU2XG4gICAgaWYgKCFbXS5maWx0ZXIpIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIGUpIHtcbiAgICAgICAgICAgIGMgPSB0aGlzO1xuICAgICAgICAgICAgZCA9IFtdO1xuICAgICAgICAgICAgZm9yIChlID0gMDsgZSA8IGMubGVuZ3RoOyBlKyspXG4gICAgICAgICAgICAgICAgYS5jYWxsKGIsIGNbZV0sIGUsIGMpICYmIGQucHVzaChjW2VdKTtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAvLyBTY3JpcHQgZW50cnkgcG9pbnRcbiAgICBmdW5jdGlvbiBydW4oc2VsZWN0b3IsIHVzZXJPcHRpb25zKSB7XG4gICAgICAgIC8vIEZpbGwgc3VwcG9ydHMgb2JqZWN0XG4gICAgICAgIHN1cHBvcnRzLnRyYW5zZm9ybXMgPSB0ZXN0VHJhbnNmb3Jtc1N1cHBvcnQoKTtcbiAgICAgICAgc3VwcG9ydHMuc3ZnID0gdGVzdFNWR1N1cHBvcnQoKTtcblxuICAgICAgICBidWlsZE92ZXJsYXkoKTtcbiAgICAgICAgcmVtb3ZlRnJvbUNhY2hlKHNlbGVjdG9yKTtcbiAgICAgICAgYmluZEltYWdlQ2xpY2tMaXN0ZW5lcnMoc2VsZWN0b3IsIHVzZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kSW1hZ2VDbGlja0xpc3RlbmVycyhzZWxlY3RvciwgdXNlck9wdGlvbnMpIHtcbiAgICAgICAgLy8gRm9yIGVhY2ggZ2FsbGVyeSBiaW5kIGEgY2xpY2sgZXZlbnQgdG8gZXZlcnkgaW1hZ2UgaW5zaWRlIGl0XG4gICAgICAgIHZhciBnYWxsZXJ5Tm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgdmFyIHNlbGVjdG9yRGF0YSA9IHtcbiAgICAgICAgICAgIGdhbGxlcmllczogW10sXG4gICAgICAgICAgICBub2RlTGlzdDogZ2FsbGVyeU5vZGVMaXN0XG4gICAgICAgIH07XG4gICAgICAgIGRhdGFbc2VsZWN0b3JdID0gc2VsZWN0b3JEYXRhO1xuXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChnYWxsZXJ5Tm9kZUxpc3QsIGZ1bmN0aW9uKGdhbGxlcnlFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMuZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB1c2VyT3B0aW9ucy5maWx0ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldCBub2RlcyBmcm9tIGdhbGxlcnkgZWxlbWVudHMgb3Igc2luZ2xlLWVsZW1lbnQgZ2FsbGVyaWVzXG4gICAgICAgICAgICB2YXIgdGFnc05vZGVMaXN0ID0gW107XG4gICAgICAgICAgICBpZiAoZ2FsbGVyeUVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgICAgICAgdGFnc05vZGVMaXN0ID0gW2dhbGxlcnlFbGVtZW50XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFnc05vZGVMaXN0ID0gZ2FsbGVyeUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmlsdGVyICdhJyBlbGVtZW50cyBmcm9tIHRob3NlIG5vdCBsaW5raW5nIHRvIGltYWdlc1xuICAgICAgICAgICAgdGFnc05vZGVMaXN0ID0gW10uZmlsdGVyLmNhbGwodGFnc05vZGVMaXN0LCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMuaWdub3JlQ2xhc3MpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbGVtZW50LmhyZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRhZ3NOb2RlTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBnYWxsZXJ5ID0gW107XG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGFnc05vZGVMaXN0LCBmdW5jdGlvbihpbWFnZUVsZW1lbnQsIGltYWdlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VFbGVtZW50Q2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIDogZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyZU92ZXJsYXkoZ2FsbGVyeSwgdXNlck9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93T3ZlcmxheShpbWFnZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZUl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlcjogaW1hZ2VFbGVtZW50Q2xpY2tIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQ6IGltYWdlRWxlbWVudFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYmluZChpbWFnZUVsZW1lbnQsICdjbGljaycsIGltYWdlRWxlbWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgZ2FsbGVyeS5wdXNoKGltYWdlSXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGVjdG9yRGF0YS5nYWxsZXJpZXMucHVzaChnYWxsZXJ5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJDYWNoZWREYXRhKCkge1xuICAgICAgICBmb3IgKHZhciBzZWxlY3RvciBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVGcm9tQ2FjaGUoc2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhY2hlKHNlbGVjdG9yKSB7XG4gICAgICAgIGlmICghZGF0YS5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZ2FsbGVyaWVzID0gZGF0YVtzZWxlY3Rvcl0uZ2FsbGVyaWVzO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZ2FsbGVyaWVzLCBmdW5jdGlvbihnYWxsZXJ5KSB7XG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZ2FsbGVyeSwgZnVuY3Rpb24oaW1hZ2VJdGVtKSB7XG4gICAgICAgICAgICAgICAgdW5iaW5kKGltYWdlSXRlbS5pbWFnZUVsZW1lbnQsICdjbGljaycsIGltYWdlSXRlbS5ldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50R2FsbGVyeSA9PT0gZ2FsbGVyeSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHYWxsZXJ5ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZSBkYXRhW3NlbGVjdG9yXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZE92ZXJsYXkoKSB7XG4gICAgICAgIG92ZXJsYXkgPSBnZXRCeUlEKCdiYWd1ZXR0ZUJveC1vdmVybGF5Jyk7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBvdmVybGF5IGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGlmIChvdmVybGF5KSB7XG4gICAgICAgICAgICBzbGlkZXIgPSBnZXRCeUlEKCdiYWd1ZXR0ZUJveC1zbGlkZXInKTtcbiAgICAgICAgICAgIHByZXZpb3VzQnV0dG9uID0gZ2V0QnlJRCgncHJldmlvdXMtYnV0dG9uJyk7XG4gICAgICAgICAgICBuZXh0QnV0dG9uID0gZ2V0QnlJRCgnbmV4dC1idXR0b24nKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uID0gZ2V0QnlJRCgnY2xvc2UtYnV0dG9uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3JlYXRlIG92ZXJsYXkgZWxlbWVudFxuICAgICAgICBvdmVybGF5ID0gY3JlYXRlKCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgICAgIG92ZXJsYXkuaWQgPSAnYmFndWV0dGVCb3gtb3ZlcmxheSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICAgIC8vIENyZWF0ZSBnYWxsZXJ5IHNsaWRlciBlbGVtZW50XG4gICAgICAgIHNsaWRlciA9IGNyZWF0ZSgnZGl2Jyk7XG4gICAgICAgIHNsaWRlci5pZCA9ICdiYWd1ZXR0ZUJveC1zbGlkZXInO1xuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKHNsaWRlcik7XG4gICAgICAgIC8vIENyZWF0ZSBhbGwgbmVjZXNzYXJ5IGJ1dHRvbnNcbiAgICAgICAgcHJldmlvdXNCdXR0b24gPSBjcmVhdGUoJ2J1dHRvbicpO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmlkID0gJ3ByZXZpb3VzLWJ1dHRvbic7XG4gICAgICAgIHByZXZpb3VzQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdQcmV2aW91cycpO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5pbm5lckhUTUwgPSBzdXBwb3J0cy5zdmcgPyBsZWZ0QXJyb3cgOiAnJmx0Oyc7XG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocHJldmlvdXNCdXR0b24pO1xuXG4gICAgICAgIG5leHRCdXR0b24gPSBjcmVhdGUoJ2J1dHRvbicpO1xuICAgICAgICBuZXh0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgbmV4dEJ1dHRvbi5pZCA9ICduZXh0LWJ1dHRvbic7XG4gICAgICAgIG5leHRCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ05leHQnKTtcbiAgICAgICAgbmV4dEJ1dHRvbi5pbm5lckhUTUwgPSBzdXBwb3J0cy5zdmcgPyByaWdodEFycm93IDogJyZndDsnO1xuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xuXG4gICAgICAgIGNsb3NlQnV0dG9uID0gY3JlYXRlKCdidXR0b24nKTtcbiAgICAgICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5pZCA9ICdjbG9zZS1idXR0b24nO1xuICAgICAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQ2xvc2UnKTtcbiAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gc3VwcG9ydHMuc3ZnID8gY2xvc2VYIDogJyZ0aW1lczsnO1xuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgICAgICBwcmV2aW91c0J1dHRvbi5jbGFzc05hbWUgPSBuZXh0QnV0dG9uLmNsYXNzTmFtZSA9IGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdiYWd1ZXR0ZUJveC1idXR0b24nO1xuXG4gICAgICAgIGJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzNzogLy8gTGVmdCBhcnJvd1xuICAgICAgICAgICAgc2hvd1ByZXZpb3VzSW1hZ2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OiAvLyBSaWdodCBhcnJvd1xuICAgICAgICAgICAgc2hvd05leHRJbWFnZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6IC8vIEVzY1xuICAgICAgICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcbiAgICAgICAgYmluZChvdmVybGF5LCAnY2xpY2snLCBvdmVybGF5Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgYmluZChwcmV2aW91c0J1dHRvbiwgJ2NsaWNrJywgcHJldmlvdXNCdXR0b25DbGlja0hhbmRsZXIpO1xuICAgICAgICBiaW5kKG5leHRCdXR0b24sICdjbGljaycsIG5leHRCdXR0b25DbGlja0hhbmRsZXIpO1xuICAgICAgICBiaW5kKGNsb3NlQnV0dG9uLCAnY2xpY2snLCBjbG9zZUJ1dHRvbkNsaWNrSGFuZGxlcik7XG4gICAgICAgIGJpbmQoc2xpZGVyLCAnY29udGV4dG1lbnUnLCBjb250ZXh0bWVudUhhbmRsZXIpO1xuICAgICAgICBiaW5kKG92ZXJsYXksICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydEhhbmRsZXIpO1xuICAgICAgICBiaW5kKG92ZXJsYXksICd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyKTtcbiAgICAgICAgYmluZChvdmVybGF5LCAndG91Y2hlbmQnLCB0b3VjaGVuZEhhbmRsZXIpO1xuICAgICAgICBiaW5kKGRvY3VtZW50LCAnZm9jdXMnLCB0cmFwRm9jdXNJbnNpZGVPdmVybGF5LCB0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHVuYmluZChvdmVybGF5LCAnY2xpY2snLCBvdmVybGF5Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgdW5iaW5kKHByZXZpb3VzQnV0dG9uLCAnY2xpY2snLCBwcmV2aW91c0J1dHRvbkNsaWNrSGFuZGxlcik7XG4gICAgICAgIHVuYmluZChuZXh0QnV0dG9uLCAnY2xpY2snLCBuZXh0QnV0dG9uQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgdW5iaW5kKGNsb3NlQnV0dG9uLCAnY2xpY2snLCBjbG9zZUJ1dHRvbkNsaWNrSGFuZGxlcik7XG4gICAgICAgIHVuYmluZChzbGlkZXIsICdjb250ZXh0bWVudScsIGNvbnRleHRtZW51SGFuZGxlcik7XG4gICAgICAgIHVuYmluZChvdmVybGF5LCAndG91Y2hzdGFydCcsIHRvdWNoc3RhcnRIYW5kbGVyKTtcbiAgICAgICAgdW5iaW5kKG92ZXJsYXksICd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyKTtcbiAgICAgICAgdW5iaW5kKG92ZXJsYXksICd0b3VjaGVuZCcsIHRvdWNoZW5kSGFuZGxlcik7XG4gICAgICAgIHVuYmluZChkb2N1bWVudCwgJ2ZvY3VzJywgdHJhcEZvY3VzSW5zaWRlT3ZlcmxheSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJlcGFyZU92ZXJsYXkoZ2FsbGVyeSwgdXNlck9wdGlvbnMpIHtcbiAgICAgICAgLy8gSWYgdGhlIHNhbWUgZ2FsbGVyeSBpcyBiZWluZyBvcGVuZWQgcHJldmVudCBmcm9tIGxvYWRpbmcgaXQgb25jZSBhZ2FpblxuICAgICAgICBpZiAoY3VycmVudEdhbGxlcnkgPT09IGdhbGxlcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50R2FsbGVyeSA9IGdhbGxlcnk7XG4gICAgICAgIC8vIFVwZGF0ZSBnYWxsZXJ5IHNwZWNpZmljIG9wdGlvbnNcbiAgICAgICAgc2V0T3B0aW9ucyh1c2VyT3B0aW9ucyk7XG4gICAgICAgIC8vIEVtcHR5IHNsaWRlciBvZiBwcmV2aW91cyBjb250ZW50cyAobW9yZSBlZmZlY3RpdmUgdGhhbiAuaW5uZXJIVE1MID0gXCJcIilcbiAgICAgICAgd2hpbGUgKHNsaWRlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBzbGlkZXIucmVtb3ZlQ2hpbGQoc2xpZGVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlc0VsZW1lbnRzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgdmFyIGltYWdlc0ZpZ3VyZXNJZHMgPSBbXTtcbiAgICAgICAgdmFyIGltYWdlc0NhcHRpb25zSWRzID0gW107XG4gICAgICAgIC8vIFByZXBhcmUgYW5kIGFwcGVuZCBpbWFnZXMgY29udGFpbmVycyBhbmQgcG9wdWxhdGUgZmlndXJlIGFuZCBjYXB0aW9ucyBJRHMgYXJyYXlzXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBmdWxsSW1hZ2U7IGkgPCBnYWxsZXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmdWxsSW1hZ2UgPSBjcmVhdGUoJ2RpdicpO1xuICAgICAgICAgICAgZnVsbEltYWdlLmNsYXNzTmFtZSA9ICdmdWxsLWltYWdlJztcbiAgICAgICAgICAgIGZ1bGxJbWFnZS5pZCA9ICdiYWd1ZXR0ZS1pbWctJyArIGk7XG4gICAgICAgICAgICBpbWFnZXNFbGVtZW50cy5wdXNoKGZ1bGxJbWFnZSk7XG5cbiAgICAgICAgICAgIGltYWdlc0ZpZ3VyZXNJZHMucHVzaCgnYmFndWV0dGVCb3gtZmlndXJlLScgKyBpKTtcbiAgICAgICAgICAgIGltYWdlc0NhcHRpb25zSWRzLnB1c2goJ2JhZ3VldHRlQm94LWZpZ2NhcHRpb24tJyArIGkpO1xuICAgICAgICAgICAgc2xpZGVyLmFwcGVuZENoaWxkKGltYWdlc0VsZW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgaW1hZ2VzRmlndXJlc0lkcy5qb2luKCcgJykpO1xuICAgICAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGltYWdlc0NhcHRpb25zSWRzLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gICAgICAgIGlmICghbmV3T3B0aW9ucykge1xuICAgICAgICAgICAgbmV3T3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpbGwgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgZm9yICh2YXIgaXRlbSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgb3B0aW9uc1tpdGVtXSA9IGRlZmF1bHRzW2l0ZW1dO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdPcHRpb25zW2l0ZW1dICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbaXRlbV0gPSBuZXdPcHRpb25zW2l0ZW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIEFwcGx5IG5ldyBvcHRpb25zICovXG4gICAgICAgIC8vIENoYW5nZSB0cmFuc2l0aW9uIGZvciBwcm9wZXIgYW5pbWF0aW9uXG4gICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2l0aW9uID0gc2xpZGVyLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSAob3B0aW9ucy5hbmltYXRpb24gPT09ICdmYWRlSW4nID8gJ29wYWNpdHkgLjRzIGVhc2UnIDpcbiAgICAgICAgICAgIG9wdGlvbnMuYW5pbWF0aW9uID09PSAnc2xpZGVJbicgPyAnJyA6ICdub25lJyk7XG4gICAgICAgIC8vIEhpZGUgYnV0dG9ucyBpZiBuZWNlc3NhcnlcbiAgICAgICAgaWYgKG9wdGlvbnMuYnV0dG9ucyA9PT0gJ2F1dG8nICYmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgY3VycmVudEdhbGxlcnkubGVuZ3RoID09PSAxKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5idXR0b25zID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IGJ1dHRvbnMgc3R5bGUgdG8gaGlkZSBvciBkaXNwbGF5IHRoZW1cbiAgICAgICAgcHJldmlvdXNCdXR0b24uc3R5bGUuZGlzcGxheSA9IG5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9IChvcHRpb25zLmJ1dHRvbnMgPyAnJyA6ICdub25lJyk7XG4gICAgICAgIC8vIFNldCBvdmVybGF5IGNvbG9yXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMub3ZlcmxheUJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gU2lsZW5jZSB0aGUgZXJyb3IgYW5kIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93T3ZlcmxheShjaG9zZW5JbWFnZUluZGV4KSB7XG4gICAgICAgIGlmIChvcHRpb25zLm5vU2Nyb2xsYmFycykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3ZlcmxheS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBiaW5kKGRvY3VtZW50LCAna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICAgICAgY3VycmVudEluZGV4ID0gY2hvc2VuSW1hZ2VJbmRleDtcbiAgICAgICAgdG91Y2ggPSB7XG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIHN0YXJ0WDogbnVsbCxcbiAgICAgICAgICAgIHN0YXJ0WTogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBsb2FkSW1hZ2UoY3VycmVudEluZGV4LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHByZWxvYWROZXh0KGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBwcmVsb2FkUHJldihjdXJyZW50SW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVPZmZzZXQoKTtcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFNjcmVlbikge1xuICAgICAgICAgICAgZW50ZXJGdWxsU2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmFkZSBpbiBvdmVybGF5XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmJvZHlDbGFzcyAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChvcHRpb25zLmJvZHlDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hZnRlclNob3cpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmFmdGVyU2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MCk7XG4gICAgICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uQ2hhbmdlKGN1cnJlbnRJbmRleCwgaW1hZ2VzRWxlbWVudHMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudExhc3RGb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGluaXRGb2N1cygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRGb2N1cygpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYnV0dG9ucykge1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgICAgIGlmIChvdmVybGF5LnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBvdmVybGF5LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3ZlcmxheS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgb3ZlcmxheS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKG92ZXJsYXkubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIG92ZXJsYXkubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm5vU2Nyb2xsYmFycykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdmVybGF5LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdW5iaW5kKGRvY3VtZW50LCAna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICAgICAgLy8gRmFkZSBvdXQgYW5kIGhpZGUgdGhlIG92ZXJsYXlcbiAgICAgICAgb3ZlcmxheS5jbGFzc05hbWUgPSAnJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5ib2R5Q2xhc3MgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUob3B0aW9ucy5ib2R5Q2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYWZ0ZXJIaWRlKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlckhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50TGFzdEZvY3VzICYmIGRvY3VtZW50TGFzdEZvY3VzLmZvY3VzKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZEltYWdlKGluZGV4LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaW1hZ2VDb250YWluZXIgPSBpbWFnZXNFbGVtZW50c1tpbmRleF07XG4gICAgICAgIHZhciBnYWxsZXJ5SXRlbSA9IGN1cnJlbnRHYWxsZXJ5W2luZGV4XTtcblxuICAgICAgICAvLyBSZXR1cm4gaWYgdGhlIGluZGV4IGV4Y2VlZHMgcHJlcGFyZWQgaW1hZ2VzIGluIHRoZSBvdmVybGF5XG4gICAgICAgIC8vIG9yIGlmIHRoZSBjdXJyZW50IGdhbGxlcnkgaGFzIGJlZW4gY2hhbmdlZCAvIGNsb3NlZFxuICAgICAgICBpZiAodHlwZW9mIGltYWdlQ29udGFpbmVyID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZ2FsbGVyeUl0ZW0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpbWFnZSBpcyBhbHJlYWR5IGxvYWRlZCBydW4gY2FsbGJhY2sgYW5kIHJldHVyblxuICAgICAgICBpZiAoaW1hZ2VDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGVsZW1lbnQgcmVmZXJlbmNlLCBvcHRpb25hbCBjYXB0aW9uIGFuZCBzb3VyY2UgcGF0aFxuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gZ2FsbGVyeUl0ZW0uaW1hZ2VFbGVtZW50O1xuICAgICAgICB2YXIgdGh1bWJuYWlsRWxlbWVudCA9IGltYWdlRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF07XG4gICAgICAgIHZhciBpbWFnZUNhcHRpb24gPSB0eXBlb2Ygb3B0aW9ucy5jYXB0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICBvcHRpb25zLmNhcHRpb25zLmNhbGwoY3VycmVudEdhbGxlcnksIGltYWdlRWxlbWVudCkgOlxuICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jYXB0aW9uJykgfHwgaW1hZ2VFbGVtZW50LnRpdGxlO1xuICAgICAgICB2YXIgaW1hZ2VTcmMgPSBnZXRJbWFnZVNyYyhpbWFnZUVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgZmlndXJlIGVsZW1lbnRcbiAgICAgICAgdmFyIGZpZ3VyZSA9IGNyZWF0ZSgnZmlndXJlJyk7XG4gICAgICAgIGZpZ3VyZS5pZCA9ICdiYWd1ZXR0ZUJveC1maWd1cmUtJyArIGluZGV4O1xuICAgICAgICBmaWd1cmUuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1zcGlubmVyXCI+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LWRvdWJsZS1ib3VuY2UxXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LWRvdWJsZS1ib3VuY2UyXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JztcbiAgICAgICAgLy8gSW5zZXJ0IGNhcHRpb24gaWYgYXZhaWxhYmxlXG4gICAgICAgIGlmIChvcHRpb25zLmNhcHRpb25zICYmIGltYWdlQ2FwdGlvbikge1xuICAgICAgICAgICAgdmFyIGZpZ2NhcHRpb24gPSBjcmVhdGUoJ2ZpZ2NhcHRpb24nKTtcbiAgICAgICAgICAgIGZpZ2NhcHRpb24uaWQgPSAnYmFndWV0dGVCb3gtZmlnY2FwdGlvbi0nICsgaW5kZXg7XG4gICAgICAgICAgICBmaWdjYXB0aW9uLmlubmVySFRNTCA9IGltYWdlQ2FwdGlvbjtcbiAgICAgICAgICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChmaWdjYXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWd1cmUpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgZ2FsbGVyeSBpbWcgZWxlbWVudFxuICAgICAgICB2YXIgaW1hZ2UgPSBjcmVhdGUoJ2ltZycpO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBsb2FkZXIgZWxlbWVudFxuICAgICAgICAgICAgdmFyIHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFndWV0dGUtaW1nLScgKyBpbmRleCArICcgLmJhZ3VldHRlQm94LXNwaW5uZXInKTtcbiAgICAgICAgICAgIGZpZ3VyZS5yZW1vdmVDaGlsZChzcGlubmVyKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hc3luYyAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VTcmMpO1xuICAgICAgICBpbWFnZS5hbHQgPSB0aHVtYm5haWxFbGVtZW50ID8gdGh1bWJuYWlsRWxlbWVudC5hbHQgfHwgJycgOiAnJztcbiAgICAgICAgaWYgKG9wdGlvbnMudGl0bGVUYWcgJiYgaW1hZ2VDYXB0aW9uKSB7XG4gICAgICAgICAgICBpbWFnZS50aXRsZSA9IGltYWdlQ2FwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBmaWd1cmUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgICAgIC8vIFJ1biBjYWxsYmFja1xuICAgICAgICBpZiAob3B0aW9ucy5hc3luYyAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCBpbWFnZSBzb3VyY2UgbG9jYXRpb24sIG1vc3RseSB1c2VkIGZvciByZXNwb25zaXZlIGltYWdlc1xuICAgIGZ1bmN0aW9uIGdldEltYWdlU3JjKGltYWdlKSB7XG4gICAgICAgIC8vIFNldCBkZWZhdWx0IGltYWdlIHBhdGggZnJvbSBocmVmXG4gICAgICAgIHZhciByZXN1bHQgPSBpbWFnZS5ocmVmO1xuICAgICAgICAvLyBJZiBkYXRhc2V0IGlzIHN1cHBvcnRlZCBmaW5kIHRoZSBtb3N0IHN1aXRhYmxlIGltYWdlXG4gICAgICAgIGlmIChpbWFnZS5kYXRhc2V0KSB7XG4gICAgICAgICAgICB2YXIgc3JjcyA9IFtdO1xuICAgICAgICAgICAgLy8gR2V0IGFsbCBwb3NzaWJsZSBpbWFnZSB2ZXJzaW9ucyBkZXBlbmRpbmcgb24gdGhlIHJlc29sdXRpb25cbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gaW4gaW1hZ2UuZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnN1YnN0cmluZygwLCAzKSA9PT0gJ2F0LScgJiYgIWlzTmFOKGl0ZW0uc3Vic3RyaW5nKDMpKSkge1xuICAgICAgICAgICAgICAgICAgICBzcmNzW2l0ZW0ucmVwbGFjZSgnYXQtJywgJycpXSA9IGltYWdlLmRhdGFzZXRbaXRlbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU29ydCByZXNvbHV0aW9ucyBhc2NlbmRpbmdcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3Jjcykuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKSA8IHBhcnNlSW50KGIsIDEwKSA/IC0xIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gR2V0IHJlYWwgc2NyZWVuIHJlc29sdXRpb25cbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBpbWFnZSBiaWdnZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgY3VycmVudCB3aWR0aFxuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBrZXlzLmxlbmd0aCAtIDEgJiYga2V5c1tpXSA8IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gc3Jjc1trZXlzW2ldXSB8fCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gZmFsc2UgYXQgdGhlIHJpZ2h0IGVuZCBvZiB0aGUgZ2FsbGVyeVxuICAgIGZ1bmN0aW9uIHNob3dOZXh0SW1hZ2UoKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgbmV4dCBpbWFnZSBleGlzdHNcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8PSBpbWFnZXNFbGVtZW50cy5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgICAgICAgIHVwZGF0ZU9mZnNldCgpO1xuICAgICAgICAgICAgcHJlbG9hZE5leHQoY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTmFtZSA9ICdib3VuY2UtZnJvbS1yaWdodCc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNsaWRlci5jbGFzc05hbWUgPSAnJztcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uQ2hhbmdlKGN1cnJlbnRJbmRleCwgaW1hZ2VzRWxlbWVudHMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGZhbHNlIGF0IHRoZSBsZWZ0IGVuZCBvZiB0aGUgZ2FsbGVyeVxuICAgIGZ1bmN0aW9uIHNob3dQcmV2aW91c0ltYWdlKCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWU7XG4gICAgICAgIC8vIENoZWNrIGlmIHByZXZpb3VzIGltYWdlIGV4aXN0c1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ID49IDEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC0tO1xuICAgICAgICAgICAgdXBkYXRlT2Zmc2V0KCk7XG4gICAgICAgICAgICBwcmVsb2FkUHJldihjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBzbGlkZXIuY2xhc3NOYW1lID0gJ2JvdW5jZS1mcm9tLWxlZnQnO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzbGlkZXIuY2xhc3NOYW1lID0gJyc7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5vbkNoYW5nZShjdXJyZW50SW5kZXgsIGltYWdlc0VsZW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU9mZnNldCgpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IC1jdXJyZW50SW5kZXggKiAxMDAgKyAnJSc7XG4gICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGlvbiA9PT0gJ2ZhZGVJbicpIHtcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydHMudHJhbnNmb3JtcyA/XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBzbGlkZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyBvZmZzZXQgKyAnLDAsMCknXG4gICAgICAgICAgICAgICAgICAgIDogc2xpZGVyLnN0eWxlLmxlZnQgPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgc2xpZGVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cHBvcnRzLnRyYW5zZm9ybXMgP1xuICAgICAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBzbGlkZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyBvZmZzZXQgKyAnLDAsMCknXG4gICAgICAgICAgICAgICAgOiBzbGlkZXIuc3R5bGUubGVmdCA9IG9mZnNldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENTUyAzRCBUcmFuc2Zvcm1zIHRlc3RcbiAgICBmdW5jdGlvbiB0ZXN0VHJhbnNmb3Jtc1N1cHBvcnQoKSB7XG4gICAgICAgIHZhciBkaXYgPSBjcmVhdGUoJ2RpdicpO1xuICAgICAgICByZXR1cm4gdHlwZW9mIGRpdi5zdHlsZS5wZXJzcGVjdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRpdi5zdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgLy8gSW5saW5lIFNWRyB0ZXN0XG4gICAgZnVuY3Rpb24gdGVzdFNWR1N1cHBvcnQoKSB7XG4gICAgICAgIHZhciBkaXYgPSBjcmVhdGUoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzxzdmcvPic7XG4gICAgICAgIHJldHVybiAoZGl2LmZpcnN0Q2hpbGQgJiYgZGl2LmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKSA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVsb2FkTmV4dChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggLSBjdXJyZW50SW5kZXggPj0gb3B0aW9ucy5wcmVsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9hZEltYWdlKGluZGV4ICsgMSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcmVsb2FkTmV4dChpbmRleCArIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVsb2FkUHJldihpbmRleCkge1xuICAgICAgICBpZiAoY3VycmVudEluZGV4IC0gaW5kZXggPj0gb3B0aW9ucy5wcmVsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9hZEltYWdlKGluZGV4IC0gMSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcmVsb2FkUHJldihpbmRleCAtIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgICAgICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElFOCBmYWxsYmFja1xuICAgICAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gYGV2ZW50YCBhbmQgYGV2ZW50LnRhcmdldGAgYXJlIG5vdCBwcm92aWRlZCBpbiBJRThcbiAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuYmluZChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJRTggZmFsbGJhY2tcbiAgICAgICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCeUlEKGlkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveVBsdWdpbigpIHtcbiAgICAgICAgdW5iaW5kRXZlbnRzKCk7XG4gICAgICAgIGNsZWFyQ2FjaGVkRGF0YSgpO1xuICAgICAgICB1bmJpbmQoZG9jdW1lbnQsICdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWd1ZXR0ZUJveC1vdmVybGF5JykpO1xuICAgICAgICBkYXRhID0ge307XG4gICAgICAgIGN1cnJlbnRHYWxsZXJ5ID0gW107XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuOiBydW4sXG4gICAgICAgIHNob3dOZXh0OiBzaG93TmV4dEltYWdlLFxuICAgICAgICBzaG93UHJldmlvdXM6IHNob3dQcmV2aW91c0ltYWdlLFxuICAgICAgICBkZXN0cm95OiBkZXN0cm95UGx1Z2luXG4gICAgfTtcbn0pKTtcbiIsImltcG9ydCBsaWdodGJveCBmcm9tICdAbm9kZW1vZHVsZXMvYmFndWV0dGVib3guanMvc3JjL2JhZ3VldHRlQm94JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBsaWdodGJveC5ydW4oJy5qcy1nYWxsZXJ5Jyk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbmF2Jyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2dnbGUtbmF2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1oZWFkZXInKTtcblxuICAvLyBuYXZpZ2F0aW9uIGJ1dHRvbiBvbiBjbGljaywgYmFzaWMgdG9nZ2xpbmcgb2YgY2xhc3Nlc1xuICBpZiAoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdi0tYWN0aXZlJyk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1uYXYtLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1wic1wiOjQ4MCxcIm1cIjo2NDAsXCJsXCI6NzIwLFwieGxcIjo5NjAsXCJ4eGxcIjoxMTAwLFwieHh4bFwiOjEyNTAsXCJ4eHh4bFwiOjE2MDB9OyIsImltcG9ydCBicmVha3BvaW50cyBmcm9tICdAc2hhcmVkL2JyZWFrcG9pbnRzJztcblxuLy8gc2FtZSB1c2FnZSBhcyB0aGUgbWVkaWFxdWVyeS1zY3NzLW1peGluLCBqdXN0XG4vLyBwcm92aWRlIHRoZSBzaG9ydGNvZGUgdXNlZCBpbiB0aGUgc2Nzcy1maWxlIGFuZCBpZiBpdFxuLy8gaXMgYSBjdXN0b20gcXVlcnkuIHRoaXMgbW9kdWxlIHJldHVybiB0cnVlIGlmIHRoZVxuLy8gZ2l2ZW4gYnJlYWtwb2ludCBtYXRjaGVzIG9yIGZhbHNlIGlmIGl0IGRvZXNudFxuXG5leHBvcnQgZGVmYXVsdCBzaG9ydGNvZGUgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGJyZWFrcG9pbnRzW3Nob3J0Y29kZV07XG4gIGxldCBxdWVyeSA9ICcnO1xuXG4gIGlmICh2YWx1ZSkge1xuICAgIC8vIHdlIGhhdmUgdGhlIGRlZmF1bHQgbWluLXdpZHRoXG4gICAgY29uc3QgcHhWYWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgcXVlcnkgPSBgKG1pbi13aWR0aDogJHtweFZhbHVlfXB4KWA7XG4gIH1cblxuICAvLyByZXR1cm4gdGhlIG1hdGNoZXMgYm9vbGVhblxuICByZXR1cm4gKHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzKTtcbn07XG4iLCJpbXBvcnQgbWVkaWFxdWVyeSBmcm9tICdAaGVscGVycy9tZWRpYXF1ZXJ5JztcblxuY29uc3Qgc2VjdGlvbkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNlY3Rpb25jaGFuZ2UnKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW5hdl9fbGluaycpO1xuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wYWdlJyk7XG5cbmNvbnN0IGNsaWNrc2VjdGlvbiA9IGxpbmsgPT4ge1xuICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmstc2VjdGlvbi0tY2hhbmdlJyk7XG5cbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgfSwgMTAwKTsgLy8gYW5pbWF0aW9uIGlzIDE1MG1zLCBzbyB3YWl0IDEwMG1zXG59O1xuXG4vLyBzaW11bGF0ZSBzZWN0aW9uY2hhbmdlIGZvciBuYXZpZ2F0aW9uIGNsaWNrcyBvbiBsYXJnZSBkaXNwbGF5c1xuLy8gYnV0IG9ubHkgaWYgd2UgYXJlIG9uIGNvbnRhY3Qvd29yay9ibG9nL2xlZ2FsLW5vdGljZSBwYWdlc1xuY29uc3QgY2hhbmdlU2VjdGlvbnMgPSAobWVkaWFxdWVyeSgneGwnKSAmJiAoXG4gIHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLS13b3JrJykgfHxcbiAgcGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2UtLWNvbnRhY3QnKSB8fFxuICBwYWdlLmNsYXNzTGlzdC5jb250YWlucygncGFnZS0tYmxvZycpIHx8XG4gIHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLS1sZWdhbC1ub3RpY2UnKVxuKSk7XG5cbmNvbnN0IG1lbnVDbGljayA9IGxpbmsgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcbiAgY29uc3Qgc2VjdGlvbnMgPSBbICd3b3JrJywgJ2Zha2UnLCAnYmxvZycsICdjb250YWN0JyBdO1xuICBsZXQgc2VjdGlvbkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGluay1zZWN0aW9uLS0ke3RhcmdldH1gKTtcblxuICAvLyBpZiB0aGUgc2VjdGlvbmNoYW5nZSBsaW5rIGRvZXMgbm90IGV4aXN0LCB0aGUgbW9kaWZ5IHRoZSBvbmUgZXhpc3RpbmdcbiAgLy8gYW5kIGNoYW5nZSBjb2xvciArIHRhcmdldFxuICBpZiAoIXNlY3Rpb25MaW5rKSB7XG4gICAgc2VjdGlvbkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluay1zZWN0aW9uJyk7XG4gICAgc2VjdGlvbnMuZm9yRWFjaChzZWMgPT4ge1xuICAgICAgc2VjdGlvbkxpbmsuY2xhc3NMaXN0LnJlbW92ZShgbGluay1zZWN0aW9uLS0ke3NlY31gKTtcbiAgICB9KTtcbiAgICBzZWN0aW9uTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICBzZWN0aW9uTGluay5jbGFzc0xpc3QuYWRkKGBsaW5rLXNlY3Rpb24tLSR7dGFyZ2V0fWApO1xuICB9XG5cbiAgY2xpY2tzZWN0aW9uKHNlY3Rpb25MaW5rKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLy8gYWx3YXlzIGFwcGx5IHRoaXMgZXZlbnQgdG8gYWxsIHRoZSBzZWN0aW9ubGlua3NcbiAgWyAuLi5zZWN0aW9uTGlua3MgXS5mb3JFYWNoKHNlY3Rpb25MaW5rID0+IHtcbiAgICBzZWN0aW9uTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xpY2tzZWN0aW9uKHNlY3Rpb25MaW5rKTtcbiAgICB9LCBmYWxzZSk7XG4gIH0pO1xuXG4gIC8vIGFuZCB0byB0aGUgbWVudSBsaW5rcyBpZiBuZWVkZWRcbiAgaWYgKGNoYW5nZVNlY3Rpb25zKSB7XG4gICAgWyAuLi5saW5rcyBdLmZvckVhY2gobGluayA9PiB7XG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbWVudUNsaWNrKGxpbmspO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJjb25zdCBjbG9zZVdlbGNvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utd2VsY29tZScpO1xuXG5jb25zdCB3ZWxjb21lRG9uZSA9ICgpID0+IHtcbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy13ZWxjb21lJykuY2xhc3NMaXN0LmFkZCgnd2VsY29tZS0tZG9uZScpO1xuICB9LCA4MDApOyAvLyBhbmltYXRpb24gdGltZSBpcyA3MDBtc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvLyBzZXQgdGhlIGV2ZW50IHRvIHRoZSBlc2Mta2V5IHRvIGRpc21pc3Mgc3BsYXNoIGludHJvXG4gIGRvY3VtZW50Lm9ua2V5ZG93biA9IGUgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgY29uc3QgaXNIb21lcGFnZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaXRlLS1ob21lcGFnZScpO1xuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3ICYmIGlzSG9tZXBhZ2UgJiYgY2xvc2VXZWxjb21lKSB7XG4gICAgICBjbG9zZVdlbGNvbWUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAgIHdlbGNvbWVEb25lKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHJlbW92ZSB0aGUgdHJhbnNpdGlvbiBhZnRlciBpdCBjaGFuZ2VkXG4gIGlmIChjbG9zZVdlbGNvbWUpIHtcbiAgICBjbG9zZVdlbGNvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgd2VsY29tZURvbmUpO1xuICAgIGNsb3NlV2VsY29tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdlbGNvbWVEb25lKTtcbiAgfVxufTtcbiIsIi8qIEZvbnQgRmFjZSBPYnNlcnZlciB2Mi4wLjEzIC0gwqkgQnJhbSBTdGVpbi4gTGljZW5zZTogQlNELTMtQ2xhdXNlICovKGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3ZhciBmLGc9W107ZnVuY3Rpb24gbChhKXtnLnB1c2goYSk7MT09Zy5sZW5ndGgmJmYoKX1mdW5jdGlvbiBtKCl7Zm9yKDtnLmxlbmd0aDspZ1swXSgpLGcuc2hpZnQoKX1mPWZ1bmN0aW9uKCl7c2V0VGltZW91dChtKX07ZnVuY3Rpb24gbihhKXt0aGlzLmE9cDt0aGlzLmI9dm9pZCAwO3RoaXMuZj1bXTt2YXIgYj10aGlzO3RyeXthKGZ1bmN0aW9uKGEpe3EoYixhKX0sZnVuY3Rpb24oYSl7cihiLGEpfSl9Y2F0Y2goYyl7cihiLGMpfX12YXIgcD0yO2Z1bmN0aW9uIHQoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIsYyl7YyhhKX0pfWZ1bmN0aW9uIHUoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIpe2IoYSl9KX1mdW5jdGlvbiBxKGEsYil7aWYoYS5hPT1wKXtpZihiPT1hKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIGM9ITE7dHJ5e3ZhciBkPWImJmIudGhlbjtpZihudWxsIT1iJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZCl7ZC5jYWxsKGIsZnVuY3Rpb24oYil7Y3x8cShhLGIpO2M9ITB9LGZ1bmN0aW9uKGIpe2N8fHIoYSxiKTtjPSEwfSk7cmV0dXJufX1jYXRjaChlKXtjfHxyKGEsZSk7cmV0dXJufWEuYT0wO2EuYj1iO3YoYSl9fVxuZnVuY3Rpb24gcihhLGIpe2lmKGEuYT09cCl7aWYoYj09YSl0aHJvdyBuZXcgVHlwZUVycm9yO2EuYT0xO2EuYj1iO3YoYSl9fWZ1bmN0aW9uIHYoYSl7bChmdW5jdGlvbigpe2lmKGEuYSE9cClmb3IoO2EuZi5sZW5ndGg7KXt2YXIgYj1hLmYuc2hpZnQoKSxjPWJbMF0sZD1iWzFdLGU9YlsyXSxiPWJbM107dHJ5ezA9PWEuYT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBjP2UoYy5jYWxsKHZvaWQgMCxhLmIpKTplKGEuYik6MT09YS5hJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgZD9lKGQuY2FsbCh2b2lkIDAsYS5iKSk6YihhLmIpKX1jYXRjaChoKXtiKGgpfX19KX1uLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmModm9pZCAwLGEpfTtuLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gbmV3IG4oZnVuY3Rpb24oZCxlKXtjLmYucHVzaChbYSxiLGQsZV0pO3YoYyl9KX07XG5mdW5jdGlvbiB3KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiLGMpe2Z1bmN0aW9uIGQoYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2hbY109ZDtlKz0xO2U9PWEubGVuZ3RoJiZiKGgpfX12YXIgZT0wLGg9W107MD09YS5sZW5ndGgmJmIoaCk7Zm9yKHZhciBrPTA7azxhLmxlbmd0aDtrKz0xKXUoYVtrXSkuYyhkKGspLGMpfSl9ZnVuY3Rpb24geChhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoO2QrPTEpdShhW2RdKS5jKGIsYyl9KX07d2luZG93LlByb21pc2V8fCh3aW5kb3cuUHJvbWlzZT1uLHdpbmRvdy5Qcm9taXNlLnJlc29sdmU9dSx3aW5kb3cuUHJvbWlzZS5yZWplY3Q9dCx3aW5kb3cuUHJvbWlzZS5yYWNlPXgsd2luZG93LlByb21pc2UuYWxsPXcsd2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW49bi5wcm90b3R5cGUuYyx3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXT1uLnByb3RvdHlwZS5nKTt9KCkpO1xuXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiBsKGEsYil7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixiLCExKTphLmF0dGFjaEV2ZW50KFwic2Nyb2xsXCIsYil9ZnVuY3Rpb24gbShhKXtkb2N1bWVudC5ib2R5P2EoKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24gYygpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYyk7YSgpfSk6ZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbiBrKCl7aWYoXCJpbnRlcmFjdGl2ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlfHxcImNvbXBsZXRlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGUpZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixrKSxhKCl9KX07ZnVuY3Rpb24gcihhKXt0aGlzLmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmEuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dGhpcy5hLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTt0aGlzLmI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5jPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5nPS0xO3RoaXMuYi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5jLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjtcbnRoaXMuZi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5oLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDAlO2hlaWdodDoyMDAlO2ZvbnQtc2l6ZToxNnB4O21heC13aWR0aDpub25lO1wiO3RoaXMuYi5hcHBlbmRDaGlsZCh0aGlzLmgpO3RoaXMuYy5hcHBlbmRDaGlsZCh0aGlzLmYpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmIpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmMpfVxuZnVuY3Rpb24gdChhLGIpe2EuYS5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7bWluLXdpZHRoOjIwcHg7bWluLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO21hcmdpbjowO3BhZGRpbmc6MDt0b3A6LTk5OXB4O3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXN5bnRoZXNpczpub25lO2ZvbnQ6XCIrYitcIjtcIn1mdW5jdGlvbiB5KGEpe3ZhciBiPWEuYS5vZmZzZXRXaWR0aCxjPWIrMTAwO2EuZi5zdHlsZS53aWR0aD1jK1wicHhcIjthLmMuc2Nyb2xsTGVmdD1jO2EuYi5zY3JvbGxMZWZ0PWEuYi5zY3JvbGxXaWR0aCsxMDA7cmV0dXJuIGEuZyE9PWI/KGEuZz1iLCEwKTohMX1mdW5jdGlvbiB6KGEsYil7ZnVuY3Rpb24gYygpe3ZhciBhPWs7eShhKSYmYS5hLnBhcmVudE5vZGUmJmIoYS5nKX12YXIgaz1hO2woYS5iLGMpO2woYS5jLGMpO3koYSl9O2Z1bmN0aW9uIEEoYSxiKXt2YXIgYz1ifHx7fTt0aGlzLmZhbWlseT1hO3RoaXMuc3R5bGU9Yy5zdHlsZXx8XCJub3JtYWxcIjt0aGlzLndlaWdodD1jLndlaWdodHx8XCJub3JtYWxcIjt0aGlzLnN0cmV0Y2g9Yy5zdHJldGNofHxcIm5vcm1hbFwifXZhciBCPW51bGwsQz1udWxsLEU9bnVsbCxGPW51bGw7ZnVuY3Rpb24gRygpe2lmKG51bGw9PT1DKWlmKEooKSYmL0FwcGxlLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKSl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO0M9ISFhJiY2MDM+cGFyc2VJbnQoYVsxXSwxMCl9ZWxzZSBDPSExO3JldHVybiBDfWZ1bmN0aW9uIEooKXtudWxsPT09RiYmKEY9ISFkb2N1bWVudC5mb250cyk7cmV0dXJuIEZ9XG5mdW5jdGlvbiBLKCl7aWYobnVsbD09PUUpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e2Euc3R5bGUuZm9udD1cImNvbmRlbnNlZCAxMDBweCBzYW5zLXNlcmlmXCJ9Y2F0Y2goYil7fUU9XCJcIiE9PWEuc3R5bGUuZm9udH1yZXR1cm4gRX1mdW5jdGlvbiBMKGEsYil7cmV0dXJuW2Euc3R5bGUsYS53ZWlnaHQsSygpP2Euc3RyZXRjaDpcIlwiLFwiMTAwcHhcIixiXS5qb2luKFwiIFwiKX1cbkEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGs9YXx8XCJCRVNic3d5XCIscT0wLEQ9Ynx8M0UzLEg9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7aWYoSigpJiYhRygpKXt2YXIgTT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGUoKXsobmV3IERhdGUpLmdldFRpbWUoKS1IPj1EP2IoKTpkb2N1bWVudC5mb250cy5sb2FkKEwoYywnXCInK2MuZmFtaWx5KydcIicpLGspLnRoZW4oZnVuY3Rpb24oYyl7MTw9Yy5sZW5ndGg/YSgpOnNldFRpbWVvdXQoZSwyNSl9LGZ1bmN0aW9uKCl7YigpfSl9ZSgpfSksTj1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGMpe3E9c2V0VGltZW91dChjLEQpfSk7UHJvbWlzZS5yYWNlKFtOLE1dKS50aGVuKGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHEpO2EoYyl9LGZ1bmN0aW9uKCl7YihjKX0pfWVsc2UgbShmdW5jdGlvbigpe2Z1bmN0aW9uIHUoKXt2YXIgYjtpZihiPS0xIT1cbmYmJi0xIT1nfHwtMSE9ZiYmLTEhPWh8fC0xIT1nJiYtMSE9aCkoYj1mIT1nJiZmIT1oJiZnIT1oKXx8KG51bGw9PT1CJiYoYj0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksQj0hIWImJig1MzY+cGFyc2VJbnQoYlsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGJbMV0sMTApJiYxMT49cGFyc2VJbnQoYlsyXSwxMCkpKSxiPUImJihmPT12JiZnPT12JiZoPT12fHxmPT13JiZnPT13JiZoPT13fHxmPT14JiZnPT14JiZoPT14KSksYj0hYjtiJiYoZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksY2xlYXJUaW1lb3V0KHEpLGEoYykpfWZ1bmN0aW9uIEkoKXtpZigobmV3IERhdGUpLmdldFRpbWUoKS1IPj1EKWQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGIoYyk7ZWxzZXt2YXIgYT1kb2N1bWVudC5oaWRkZW47aWYoITA9PT1hfHx2b2lkIDA9PT1hKWY9ZS5hLm9mZnNldFdpZHRoLFxuZz1uLmEub2Zmc2V0V2lkdGgsaD1wLmEub2Zmc2V0V2lkdGgsdSgpO3E9c2V0VGltZW91dChJLDUwKX19dmFyIGU9bmV3IHIoayksbj1uZXcgcihrKSxwPW5ldyByKGspLGY9LTEsZz0tMSxoPS0xLHY9LTEsdz0tMSx4PS0xLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtkLmRpcj1cImx0clwiO3QoZSxMKGMsXCJzYW5zLXNlcmlmXCIpKTt0KG4sTChjLFwic2VyaWZcIikpO3QocCxMKGMsXCJtb25vc3BhY2VcIikpO2QuYXBwZW5kQ2hpbGQoZS5hKTtkLmFwcGVuZENoaWxkKG4uYSk7ZC5hcHBlbmRDaGlsZChwLmEpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZCk7dj1lLmEub2Zmc2V0V2lkdGg7dz1uLmEub2Zmc2V0V2lkdGg7eD1wLmEub2Zmc2V0V2lkdGg7SSgpO3ooZSxmdW5jdGlvbihhKXtmPWE7dSgpfSk7dChlLEwoYywnXCInK2MuZmFtaWx5KydcIixzYW5zLXNlcmlmJykpO3oobixmdW5jdGlvbihhKXtnPWE7dSgpfSk7dChuLEwoYywnXCInK2MuZmFtaWx5KydcIixzZXJpZicpKTtcbnoocCxmdW5jdGlvbihhKXtoPWE7dSgpfSk7dChwLEwoYywnXCInK2MuZmFtaWx5KydcIixtb25vc3BhY2UnKSl9KX0pfTtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1BOih3aW5kb3cuRm9udEZhY2VPYnNlcnZlcj1BLHdpbmRvdy5Gb250RmFjZU9ic2VydmVyLnByb3RvdHlwZS5sb2FkPUEucHJvdG90eXBlLmxvYWQpO30oKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBbe1wiZGVmYXVsdFwiOntcImZhbWlseVwiOlwiR2VvbWFuaXN0XCIsXCJmYWxsYmFja1wiOlwic2Fucy1zZXJpZlwiLFwid2VpZ2h0XCI6NjAwLFwic3R5bGVcIjpcIm5vcm1hbFwiLFwiZm9udGZhY2VcIjp0cnVlLFwiZmlsZVwiOlwiZ2VvbWFuaXN0LW1lZGl1bVwifSxcInJlZ3VsYXJcIjp7XCJmYW1pbHlcIjpcIkdlb21hbmlzdFwiLFwiZmFsbGJhY2tcIjpcInNhbnMtc2VyaWZcIixcIndlaWdodFwiOjQwMCxcInN0eWxlXCI6XCJub3JtYWxcIixcImZvbnRmYWNlXCI6dHJ1ZSxcImZpbGVcIjpcImdlb21hbmlzdC1yZWd1bGFyXCJ9LFwiY29kZVwiOntcImZhbWlseVwiOlwiRmlyYSBDb2RlXCIsXCJmYWxsYmFja1wiOlwiSGFjaywgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZVwiLFwid2VpZ2h0XCI6NDAwLFwic3R5bGVcIjpcIm5vcm1hbFwiLFwiZm9udGZhY2VcIjpmYWxzZX19XTsiLCJpbXBvcnQgT2JzZXJ2ZXIgZnJvbSAnQG5vZGVtb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlcic7XG5pbXBvcnQgZm9udHMgZnJvbSAnQHNoYXJlZC9mb250cyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgZm9udE9ic2VydmVycyA9IFtdO1xuXG4gIGlmIChzZXNzaW9uU3RvcmFnZS5mb250c0xvYWRlZCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1sb2FkZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhmb250cykuZm9yRWFjaChmb250T2JqZWN0ID0+IHtcbiAgICBPYmplY3Qua2V5cyhmb250c1tmb250T2JqZWN0XSkuZm9yRWFjaChmb250ID0+IHtcbiAgICAgIGNvbnN0IGYgPSBmb250c1tmb250T2JqZWN0XVtmb250XTtcbiAgICAgIGlmIChmLmZvbnRmYWNlKSB7XG4gICAgICAgIGZvbnRPYnNlcnZlcnMucHVzaChcbiAgICAgICAgICBuZXcgT2JzZXJ2ZXIoZi5mYW1pbHkucmVwbGFjZSgvJy9nLCAnJyksIHtcbiAgICAgICAgICAgIHdlaWdodDogZi53ZWlnaHQsXG4gICAgICAgICAgICBzdHlsZTogZi5zdHlsZVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChmb250T2JzZXJ2ZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgUHJvbWlzZS5hbGwoZm9udE9ic2VydmVycylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgICAgICAvLyBPcHRpbWl6YXRpb24gZm9yIFJlcGVhdCBWaWV3c1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5mb250c0xvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCAqIGFzIGNvbXBvbmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy8qKi8qLmpzJztcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi80LWdsb2JhbC8qLmpzJztcbmltcG9ydCAqIGFzIG90aGVyIGZyb20gJy4vNC1nbG9iYWwvKiovKi5qcyc7XG5cbmNvbnN0IGxvYWQgPSBbIGdsb2JhbHMsIG90aGVyLCBjb21wb25lbnRzIF07XG5cbi8vIGxldHMgY2hlY2sgaWYgd2UgaGF2ZSBhIG1vZGVybiBicm93c2VyLCBhbmQgdGhlbiwgZW5oYW5jZSFcbi8vIEVkZ2UsIEZpcmVmb3gsIENocm9tZSwgT3BlcmEgYXMgd2VsbCBhcyBJRTEwKywgaU9TNysgYW5kIEFuZHJvaWQgNC40K1xuaWYgKCd2aXNpYmlsaXR5U3RhdGUnIGluIGRvY3VtZW50KSB7XG4gIC8vIHJlbW92ZSB0aGUgbm8tanMgY2xhc3NcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5cbiAgLy8gbG9hZCBhbGwgamF2YXNjcmlwdHMgZnJvbSBnbG9iYWwgYW5kIGFsbCBjb21wb25lbnRzIGF1dG9tYXRpY2FsbHlcbiAgbG9hZC5mb3JFYWNoKGl0ZW1zID0+IHtcbiAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpID0+IHtcbiAgICAgIGl0ZW1zW2ldKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGlmIHlvdSB3YW50IHRvIGxvYWQgc29tZSBjdXN0b20gc2NyaXB0cywgdGhhdCBzaG91bGQgbm90IHJlc2lkZSBpblxuICAvLyBnbG9iYWwgb3IgYW55IG9mIHRoZSBjb21wb25lbnRzLCBwcm92aWRlIHRoZW0gaGVyZSBhbmQgaW1wb3J0IG9uIHRvcFxuICAvLyBpbXBvcnQgJ3N0aCcgZnJvbSAnc29tZXdoZXJlJztcbiAgLy8gc3RoKHsgZm9vOiBiYXIgfSk7XG59XG4iXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJ0aGlzIiwibGVmdEFycm93IiwicmlnaHRBcnJvdyIsImNsb3NlWCIsIm9wdGlvbnMiLCJkZWZhdWx0cyIsInN1cHBvcnRzIiwib3ZlcmxheSIsInNsaWRlciIsInByZXZpb3VzQnV0dG9uIiwibmV4dEJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiY3VycmVudEdhbGxlcnkiLCJjdXJyZW50SW5kZXgiLCJ0b3VjaCIsInRvdWNoRmxhZyIsInJlZ2V4IiwiZGF0YSIsImltYWdlc0VsZW1lbnRzIiwiZG9jdW1lbnRMYXN0Rm9jdXMiLCJvdmVybGF5Q2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsImluZGV4T2YiLCJwcmV2aW91c0J1dHRvbkNsaWNrSGFuZGxlciIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsIm5leHRCdXR0b25DbGlja0hhbmRsZXIiLCJjbG9zZUJ1dHRvbkNsaWNrSGFuZGxlciIsInRvdWNoc3RhcnRIYW5kbGVyIiwiY291bnQiLCJtdWx0aXRvdWNoIiwic3RhcnRYIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInN0YXJ0WSIsInBhZ2VZIiwidG91Y2htb3ZlSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ0b3VjaEV2ZW50IiwidG91Y2hlcyIsInRvdWNoZW5kSGFuZGxlciIsImNvbnRleHRtZW51SGFuZGxlciIsInRyYXBGb2N1c0luc2lkZU92ZXJsYXkiLCJzdHlsZSIsImRpc3BsYXkiLCJjb250YWlucyIsImZvckVhY2giLCJwcm90b3R5cGUiLCJjYWxsYmFjayIsInRoaXNBcmciLCJpIiwibGVuZ3RoIiwiY2FsbCIsImZpbHRlciIsImEiLCJiIiwiYyIsImQiLCJlIiwicHVzaCIsInJ1biIsInNlbGVjdG9yIiwidXNlck9wdGlvbnMiLCJ0cmFuc2Zvcm1zIiwidGVzdFRyYW5zZm9ybXNTdXBwb3J0Iiwic3ZnIiwidGVzdFNWR1N1cHBvcnQiLCJiaW5kSW1hZ2VDbGlja0xpc3RlbmVycyIsImdhbGxlcnlOb2RlTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdG9yRGF0YSIsImdhbGxlcnlFbGVtZW50IiwidGFnc05vZGVMaXN0IiwidGFnTmFtZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImlnbm9yZUNsYXNzIiwidGVzdCIsImhyZWYiLCJnYWxsZXJ5IiwiaW1hZ2VFbGVtZW50IiwiaW1hZ2VJbmRleCIsImltYWdlRWxlbWVudENsaWNrSGFuZGxlciIsImltYWdlSXRlbSIsImdhbGxlcmllcyIsImNsZWFyQ2FjaGVkRGF0YSIsImhhc093blByb3BlcnR5IiwicmVtb3ZlRnJvbUNhY2hlIiwiZXZlbnRIYW5kbGVyIiwiYnVpbGRPdmVybGF5IiwiZ2V0QnlJRCIsImNyZWF0ZSIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiYmluZEV2ZW50cyIsInVuYmluZEV2ZW50cyIsInByZXBhcmVPdmVybGF5IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiaW1hZ2VzRmlndXJlc0lkcyIsImltYWdlc0NhcHRpb25zSWRzIiwiZnVsbEltYWdlIiwiam9pbiIsInNldE9wdGlvbnMiLCJuZXdPcHRpb25zIiwiaXRlbSIsInRyYW5zaXRpb24iLCJ3ZWJraXRUcmFuc2l0aW9uIiwiYW5pbWF0aW9uIiwiYnV0dG9ucyIsIndpbmRvdyIsImJhY2tncm91bmRDb2xvciIsIm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3IiLCJzaG93T3ZlcmxheSIsImNob3NlbkltYWdlSW5kZXgiLCJub1Njcm9sbGJhcnMiLCJkb2N1bWVudEVsZW1lbnQiLCJvdmVyZmxvd1kiLCJib2R5IiwiZnVsbFNjcmVlbiIsImJvZHlDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImFmdGVyU2hvdyIsIm9uQ2hhbmdlIiwiYWN0aXZlRWxlbWVudCIsImluaXRGb2N1cyIsImZvY3VzIiwiZW50ZXJGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJtb3pDYW5jZWxGdWxsU2NyZWVuIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJoaWRlT3ZlcmxheSIsInJlbW92ZSIsImFmdGVySGlkZSIsImxvYWRJbWFnZSIsImluZGV4IiwiaW1hZ2VDb250YWluZXIiLCJnYWxsZXJ5SXRlbSIsInRodW1ibmFpbEVsZW1lbnQiLCJpbWFnZUNhcHRpb24iLCJjYXB0aW9ucyIsImdldEF0dHJpYnV0ZSIsInRpdGxlIiwiaW1hZ2VTcmMiLCJnZXRJbWFnZVNyYyIsImZpZ3VyZSIsImZpZ2NhcHRpb24iLCJpbWFnZSIsIm9ubG9hZCIsInNwaW5uZXIiLCJxdWVyeVNlbGVjdG9yIiwiYXN5bmMiLCJhbHQiLCJ0aXRsZVRhZyIsInJlc3VsdCIsImRhdGFzZXQiLCJzcmNzIiwic3Vic3RyaW5nIiwiaXNOYU4iLCJyZXBsYWNlIiwia2V5cyIsIk9iamVjdCIsInNvcnQiLCJwYXJzZUludCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImRldmljZVBpeGVsUmF0aW8iLCJzaG93TmV4dEltYWdlIiwic2hvd1ByZXZpb3VzSW1hZ2UiLCJ1cGRhdGVPZmZzZXQiLCJvZmZzZXQiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwibGVmdCIsImRpdiIsInBlcnNwZWN0aXZlIiwid2Via2l0UGVyc3BlY3RpdmUiLCJuYW1lc3BhY2VVUkkiLCJwcmVsb2FkTmV4dCIsInByZWxvYWQiLCJwcmVsb2FkUHJldiIsImJpbmQiLCJ1c2VDYXB0dXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50Iiwic3JjRWxlbWVudCIsInVuYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRWxlbWVudCIsImRlc3Ryb3lQbHVnaW4iLCJuYXYiLCJidXR0b24iLCJoZWFkZXIiLCJ0b2dnbGUiLCJzaG9ydGNvZGUiLCJ2YWx1ZSIsImJyZWFrcG9pbnRzIiwicXVlcnkiLCJweFZhbHVlIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzZWN0aW9uTGlua3MiLCJsaW5rcyIsInBhZ2UiLCJjbGlja3NlY3Rpb24iLCJsaW5rIiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwiY2hhbmdlU2VjdGlvbnMiLCJtZWRpYXF1ZXJ5IiwibWVudUNsaWNrIiwic2VjdGlvbnMiLCJzZWN0aW9uTGluayIsInNlYyIsImNsb3NlV2VsY29tZSIsIndlbGNvbWVEb25lIiwib25rZXlkb3duIiwiaXNIb21lcGFnZSIsImYiLCJnIiwibCIsIm0iLCJzaGlmdCIsIm4iLCJwIiwidCIsInUiLCJxIiwiVHlwZUVycm9yIiwidGhlbiIsInIiLCJ2IiwiaCIsInciLCJrIiwieCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmFjZSIsImFsbCIsInJlYWR5U3RhdGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNzc1RleHQiLCJ5Iiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJ6IiwicGFyZW50Tm9kZSIsIkEiLCJmYW1pbHkiLCJ3ZWlnaHQiLCJzdHJldGNoIiwiQiIsIkMiLCJFIiwiRiIsIkciLCJKIiwibmF2aWdhdG9yIiwidmVuZG9yIiwiZXhlYyIsInVzZXJBZ2VudCIsImZvbnRzIiwiSyIsImZvbnQiLCJMIiwibG9hZCIsIkQiLCJIIiwiRGF0ZSIsImdldFRpbWUiLCJNIiwiTiIsImNsZWFyVGltZW91dCIsIkkiLCJoaWRkZW4iLCJkaXIiLCJtb2R1bGUiLCJmb250T2JzZXJ2ZXJzIiwic2Vzc2lvblN0b3JhZ2UiLCJmb250c0xvYWRlZCIsImZvbnRPYmplY3QiLCJmb250ZmFjZSIsIk9ic2VydmVyIiwiZ2xvYmFscyIsIm90aGVyIiwiY29tcG9uZW50cyIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQVNXQSxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtZQUVsQixPQUFPQyxTQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxVQUFPQyxHQUEzQyxFQUFnRDtzQkFDckNGLE9BQVBDO1NBREosTUFFTyxBQUFpQzswQkFDcEMsR0FBaUJELFNBQWpCO1NBREc7S0FKVixFQVNDRyxjQVRELEVBU08sWUFBWTtZQUlaQyxZQUFZLGlDQUNSLHNGQURRLEdBRU4sNkRBRk0sR0FHUixRQUhSO1lBSUlDLGFBQWEs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
