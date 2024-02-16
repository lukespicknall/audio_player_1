/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

#track-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 75%; */
}

.track {
    width: 75%;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n#track-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* width: 75%; */\n}\n\n.track {\n    width: 75%;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/audio/01_EarlyLife.mp3":
/*!************************************!*\
  !*** ./src/audio/01_EarlyLife.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29f92f439db239e1cf82.mp3";

/***/ }),

/***/ "./src/audio/02_MomKidsCarpentry.mp3":
/*!*******************************************!*\
  !*** ./src/audio/02_MomKidsCarpentry.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41a09126b9dc92083baf.mp3";

/***/ }),

/***/ "./src/audio/03_Nature.mp3":
/*!*********************************!*\
  !*** ./src/audio/03_Nature.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2808ab497d593009280.mp3";

/***/ }),

/***/ "./src/audio/04_Religion.mp3":
/*!***********************************!*\
  !*** ./src/audio/04_Religion.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bef1a95b70e1e6a1ad37.mp3";

/***/ }),

/***/ "./src/audio/05_AdviceToGrandkids.mp3":
/*!********************************************!*\
  !*** ./src/audio/05_AdviceToGrandkids.mp3 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35be8c397cdc6ed68954.mp3";

/***/ }),

/***/ "./src/audio/06_AdviceToHisKids.mp3":
/*!******************************************!*\
  !*** ./src/audio/06_AdviceToHisKids.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56aa165290a81e47ffbf.mp3";

/***/ }),

/***/ "./src/audio/07_MessageToTheFamily.mp3":
/*!*********************************************!*\
  !*** ./src/audio/07_MessageToTheFamily.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "145ebe03cac0582eb819.mp3";

/***/ }),

/***/ "./src/audio/08_MessageToMom.mp3":
/*!***************************************!*\
  !*** ./src/audio/08_MessageToMom.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e513ff632cb094763f70.mp3";

/***/ }),

/***/ "./src/audio/09_DadSingsKristofferson.mp3":
/*!************************************************!*\
  !*** ./src/audio/09_DadSingsKristofferson.mp3 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ae1970e6878a74ca007.mp3";

/***/ }),

/***/ "./node_modules/wavesurfer.js/dist/wavesurfer.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/wavesurfer.js/dist/wavesurfer.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,s){return new(i||(i=Promise))((function(n,r){function o(t){try{h(s.next(t))}catch(t){r(t)}}function a(t){try{h(s.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}h((s=s.apply(t,e||[])).next())}))}class e{constructor(){this.listeners={}}on(t,e,i){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),null==i?void 0:i.once){const i=()=>{this.un(t,i),this.un(t,e)};return this.on(t,i),i}return()=>this.un(t,e)}un(t,e){var i;null===(i=this.listeners[t])||void 0===i||i.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach((t=>t(...e)))}}const i={decode:function(e,i){return t(this,void 0,void 0,(function*(){const t=new AudioContext({sampleRate:i});return t.decodeAudioData(e).finally((()=>t.close()))}))},createBuffer:function(t,e){return"number"==typeof t[0]&&(t=[t]),function(t){const e=t[0];if(e.some((t=>t>1||t<-1))){const i=e.length;let s=0;for(let t=0;t<i;t++){const i=Math.abs(e[t]);i>s&&(s=i)}for(const e of t)for(let t=0;t<i;t++)e[t]/=s}}(t),{duration:e,length:t[0].length,sampleRate:t[0].length/e,numberOfChannels:t.length,getChannelData:e=>null==t?void 0:t[e],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function s(t,e){const i=e.xmlns?document.createElementNS(e.xmlns,t):document.createElement(t);for(const[t,n]of Object.entries(e))if("children"===t)for(const[t,n]of Object.entries(e))"string"==typeof n?i.appendChild(document.createTextNode(n)):i.appendChild(s(t,n));else"style"===t?Object.assign(i.style,n):"textContent"===t?i.textContent=n:i.setAttribute(t,n.toString());return i}function n(t,e,i){const n=s(t,e||{});return null==i||i.appendChild(n),n}var r=Object.freeze({__proto__:null,createElement:n,default:n});const o={fetchBlob:function(e,i,s){return t(this,void 0,void 0,(function*(){const n=yield fetch(e,s);if(n.status>=400)throw new Error(`Failed to fetch ${e}: ${n.status} (${n.statusText})`);return function(e,i){t(this,void 0,void 0,(function*(){if(!e.body||!e.headers)return;const s=e.body.getReader(),n=Number(e.headers.get("Content-Length"))||0;let r=0;const o=e=>t(this,void 0,void 0,(function*(){r+=(null==e?void 0:e.length)||0;const t=Math.round(r/n*100);i(t)})),a=()=>t(this,void 0,void 0,(function*(){let t;try{t=yield s.read()}catch(t){return}t.done||(o(t.value),yield a())}));a()}))}(n.clone(),i),n.blob()}))}};class a extends e{constructor(t){super(),this.isExternalMedia=!1,t.media?(this.media=t.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),t.mediaControls&&(this.media.controls=!0),t.autoplay&&(this.media.autoplay=!0),null!=t.playbackRate&&this.onceMediaEvent("canplay",(()=>{null!=t.playbackRate&&(this.media.playbackRate=t.playbackRate)}))}onMediaEvent(t,e,i){return this.media.addEventListener(t,e,i),()=>this.media.removeEventListener(t,e)}onceMediaEvent(t,e){return this.onMediaEvent(t,e,{once:!0})}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const t=this.getSrc();t.startsWith("blob:")&&URL.revokeObjectURL(t)}canPlayType(t){return""!==this.media.canPlayType(t)}setSrc(t,e){if(this.getSrc()===t)return;this.revokeSrc();const i=e instanceof Blob&&this.canPlayType(e.type)?URL.createObjectURL(e):t;this.media.src=i}destroy(){this.media.pause(),this.isExternalMedia||(this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(t){this.media=t}play(){return t(this,void 0,void 0,(function*(){if(this.media.src)return this.media.play()}))}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(t){this.media.currentTime=t}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(t){this.media.volume=t}getMuted(){return this.media.muted}setMuted(t){this.media.muted=t}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(t,e){null!=e&&(this.media.preservesPitch=e),this.media.playbackRate=t}getMediaElement(){return this.media}setSinkId(t){return this.media.setSinkId(t)}}class h extends e{constructor(t,e){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.options=t;const i=this.parentFromOptionsContainer(t.container);this.parent=i;const[s,n]=this.initHtml();i.appendChild(s),this.container=s,this.scrollContainer=n.querySelector(".scroll"),this.wrapper=n.querySelector(".wrapper"),this.canvasWrapper=n.querySelector(".canvases"),this.progressWrapper=n.querySelector(".progress"),this.cursor=n.querySelector(".cursor"),e&&n.appendChild(e),this.initEvents()}parentFromOptionsContainer(t){let e;if("string"==typeof t?e=document.querySelector(t):t instanceof HTMLElement&&(e=t),!e)throw new Error("Container not found");return e}initEvents(){const t=t=>{const e=this.wrapper.getBoundingClientRect(),i=t.clientX-e.left,s=t.clientX-e.left;return[i/e.width,s/e.height]};this.wrapper.addEventListener("click",(e=>{const[i,s]=t(e);this.emit("click",i,s)})),this.wrapper.addEventListener("dblclick",(e=>{const[i,s]=t(e);this.emit("dblclick",i,s)})),this.options.dragToSeek&&this.initDrag(),this.scrollContainer.addEventListener("scroll",(()=>{const{scrollLeft:t,scrollWidth:e,clientWidth:i}=this.scrollContainer,s=t/e,n=(t+i)/e;this.emit("scroll",s,n)}));const e=this.createDelay(100);this.resizeObserver=new ResizeObserver((()=>{e().then((()=>this.onContainerResize())).catch((()=>{}))})),this.resizeObserver.observe(this.scrollContainer)}onContainerResize(){const t=this.parent.clientWidth;t===this.lastContainerWidth&&"auto"!==this.options.height||(this.lastContainerWidth=t,this.reRender())}initDrag(){!function(t,e,i,s,n=3,r=0){if(!t)return()=>{};let o=()=>{};const a=a=>{if(a.button!==r)return;a.preventDefault(),a.stopPropagation();let h=a.clientX,l=a.clientY,d=!1;const c=s=>{s.preventDefault(),s.stopPropagation();const r=s.clientX,o=s.clientY,a=r-h,c=o-l;if(d||Math.abs(a)>n||Math.abs(c)>n){const s=t.getBoundingClientRect(),{left:n,top:u}=s;d||(null==i||i(h-n,l-u),d=!0),e(a,c,r-n,o-u),h=r,l=o}},u=()=>{d&&(null==s||s()),o()},p=t=>{t.relatedTarget&&t.relatedTarget!==document.documentElement||u()},m=t=>{d&&(t.stopPropagation(),t.preventDefault())},f=t=>{d&&t.preventDefault()};document.addEventListener("pointermove",c),document.addEventListener("pointerup",u),document.addEventListener("pointerout",p),document.addEventListener("pointercancel",p),document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("click",m,{capture:!0}),o=()=>{document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",u),document.removeEventListener("pointerout",p),document.removeEventListener("pointercancel",p),document.removeEventListener("touchmove",f),setTimeout((()=>{document.removeEventListener("click",m,{capture:!0})}),10)}};t.addEventListener("pointerdown",a)}(this.wrapper,((t,e,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))}),(()=>this.isDragging=!0),(()=>this.isDragging=!1))}getHeight(t){return null==t?128:isNaN(Number(t))?"auto"===t&&this.parent.clientHeight||128:Number(t)}initHtml(){const t=document.createElement("div"),e=t.attachShadow({mode:"open"});return e.innerHTML=`\n      <style>\n        :host {\n          user-select: none;\n          min-width: 1px;\n        }\n        :host audio {\n          display: block;\n          width: 100%;\n        }\n        :host .scroll {\n          overflow-x: auto;\n          overflow-y: hidden;\n          width: 100%;\n          position: relative;\n        }\n        :host .noScrollbar {\n          scrollbar-color: transparent;\n          scrollbar-width: none;\n        }\n        :host .noScrollbar::-webkit-scrollbar {\n          display: none;\n          -webkit-appearance: none;\n        }\n        :host .wrapper {\n          position: relative;\n          overflow: visible;\n          z-index: 2;\n        }\n        :host .canvases {\n          min-height: ${this.getHeight(this.options.height)}px;\n        }\n        :host .canvases > div {\n          position: relative;\n        }\n        :host canvas {\n          display: block;\n          position: absolute;\n          top: 0;\n          image-rendering: pixelated;\n        }\n        :host .progress {\n          pointer-events: none;\n          position: absolute;\n          z-index: 2;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          overflow: hidden;\n        }\n        :host .progress > div {\n          position: relative;\n        }\n        :host .cursor {\n          pointer-events: none;\n          position: absolute;\n          z-index: 5;\n          top: 0;\n          left: 0;\n          height: 100%;\n          border-radius: 2px;\n        }\n      </style>\n\n      <div class="scroll" part="scroll">\n        <div class="wrapper" part="wrapper">\n          <div class="canvases"></div>\n          <div class="progress" part="progress"></div>\n          <div class="cursor" part="cursor"></div>\n        </div>\n      </div>\n    `,[t,e]}setOptions(t){if(this.options.container!==t.container){const e=this.parentFromOptionsContainer(t.container);e.appendChild(this.container),this.parent=e}t.dragToSeek&&!this.options.dragToSeek&&this.initDrag(),this.options=t,this.reRender()}getWrapper(){return this.wrapper}getScroll(){return this.scrollContainer.scrollLeft}setScroll(t){this.scrollContainer.scrollLeft=t}setScrollPercentage(t){const{scrollWidth:e}=this.scrollContainer,i=e*t;this.setScroll(i)}destroy(){var t;this.container.remove(),null===(t=this.resizeObserver)||void 0===t||t.disconnect()}createDelay(t=10){let e,i;const s=()=>{e&&clearTimeout(e),i&&i()};return this.timeouts.push(s),()=>new Promise(((n,r)=>{s(),i=r,e=setTimeout((()=>{e=void 0,i=void 0,n()}),t)}))}convertColorValues(t){if(!Array.isArray(t))return t||"";if(t.length<2)return t[0]||"";const e=document.createElement("canvas"),i=e.getContext("2d"),s=e.height*(window.devicePixelRatio||1),n=i.createLinearGradient(0,0,0,s),r=1/(t.length-1);return t.forEach(((t,e)=>{const i=e*r;n.addColorStop(i,t)})),n}renderBarWaveform(t,e,i,s){const n=t[0],r=t[1]||t[0],o=n.length,{width:a,height:h}=i.canvas,l=h/2,d=window.devicePixelRatio||1,c=e.barWidth?e.barWidth*d:1,u=e.barGap?e.barGap*d:e.barWidth?c/2:0,p=e.barRadius||0,m=a/(c+u)/o,f=p&&"roundRect"in i?"roundRect":"rect";i.beginPath();let g=0,v=0,b=0;for(let t=0;t<=o;t++){const o=Math.round(t*m);if(o>g){const t=Math.round(v*l*s),n=t+Math.round(b*l*s)||1;let r=l-t;"top"===e.barAlign?r=0:"bottom"===e.barAlign&&(r=h-n),i[f](g*(c+u),r,c,n,p),g=o,v=0,b=0}const a=Math.abs(n[t]||0),d=Math.abs(r[t]||0);a>v&&(v=a),d>b&&(b=d)}i.fill(),i.closePath()}renderLineWaveform(t,e,i,s){const n=e=>{const n=t[e]||t[0],r=n.length,{height:o}=i.canvas,a=o/2,h=i.canvas.width/r;i.moveTo(0,a);let l=0,d=0;for(let t=0;t<=r;t++){const r=Math.round(t*h);if(r>l){const t=a+(Math.round(d*a*s)||1)*(0===e?-1:1);i.lineTo(l,t),l=r,d=0}const o=Math.abs(n[t]||0);o>d&&(d=o)}i.lineTo(l,a)};i.beginPath(),n(0),n(1),i.fill(),i.closePath()}renderWaveform(t,e,i){if(i.fillStyle=this.convertColorValues(e.waveColor),e.renderFunction)return void e.renderFunction(t,i);let s=e.barHeight||1;if(e.normalize){const e=Array.from(t[0]).reduce(((t,e)=>Math.max(t,Math.abs(e))),0);s=e?1/e:1}e.barWidth||e.barGap||e.barAlign?this.renderBarWaveform(t,e,i,s):this.renderLineWaveform(t,e,i,s)}renderSingleCanvas(t,e,i,s,n,r,o,a){const h=window.devicePixelRatio||1,l=document.createElement("canvas"),d=t[0].length;l.width=Math.round(i*(r-n)/d),l.height=s*h,l.style.width=`${Math.floor(l.width/h)}px`,l.style.height=`${s}px`,l.style.left=`${Math.floor(n*i/h/d)}px`,o.appendChild(l);const c=l.getContext("2d");if(this.renderWaveform(t.map((t=>t.slice(n,r))),e,c),l.width>0&&l.height>0){const t=l.cloneNode(),i=t.getContext("2d");i.drawImage(l,0,0),i.globalCompositeOperation="source-in",i.fillStyle=this.convertColorValues(e.progressColor),i.fillRect(0,0,l.width,l.height),a.appendChild(t)}}renderChannel(e,i,s){return t(this,void 0,void 0,(function*(){const n=document.createElement("div"),r=this.getHeight(i.height);n.style.height=`${r}px`,this.canvasWrapper.style.minHeight=`${r}px`,this.canvasWrapper.appendChild(n);const o=n.cloneNode();this.progressWrapper.appendChild(o);const a=e[0].length,l=(t,h)=>{this.renderSingleCanvas(e,i,s,r,Math.max(0,t),Math.min(h,a),n,o)};if(!this.isScrollable)return void l(0,a);const{scrollLeft:d,scrollWidth:c,clientWidth:u}=this.scrollContainer,p=a/c;let m=Math.min(h.MAX_CANVAS_WIDTH,u);if(i.barWidth||i.barGap){const t=i.barWidth||.5,e=t+(i.barGap||t/2);m%e!=0&&(m=Math.floor(m/e)*e)}const f=Math.floor(Math.abs(d)*p),g=Math.floor(f+m*p),v=g-f;v<=0||(l(f,g),yield Promise.all([(()=>t(this,void 0,void 0,(function*(){if(0===f)return;const t=this.createDelay();for(let e=f;e>=0;e-=v)yield t(),l(Math.max(0,e-v),e)})))(),(()=>t(this,void 0,void 0,(function*(){if(g===a)return;const t=this.createDelay();for(let e=g;e<a;e+=v)yield t(),l(e,Math.min(a,e+v))})))()]))}))}render(e){return t(this,void 0,void 0,(function*(){this.timeouts.forEach((t=>t())),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",null!=this.options.width&&(this.scrollContainer.style.width="number"==typeof this.options.width?`${this.options.width}px`:this.options.width);const t=window.devicePixelRatio||1,i=this.scrollContainer.clientWidth,s=Math.ceil(e.duration*(this.options.minPxPerSec||0));this.isScrollable=s>i;const n=this.options.fillParent&&!this.isScrollable,r=(n?i:s)*t;this.wrapper.style.width=n?"100%":`${s}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=e,this.emit("render");try{if(this.options.splitChannels)yield Promise.all(Array.from({length:e.numberOfChannels}).map(((t,i)=>{var s;const n=Object.assign(Object.assign({},this.options),null===(s=this.options.splitChannels)||void 0===s?void 0:s[i]);return this.renderChannel([e.getChannelData(i)],n,r)})));else{const t=[e.getChannelData(0)];e.numberOfChannels>1&&t.push(e.getChannelData(1)),yield this.renderChannel(t,this.options,r)}}catch(t){return}this.emit("rendered")}))}reRender(){if(!this.audioData)return;const{scrollWidth:t}=this.scrollContainer,{right:e}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&t!==this.scrollContainer.scrollWidth){const{right:t}=this.progressWrapper.getBoundingClientRect();let i=t-e;i*=2,i=i<0?Math.floor(i):Math.ceil(i),i/=2,this.scrollContainer.scrollLeft+=i}}zoom(t){this.options.minPxPerSec=t,this.reRender()}scrollIntoView(t,e=!1){const{scrollLeft:i,scrollWidth:s,clientWidth:n}=this.scrollContainer,r=t*s,o=i,a=i+n,h=n/2;if(this.isDragging){const t=30;r+t>a?this.scrollContainer.scrollLeft+=t:r-t<o&&(this.scrollContainer.scrollLeft-=t)}else{(r<o||r>a)&&(this.scrollContainer.scrollLeft=r-(this.options.autoCenter?h:0));const t=r-i-h;e&&this.options.autoCenter&&t>0&&(this.scrollContainer.scrollLeft+=Math.min(t,10))}{const t=this.scrollContainer.scrollLeft,e=t/s,i=(t+n)/s;this.emit("scroll",e,i)}}renderProgress(t,e){if(isNaN(t))return;const i=100*t;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${100===Math.round(i)?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(t,e)}exportImage(e,i,s){return t(this,void 0,void 0,(function*(){const t=this.canvasWrapper.querySelectorAll("canvas");if(!t.length)throw new Error("No waveform data");if("dataURL"===s){const s=Array.from(t).map((t=>t.toDataURL(e,i)));return Promise.resolve(s)}return Promise.all(Array.from(t).map((t=>new Promise(((s,n)=>{t.toBlob((t=>{t?s(t):n(new Error("Could not export image"))}),e,i)})))))}))}}h.MAX_CANVAS_WIDTH=4e3;class l extends e{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",(()=>{requestAnimationFrame((()=>{this.emit("tick")}))})),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class d extends e{constructor(t=new AudioContext){super(),this.bufferNode=null,this.autoplay=!1,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=t,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return t(this,void 0,void 0,(function*(){}))}get src(){return this.currentSrc}set src(t){if(this.currentSrc=t,!t)return this.buffer=null,void this.emit("emptied");fetch(t).then((e=>{if(e.status>=400)throw new Error(`Failed to fetch ${t}: ${e.status} (${e.statusText})`);return e.arrayBuffer()})).then((e=>this.currentSrc!==t?null:this.audioContext.decodeAudioData(e))).then((e=>{this.currentSrc===t&&(this.buffer=e,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())}))}_play(){var t;if(!this.paused)return;this.paused=!1,null===(t=this.bufferNode)||void 0===t||t.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.bufferNode.buffer=this.buffer,this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let e=this.playedDuration*this._playbackRate;e>=this.duration&&(e=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,e),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var t;this.paused=!0,null===(t=this.bufferNode)||void 0===t||t.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return t(this,void 0,void 0,(function*(){this.paused&&(this._play(),this.emit("play"))}))}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(t){var e,i;const s=t-this.currentTime;null===(e=this.bufferNode)||void 0===e||e.stop(this.audioContext.currentTime+s),null===(i=this.bufferNode)||void 0===i||i.addEventListener("ended",(()=>{this.bufferNode=null,this.pause()}),{once:!0})}setSinkId(e){return t(this,void 0,void 0,(function*(){return this.audioContext.setSinkId(e)}))}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this.bufferNode&&(this.bufferNode.playbackRate.value=t)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(t){this.emit("seeking");const e=!this.paused;e&&this._pause(),this.playedDuration=t/this._playbackRate,e&&this._play(),this.emit("timeupdate")}get duration(){var t;return(null===(t=this.buffer)||void 0===t?void 0:t.duration)||0}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.value=t,this.emit("volumechange")}get muted(){return this._muted}set muted(t){this._muted!==t&&(this._muted=t,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(t){return/^(audio|video)\//.test(t)}getGainNode(){return this.gainNode}getChannelData(){const t=[];if(!this.buffer)return t;const e=this.buffer.numberOfChannels;for(let i=0;i<e;i++)t.push(this.buffer.getChannelData(i));return t}}const c={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class u extends a{static create(t){return new u(t)}constructor(t){const e=t.media||("WebAudio"===t.backend?new d:void 0);super({media:e,mediaControls:t.mediaControls,autoplay:t.autoplay,playbackRate:t.audioRate}),this.plugins=[],this.decodedData=null,this.subscriptions=[],this.mediaSubscriptions=[],this.options=Object.assign({},c,t),this.timer=new l;const i=e?void 0:this.getMediaElement();this.renderer=new h(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins(),Promise.resolve().then((()=>{this.emit("init");const t=this.options.url||this.getSrc()||"";(t||this.options.peaks&&this.options.duration)&&this.load(t,this.options.peaks,this.options.duration)}))}updateProgress(t=this.getCurrentTime()){return this.renderer.renderProgress(t/this.getDuration(),this.isPlaying()),t}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",(()=>{if(!this.isSeeking()){const t=this.updateProgress();this.emit("timeupdate",t),this.emit("audioprocess",t)}})))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",(()=>{const t=this.updateProgress();this.emit("timeupdate",t)})),this.onMediaEvent("play",(()=>{this.emit("play"),this.timer.start()})),this.onMediaEvent("pause",(()=>{this.emit("pause"),this.timer.stop()})),this.onMediaEvent("emptied",(()=>{this.timer.stop()})),this.onMediaEvent("ended",(()=>{this.emit("finish")})),this.onMediaEvent("seeking",(()=>{this.emit("seeking",this.getCurrentTime())})))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",((t,e)=>{this.options.interact&&(this.seekTo(t),this.emit("interaction",t*this.getDuration()),this.emit("click",t,e))})),this.renderer.on("dblclick",((t,e)=>{this.emit("dblclick",t,e)})),this.renderer.on("scroll",((t,e)=>{const i=this.getDuration();this.emit("scroll",t*i,e*i)})),this.renderer.on("render",(()=>{this.emit("redraw")})),this.renderer.on("rendered",(()=>{this.emit("redrawcomplete")})));{let t;this.subscriptions.push(this.renderer.on("drag",(e=>{this.options.interact&&(this.renderer.renderProgress(e),clearTimeout(t),t=setTimeout((()=>{this.seekTo(e)}),this.isPlaying()?0:200),this.emit("interaction",e*this.getDuration()),this.emit("drag",e))})))}}initPlugins(){var t;(null===(t=this.options.plugins)||void 0===t?void 0:t.length)&&this.options.plugins.forEach((t=>{this.registerPlugin(t)}))}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach((t=>t())),this.mediaSubscriptions=[]}setOptions(t){this.options=Object.assign({},this.options,t),this.renderer.setOptions(this.options),t.audioRate&&this.setPlaybackRate(t.audioRate),null!=t.mediaControls&&(this.getMediaElement().controls=t.mediaControls)}registerPlugin(t){return t._init(this),this.plugins.push(t),this.subscriptions.push(t.once("destroy",(()=>{this.plugins=this.plugins.filter((e=>e!==t))}))),t}getWrapper(){return this.renderer.getWrapper()}getScroll(){return this.renderer.getScroll()}setScrollTime(t){const e=t/this.getDuration();this.renderer.setScrollPercentage(e)}getActivePlugins(){return this.plugins}loadAudio(e,s,n,r){return t(this,void 0,void 0,(function*(){if(this.emit("load",e),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,!s&&!n){const t=t=>this.emit("loading",t);s=yield o.fetchBlob(e,t,this.options.fetchParams)}this.setSrc(e,s);const t=r||this.getDuration()||(yield new Promise((t=>{this.onceMediaEvent("loadedmetadata",(()=>t(this.getDuration())))})));if(n)this.decodedData=i.createBuffer(n,t||0);else if(s){const t=yield s.arrayBuffer();this.decodedData=yield i.decode(t,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())}))}load(e,i,s){return t(this,void 0,void 0,(function*(){yield this.loadAudio(e,void 0,i,s)}))}loadBlob(e,i,s){return t(this,void 0,void 0,(function*(){yield this.loadAudio("blob",e,i,s)}))}zoom(t){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(t),this.emit("zoom",t)}getDecodedData(){return this.decodedData}exportPeaks({channels:t=2,maxLength:e=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const s=Math.min(t,this.decodedData.numberOfChannels),n=[];for(let t=0;t<s;t++){const s=this.decodedData.getChannelData(t),r=[],o=Math.round(s.length/e);for(let t=0;t<e;t++){const e=s.slice(t*o,(t+1)*o);let n=0;for(let t=0;t<e.length;t++){const i=e[t];Math.abs(i)>Math.abs(n)&&(n=i)}r.push(Math.round(n*i)/i)}n.push(r)}return n}getDuration(){let t=super.getDuration()||0;return 0!==t&&t!==1/0||!this.decodedData||(t=this.decodedData.duration),t}toggleInteraction(t){this.options.interact=t}setTime(t){super.setTime(t),this.updateProgress(t)}seekTo(t){const e=this.getDuration()*t;this.setTime(e)}playPause(){return t(this,void 0,void 0,(function*(){return this.isPlaying()?this.pause():this.play()}))}stop(){this.pause(),this.setTime(0)}skip(t){this.setTime(this.getCurrentTime()+t)}empty(){this.load("",[[0]],.001)}setMediaElement(t){this.unsubscribePlayerEvents(),super.setMediaElement(t),this.initPlayerEvents()}exportImage(e="image/png",i=1,s="dataURL"){return t(this,void 0,void 0,(function*(){return this.renderer.exportImage(e,i,s)}))}destroy(){this.emit("destroy"),this.plugins.forEach((t=>t.destroy())),this.subscriptions.forEach((t=>t())),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}u.BasePlugin=class extends e{constructor(t){super(),this.subscriptions=[],this.options=t}onInit(){}_init(t){this.wavesurfer=t,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach((t=>t()))}},u.dom=r;


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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wavesurfer.js */ "./node_modules/wavesurfer.js/dist/wavesurfer.esm.js");
/* harmony import */ var _audio_01_EarlyLife_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio/01_EarlyLife.mp3 */ "./src/audio/01_EarlyLife.mp3");
/* harmony import */ var _audio_02_MomKidsCarpentry_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio/02_MomKidsCarpentry.mp3 */ "./src/audio/02_MomKidsCarpentry.mp3");
/* harmony import */ var _audio_03_Nature_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio/03_Nature.mp3 */ "./src/audio/03_Nature.mp3");
/* harmony import */ var _audio_04_Religion_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio/04_Religion.mp3 */ "./src/audio/04_Religion.mp3");
/* harmony import */ var _audio_05_AdviceToGrandkids_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio/05_AdviceToGrandkids.mp3 */ "./src/audio/05_AdviceToGrandkids.mp3");
/* harmony import */ var _audio_06_AdviceToHisKids_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio/06_AdviceToHisKids.mp3 */ "./src/audio/06_AdviceToHisKids.mp3");
/* harmony import */ var _audio_07_MessageToTheFamily_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio/07_MessageToTheFamily.mp3 */ "./src/audio/07_MessageToTheFamily.mp3");
/* harmony import */ var _audio_08_MessageToMom_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audio/08_MessageToMom.mp3 */ "./src/audio/08_MessageToMom.mp3");
/* harmony import */ var _audio_09_DadSingsKristofferson_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audio/09_DadSingsKristofferson.mp3 */ "./src/audio/09_DadSingsKristofferson.mp3");












// puts audio files in an array
const tracks = [
  _audio_01_EarlyLife_mp3__WEBPACK_IMPORTED_MODULE_2__,
  _audio_02_MomKidsCarpentry_mp3__WEBPACK_IMPORTED_MODULE_3__,
  _audio_03_Nature_mp3__WEBPACK_IMPORTED_MODULE_4__,
  _audio_04_Religion_mp3__WEBPACK_IMPORTED_MODULE_5__,
  _audio_05_AdviceToGrandkids_mp3__WEBPACK_IMPORTED_MODULE_6__,
  _audio_06_AdviceToHisKids_mp3__WEBPACK_IMPORTED_MODULE_7__,
  _audio_07_MessageToTheFamily_mp3__WEBPACK_IMPORTED_MODULE_8__,
  _audio_08_MessageToMom_mp3__WEBPACK_IMPORTED_MODULE_9__,
  _audio_09_DadSingsKristofferson_mp3__WEBPACK_IMPORTED_MODULE_10__,
];

// creates a container for the tracks and appends it to DOM
const trackContainer = document.createElement('div');
trackContainer.id = 'track-container';
document.body.appendChild(trackContainer);

for (let i = 0; i < tracks.length; i += 1) {
  // create a track div w/ id of track[i], add class
  const track = document.createElement('div');
  track.id = `track${[i]}`;
  track.classList.add('track');
  trackContainer.appendChild(track);

  // create wavesurfer instance, append to the above track div, options
  const wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    container: `#track${[i]}`,
    waveColor: 'rgb(200, 0, 200)',
    progressColor: 'rgb(100, 0, 100)',
    barWidth: 0,
    barRadius: 0,
  });

  // load track[i] into wavesurfer instance
  wavesurfer.load(tracks[i]);

  // create play button
  const play = document.createElement('button');
  play.textContent = 'Play/Plause';
  // on click, it plays or pauses the wavesurfer instance
  play.onclick = () => {
    wavesurfer.playPause();
  };
  // append to track
  track.appendChild(play);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNrQjtBQUNVO0FBQ2M7QUFDcEI7QUFDSTtBQUNrQjtBQUNKO0FBQ007QUFDWjtBQUNrQjs7QUFFekU7QUFDQTtBQUNBLEVBQUUsb0RBQVM7QUFDWCxFQUFFLDJEQUFnQjtBQUNsQixFQUFFLGlEQUFNO0FBQ1IsRUFBRSxtREFBUTtBQUNWLEVBQUUsNERBQWlCO0FBQ25CLEVBQUUsMERBQWU7QUFDakIsRUFBRSw2REFBa0I7QUFDcEIsRUFBRSx1REFBWTtBQUNkLEVBQUUsaUVBQXFCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBLHFCQUFxQixJQUFJO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIscURBQVU7QUFDL0Isd0JBQXdCLElBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvd2F2ZXN1cmZlci5qcy9kaXN0L3dhdmVzdXJmZXIuZXNtLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jdHJhY2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiB3aWR0aDogNzUlOyAqL1xufVxuXG4udHJhY2sge1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI3RyYWNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHdpZHRoOiA3NSU7ICovXFxufVxcblxcbi50cmFjayB7XFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbmZ1bmN0aW9uIHQodCxlLGkscyl7cmV0dXJuIG5ldyhpfHwoaT1Qcm9taXNlKSkoKGZ1bmN0aW9uKG4scil7ZnVuY3Rpb24gbyh0KXt0cnl7aChzLm5leHQodCkpfWNhdGNoKHQpe3IodCl9fWZ1bmN0aW9uIGEodCl7dHJ5e2gocy50aHJvdyh0KSl9Y2F0Y2godCl7cih0KX19ZnVuY3Rpb24gaCh0KXt2YXIgZTt0LmRvbmU/bih0LnZhbHVlKTooZT10LnZhbHVlLGUgaW5zdGFuY2VvZiBpP2U6bmV3IGkoKGZ1bmN0aW9uKHQpe3QoZSl9KSkpLnRoZW4obyxhKX1oKChzPXMuYXBwbHkodCxlfHxbXSkpLm5leHQoKSl9KSl9Y2xhc3MgZXtjb25zdHJ1Y3Rvcigpe3RoaXMubGlzdGVuZXJzPXt9fW9uKHQsZSxpKXtpZih0aGlzLmxpc3RlbmVyc1t0XXx8KHRoaXMubGlzdGVuZXJzW3RdPW5ldyBTZXQpLHRoaXMubGlzdGVuZXJzW3RdLmFkZChlKSxudWxsPT1pP3ZvaWQgMDppLm9uY2Upe2NvbnN0IGk9KCk9Pnt0aGlzLnVuKHQsaSksdGhpcy51bih0LGUpfTtyZXR1cm4gdGhpcy5vbih0LGkpLGl9cmV0dXJuKCk9PnRoaXMudW4odCxlKX11bih0LGUpe3ZhciBpO251bGw9PT0oaT10aGlzLmxpc3RlbmVyc1t0XSl8fHZvaWQgMD09PWl8fGkuZGVsZXRlKGUpfW9uY2UodCxlKXtyZXR1cm4gdGhpcy5vbih0LGUse29uY2U6ITB9KX11bkFsbCgpe3RoaXMubGlzdGVuZXJzPXt9fWVtaXQodCwuLi5lKXt0aGlzLmxpc3RlbmVyc1t0XSYmdGhpcy5saXN0ZW5lcnNbdF0uZm9yRWFjaCgodD0+dCguLi5lKSkpfX1jb25zdCBpPXtkZWNvZGU6ZnVuY3Rpb24oZSxpKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2NvbnN0IHQ9bmV3IEF1ZGlvQ29udGV4dCh7c2FtcGxlUmF0ZTppfSk7cmV0dXJuIHQuZGVjb2RlQXVkaW9EYXRhKGUpLmZpbmFsbHkoKCgpPT50LmNsb3NlKCkpKX0pKX0sY3JlYXRlQnVmZmVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHRbMF0mJih0PVt0XSksZnVuY3Rpb24odCl7Y29uc3QgZT10WzBdO2lmKGUuc29tZSgodD0+dD4xfHx0PC0xKSkpe2NvbnN0IGk9ZS5sZW5ndGg7bGV0IHM9MDtmb3IobGV0IHQ9MDt0PGk7dCsrKXtjb25zdCBpPU1hdGguYWJzKGVbdF0pO2k+cyYmKHM9aSl9Zm9yKGNvbnN0IGUgb2YgdClmb3IobGV0IHQ9MDt0PGk7dCsrKWVbdF0vPXN9fSh0KSx7ZHVyYXRpb246ZSxsZW5ndGg6dFswXS5sZW5ndGgsc2FtcGxlUmF0ZTp0WzBdLmxlbmd0aC9lLG51bWJlck9mQ2hhbm5lbHM6dC5sZW5ndGgsZ2V0Q2hhbm5lbERhdGE6ZT0+bnVsbD09dD92b2lkIDA6dFtlXSxjb3B5RnJvbUNoYW5uZWw6QXVkaW9CdWZmZXIucHJvdG90eXBlLmNvcHlGcm9tQ2hhbm5lbCxjb3B5VG9DaGFubmVsOkF1ZGlvQnVmZmVyLnByb3RvdHlwZS5jb3B5VG9DaGFubmVsfX19O2Z1bmN0aW9uIHModCxlKXtjb25zdCBpPWUueG1sbnM/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGUueG1sbnMsdCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtmb3IoY29uc3RbdCxuXW9mIE9iamVjdC5lbnRyaWVzKGUpKWlmKFwiY2hpbGRyZW5cIj09PXQpZm9yKGNvbnN0W3Qsbl1vZiBPYmplY3QuZW50cmllcyhlKSlcInN0cmluZ1wiPT10eXBlb2Ygbj9pLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4pKTppLmFwcGVuZENoaWxkKHModCxuKSk7ZWxzZVwic3R5bGVcIj09PXQ/T2JqZWN0LmFzc2lnbihpLnN0eWxlLG4pOlwidGV4dENvbnRlbnRcIj09PXQ/aS50ZXh0Q29udGVudD1uOmkuc2V0QXR0cmlidXRlKHQsbi50b1N0cmluZygpKTtyZXR1cm4gaX1mdW5jdGlvbiBuKHQsZSxpKXtjb25zdCBuPXModCxlfHx7fSk7cmV0dXJuIG51bGw9PWl8fGkuYXBwZW5kQ2hpbGQobiksbn12YXIgcj1PYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxjcmVhdGVFbGVtZW50Om4sZGVmYXVsdDpufSk7Y29uc3Qgbz17ZmV0Y2hCbG9iOmZ1bmN0aW9uKGUsaSxzKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2NvbnN0IG49eWllbGQgZmV0Y2goZSxzKTtpZihuLnN0YXR1cz49NDAwKXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoICR7ZX06ICR7bi5zdGF0dXN9ICgke24uc3RhdHVzVGV4dH0pYCk7cmV0dXJuIGZ1bmN0aW9uKGUsaSl7dCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2lmKCFlLmJvZHl8fCFlLmhlYWRlcnMpcmV0dXJuO2NvbnN0IHM9ZS5ib2R5LmdldFJlYWRlcigpLG49TnVtYmVyKGUuaGVhZGVycy5nZXQoXCJDb250ZW50LUxlbmd0aFwiKSl8fDA7bGV0IHI9MDtjb25zdCBvPWU9PnQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtyKz0obnVsbD09ZT92b2lkIDA6ZS5sZW5ndGgpfHwwO2NvbnN0IHQ9TWF0aC5yb3VuZChyL24qMTAwKTtpKHQpfSkpLGE9KCk9PnQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtsZXQgdDt0cnl7dD15aWVsZCBzLnJlYWQoKX1jYXRjaCh0KXtyZXR1cm59dC5kb25lfHwobyh0LnZhbHVlKSx5aWVsZCBhKCkpfSkpO2EoKX0pKX0obi5jbG9uZSgpLGkpLG4uYmxvYigpfSkpfX07Y2xhc3MgYSBleHRlbmRzIGV7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLmlzRXh0ZXJuYWxNZWRpYT0hMSx0Lm1lZGlhPyh0aGlzLm1lZGlhPXQubWVkaWEsdGhpcy5pc0V4dGVybmFsTWVkaWE9ITApOnRoaXMubWVkaWE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpLHQubWVkaWFDb250cm9scyYmKHRoaXMubWVkaWEuY29udHJvbHM9ITApLHQuYXV0b3BsYXkmJih0aGlzLm1lZGlhLmF1dG9wbGF5PSEwKSxudWxsIT10LnBsYXliYWNrUmF0ZSYmdGhpcy5vbmNlTWVkaWFFdmVudChcImNhbnBsYXlcIiwoKCk9PntudWxsIT10LnBsYXliYWNrUmF0ZSYmKHRoaXMubWVkaWEucGxheWJhY2tSYXRlPXQucGxheWJhY2tSYXRlKX0pKX1vbk1lZGlhRXZlbnQodCxlLGkpe3JldHVybiB0aGlzLm1lZGlhLmFkZEV2ZW50TGlzdGVuZXIodCxlLGkpLCgpPT50aGlzLm1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxlKX1vbmNlTWVkaWFFdmVudCh0LGUpe3JldHVybiB0aGlzLm9uTWVkaWFFdmVudCh0LGUse29uY2U6ITB9KX1nZXRTcmMoKXtyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50U3JjfHx0aGlzLm1lZGlhLnNyY3x8XCJcIn1yZXZva2VTcmMoKXtjb25zdCB0PXRoaXMuZ2V0U3JjKCk7dC5zdGFydHNXaXRoKFwiYmxvYjpcIikmJlVSTC5yZXZva2VPYmplY3RVUkwodCl9Y2FuUGxheVR5cGUodCl7cmV0dXJuXCJcIiE9PXRoaXMubWVkaWEuY2FuUGxheVR5cGUodCl9c2V0U3JjKHQsZSl7aWYodGhpcy5nZXRTcmMoKT09PXQpcmV0dXJuO3RoaXMucmV2b2tlU3JjKCk7Y29uc3QgaT1lIGluc3RhbmNlb2YgQmxvYiYmdGhpcy5jYW5QbGF5VHlwZShlLnR5cGUpP1VSTC5jcmVhdGVPYmplY3RVUkwoZSk6dDt0aGlzLm1lZGlhLnNyYz1pfWRlc3Ryb3koKXt0aGlzLm1lZGlhLnBhdXNlKCksdGhpcy5pc0V4dGVybmFsTWVkaWF8fCh0aGlzLm1lZGlhLnJlbW92ZSgpLHRoaXMucmV2b2tlU3JjKCksdGhpcy5tZWRpYS5zcmM9XCJcIix0aGlzLm1lZGlhLmxvYWQoKSl9c2V0TWVkaWFFbGVtZW50KHQpe3RoaXMubWVkaWE9dH1wbGF5KCl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtpZih0aGlzLm1lZGlhLnNyYylyZXR1cm4gdGhpcy5tZWRpYS5wbGF5KCl9KSl9cGF1c2UoKXt0aGlzLm1lZGlhLnBhdXNlKCl9aXNQbGF5aW5nKCl7cmV0dXJuIXRoaXMubWVkaWEucGF1c2VkJiYhdGhpcy5tZWRpYS5lbmRlZH1zZXRUaW1lKHQpe3RoaXMubWVkaWEuY3VycmVudFRpbWU9dH1nZXREdXJhdGlvbigpe3JldHVybiB0aGlzLm1lZGlhLmR1cmF0aW9ufWdldEN1cnJlbnRUaW1lKCl7cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFRpbWV9Z2V0Vm9sdW1lKCl7cmV0dXJuIHRoaXMubWVkaWEudm9sdW1lfXNldFZvbHVtZSh0KXt0aGlzLm1lZGlhLnZvbHVtZT10fWdldE11dGVkKCl7cmV0dXJuIHRoaXMubWVkaWEubXV0ZWR9c2V0TXV0ZWQodCl7dGhpcy5tZWRpYS5tdXRlZD10fWdldFBsYXliYWNrUmF0ZSgpe3JldHVybiB0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZX1pc1NlZWtpbmcoKXtyZXR1cm4gdGhpcy5tZWRpYS5zZWVraW5nfXNldFBsYXliYWNrUmF0ZSh0LGUpe251bGwhPWUmJih0aGlzLm1lZGlhLnByZXNlcnZlc1BpdGNoPWUpLHRoaXMubWVkaWEucGxheWJhY2tSYXRlPXR9Z2V0TWVkaWFFbGVtZW50KCl7cmV0dXJuIHRoaXMubWVkaWF9c2V0U2lua0lkKHQpe3JldHVybiB0aGlzLm1lZGlhLnNldFNpbmtJZCh0KX19Y2xhc3MgaCBleHRlbmRzIGV7Y29uc3RydWN0b3IodCxlKXtzdXBlcigpLHRoaXMudGltZW91dHM9W10sdGhpcy5pc1Njcm9sbGFibGU9ITEsdGhpcy5hdWRpb0RhdGE9bnVsbCx0aGlzLnJlc2l6ZU9ic2VydmVyPW51bGwsdGhpcy5sYXN0Q29udGFpbmVyV2lkdGg9MCx0aGlzLmlzRHJhZ2dpbmc9ITEsdGhpcy5vcHRpb25zPXQ7Y29uc3QgaT10aGlzLnBhcmVudEZyb21PcHRpb25zQ29udGFpbmVyKHQuY29udGFpbmVyKTt0aGlzLnBhcmVudD1pO2NvbnN0W3Msbl09dGhpcy5pbml0SHRtbCgpO2kuYXBwZW5kQ2hpbGQocyksdGhpcy5jb250YWluZXI9cyx0aGlzLnNjcm9sbENvbnRhaW5lcj1uLnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsXCIpLHRoaXMud3JhcHBlcj1uLnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSx0aGlzLmNhbnZhc1dyYXBwZXI9bi5xdWVyeVNlbGVjdG9yKFwiLmNhbnZhc2VzXCIpLHRoaXMucHJvZ3Jlc3NXcmFwcGVyPW4ucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKSx0aGlzLmN1cnNvcj1uLnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyc29yXCIpLGUmJm4uYXBwZW5kQ2hpbGQoZSksdGhpcy5pbml0RXZlbnRzKCl9cGFyZW50RnJvbU9wdGlvbnNDb250YWluZXIodCl7bGV0IGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQ/ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpOnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmKGU9dCksIWUpdGhyb3cgbmV3IEVycm9yKFwiQ29udGFpbmVyIG5vdCBmb3VuZFwiKTtyZXR1cm4gZX1pbml0RXZlbnRzKCl7Y29uc3QgdD10PT57Y29uc3QgZT10aGlzLndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT10LmNsaWVudFgtZS5sZWZ0LHM9dC5jbGllbnRYLWUubGVmdDtyZXR1cm5baS9lLndpZHRoLHMvZS5oZWlnaHRdfTt0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGU9Pntjb25zdFtpLHNdPXQoZSk7dGhpcy5lbWl0KFwiY2xpY2tcIixpLHMpfSkpLHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwoZT0+e2NvbnN0W2ksc109dChlKTt0aGlzLmVtaXQoXCJkYmxjbGlja1wiLGkscyl9KSksdGhpcy5vcHRpb25zLmRyYWdUb1NlZWsmJnRoaXMuaW5pdERyYWcoKSx0aGlzLnNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKCgpPT57Y29uc3R7c2Nyb2xsTGVmdDp0LHNjcm9sbFdpZHRoOmUsY2xpZW50V2lkdGg6aX09dGhpcy5zY3JvbGxDb250YWluZXIscz10L2Usbj0odCtpKS9lO3RoaXMuZW1pdChcInNjcm9sbFwiLHMsbil9KSk7Y29uc3QgZT10aGlzLmNyZWF0ZURlbGF5KDEwMCk7dGhpcy5yZXNpemVPYnNlcnZlcj1uZXcgUmVzaXplT2JzZXJ2ZXIoKCgpPT57ZSgpLnRoZW4oKCgpPT50aGlzLm9uQ29udGFpbmVyUmVzaXplKCkpKS5jYXRjaCgoKCk9Pnt9KSl9KSksdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuc2Nyb2xsQ29udGFpbmVyKX1vbkNvbnRhaW5lclJlc2l6ZSgpe2NvbnN0IHQ9dGhpcy5wYXJlbnQuY2xpZW50V2lkdGg7dD09PXRoaXMubGFzdENvbnRhaW5lcldpZHRoJiZcImF1dG9cIiE9PXRoaXMub3B0aW9ucy5oZWlnaHR8fCh0aGlzLmxhc3RDb250YWluZXJXaWR0aD10LHRoaXMucmVSZW5kZXIoKSl9aW5pdERyYWcoKXshZnVuY3Rpb24odCxlLGkscyxuPTMscj0wKXtpZighdClyZXR1cm4oKT0+e307bGV0IG89KCk9Pnt9O2NvbnN0IGE9YT0+e2lmKGEuYnV0dG9uIT09cilyZXR1cm47YS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCk7bGV0IGg9YS5jbGllbnRYLGw9YS5jbGllbnRZLGQ9ITE7Y29uc3QgYz1zPT57cy5wcmV2ZW50RGVmYXVsdCgpLHMuc3RvcFByb3BhZ2F0aW9uKCk7Y29uc3Qgcj1zLmNsaWVudFgsbz1zLmNsaWVudFksYT1yLWgsYz1vLWw7aWYoZHx8TWF0aC5hYnMoYSk+bnx8TWF0aC5hYnMoYyk+bil7Y29uc3Qgcz10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHtsZWZ0Om4sdG9wOnV9PXM7ZHx8KG51bGw9PWl8fGkoaC1uLGwtdSksZD0hMCksZShhLGMsci1uLG8tdSksaD1yLGw9b319LHU9KCk9PntkJiYobnVsbD09c3x8cygpKSxvKCl9LHA9dD0+e3QucmVsYXRlZFRhcmdldCYmdC5yZWxhdGVkVGFyZ2V0IT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fHx1KCl9LG09dD0+e2QmJih0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSl9LGY9dD0+e2QmJnQucHJldmVudERlZmF1bHQoKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsYyksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHUpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIscCksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIixwKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsZix7cGFzc2l2ZTohMX0pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG0se2NhcHR1cmU6ITB9KSxvPSgpPT57ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsYyksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHUpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIscCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIixwKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsZiksc2V0VGltZW91dCgoKCk9Pntkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixtLHtjYXB0dXJlOiEwfSl9KSwxMCl9fTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLGEpfSh0aGlzLndyYXBwZXIsKCh0LGUsaSk9Pnt0aGlzLmVtaXQoXCJkcmFnXCIsTWF0aC5tYXgoMCxNYXRoLm1pbigxLGkvdGhpcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSkpfSksKCgpPT50aGlzLmlzRHJhZ2dpbmc9ITApLCgoKT0+dGhpcy5pc0RyYWdnaW5nPSExKSl9Z2V0SGVpZ2h0KHQpe3JldHVybiBudWxsPT10PzEyODppc05hTihOdW1iZXIodCkpP1wiYXV0b1wiPT09dCYmdGhpcy5wYXJlbnQuY2xpZW50SGVpZ2h0fHwxMjg6TnVtYmVyKHQpfWluaXRIdG1sKCl7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9dC5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KTtyZXR1cm4gZS5pbm5lckhUTUw9YFxcbiAgICAgIDxzdHlsZT5cXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIG1pbi13aWR0aDogMXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgYXVkaW8ge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAuc2Nyb2xsIHtcXG4gICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLm5vU2Nyb2xsYmFyIHtcXG4gICAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLm5vU2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC53cmFwcGVyIHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5jYW52YXNlcyB7XFxuICAgICAgICAgIG1pbi1oZWlnaHQ6ICR7dGhpcy5nZXRIZWlnaHQodGhpcy5vcHRpb25zLmhlaWdodCl9cHg7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAuY2FudmFzZXMgPiBkaXYge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCBjYW52YXMge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLnByb2dyZXNzIHtcXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLnByb2dyZXNzID4gZGl2IHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLmN1cnNvciB7XFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHotaW5kZXg6IDU7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICB9XFxuICAgICAgPC9zdHlsZT5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsXCIgcGFydD1cInNjcm9sbFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIiBwYXJ0PVwid3JhcHBlclwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FudmFzZXNcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgcGFydD1cInByb2dyZXNzXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXJzb3JcIiBwYXJ0PVwiY3Vyc29yXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgYCxbdCxlXX1zZXRPcHRpb25zKHQpe2lmKHRoaXMub3B0aW9ucy5jb250YWluZXIhPT10LmNvbnRhaW5lcil7Y29uc3QgZT10aGlzLnBhcmVudEZyb21PcHRpb25zQ29udGFpbmVyKHQuY29udGFpbmVyKTtlLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKSx0aGlzLnBhcmVudD1lfXQuZHJhZ1RvU2VlayYmIXRoaXMub3B0aW9ucy5kcmFnVG9TZWVrJiZ0aGlzLmluaXREcmFnKCksdGhpcy5vcHRpb25zPXQsdGhpcy5yZVJlbmRlcigpfWdldFdyYXBwZXIoKXtyZXR1cm4gdGhpcy53cmFwcGVyfWdldFNjcm9sbCgpe3JldHVybiB0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0fXNldFNjcm9sbCh0KXt0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0PXR9c2V0U2Nyb2xsUGVyY2VudGFnZSh0KXtjb25zdHtzY3JvbGxXaWR0aDplfT10aGlzLnNjcm9sbENvbnRhaW5lcixpPWUqdDt0aGlzLnNldFNjcm9sbChpKX1kZXN0cm95KCl7dmFyIHQ7dGhpcy5jb250YWluZXIucmVtb3ZlKCksbnVsbD09PSh0PXRoaXMucmVzaXplT2JzZXJ2ZXIpfHx2b2lkIDA9PT10fHx0LmRpc2Nvbm5lY3QoKX1jcmVhdGVEZWxheSh0PTEwKXtsZXQgZSxpO2NvbnN0IHM9KCk9PntlJiZjbGVhclRpbWVvdXQoZSksaSYmaSgpfTtyZXR1cm4gdGhpcy50aW1lb3V0cy5wdXNoKHMpLCgpPT5uZXcgUHJvbWlzZSgoKG4scik9PntzKCksaT1yLGU9c2V0VGltZW91dCgoKCk9PntlPXZvaWQgMCxpPXZvaWQgMCxuKCl9KSx0KX0pKX1jb252ZXJ0Q29sb3JWYWx1ZXModCl7aWYoIUFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR8fFwiXCI7aWYodC5sZW5ndGg8MilyZXR1cm4gdFswXXx8XCJcIjtjb25zdCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksaT1lLmdldENvbnRleHQoXCIyZFwiKSxzPWUuaGVpZ2h0Kih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSksbj1pLmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCwwLHMpLHI9MS8odC5sZW5ndGgtMSk7cmV0dXJuIHQuZm9yRWFjaCgoKHQsZSk9Pntjb25zdCBpPWUqcjtuLmFkZENvbG9yU3RvcChpLHQpfSkpLG59cmVuZGVyQmFyV2F2ZWZvcm0odCxlLGkscyl7Y29uc3Qgbj10WzBdLHI9dFsxXXx8dFswXSxvPW4ubGVuZ3RoLHt3aWR0aDphLGhlaWdodDpofT1pLmNhbnZhcyxsPWgvMixkPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxLGM9ZS5iYXJXaWR0aD9lLmJhcldpZHRoKmQ6MSx1PWUuYmFyR2FwP2UuYmFyR2FwKmQ6ZS5iYXJXaWR0aD9jLzI6MCxwPWUuYmFyUmFkaXVzfHwwLG09YS8oYyt1KS9vLGY9cCYmXCJyb3VuZFJlY3RcImluIGk/XCJyb3VuZFJlY3RcIjpcInJlY3RcIjtpLmJlZ2luUGF0aCgpO2xldCBnPTAsdj0wLGI9MDtmb3IobGV0IHQ9MDt0PD1vO3QrKyl7Y29uc3Qgbz1NYXRoLnJvdW5kKHQqbSk7aWYobz5nKXtjb25zdCB0PU1hdGgucm91bmQodipsKnMpLG49dCtNYXRoLnJvdW5kKGIqbCpzKXx8MTtsZXQgcj1sLXQ7XCJ0b3BcIj09PWUuYmFyQWxpZ24/cj0wOlwiYm90dG9tXCI9PT1lLmJhckFsaWduJiYocj1oLW4pLGlbZl0oZyooYyt1KSxyLGMsbixwKSxnPW8sdj0wLGI9MH1jb25zdCBhPU1hdGguYWJzKG5bdF18fDApLGQ9TWF0aC5hYnMoclt0XXx8MCk7YT52JiYodj1hKSxkPmImJihiPWQpfWkuZmlsbCgpLGkuY2xvc2VQYXRoKCl9cmVuZGVyTGluZVdhdmVmb3JtKHQsZSxpLHMpe2NvbnN0IG49ZT0+e2NvbnN0IG49dFtlXXx8dFswXSxyPW4ubGVuZ3RoLHtoZWlnaHQ6b309aS5jYW52YXMsYT1vLzIsaD1pLmNhbnZhcy53aWR0aC9yO2kubW92ZVRvKDAsYSk7bGV0IGw9MCxkPTA7Zm9yKGxldCB0PTA7dDw9cjt0Kyspe2NvbnN0IHI9TWF0aC5yb3VuZCh0KmgpO2lmKHI+bCl7Y29uc3QgdD1hKyhNYXRoLnJvdW5kKGQqYSpzKXx8MSkqKDA9PT1lPy0xOjEpO2kubGluZVRvKGwsdCksbD1yLGQ9MH1jb25zdCBvPU1hdGguYWJzKG5bdF18fDApO28+ZCYmKGQ9byl9aS5saW5lVG8obCxhKX07aS5iZWdpblBhdGgoKSxuKDApLG4oMSksaS5maWxsKCksaS5jbG9zZVBhdGgoKX1yZW5kZXJXYXZlZm9ybSh0LGUsaSl7aWYoaS5maWxsU3R5bGU9dGhpcy5jb252ZXJ0Q29sb3JWYWx1ZXMoZS53YXZlQ29sb3IpLGUucmVuZGVyRnVuY3Rpb24pcmV0dXJuIHZvaWQgZS5yZW5kZXJGdW5jdGlvbih0LGkpO2xldCBzPWUuYmFySGVpZ2h0fHwxO2lmKGUubm9ybWFsaXplKXtjb25zdCBlPUFycmF5LmZyb20odFswXSkucmVkdWNlKCgodCxlKT0+TWF0aC5tYXgodCxNYXRoLmFicyhlKSkpLDApO3M9ZT8xL2U6MX1lLmJhcldpZHRofHxlLmJhckdhcHx8ZS5iYXJBbGlnbj90aGlzLnJlbmRlckJhcldhdmVmb3JtKHQsZSxpLHMpOnRoaXMucmVuZGVyTGluZVdhdmVmb3JtKHQsZSxpLHMpfXJlbmRlclNpbmdsZUNhbnZhcyh0LGUsaSxzLG4scixvLGEpe2NvbnN0IGg9d2luZG93LmRldmljZVBpeGVsUmF0aW98fDEsbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGQ9dFswXS5sZW5ndGg7bC53aWR0aD1NYXRoLnJvdW5kKGkqKHItbikvZCksbC5oZWlnaHQ9cypoLGwuc3R5bGUud2lkdGg9YCR7TWF0aC5mbG9vcihsLndpZHRoL2gpfXB4YCxsLnN0eWxlLmhlaWdodD1gJHtzfXB4YCxsLnN0eWxlLmxlZnQ9YCR7TWF0aC5mbG9vcihuKmkvaC9kKX1weGAsby5hcHBlbmRDaGlsZChsKTtjb25zdCBjPWwuZ2V0Q29udGV4dChcIjJkXCIpO2lmKHRoaXMucmVuZGVyV2F2ZWZvcm0odC5tYXAoKHQ9PnQuc2xpY2UobixyKSkpLGUsYyksbC53aWR0aD4wJiZsLmhlaWdodD4wKXtjb25zdCB0PWwuY2xvbmVOb2RlKCksaT10LmdldENvbnRleHQoXCIyZFwiKTtpLmRyYXdJbWFnZShsLDAsMCksaS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249XCJzb3VyY2UtaW5cIixpLmZpbGxTdHlsZT10aGlzLmNvbnZlcnRDb2xvclZhbHVlcyhlLnByb2dyZXNzQ29sb3IpLGkuZmlsbFJlY3QoMCwwLGwud2lkdGgsbC5oZWlnaHQpLGEuYXBwZW5kQ2hpbGQodCl9fXJlbmRlckNoYW5uZWwoZSxpLHMpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7Y29uc3Qgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5nZXRIZWlnaHQoaS5oZWlnaHQpO24uc3R5bGUuaGVpZ2h0PWAke3J9cHhgLHRoaXMuY2FudmFzV3JhcHBlci5zdHlsZS5taW5IZWlnaHQ9YCR7cn1weGAsdGhpcy5jYW52YXNXcmFwcGVyLmFwcGVuZENoaWxkKG4pO2NvbnN0IG89bi5jbG9uZU5vZGUoKTt0aGlzLnByb2dyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChvKTtjb25zdCBhPWVbMF0ubGVuZ3RoLGw9KHQsaCk9Pnt0aGlzLnJlbmRlclNpbmdsZUNhbnZhcyhlLGkscyxyLE1hdGgubWF4KDAsdCksTWF0aC5taW4oaCxhKSxuLG8pfTtpZighdGhpcy5pc1Njcm9sbGFibGUpcmV0dXJuIHZvaWQgbCgwLGEpO2NvbnN0e3Njcm9sbExlZnQ6ZCxzY3JvbGxXaWR0aDpjLGNsaWVudFdpZHRoOnV9PXRoaXMuc2Nyb2xsQ29udGFpbmVyLHA9YS9jO2xldCBtPU1hdGgubWluKGguTUFYX0NBTlZBU19XSURUSCx1KTtpZihpLmJhcldpZHRofHxpLmJhckdhcCl7Y29uc3QgdD1pLmJhcldpZHRofHwuNSxlPXQrKGkuYmFyR2FwfHx0LzIpO20lZSE9MCYmKG09TWF0aC5mbG9vcihtL2UpKmUpfWNvbnN0IGY9TWF0aC5mbG9vcihNYXRoLmFicyhkKSpwKSxnPU1hdGguZmxvb3IoZittKnApLHY9Zy1mO3Y8PTB8fChsKGYsZykseWllbGQgUHJvbWlzZS5hbGwoWygoKT0+dCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2lmKDA9PT1mKXJldHVybjtjb25zdCB0PXRoaXMuY3JlYXRlRGVsYXkoKTtmb3IobGV0IGU9ZjtlPj0wO2UtPXYpeWllbGQgdCgpLGwoTWF0aC5tYXgoMCxlLXYpLGUpfSkpKSgpLCgoKT0+dCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2lmKGc9PT1hKXJldHVybjtjb25zdCB0PXRoaXMuY3JlYXRlRGVsYXkoKTtmb3IobGV0IGU9ZztlPGE7ZSs9dil5aWVsZCB0KCksbChlLE1hdGgubWluKGEsZSt2KSl9KSkpKCldKSl9KSl9cmVuZGVyKGUpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7dGhpcy50aW1lb3V0cy5mb3JFYWNoKCh0PT50KCkpKSx0aGlzLnRpbWVvdXRzPVtdLHRoaXMuY2FudmFzV3JhcHBlci5pbm5lckhUTUw9XCJcIix0aGlzLnByb2dyZXNzV3JhcHBlci5pbm5lckhUTUw9XCJcIixudWxsIT10aGlzLm9wdGlvbnMud2lkdGgmJih0aGlzLnNjcm9sbENvbnRhaW5lci5zdHlsZS53aWR0aD1cIm51bWJlclwiPT10eXBlb2YgdGhpcy5vcHRpb25zLndpZHRoP2Ake3RoaXMub3B0aW9ucy53aWR0aH1weGA6dGhpcy5vcHRpb25zLndpZHRoKTtjb25zdCB0PXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxLGk9dGhpcy5zY3JvbGxDb250YWluZXIuY2xpZW50V2lkdGgscz1NYXRoLmNlaWwoZS5kdXJhdGlvbioodGhpcy5vcHRpb25zLm1pblB4UGVyU2VjfHwwKSk7dGhpcy5pc1Njcm9sbGFibGU9cz5pO2NvbnN0IG49dGhpcy5vcHRpb25zLmZpbGxQYXJlbnQmJiF0aGlzLmlzU2Nyb2xsYWJsZSxyPShuP2k6cykqdDt0aGlzLndyYXBwZXIuc3R5bGUud2lkdGg9bj9cIjEwMCVcIjpgJHtzfXB4YCx0aGlzLnNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1g9dGhpcy5pc1Njcm9sbGFibGU/XCJhdXRvXCI6XCJoaWRkZW5cIix0aGlzLnNjcm9sbENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwibm9TY3JvbGxiYXJcIiwhIXRoaXMub3B0aW9ucy5oaWRlU2Nyb2xsYmFyKSx0aGlzLmN1cnNvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9YCR7dGhpcy5vcHRpb25zLmN1cnNvckNvbG9yfHx0aGlzLm9wdGlvbnMucHJvZ3Jlc3NDb2xvcn1gLHRoaXMuY3Vyc29yLnN0eWxlLndpZHRoPWAke3RoaXMub3B0aW9ucy5jdXJzb3JXaWR0aH1weGAsdGhpcy5hdWRpb0RhdGE9ZSx0aGlzLmVtaXQoXCJyZW5kZXJcIik7dHJ5e2lmKHRoaXMub3B0aW9ucy5zcGxpdENoYW5uZWxzKXlpZWxkIFByb21pc2UuYWxsKEFycmF5LmZyb20oe2xlbmd0aDplLm51bWJlck9mQ2hhbm5lbHN9KS5tYXAoKCh0LGkpPT57dmFyIHM7Y29uc3Qgbj1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdGhpcy5vcHRpb25zKSxudWxsPT09KHM9dGhpcy5vcHRpb25zLnNwbGl0Q2hhbm5lbHMpfHx2b2lkIDA9PT1zP3ZvaWQgMDpzW2ldKTtyZXR1cm4gdGhpcy5yZW5kZXJDaGFubmVsKFtlLmdldENoYW5uZWxEYXRhKGkpXSxuLHIpfSkpKTtlbHNle2NvbnN0IHQ9W2UuZ2V0Q2hhbm5lbERhdGEoMCldO2UubnVtYmVyT2ZDaGFubmVscz4xJiZ0LnB1c2goZS5nZXRDaGFubmVsRGF0YSgxKSkseWllbGQgdGhpcy5yZW5kZXJDaGFubmVsKHQsdGhpcy5vcHRpb25zLHIpfX1jYXRjaCh0KXtyZXR1cm59dGhpcy5lbWl0KFwicmVuZGVyZWRcIil9KSl9cmVSZW5kZXIoKXtpZighdGhpcy5hdWRpb0RhdGEpcmV0dXJuO2NvbnN0e3Njcm9sbFdpZHRoOnR9PXRoaXMuc2Nyb2xsQ29udGFpbmVyLHtyaWdodDplfT10aGlzLnByb2dyZXNzV3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZih0aGlzLnJlbmRlcih0aGlzLmF1ZGlvRGF0YSksdGhpcy5pc1Njcm9sbGFibGUmJnQhPT10aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxXaWR0aCl7Y29uc3R7cmlnaHQ6dH09dGhpcy5wcm9ncmVzc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bGV0IGk9dC1lO2kqPTIsaT1pPDA/TWF0aC5mbG9vcihpKTpNYXRoLmNlaWwoaSksaS89Mix0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0Kz1pfX16b29tKHQpe3RoaXMub3B0aW9ucy5taW5QeFBlclNlYz10LHRoaXMucmVSZW5kZXIoKX1zY3JvbGxJbnRvVmlldyh0LGU9ITEpe2NvbnN0e3Njcm9sbExlZnQ6aSxzY3JvbGxXaWR0aDpzLGNsaWVudFdpZHRoOm59PXRoaXMuc2Nyb2xsQ29udGFpbmVyLHI9dCpzLG89aSxhPWkrbixoPW4vMjtpZih0aGlzLmlzRHJhZ2dpbmcpe2NvbnN0IHQ9MzA7cit0PmE/dGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCs9dDpyLXQ8byYmKHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQtPXQpfWVsc2V7KHI8b3x8cj5hKSYmKHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQ9ci0odGhpcy5vcHRpb25zLmF1dG9DZW50ZXI/aDowKSk7Y29uc3QgdD1yLWktaDtlJiZ0aGlzLm9wdGlvbnMuYXV0b0NlbnRlciYmdD4wJiYodGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCs9TWF0aC5taW4odCwxMCkpfXtjb25zdCB0PXRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQsZT10L3MsaT0odCtuKS9zO3RoaXMuZW1pdChcInNjcm9sbFwiLGUsaSl9fXJlbmRlclByb2dyZXNzKHQsZSl7aWYoaXNOYU4odCkpcmV0dXJuO2NvbnN0IGk9MTAwKnQ7dGhpcy5jYW52YXNXcmFwcGVyLnN0eWxlLmNsaXBQYXRoPWBwb2x5Z29uKCR7aX0lIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAke2l9JSAxMDAlKWAsdGhpcy5wcm9ncmVzc1dyYXBwZXIuc3R5bGUud2lkdGg9YCR7aX0lYCx0aGlzLmN1cnNvci5zdHlsZS5sZWZ0PWAke2l9JWAsdGhpcy5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtPWB0cmFuc2xhdGVYKC0kezEwMD09PU1hdGgucm91bmQoaSk/dGhpcy5vcHRpb25zLmN1cnNvcldpZHRoOjB9cHgpYCx0aGlzLmlzU2Nyb2xsYWJsZSYmdGhpcy5vcHRpb25zLmF1dG9TY3JvbGwmJnRoaXMuc2Nyb2xsSW50b1ZpZXcodCxlKX1leHBvcnRJbWFnZShlLGkscyl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtjb25zdCB0PXRoaXMuY2FudmFzV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFwiY2FudmFzXCIpO2lmKCF0Lmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJObyB3YXZlZm9ybSBkYXRhXCIpO2lmKFwiZGF0YVVSTFwiPT09cyl7Y29uc3Qgcz1BcnJheS5mcm9tKHQpLm1hcCgodD0+dC50b0RhdGFVUkwoZSxpKSkpO3JldHVybiBQcm9taXNlLnJlc29sdmUocyl9cmV0dXJuIFByb21pc2UuYWxsKEFycmF5LmZyb20odCkubWFwKCh0PT5uZXcgUHJvbWlzZSgoKHMsbik9Pnt0LnRvQmxvYigodD0+e3Q/cyh0KTpuKG5ldyBFcnJvcihcIkNvdWxkIG5vdCBleHBvcnQgaW1hZ2VcIikpfSksZSxpKX0pKSkpKX0pKX19aC5NQVhfQ0FOVkFTX1dJRFRIPTRlMztjbGFzcyBsIGV4dGVuZHMgZXtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy51bnN1YnNjcmliZT0oKT0+e319c3RhcnQoKXt0aGlzLnVuc3Vic2NyaWJlPXRoaXMub24oXCJ0aWNrXCIsKCgpPT57cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgoKT0+e3RoaXMuZW1pdChcInRpY2tcIil9KSl9KSksdGhpcy5lbWl0KFwidGlja1wiKX1zdG9wKCl7dGhpcy51bnN1YnNjcmliZSgpfWRlc3Ryb3koKXt0aGlzLnVuc3Vic2NyaWJlKCl9fWNsYXNzIGQgZXh0ZW5kcyBle2NvbnN0cnVjdG9yKHQ9bmV3IEF1ZGlvQ29udGV4dCl7c3VwZXIoKSx0aGlzLmJ1ZmZlck5vZGU9bnVsbCx0aGlzLmF1dG9wbGF5PSExLHRoaXMucGxheVN0YXJ0VGltZT0wLHRoaXMucGxheWVkRHVyYXRpb249MCx0aGlzLl9tdXRlZD0hMSx0aGlzLl9wbGF5YmFja1JhdGU9MSx0aGlzLmJ1ZmZlcj1udWxsLHRoaXMuY3VycmVudFNyYz1cIlwiLHRoaXMucGF1c2VkPSEwLHRoaXMuY3Jvc3NPcmlnaW49bnVsbCx0aGlzLnNlZWtpbmc9ITEsdGhpcy5hZGRFdmVudExpc3RlbmVyPXRoaXMub24sdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyPXRoaXMudW4sdGhpcy5hdWRpb0NvbnRleHQ9dCx0aGlzLmdhaW5Ob2RlPXRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSx0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pfWxvYWQoKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe30pKX1nZXQgc3JjKCl7cmV0dXJuIHRoaXMuY3VycmVudFNyY31zZXQgc3JjKHQpe2lmKHRoaXMuY3VycmVudFNyYz10LCF0KXJldHVybiB0aGlzLmJ1ZmZlcj1udWxsLHZvaWQgdGhpcy5lbWl0KFwiZW1wdGllZFwiKTtmZXRjaCh0KS50aGVuKChlPT57aWYoZS5zdGF0dXM+PTQwMCl0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCAke3R9OiAke2Uuc3RhdHVzfSAoJHtlLnN0YXR1c1RleHR9KWApO3JldHVybiBlLmFycmF5QnVmZmVyKCl9KSkudGhlbigoZT0+dGhpcy5jdXJyZW50U3JjIT09dD9udWxsOnRoaXMuYXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YShlKSkpLnRoZW4oKGU9Pnt0aGlzLmN1cnJlbnRTcmM9PT10JiYodGhpcy5idWZmZXI9ZSx0aGlzLmVtaXQoXCJsb2FkZWRtZXRhZGF0YVwiKSx0aGlzLmVtaXQoXCJjYW5wbGF5XCIpLHRoaXMuYXV0b3BsYXkmJnRoaXMucGxheSgpKX0pKX1fcGxheSgpe3ZhciB0O2lmKCF0aGlzLnBhdXNlZClyZXR1cm47dGhpcy5wYXVzZWQ9ITEsbnVsbD09PSh0PXRoaXMuYnVmZmVyTm9kZSl8fHZvaWQgMD09PXR8fHQuZGlzY29ubmVjdCgpLHRoaXMuYnVmZmVyTm9kZT10aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKSx0aGlzLmJ1ZmZlck5vZGUuYnVmZmVyPXRoaXMuYnVmZmVyLHRoaXMuYnVmZmVyTm9kZS5wbGF5YmFja1JhdGUudmFsdWU9dGhpcy5fcGxheWJhY2tSYXRlLHRoaXMuYnVmZmVyTm9kZS5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO2xldCBlPXRoaXMucGxheWVkRHVyYXRpb24qdGhpcy5fcGxheWJhY2tSYXRlO2U+PXRoaXMuZHVyYXRpb24mJihlPTAsdGhpcy5wbGF5ZWREdXJhdGlvbj0wKSx0aGlzLmJ1ZmZlck5vZGUuc3RhcnQodGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUsZSksdGhpcy5wbGF5U3RhcnRUaW1lPXRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lLHRoaXMuYnVmZmVyTm9kZS5vbmVuZGVkPSgpPT57dGhpcy5jdXJyZW50VGltZT49dGhpcy5kdXJhdGlvbiYmKHRoaXMucGF1c2UoKSx0aGlzLmVtaXQoXCJlbmRlZFwiKSl9fV9wYXVzZSgpe3ZhciB0O3RoaXMucGF1c2VkPSEwLG51bGw9PT0odD10aGlzLmJ1ZmZlck5vZGUpfHx2b2lkIDA9PT10fHx0LnN0b3AoKSx0aGlzLnBsYXllZER1cmF0aW9uKz10aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZS10aGlzLnBsYXlTdGFydFRpbWV9cGxheSgpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7dGhpcy5wYXVzZWQmJih0aGlzLl9wbGF5KCksdGhpcy5lbWl0KFwicGxheVwiKSl9KSl9cGF1c2UoKXt0aGlzLnBhdXNlZHx8KHRoaXMuX3BhdXNlKCksdGhpcy5lbWl0KFwicGF1c2VcIikpfXN0b3BBdCh0KXt2YXIgZSxpO2NvbnN0IHM9dC10aGlzLmN1cnJlbnRUaW1lO251bGw9PT0oZT10aGlzLmJ1ZmZlck5vZGUpfHx2b2lkIDA9PT1lfHxlLnN0b3AodGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUrcyksbnVsbD09PShpPXRoaXMuYnVmZmVyTm9kZSl8fHZvaWQgMD09PWl8fGkuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsKCgpPT57dGhpcy5idWZmZXJOb2RlPW51bGwsdGhpcy5wYXVzZSgpfSkse29uY2U6ITB9KX1zZXRTaW5rSWQoZSl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtyZXR1cm4gdGhpcy5hdWRpb0NvbnRleHQuc2V0U2lua0lkKGUpfSkpfWdldCBwbGF5YmFja1JhdGUoKXtyZXR1cm4gdGhpcy5fcGxheWJhY2tSYXRlfXNldCBwbGF5YmFja1JhdGUodCl7dGhpcy5fcGxheWJhY2tSYXRlPXQsdGhpcy5idWZmZXJOb2RlJiYodGhpcy5idWZmZXJOb2RlLnBsYXliYWNrUmF0ZS52YWx1ZT10KX1nZXQgY3VycmVudFRpbWUoKXtyZXR1cm4odGhpcy5wYXVzZWQ/dGhpcy5wbGF5ZWREdXJhdGlvbjp0aGlzLnBsYXllZER1cmF0aW9uKyh0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZS10aGlzLnBsYXlTdGFydFRpbWUpKSp0aGlzLl9wbGF5YmFja1JhdGV9c2V0IGN1cnJlbnRUaW1lKHQpe3RoaXMuZW1pdChcInNlZWtpbmdcIik7Y29uc3QgZT0hdGhpcy5wYXVzZWQ7ZSYmdGhpcy5fcGF1c2UoKSx0aGlzLnBsYXllZER1cmF0aW9uPXQvdGhpcy5fcGxheWJhY2tSYXRlLGUmJnRoaXMuX3BsYXkoKSx0aGlzLmVtaXQoXCJ0aW1ldXBkYXRlXCIpfWdldCBkdXJhdGlvbigpe3ZhciB0O3JldHVybihudWxsPT09KHQ9dGhpcy5idWZmZXIpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmR1cmF0aW9uKXx8MH1nZXQgdm9sdW1lKCl7cmV0dXJuIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZX1zZXQgdm9sdW1lKHQpe3RoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZT10LHRoaXMuZW1pdChcInZvbHVtZWNoYW5nZVwiKX1nZXQgbXV0ZWQoKXtyZXR1cm4gdGhpcy5fbXV0ZWR9c2V0IG11dGVkKHQpe3RoaXMuX211dGVkIT09dCYmKHRoaXMuX211dGVkPXQsdGhpcy5fbXV0ZWQ/dGhpcy5nYWluTm9kZS5kaXNjb25uZWN0KCk6dGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKSl9Y2FuUGxheVR5cGUodCl7cmV0dXJuL14oYXVkaW98dmlkZW8pXFwvLy50ZXN0KHQpfWdldEdhaW5Ob2RlKCl7cmV0dXJuIHRoaXMuZ2Fpbk5vZGV9Z2V0Q2hhbm5lbERhdGEoKXtjb25zdCB0PVtdO2lmKCF0aGlzLmJ1ZmZlcilyZXR1cm4gdDtjb25zdCBlPXRoaXMuYnVmZmVyLm51bWJlck9mQ2hhbm5lbHM7Zm9yKGxldCBpPTA7aTxlO2krKyl0LnB1c2godGhpcy5idWZmZXIuZ2V0Q2hhbm5lbERhdGEoaSkpO3JldHVybiB0fX1jb25zdCBjPXt3YXZlQ29sb3I6XCIjOTk5XCIscHJvZ3Jlc3NDb2xvcjpcIiM1NTVcIixjdXJzb3JXaWR0aDoxLG1pblB4UGVyU2VjOjAsZmlsbFBhcmVudDohMCxpbnRlcmFjdDohMCxkcmFnVG9TZWVrOiExLGF1dG9TY3JvbGw6ITAsYXV0b0NlbnRlcjohMCxzYW1wbGVSYXRlOjhlM307Y2xhc3MgdSBleHRlbmRzIGF7c3RhdGljIGNyZWF0ZSh0KXtyZXR1cm4gbmV3IHUodCl9Y29uc3RydWN0b3IodCl7Y29uc3QgZT10Lm1lZGlhfHwoXCJXZWJBdWRpb1wiPT09dC5iYWNrZW5kP25ldyBkOnZvaWQgMCk7c3VwZXIoe21lZGlhOmUsbWVkaWFDb250cm9sczp0Lm1lZGlhQ29udHJvbHMsYXV0b3BsYXk6dC5hdXRvcGxheSxwbGF5YmFja1JhdGU6dC5hdWRpb1JhdGV9KSx0aGlzLnBsdWdpbnM9W10sdGhpcy5kZWNvZGVkRGF0YT1udWxsLHRoaXMuc3Vic2NyaXB0aW9ucz1bXSx0aGlzLm1lZGlhU3Vic2NyaXB0aW9ucz1bXSx0aGlzLm9wdGlvbnM9T2JqZWN0LmFzc2lnbih7fSxjLHQpLHRoaXMudGltZXI9bmV3IGw7Y29uc3QgaT1lP3ZvaWQgMDp0aGlzLmdldE1lZGlhRWxlbWVudCgpO3RoaXMucmVuZGVyZXI9bmV3IGgodGhpcy5vcHRpb25zLGkpLHRoaXMuaW5pdFBsYXllckV2ZW50cygpLHRoaXMuaW5pdFJlbmRlcmVyRXZlbnRzKCksdGhpcy5pbml0VGltZXJFdmVudHMoKSx0aGlzLmluaXRQbHVnaW5zKCksUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKCk9Pnt0aGlzLmVtaXQoXCJpbml0XCIpO2NvbnN0IHQ9dGhpcy5vcHRpb25zLnVybHx8dGhpcy5nZXRTcmMoKXx8XCJcIjsodHx8dGhpcy5vcHRpb25zLnBlYWtzJiZ0aGlzLm9wdGlvbnMuZHVyYXRpb24pJiZ0aGlzLmxvYWQodCx0aGlzLm9wdGlvbnMucGVha3MsdGhpcy5vcHRpb25zLmR1cmF0aW9uKX0pKX11cGRhdGVQcm9ncmVzcyh0PXRoaXMuZ2V0Q3VycmVudFRpbWUoKSl7cmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyUHJvZ3Jlc3ModC90aGlzLmdldER1cmF0aW9uKCksdGhpcy5pc1BsYXlpbmcoKSksdH1pbml0VGltZXJFdmVudHMoKXt0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnRpbWVyLm9uKFwidGlja1wiLCgoKT0+e2lmKCF0aGlzLmlzU2Vla2luZygpKXtjb25zdCB0PXRoaXMudXBkYXRlUHJvZ3Jlc3MoKTt0aGlzLmVtaXQoXCJ0aW1ldXBkYXRlXCIsdCksdGhpcy5lbWl0KFwiYXVkaW9wcm9jZXNzXCIsdCl9fSkpKX1pbml0UGxheWVyRXZlbnRzKCl7dGhpcy5pc1BsYXlpbmcoKSYmKHRoaXMuZW1pdChcInBsYXlcIiksdGhpcy50aW1lci5zdGFydCgpKSx0aGlzLm1lZGlhU3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMub25NZWRpYUV2ZW50KFwidGltZXVwZGF0ZVwiLCgoKT0+e2NvbnN0IHQ9dGhpcy51cGRhdGVQcm9ncmVzcygpO3RoaXMuZW1pdChcInRpbWV1cGRhdGVcIix0KX0pKSx0aGlzLm9uTWVkaWFFdmVudChcInBsYXlcIiwoKCk9Pnt0aGlzLmVtaXQoXCJwbGF5XCIpLHRoaXMudGltZXIuc3RhcnQoKX0pKSx0aGlzLm9uTWVkaWFFdmVudChcInBhdXNlXCIsKCgpPT57dGhpcy5lbWl0KFwicGF1c2VcIiksdGhpcy50aW1lci5zdG9wKCl9KSksdGhpcy5vbk1lZGlhRXZlbnQoXCJlbXB0aWVkXCIsKCgpPT57dGhpcy50aW1lci5zdG9wKCl9KSksdGhpcy5vbk1lZGlhRXZlbnQoXCJlbmRlZFwiLCgoKT0+e3RoaXMuZW1pdChcImZpbmlzaFwiKX0pKSx0aGlzLm9uTWVkaWFFdmVudChcInNlZWtpbmdcIiwoKCk9Pnt0aGlzLmVtaXQoXCJzZWVraW5nXCIsdGhpcy5nZXRDdXJyZW50VGltZSgpKX0pKSl9aW5pdFJlbmRlcmVyRXZlbnRzKCl7dGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5yZW5kZXJlci5vbihcImNsaWNrXCIsKCh0LGUpPT57dGhpcy5vcHRpb25zLmludGVyYWN0JiYodGhpcy5zZWVrVG8odCksdGhpcy5lbWl0KFwiaW50ZXJhY3Rpb25cIix0KnRoaXMuZ2V0RHVyYXRpb24oKSksdGhpcy5lbWl0KFwiY2xpY2tcIix0LGUpKX0pKSx0aGlzLnJlbmRlcmVyLm9uKFwiZGJsY2xpY2tcIiwoKHQsZSk9Pnt0aGlzLmVtaXQoXCJkYmxjbGlja1wiLHQsZSl9KSksdGhpcy5yZW5kZXJlci5vbihcInNjcm9sbFwiLCgodCxlKT0+e2NvbnN0IGk9dGhpcy5nZXREdXJhdGlvbigpO3RoaXMuZW1pdChcInNjcm9sbFwiLHQqaSxlKmkpfSkpLHRoaXMucmVuZGVyZXIub24oXCJyZW5kZXJcIiwoKCk9Pnt0aGlzLmVtaXQoXCJyZWRyYXdcIil9KSksdGhpcy5yZW5kZXJlci5vbihcInJlbmRlcmVkXCIsKCgpPT57dGhpcy5lbWl0KFwicmVkcmF3Y29tcGxldGVcIil9KSkpO3tsZXQgdDt0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnJlbmRlcmVyLm9uKFwiZHJhZ1wiLChlPT57dGhpcy5vcHRpb25zLmludGVyYWN0JiYodGhpcy5yZW5kZXJlci5yZW5kZXJQcm9ncmVzcyhlKSxjbGVhclRpbWVvdXQodCksdD1zZXRUaW1lb3V0KCgoKT0+e3RoaXMuc2Vla1RvKGUpfSksdGhpcy5pc1BsYXlpbmcoKT8wOjIwMCksdGhpcy5lbWl0KFwiaW50ZXJhY3Rpb25cIixlKnRoaXMuZ2V0RHVyYXRpb24oKSksdGhpcy5lbWl0KFwiZHJhZ1wiLGUpKX0pKSl9fWluaXRQbHVnaW5zKCl7dmFyIHQ7KG51bGw9PT0odD10aGlzLm9wdGlvbnMucGx1Z2lucyl8fHZvaWQgMD09PXQ/dm9pZCAwOnQubGVuZ3RoKSYmdGhpcy5vcHRpb25zLnBsdWdpbnMuZm9yRWFjaCgodD0+e3RoaXMucmVnaXN0ZXJQbHVnaW4odCl9KSl9dW5zdWJzY3JpYmVQbGF5ZXJFdmVudHMoKXt0aGlzLm1lZGlhU3Vic2NyaXB0aW9ucy5mb3JFYWNoKCh0PT50KCkpKSx0aGlzLm1lZGlhU3Vic2NyaXB0aW9ucz1bXX1zZXRPcHRpb25zKHQpe3RoaXMub3B0aW9ucz1PYmplY3QuYXNzaWduKHt9LHRoaXMub3B0aW9ucyx0KSx0aGlzLnJlbmRlcmVyLnNldE9wdGlvbnModGhpcy5vcHRpb25zKSx0LmF1ZGlvUmF0ZSYmdGhpcy5zZXRQbGF5YmFja1JhdGUodC5hdWRpb1JhdGUpLG51bGwhPXQubWVkaWFDb250cm9scyYmKHRoaXMuZ2V0TWVkaWFFbGVtZW50KCkuY29udHJvbHM9dC5tZWRpYUNvbnRyb2xzKX1yZWdpc3RlclBsdWdpbih0KXtyZXR1cm4gdC5faW5pdCh0aGlzKSx0aGlzLnBsdWdpbnMucHVzaCh0KSx0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0Lm9uY2UoXCJkZXN0cm95XCIsKCgpPT57dGhpcy5wbHVnaW5zPXRoaXMucGx1Z2lucy5maWx0ZXIoKGU9PmUhPT10KSl9KSkpLHR9Z2V0V3JhcHBlcigpe3JldHVybiB0aGlzLnJlbmRlcmVyLmdldFdyYXBwZXIoKX1nZXRTY3JvbGwoKXtyZXR1cm4gdGhpcy5yZW5kZXJlci5nZXRTY3JvbGwoKX1zZXRTY3JvbGxUaW1lKHQpe2NvbnN0IGU9dC90aGlzLmdldER1cmF0aW9uKCk7dGhpcy5yZW5kZXJlci5zZXRTY3JvbGxQZXJjZW50YWdlKGUpfWdldEFjdGl2ZVBsdWdpbnMoKXtyZXR1cm4gdGhpcy5wbHVnaW5zfWxvYWRBdWRpbyhlLHMsbixyKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2lmKHRoaXMuZW1pdChcImxvYWRcIixlKSwhdGhpcy5vcHRpb25zLm1lZGlhJiZ0aGlzLmlzUGxheWluZygpJiZ0aGlzLnBhdXNlKCksdGhpcy5kZWNvZGVkRGF0YT1udWxsLCFzJiYhbil7Y29uc3QgdD10PT50aGlzLmVtaXQoXCJsb2FkaW5nXCIsdCk7cz15aWVsZCBvLmZldGNoQmxvYihlLHQsdGhpcy5vcHRpb25zLmZldGNoUGFyYW1zKX10aGlzLnNldFNyYyhlLHMpO2NvbnN0IHQ9cnx8dGhpcy5nZXREdXJhdGlvbigpfHwoeWllbGQgbmV3IFByb21pc2UoKHQ9Pnt0aGlzLm9uY2VNZWRpYUV2ZW50KFwibG9hZGVkbWV0YWRhdGFcIiwoKCk9PnQodGhpcy5nZXREdXJhdGlvbigpKSkpfSkpKTtpZihuKXRoaXMuZGVjb2RlZERhdGE9aS5jcmVhdGVCdWZmZXIobix0fHwwKTtlbHNlIGlmKHMpe2NvbnN0IHQ9eWllbGQgcy5hcnJheUJ1ZmZlcigpO3RoaXMuZGVjb2RlZERhdGE9eWllbGQgaS5kZWNvZGUodCx0aGlzLm9wdGlvbnMuc2FtcGxlUmF0ZSl9dGhpcy5kZWNvZGVkRGF0YSYmKHRoaXMuZW1pdChcImRlY29kZVwiLHRoaXMuZ2V0RHVyYXRpb24oKSksdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5kZWNvZGVkRGF0YSkpLHRoaXMuZW1pdChcInJlYWR5XCIsdGhpcy5nZXREdXJhdGlvbigpKX0pKX1sb2FkKGUsaSxzKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3lpZWxkIHRoaXMubG9hZEF1ZGlvKGUsdm9pZCAwLGkscyl9KSl9bG9hZEJsb2IoZSxpLHMpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7eWllbGQgdGhpcy5sb2FkQXVkaW8oXCJibG9iXCIsZSxpLHMpfSkpfXpvb20odCl7aWYoIXRoaXMuZGVjb2RlZERhdGEpdGhyb3cgbmV3IEVycm9yKFwiTm8gYXVkaW8gbG9hZGVkXCIpO3RoaXMucmVuZGVyZXIuem9vbSh0KSx0aGlzLmVtaXQoXCJ6b29tXCIsdCl9Z2V0RGVjb2RlZERhdGEoKXtyZXR1cm4gdGhpcy5kZWNvZGVkRGF0YX1leHBvcnRQZWFrcyh7Y2hhbm5lbHM6dD0yLG1heExlbmd0aDplPThlMyxwcmVjaXNpb246aT0xZTR9PXt9KXtpZighdGhpcy5kZWNvZGVkRGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYXVkaW8gaGFzIG5vdCBiZWVuIGRlY29kZWQgeWV0XCIpO2NvbnN0IHM9TWF0aC5taW4odCx0aGlzLmRlY29kZWREYXRhLm51bWJlck9mQ2hhbm5lbHMpLG49W107Zm9yKGxldCB0PTA7dDxzO3QrKyl7Y29uc3Qgcz10aGlzLmRlY29kZWREYXRhLmdldENoYW5uZWxEYXRhKHQpLHI9W10sbz1NYXRoLnJvdW5kKHMubGVuZ3RoL2UpO2ZvcihsZXQgdD0wO3Q8ZTt0Kyspe2NvbnN0IGU9cy5zbGljZSh0Km8sKHQrMSkqbyk7bGV0IG49MDtmb3IobGV0IHQ9MDt0PGUubGVuZ3RoO3QrKyl7Y29uc3QgaT1lW3RdO01hdGguYWJzKGkpPk1hdGguYWJzKG4pJiYobj1pKX1yLnB1c2goTWF0aC5yb3VuZChuKmkpL2kpfW4ucHVzaChyKX1yZXR1cm4gbn1nZXREdXJhdGlvbigpe2xldCB0PXN1cGVyLmdldER1cmF0aW9uKCl8fDA7cmV0dXJuIDAhPT10JiZ0IT09MS8wfHwhdGhpcy5kZWNvZGVkRGF0YXx8KHQ9dGhpcy5kZWNvZGVkRGF0YS5kdXJhdGlvbiksdH10b2dnbGVJbnRlcmFjdGlvbih0KXt0aGlzLm9wdGlvbnMuaW50ZXJhY3Q9dH1zZXRUaW1lKHQpe3N1cGVyLnNldFRpbWUodCksdGhpcy51cGRhdGVQcm9ncmVzcyh0KX1zZWVrVG8odCl7Y29uc3QgZT10aGlzLmdldER1cmF0aW9uKCkqdDt0aGlzLnNldFRpbWUoZSl9cGxheVBhdXNlKCl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtyZXR1cm4gdGhpcy5pc1BsYXlpbmcoKT90aGlzLnBhdXNlKCk6dGhpcy5wbGF5KCl9KSl9c3RvcCgpe3RoaXMucGF1c2UoKSx0aGlzLnNldFRpbWUoMCl9c2tpcCh0KXt0aGlzLnNldFRpbWUodGhpcy5nZXRDdXJyZW50VGltZSgpK3QpfWVtcHR5KCl7dGhpcy5sb2FkKFwiXCIsW1swXV0sLjAwMSl9c2V0TWVkaWFFbGVtZW50KHQpe3RoaXMudW5zdWJzY3JpYmVQbGF5ZXJFdmVudHMoKSxzdXBlci5zZXRNZWRpYUVsZW1lbnQodCksdGhpcy5pbml0UGxheWVyRXZlbnRzKCl9ZXhwb3J0SW1hZ2UoZT1cImltYWdlL3BuZ1wiLGk9MSxzPVwiZGF0YVVSTFwiKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3JldHVybiB0aGlzLnJlbmRlcmVyLmV4cG9ydEltYWdlKGUsaSxzKX0pKX1kZXN0cm95KCl7dGhpcy5lbWl0KFwiZGVzdHJveVwiKSx0aGlzLnBsdWdpbnMuZm9yRWFjaCgodD0+dC5kZXN0cm95KCkpKSx0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgodD0+dCgpKSksdGhpcy51bnN1YnNjcmliZVBsYXllckV2ZW50cygpLHRoaXMudGltZXIuZGVzdHJveSgpLHRoaXMucmVuZGVyZXIuZGVzdHJveSgpLHN1cGVyLmRlc3Ryb3koKX19dS5CYXNlUGx1Z2luPWNsYXNzIGV4dGVuZHMgZXtjb25zdHJ1Y3Rvcih0KXtzdXBlcigpLHRoaXMuc3Vic2NyaXB0aW9ucz1bXSx0aGlzLm9wdGlvbnM9dH1vbkluaXQoKXt9X2luaXQodCl7dGhpcy53YXZlc3VyZmVyPXQsdGhpcy5vbkluaXQoKX1kZXN0cm95KCl7dGhpcy5lbWl0KFwiZGVzdHJveVwiKSx0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgodD0+dCgpKSl9fSx1LmRvbT1yO2V4cG9ydHt1IGFzIGRlZmF1bHR9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBXYXZlU3VyZmVyIGZyb20gJ3dhdmVzdXJmZXIuanMnO1xuaW1wb3J0IEVhcmx5TGlmZSBmcm9tICcuL2F1ZGlvLzAxX0Vhcmx5TGlmZS5tcDMnO1xuaW1wb3J0IE1vbUtpZHNDYXJwZW50cnkgZnJvbSAnLi9hdWRpby8wMl9Nb21LaWRzQ2FycGVudHJ5Lm1wMyc7XG5pbXBvcnQgTmF0dXJlIGZyb20gJy4vYXVkaW8vMDNfTmF0dXJlLm1wMyc7XG5pbXBvcnQgUmVsaWdpb24gZnJvbSAnLi9hdWRpby8wNF9SZWxpZ2lvbi5tcDMnO1xuaW1wb3J0IEFkdmljZVRvR3JhbmRraWRzIGZyb20gJy4vYXVkaW8vMDVfQWR2aWNlVG9HcmFuZGtpZHMubXAzJztcbmltcG9ydCBBZHZpY2VUb0hpc0tpZHMgZnJvbSAnLi9hdWRpby8wNl9BZHZpY2VUb0hpc0tpZHMubXAzJztcbmltcG9ydCBNZXNzYWdlVG9UaGVGYW1pbHkgZnJvbSAnLi9hdWRpby8wN19NZXNzYWdlVG9UaGVGYW1pbHkubXAzJztcbmltcG9ydCBNZXNzYWdlVG9Nb20gZnJvbSAnLi9hdWRpby8wOF9NZXNzYWdlVG9Nb20ubXAzJztcbmltcG9ydCBEYWRTaW5nc0tyaXN0b2ZmZXJzb24gZnJvbSAnLi9hdWRpby8wOV9EYWRTaW5nc0tyaXN0b2ZmZXJzb24ubXAzJztcblxuLy8gcHV0cyBhdWRpbyBmaWxlcyBpbiBhbiBhcnJheVxuY29uc3QgdHJhY2tzID0gW1xuICBFYXJseUxpZmUsXG4gIE1vbUtpZHNDYXJwZW50cnksXG4gIE5hdHVyZSxcbiAgUmVsaWdpb24sXG4gIEFkdmljZVRvR3JhbmRraWRzLFxuICBBZHZpY2VUb0hpc0tpZHMsXG4gIE1lc3NhZ2VUb1RoZUZhbWlseSxcbiAgTWVzc2FnZVRvTW9tLFxuICBEYWRTaW5nc0tyaXN0b2ZmZXJzb24sXG5dO1xuXG4vLyBjcmVhdGVzIGEgY29udGFpbmVyIGZvciB0aGUgdHJhY2tzIGFuZCBhcHBlbmRzIGl0IHRvIERPTVxuY29uc3QgdHJhY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRyYWNrQ29udGFpbmVyLmlkID0gJ3RyYWNrLWNvbnRhaW5lcic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRyYWNrQ29udGFpbmVyKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgLy8gY3JlYXRlIGEgdHJhY2sgZGl2IHcvIGlkIG9mIHRyYWNrW2ldLCBhZGQgY2xhc3NcbiAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdHJhY2suaWQgPSBgdHJhY2ske1tpXX1gO1xuICB0cmFjay5jbGFzc0xpc3QuYWRkKCd0cmFjaycpO1xuICB0cmFja0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmFjayk7XG5cbiAgLy8gY3JlYXRlIHdhdmVzdXJmZXIgaW5zdGFuY2UsIGFwcGVuZCB0byB0aGUgYWJvdmUgdHJhY2sgZGl2LCBvcHRpb25zXG4gIGNvbnN0IHdhdmVzdXJmZXIgPSBXYXZlU3VyZmVyLmNyZWF0ZSh7XG4gICAgY29udGFpbmVyOiBgI3RyYWNrJHtbaV19YCxcbiAgICB3YXZlQ29sb3I6ICdyZ2IoMjAwLCAwLCAyMDApJyxcbiAgICBwcm9ncmVzc0NvbG9yOiAncmdiKDEwMCwgMCwgMTAwKScsXG4gICAgYmFyV2lkdGg6IDAsXG4gICAgYmFyUmFkaXVzOiAwLFxuICB9KTtcblxuICAvLyBsb2FkIHRyYWNrW2ldIGludG8gd2F2ZXN1cmZlciBpbnN0YW5jZVxuICB3YXZlc3VyZmVyLmxvYWQodHJhY2tzW2ldKTtcblxuICAvLyBjcmVhdGUgcGxheSBidXR0b25cbiAgY29uc3QgcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwbGF5LnRleHRDb250ZW50ID0gJ1BsYXkvUGxhdXNlJztcbiAgLy8gb24gY2xpY2ssIGl0IHBsYXlzIG9yIHBhdXNlcyB0aGUgd2F2ZXN1cmZlciBpbnN0YW5jZVxuICBwbGF5Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgd2F2ZXN1cmZlci5wbGF5UGF1c2UoKTtcbiAgfTtcbiAgLy8gYXBwZW5kIHRvIHRyYWNrXG4gIHRyYWNrLmFwcGVuZENoaWxkKHBsYXkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9