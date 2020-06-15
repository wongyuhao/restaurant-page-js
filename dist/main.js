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

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/*! exports provided: loadAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadAboutPage\", function() { return loadAboutPage; });\nconst loadAboutPage = (container) =>{\n  const aboutDiv = document.createElement(\"div\");\n  aboutDiv.setAttribute(\"id\",\"aboutDiv\");\n  \n  aboutDiv.innerHTML+=`<p>By reservations only.<p>`\n  \n  const mapDiv = document.createElement(\"div\");\n  mapDiv.setAttribute(\"id\",\"map\")\n\n  mapDiv.innerHTML=`<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.802074943397!2d101.70869441403669!3d3.146867297708637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362bddc85e4d%3A0xce9397f80d5533f5!2sMcDonald&#39;s%20Bukit%20Bintang!5e0!3m2!1sen!2smy!4v1592235091934!5m2!1sen!2smy\"  allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>`\n\n  aboutDiv.appendChild(mapDiv);\n  container.appendChild(aboutDiv);\n}\n\n\n    \n    \n\n\n\n//# sourceURL=webpack:///./src/aboutPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myName */ \"./src/myName.js\");\n/* harmony import */ var _initialPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialPage */ \"./src/initialPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nObject(_initialPage__WEBPACK_IMPORTED_MODULE_1__[\"loadPage\"])(content);\n\n\nconst display = document.querySelector(\"#display\");\n\nconst menu = document.querySelector(\"#menu\");\nconst about = document.querySelector(\"#about\");\n\nObject(_menuPage__WEBPACK_IMPORTED_MODULE_2__[\"loadMenuPage\"])(display);\n\n\nmenu.addEventListener(\"click\",()=>{\n\n    display.innerHTML=''\n    Object(_menuPage__WEBPACK_IMPORTED_MODULE_2__[\"loadMenuPage\"])(display);\n  \n  \n})\n\nabout.addEventListener(\"click\",()=>{\n\n  display.innerHTML=''\n  Object(_aboutPage__WEBPACK_IMPORTED_MODULE_3__[\"loadAboutPage\"])(display);\n})\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initialPage.js":
/*!****************************!*\
  !*** ./src/initialPage.js ***!
  \****************************/
/*! exports provided: loadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadPage\", function() { return loadPage; });\nconst loadPage = (container) =>{\n  createHeader(container);\n  createNav(container);\n  const display = document.createElement(\"div\");\n  display.setAttribute(\"id\", \"display\");\n  container.appendChild(display);\n}\n\nconst createHeader=(container)=>{\n  const header = document.createElement(\"header\")\n  const name = document.createElement(\"h1\");\n  name.setAttribute(\"id\",\"name\")\n  const subtext = document.createElement(\"h2\");\n  subtext.setAttribute(\"id\",\"subtext\")\n\n  name.innerHTML=\"Le McNuggets\"\n  subtext.innerHTML= \"The Exclusive Deconstructed Chicken Dining Experience\"\n\n  header.appendChild(name);\n  header.appendChild(subtext);\n  container.appendChild(header)\n  console.log(\"page loaded\")\n} \n\nconst createNav=(container)=>{\n\n    const nav = document.createElement(\"nav\");\n    const tabs = document.createElement(\"ul\");\n\n    const menu = document.createElement(\"li\")\n    const about = document.createElement(\"li\")\n    \n    menu.setAttribute(\"id\",\"menu\");\n    menu.setAttribute(\"class\",\"tab\");\n    about.setAttribute(\"id\",'about');\n    about.setAttribute(\"class\",'tab');\n    \n    menu.innerHTML=\"menu\"\n    about.innerHTML = \"about\"\n\n    tabs.appendChild(menu);\n\n    tabs.appendChild(about);\n\n    nav.appendChild(tabs);\n    \n    container.appendChild(nav);\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/initialPage.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/*! exports provided: loadMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMenuPage\", function() { return loadMenuPage; });\nconst loadMenuPage= (container)=>{\n  const menuDiv = document.createElement(\"div\")\n  menuDiv.setAttribute(\"id\",\"menuDiv\");\n\n const boot = createMenuItem('boot');\n const bell = createMenuItem('bell');\n const bone = createMenuItem('bone');\n const ball = createMenuItem('ball')\n\n menuDiv.appendChild(boot);\n menuDiv.appendChild(bell);\n menuDiv.appendChild(bone);\n menuDiv.appendChild(ball);\n\n\n container.appendChild(menuDiv);\n\n\n}\n\nconst createMenuItem = (id)=>{\n  const item = document.createElement(\"div\");\n  item.setAttribute(\"id\",id);\n  item.setAttribute('class','menuItem')\n  const image = document.createElement(\"img\");\n  image.setAttribute(\"class\",\"menuImg\")\n  image.src=`../assets/${id}.png`;\n  \n  const text = document.createElement(\"p\");\n  text.setAttribute(\"class\",\"menuText\")\n  text.textContent=`Le ${id}`;\n  \n\n  item.appendChild(text);\n  item.appendChild(image);\n\n  image.addEventListener(\"click\",function(){\n    window.open('https://www.google.com/search?q=mcdonalds+near+me',\"_blank\");\n  })\n\n  return item;\n\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/menuPage.js?");

/***/ }),

/***/ "./src/myName.js":
/*!***********************!*\
  !*** ./src/myName.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst myName = (name) => 'Hi! My name is ' + name;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myName);\n\n//# sourceURL=webpack:///./src/myName.js?");

/***/ })

/******/ });