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

	        // SVG shapes used on the buttons

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
	        // Visibility of the overlay
	        var isOverlayVisible = false;
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
	            var options = supports.passiveEvents ? { passive: true } : null;
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
	            var options = supports.passiveEvents ? { passive: true } : null;
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
	                isOverlayVisible = false;
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
	            return show(currentIndex + 1);
	        }

	        // Return false at the left end of the gallery
	        function showPreviousImage() {
	            return show(currentIndex - 1);
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
	        }

	        // CSS 3D Transforms test
	        function testTransformsSupport() {
	            var div = create('div');
	            return typeof div.style.perspective !== 'undefined' || typeof div.style.webkitPerspective !== 'undefined';
	        }

	        // Inline SVG test
	        function testSvgSupport() {
	            var div = create('div');
	            div.innerHTML = '<svg/>';
	            return (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
	        }

	        // Borrowed from https://github.com/seiyria/bootstrap-slider/pull/680/files
	        function testPassiveEventsSupport() {
	            var passiveEvents = false;
	            try {
	                var opts = Object.defineProperty({}, 'passive', {
	                    get: function get() {
	                        passiveEvents = true;
	                    }
	                });
	                window.addEventListener('test', null, opts);
	            } catch (e) {/* Silence the error and continue */}

	            return passiveEvents;
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

	  // NO COOKIE policy
	  // if (sessionStorage.fontsLoaded) {
	  //   document.documentElement.classList.add('fonts-loaded');
	  //   return;
	  // }

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
	      // NO COOKIE policy: Optimization for Repeat Views
	      // sessionStorage.fontsLoaded = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhZ3VldHRlYm94LmpzL3NyYy9iYWd1ZXR0ZUJveC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdi9uYXYuanMiLCIuLi8uLi8uLi9zcmMvamF2YXNjcmlwdHMvMS1zaGFyZWQvYnJlYWtwb2ludHMuanMiLCIuLi8uLi8uLi9zcmMvamF2YXNjcmlwdHMvMi1oZWxwZXJzL21lZGlhcXVlcnkuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uY2hhbmdlL3NlY3Rpb25jaGFuZ2UuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9udGZhY2VvYnNlcnZlci9mb250ZmFjZW9ic2VydmVyLmpzIiwiLi4vLi4vLi4vc3JjL2phdmFzY3JpcHRzLzEtc2hhcmVkL2ZvbnRzLmpzIiwiLi4vLi4vLi4vc3JjL2phdmFzY3JpcHRzLzQtZ2xvYmFsL2ZvbnRsb2FkZXIuanMiLCIuLi8uLi8uLi9zcmMvamF2YXNjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGJhZ3VldHRlQm94LmpzXG4gKiBAYXV0aG9yICBmZWltb3NpXG4gKiBAdmVyc2lvbiAlJUlOSkVDVF9WRVJTSU9OJSVcbiAqIEB1cmwgaHR0cHM6Ly9naXRodWIuY29tL2ZlaW1vc2kvYmFndWV0dGVCb3guanNcbiAqL1xuXG4vKiBnbG9iYWwgZGVmaW5lLCBtb2R1bGUgKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuYmFndWV0dGVCb3ggPSBmYWN0b3J5KCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gU1ZHIHNoYXBlcyB1c2VkIG9uIHRoZSBidXR0b25zXG4gICAgdmFyIGxlZnRBcnJvdyA9ICc8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI2MFwiPicgK1xuICAgICAgICAgICAgJzxwb2x5bGluZSBwb2ludHM9XCIzMCAxMCAxMCAzMCAzMCA1MFwiIHN0cm9rZT1cInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiIHN0cm9rZS13aWR0aD1cIjRcIicgK1xuICAgICAgICAgICAgICAnc3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz4nICtcbiAgICAgICAgICAgICc8L3N2Zz4nLFxuICAgICAgICByaWdodEFycm93ID0gJzxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjYwXCI+JyArXG4gICAgICAgICAgICAnPHBvbHlsaW5lIHBvaW50cz1cIjE0IDEwIDM0IDMwIDE0IDUwXCIgc3Ryb2tlPVwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIgc3Ryb2tlLXdpZHRoPVwiNFwiJyArXG4gICAgICAgICAgICAgICdzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPicgK1xuICAgICAgICAgICAgJzwvc3ZnPicsXG4gICAgICAgIGNsb3NlWCA9ICc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPicgK1xuICAgICAgICAgICAgJzxnIHN0cm9rZT1cInJnYigxNjAsMTYwLDE2MClcIiBzdHJva2Utd2lkdGg9XCI0XCI+JyArXG4gICAgICAgICAgICAnPGxpbmUgeDE9XCI1XCIgeTE9XCI1XCIgeDI9XCIyNVwiIHkyPVwiMjVcIi8+JyArXG4gICAgICAgICAgICAnPGxpbmUgeDE9XCI1XCIgeTE9XCIyNVwiIHgyPVwiMjVcIiB5Mj1cIjVcIi8+JyArXG4gICAgICAgICAgICAnPC9nPjwvc3ZnPic7XG4gICAgLy8gR2xvYmFsIG9wdGlvbnMgYW5kIHRoZWlyIGRlZmF1bHRzXG4gICAgdmFyIG9wdGlvbnMgPSB7fSxcbiAgICAgICAgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjYXB0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgIGJ1dHRvbnM6ICdhdXRvJyxcbiAgICAgICAgICAgIGZ1bGxTY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgbm9TY3JvbGxiYXJzOiBmYWxzZSxcbiAgICAgICAgICAgIGJvZHlDbGFzczogJ2JhZ3VldHRlQm94LW9wZW4nLFxuICAgICAgICAgICAgdGl0bGVUYWc6IGZhbHNlLFxuICAgICAgICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgICAgICAgcHJlbG9hZDogMixcbiAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlSW4nLFxuICAgICAgICAgICAgYWZ0ZXJTaG93OiBudWxsLFxuICAgICAgICAgICAgYWZ0ZXJIaWRlOiBudWxsLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG51bGwsXG4gICAgICAgICAgICBvdmVybGF5QmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuOCknXG4gICAgICAgIH07XG4gICAgLy8gT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgZmVhdHVyZXMgY29tcGF0aWJpbGl0eVxuICAgIHZhciBzdXBwb3J0cyA9IHt9O1xuICAgIC8vIERPTSBFbGVtZW50cyByZWZlcmVuY2VzXG4gICAgdmFyIG92ZXJsYXksIHNsaWRlciwgcHJldmlvdXNCdXR0b24sIG5leHRCdXR0b24sIGNsb3NlQnV0dG9uO1xuICAgIC8vIEFuIGFycmF5IHdpdGggYWxsIGltYWdlcyBpbiB0aGUgY3VycmVudCBnYWxsZXJ5XG4gICAgdmFyIGN1cnJlbnRHYWxsZXJ5ID0gW107XG4gICAgLy8gQ3VycmVudCBpbWFnZSBpbmRleCBpbnNpZGUgdGhlIHNsaWRlclxuICAgIHZhciBjdXJyZW50SW5kZXggPSAwO1xuICAgIC8vIFZpc2liaWxpdHkgb2YgdGhlIG92ZXJsYXlcbiAgICB2YXIgaXNPdmVybGF5VmlzaWJsZSA9IGZhbHNlO1xuICAgIC8vIFRvdWNoIGV2ZW50IHN0YXJ0IHBvc2l0aW9uIChmb3Igc2xpZGUgZ2VzdHVyZSlcbiAgICB2YXIgdG91Y2ggPSB7fTtcbiAgICAvLyBJZiBzZXQgdG8gdHJ1ZSBpZ25vcmUgdG91Y2ggZXZlbnRzIGJlY2F1c2UgYW5pbWF0aW9uIHdhcyBhbHJlYWR5IGZpcmVkXG4gICAgdmFyIHRvdWNoRmxhZyA9IGZhbHNlO1xuICAgIC8vIFJlZ2V4IHBhdHRlcm4gdG8gbWF0Y2ggaW1hZ2UgZmlsZXNcbiAgICB2YXIgcmVnZXggPSAvLitcXC4oZ2lmfGpwZT9nfHBuZ3x3ZWJwKS9pO1xuICAgIC8vIE9iamVjdCBvZiBhbGwgdXNlZCBnYWxsZXJpZXNcbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIC8vIEFycmF5IGNvbnRhaW5pbmcgdGVtcG9yYXJ5IGltYWdlcyBET00gZWxlbWVudHNcbiAgICB2YXIgaW1hZ2VzRWxlbWVudHMgPSBbXTtcbiAgICAvLyBUaGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgYmVmb3JlIG9wZW5pbmcgdGhlIG92ZXJsYXlcbiAgICB2YXIgZG9jdW1lbnRMYXN0Rm9jdXMgPSBudWxsO1xuICAgIHZhciBvdmVybGF5Q2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gQ2xvc2UgdGhlIG92ZXJsYXkgd2hlbiB1c2VyIGNsaWNrcyBkaXJlY3RseSBvbiB0aGUgYmFja2dyb3VuZFxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkLmluZGV4T2YoJ2JhZ3VldHRlLWltZycpICE9PSAtMSkge1xuICAgICAgICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHByZXZpb3VzQnV0dG9uQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgOiBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICBzaG93UHJldmlvdXNJbWFnZSgpO1xuICAgIH07XG4gICAgdmFyIG5leHRCdXR0b25DbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPyBldmVudC5zdG9wUHJvcGFnYXRpb24oKSA6IGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIHNob3dOZXh0SW1hZ2UoKTtcbiAgICB9O1xuICAgIHZhciBjbG9zZUJ1dHRvbkNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA/IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIDogZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICB9O1xuICAgIHZhciB0b3VjaHN0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHRvdWNoLmNvdW50Kys7XG4gICAgICAgIGlmICh0b3VjaC5jb3VudCA+IDEpIHtcbiAgICAgICAgICAgIHRvdWNoLm11bHRpdG91Y2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNhdmUgeCBhbmQgeSBheGlzIHBvc2l0aW9uXG4gICAgICAgIHRvdWNoLnN0YXJ0WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICB0b3VjaC5zdGFydFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB9O1xuICAgIHZhciB0b3VjaG1vdmVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gSWYgYWN0aW9uIHdhcyBhbHJlYWR5IHRyaWdnZXJlZCBvciBtdWx0aXRvdWNoIHJldHVyblxuICAgICAgICBpZiAodG91Y2hGbGFnIHx8IHRvdWNoLm11bHRpdG91Y2gpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA/IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgOiBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIC8vIE1vdmUgYXQgbGVhc3QgNDAgcGl4ZWxzIHRvIHRyaWdnZXIgdGhlIGFjdGlvblxuICAgICAgICBpZiAodG91Y2hFdmVudC5wYWdlWCAtIHRvdWNoLnN0YXJ0WCA+IDQwKSB7XG4gICAgICAgICAgICB0b3VjaEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgc2hvd1ByZXZpb3VzSW1hZ2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0b3VjaEV2ZW50LnBhZ2VYIC0gdG91Y2guc3RhcnRYIDwgLTQwKSB7XG4gICAgICAgICAgICB0b3VjaEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgc2hvd05leHRJbWFnZSgpO1xuICAgICAgICAvLyBNb3ZlIDEwMCBwaXhlbHMgdXAgdG8gY2xvc2UgdGhlIG92ZXJsYXlcbiAgICAgICAgfSBlbHNlIGlmICh0b3VjaC5zdGFydFkgLSB0b3VjaEV2ZW50LnBhZ2VZID4gMTAwKSB7XG4gICAgICAgICAgICBoaWRlT3ZlcmxheSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgdG91Y2hlbmRIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvdWNoLmNvdW50LS07XG4gICAgICAgIGlmICh0b3VjaC5jb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0b3VjaC5tdWx0aXRvdWNoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdG91Y2hGbGFnID0gZmFsc2U7XG4gICAgfTtcbiAgICB2YXIgY29udGV4dG1lbnVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvdWNoZW5kSGFuZGxlcigpO1xuICAgIH07XG5cbiAgICB2YXIgdHJhcEZvY3VzSW5zaWRlT3ZlcmxheSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChvdmVybGF5LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgJiYgKG92ZXJsYXkuY29udGFpbnMgJiYgIW92ZXJsYXkuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaW5pdEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZm9yRWFjaCBwb2x5ZmlsbCBmb3IgSUU4XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQ4Mjc0NDMvMTA3Nzg0NlxuICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgaWYgKCFbXS5mb3JFYWNoKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIHBvbHlmaWxsIGZvciBJRThcbiAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9lbGlwZXJlbG1hbi8xMDMxNjU2XG4gICAgaWYgKCFbXS5maWx0ZXIpIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIGUpIHtcbiAgICAgICAgICAgIGMgPSB0aGlzO1xuICAgICAgICAgICAgZCA9IFtdO1xuICAgICAgICAgICAgZm9yIChlID0gMDsgZSA8IGMubGVuZ3RoOyBlKyspXG4gICAgICAgICAgICAgICAgYS5jYWxsKGIsIGNbZV0sIGUsIGMpICYmIGQucHVzaChjW2VdKTtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAvLyBTY3JpcHQgZW50cnkgcG9pbnRcbiAgICBmdW5jdGlvbiBydW4oc2VsZWN0b3IsIHVzZXJPcHRpb25zKSB7XG4gICAgICAgIC8vIEZpbGwgc3VwcG9ydHMgb2JqZWN0XG4gICAgICAgIHN1cHBvcnRzLnRyYW5zZm9ybXMgPSB0ZXN0VHJhbnNmb3Jtc1N1cHBvcnQoKTtcbiAgICAgICAgc3VwcG9ydHMuc3ZnID0gdGVzdFN2Z1N1cHBvcnQoKTtcbiAgICAgICAgc3VwcG9ydHMucGFzc2l2ZUV2ZW50cyA9IHRlc3RQYXNzaXZlRXZlbnRzU3VwcG9ydCgpO1xuXG4gICAgICAgIGJ1aWxkT3ZlcmxheSgpO1xuICAgICAgICByZW1vdmVGcm9tQ2FjaGUoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gYmluZEltYWdlQ2xpY2tMaXN0ZW5lcnMoc2VsZWN0b3IsIHVzZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kSW1hZ2VDbGlja0xpc3RlbmVycyhzZWxlY3RvciwgdXNlck9wdGlvbnMpIHtcbiAgICAgICAgLy8gRm9yIGVhY2ggZ2FsbGVyeSBiaW5kIGEgY2xpY2sgZXZlbnQgdG8gZXZlcnkgaW1hZ2UgaW5zaWRlIGl0XG4gICAgICAgIHZhciBnYWxsZXJ5Tm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgdmFyIHNlbGVjdG9yRGF0YSA9IHtcbiAgICAgICAgICAgIGdhbGxlcmllczogW10sXG4gICAgICAgICAgICBub2RlTGlzdDogZ2FsbGVyeU5vZGVMaXN0XG4gICAgICAgIH07XG4gICAgICAgIGRhdGFbc2VsZWN0b3JdID0gc2VsZWN0b3JEYXRhO1xuXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChnYWxsZXJ5Tm9kZUxpc3QsIGZ1bmN0aW9uKGdhbGxlcnlFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMuZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB1c2VyT3B0aW9ucy5maWx0ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldCBub2RlcyBmcm9tIGdhbGxlcnkgZWxlbWVudHMgb3Igc2luZ2xlLWVsZW1lbnQgZ2FsbGVyaWVzXG4gICAgICAgICAgICB2YXIgdGFnc05vZGVMaXN0ID0gW107XG4gICAgICAgICAgICBpZiAoZ2FsbGVyeUVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgICAgICAgdGFnc05vZGVMaXN0ID0gW2dhbGxlcnlFbGVtZW50XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFnc05vZGVMaXN0ID0gZ2FsbGVyeUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmlsdGVyICdhJyBlbGVtZW50cyBmcm9tIHRob3NlIG5vdCBsaW5raW5nIHRvIGltYWdlc1xuICAgICAgICAgICAgdGFnc05vZGVMaXN0ID0gW10uZmlsdGVyLmNhbGwodGFnc05vZGVMaXN0LCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMuaWdub3JlQ2xhc3MpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnZXgudGVzdChlbGVtZW50LmhyZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRhZ3NOb2RlTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBnYWxsZXJ5ID0gW107XG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGFnc05vZGVMaXN0LCBmdW5jdGlvbihpbWFnZUVsZW1lbnQsIGltYWdlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VFbGVtZW50Q2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIDogZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyZU92ZXJsYXkoZ2FsbGVyeSwgdXNlck9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93T3ZlcmxheShpbWFnZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZUl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlcjogaW1hZ2VFbGVtZW50Q2xpY2tIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQ6IGltYWdlRWxlbWVudFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYmluZChpbWFnZUVsZW1lbnQsICdjbGljaycsIGltYWdlRWxlbWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgZ2FsbGVyeS5wdXNoKGltYWdlSXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGVjdG9yRGF0YS5nYWxsZXJpZXMucHVzaChnYWxsZXJ5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yRGF0YS5nYWxsZXJpZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJDYWNoZWREYXRhKCkge1xuICAgICAgICBmb3IgKHZhciBzZWxlY3RvciBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVGcm9tQ2FjaGUoc2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhY2hlKHNlbGVjdG9yKSB7XG4gICAgICAgIGlmICghZGF0YS5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZ2FsbGVyaWVzID0gZGF0YVtzZWxlY3Rvcl0uZ2FsbGVyaWVzO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZ2FsbGVyaWVzLCBmdW5jdGlvbihnYWxsZXJ5KSB7XG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZ2FsbGVyeSwgZnVuY3Rpb24oaW1hZ2VJdGVtKSB7XG4gICAgICAgICAgICAgICAgdW5iaW5kKGltYWdlSXRlbS5pbWFnZUVsZW1lbnQsICdjbGljaycsIGltYWdlSXRlbS5ldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50R2FsbGVyeSA9PT0gZ2FsbGVyeSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHYWxsZXJ5ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZSBkYXRhW3NlbGVjdG9yXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZE92ZXJsYXkoKSB7XG4gICAgICAgIG92ZXJsYXkgPSBnZXRCeUlEKCdiYWd1ZXR0ZUJveC1vdmVybGF5Jyk7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBvdmVybGF5IGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGlmIChvdmVybGF5KSB7XG4gICAgICAgICAgICBzbGlkZXIgPSBnZXRCeUlEKCdiYWd1ZXR0ZUJveC1zbGlkZXInKTtcbiAgICAgICAgICAgIHByZXZpb3VzQnV0dG9uID0gZ2V0QnlJRCgncHJldmlvdXMtYnV0dG9uJyk7XG4gICAgICAgICAgICBuZXh0QnV0dG9uID0gZ2V0QnlJRCgnbmV4dC1idXR0b24nKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uID0gZ2V0QnlJRCgnY2xvc2UtYnV0dG9uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3JlYXRlIG92ZXJsYXkgZWxlbWVudFxuICAgICAgICBvdmVybGF5ID0gY3JlYXRlKCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgICAgIG92ZXJsYXkuaWQgPSAnYmFndWV0dGVCb3gtb3ZlcmxheSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICAgIC8vIENyZWF0ZSBnYWxsZXJ5IHNsaWRlciBlbGVtZW50XG4gICAgICAgIHNsaWRlciA9IGNyZWF0ZSgnZGl2Jyk7XG4gICAgICAgIHNsaWRlci5pZCA9ICdiYWd1ZXR0ZUJveC1zbGlkZXInO1xuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKHNsaWRlcik7XG4gICAgICAgIC8vIENyZWF0ZSBhbGwgbmVjZXNzYXJ5IGJ1dHRvbnNcbiAgICAgICAgcHJldmlvdXNCdXR0b24gPSBjcmVhdGUoJ2J1dHRvbicpO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmlkID0gJ3ByZXZpb3VzLWJ1dHRvbic7XG4gICAgICAgIHByZXZpb3VzQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdQcmV2aW91cycpO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5pbm5lckhUTUwgPSBzdXBwb3J0cy5zdmcgPyBsZWZ0QXJyb3cgOiAnJmx0Oyc7XG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocHJldmlvdXNCdXR0b24pO1xuXG4gICAgICAgIG5leHRCdXR0b24gPSBjcmVhdGUoJ2J1dHRvbicpO1xuICAgICAgICBuZXh0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgbmV4dEJ1dHRvbi5pZCA9ICduZXh0LWJ1dHRvbic7XG4gICAgICAgIG5leHRCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ05leHQnKTtcbiAgICAgICAgbmV4dEJ1dHRvbi5pbm5lckhUTUwgPSBzdXBwb3J0cy5zdmcgPyByaWdodEFycm93IDogJyZndDsnO1xuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xuXG4gICAgICAgIGNsb3NlQnV0dG9uID0gY3JlYXRlKCdidXR0b24nKTtcbiAgICAgICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5pZCA9ICdjbG9zZS1idXR0b24nO1xuICAgICAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQ2xvc2UnKTtcbiAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gc3VwcG9ydHMuc3ZnID8gY2xvc2VYIDogJyZ0aW1lczsnO1xuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgICAgICBwcmV2aW91c0J1dHRvbi5jbGFzc05hbWUgPSBuZXh0QnV0dG9uLmNsYXNzTmFtZSA9IGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdiYWd1ZXR0ZUJveC1idXR0b24nO1xuXG4gICAgICAgIGJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzNzogLy8gTGVmdCBhcnJvd1xuICAgICAgICAgICAgc2hvd1ByZXZpb3VzSW1hZ2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OiAvLyBSaWdodCBhcnJvd1xuICAgICAgICAgICAgc2hvd05leHRJbWFnZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6IC8vIEVzY1xuICAgICAgICAgICAgaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBzdXBwb3J0cy5wYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiB0cnVlIH0gOiBudWxsO1xuICAgICAgICBiaW5kKG92ZXJsYXksICdjbGljaycsIG92ZXJsYXlDbGlja0hhbmRsZXIpO1xuICAgICAgICBiaW5kKHByZXZpb3VzQnV0dG9uLCAnY2xpY2snLCBwcmV2aW91c0J1dHRvbkNsaWNrSGFuZGxlcik7XG4gICAgICAgIGJpbmQobmV4dEJ1dHRvbiwgJ2NsaWNrJywgbmV4dEJ1dHRvbkNsaWNrSGFuZGxlcik7XG4gICAgICAgIGJpbmQoY2xvc2VCdXR0b24sICdjbGljaycsIGNsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgYmluZChzbGlkZXIsICdjb250ZXh0bWVudScsIGNvbnRleHRtZW51SGFuZGxlcik7XG4gICAgICAgIGJpbmQob3ZlcmxheSwgJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0SGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIGJpbmQob3ZlcmxheSwgJ3RvdWNobW92ZScsIHRvdWNobW92ZUhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICBiaW5kKG92ZXJsYXksICd0b3VjaGVuZCcsIHRvdWNoZW5kSGFuZGxlcik7XG4gICAgICAgIGJpbmQoZG9jdW1lbnQsICdmb2N1cycsIHRyYXBGb2N1c0luc2lkZU92ZXJsYXksIHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBzdXBwb3J0cy5wYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiB0cnVlIH0gOiBudWxsO1xuICAgICAgICB1bmJpbmQob3ZlcmxheSwgJ2NsaWNrJywgb3ZlcmxheUNsaWNrSGFuZGxlcik7XG4gICAgICAgIHVuYmluZChwcmV2aW91c0J1dHRvbiwgJ2NsaWNrJywgcHJldmlvdXNCdXR0b25DbGlja0hhbmRsZXIpO1xuICAgICAgICB1bmJpbmQobmV4dEJ1dHRvbiwgJ2NsaWNrJywgbmV4dEJ1dHRvbkNsaWNrSGFuZGxlcik7XG4gICAgICAgIHVuYmluZChjbG9zZUJ1dHRvbiwgJ2NsaWNrJywgY2xvc2VCdXR0b25DbGlja0hhbmRsZXIpO1xuICAgICAgICB1bmJpbmQoc2xpZGVyLCAnY29udGV4dG1lbnUnLCBjb250ZXh0bWVudUhhbmRsZXIpO1xuICAgICAgICB1bmJpbmQob3ZlcmxheSwgJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0SGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIHVuYmluZChvdmVybGF5LCAndG91Y2htb3ZlJywgdG91Y2htb3ZlSGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIHVuYmluZChvdmVybGF5LCAndG91Y2hlbmQnLCB0b3VjaGVuZEhhbmRsZXIpO1xuICAgICAgICB1bmJpbmQoZG9jdW1lbnQsICdmb2N1cycsIHRyYXBGb2N1c0luc2lkZU92ZXJsYXksIHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXBhcmVPdmVybGF5KGdhbGxlcnksIHVzZXJPcHRpb25zKSB7XG4gICAgICAgIC8vIElmIHRoZSBzYW1lIGdhbGxlcnkgaXMgYmVpbmcgb3BlbmVkIHByZXZlbnQgZnJvbSBsb2FkaW5nIGl0IG9uY2UgYWdhaW5cbiAgICAgICAgaWYgKGN1cnJlbnRHYWxsZXJ5ID09PSBnYWxsZXJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEdhbGxlcnkgPSBnYWxsZXJ5O1xuICAgICAgICAvLyBVcGRhdGUgZ2FsbGVyeSBzcGVjaWZpYyBvcHRpb25zXG4gICAgICAgIHNldE9wdGlvbnModXNlck9wdGlvbnMpO1xuICAgICAgICAvLyBFbXB0eSBzbGlkZXIgb2YgcHJldmlvdXMgY29udGVudHMgKG1vcmUgZWZmZWN0aXZlIHRoYW4gLmlubmVySFRNTCA9IFwiXCIpXG4gICAgICAgIHdoaWxlIChzbGlkZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgc2xpZGVyLnJlbW92ZUNoaWxkKHNsaWRlci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZXNFbGVtZW50cy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHZhciBpbWFnZXNGaWd1cmVzSWRzID0gW107XG4gICAgICAgIHZhciBpbWFnZXNDYXB0aW9uc0lkcyA9IFtdO1xuICAgICAgICAvLyBQcmVwYXJlIGFuZCBhcHBlbmQgaW1hZ2VzIGNvbnRhaW5lcnMgYW5kIHBvcHVsYXRlIGZpZ3VyZSBhbmQgY2FwdGlvbnMgSURzIGFycmF5c1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgZnVsbEltYWdlOyBpIDwgZ2FsbGVyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZnVsbEltYWdlID0gY3JlYXRlKCdkaXYnKTtcbiAgICAgICAgICAgIGZ1bGxJbWFnZS5jbGFzc05hbWUgPSAnZnVsbC1pbWFnZSc7XG4gICAgICAgICAgICBmdWxsSW1hZ2UuaWQgPSAnYmFndWV0dGUtaW1nLScgKyBpO1xuICAgICAgICAgICAgaW1hZ2VzRWxlbWVudHMucHVzaChmdWxsSW1hZ2UpO1xuXG4gICAgICAgICAgICBpbWFnZXNGaWd1cmVzSWRzLnB1c2goJ2JhZ3VldHRlQm94LWZpZ3VyZS0nICsgaSk7XG4gICAgICAgICAgICBpbWFnZXNDYXB0aW9uc0lkcy5wdXNoKCdiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLScgKyBpKTtcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmRDaGlsZChpbWFnZXNFbGVtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGltYWdlc0ZpZ3VyZXNJZHMuam9pbignICcpKTtcbiAgICAgICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBpbWFnZXNDYXB0aW9uc0lkcy5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE9wdGlvbnMobmV3T3B0aW9ucykge1xuICAgICAgICBpZiAoIW5ld09wdGlvbnMpIHtcbiAgICAgICAgICAgIG5ld09wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaWxsIG9wdGlvbnMgb2JqZWN0XG4gICAgICAgIGZvciAodmFyIGl0ZW0gaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbaXRlbV0gPSBkZWZhdWx0c1tpdGVtXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3T3B0aW9uc1tpdGVtXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zW2l0ZW1dID0gbmV3T3B0aW9uc1tpdGVtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBBcHBseSBuZXcgb3B0aW9ucyAqL1xuICAgICAgICAvLyBDaGFuZ2UgdHJhbnNpdGlvbiBmb3IgcHJvcGVyIGFuaW1hdGlvblxuICAgICAgICBzbGlkZXIuc3R5bGUudHJhbnNpdGlvbiA9IHNsaWRlci5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gKG9wdGlvbnMuYW5pbWF0aW9uID09PSAnZmFkZUluJyA/ICdvcGFjaXR5IC40cyBlYXNlJyA6XG4gICAgICAgICAgICBvcHRpb25zLmFuaW1hdGlvbiA9PT0gJ3NsaWRlSW4nID8gJycgOiAnbm9uZScpO1xuICAgICAgICAvLyBIaWRlIGJ1dHRvbnMgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGlmIChvcHRpb25zLmJ1dHRvbnMgPT09ICdhdXRvJyAmJiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IGN1cnJlbnRHYWxsZXJ5Lmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCBidXR0b25zIHN0eWxlIHRvIGhpZGUgb3IgZGlzcGxheSB0aGVtXG4gICAgICAgIHByZXZpb3VzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBuZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAob3B0aW9ucy5idXR0b25zID8gJycgOiAnbm9uZScpO1xuICAgICAgICAvLyBTZXQgb3ZlcmxheSBjb2xvclxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFNpbGVuY2UgdGhlIGVycm9yIGFuZCBjb250aW51ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd092ZXJsYXkoY2hvc2VuSW1hZ2VJbmRleCkge1xuICAgICAgICBpZiAob3B0aW9ucy5ub1Njcm9sbGJhcnMpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYmluZChkb2N1bWVudCwgJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGNob3NlbkltYWdlSW5kZXg7XG4gICAgICAgIHRvdWNoID0ge1xuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBzdGFydFg6IG51bGwsXG4gICAgICAgICAgICBzdGFydFk6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgbG9hZEltYWdlKGN1cnJlbnRJbmRleCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcmVsb2FkTmV4dChjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgcHJlbG9hZFByZXYoY3VycmVudEluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlT2Zmc2V0KCk7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIGVudGVyRnVsbFNjcmVlbigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZhZGUgaW4gb3ZlcmxheVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc05hbWUgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5ib2R5Q2xhc3MgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQob3B0aW9ucy5ib2R5Q2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYWZ0ZXJTaG93KSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTApO1xuICAgICAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5vbkNoYW5nZShjdXJyZW50SW5kZXgsIGltYWdlc0VsZW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnRMYXN0Rm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBpbml0Rm9jdXMoKTtcbiAgICAgICAgaXNPdmVybGF5VmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEZvY3VzKCkge1xuICAgICAgICBpZiAob3B0aW9ucy5idXR0b25zKSB7XG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbi5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVudGVyRnVsbFNjcmVlbigpIHtcbiAgICAgICAgaWYgKG92ZXJsYXkucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIG92ZXJsYXkucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmIChvdmVybGF5LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBvdmVybGF5LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3ZlcmxheS5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICAgICAgb3ZlcmxheS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4oKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlT3ZlcmxheSgpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9TY3JvbGxiYXJzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1bmJpbmQoZG9jdW1lbnQsICdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgICAgICAvLyBGYWRlIG91dCBhbmQgaGlkZSB0aGUgb3ZlcmxheVxuICAgICAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICcnO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmJvZHlDbGFzcyAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShvcHRpb25zLmJvZHlDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hZnRlckhpZGUpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmFmdGVySGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnRMYXN0Rm9jdXMgJiYgZG9jdW1lbnRMYXN0Rm9jdXMuZm9jdXMoKTtcbiAgICAgICAgICAgIGlzT3ZlcmxheVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkSW1hZ2UoaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBpbWFnZUNvbnRhaW5lciA9IGltYWdlc0VsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgdmFyIGdhbGxlcnlJdGVtID0gY3VycmVudEdhbGxlcnlbaW5kZXhdO1xuXG4gICAgICAgIC8vIFJldHVybiBpZiB0aGUgaW5kZXggZXhjZWVkcyBwcmVwYXJlZCBpbWFnZXMgaW4gdGhlIG92ZXJsYXlcbiAgICAgICAgLy8gb3IgaWYgdGhlIGN1cnJlbnQgZ2FsbGVyeSBoYXMgYmVlbiBjaGFuZ2VkIC8gY2xvc2VkXG4gICAgICAgIGlmICh0eXBlb2YgaW1hZ2VDb250YWluZXIgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBnYWxsZXJ5SXRlbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGltYWdlIGlzIGFscmVhZHkgbG9hZGVkIHJ1biBjYWxsYmFjayBhbmQgcmV0dXJuXG4gICAgICAgIGlmIChpbWFnZUNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0pIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgZWxlbWVudCByZWZlcmVuY2UsIG9wdGlvbmFsIGNhcHRpb24gYW5kIHNvdXJjZSBwYXRoXG4gICAgICAgIHZhciBpbWFnZUVsZW1lbnQgPSBnYWxsZXJ5SXRlbS5pbWFnZUVsZW1lbnQ7XG4gICAgICAgIHZhciB0aHVtYm5haWxFbGVtZW50ID0gaW1hZ2VFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXTtcbiAgICAgICAgdmFyIGltYWdlQ2FwdGlvbiA9IHR5cGVvZiBvcHRpb25zLmNhcHRpb25zID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgIG9wdGlvbnMuY2FwdGlvbnMuY2FsbChjdXJyZW50R2FsbGVyeSwgaW1hZ2VFbGVtZW50KSA6XG4gICAgICAgICAgICBpbWFnZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhcHRpb24nKSB8fCBpbWFnZUVsZW1lbnQudGl0bGU7XG4gICAgICAgIHZhciBpbWFnZVNyYyA9IGdldEltYWdlU3JjKGltYWdlRWxlbWVudCk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBmaWd1cmUgZWxlbWVudFxuICAgICAgICB2YXIgZmlndXJlID0gY3JlYXRlKCdmaWd1cmUnKTtcbiAgICAgICAgZmlndXJlLmlkID0gJ2JhZ3VldHRlQm94LWZpZ3VyZS0nICsgaW5kZXg7XG4gICAgICAgIGZpZ3VyZS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LXNwaW5uZXJcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTFcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTJcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nO1xuICAgICAgICAvLyBJbnNlcnQgY2FwdGlvbiBpZiBhdmFpbGFibGVcbiAgICAgICAgaWYgKG9wdGlvbnMuY2FwdGlvbnMgJiYgaW1hZ2VDYXB0aW9uKSB7XG4gICAgICAgICAgICB2YXIgZmlnY2FwdGlvbiA9IGNyZWF0ZSgnZmlnY2FwdGlvbicpO1xuICAgICAgICAgICAgZmlnY2FwdGlvbi5pZCA9ICdiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLScgKyBpbmRleDtcbiAgICAgICAgICAgIGZpZ2NhcHRpb24uaW5uZXJIVE1MID0gaW1hZ2VDYXB0aW9uO1xuICAgICAgICAgICAgZmlndXJlLmFwcGVuZENoaWxkKGZpZ2NhcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpZ3VyZSk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBnYWxsZXJ5IGltZyBlbGVtZW50XG4gICAgICAgIHZhciBpbWFnZSA9IGNyZWF0ZSgnaW1nJyk7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGxvYWRlciBlbGVtZW50XG4gICAgICAgICAgICB2YXIgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWd1ZXR0ZS1pbWctJyArIGluZGV4ICsgJyAuYmFndWV0dGVCb3gtc3Bpbm5lcicpO1xuICAgICAgICAgICAgZmlndXJlLnJlbW92ZUNoaWxkKHNwaW5uZXIpO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFzeW5jICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZVNyYyk7XG4gICAgICAgIGltYWdlLmFsdCA9IHRodW1ibmFpbEVsZW1lbnQgPyB0aHVtYm5haWxFbGVtZW50LmFsdCB8fCAnJyA6ICcnO1xuICAgICAgICBpZiAob3B0aW9ucy50aXRsZVRhZyAmJiBpbWFnZUNhcHRpb24pIHtcbiAgICAgICAgICAgIGltYWdlLnRpdGxlID0gaW1hZ2VDYXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgLy8gUnVuIGNhbGxiYWNrXG4gICAgICAgIGlmIChvcHRpb25zLmFzeW5jICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IGltYWdlIHNvdXJjZSBsb2NhdGlvbiwgbW9zdGx5IHVzZWQgZm9yIHJlc3BvbnNpdmUgaW1hZ2VzXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2VTcmMoaW1hZ2UpIHtcbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgaW1hZ2UgcGF0aCBmcm9tIGhyZWZcbiAgICAgICAgdmFyIHJlc3VsdCA9IGltYWdlLmhyZWY7XG4gICAgICAgIC8vIElmIGRhdGFzZXQgaXMgc3VwcG9ydGVkIGZpbmQgdGhlIG1vc3Qgc3VpdGFibGUgaW1hZ2VcbiAgICAgICAgaWYgKGltYWdlLmRhdGFzZXQpIHtcbiAgICAgICAgICAgIHZhciBzcmNzID0gW107XG4gICAgICAgICAgICAvLyBHZXQgYWxsIHBvc3NpYmxlIGltYWdlIHZlcnNpb25zIGRlcGVuZGluZyBvbiB0aGUgcmVzb2x1dGlvblxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBpbiBpbWFnZS5kYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3Vic3RyaW5nKDAsIDMpID09PSAnYXQtJyAmJiAhaXNOYU4oaXRlbS5zdWJzdHJpbmcoMykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNyY3NbaXRlbS5yZXBsYWNlKCdhdC0nLCAnJyldID0gaW1hZ2UuZGF0YXNldFtpdGVtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTb3J0IHJlc29sdXRpb25zIGFzY2VuZGluZ1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzcmNzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApIDwgcGFyc2VJbnQoYiwgMTApID8gLTEgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBHZXQgcmVhbCBzY3JlZW4gcmVzb2x1dGlvblxuICAgICAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGltYWdlIGJpZ2dlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBjdXJyZW50IHdpZHRoXG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IGtleXMubGVuZ3RoIC0gMSAmJiBrZXlzW2ldIDwgd2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSBzcmNzW2tleXNbaV1dIHx8IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIFJldHVybiBmYWxzZSBhdCB0aGUgcmlnaHQgZW5kIG9mIHRoZSBnYWxsZXJ5XG4gICAgZnVuY3Rpb24gc2hvd05leHRJbWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHNob3coY3VycmVudEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGZhbHNlIGF0IHRoZSBsZWZ0IGVuZCBvZiB0aGUgZ2FsbGVyeVxuICAgIGZ1bmN0aW9uIHNob3dQcmV2aW91c0ltYWdlKCkge1xuICAgICAgICByZXR1cm4gc2hvdyhjdXJyZW50SW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIHRoZSBnYWxsZXJ5IHRvIGEgc3BlY2lmaWMgaW5kZXhcbiAgICAgKiBAcGFyYW0gYGluZGV4YCB7bnVtYmVyfSAtIHRoZSBwb3NpdGlvbiBvZiB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0gYGdhbGxlcnlgIHthcnJheX0gLSBnYWxsZXJ5IHdoaWNoIHNob3VsZCBiZSBvcGVuZWQsIGlmIG9taXR0ZWQgYXNzdW1lcyB0aGUgY3VycmVudGx5IG9wZW5lZCBvbmVcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIHRydWUgb24gc3VjY2VzcyBvciBmYWxzZSBpZiB0aGUgaW5kZXggaXMgaW52YWxpZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNob3coaW5kZXgsIGdhbGxlcnkpIHtcbiAgICAgICAgaWYgKCFpc092ZXJsYXlWaXNpYmxlICYmIGluZGV4ID49IDAgJiYgaW5kZXggPCBnYWxsZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgcHJlcGFyZU92ZXJsYXkoZ2FsbGVyeSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBzaG93T3ZlcmxheShpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICBib3VuY2VBbmltYXRpb24oJ2xlZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPj0gaW1hZ2VzRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICBib3VuY2VBbmltYXRpb24oJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgbG9hZEltYWdlKGN1cnJlbnRJbmRleCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcmVsb2FkTmV4dChjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgcHJlbG9hZFByZXYoY3VycmVudEluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZU9mZnNldCgpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uQ2hhbmdlKGN1cnJlbnRJbmRleCwgaW1hZ2VzRWxlbWVudHMubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIHRoZSBib3VuY2UgYW5pbWF0aW9uXG4gICAgICogQHBhcmFtIHsoJ2xlZnQnfCdyaWdodCcpfSBkaXJlY3Rpb24gLSBEaXJlY3Rpb24gb2YgdGhlIG1vdmVtZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gYm91bmNlQW5pbWF0aW9uKGRpcmVjdGlvbikge1xuICAgICAgICBzbGlkZXIuY2xhc3NOYW1lID0gJ2JvdW5jZS1mcm9tLScgKyBkaXJlY3Rpb247XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzbGlkZXIuY2xhc3NOYW1lID0gJyc7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlT2Zmc2V0KCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gLWN1cnJlbnRJbmRleCAqIDEwMCArICclJztcbiAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0aW9uID09PSAnZmFkZUluJykge1xuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0cy50cmFuc2Zvcm1zID9cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IHNsaWRlci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIG9mZnNldCArICcsMCwwKSdcbiAgICAgICAgICAgICAgICAgICAgOiBzbGlkZXIuc3R5bGUubGVmdCA9IG9mZnNldDtcbiAgICAgICAgICAgICAgICBzbGlkZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwcG9ydHMudHJhbnNmb3JtcyA/XG4gICAgICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IHNsaWRlci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIG9mZnNldCArICcsMCwwKSdcbiAgICAgICAgICAgICAgICA6IHNsaWRlci5zdHlsZS5sZWZ0ID0gb2Zmc2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ1NTIDNEIFRyYW5zZm9ybXMgdGVzdFxuICAgIGZ1bmN0aW9uIHRlc3RUcmFuc2Zvcm1zU3VwcG9ydCgpIHtcbiAgICAgICAgdmFyIGRpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZGl2LnN0eWxlLnBlcnNwZWN0aXZlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZGl2LnN0eWxlLndlYmtpdFBlcnNwZWN0aXZlICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICAvLyBJbmxpbmUgU1ZHIHRlc3RcbiAgICBmdW5jdGlvbiB0ZXN0U3ZnU3VwcG9ydCgpIHtcbiAgICAgICAgdmFyIGRpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSAnPHN2Zy8+JztcbiAgICAgICAgcmV0dXJuIChkaXYuZmlyc3RDaGlsZCAmJiBkaXYuZmlyc3RDaGlsZC5uYW1lc3BhY2VVUkkpID09PSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIH1cblxuICAgIC8vIEJvcnJvd2VkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3NlaXlyaWEvYm9vdHN0cmFwLXNsaWRlci9wdWxsLzY4MC9maWxlc1xuICAgIGZ1bmN0aW9uIHRlc3RQYXNzaXZlRXZlbnRzU3VwcG9ydCgpIHtcbiAgICAgICAgdmFyIHBhc3NpdmVFdmVudHMgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBwYXNzaXZlRXZlbnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0cyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgLyogU2lsZW5jZSB0aGUgZXJyb3IgYW5kIGNvbnRpbnVlICovIH1cblxuICAgICAgICByZXR1cm4gcGFzc2l2ZUV2ZW50cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVsb2FkTmV4dChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggLSBjdXJyZW50SW5kZXggPj0gb3B0aW9ucy5wcmVsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9hZEltYWdlKGluZGV4ICsgMSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcmVsb2FkTmV4dChpbmRleCArIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVsb2FkUHJldihpbmRleCkge1xuICAgICAgICBpZiAoY3VycmVudEluZGV4IC0gaW5kZXggPj0gb3B0aW9ucy5wcmVsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9hZEltYWdlKGluZGV4IC0gMSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcmVsb2FkUHJldihpbmRleCAtIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElFOCBmYWxsYmFja1xuICAgICAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gYGV2ZW50YCBhbmQgYGV2ZW50LnRhcmdldGAgYXJlIG5vdCBwcm92aWRlZCBpbiBJRThcbiAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuYmluZChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJRTggZmFsbGJhY2tcbiAgICAgICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCeUlEKGlkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveVBsdWdpbigpIHtcbiAgICAgICAgdW5iaW5kRXZlbnRzKCk7XG4gICAgICAgIGNsZWFyQ2FjaGVkRGF0YSgpO1xuICAgICAgICB1bmJpbmQoZG9jdW1lbnQsICdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWd1ZXR0ZUJveC1vdmVybGF5JykpO1xuICAgICAgICBkYXRhID0ge307XG4gICAgICAgIGN1cnJlbnRHYWxsZXJ5ID0gW107XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuOiBydW4sXG4gICAgICAgIHNob3c6IHNob3csXG4gICAgICAgIHNob3dOZXh0OiBzaG93TmV4dEltYWdlLFxuICAgICAgICBzaG93UHJldmlvdXM6IHNob3dQcmV2aW91c0ltYWdlLFxuICAgICAgICBoaWRlOiBoaWRlT3ZlcmxheSxcbiAgICAgICAgZGVzdHJveTogZGVzdHJveVBsdWdpblxuICAgIH07XG59KSk7XG4iLCJpbXBvcnQgbGlnaHRib3ggZnJvbSAnQG5vZGVtb2R1bGVzL2JhZ3VldHRlYm94LmpzL3NyYy9iYWd1ZXR0ZUJveCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgbGlnaHRib3gucnVuKCcuanMtZ2FsbGVyeScpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5hdicpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9nZ2xlLW5hdicpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyJyk7XG5cbiAgLy8gbmF2aWdhdGlvbiBidXR0b24gb24gY2xpY2ssIGJhc2ljIHRvZ2dsaW5nIG9mIGNsYXNzZXNcbiAgaWYgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFjdGl2ZScpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci0tbmF2LS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcInNcIjo0ODAsXCJtXCI6NjQwLFwibFwiOjcyMCxcInhsXCI6OTYwLFwieHhsXCI6MTEwMCxcInh4eGxcIjoxMjUwLFwieHh4eGxcIjoxNjAwfTsiLCJpbXBvcnQgYnJlYWtwb2ludHMgZnJvbSAnQHNoYXJlZC9icmVha3BvaW50cyc7XG5cbi8vIHNhbWUgdXNhZ2UgYXMgdGhlIG1lZGlhcXVlcnktc2Nzcy1taXhpbiwganVzdFxuLy8gcHJvdmlkZSB0aGUgc2hvcnRjb2RlIHVzZWQgaW4gdGhlIHNjc3MtZmlsZSBhbmQgaWYgaXRcbi8vIGlzIGEgY3VzdG9tIHF1ZXJ5LiB0aGlzIG1vZHVsZSByZXR1cm4gdHJ1ZSBpZiB0aGVcbi8vIGdpdmVuIGJyZWFrcG9pbnQgbWF0Y2hlcyBvciBmYWxzZSBpZiBpdCBkb2VzbnRcblxuZXhwb3J0IGRlZmF1bHQgc2hvcnRjb2RlID0+IHtcbiAgY29uc3QgdmFsdWUgPSBicmVha3BvaW50c1tzaG9ydGNvZGVdO1xuICBsZXQgcXVlcnkgPSAnJztcblxuICBpZiAodmFsdWUpIHtcbiAgICAvLyB3ZSBoYXZlIHRoZSBkZWZhdWx0IG1pbi13aWR0aFxuICAgIGNvbnN0IHB4VmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIHF1ZXJ5ID0gYChtaW4td2lkdGg6ICR7cHhWYWx1ZX1weClgO1xuICB9XG5cbiAgLy8gcmV0dXJuIHRoZSBtYXRjaGVzIGJvb2xlYW5cbiAgcmV0dXJuICh3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcyk7XG59O1xuIiwiaW1wb3J0IG1lZGlhcXVlcnkgZnJvbSAnQGhlbHBlcnMvbWVkaWFxdWVyeSc7XG5cbmNvbnN0IHNlY3Rpb25MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zZWN0aW9uY2hhbmdlJyk7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1uYXZfX2xpbmsnKTtcbmNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcGFnZScpO1xuXG5jb25zdCBjbGlja3NlY3Rpb24gPSBsaW5rID0+IHtcbiAgbGluay5jbGFzc0xpc3QuYWRkKCdsaW5rLXNlY3Rpb24tLWNoYW5nZScpO1xuXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIH0sIDEwMCk7IC8vIGFuaW1hdGlvbiBpcyAxNTBtcywgc28gd2FpdCAxMDBtc1xufTtcblxuLy8gc2ltdWxhdGUgc2VjdGlvbmNoYW5nZSBmb3IgbmF2aWdhdGlvbiBjbGlja3Mgb24gbGFyZ2UgZGlzcGxheXNcbi8vIGJ1dCBvbmx5IGlmIHdlIGFyZSBvbiBjb250YWN0L3dvcmsvYmxvZy9sZWdhbC1ub3RpY2UgcGFnZXNcbmNvbnN0IGNoYW5nZVNlY3Rpb25zID0gKG1lZGlhcXVlcnkoJ3hsJykgJiYgKFxuICBwYWdlLmNsYXNzTGlzdC5jb250YWlucygncGFnZS0td29yaycpIHx8XG4gIHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLS1jb250YWN0JykgfHxcbiAgcGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2UtLWJsb2cnKSB8fFxuICBwYWdlLmNsYXNzTGlzdC5jb250YWlucygncGFnZS0tbGVnYWwtbm90aWNlJylcbikpO1xuXG5jb25zdCBtZW51Q2xpY2sgPSBsaW5rID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gIGNvbnN0IHNlY3Rpb25zID0gWyAnd29yaycsICdmYWtlJywgJ2Jsb2cnLCAnY29udGFjdCcgXTtcbiAgbGV0IHNlY3Rpb25MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpbmstc2VjdGlvbi0tJHt0YXJnZXR9YCk7XG5cbiAgLy8gaWYgdGhlIHNlY3Rpb25jaGFuZ2UgbGluayBkb2VzIG5vdCBleGlzdCwgdGhlIG1vZGlmeSB0aGUgb25lIGV4aXN0aW5nXG4gIC8vIGFuZCBjaGFuZ2UgY29sb3IgKyB0YXJnZXRcbiAgaWYgKCFzZWN0aW9uTGluaykge1xuICAgIHNlY3Rpb25MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmstc2VjdGlvbicpO1xuICAgIHNlY3Rpb25zLmZvckVhY2goc2VjID0+IHtcbiAgICAgIHNlY3Rpb25MaW5rLmNsYXNzTGlzdC5yZW1vdmUoYGxpbmstc2VjdGlvbi0tJHtzZWN9YCk7XG4gICAgfSk7XG4gICAgc2VjdGlvbkxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgc2VjdGlvbkxpbmsuY2xhc3NMaXN0LmFkZChgbGluay1zZWN0aW9uLS0ke3RhcmdldH1gKTtcbiAgfVxuXG4gIGNsaWNrc2VjdGlvbihzZWN0aW9uTGluayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIGFsd2F5cyBhcHBseSB0aGlzIGV2ZW50IHRvIGFsbCB0aGUgc2VjdGlvbmxpbmtzXG4gIFsgLi4uc2VjdGlvbkxpbmtzIF0uZm9yRWFjaChzZWN0aW9uTGluayA9PiB7XG4gICAgc2VjdGlvbkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsaWNrc2VjdGlvbihzZWN0aW9uTGluayk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcblxuICAvLyBhbmQgdG8gdGhlIG1lbnUgbGlua3MgaWYgbmVlZGVkXG4gIGlmIChjaGFuZ2VTZWN0aW9ucykge1xuICAgIFsgLi4ubGlua3MgXS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1lbnVDbGljayhsaW5rKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuIiwiY29uc3QgY2xvc2VXZWxjb21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXdlbGNvbWUnKTtcblxuY29uc3Qgd2VsY29tZURvbmUgPSAoKSA9PiB7XG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtd2VsY29tZScpLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUtLWRvbmUnKTtcbiAgfSwgODAwKTsgLy8gYW5pbWF0aW9uIHRpbWUgaXMgNzAwbXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLy8gc2V0IHRoZSBldmVudCB0byB0aGUgZXNjLWtleSB0byBkaXNtaXNzIHNwbGFzaCBpbnRyb1xuICBkb2N1bWVudC5vbmtleWRvd24gPSBlID0+IHtcbiAgICBjb25zdCBldmVudCA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGNvbnN0IGlzSG9tZXBhZ2UgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2l0ZS0taG9tZXBhZ2UnKTtcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyAmJiBpc0hvbWVwYWdlICYmIGNsb3NlV2VsY29tZSkge1xuICAgICAgY2xvc2VXZWxjb21lLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICB3ZWxjb21lRG9uZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyByZW1vdmUgdGhlIHRyYW5zaXRpb24gYWZ0ZXIgaXQgY2hhbmdlZFxuICBpZiAoY2xvc2VXZWxjb21lKSB7XG4gICAgY2xvc2VXZWxjb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHdlbGNvbWVEb25lKTtcbiAgICBjbG9zZVdlbGNvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3ZWxjb21lRG9uZSk7XG4gIH1cbn07XG4iLCIvKiBGb250IEZhY2UgT2JzZXJ2ZXIgdjIuMC4xMyAtIMKpIEJyYW0gU3RlaW4uIExpY2Vuc2U6IEJTRC0zLUNsYXVzZSAqLyhmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt2YXIgZixnPVtdO2Z1bmN0aW9uIGwoYSl7Zy5wdXNoKGEpOzE9PWcubGVuZ3RoJiZmKCl9ZnVuY3Rpb24gbSgpe2Zvcig7Zy5sZW5ndGg7KWdbMF0oKSxnLnNoaWZ0KCl9Zj1mdW5jdGlvbigpe3NldFRpbWVvdXQobSl9O2Z1bmN0aW9uIG4oYSl7dGhpcy5hPXA7dGhpcy5iPXZvaWQgMDt0aGlzLmY9W107dmFyIGI9dGhpczt0cnl7YShmdW5jdGlvbihhKXtxKGIsYSl9LGZ1bmN0aW9uKGEpe3IoYixhKX0pfWNhdGNoKGMpe3IoYixjKX19dmFyIHA9MjtmdW5jdGlvbiB0KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiLGMpe2MoYSl9KX1mdW5jdGlvbiB1KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiKXtiKGEpfSl9ZnVuY3Rpb24gcShhLGIpe2lmKGEuYT09cCl7aWYoYj09YSl0aHJvdyBuZXcgVHlwZUVycm9yO3ZhciBjPSExO3RyeXt2YXIgZD1iJiZiLnRoZW47aWYobnVsbCE9YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJlwiZnVuY3Rpb25cIj09dHlwZW9mIGQpe2QuY2FsbChiLGZ1bmN0aW9uKGIpe2N8fHEoYSxiKTtjPSEwfSxmdW5jdGlvbihiKXtjfHxyKGEsYik7Yz0hMH0pO3JldHVybn19Y2F0Y2goZSl7Y3x8cihhLGUpO3JldHVybn1hLmE9MDthLmI9Yjt2KGEpfX1cbmZ1bmN0aW9uIHIoYSxiKXtpZihhLmE9PXApe2lmKGI9PWEpdGhyb3cgbmV3IFR5cGVFcnJvcjthLmE9MTthLmI9Yjt2KGEpfX1mdW5jdGlvbiB2KGEpe2woZnVuY3Rpb24oKXtpZihhLmEhPXApZm9yKDthLmYubGVuZ3RoOyl7dmFyIGI9YS5mLnNoaWZ0KCksYz1iWzBdLGQ9YlsxXSxlPWJbMl0sYj1iWzNdO3RyeXswPT1hLmE/XCJmdW5jdGlvblwiPT10eXBlb2YgYz9lKGMuY2FsbCh2b2lkIDAsYS5iKSk6ZShhLmIpOjE9PWEuYSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGQ/ZShkLmNhbGwodm9pZCAwLGEuYikpOmIoYS5iKSl9Y2F0Y2goaCl7YihoKX19fSl9bi5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jKHZvaWQgMCxhKX07bi5wcm90b3R5cGUuYz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGQsZSl7Yy5mLnB1c2goW2EsYixkLGVdKTt2KGMpfSl9O1xuZnVuY3Rpb24gdyhhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYixjKXtmdW5jdGlvbiBkKGMpe3JldHVybiBmdW5jdGlvbihkKXtoW2NdPWQ7ZSs9MTtlPT1hLmxlbmd0aCYmYihoKX19dmFyIGU9MCxoPVtdOzA9PWEubGVuZ3RoJiZiKGgpO2Zvcih2YXIgaz0wO2s8YS5sZW5ndGg7ays9MSl1KGFba10pLmMoZChrKSxjKX0pfWZ1bmN0aW9uIHgoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aDtkKz0xKXUoYVtkXSkuYyhiLGMpfSl9O3dpbmRvdy5Qcm9taXNlfHwod2luZG93LlByb21pc2U9bix3aW5kb3cuUHJvbWlzZS5yZXNvbHZlPXUsd2luZG93LlByb21pc2UucmVqZWN0PXQsd2luZG93LlByb21pc2UucmFjZT14LHdpbmRvdy5Qcm9taXNlLmFsbD13LHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuPW4ucHJvdG90eXBlLmMsd2luZG93LlByb21pc2UucHJvdG90eXBlW1wiY2F0Y2hcIl09bi5wcm90b3R5cGUuZyk7fSgpKTtcblxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbChhLGIpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsYiwhMSk6YS5hdHRhY2hFdmVudChcInNjcm9sbFwiLGIpfWZ1bmN0aW9uIG0oYSl7ZG9jdW1lbnQuYm9keT9hKCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uIGMoKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGMpO2EoKX0pOmRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsZnVuY3Rpb24gaygpe2lmKFwiaW50ZXJhY3RpdmVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZXx8XCJjb21wbGV0ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlKWRvY3VtZW50LmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsayksYSgpfSl9O2Z1bmN0aW9uIHIoYSl7dGhpcy5hPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dGhpcy5hLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpO3RoaXMuYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSk7dGhpcy5iPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5mPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZz0tMTt0aGlzLmIuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO3RoaXMuYy5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7XG50aGlzLmYuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO3RoaXMuaC5zdHlsZS5jc3NUZXh0PVwiZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjAwJTtoZWlnaHQ6MjAwJTtmb250LXNpemU6MTZweDttYXgtd2lkdGg6bm9uZTtcIjt0aGlzLmIuYXBwZW5kQ2hpbGQodGhpcy5oKTt0aGlzLmMuYXBwZW5kQ2hpbGQodGhpcy5mKTt0aGlzLmEuYXBwZW5kQ2hpbGQodGhpcy5iKTt0aGlzLmEuYXBwZW5kQ2hpbGQodGhpcy5jKX1cbmZ1bmN0aW9uIHQoYSxiKXthLmEuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO21pbi13aWR0aDoyMHB4O21pbi1oZWlnaHQ6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bzttYXJnaW46MDtwYWRkaW5nOjA7dG9wOi05OTlweDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1zeW50aGVzaXM6bm9uZTtmb250OlwiK2IrXCI7XCJ9ZnVuY3Rpb24geShhKXt2YXIgYj1hLmEub2Zmc2V0V2lkdGgsYz1iKzEwMDthLmYuc3R5bGUud2lkdGg9YytcInB4XCI7YS5jLnNjcm9sbExlZnQ9YzthLmIuc2Nyb2xsTGVmdD1hLmIuc2Nyb2xsV2lkdGgrMTAwO3JldHVybiBhLmchPT1iPyhhLmc9YiwhMCk6ITF9ZnVuY3Rpb24geihhLGIpe2Z1bmN0aW9uIGMoKXt2YXIgYT1rO3koYSkmJmEuYS5wYXJlbnROb2RlJiZiKGEuZyl9dmFyIGs9YTtsKGEuYixjKTtsKGEuYyxjKTt5KGEpfTtmdW5jdGlvbiBBKGEsYil7dmFyIGM9Ynx8e307dGhpcy5mYW1pbHk9YTt0aGlzLnN0eWxlPWMuc3R5bGV8fFwibm9ybWFsXCI7dGhpcy53ZWlnaHQ9Yy53ZWlnaHR8fFwibm9ybWFsXCI7dGhpcy5zdHJldGNoPWMuc3RyZXRjaHx8XCJub3JtYWxcIn12YXIgQj1udWxsLEM9bnVsbCxFPW51bGwsRj1udWxsO2Z1bmN0aW9uIEcoKXtpZihudWxsPT09QylpZihKKCkmJi9BcHBsZS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnZlbmRvcikpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtDPSEhYSYmNjAzPnBhcnNlSW50KGFbMV0sMTApfWVsc2UgQz0hMTtyZXR1cm4gQ31mdW5jdGlvbiBKKCl7bnVsbD09PUYmJihGPSEhZG9jdW1lbnQuZm9udHMpO3JldHVybiBGfVxuZnVuY3Rpb24gSygpe2lmKG51bGw9PT1FKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXthLnN0eWxlLmZvbnQ9XCJjb25kZW5zZWQgMTAwcHggc2Fucy1zZXJpZlwifWNhdGNoKGIpe31FPVwiXCIhPT1hLnN0eWxlLmZvbnR9cmV0dXJuIEV9ZnVuY3Rpb24gTChhLGIpe3JldHVyblthLnN0eWxlLGEud2VpZ2h0LEsoKT9hLnN0cmV0Y2g6XCJcIixcIjEwMHB4XCIsYl0uam9pbihcIiBcIil9XG5BLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxrPWF8fFwiQkVTYnN3eVwiLHE9MCxEPWJ8fDNFMyxIPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2lmKEooKSYmIUcoKSl7dmFyIE09bmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBlKCl7KG5ldyBEYXRlKS5nZXRUaW1lKCktSD49RD9iKCk6ZG9jdW1lbnQuZm9udHMubG9hZChMKGMsJ1wiJytjLmZhbWlseSsnXCInKSxrKS50aGVuKGZ1bmN0aW9uKGMpezE8PWMubGVuZ3RoP2EoKTpzZXRUaW1lb3V0KGUsMjUpfSxmdW5jdGlvbigpe2IoKX0pfWUoKX0pLE49bmV3IFByb21pc2UoZnVuY3Rpb24oYSxjKXtxPXNldFRpbWVvdXQoYyxEKX0pO1Byb21pc2UucmFjZShbTixNXSkudGhlbihmdW5jdGlvbigpe2NsZWFyVGltZW91dChxKTthKGMpfSxmdW5jdGlvbigpe2IoYyl9KX1lbHNlIG0oZnVuY3Rpb24oKXtmdW5jdGlvbiB1KCl7dmFyIGI7aWYoYj0tMSE9XG5mJiYtMSE9Z3x8LTEhPWYmJi0xIT1ofHwtMSE9ZyYmLTEhPWgpKGI9ZiE9ZyYmZiE9aCYmZyE9aCl8fChudWxsPT09QiYmKGI9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLEI9ISFiJiYoNTM2PnBhcnNlSW50KGJbMV0sMTApfHw1MzY9PT1wYXJzZUludChiWzFdLDEwKSYmMTE+PXBhcnNlSW50KGJbMl0sMTApKSksYj1CJiYoZj09diYmZz09diYmaD09dnx8Zj09dyYmZz09dyYmaD09d3x8Zj09eCYmZz09eCYmaD09eCkpLGI9IWI7YiYmKGQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGNsZWFyVGltZW91dChxKSxhKGMpKX1mdW5jdGlvbiBJKCl7aWYoKG5ldyBEYXRlKS5nZXRUaW1lKCktSD49RClkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxiKGMpO2Vsc2V7dmFyIGE9ZG9jdW1lbnQuaGlkZGVuO2lmKCEwPT09YXx8dm9pZCAwPT09YSlmPWUuYS5vZmZzZXRXaWR0aCxcbmc9bi5hLm9mZnNldFdpZHRoLGg9cC5hLm9mZnNldFdpZHRoLHUoKTtxPXNldFRpbWVvdXQoSSw1MCl9fXZhciBlPW5ldyByKGspLG49bmV3IHIoaykscD1uZXcgcihrKSxmPS0xLGc9LTEsaD0tMSx2PS0xLHc9LTEseD0tMSxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZC5kaXI9XCJsdHJcIjt0KGUsTChjLFwic2Fucy1zZXJpZlwiKSk7dChuLEwoYyxcInNlcmlmXCIpKTt0KHAsTChjLFwibW9ub3NwYWNlXCIpKTtkLmFwcGVuZENoaWxkKGUuYSk7ZC5hcHBlbmRDaGlsZChuLmEpO2QuYXBwZW5kQ2hpbGQocC5hKTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGQpO3Y9ZS5hLm9mZnNldFdpZHRoO3c9bi5hLm9mZnNldFdpZHRoO3g9cC5hLm9mZnNldFdpZHRoO0koKTt6KGUsZnVuY3Rpb24oYSl7Zj1hO3UoKX0pO3QoZSxMKGMsJ1wiJytjLmZhbWlseSsnXCIsc2Fucy1zZXJpZicpKTt6KG4sZnVuY3Rpb24oYSl7Zz1hO3UoKX0pO3QobixMKGMsJ1wiJytjLmZhbWlseSsnXCIsc2VyaWYnKSk7XG56KHAsZnVuY3Rpb24oYSl7aD1hO3UoKX0pO3QocCxMKGMsJ1wiJytjLmZhbWlseSsnXCIsbW9ub3NwYWNlJykpfSl9KX07XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9QTood2luZG93LkZvbnRGYWNlT2JzZXJ2ZXI9QSx3aW5kb3cuRm9udEZhY2VPYnNlcnZlci5wcm90b3R5cGUubG9hZD1BLnByb3RvdHlwZS5sb2FkKTt9KCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgW3tcImRlZmF1bHRcIjp7XCJmYW1pbHlcIjpcIkdlb21hbmlzdFwiLFwiZmFsbGJhY2tcIjpcInNhbnMtc2VyaWZcIixcIndlaWdodFwiOjYwMCxcInN0eWxlXCI6XCJub3JtYWxcIixcImZvbnRmYWNlXCI6dHJ1ZSxcImZpbGVcIjpcImdlb21hbmlzdC1tZWRpdW1cIn0sXCJyZWd1bGFyXCI6e1wiZmFtaWx5XCI6XCJHZW9tYW5pc3RcIixcImZhbGxiYWNrXCI6XCJzYW5zLXNlcmlmXCIsXCJ3ZWlnaHRcIjo0MDAsXCJzdHlsZVwiOlwibm9ybWFsXCIsXCJmb250ZmFjZVwiOnRydWUsXCJmaWxlXCI6XCJnZW9tYW5pc3QtcmVndWxhclwifSxcImNvZGVcIjp7XCJmYW1pbHlcIjpcIkZpcmEgQ29kZVwiLFwiZmFsbGJhY2tcIjpcIkhhY2ssIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2VcIixcIndlaWdodFwiOjQwMCxcInN0eWxlXCI6XCJub3JtYWxcIixcImZvbnRmYWNlXCI6ZmFsc2V9fV07IiwiaW1wb3J0IE9ic2VydmVyIGZyb20gJ0Bub2RlbW9kdWxlcy9mb250ZmFjZW9ic2VydmVyL2ZvbnRmYWNlb2JzZXJ2ZXInO1xuaW1wb3J0IGZvbnRzIGZyb20gJ0BzaGFyZWQvZm9udHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGZvbnRPYnNlcnZlcnMgPSBbXTtcblxuICAvLyBOTyBDT09LSUUgcG9saWN5XG4gIC8vIGlmIChzZXNzaW9uU3RvcmFnZS5mb250c0xvYWRlZCkge1xuICAvLyAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb250cy1sb2FkZWQnKTtcbiAgLy8gICByZXR1cm47XG4gIC8vIH1cblxuICBPYmplY3Qua2V5cyhmb250cykuZm9yRWFjaChmb250T2JqZWN0ID0+IHtcbiAgICBPYmplY3Qua2V5cyhmb250c1tmb250T2JqZWN0XSkuZm9yRWFjaChmb250ID0+IHtcbiAgICAgIGNvbnN0IGYgPSBmb250c1tmb250T2JqZWN0XVtmb250XTtcbiAgICAgIGlmIChmLmZvbnRmYWNlKSB7XG4gICAgICAgIGZvbnRPYnNlcnZlcnMucHVzaChcbiAgICAgICAgICBuZXcgT2JzZXJ2ZXIoZi5mYW1pbHkucmVwbGFjZSgvJy9nLCAnJyksIHtcbiAgICAgICAgICAgIHdlaWdodDogZi53ZWlnaHQsXG4gICAgICAgICAgICBzdHlsZTogZi5zdHlsZVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChmb250T2JzZXJ2ZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgUHJvbWlzZS5hbGwoZm9udE9ic2VydmVycylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgICAgICAvLyBOTyBDT09LSUUgcG9saWN5OiBPcHRpbWl6YXRpb24gZm9yIFJlcGVhdCBWaWV3c1xuICAgICAgICAvLyBzZXNzaW9uU3RvcmFnZS5mb250c0xvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCAqIGFzIGNvbXBvbmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy8qKi8qLmpzJztcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi80LWdsb2JhbC8qLmpzJztcbmltcG9ydCAqIGFzIG90aGVyIGZyb20gJy4vNC1nbG9iYWwvKiovKi5qcyc7XG5cbmNvbnN0IGxvYWQgPSBbIGdsb2JhbHMsIG90aGVyLCBjb21wb25lbnRzIF07XG5cbi8vIGxldHMgY2hlY2sgaWYgd2UgaGF2ZSBhIG1vZGVybiBicm93c2VyLCBhbmQgdGhlbiwgZW5oYW5jZSFcbi8vIEVkZ2UsIEZpcmVmb3gsIENocm9tZSwgT3BlcmEgYXMgd2VsbCBhcyBJRTEwKywgaU9TNysgYW5kIEFuZHJvaWQgNC40K1xuaWYgKCd2aXNpYmlsaXR5U3RhdGUnIGluIGRvY3VtZW50KSB7XG4gIC8vIHJlbW92ZSB0aGUgbm8tanMgY2xhc3NcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5cbiAgLy8gbG9hZCBhbGwgamF2YXNjcmlwdHMgZnJvbSBnbG9iYWwgYW5kIGFsbCBjb21wb25lbnRzIGF1dG9tYXRpY2FsbHlcbiAgbG9hZC5mb3JFYWNoKGl0ZW1zID0+IHtcbiAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpID0+IHtcbiAgICAgIGl0ZW1zW2ldKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGlmIHlvdSB3YW50IHRvIGxvYWQgc29tZSBjdXN0b20gc2NyaXB0cywgdGhhdCBzaG91bGQgbm90IHJlc2lkZSBpblxuICAvLyBnbG9iYWwgb3IgYW55IG9mIHRoZSBjb21wb25lbnRzLCBwcm92aWRlIHRoZW0gaGVyZSBhbmQgaW1wb3J0IG9uIHRvcFxuICAvLyBpbXBvcnQgJ3N0aCcgZnJvbSAnc29tZXdoZXJlJztcbiAgLy8gc3RoKHsgZm9vOiBiYXIgfSk7XG59XG4iXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJ0aGlzIiwibGVmdEFycm93IiwicmlnaHRBcnJvdyIsImNsb3NlWCIsIm9wdGlvbnMiLCJkZWZhdWx0cyIsImNhcHRpb25zIiwiYnV0dG9ucyIsImZ1bGxTY3JlZW4iLCJub1Njcm9sbGJhcnMiLCJib2R5Q2xhc3MiLCJ0aXRsZVRhZyIsImFzeW5jIiwicHJlbG9hZCIsImFuaW1hdGlvbiIsImFmdGVyU2hvdyIsImFmdGVySGlkZSIsIm9uQ2hhbmdlIiwib3ZlcmxheUJhY2tncm91bmRDb2xvciIsInN1cHBvcnRzIiwib3ZlcmxheSIsInNsaWRlciIsInByZXZpb3VzQnV0dG9uIiwibmV4dEJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiY3VycmVudEdhbGxlcnkiLCJjdXJyZW50SW5kZXgiLCJpc092ZXJsYXlWaXNpYmxlIiwidG91Y2giLCJ0b3VjaEZsYWciLCJyZWdleCIsImRhdGEiLCJpbWFnZXNFbGVtZW50cyIsImRvY3VtZW50TGFzdEZvY3VzIiwib3ZlcmxheUNsaWNrSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJpbmRleE9mIiwiaGlkZU92ZXJsYXkiLCJwcmV2aW91c0J1dHRvbkNsaWNrSGFuZGxlciIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsInNob3dQcmV2aW91c0ltYWdlIiwibmV4dEJ1dHRvbkNsaWNrSGFuZGxlciIsInNob3dOZXh0SW1hZ2UiLCJjbG9zZUJ1dHRvbkNsaWNrSGFuZGxlciIsInRvdWNoc3RhcnRIYW5kbGVyIiwiY291bnQiLCJtdWx0aXRvdWNoIiwic3RhcnRYIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInN0YXJ0WSIsInBhZ2VZIiwidG91Y2htb3ZlSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ0b3VjaEV2ZW50IiwidG91Y2hlcyIsInRvdWNoZW5kSGFuZGxlciIsImNvbnRleHRtZW51SGFuZGxlciIsInRyYXBGb2N1c0luc2lkZU92ZXJsYXkiLCJzdHlsZSIsImRpc3BsYXkiLCJjb250YWlucyIsImluaXRGb2N1cyIsImZvckVhY2giLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGxiYWNrIiwidGhpc0FyZyIsImkiLCJsZW5ndGgiLCJjYWxsIiwiZmlsdGVyIiwiYSIsImIiLCJjIiwiZCIsImUiLCJwdXNoIiwicnVuIiwic2VsZWN0b3IiLCJ1c2VyT3B0aW9ucyIsInRyYW5zZm9ybXMiLCJ0ZXN0VHJhbnNmb3Jtc1N1cHBvcnQiLCJzdmciLCJ0ZXN0U3ZnU3VwcG9ydCIsInBhc3NpdmVFdmVudHMiLCJ0ZXN0UGFzc2l2ZUV2ZW50c1N1cHBvcnQiLCJidWlsZE92ZXJsYXkiLCJyZW1vdmVGcm9tQ2FjaGUiLCJiaW5kSW1hZ2VDbGlja0xpc3RlbmVycyIsImdhbGxlcnlOb2RlTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdG9yRGF0YSIsImdhbGxlcmllcyIsIm5vZGVMaXN0IiwiZ2FsbGVyeUVsZW1lbnQiLCJ0YWdzTm9kZUxpc3QiLCJ0YWdOYW1lIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiaWdub3JlQ2xhc3MiLCJ0ZXN0IiwiaHJlZiIsImdhbGxlcnkiLCJpbWFnZUVsZW1lbnQiLCJpbWFnZUluZGV4IiwiaW1hZ2VFbGVtZW50Q2xpY2tIYW5kbGVyIiwicHJlcGFyZU92ZXJsYXkiLCJzaG93T3ZlcmxheSIsImltYWdlSXRlbSIsImV2ZW50SGFuZGxlciIsImJpbmQiLCJjbGVhckNhY2hlZERhdGEiLCJoYXNPd25Qcm9wZXJ0eSIsInVuYmluZCIsImdldEJ5SUQiLCJjcmVhdGUiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsImJpbmRFdmVudHMiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJwYXNzaXZlIiwidW5iaW5kRXZlbnRzIiwic2V0T3B0aW9ucyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImltYWdlc0ZpZ3VyZXNJZHMiLCJpbWFnZXNDYXB0aW9uc0lkcyIsImZ1bGxJbWFnZSIsImpvaW4iLCJuZXdPcHRpb25zIiwiaXRlbSIsInRyYW5zaXRpb24iLCJ3ZWJraXRUcmFuc2l0aW9uIiwid2luZG93IiwiYmFja2dyb3VuZENvbG9yIiwiY2hvc2VuSW1hZ2VJbmRleCIsImRvY3VtZW50RWxlbWVudCIsIm92ZXJmbG93WSIsImJvZHkiLCJsb2FkSW1hZ2UiLCJwcmVsb2FkTmV4dCIsInByZWxvYWRQcmV2IiwidXBkYXRlT2Zmc2V0IiwiZW50ZXJGdWxsU2NyZWVuIiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsImFjdGl2ZUVsZW1lbnQiLCJmb2N1cyIsInJlcXVlc3RGdWxsc2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwibW96Q2FuY2VsRnVsbFNjcmVlbiIsIndlYmtpdEV4aXRGdWxsc2NyZWVuIiwicmVtb3ZlIiwiaW5kZXgiLCJpbWFnZUNvbnRhaW5lciIsImdhbGxlcnlJdGVtIiwidGh1bWJuYWlsRWxlbWVudCIsImltYWdlQ2FwdGlvbiIsImdldEF0dHJpYnV0ZSIsInRpdGxlIiwiaW1hZ2VTcmMiLCJnZXRJbWFnZVNyYyIsImZpZ3VyZSIsImZpZ2NhcHRpb24iLCJpbWFnZSIsIm9ubG9hZCIsInNwaW5uZXIiLCJxdWVyeVNlbGVjdG9yIiwiYWx0IiwicmVzdWx0IiwiZGF0YXNldCIsInNyY3MiLCJzdWJzdHJpbmciLCJpc05hTiIsInJlcGxhY2UiLCJrZXlzIiwiT2JqZWN0Iiwic29ydCIsInBhcnNlSW50Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNob3ciLCJib3VuY2VBbmltYXRpb24iLCJkaXJlY3Rpb24iLCJvZmZzZXQiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwibGVmdCIsImRpdiIsInBlcnNwZWN0aXZlIiwid2Via2l0UGVyc3BlY3RpdmUiLCJuYW1lc3BhY2VVUkkiLCJvcHRzIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJzcmNFbGVtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwiZGVzdHJveVBsdWdpbiIsInNob3dOZXh0Iiwic2hvd1ByZXZpb3VzIiwiaGlkZSIsImRlc3Ryb3kiLCJsaWdodGJveCIsIm5hdiIsImJ1dHRvbiIsImhlYWRlciIsInRvZ2dsZSIsInNob3J0Y29kZSIsInZhbHVlIiwiYnJlYWtwb2ludHMiLCJxdWVyeSIsInB4VmFsdWUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInNlY3Rpb25MaW5rcyIsImxpbmtzIiwicGFnZSIsImNsaWNrc2VjdGlvbiIsImxpbmsiLCJsb2NhdGlvbiIsImNoYW5nZVNlY3Rpb25zIiwibWVkaWFxdWVyeSIsIm1lbnVDbGljayIsInNlY3Rpb25zIiwic2VjdGlvbkxpbmsiLCJzZWMiLCJjbG9zZVdlbGNvbWUiLCJ3ZWxjb21lRG9uZSIsIm9ua2V5ZG93biIsImlzSG9tZXBhZ2UiLCJmIiwiZyIsImwiLCJtIiwic2hpZnQiLCJuIiwicCIsInEiLCJyIiwidCIsInUiLCJUeXBlRXJyb3IiLCJ0aGVuIiwidiIsImgiLCJ3IiwiayIsIngiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJhY2UiLCJhbGwiLCJyZWFkeVN0YXRlIiwiY3JlYXRlVGV4dE5vZGUiLCJjc3NUZXh0IiwieSIsIm9mZnNldFdpZHRoIiwic2Nyb2xsTGVmdCIsInNjcm9sbFdpZHRoIiwieiIsInBhcmVudE5vZGUiLCJBIiwiZmFtaWx5Iiwid2VpZ2h0Iiwic3RyZXRjaCIsIkIiLCJDIiwiRSIsIkYiLCJHIiwiSiIsIm5hdmlnYXRvciIsInZlbmRvciIsImV4ZWMiLCJ1c2VyQWdlbnQiLCJmb250cyIsIksiLCJmb250IiwiTCIsImxvYWQiLCJEIiwiSCIsIkRhdGUiLCJnZXRUaW1lIiwiTSIsIk4iLCJjbGVhclRpbWVvdXQiLCJJIiwiaGlkZGVuIiwiZGlyIiwiZm9udE9ic2VydmVycyIsImZvbnRPYmplY3QiLCJmb250ZmFjZSIsIk9ic2VydmVyIiwiZ2xvYmFscyIsIm90aGVyIiwiY29tcG9uZW50cyIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0NBQUE7Ozs7Ozs7OztDQVNDLGVBQVVBLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3RCO0NBQ0EsWUFBSSxPQUFPQyxTQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxVQUFPQyxHQUEzQyxFQUFnRDtDQUM1Q0Qsc0JBQU9ELE9BQVBDO0NBQ0gsU0FGRCxNQUVPLEFBQWlDO0NBQ3BDRSwwQkFBQSxHQUFpQkgsU0FBakI7Q0FDSCxTQUZNO0NBS1YsS0FUQSxFQVNDSSxjQVRELEVBU08sWUFBWTtBQUNoQjs7O0NBR0EsWUFBSUMsWUFBWSxpQ0FDUixzRkFEUSxHQUVOLDZEQUZNLEdBR1IsUUFIUjtDQUFBLFlBSUlDLGFBQWEsaUNBQ1Qsc0ZBRFMsR0FFUCw2REFGTyxHQUdULFFBUFI7Q0FBQSxZQVFJQyxTQUFTLGlDQUNMLGdEQURLLEdBRUwsdUNBRkssR0FHTCx1Q0FISyxHQUlMLFlBWlI7O0NBY0EsWUFBSUMsVUFBVSxFQUFkO0NBQUEsWUFDSUMsV0FBVztDQUNQQyxzQkFBVSxJQURI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
