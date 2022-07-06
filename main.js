/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./SFPro.OTF */ \"./src/SFPro.OTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./morning.jpg */ \"./src/morning.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./night.jpg */ \"./src/night.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./search.png */ \"./src/search.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: SFPro;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n*{\\n    font-family: SFPro, sans-serif;\\n    color: white;\\n}\\n\\n@keyframes fade {\\n    from {opacity: 0;}\\n    to {opacity: 1;}\\n}\\n\\nbody{\\n    margin: 0px;\\n    height: 100vh;\\n    background-size: cover;\\n    background-position: center;\\n}\\n\\n.morning{\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat;\\n}\\n\\n.night{\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat;\\n}\\n\\n#content,\\n#main-weather,\\n#sidebar{\\n    display: flex;\\n}\\n\\n#content{\\n    height: 100vh;\\n}\\n\\n#main{\\n    background-color: rgba(255,255,255,0);\\n    padding: 150px;\\n    display: flex;\\n    width: auto;\\n    flex: 1;\\n    align-items: flex-end;\\n    \\n}\\n\\n#main-weather{\\n    animation: fade 2s linear;\\n    gap: 32px;\\n    height: 120px;\\n    align-items: flex-end;\\n    \\n}\\n\\n#sidebar{\\n    display: flex;\\n    flex-direction: column;\\n    width: clamp(100px,40vw,600px);\\n    flex-direction: column;\\n    padding: 50px;\\n    gap: 16px;\\n    background-color: rgba(20, 20, 20, 0.3);\\n    backdrop-filter: blur(30px);\\n}\\n\\n#sidebar *{\\n    color: rgba(255,255,255,0.5);\\n    letter-spacing: 1px;\\n}\\n\\n#sidebar-container{\\n    display:flex;\\n    flex-direction: column;\\n    gap: 16px;\\n    animation: fade .8s linear\\n}\\n\\n#location-details{\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2px;\\n}\\n\\n#day-details,\\n#day-details div{\\n    display: flex;\\n}\\n#day-details{\\n    gap: 16px;\\n    font-size: 20px;\\n\\n}\\n\\n#weather{\\n    font-size: 20px;\\n}\\n\\n#temperature{\\n    font-size: 120px;\\n    height: 120px;\\n}\\n\\n#city{\\n    font-size: 60px;\\n    text-align: start;\\n}\\n\\n#box-information{\\n    display: flex;\\n    justify-content: space-between;\\n    width: clamp(100px,40vw,600px);\\n    font-size: 16px;\\n    \\n}\\n\\n#search-container{\\n    display: flex;\\n    gap: 8px;\\n    align-items: center;\\n    margin-bottom: 24px;\\n}\\n\\n#search-btn{\\n    width: 20px;\\n    height: 20px;\\n    background-image:url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n    background-size: contain;\\n    border: none;\\n    background-color: inherit;\\n    filter: invert(100%);\\n    cursor: pointer;\\n}\\n\\n#search-bar{\\n    background-color: inherit;\\n    height: 30px;\\n    border-top: none;\\n    border-left: none;\\n    border-right: none;\\n    border-bottom: 2px solid rgba(255,255,255,0.2);;\\n    transition: border-color 0.2s;\\n}\\n#search-bar::placeholder{\\n    color: rgba(255,255,255,0.5);\\n    letter-spacing: 1px;\\n}\\n#search-bar:focus{\\n    color: white;\\n    outline: none;\\n    border-top: none;\\n    border-left: none;\\n    border-right: none;\\n    border-color: white;\\n}\\n\\n#value,\\n#weather-title{\\n    color: white;\\n}\\n\\n#weather-title{\\n    margin-bottom: 24px;\\n    font-size: 24px;\\n}\\n\\n#weather-icon{\\n    width: 60px;\\n}\\n#weather-container{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.error{\\n    border-top: none;\\n    border-left: none;\\n    border-right: none;\\n    border-bottom: 1px solid red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/boxDetails.js":
/*!***************************!*\
  !*** ./src/boxDetails.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction boxDetails(title, value) {\n  const container = document.createElement('div');\n  const key = document.createElement('div');\n  const val = document.createElement('div');\n\n  key.textContent = title;\n  val.textContent = value;\n\n  container.appendChild(key);\n  container.appendChild(val);\n  container.setAttribute('id', 'box-information');\n  val.setAttribute('id', 'value');\n  return container;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boxDetails);\n\n\n//# sourceURL=webpack://weather-app/./src/boxDetails.js?");

/***/ }),

/***/ "./src/createSidebar.js":
/*!******************************!*\
  !*** ./src/createSidebar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _boxDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxDetails */ \"./src/boxDetails.js\");\n\n\nfunction createSidebar() {\n  const sidebar = document.querySelector('#sidebar');\n  const container = document.createElement('div');\n\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Feels Like', ''));\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('High', ''));\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Low', ''));\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Humidity', ''));\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Pressure', ''));\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Wind', ''));\n  container.setAttribute('id', 'sidebar-container');\n  sidebar.appendChild(container);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSidebar);\n\n\n//# sourceURL=webpack://weather-app/./src/createSidebar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ \"./src/loadPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _loadMainWeatherContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMainWeatherContainer */ \"./src/loadMainWeatherContainer.js\");\n/* harmony import */ var _createSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSidebar */ \"./src/createSidebar.js\");\n\n\n\n\n\ndocument.body.appendChild((0,_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\nconst main = document.querySelector('#main');\nconst sidebar = document.querySelector('#sidebar');\nmain.appendChild((0,_loadMainWeatherContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\nconst temperatureDiv = document.querySelector('#temperature');\nconst cityDiv = document.querySelector('#city');\nconst hourDiv = document.querySelector('#hour');\nconst minuteDiv = document.querySelector('#minute');\nconst dayDiv = document.querySelector('#day');\nconst dateDiv = document.querySelector('#date');\nconst monthDiv = document.querySelector('#month');\nconst mainWeather = document.querySelector('#main-weather');\nconst weatherImg = document.querySelector('#weather-icon');\n\nconst weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\nconst months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Octr', 'Nov', 'Dec'];\nconst weather = document.querySelector('#weather');\n\nasync function getWeather(location) {\n  try {\n    let response;\n    if (typeof location === 'string') {\n      response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=2a3e6417c89470aaa7587fa599ac7255`);\n    } else {\n      response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=metric&appid=2a3e6417c89470aaa7587fa599ac7255`);\n    }\n\n    const weatherData = await response.json();\n    console.log(weatherData);\n    return weatherData;\n  } catch (error) {\n    return error;\n  }\n}\n\nfunction getDate(timeOffSet) {\n  const date = new Date();\n  const localTime = date.getTime();\n  const localOffset = date.getTimezoneOffset() * 60000;\n  const utc = localTime + localOffset;\n  const location = utc + (1000 * timeOffSet);\n  const newDate = new Date(location);\n  return newDate;\n}\n\nfunction setTime(date) {\n  const hours = date.getHours().toString();\n  const minutes = date.getMinutes().toString();\n  hourDiv.textContent = (hours.length >= 2) ? `${hours}` : `0${hours}`;\n  minuteDiv.textContent = (minutes.length >= 2) ? `:${minutes}` : `:0${minutes}`;\n  dayDiv.textContent = `${weekday[date.getDay()]}-`;\n  dateDiv.textContent = `${date.getDate()}-`;\n  monthDiv.textContent = months[date.getMonth()];\n}\n\nsidebar.appendChild(createSearch());\nconst weatherTitle = document.createElement('div');\nweatherTitle.textContent = 'Weather Details';\nweatherTitle.setAttribute('id', 'weather-title');\nsidebar.appendChild(weatherTitle);\n(0,_createSidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nconst sidebarValues = document.querySelector('#sidebar-container');\n\nfunction createSearch() {\n  const searchContainer = document.createElement('div');\n  const search = document.createElement('input');\n  const searchBtn = document.createElement('button');\n\n  searchBtn.setAttribute('id', 'search-btn');\n  search.setAttribute('id', 'search-bar');\n  search.setAttribute('placeholder', 'Enter city name');\n  searchBtn.addEventListener('click', () => {\n    const location = search.value;\n    setData(location);\n    main.removeChild(mainWeather);\n    main.appendChild(mainWeather);\n    sidebar.removeChild(sidebarValues);\n    sidebar.appendChild(sidebarValues);\n  });\n\n  searchContainer.appendChild(search);\n  searchContainer.appendChild(searchBtn);\n  searchContainer.setAttribute('id', 'search-container');\n  return searchContainer;\n}\n\nfunction populateSidebar(weatherData) {\n  const boxValues = document.querySelectorAll('#value');\n  const data = [`${Math.ceil(weatherData.main.feels_like)}°`, `${Math.ceil(weatherData.main.temp_max)}°`, `${Math.ceil(weatherData.main.temp_min)}°`,\n    `${weatherData.main.humidity}%`, `${weatherData.main.humidity}hPa`, `${weatherData.wind.speed}m/s`];\n  for (let index = 0; index < data.length; index += 1) {\n    const value = data[index];\n    boxValues[index].textContent = value;\n  }\n}\n\nfunction setBackground(sunrise, sunset) {\n  console.log(hourDiv.textContent);\n  if (+hourDiv.textContent > +sunrise && +hourDiv.textContent < +sunset) {\n    document.body.classList.add('morning');\n    document.body.classList.remove('night');\n  } else {\n    document.body.classList.add('night');\n    document.body.classList.remove('morning');\n  }\n}\n\nasync function setData(location) {\n  try {\n    const weatherData = await getWeather(location);\n    const temp = Math.ceil(weatherData.main.temp);\n    temperatureDiv.textContent = `${temp}°`;\n    const imgID = weatherData.weather[0].icon;\n    weatherImg.src = `https://openweathermap.org/img/wn/${imgID}@2x.png`;\n    cityDiv.textContent = weatherData.name;\n    const date = getDate(weatherData.timezone);\n    setTime(date);\n    weather.textContent = weatherData.weather[0].main;\n    populateSidebar(weatherData);\n\n    // changing bg\n    const curDate = new Date();\n    // in hours\n    const localOffset = -curDate.getTimezoneOffset() / 60;\n    const locationOffset = weatherData.timezone / 3600;\n    const hourDif = localOffset - locationOffset;\n\n    const sunrise = new Date(weatherData.sys.sunrise * 1000 - hourDif * 3600000);\n    const sunset = new Date(weatherData.sys.sunset * 1000 - hourDif * 3600000);\n\n    const sunriseHour = sunrise.getHours();\n    const sunsetHour = sunset.getHours();\n\n    setBackground(sunriseHour, sunsetHour);\n    console.log(sunrise);\n    console.log(sunsetHour);\n    console.log(sunriseHour);\n  } catch (error) {\n    alert('Invalid City!');\n  }\n}\n\nfunction setPosition(position) {\n  setData([position.coords.latitude, position.coords.longitude]);\n}\n\nfunction getLocation() {\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(setPosition);\n  }\n  setData('Tokyo');\n}\n\ngetLocation();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/loadMainWeatherContainer.js":
/*!*****************************************!*\
  !*** ./src/loadMainWeatherContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMainWeatherContainer() {\n  const container = document.createElement('div');\n  const temp = document.createElement('div');\n  const locationDetails = document.createElement('div');\n  const city = document.createElement('div');\n  const dayDetails = document.createElement('div');\n  const time = document.createElement('div');\n  const fullDate = document.createElement('div');\n  const weather = document.createElement('div');\n  const weatherContainer = document.createElement('div');\n  const weatherIcon = document.createElement('img');\n\n  dayDetails.appendChild(time);\n  dayDetails.appendChild(fullDate);\n  locationDetails.appendChild(city);\n  locationDetails.appendChild(dayDetails);\n\n  temp.setAttribute('id', 'temperature');\n  city.setAttribute('id', 'city');\n  time.setAttribute('id', 'time');\n  fullDate.setAttribute('id', 'fullDate');\n  weather.setAttribute('id', 'weather');\n\n  locationDetails.setAttribute('id', 'location-details');\n  dayDetails.setAttribute('id', 'day-details');\n\n  const hour = document.createElement('div');\n  const minute = document.createElement('div');\n  hour.setAttribute('id', 'hour');\n  minute.setAttribute('id', 'minute');\n  time.appendChild(hour);\n  time.appendChild(minute);\n\n  const day = document.createElement('div');\n  const date = document.createElement('div');\n  const month = document.createElement('div');\n  day.setAttribute('id', 'day');\n  date.setAttribute('id', 'date');\n  month.setAttribute('id', 'month');\n\n  fullDate.appendChild(day);\n  fullDate.appendChild(date);\n  fullDate.appendChild(month);\n\n  weatherIcon.setAttribute('id', 'weather-icon');\n  weatherContainer.appendChild(weatherIcon);\n  weatherContainer.appendChild(weather);\n  weatherContainer.setAttribute('id', 'weather-container');\n\n  container.appendChild(temp);\n  container.appendChild(locationDetails);\n  container.appendChild(weatherContainer);\n  container.setAttribute('id', 'main-weather');\n  return container;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMainWeatherContainer);\n\n\n//# sourceURL=webpack://weather-app/./src/loadMainWeatherContainer.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadPage() {\n  const content = document.createElement('div');\n  const main = document.createElement('div');\n  const sidebar = document.createElement('div');\n\n  content.setAttribute('id', 'content');\n  main.setAttribute('id', 'main');\n  sidebar.setAttribute('id', 'sidebar');\n\n  content.appendChild(main);\n  content.appendChild(sidebar);\n  return content;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://weather-app/./src/loadPage.js?");

/***/ }),

/***/ "./src/SFPro.OTF":
/*!***********************!*\
  !*** ./src/SFPro.OTF ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1f5e6e16dd4f75c3950.OTF\";\n\n//# sourceURL=webpack://weather-app/./src/SFPro.OTF?");

/***/ }),

/***/ "./src/morning.jpg":
/*!*************************!*\
  !*** ./src/morning.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a647d94762f184792c5.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/morning.jpg?");

/***/ }),

/***/ "./src/night.jpg":
/*!***********************!*\
  !*** ./src/night.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51496e92506300e2ec40.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/night.jpg?");

/***/ }),

/***/ "./src/search.png":
/*!************************!*\
  !*** ./src/search.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9af906ce3b12167b5a03.png\";\n\n//# sourceURL=webpack://weather-app/./src/search.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;