/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_contact_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/contact-bar.js */ "./src/js/functions/contact-bar.js");
/* harmony import */ var _functions_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/nav.js */ "./src/js/functions/nav.js");
/* harmony import */ var _functions_scroll_animations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/scroll-animations.js */ "./src/js/functions/scroll-animations.js");



(0,_functions_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_functions_scroll_animations_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_functions_contact_bar_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/js/functions/contact-bar.js":
/*!*****************************************!*\
  !*** ./src/js/functions/contact-bar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactToggle)
/* harmony export */ });
function contactToggle() {
  var contactBarBtns = document.querySelectorAll(".js-contact-bar-toogle");
  var contactBar = document.querySelector(".js-contact-bar");
  var contactBarBtnLarge = document.querySelector(".c-contact-bar__button");
  if (contactBar != null) {
    var contactHeight = contactBar.offsetHeight;
    contactBarBtnLarge.style.setProperty("--btn-width", contactHeight + "px");
    contactBarBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        contactBar.classList.toggle("is-open");
      });
    });
  }
}

/***/ }),

/***/ "./src/js/functions/nav.js":
/*!*********************************!*\
  !*** ./src/js/functions/nav.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navToggle)
/* harmony export */ });
function navToggle() {
  var hamburger = document.querySelector('.js-hamburger');
  var body = document.querySelector('body');
  if (hamburger != null) {
    hamburger.addEventListener('click', function () {
      body.classList.toggle('menu-open');
    });
  }
}
;

/***/ }),

/***/ "./src/js/functions/scroll-animations.js":
/*!***********************************************!*\
  !*** ./src/js/functions/scroll-animations.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initScrollAnims)
/* harmony export */ });
//import * as basicScroll from "basicscroll";

function initScrollAnims() {
  var parallaxElem = document.querySelectorAll(".block-line");
  var observer = new IntersectionObserver(isElScrolledIntoView, {
    root: null,
    rootMargin: "0px 0px -15% 0px",
    threshold: 1
  });
  if (parallaxElem) {
    /*
    parallaxElem.forEach((elem) => {
    	const scroller = basicScroll
    		.create({
    			elem: elem,
    			from: "top-bottom",
    			to: "bottom-top",
    			direct: true,
    			props: {
    				"--scaleX": {
    					from: `0.1`,
    					to: `1`,
    				},
    			},
    		})
    		.start();
    });*/
    parallaxElem.forEach(function (elem) {
      observer.observe(elem);
    });
  }

  // create our "what to do with each observed element" function
  function isElScrolledIntoView(entries) {
    // again loop over all entries (element)
    entries.forEach(function (entry) {
      // check if the entry is intersecting at our set threshold
      if (entry.isIntersecting) {
        // set a class to toggle animation
        var delay = entry.target.dataset.delay;
        setTimeout(function () {
          entry.target.classList.add("animate-in");
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }
}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/editor-style.scss":
/*!************************************!*\
  !*** ./src/scss/editor-style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/functions": 0,
/******/ 			"css/editor-style": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkkcb"] = self["webpackChunkkcb"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/style"], () => (__webpack_require__("./src/js/functions.js")))
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/editor-style","css/style"], () => (__webpack_require__("./src/scss/editor-style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;