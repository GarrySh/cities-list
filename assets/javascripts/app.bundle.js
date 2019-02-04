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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';\nvar cities = [];\nfetch(endpoint).then(function (response) {\n  return response.json();\n}).then(function (data) {\n  return cities.push.apply(cities, _toConsumableArray(data));\n});\nvar inputEl = document.querySelector('.cities-list__input');\nvar suggestionsEl = document.querySelector('.cities-list__suggestions');\n\nvar filterCities = function filterCities(value, citiesArr) {\n  var regex = new RegExp(value, 'gi');\n  return citiesArr.filter(function (item) {\n    return item.city.match(regex) || item.state.match(regex);\n  });\n};\n\nvar highlightText = function highlightText(text, value) {\n  var regex = new RegExp(value, 'gi');\n  return text.replace(regex, function (match) {\n    return \"<mark class=\\\"cities-list__highlight\\\">\".concat(match, \"</mark>\");\n  });\n};\n\nvar populationWithCommas = function populationWithCommas(str) {\n  return str.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n};\n\ninputEl.addEventListener('input', function (_ref) {\n  var value = _ref.target.value;\n  var filtred = filterCities(value, cities);\n  var filtredData = filtred.map(function (item) {\n    return \"\\n      <li class=\\\"cities-list__suggestion\\\">\\n          <span class=\\\"cities-list__city-name\\\">\".concat(highlightText(item.city, value), \", \").concat(highlightText(item.state, value), \"</span>\\n          <span class=\\\"cities-list__city-population\\\">\").concat(populationWithCommas(item.population), \"</span>\\n      </li>\\n    \");\n  });\n  suggestionsEl.innerHTML = filtredData.join('');\n});\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/scripts/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/scripts/index.js */\"./src/scripts/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/index.js?");

/***/ })

/******/ });