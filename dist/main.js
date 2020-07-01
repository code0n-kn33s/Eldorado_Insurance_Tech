/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _main = __webpack_require__(/*! ./styles/main.sass */ \"./src/styles/main.sass\");\n\nvar _main2 = _interopRequireDefault(_main);\n\n__webpack_require__(/*! ./scripts/helpers.js */ \"./src/scripts/helpers.js\");\n\n__webpack_require__(/*! ./scripts/unmountMenu.js */ \"./src/scripts/unmountMenu.js\");\n\n__webpack_require__(/*! ./scripts/select.js */ \"./src/scripts/select.js\");\n\n__webpack_require__(/*! ./scripts/common.js */ \"./src/scripts/common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/common.js":
/*!*******************************!*\
  !*** ./src/scripts/common.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./src/scripts/helpers.js\");\n\nvar _unmountMenu = __webpack_require__(/*! ./unmountMenu */ \"./src/scripts/unmountMenu.js\");\n\n(function () {\n    // srolling\n    (0, _helpers.scrollTo)('#scroll_one_screen', '#team');\n    (0, _helpers.scrollTo)('#activate-btn-scroll', '#activate-block');\n    // activate forms\n    (0, _helpers.toggleClass)('#activate-button-wrap', '.activate-form-wrap', 'active');\n    (0, _helpers.toggleClass)('#request-button-wrap', '.request-form-wrap', 'active');\n    // hamburger menu\n    (0, _helpers.toggleClass)('#header-dropdown', '#nav-icon3', 'open');\n    (0, _unmountMenu.unmountMenu)('.header-dropdown', '#nav-icon3', 'open');\n})();\n\n//# sourceURL=webpack:///./src/scripts/common.js?");

/***/ }),

/***/ "./src/scripts/helpers.js":
/*!********************************!*\
  !*** ./src/scripts/helpers.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.scrollTo = scrollTo;\nexports.toggleClass = toggleClass;\nfunction scrollTo(clicked, scrolled) {\n    var clickedElem = document.querySelector(clicked);\n    var scrollToElem = document.querySelector(scrolled);\n\n    clickedElem.addEventListener('click', function () {\n        scrollToElem.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\n    });\n}\n\nfunction toggleClass(clickElem, toggleElem, toggleClass) {\n    document.querySelector(clickElem).addEventListener('click', function () {\n        document.querySelector(toggleElem).classList.toggle(toggleClass);\n    });\n}\n\n//# sourceURL=webpack:///./src/scripts/helpers.js?");

/***/ }),

/***/ "./src/scripts/select.js":
/*!*******************************!*\
  !*** ./src/scripts/select.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n    var x, i, j, selElmnt, a, b, c;\n\n    x = document.getElementsByClassName(\"custom-select\");\n    for (i = 0; i < x.length; i++) {\n        selElmnt = x[i].getElementsByTagName(\"select\")[0];\n\n        a = document.createElement(\"DIV\");\n        a.setAttribute(\"class\", \"select-selected\");\n        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;\n        x[i].appendChild(a);\n\n        b = document.createElement(\"DIV\");\n        b.setAttribute(\"class\", \"select-items select-hide\");\n        for (j = 0; j < selElmnt.length; j++) {\n\n            c = document.createElement(\"DIV\");\n            c.innerHTML = selElmnt.options[j].innerHTML;\n            c.addEventListener(\"click\", function (e) {\n\n                var y, i, k, s, h;\n                s = this.parentNode.parentNode.getElementsByTagName(\"select\")[0];\n                h = this.parentNode.previousSibling;\n                for (i = 0; i < s.length; i++) {\n                    if (s.options[i].innerHTML == this.innerHTML) {\n                        s.selectedIndex = i;\n                        h.innerHTML = this.innerHTML;\n                        y = this.parentNode.getElementsByClassName(\"same-as-selected\");\n                        for (k = 0; k < y.length; k++) {\n                            y[k].removeAttribute(\"class\");\n                        }\n                        this.setAttribute(\"class\", \"same-as-selected\");\n                        break;\n                    }\n                }\n                h.click();\n            });\n            b.appendChild(c);\n        }\n        x[i].appendChild(b);\n        a.addEventListener(\"click\", function (e) {\n\n            e.stopPropagation();\n            closeAllSelect(this);\n            this.nextSibling.classList.toggle(\"select-hide\");\n            this.classList.toggle(\"select-arrow-active\");\n        });\n    }\n    function closeAllSelect(elmnt) {\n\n        var x,\n            y,\n            i,\n            arrNo = [];\n        x = document.getElementsByClassName(\"select-items\");\n        y = document.getElementsByClassName(\"select-selected\");\n        for (i = 0; i < y.length; i++) {\n            if (elmnt == y[i]) {\n                arrNo.push(i);\n            } else {\n                y[i].classList.remove(\"select-arrow-active\");\n            }\n        }\n        for (i = 0; i < x.length; i++) {\n            if (arrNo.indexOf(i)) {\n                x[i].classList.add(\"select-hide\");\n            }\n        }\n    }\n\n    document.addEventListener(\"click\", closeAllSelect);\n})();\n\n//# sourceURL=webpack:///./src/scripts/select.js?");

/***/ }),

/***/ "./src/scripts/unmountMenu.js":
/*!************************************!*\
  !*** ./src/scripts/unmountMenu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.unmountMenu = unmountMenu;\nfunction unmountMenu(container, toggleElem, toggleClass) {\n    window.addEventListener('click', function (e) {\n        if (!document.querySelector(container).contains(e.target)) {\n            document.querySelector(toggleElem).classList.remove(toggleClass);\n            document.querySelector('#header-dropdown').checked = false;\n        }\n    });\n\n    window.addEventListener('scroll', function (e) {\n        if (document.querySelector(toggleElem).classList.contains(toggleClass)) {\n            document.querySelector(toggleElem).classList.remove(toggleClass);\n            document.querySelector('#header-dropdown').checked = false;\n        }\n    });\n}\n\n//# sourceURL=webpack:///./src/scripts/unmountMenu.js?");

/***/ }),

/***/ "./src/styles/main.sass":
/*!******************************!*\
  !*** ./src/styles/main.sass ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.sass?");

/***/ })

/******/ });