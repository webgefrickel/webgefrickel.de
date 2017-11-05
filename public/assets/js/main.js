(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var baguetteBox_min = createCommonjsModule(function (module, exports) {
  /*!
   * baguetteBox.js
   * @author  feimosi
   * @version 1.9.1
   * @url https://github.com/feimosi/baguetteBox.js
   */
  !function (t, e) {
    "use strict";
    "function" == typeof undefined && undefined.amd ? undefined(e) : module.exports = e();
  }(commonjsGlobal, function () {
    "use strict";
    function t(t, e) {
      var n = document.querySelectorAll(t),
          o = { galleries: [], nodeList: n };D[t] = o, [].forEach.call(n, function (t) {
        e && e.filter && (z = e.filter);var n = [];if (n = "A" === t.tagName ? [t] : t.getElementsByTagName("a"), 0 !== (n = [].filter.call(n, function (t) {
          if (-1 === t.className.indexOf(e && e.ignoreClass)) return z.test(t.href);
        })).length) {
          var i = [];[].forEach.call(n, function (t, n) {
            var o = function o(t) {
              t.preventDefault ? t.preventDefault() : t.returnValue = !1, r(i, e), u(n);
            },
                a = { eventHandler: o, imageElement: t };x(t, "click", o), i.push(a);
          }), o.galleries.push(i);
        }
      });
    }function e() {
      for (var t in D) D.hasOwnProperty(t) && n(t);
    }function n(t) {
      if (D.hasOwnProperty(t)) {
        var e = D[t].galleries;[].forEach.call(e, function (t) {
          [].forEach.call(t, function (t) {
            E(t.imageElement, "click", t.eventHandler);
          }), X === t && (X = []);
        }), delete D[t];
      }
    }function o() {
      if (N = B("baguetteBox-overlay")) return A = B("baguetteBox-slider"), L = B("previous-button"), S = B("next-button"), void (P = B("close-button"));(N = T("div")).setAttribute("role", "dialog"), N.id = "baguetteBox-overlay", document.getElementsByTagName("body")[0].appendChild(N), (A = T("div")).id = "baguetteBox-slider", N.appendChild(A), (L = T("button")).setAttribute("type", "button"), L.id = "previous-button", L.setAttribute("aria-label", "Previous"), L.innerHTML = j.svg ? F : "&lt;", N.appendChild(L), (S = T("button")).setAttribute("type", "button"), S.id = "next-button", S.setAttribute("aria-label", "Next"), S.innerHTML = j.svg ? H : "&gt;", N.appendChild(S), (P = T("button")).setAttribute("type", "button"), P.id = "close-button", P.setAttribute("aria-label", "Close"), P.innerHTML = j.svg ? I : "&times;", N.appendChild(P), L.className = S.className = P.className = "baguetteBox-button", a();
    }function i(t) {
      switch (t.keyCode) {case 37:
          h();break;case 39:
          p();break;case 27:
          g();}
    }function a() {
      x(N, "click", W), x(L, "click", G), x(S, "click", J), x(P, "click", K), x(A, "contextmenu", _), x(N, "touchstart", Q), x(N, "touchmove", Z), x(N, "touchend", $), x(document, "focus", tt, !0);
    }function l() {
      E(N, "click", W), E(L, "click", G), E(S, "click", J), E(P, "click", K), E(A, "contextmenu", _), E(N, "touchstart", Q), E(N, "touchmove", Z), E(N, "touchend", $), E(document, "focus", tt, !0);
    }function r(t, e) {
      if (X !== t) {
        for (X = t, s(e); A.firstChild;) A.removeChild(A.firstChild);V.length = 0;for (var n, o = [], i = [], a = 0; a < t.length; a++) (n = T("div")).className = "full-image", n.id = "baguette-img-" + a, V.push(n), o.push("baguetteBox-figure-" + a), i.push("baguetteBox-figcaption-" + a), A.appendChild(V[a]);N.setAttribute("aria-labelledby", o.join(" ")), N.setAttribute("aria-describedby", i.join(" "));
      }
    }function s(t) {
      t || (t = {});for (var e in q) Y[e] = q[e], "undefined" != typeof t[e] && (Y[e] = t[e]);A.style.transition = A.style.webkitTransition = "fadeIn" === Y.animation ? "opacity .4s ease" : "slideIn" === Y.animation ? "" : "none", "auto" === Y.buttons && ("ontouchstart" in window || 1 === X.length) && (Y.buttons = !1), L.style.display = S.style.display = Y.buttons ? "" : "none";try {
        N.style.backgroundColor = Y.overlayBackgroundColor;
      } catch (n) {}
    }function u(t) {
      Y.noScrollbars && (document.documentElement.style.overflowY = "hidden", document.body.style.overflowY = "scroll"), "block" !== N.style.display && (x(document, "keydown", i), R = { count: 0, startX: null, startY: null }, m(M = t, function () {
        k(M), C(M);
      }), y(), N.style.display = "block", Y.fullScreen && d(), setTimeout(function () {
        N.className = "visible", Y.bodyClass && document.body.classList && document.body.classList.add(Y.bodyClass), Y.afterShow && Y.afterShow();
      }, 50), Y.onChange && Y.onChange(M, V.length), U = document.activeElement, c());
    }function c() {
      Y.buttons ? L.focus() : P.focus();
    }function d() {
      N.requestFullscreen ? N.requestFullscreen() : N.webkitRequestFullscreen ? N.webkitRequestFullscreen() : N.mozRequestFullScreen && N.mozRequestFullScreen();
    }function f() {
      document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
    }function g() {
      Y.noScrollbars && (document.documentElement.style.overflowY = "auto", document.body.style.overflowY = "auto"), "none" !== N.style.display && (E(document, "keydown", i), N.className = "", setTimeout(function () {
        N.style.display = "none", f(), Y.bodyClass && document.body.classList && document.body.classList.remove(Y.bodyClass), Y.afterHide && Y.afterHide(), U && U.focus();
      }, 500));
    }function m(t, e) {
      var n = V[t],
          o = X[t];if (void 0 !== n && void 0 !== o) if (n.getElementsByTagName("img")[0]) e && e();else {
        var i = o.imageElement,
            a = i.getElementsByTagName("img")[0],
            l = "function" == typeof Y.captions ? Y.captions.call(X, i) : i.getAttribute("data-caption") || i.title,
            r = b(i),
            s = T("figure");if (s.id = "baguetteBox-figure-" + t, s.innerHTML = '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>', Y.captions && l) {
          var u = T("figcaption");u.id = "baguetteBox-figcaption-" + t, u.innerHTML = l, s.appendChild(u);
        }n.appendChild(s);var c = T("img");c.onload = function () {
          var n = document.querySelector("#baguette-img-" + t + " .baguetteBox-spinner");s.removeChild(n), !Y.async && e && e();
        }, c.setAttribute("src", r), c.alt = a ? a.alt || "" : "", Y.titleTag && l && (c.title = l), s.appendChild(c), Y.async && e && e();
      }
    }function b(t) {
      var e = t.href;if (t.dataset) {
        var n = [];for (var o in t.dataset) "at-" !== o.substring(0, 3) || isNaN(o.substring(3)) || (n[o.replace("at-", "")] = t.dataset[o]);for (var i = Object.keys(n).sort(function (t, e) {
          return parseInt(t, 10) < parseInt(e, 10) ? -1 : 1;
        }), a = window.innerWidth * window.devicePixelRatio, l = 0; l < i.length - 1 && i[l] < a;) l++;e = n[i[l]] || e;
      }return e;
    }function p() {
      var t;return M <= V.length - 2 ? (M++, y(), k(M), t = !0) : Y.animation && (A.className = "bounce-from-right", setTimeout(function () {
        A.className = "";
      }, 400), t = !1), Y.onChange && Y.onChange(M, V.length), t;
    }function h() {
      var t;return M >= 1 ? (M--, y(), C(M), t = !0) : Y.animation && (A.className = "bounce-from-left", setTimeout(function () {
        A.className = "";
      }, 400), t = !1), Y.onChange && Y.onChange(M, V.length), t;
    }function y() {
      var t = 100 * -M + "%";"fadeIn" === Y.animation ? (A.style.opacity = 0, setTimeout(function () {
        j.transforms ? A.style.transform = A.style.webkitTransform = "translate3d(" + t + ",0,0)" : A.style.left = t, A.style.opacity = 1;
      }, 400)) : j.transforms ? A.style.transform = A.style.webkitTransform = "translate3d(" + t + ",0,0)" : A.style.left = t;
    }function v() {
      var t = T("div");return "undefined" != typeof t.style.perspective || "undefined" != typeof t.style.webkitPerspective;
    }function w() {
      var t = T("div");return t.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (t.firstChild && t.firstChild.namespaceURI);
    }function k(t) {
      t - M >= Y.preload || m(t + 1, function () {
        k(t + 1);
      });
    }function C(t) {
      M - t >= Y.preload || m(t - 1, function () {
        C(t - 1);
      });
    }function x(t, e, n, o) {
      t.addEventListener ? t.addEventListener(e, n, o) : t.attachEvent("on" + e, function (t) {
        (t = t || window.event).target = t.target || t.srcElement, n(t);
      });
    }function E(t, e, n, o) {
      t.removeEventListener ? t.removeEventListener(e, n, o) : t.detachEvent("on" + e, n);
    }function B(t) {
      return document.getElementById(t);
    }function T(t) {
      return document.createElement(t);
    }var N,
        A,
        L,
        S,
        P,
        F = '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        H = '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        I = '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',
        Y = {},
        q = { captions: !0, buttons: "auto", fullScreen: !1, noScrollbars: !1, bodyClass: "baguetteBox-open", titleTag: !1, async: !1, preload: 2, animation: "slideIn", afterShow: null, afterHide: null, onChange: null, overlayBackgroundColor: "rgba(0,0,0,.8)" },
        j = {},
        X = [],
        M = 0,
        R = {},
        O = !1,
        z = /.+\.(gif|jpe?g|png|webp)/i,
        D = {},
        V = [],
        U = null,
        W = function W(t) {
      -1 !== t.target.id.indexOf("baguette-img") && g();
    },
        G = function G(t) {
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, h();
    },
        J = function J(t) {
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, p();
    },
        K = function K(t) {
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, g();
    },
        Q = function Q(t) {
      R.count++, R.count > 1 && (R.multitouch = !0), R.startX = t.changedTouches[0].pageX, R.startY = t.changedTouches[0].pageY;
    },
        Z = function Z(t) {
      if (!O && !R.multitouch) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1;var e = t.touches[0] || t.changedTouches[0];e.pageX - R.startX > 40 ? (O = !0, h()) : e.pageX - R.startX < -40 ? (O = !0, p()) : R.startY - e.pageY > 100 && g();
      }
    },
        $ = function $() {
      R.count--, R.count <= 0 && (R.multitouch = !1), O = !1;
    },
        _ = function _() {
      $();
    },
        tt = function tt(t) {
      "block" === N.style.display && N.contains && !N.contains(t.target) && (t.stopPropagation(), c());
    };return [].forEach || (Array.prototype.forEach = function (t, e) {
      for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this);
    }), [].filter || (Array.prototype.filter = function (t, e, n, o, i) {
      for (n = this, o = [], i = 0; i < n.length; i++) t.call(e, n[i], i, n) && o.push(n[i]);return o;
    }), { run: function run(e, i) {
        j.transforms = v(), j.svg = w(), o(), n(e), t(e, i);
      }, showNext: p, showPrevious: h, destroy: function destroy() {
        l(), e(), E(document, "keydown", i), document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")), D = {}, X = [], M = 0;
      } };
  });
});

var _components_gallery$gallery = (() => {
  baguetteBox_min.run('.js-gallery');
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
    'use strict';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhZ3VldHRlYm94LmpzL2Rpc3QvYmFndWV0dGVCb3gubWluLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbmF2L25hdi5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb250ZmFjZW9ic2VydmVyL2ZvbnRmYWNlb2JzZXJ2ZXIuanMiLCIuLi8uLi8uLi9zcmMvamF2YXNjcmlwdHMvMS1zaGFyZWQvZm9udHMuanMiLCIuLi8uLi8uLi9zcmMvamF2YXNjcmlwdHMvNC1nbG9iYWwvZm9udGxvYWRlci5qcyIsIi4uLy4uLy4uL3NyYy9qYXZhc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogYmFndWV0dGVCb3guanNcbiAqIEBhdXRob3IgIGZlaW1vc2lcbiAqIEB2ZXJzaW9uIDEuOS4xXG4gKiBAdXJsIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWltb3NpL2JhZ3VldHRlQm94LmpzXG4gKi9cbiFmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSgpOnQuYmFndWV0dGVCb3g9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LGUpe3ZhciBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodCksbz17Z2FsbGVyaWVzOltdLG5vZGVMaXN0Om59O0RbdF09byxbXS5mb3JFYWNoLmNhbGwobixmdW5jdGlvbih0KXtlJiZlLmZpbHRlciYmKHo9ZS5maWx0ZXIpO3ZhciBuPVtdO2lmKG49XCJBXCI9PT10LnRhZ05hbWU/W3RdOnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpLDAhPT0obj1bXS5maWx0ZXIuY2FsbChuLGZ1bmN0aW9uKHQpe2lmKC0xPT09dC5jbGFzc05hbWUuaW5kZXhPZihlJiZlLmlnbm9yZUNsYXNzKSlyZXR1cm4gei50ZXN0KHQuaHJlZil9KSkubGVuZ3RoKXt2YXIgaT1bXTtbXS5mb3JFYWNoLmNhbGwobixmdW5jdGlvbih0LG4pe3ZhciBvPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQ/dC5wcmV2ZW50RGVmYXVsdCgpOnQucmV0dXJuVmFsdWU9ITEscihpLGUpLHUobil9LGE9e2V2ZW50SGFuZGxlcjpvLGltYWdlRWxlbWVudDp0fTt4KHQsXCJjbGlja1wiLG8pLGkucHVzaChhKX0pLG8uZ2FsbGVyaWVzLnB1c2goaSl9fSl9ZnVuY3Rpb24gZSgpe2Zvcih2YXIgdCBpbiBEKUQuaGFzT3duUHJvcGVydHkodCkmJm4odCl9ZnVuY3Rpb24gbih0KXtpZihELmhhc093blByb3BlcnR5KHQpKXt2YXIgZT1EW3RdLmdhbGxlcmllcztbXS5mb3JFYWNoLmNhbGwoZSxmdW5jdGlvbih0KXtbXS5mb3JFYWNoLmNhbGwodCxmdW5jdGlvbih0KXtFKHQuaW1hZ2VFbGVtZW50LFwiY2xpY2tcIix0LmV2ZW50SGFuZGxlcil9KSxYPT09dCYmKFg9W10pfSksZGVsZXRlIERbdF19fWZ1bmN0aW9uIG8oKXtpZihOPUIoXCJiYWd1ZXR0ZUJveC1vdmVybGF5XCIpKXJldHVybiBBPUIoXCJiYWd1ZXR0ZUJveC1zbGlkZXJcIiksTD1CKFwicHJldmlvdXMtYnV0dG9uXCIpLFM9QihcIm5leHQtYnV0dG9uXCIpLHZvaWQoUD1CKFwiY2xvc2UtYnV0dG9uXCIpKTsoTj1UKFwiZGl2XCIpKS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkaWFsb2dcIiksTi5pZD1cImJhZ3VldHRlQm94LW92ZXJsYXlcIixkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoTiksKEE9VChcImRpdlwiKSkuaWQ9XCJiYWd1ZXR0ZUJveC1zbGlkZXJcIixOLmFwcGVuZENoaWxkKEEpLChMPVQoXCJidXR0b25cIikpLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxMLmlkPVwicHJldmlvdXMtYnV0dG9uXCIsTC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJQcmV2aW91c1wiKSxMLmlubmVySFRNTD1qLnN2Zz9GOlwiJmx0O1wiLE4uYXBwZW5kQ2hpbGQoTCksKFM9VChcImJ1dHRvblwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFMuaWQ9XCJuZXh0LWJ1dHRvblwiLFMuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiTmV4dFwiKSxTLmlubmVySFRNTD1qLnN2Zz9IOlwiJmd0O1wiLE4uYXBwZW5kQ2hpbGQoUyksKFA9VChcImJ1dHRvblwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLFAuaWQ9XCJjbG9zZS1idXR0b25cIixQLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIkNsb3NlXCIpLFAuaW5uZXJIVE1MPWouc3ZnP0k6XCImdGltZXM7XCIsTi5hcHBlbmRDaGlsZChQKSxMLmNsYXNzTmFtZT1TLmNsYXNzTmFtZT1QLmNsYXNzTmFtZT1cImJhZ3VldHRlQm94LWJ1dHRvblwiLGEoKX1mdW5jdGlvbiBpKHQpe3N3aXRjaCh0LmtleUNvZGUpe2Nhc2UgMzc6aCgpO2JyZWFrO2Nhc2UgMzk6cCgpO2JyZWFrO2Nhc2UgMjc6ZygpfX1mdW5jdGlvbiBhKCl7eChOLFwiY2xpY2tcIixXKSx4KEwsXCJjbGlja1wiLEcpLHgoUyxcImNsaWNrXCIsSikseChQLFwiY2xpY2tcIixLKSx4KEEsXCJjb250ZXh0bWVudVwiLF8pLHgoTixcInRvdWNoc3RhcnRcIixRKSx4KE4sXCJ0b3VjaG1vdmVcIixaKSx4KE4sXCJ0b3VjaGVuZFwiLCQpLHgoZG9jdW1lbnQsXCJmb2N1c1wiLHR0LCEwKX1mdW5jdGlvbiBsKCl7RShOLFwiY2xpY2tcIixXKSxFKEwsXCJjbGlja1wiLEcpLEUoUyxcImNsaWNrXCIsSiksRShQLFwiY2xpY2tcIixLKSxFKEEsXCJjb250ZXh0bWVudVwiLF8pLEUoTixcInRvdWNoc3RhcnRcIixRKSxFKE4sXCJ0b3VjaG1vdmVcIixaKSxFKE4sXCJ0b3VjaGVuZFwiLCQpLEUoZG9jdW1lbnQsXCJmb2N1c1wiLHR0LCEwKX1mdW5jdGlvbiByKHQsZSl7aWYoWCE9PXQpe2ZvcihYPXQscyhlKTtBLmZpcnN0Q2hpbGQ7KUEucmVtb3ZlQ2hpbGQoQS5maXJzdENoaWxkKTtWLmxlbmd0aD0wO2Zvcih2YXIgbixvPVtdLGk9W10sYT0wO2E8dC5sZW5ndGg7YSsrKShuPVQoXCJkaXZcIikpLmNsYXNzTmFtZT1cImZ1bGwtaW1hZ2VcIixuLmlkPVwiYmFndWV0dGUtaW1nLVwiK2EsVi5wdXNoKG4pLG8ucHVzaChcImJhZ3VldHRlQm94LWZpZ3VyZS1cIithKSxpLnB1c2goXCJiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLVwiK2EpLEEuYXBwZW5kQ2hpbGQoVlthXSk7Ti5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIixvLmpvaW4oXCIgXCIpKSxOLnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIixpLmpvaW4oXCIgXCIpKX19ZnVuY3Rpb24gcyh0KXt0fHwodD17fSk7Zm9yKHZhciBlIGluIHEpWVtlXT1xW2VdLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0W2VdJiYoWVtlXT10W2VdKTtBLnN0eWxlLnRyYW5zaXRpb249QS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiZmFkZUluXCI9PT1ZLmFuaW1hdGlvbj9cIm9wYWNpdHkgLjRzIGVhc2VcIjpcInNsaWRlSW5cIj09PVkuYW5pbWF0aW9uP1wiXCI6XCJub25lXCIsXCJhdXRvXCI9PT1ZLmJ1dHRvbnMmJihcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHwxPT09WC5sZW5ndGgpJiYoWS5idXR0b25zPSExKSxMLnN0eWxlLmRpc3BsYXk9Uy5zdHlsZS5kaXNwbGF5PVkuYnV0dG9ucz9cIlwiOlwibm9uZVwiO3RyeXtOLnN0eWxlLmJhY2tncm91bmRDb2xvcj1ZLm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3J9Y2F0Y2gobil7fX1mdW5jdGlvbiB1KHQpe1kubm9TY3JvbGxiYXJzJiYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WT1cImhpZGRlblwiLGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZPVwic2Nyb2xsXCIpLFwiYmxvY2tcIiE9PU4uc3R5bGUuZGlzcGxheSYmKHgoZG9jdW1lbnQsXCJrZXlkb3duXCIsaSksUj17Y291bnQ6MCxzdGFydFg6bnVsbCxzdGFydFk6bnVsbH0sbShNPXQsZnVuY3Rpb24oKXtrKE0pLEMoTSl9KSx5KCksTi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixZLmZ1bGxTY3JlZW4mJmQoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Ti5jbGFzc05hbWU9XCJ2aXNpYmxlXCIsWS5ib2R5Q2xhc3MmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0JiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoWS5ib2R5Q2xhc3MpLFkuYWZ0ZXJTaG93JiZZLmFmdGVyU2hvdygpfSw1MCksWS5vbkNoYW5nZSYmWS5vbkNoYW5nZShNLFYubGVuZ3RoKSxVPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsYygpKX1mdW5jdGlvbiBjKCl7WS5idXR0b25zP0wuZm9jdXMoKTpQLmZvY3VzKCl9ZnVuY3Rpb24gZCgpe04ucmVxdWVzdEZ1bGxzY3JlZW4/Ti5yZXF1ZXN0RnVsbHNjcmVlbigpOk4ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4/Ti53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOk4ubW96UmVxdWVzdEZ1bGxTY3JlZW4mJk4ubW96UmVxdWVzdEZ1bGxTY3JlZW4oKX1mdW5jdGlvbiBmKCl7ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4/ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTpkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuP2RvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTpkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbiYmZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKX1mdW5jdGlvbiBnKCl7WS5ub1Njcm9sbGJhcnMmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wiLGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wiKSxcIm5vbmVcIiE9PU4uc3R5bGUuZGlzcGxheSYmKEUoZG9jdW1lbnQsXCJrZXlkb3duXCIsaSksTi5jbGFzc05hbWU9XCJcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Ti5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGYoKSxZLmJvZHlDbGFzcyYmZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShZLmJvZHlDbGFzcyksWS5hZnRlckhpZGUmJlkuYWZ0ZXJIaWRlKCksVSYmVS5mb2N1cygpfSw1MDApKX1mdW5jdGlvbiBtKHQsZSl7dmFyIG49Vlt0XSxvPVhbdF07aWYodm9pZCAwIT09biYmdm9pZCAwIT09bylpZihuLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdKWUmJmUoKTtlbHNle3ZhciBpPW8uaW1hZ2VFbGVtZW50LGE9aS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSxsPVwiZnVuY3Rpb25cIj09dHlwZW9mIFkuY2FwdGlvbnM/WS5jYXB0aW9ucy5jYWxsKFgsaSk6aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcHRpb25cIil8fGkudGl0bGUscj1iKGkpLHM9VChcImZpZ3VyZVwiKTtpZihzLmlkPVwiYmFndWV0dGVCb3gtZmlndXJlLVwiK3Qscy5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1zcGlubmVyXCI+PGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LWRvdWJsZS1ib3VuY2UxXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LWRvdWJsZS1ib3VuY2UyXCI+PC9kaXY+PC9kaXY+JyxZLmNhcHRpb25zJiZsKXt2YXIgdT1UKFwiZmlnY2FwdGlvblwiKTt1LmlkPVwiYmFndWV0dGVCb3gtZmlnY2FwdGlvbi1cIit0LHUuaW5uZXJIVE1MPWwscy5hcHBlbmRDaGlsZCh1KX1uLmFwcGVuZENoaWxkKHMpO3ZhciBjPVQoXCJpbWdcIik7Yy5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhZ3VldHRlLWltZy1cIit0K1wiIC5iYWd1ZXR0ZUJveC1zcGlubmVyXCIpO3MucmVtb3ZlQ2hpbGQobiksIVkuYXN5bmMmJmUmJmUoKX0sYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIixyKSxjLmFsdD1hP2EuYWx0fHxcIlwiOlwiXCIsWS50aXRsZVRhZyYmbCYmKGMudGl0bGU9bCkscy5hcHBlbmRDaGlsZChjKSxZLmFzeW5jJiZlJiZlKCl9fWZ1bmN0aW9uIGIodCl7dmFyIGU9dC5ocmVmO2lmKHQuZGF0YXNldCl7dmFyIG49W107Zm9yKHZhciBvIGluIHQuZGF0YXNldClcImF0LVwiIT09by5zdWJzdHJpbmcoMCwzKXx8aXNOYU4oby5zdWJzdHJpbmcoMykpfHwobltvLnJlcGxhY2UoXCJhdC1cIixcIlwiKV09dC5kYXRhc2V0W29dKTtmb3IodmFyIGk9T2JqZWN0LmtleXMobikuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiBwYXJzZUludCh0LDEwKTxwYXJzZUludChlLDEwKT8tMToxfSksYT13aW5kb3cuaW5uZXJXaWR0aCp3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxsPTA7bDxpLmxlbmd0aC0xJiZpW2xdPGE7KWwrKztlPW5baVtsXV18fGV9cmV0dXJuIGV9ZnVuY3Rpb24gcCgpe3ZhciB0O3JldHVybiBNPD1WLmxlbmd0aC0yPyhNKysseSgpLGsoTSksdD0hMCk6WS5hbmltYXRpb24mJihBLmNsYXNzTmFtZT1cImJvdW5jZS1mcm9tLXJpZ2h0XCIsc2V0VGltZW91dChmdW5jdGlvbigpe0EuY2xhc3NOYW1lPVwiXCJ9LDQwMCksdD0hMSksWS5vbkNoYW5nZSYmWS5vbkNoYW5nZShNLFYubGVuZ3RoKSx0fWZ1bmN0aW9uIGgoKXt2YXIgdDtyZXR1cm4gTT49MT8oTS0tLHkoKSxDKE0pLHQ9ITApOlkuYW5pbWF0aW9uJiYoQS5jbGFzc05hbWU9XCJib3VuY2UtZnJvbS1sZWZ0XCIsc2V0VGltZW91dChmdW5jdGlvbigpe0EuY2xhc3NOYW1lPVwiXCJ9LDQwMCksdD0hMSksWS5vbkNoYW5nZSYmWS5vbkNoYW5nZShNLFYubGVuZ3RoKSx0fWZ1bmN0aW9uIHkoKXt2YXIgdD0xMDAqLU0rXCIlXCI7XCJmYWRlSW5cIj09PVkuYW5pbWF0aW9uPyhBLnN0eWxlLm9wYWNpdHk9MCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ai50cmFuc2Zvcm1zP0Euc3R5bGUudHJhbnNmb3JtPUEuc3R5bGUud2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIrdCtcIiwwLDApXCI6QS5zdHlsZS5sZWZ0PXQsQS5zdHlsZS5vcGFjaXR5PTF9LDQwMCkpOmoudHJhbnNmb3Jtcz9BLnN0eWxlLnRyYW5zZm9ybT1BLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK3QrXCIsMCwwKVwiOkEuc3R5bGUubGVmdD10fWZ1bmN0aW9uIHYoKXt2YXIgdD1UKFwiZGl2XCIpO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LnN0eWxlLnBlcnNwZWN0aXZlfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5zdHlsZS53ZWJraXRQZXJzcGVjdGl2ZX1mdW5jdGlvbiB3KCl7dmFyIHQ9VChcImRpdlwiKTtyZXR1cm4gdC5pbm5lckhUTUw9XCI8c3ZnLz5cIixcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT0odC5maXJzdENoaWxkJiZ0LmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKX1mdW5jdGlvbiBrKHQpe3QtTT49WS5wcmVsb2FkfHxtKHQrMSxmdW5jdGlvbigpe2sodCsxKX0pfWZ1bmN0aW9uIEModCl7TS10Pj1ZLnByZWxvYWR8fG0odC0xLGZ1bmN0aW9uKCl7Qyh0LTEpfSl9ZnVuY3Rpb24geCh0LGUsbixvKXt0LmFkZEV2ZW50TGlzdGVuZXI/dC5hZGRFdmVudExpc3RlbmVyKGUsbixvKTp0LmF0dGFjaEV2ZW50KFwib25cIitlLGZ1bmN0aW9uKHQpeyh0PXR8fHdpbmRvdy5ldmVudCkudGFyZ2V0PXQudGFyZ2V0fHx0LnNyY0VsZW1lbnQsbih0KX0pfWZ1bmN0aW9uIEUodCxlLG4sbyl7dC5yZW1vdmVFdmVudExpc3RlbmVyP3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLG4sbyk6dC5kZXRhY2hFdmVudChcIm9uXCIrZSxuKX1mdW5jdGlvbiBCKHQpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KX1mdW5jdGlvbiBUKHQpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpfXZhciBOLEEsTCxTLFAsRj0nPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNjBcIj48cG9seWxpbmUgcG9pbnRzPVwiMzAgMTAgMTAgMzAgMzAgNTBcIiBzdHJva2U9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIiBzdHJva2Utd2lkdGg9XCI0XCJzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPicsSD0nPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNjBcIj48cG9seWxpbmUgcG9pbnRzPVwiMTQgMTAgMzQgMzAgMTQgNTBcIiBzdHJva2U9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIiBzdHJva2Utd2lkdGg9XCI0XCJzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPicsST0nPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj48ZyBzdHJva2U9XCJyZ2IoMTYwLDE2MCwxNjApXCIgc3Ryb2tlLXdpZHRoPVwiNFwiPjxsaW5lIHgxPVwiNVwiIHkxPVwiNVwiIHgyPVwiMjVcIiB5Mj1cIjI1XCIvPjxsaW5lIHgxPVwiNVwiIHkxPVwiMjVcIiB4Mj1cIjI1XCIgeTI9XCI1XCIvPjwvZz48L3N2Zz4nLFk9e30scT17Y2FwdGlvbnM6ITAsYnV0dG9uczpcImF1dG9cIixmdWxsU2NyZWVuOiExLG5vU2Nyb2xsYmFyczohMSxib2R5Q2xhc3M6XCJiYWd1ZXR0ZUJveC1vcGVuXCIsdGl0bGVUYWc6ITEsYXN5bmM6ITEscHJlbG9hZDoyLGFuaW1hdGlvbjpcInNsaWRlSW5cIixhZnRlclNob3c6bnVsbCxhZnRlckhpZGU6bnVsbCxvbkNoYW5nZTpudWxsLG92ZXJsYXlCYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsMCwwLC44KVwifSxqPXt9LFg9W10sTT0wLFI9e30sTz0hMSx6PS8uK1xcLihnaWZ8anBlP2d8cG5nfHdlYnApL2ksRD17fSxWPVtdLFU9bnVsbCxXPWZ1bmN0aW9uKHQpey0xIT09dC50YXJnZXQuaWQuaW5kZXhPZihcImJhZ3VldHRlLWltZ1wiKSYmZygpfSxHPWZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uP3Quc3RvcFByb3BhZ2F0aW9uKCk6dC5jYW5jZWxCdWJibGU9ITAsaCgpfSxKPWZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uP3Quc3RvcFByb3BhZ2F0aW9uKCk6dC5jYW5jZWxCdWJibGU9ITAscCgpfSxLPWZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uP3Quc3RvcFByb3BhZ2F0aW9uKCk6dC5jYW5jZWxCdWJibGU9ITAsZygpfSxRPWZ1bmN0aW9uKHQpe1IuY291bnQrKyxSLmNvdW50PjEmJihSLm11bHRpdG91Y2g9ITApLFIuc3RhcnRYPXQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsUi5zdGFydFk9dC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWX0sWj1mdW5jdGlvbih0KXtpZighTyYmIVIubXVsdGl0b3VjaCl7dC5wcmV2ZW50RGVmYXVsdD90LnByZXZlbnREZWZhdWx0KCk6dC5yZXR1cm5WYWx1ZT0hMTt2YXIgZT10LnRvdWNoZXNbMF18fHQuY2hhbmdlZFRvdWNoZXNbMF07ZS5wYWdlWC1SLnN0YXJ0WD40MD8oTz0hMCxoKCkpOmUucGFnZVgtUi5zdGFydFg8LTQwPyhPPSEwLHAoKSk6Ui5zdGFydFktZS5wYWdlWT4xMDAmJmcoKX19LCQ9ZnVuY3Rpb24oKXtSLmNvdW50LS0sUi5jb3VudDw9MCYmKFIubXVsdGl0b3VjaD0hMSksTz0hMX0sXz1mdW5jdGlvbigpeyQoKX0sdHQ9ZnVuY3Rpb24odCl7XCJibG9ja1wiPT09Ti5zdHlsZS5kaXNwbGF5JiZOLmNvbnRhaW5zJiYhTi5jb250YWlucyh0LnRhcmdldCkmJih0LnN0b3BQcm9wYWdhdGlvbigpLGMoKSl9O3JldHVybltdLmZvckVhY2h8fChBcnJheS5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbj0wO248dGhpcy5sZW5ndGg7bisrKXQuY2FsbChlLHRoaXNbbl0sbix0aGlzKX0pLFtdLmZpbHRlcnx8KEFycmF5LnByb3RvdHlwZS5maWx0ZXI9ZnVuY3Rpb24odCxlLG4sbyxpKXtmb3Iobj10aGlzLG89W10saT0wO2k8bi5sZW5ndGg7aSsrKXQuY2FsbChlLG5baV0saSxuKSYmby5wdXNoKG5baV0pO3JldHVybiBvfSkse3J1bjpmdW5jdGlvbihlLGkpe2oudHJhbnNmb3Jtcz12KCksai5zdmc9dygpLG8oKSxuKGUpLHQoZSxpKX0sc2hvd05leHQ6cCxzaG93UHJldmlvdXM6aCxkZXN0cm95OmZ1bmN0aW9uKCl7bCgpLGUoKSxFKGRvY3VtZW50LFwia2V5ZG93blwiLGkpLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZ3VldHRlQm94LW92ZXJsYXlcIikpLEQ9e30sWD1bXSxNPTB9fX0pOyIsImltcG9ydCBsaWdodGJveCBmcm9tICdiYWd1ZXR0ZWJveC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgbGlnaHRib3gucnVuKCcuanMtZ2FsbGVyeScpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5hdicpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9nZ2xlLW5hdicpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyJyk7XG5cbiAgLy8gbmF2aWdhdGlvbiBidXR0b24gb24gY2xpY2ssIGJhc2ljIHRvZ2dsaW5nIG9mIGNsYXNzZXNcbiAgaWYgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFjdGl2ZScpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci0tbmF2LS1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxufTtcbiIsImNvbnN0IGNsb3NlV2VsY29tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS13ZWxjb21lJyk7XG5cbmNvbnN0IHdlbGNvbWVEb25lID0gKCkgPT4ge1xuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXdlbGNvbWUnKS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lLS1kb25lJyk7XG4gIH0sIDgwMCk7IC8vIGFuaW1hdGlvbiB0aW1lIGlzIDcwMG1zXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIHNldCB0aGUgZXZlbnQgdG8gdGhlIGVzYy1rZXkgdG8gZGlzbWlzcyBzcGxhc2ggaW50cm9cbiAgZG9jdW1lbnQub25rZXlkb3duID0gZSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBjb25zdCBpc0hvbWVwYWdlID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpdGUtLWhvbWVwYWdlJyk7XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgJiYgaXNIb21lcGFnZSAmJiBjbG9zZVdlbGNvbWUpIHtcbiAgICAgIGNsb3NlV2VsY29tZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgd2VsY29tZURvbmUoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gcmVtb3ZlIHRoZSB0cmFuc2l0aW9uIGFmdGVyIGl0IGNoYW5nZWRcbiAgaWYgKGNsb3NlV2VsY29tZSkge1xuICAgIGNsb3NlV2VsY29tZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB3ZWxjb21lRG9uZSk7XG4gICAgY2xvc2VXZWxjb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2VsY29tZURvbmUpO1xuICB9XG59O1xuIiwiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjAuMTMgLSDCqSBCcmFtIFN0ZWluLiBMaWNlbnNlOiBCU0QtMy1DbGF1c2UgKi8oZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7dmFyIGYsZz1bXTtmdW5jdGlvbiBsKGEpe2cucHVzaChhKTsxPT1nLmxlbmd0aCYmZigpfWZ1bmN0aW9uIG0oKXtmb3IoO2cubGVuZ3RoOylnWzBdKCksZy5zaGlmdCgpfWY9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KG0pfTtmdW5jdGlvbiBuKGEpe3RoaXMuYT1wO3RoaXMuYj12b2lkIDA7dGhpcy5mPVtdO3ZhciBiPXRoaXM7dHJ5e2EoZnVuY3Rpb24oYSl7cShiLGEpfSxmdW5jdGlvbihhKXtyKGIsYSl9KX1jYXRjaChjKXtyKGIsYyl9fXZhciBwPTI7ZnVuY3Rpb24gdChhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYixjKXtjKGEpfSl9ZnVuY3Rpb24gdShhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYil7YihhKX0pfWZ1bmN0aW9uIHEoYSxiKXtpZihhLmE9PXApe2lmKGI9PWEpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgYz0hMTt0cnl7dmFyIGQ9YiYmYi50aGVuO2lmKG51bGwhPWImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkKXtkLmNhbGwoYixmdW5jdGlvbihiKXtjfHxxKGEsYik7Yz0hMH0sZnVuY3Rpb24oYil7Y3x8cihhLGIpO2M9ITB9KTtyZXR1cm59fWNhdGNoKGUpe2N8fHIoYSxlKTtyZXR1cm59YS5hPTA7YS5iPWI7dihhKX19XG5mdW5jdGlvbiByKGEsYil7aWYoYS5hPT1wKXtpZihiPT1hKXRocm93IG5ldyBUeXBlRXJyb3I7YS5hPTE7YS5iPWI7dihhKX19ZnVuY3Rpb24gdihhKXtsKGZ1bmN0aW9uKCl7aWYoYS5hIT1wKWZvcig7YS5mLmxlbmd0aDspe3ZhciBiPWEuZi5zaGlmdCgpLGM9YlswXSxkPWJbMV0sZT1iWzJdLGI9YlszXTt0cnl7MD09YS5hP1wiZnVuY3Rpb25cIj09dHlwZW9mIGM/ZShjLmNhbGwodm9pZCAwLGEuYikpOmUoYS5iKToxPT1hLmEmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkP2UoZC5jYWxsKHZvaWQgMCxhLmIpKTpiKGEuYikpfWNhdGNoKGgpe2IoaCl9fX0pfW4ucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYyh2b2lkIDAsYSl9O24ucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBuZXcgbihmdW5jdGlvbihkLGUpe2MuZi5wdXNoKFthLGIsZCxlXSk7dihjKX0pfTtcbmZ1bmN0aW9uIHcoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIsYyl7ZnVuY3Rpb24gZChjKXtyZXR1cm4gZnVuY3Rpb24oZCl7aFtjXT1kO2UrPTE7ZT09YS5sZW5ndGgmJmIoaCl9fXZhciBlPTAsaD1bXTswPT1hLmxlbmd0aCYmYihoKTtmb3IodmFyIGs9MDtrPGEubGVuZ3RoO2srPTEpdShhW2tdKS5jKGQoayksYyl9KX1mdW5jdGlvbiB4KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiLGMpe2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7ZCs9MSl1KGFbZF0pLmMoYixjKX0pfTt3aW5kb3cuUHJvbWlzZXx8KHdpbmRvdy5Qcm9taXNlPW4sd2luZG93LlByb21pc2UucmVzb2x2ZT11LHdpbmRvdy5Qcm9taXNlLnJlamVjdD10LHdpbmRvdy5Qcm9taXNlLnJhY2U9eCx3aW5kb3cuUHJvbWlzZS5hbGw9dyx3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbj1uLnByb3RvdHlwZS5jLHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdPW4ucHJvdG90eXBlLmcpO30oKSk7XG5cbihmdW5jdGlvbigpe2Z1bmN0aW9uIGwoYSxiKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGIsITEpOmEuYXR0YWNoRXZlbnQoXCJzY3JvbGxcIixiKX1mdW5jdGlvbiBtKGEpe2RvY3VtZW50LmJvZHk/YSgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbiBjKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixjKTthKCl9KTpkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uIGsoKXtpZihcImludGVyYWN0aXZlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGV8fFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSlkb2N1bWVudC5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGspLGEoKX0pfTtmdW5jdGlvbiByKGEpe3RoaXMuYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuYS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt0aGlzLmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO3RoaXMuYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5oPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmc9LTE7dGhpcy5iLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmMuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO1xudGhpcy5mLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmguc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCU7Zm9udC1zaXplOjE2cHg7bWF4LXdpZHRoOm5vbmU7XCI7dGhpcy5iLmFwcGVuZENoaWxkKHRoaXMuaCk7dGhpcy5jLmFwcGVuZENoaWxkKHRoaXMuZik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYyl9XG5mdW5jdGlvbiB0KGEsYil7YS5hLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTttaW4td2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87bWFyZ2luOjA7cGFkZGluZzowO3RvcDotOTk5cHg7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc3ludGhlc2lzOm5vbmU7Zm9udDpcIitiK1wiO1wifWZ1bmN0aW9uIHkoYSl7dmFyIGI9YS5hLm9mZnNldFdpZHRoLGM9YisxMDA7YS5mLnN0eWxlLndpZHRoPWMrXCJweFwiO2EuYy5zY3JvbGxMZWZ0PWM7YS5iLnNjcm9sbExlZnQ9YS5iLnNjcm9sbFdpZHRoKzEwMDtyZXR1cm4gYS5nIT09Yj8oYS5nPWIsITApOiExfWZ1bmN0aW9uIHooYSxiKXtmdW5jdGlvbiBjKCl7dmFyIGE9azt5KGEpJiZhLmEucGFyZW50Tm9kZSYmYihhLmcpfXZhciBrPWE7bChhLmIsYyk7bChhLmMsYyk7eShhKX07ZnVuY3Rpb24gQShhLGIpe3ZhciBjPWJ8fHt9O3RoaXMuZmFtaWx5PWE7dGhpcy5zdHlsZT1jLnN0eWxlfHxcIm5vcm1hbFwiO3RoaXMud2VpZ2h0PWMud2VpZ2h0fHxcIm5vcm1hbFwiO3RoaXMuc3RyZXRjaD1jLnN0cmV0Y2h8fFwibm9ybWFsXCJ9dmFyIEI9bnVsbCxDPW51bGwsRT1udWxsLEY9bnVsbDtmdW5jdGlvbiBHKCl7aWYobnVsbD09PUMpaWYoSigpJiYvQXBwbGUvLnRlc3Qod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7Qz0hIWEmJjYwMz5wYXJzZUludChhWzFdLDEwKX1lbHNlIEM9ITE7cmV0dXJuIEN9ZnVuY3Rpb24gSigpe251bGw9PT1GJiYoRj0hIWRvY3VtZW50LmZvbnRzKTtyZXR1cm4gRn1cbmZ1bmN0aW9uIEsoKXtpZihudWxsPT09RSl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7YS5zdHlsZS5mb250PVwiY29uZGVuc2VkIDEwMHB4IHNhbnMtc2VyaWZcIn1jYXRjaChiKXt9RT1cIlwiIT09YS5zdHlsZS5mb250fXJldHVybiBFfWZ1bmN0aW9uIEwoYSxiKXtyZXR1cm5bYS5zdHlsZSxhLndlaWdodCxLKCk/YS5zdHJldGNoOlwiXCIsXCIxMDBweFwiLGJdLmpvaW4oXCIgXCIpfVxuQS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsaz1hfHxcIkJFU2Jzd3lcIixxPTAsRD1ifHwzRTMsSD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtpZihKKCkmJiFHKCkpe3ZhciBNPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gZSgpeyhuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PUQ/YigpOmRvY3VtZW50LmZvbnRzLmxvYWQoTChjLCdcIicrYy5mYW1pbHkrJ1wiJyksaykudGhlbihmdW5jdGlvbihjKXsxPD1jLmxlbmd0aD9hKCk6c2V0VGltZW91dChlLDI1KX0sZnVuY3Rpb24oKXtiKCl9KX1lKCl9KSxOPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYyl7cT1zZXRUaW1lb3V0KGMsRCl9KTtQcm9taXNlLnJhY2UoW04sTV0pLnRoZW4oZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocSk7YShjKX0sZnVuY3Rpb24oKXtiKGMpfSl9ZWxzZSBtKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdSgpe3ZhciBiO2lmKGI9LTEhPVxuZiYmLTEhPWd8fC0xIT1mJiYtMSE9aHx8LTEhPWcmJi0xIT1oKShiPWYhPWcmJmYhPWgmJmchPWgpfHwobnVsbD09PUImJihiPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxCPSEhYiYmKDUzNj5wYXJzZUludChiWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYlsxXSwxMCkmJjExPj1wYXJzZUludChiWzJdLDEwKSkpLGI9QiYmKGY9PXYmJmc9PXYmJmg9PXZ8fGY9PXcmJmc9PXcmJmg9PXd8fGY9PXgmJmc9PXgmJmg9PXgpKSxiPSFiO2ImJihkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxjbGVhclRpbWVvdXQocSksYShjKSl9ZnVuY3Rpb24gSSgpe2lmKChuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PUQpZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksYihjKTtlbHNle3ZhciBhPWRvY3VtZW50LmhpZGRlbjtpZighMD09PWF8fHZvaWQgMD09PWEpZj1lLmEub2Zmc2V0V2lkdGgsXG5nPW4uYS5vZmZzZXRXaWR0aCxoPXAuYS5vZmZzZXRXaWR0aCx1KCk7cT1zZXRUaW1lb3V0KEksNTApfX12YXIgZT1uZXcgcihrKSxuPW5ldyByKGspLHA9bmV3IHIoayksZj0tMSxnPS0xLGg9LTEsdj0tMSx3PS0xLHg9LTEsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2QuZGlyPVwibHRyXCI7dChlLEwoYyxcInNhbnMtc2VyaWZcIikpO3QobixMKGMsXCJzZXJpZlwiKSk7dChwLEwoYyxcIm1vbm9zcGFjZVwiKSk7ZC5hcHBlbmRDaGlsZChlLmEpO2QuYXBwZW5kQ2hpbGQobi5hKTtkLmFwcGVuZENoaWxkKHAuYSk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTt2PWUuYS5vZmZzZXRXaWR0aDt3PW4uYS5vZmZzZXRXaWR0aDt4PXAuYS5vZmZzZXRXaWR0aDtJKCk7eihlLGZ1bmN0aW9uKGEpe2Y9YTt1KCl9KTt0KGUsTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNhbnMtc2VyaWYnKSk7eihuLGZ1bmN0aW9uKGEpe2c9YTt1KCl9KTt0KG4sTChjLCdcIicrYy5mYW1pbHkrJ1wiLHNlcmlmJykpO1xueihwLGZ1bmN0aW9uKGEpe2g9YTt1KCl9KTt0KHAsTChjLCdcIicrYy5mYW1pbHkrJ1wiLG1vbm9zcGFjZScpKX0pfSl9O1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPUE6KHdpbmRvdy5Gb250RmFjZU9ic2VydmVyPUEsd2luZG93LkZvbnRGYWNlT2JzZXJ2ZXIucHJvdG90eXBlLmxvYWQ9QS5wcm90b3R5cGUubG9hZCk7fSgpKTtcbiIsImV4cG9ydCBkZWZhdWx0IFt7XCJkZWZhdWx0XCI6e1wiZmFtaWx5XCI6XCJHZW9tYW5pc3RcIixcImZhbGxiYWNrXCI6XCJzYW5zLXNlcmlmXCIsXCJ3ZWlnaHRcIjo2MDAsXCJzdHlsZVwiOlwibm9ybWFsXCIsXCJmb250ZmFjZVwiOnRydWUsXCJmaWxlXCI6XCJnZW9tYW5pc3QtbWVkaXVtXCJ9LFwicmVndWxhclwiOntcImZhbWlseVwiOlwiR2VvbWFuaXN0XCIsXCJmYWxsYmFja1wiOlwic2Fucy1zZXJpZlwiLFwid2VpZ2h0XCI6NDAwLFwic3R5bGVcIjpcIm5vcm1hbFwiLFwiZm9udGZhY2VcIjp0cnVlLFwiZmlsZVwiOlwiZ2VvbWFuaXN0LXJlZ3VsYXJcIn0sXCJjb2RlXCI6e1wiZmFtaWx5XCI6XCJGaXJhIENvZGVcIixcImZhbGxiYWNrXCI6XCJIYWNrLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlXCIsXCJ3ZWlnaHRcIjo0MDAsXCJzdHlsZVwiOlwibm9ybWFsXCIsXCJmb250ZmFjZVwiOmZhbHNlfX1dOyIsImltcG9ydCBPYnNlcnZlciBmcm9tICdAbm9kZW1vZHVsZXMvZm9udGZhY2VvYnNlcnZlci9mb250ZmFjZW9ic2VydmVyJztcbmltcG9ydCBmb250cyBmcm9tICdAc2hhcmVkL2ZvbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBmb250T2JzZXJ2ZXJzID0gW107XG5cbiAgaWYgKHNlc3Npb25TdG9yYWdlLmZvbnRzTG9hZGVkKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKGZvbnRzKS5mb3JFYWNoKGZvbnRPYmplY3QgPT4ge1xuICAgIE9iamVjdC5rZXlzKGZvbnRzW2ZvbnRPYmplY3RdKS5mb3JFYWNoKGZvbnQgPT4ge1xuICAgICAgY29uc3QgZiA9IGZvbnRzW2ZvbnRPYmplY3RdW2ZvbnRdO1xuICAgICAgaWYgKGYuZm9udGZhY2UpIHtcbiAgICAgICAgZm9udE9ic2VydmVycy5wdXNoKFxuICAgICAgICAgIG5ldyBPYnNlcnZlcihmLmZhbWlseS5yZXBsYWNlKC8nL2csICcnKSwge1xuICAgICAgICAgICAgd2VpZ2h0OiBmLndlaWdodCxcbiAgICAgICAgICAgIHN0eWxlOiBmLnN0eWxlXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKGZvbnRPYnNlcnZlcnMubGVuZ3RoID49IDEpIHtcbiAgICBQcm9taXNlLmFsbChmb250T2JzZXJ2ZXJzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7XG4gICAgICAgIC8vIE9wdGltaXphdGlvbiBmb3IgUmVwZWF0IFZpZXdzXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmZvbnRzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuLi9jb21wb25lbnRzLyoqLyouanMnO1xuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuLzQtZ2xvYmFsLyouanMnO1xuaW1wb3J0ICogYXMgb3RoZXIgZnJvbSAnLi80LWdsb2JhbC8qKi8qLmpzJztcblxuY29uc3QgbG9hZCA9IFsgZ2xvYmFscywgb3RoZXIsIGNvbXBvbmVudHMgXTtcblxuLy8gbGV0cyBjaGVjayBpZiB3ZSBoYXZlIGEgbW9kZXJuIGJyb3dzZXIsIGFuZCB0aGVuLCBlbmhhbmNlIVxuLy8gRWRnZSwgRmlyZWZveCwgQ2hyb21lLCBPcGVyYSBhcyB3ZWxsIGFzIElFMTArLCBpT1M3KyBhbmQgQW5kcm9pZCA0LjQrXG5pZiAoJ3Zpc2liaWxpdHlTdGF0ZScgaW4gZG9jdW1lbnQpIHtcbiAgLy8gcmVtb3ZlIHRoZSBuby1qcyBjbGFzc1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcblxuICAvLyBsb2FkIGFsbCBqYXZhc2NyaXB0cyBmcm9tIGdsb2JhbCBhbmQgYWxsIGNvbXBvbmVudHMgYXV0b21hdGljYWxseVxuICBsb2FkLmZvckVhY2goaXRlbXMgPT4ge1xuICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgaXRlbXNbaV0oKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gaWYgeW91IHdhbnQgdG8gbG9hZCBzb21lIGN1c3RvbSBzY3JpcHRzLCB0aGF0IHNob3VsZCBub3QgcmVzaWRlIGluXG4gIC8vIGdsb2JhbCBvciBhbnkgb2YgdGhlIGNvbXBvbmVudHMsIHByb3ZpZGUgdGhlbSBoZXJlIGFuZCBpbXBvcnQgb24gdG9wXG4gIC8vIGltcG9ydCAnc3RoJyBmcm9tICdzb21ld2hlcmUnO1xuICAvLyBzdGgoeyBmb286IGJhciB9KTtcbn1cbiJdLCJuYW1lcyI6WyJ0IiwiZSIsImRlZmluZSIsImFtZCIsIm1vZHVsZSIsInRoaXMiLCJuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibyIsImdhbGxlcmllcyIsIm5vZGVMaXN0IiwiRCIsImZvckVhY2giLCJjYWxsIiwiZmlsdGVyIiwieiIsInRhZ05hbWUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJpZ25vcmVDbGFzcyIsInRlc3QiLCJocmVmIiwibGVuZ3RoIiwiaSIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJyIiwidSIsImEiLCJldmVudEhhbmRsZXIiLCJpbWFnZUVsZW1lbnQiLCJ4IiwicHVzaCIsImhhc093blByb3BlcnR5IiwiWCIsIk4iLCJCIiwiQSIsIkwiLCJTIiwiUCIsIlQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwiaiIsInN2ZyIsIkYiLCJIIiwiSSIsImtleUNvZGUiLCJXIiwiRyIsIkoiLCJLIiwiXyIsIlEiLCJaIiwiJCIsInR0IiwibCIsIkUiLCJzIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiViIsImpvaW4iLCJxIiwiWSIsInN0eWxlIiwidHJhbnNpdGlvbiIsIndlYmtpdFRyYW5zaXRpb24iLCJhbmltYXRpb24iLCJidXR0b25zIiwid2luZG93IiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsIm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3IiLCJub1Njcm9sbGJhcnMiLCJkb2N1bWVudEVsZW1lbnQiLCJvdmVyZmxvd1kiLCJib2R5IiwiUiIsImNvdW50Iiwic3RhcnRYIiwic3RhcnRZIiwibSIsIk0iLCJDIiwieSIsImZ1bGxTY3JlZW4iLCJkIiwic2V0VGltZW91dCIsImJvZHlDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImFmdGVyU2hvdyIsIm9uQ2hhbmdlIiwiVSIsImFjdGl2ZUVsZW1lbnQiLCJjIiwiZm9jdXMiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJmIiwiZXhpdEZ1bGxzY3JlZW4iLCJtb3pDYW5jZWxGdWxsU2NyZWVuIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJnIiwicmVtb3ZlIiwiYWZ0ZXJIaWRlIiwiY2FwdGlvbnMiLCJnZXRBdHRyaWJ1dGUiLCJ0aXRsZSIsImIiLCJvbmxvYWQiLCJxdWVyeVNlbGVjdG9yIiwiYXN5bmMiLCJhbHQiLCJ0aXRsZVRhZyIsImRhdGFzZXQiLCJzdWJzdHJpbmciLCJpc05hTiIsInJlcGxhY2UiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInBhcnNlSW50IiwiaW5uZXJXaWR0aCIsImRldmljZVBpeGVsUmF0aW8iLCJwIiwiayIsImgiLCJvcGFjaXR5IiwidHJhbnNmb3JtcyIsInRyYW5zZm9ybSIsIndlYmtpdFRyYW5zZm9ybSIsImxlZnQiLCJ2IiwicGVyc3BlY3RpdmUiLCJ3ZWJraXRQZXJzcGVjdGl2ZSIsInciLCJuYW1lc3BhY2VVUkkiLCJwcmVsb2FkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwiTyIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsIm11bHRpdG91Y2giLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ0b3VjaGVzIiwiY29udGFpbnMiLCJBcnJheSIsInByb3RvdHlwZSIsInJ1biIsInNob3dOZXh0Iiwic2hvd1ByZXZpb3VzIiwiZGVzdHJveSIsIm5hdiIsImJ1dHRvbiIsImhlYWRlciIsInRvZ2dsZSIsImNsb3NlV2VsY29tZSIsIndlbGNvbWVEb25lIiwib25rZXlkb3duIiwiaXNIb21lcGFnZSIsInNoaWZ0IiwiVHlwZUVycm9yIiwidGhlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmFjZSIsImFsbCIsInJlYWR5U3RhdGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNzc1RleHQiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwic2Nyb2xsTGVmdCIsInNjcm9sbFdpZHRoIiwicGFyZW50Tm9kZSIsImZhbWlseSIsIndlaWdodCIsInN0cmV0Y2giLCJuYXZpZ2F0b3IiLCJ2ZW5kb3IiLCJleGVjIiwidXNlckFnZW50IiwiZm9udHMiLCJmb250IiwibG9hZCIsIkRhdGUiLCJnZXRUaW1lIiwiY2xlYXJUaW1lb3V0IiwiaGlkZGVuIiwiZGlyIiwiZm9udE9ic2VydmVycyIsInNlc3Npb25TdG9yYWdlIiwiZm9udHNMb2FkZWQiLCJmb250T2JqZWN0IiwiZm9udGZhY2UiLCJPYnNlcnZlciIsImdsb2JhbHMi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
