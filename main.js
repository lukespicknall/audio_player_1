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

.audio-player {
    width: 400px;
    margin: 20px;
}

.controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.progress {
    height: 10px;
    background-color: #ccc;
    margin-top: 10px;
}

.progress-bar {
    width: 0;
    height: 100%;
    background-color: #4caf50;
}

#time {
    display: flex;
    justify-content: space-between;
     justify-content: flex-start;
}
#current-time, #total-time {
    /* margin-top: 10px; */
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,QAAQ;IACR,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,8BAA8B;KAC7B,2BAA2B;AAChC;AACA;IACI,sBAAsB;AAC1B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n.audio-player {\n    width: 400px;\n    margin: 20px;\n}\n\n.controls {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 10px;\n}\n\n.progress {\n    height: 10px;\n    background-color: #ccc;\n    margin-top: 10px;\n}\n\n.progress-bar {\n    width: 0;\n    height: 100%;\n    background-color: #4caf50;\n}\n\n#time {\n    display: flex;\n    justify-content: space-between;\n     justify-content: flex-start;\n}\n#current-time, #total-time {\n    /* margin-top: 10px; */\n}"],"sourceRoot":""}]);
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



const wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  container: document.body,
  waveColor: 'rgb(200, 0, 200)',
  progressColor: 'rgb(100, 0, 100)',
  url: '../src/audio/09_DadSingsKristofferson.mp3',
});

wavesurfer.on('click', () => {
  wavesurfer.play();
});

// document.appendChild(wavesurfer);

// const audio = document.getElementById('audio');
// const playPauseButton = document.getElementById('play-pause-button');
// const volumeControl = document.getElementById('volume-control');
// const progressBar = document.getElementById('progress-bar');
// const currentTimeDisplay = document.getElementById('current-time');
// const totalTimeDisplay = document.getElementById('total-time');

// let isPlaying = false;

// playPauseButton.addEventListener('click', () => {
//   if (isPlaying) {
//     audio.pause();
//     playPauseButton.textContent = 'Play';
//   } else {
//     audio.play();
//     playPauseButton.textContent = 'Pause';
//   }
//   isPlaying = !isPlaying;
// });

// volumeControl.addEventListener('input', () => {
//   audio.volume = volumeControl.value;
// });

// audio.addEventListener('timeupdate', () => {
//   const { currentTime } = audio;
//   const { duration } = audio;

//   const currentMinutes = Math.floor(currentTime / 60);
//   const currentSeconds = Math.floor(currentTime % 60);
//   const totalMinutes = Math.floor(duration / 60);
//   const totalSeconds = Math.floor(duration % 60);

//   currentTimeDisplay.textContent = `${currentMinutes}:${
//     currentSeconds < 10 ? '0' : ''
//   }${currentSeconds}`;
//   totalTimeDisplay.textContent = `${totalMinutes}:${
//     totalSeconds < 10 ? '0' : ''
//   }${totalSeconds}`;

//   const progress = (currentTime / duration) * 100;
//   progressBar.style.width = `${progress}%`;
// });

// console.log('hey earth');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tCOztBQUV2QyxtQkFBbUIscURBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxhQUFhLGNBQWM7QUFDM0IsYUFBYSxXQUFXOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBLE1BQU0sRUFBRSxlQUFlO0FBQ3ZCLHVDQUF1QyxhQUFhO0FBQ3BEO0FBQ0EsTUFBTSxFQUFFLGFBQWE7O0FBRXJCO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0MsSUFBSTs7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy93YXZlc3VyZmVyLmpzL2Rpc3Qvd2F2ZXN1cmZlci5lc20uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5hdWRpby1wbGF5ZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucHJvZ3Jlc3Mge1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xufVxuXG4jdGltZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbiNjdXJyZW50LXRpbWUsICN0b3RhbC10aW1lIHtcbiAgICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0tBQzdCLDJCQUEyQjtBQUNoQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hdWRpby1wbGF5ZXIge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmNvbnRyb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wcm9ncmVzcy1iYXIge1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG4jdGltZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuI2N1cnJlbnQtdGltZSwgI3RvdGFsLXRpbWUge1xcbiAgICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5mdW5jdGlvbiB0KHQsZSxpLHMpe3JldHVybiBuZXcoaXx8KGk9UHJvbWlzZSkpKChmdW5jdGlvbihuLHIpe2Z1bmN0aW9uIG8odCl7dHJ5e2gocy5uZXh0KHQpKX1jYXRjaCh0KXtyKHQpfX1mdW5jdGlvbiBhKHQpe3RyeXtoKHMudGhyb3codCkpfWNhdGNoKHQpe3IodCl9fWZ1bmN0aW9uIGgodCl7dmFyIGU7dC5kb25lP24odC52YWx1ZSk6KGU9dC52YWx1ZSxlIGluc3RhbmNlb2YgaT9lOm5ldyBpKChmdW5jdGlvbih0KXt0KGUpfSkpKS50aGVuKG8sYSl9aCgocz1zLmFwcGx5KHQsZXx8W10pKS5uZXh0KCkpfSkpfWNsYXNzIGV7Y29uc3RydWN0b3IoKXt0aGlzLmxpc3RlbmVycz17fX1vbih0LGUsaSl7aWYodGhpcy5saXN0ZW5lcnNbdF18fCh0aGlzLmxpc3RlbmVyc1t0XT1uZXcgU2V0KSx0aGlzLmxpc3RlbmVyc1t0XS5hZGQoZSksbnVsbD09aT92b2lkIDA6aS5vbmNlKXtjb25zdCBpPSgpPT57dGhpcy51bih0LGkpLHRoaXMudW4odCxlKX07cmV0dXJuIHRoaXMub24odCxpKSxpfXJldHVybigpPT50aGlzLnVuKHQsZSl9dW4odCxlKXt2YXIgaTtudWxsPT09KGk9dGhpcy5saXN0ZW5lcnNbdF0pfHx2b2lkIDA9PT1pfHxpLmRlbGV0ZShlKX1vbmNlKHQsZSl7cmV0dXJuIHRoaXMub24odCxlLHtvbmNlOiEwfSl9dW5BbGwoKXt0aGlzLmxpc3RlbmVycz17fX1lbWl0KHQsLi4uZSl7dGhpcy5saXN0ZW5lcnNbdF0mJnRoaXMubGlzdGVuZXJzW3RdLmZvckVhY2goKHQ9PnQoLi4uZSkpKX19Y29uc3QgaT17ZGVjb2RlOmZ1bmN0aW9uKGUsaSl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtjb25zdCB0PW5ldyBBdWRpb0NvbnRleHQoe3NhbXBsZVJhdGU6aX0pO3JldHVybiB0LmRlY29kZUF1ZGlvRGF0YShlKS5maW5hbGx5KCgoKT0+dC5jbG9zZSgpKSl9KSl9LGNyZWF0ZUJ1ZmZlcjpmdW5jdGlvbih0LGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0WzBdJiYodD1bdF0pLGZ1bmN0aW9uKHQpe2NvbnN0IGU9dFswXTtpZihlLnNvbWUoKHQ9PnQ+MXx8dDwtMSkpKXtjb25zdCBpPWUubGVuZ3RoO2xldCBzPTA7Zm9yKGxldCB0PTA7dDxpO3QrKyl7Y29uc3QgaT1NYXRoLmFicyhlW3RdKTtpPnMmJihzPWkpfWZvcihjb25zdCBlIG9mIHQpZm9yKGxldCB0PTA7dDxpO3QrKyllW3RdLz1zfX0odCkse2R1cmF0aW9uOmUsbGVuZ3RoOnRbMF0ubGVuZ3RoLHNhbXBsZVJhdGU6dFswXS5sZW5ndGgvZSxudW1iZXJPZkNoYW5uZWxzOnQubGVuZ3RoLGdldENoYW5uZWxEYXRhOmU9Pm51bGw9PXQ/dm9pZCAwOnRbZV0sY29weUZyb21DaGFubmVsOkF1ZGlvQnVmZmVyLnByb3RvdHlwZS5jb3B5RnJvbUNoYW5uZWwsY29weVRvQ2hhbm5lbDpBdWRpb0J1ZmZlci5wcm90b3R5cGUuY29weVRvQ2hhbm5lbH19fTtmdW5jdGlvbiBzKHQsZSl7Y29uc3QgaT1lLnhtbG5zP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhlLnhtbG5zLHQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7Zm9yKGNvbnN0W3Qsbl1vZiBPYmplY3QuZW50cmllcyhlKSlpZihcImNoaWxkcmVuXCI9PT10KWZvcihjb25zdFt0LG5db2YgT2JqZWN0LmVudHJpZXMoZSkpXCJzdHJpbmdcIj09dHlwZW9mIG4/aS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSk6aS5hcHBlbmRDaGlsZChzKHQsbikpO2Vsc2VcInN0eWxlXCI9PT10P09iamVjdC5hc3NpZ24oaS5zdHlsZSxuKTpcInRleHRDb250ZW50XCI9PT10P2kudGV4dENvbnRlbnQ9bjppLnNldEF0dHJpYnV0ZSh0LG4udG9TdHJpbmcoKSk7cmV0dXJuIGl9ZnVuY3Rpb24gbih0LGUsaSl7Y29uc3Qgbj1zKHQsZXx8e30pO3JldHVybiBudWxsPT1pfHxpLmFwcGVuZENoaWxkKG4pLG59dmFyIHI9T2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwsY3JlYXRlRWxlbWVudDpuLGRlZmF1bHQ6bn0pO2NvbnN0IG89e2ZldGNoQmxvYjpmdW5jdGlvbihlLGkscyl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtjb25zdCBuPXlpZWxkIGZldGNoKGUscyk7aWYobi5zdGF0dXM+PTQwMCl0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCAke2V9OiAke24uc3RhdHVzfSAoJHtuLnN0YXR1c1RleHR9KWApO3JldHVybiBmdW5jdGlvbihlLGkpe3QodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtpZighZS5ib2R5fHwhZS5oZWFkZXJzKXJldHVybjtjb25zdCBzPWUuYm9keS5nZXRSZWFkZXIoKSxuPU51bWJlcihlLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1MZW5ndGhcIikpfHwwO2xldCByPTA7Y29uc3Qgbz1lPT50KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7cis9KG51bGw9PWU/dm9pZCAwOmUubGVuZ3RoKXx8MDtjb25zdCB0PU1hdGgucm91bmQoci9uKjEwMCk7aSh0KX0pKSxhPSgpPT50KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7bGV0IHQ7dHJ5e3Q9eWllbGQgcy5yZWFkKCl9Y2F0Y2godCl7cmV0dXJufXQuZG9uZXx8KG8odC52YWx1ZSkseWllbGQgYSgpKX0pKTthKCl9KSl9KG4uY2xvbmUoKSxpKSxuLmJsb2IoKX0pKX19O2NsYXNzIGEgZXh0ZW5kcyBle2NvbnN0cnVjdG9yKHQpe3N1cGVyKCksdGhpcy5pc0V4dGVybmFsTWVkaWE9ITEsdC5tZWRpYT8odGhpcy5tZWRpYT10Lm1lZGlhLHRoaXMuaXNFeHRlcm5hbE1lZGlhPSEwKTp0aGlzLm1lZGlhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKSx0Lm1lZGlhQ29udHJvbHMmJih0aGlzLm1lZGlhLmNvbnRyb2xzPSEwKSx0LmF1dG9wbGF5JiYodGhpcy5tZWRpYS5hdXRvcGxheT0hMCksbnVsbCE9dC5wbGF5YmFja1JhdGUmJnRoaXMub25jZU1lZGlhRXZlbnQoXCJjYW5wbGF5XCIsKCgpPT57bnVsbCE9dC5wbGF5YmFja1JhdGUmJih0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZT10LnBsYXliYWNrUmF0ZSl9KSl9b25NZWRpYUV2ZW50KHQsZSxpKXtyZXR1cm4gdGhpcy5tZWRpYS5hZGRFdmVudExpc3RlbmVyKHQsZSxpKSwoKT0+dGhpcy5tZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKHQsZSl9b25jZU1lZGlhRXZlbnQodCxlKXtyZXR1cm4gdGhpcy5vbk1lZGlhRXZlbnQodCxlLHtvbmNlOiEwfSl9Z2V0U3JjKCl7cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFNyY3x8dGhpcy5tZWRpYS5zcmN8fFwiXCJ9cmV2b2tlU3JjKCl7Y29uc3QgdD10aGlzLmdldFNyYygpO3Quc3RhcnRzV2l0aChcImJsb2I6XCIpJiZVUkwucmV2b2tlT2JqZWN0VVJMKHQpfWNhblBsYXlUeXBlKHQpe3JldHVyblwiXCIhPT10aGlzLm1lZGlhLmNhblBsYXlUeXBlKHQpfXNldFNyYyh0LGUpe2lmKHRoaXMuZ2V0U3JjKCk9PT10KXJldHVybjt0aGlzLnJldm9rZVNyYygpO2NvbnN0IGk9ZSBpbnN0YW5jZW9mIEJsb2ImJnRoaXMuY2FuUGxheVR5cGUoZS50eXBlKT9VUkwuY3JlYXRlT2JqZWN0VVJMKGUpOnQ7dGhpcy5tZWRpYS5zcmM9aX1kZXN0cm95KCl7dGhpcy5tZWRpYS5wYXVzZSgpLHRoaXMuaXNFeHRlcm5hbE1lZGlhfHwodGhpcy5tZWRpYS5yZW1vdmUoKSx0aGlzLnJldm9rZVNyYygpLHRoaXMubWVkaWEuc3JjPVwiXCIsdGhpcy5tZWRpYS5sb2FkKCkpfXNldE1lZGlhRWxlbWVudCh0KXt0aGlzLm1lZGlhPXR9cGxheSgpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7aWYodGhpcy5tZWRpYS5zcmMpcmV0dXJuIHRoaXMubWVkaWEucGxheSgpfSkpfXBhdXNlKCl7dGhpcy5tZWRpYS5wYXVzZSgpfWlzUGxheWluZygpe3JldHVybiF0aGlzLm1lZGlhLnBhdXNlZCYmIXRoaXMubWVkaWEuZW5kZWR9c2V0VGltZSh0KXt0aGlzLm1lZGlhLmN1cnJlbnRUaW1lPXR9Z2V0RHVyYXRpb24oKXtyZXR1cm4gdGhpcy5tZWRpYS5kdXJhdGlvbn1nZXRDdXJyZW50VGltZSgpe3JldHVybiB0aGlzLm1lZGlhLmN1cnJlbnRUaW1lfWdldFZvbHVtZSgpe3JldHVybiB0aGlzLm1lZGlhLnZvbHVtZX1zZXRWb2x1bWUodCl7dGhpcy5tZWRpYS52b2x1bWU9dH1nZXRNdXRlZCgpe3JldHVybiB0aGlzLm1lZGlhLm11dGVkfXNldE11dGVkKHQpe3RoaXMubWVkaWEubXV0ZWQ9dH1nZXRQbGF5YmFja1JhdGUoKXtyZXR1cm4gdGhpcy5tZWRpYS5wbGF5YmFja1JhdGV9aXNTZWVraW5nKCl7cmV0dXJuIHRoaXMubWVkaWEuc2Vla2luZ31zZXRQbGF5YmFja1JhdGUodCxlKXtudWxsIT1lJiYodGhpcy5tZWRpYS5wcmVzZXJ2ZXNQaXRjaD1lKSx0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZT10fWdldE1lZGlhRWxlbWVudCgpe3JldHVybiB0aGlzLm1lZGlhfXNldFNpbmtJZCh0KXtyZXR1cm4gdGhpcy5tZWRpYS5zZXRTaW5rSWQodCl9fWNsYXNzIGggZXh0ZW5kcyBle2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIoKSx0aGlzLnRpbWVvdXRzPVtdLHRoaXMuaXNTY3JvbGxhYmxlPSExLHRoaXMuYXVkaW9EYXRhPW51bGwsdGhpcy5yZXNpemVPYnNlcnZlcj1udWxsLHRoaXMubGFzdENvbnRhaW5lcldpZHRoPTAsdGhpcy5pc0RyYWdnaW5nPSExLHRoaXMub3B0aW9ucz10O2NvbnN0IGk9dGhpcy5wYXJlbnRGcm9tT3B0aW9uc0NvbnRhaW5lcih0LmNvbnRhaW5lcik7dGhpcy5wYXJlbnQ9aTtjb25zdFtzLG5dPXRoaXMuaW5pdEh0bWwoKTtpLmFwcGVuZENoaWxkKHMpLHRoaXMuY29udGFpbmVyPXMsdGhpcy5zY3JvbGxDb250YWluZXI9bi5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbFwiKSx0aGlzLndyYXBwZXI9bi5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIiksdGhpcy5jYW52YXNXcmFwcGVyPW4ucXVlcnlTZWxlY3RvcihcIi5jYW52YXNlc1wiKSx0aGlzLnByb2dyZXNzV3JhcHBlcj1uLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIiksdGhpcy5jdXJzb3I9bi5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvclwiKSxlJiZuLmFwcGVuZENoaWxkKGUpLHRoaXMuaW5pdEV2ZW50cygpfXBhcmVudEZyb21PcHRpb25zQ29udGFpbmVyKHQpe2xldCBlO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0P2U9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTp0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJihlPXQpLCFlKXRocm93IG5ldyBFcnJvcihcIkNvbnRhaW5lciBub3QgZm91bmRcIik7cmV0dXJuIGV9aW5pdEV2ZW50cygpe2NvbnN0IHQ9dD0+e2NvbnN0IGU9dGhpcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9dC5jbGllbnRYLWUubGVmdCxzPXQuY2xpZW50WC1lLmxlZnQ7cmV0dXJuW2kvZS53aWR0aCxzL2UuaGVpZ2h0XX07dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlPT57Y29uc3RbaSxzXT10KGUpO3RoaXMuZW1pdChcImNsaWNrXCIsaSxzKX0pKSx0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsKGU9Pntjb25zdFtpLHNdPXQoZSk7dGhpcy5lbWl0KFwiZGJsY2xpY2tcIixpLHMpfSkpLHRoaXMub3B0aW9ucy5kcmFnVG9TZWVrJiZ0aGlzLmluaXREcmFnKCksdGhpcy5zY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgoKT0+e2NvbnN0e3Njcm9sbExlZnQ6dCxzY3JvbGxXaWR0aDplLGNsaWVudFdpZHRoOml9PXRoaXMuc2Nyb2xsQ29udGFpbmVyLHM9dC9lLG49KHQraSkvZTt0aGlzLmVtaXQoXCJzY3JvbGxcIixzLG4pfSkpO2NvbnN0IGU9dGhpcy5jcmVhdGVEZWxheSgxMDApO3RoaXMucmVzaXplT2JzZXJ2ZXI9bmV3IFJlc2l6ZU9ic2VydmVyKCgoKT0+e2UoKS50aGVuKCgoKT0+dGhpcy5vbkNvbnRhaW5lclJlc2l6ZSgpKSkuY2F0Y2goKCgpPT57fSkpfSkpLHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNjcm9sbENvbnRhaW5lcil9b25Db250YWluZXJSZXNpemUoKXtjb25zdCB0PXRoaXMucGFyZW50LmNsaWVudFdpZHRoO3Q9PT10aGlzLmxhc3RDb250YWluZXJXaWR0aCYmXCJhdXRvXCIhPT10aGlzLm9wdGlvbnMuaGVpZ2h0fHwodGhpcy5sYXN0Q29udGFpbmVyV2lkdGg9dCx0aGlzLnJlUmVuZGVyKCkpfWluaXREcmFnKCl7IWZ1bmN0aW9uKHQsZSxpLHMsbj0zLHI9MCl7aWYoIXQpcmV0dXJuKCk9Pnt9O2xldCBvPSgpPT57fTtjb25zdCBhPWE9PntpZihhLmJ1dHRvbiE9PXIpcmV0dXJuO2EucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpO2xldCBoPWEuY2xpZW50WCxsPWEuY2xpZW50WSxkPSExO2NvbnN0IGM9cz0+e3MucHJldmVudERlZmF1bHQoKSxzLnN0b3BQcm9wYWdhdGlvbigpO2NvbnN0IHI9cy5jbGllbnRYLG89cy5jbGllbnRZLGE9ci1oLGM9by1sO2lmKGR8fE1hdGguYWJzKGEpPm58fE1hdGguYWJzKGMpPm4pe2NvbnN0IHM9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx7bGVmdDpuLHRvcDp1fT1zO2R8fChudWxsPT1pfHxpKGgtbixsLXUpLGQ9ITApLGUoYSxjLHItbixvLXUpLGg9cixsPW99fSx1PSgpPT57ZCYmKG51bGw9PXN8fHMoKSksbygpfSxwPXQ9Pnt0LnJlbGF0ZWRUYXJnZXQmJnQucmVsYXRlZFRhcmdldCE9PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudHx8dSgpfSxtPXQ9PntkJiYodC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCkpfSxmPXQ9PntkJiZ0LnByZXZlbnREZWZhdWx0KCl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLGMpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIix1KSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLHApLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIscCksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGYse3Bhc3NpdmU6ITF9KSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixtLHtjYXB0dXJlOiEwfSksbz0oKT0+e2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLGMpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIix1KSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLHApLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIscCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGYpLHNldFRpbWVvdXQoKCgpPT57ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbSx7Y2FwdHVyZTohMH0pfSksMTApfX07dC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIixhKX0odGhpcy53cmFwcGVyLCgodCxlLGkpPT57dGhpcy5lbWl0KFwiZHJhZ1wiLE1hdGgubWF4KDAsTWF0aC5taW4oMSxpL3RoaXMud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkpKX0pLCgoKT0+dGhpcy5pc0RyYWdnaW5nPSEwKSwoKCk9PnRoaXMuaXNEcmFnZ2luZz0hMSkpfWdldEhlaWdodCh0KXtyZXR1cm4gbnVsbD09dD8xMjg6aXNOYU4oTnVtYmVyKHQpKT9cImF1dG9cIj09PXQmJnRoaXMucGFyZW50LmNsaWVudEhlaWdodHx8MTI4Ok51bWJlcih0KX1pbml0SHRtbCgpe2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPXQuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSk7cmV0dXJuIGUuaW5uZXJIVE1MPWBcXG4gICAgICA8c3R5bGU+XFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICBtaW4td2lkdGg6IDFweDtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IGF1ZGlvIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLnNjcm9sbCB7XFxuICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5ub1Njcm9sbGJhciB7XFxuICAgICAgICAgIHNjcm9sbGJhci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5ub1Njcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAud3JhcHBlciB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAuY2FudmFzZXMge1xcbiAgICAgICAgICBtaW4taGVpZ2h0OiAke3RoaXMuZ2V0SGVpZ2h0KHRoaXMub3B0aW9ucy5oZWlnaHQpfXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLmNhbnZhc2VzID4gZGl2IHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgY2FudmFzIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5wcm9ncmVzcyB7XFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5wcm9ncmVzcyA+IGRpdiB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5jdXJzb3Ige1xcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB6LWluZGV4OiA1O1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgfVxcbiAgICAgIDwvc3R5bGU+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbFwiIHBhcnQ9XCJzY3JvbGxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgcGFydD1cIndyYXBwZXJcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbnZhc2VzXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIHBhcnQ9XCJwcm9ncmVzc1wiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yXCIgcGFydD1cImN1cnNvclwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIGAsW3QsZV19c2V0T3B0aW9ucyh0KXtpZih0aGlzLm9wdGlvbnMuY29udGFpbmVyIT09dC5jb250YWluZXIpe2NvbnN0IGU9dGhpcy5wYXJlbnRGcm9tT3B0aW9uc0NvbnRhaW5lcih0LmNvbnRhaW5lcik7ZS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lciksdGhpcy5wYXJlbnQ9ZX10LmRyYWdUb1NlZWsmJiF0aGlzLm9wdGlvbnMuZHJhZ1RvU2VlayYmdGhpcy5pbml0RHJhZygpLHRoaXMub3B0aW9ucz10LHRoaXMucmVSZW5kZXIoKX1nZXRXcmFwcGVyKCl7cmV0dXJuIHRoaXMud3JhcHBlcn1nZXRTY3JvbGwoKXtyZXR1cm4gdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdH1zZXRTY3JvbGwodCl7dGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdD10fXNldFNjcm9sbFBlcmNlbnRhZ2UodCl7Y29uc3R7c2Nyb2xsV2lkdGg6ZX09dGhpcy5zY3JvbGxDb250YWluZXIsaT1lKnQ7dGhpcy5zZXRTY3JvbGwoaSl9ZGVzdHJveSgpe3ZhciB0O3RoaXMuY29udGFpbmVyLnJlbW92ZSgpLG51bGw9PT0odD10aGlzLnJlc2l6ZU9ic2VydmVyKXx8dm9pZCAwPT09dHx8dC5kaXNjb25uZWN0KCl9Y3JlYXRlRGVsYXkodD0xMCl7bGV0IGUsaTtjb25zdCBzPSgpPT57ZSYmY2xlYXJUaW1lb3V0KGUpLGkmJmkoKX07cmV0dXJuIHRoaXMudGltZW91dHMucHVzaChzKSwoKT0+bmV3IFByb21pc2UoKChuLHIpPT57cygpLGk9cixlPXNldFRpbWVvdXQoKCgpPT57ZT12b2lkIDAsaT12b2lkIDAsbigpfSksdCl9KSl9Y29udmVydENvbG9yVmFsdWVzKHQpe2lmKCFBcnJheS5pc0FycmF5KHQpKXJldHVybiB0fHxcIlwiO2lmKHQubGVuZ3RoPDIpcmV0dXJuIHRbMF18fFwiXCI7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGk9ZS5nZXRDb250ZXh0KFwiMmRcIikscz1lLmhlaWdodCood2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpLG49aS5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsMCxzKSxyPTEvKHQubGVuZ3RoLTEpO3JldHVybiB0LmZvckVhY2goKCh0LGUpPT57Y29uc3QgaT1lKnI7bi5hZGRDb2xvclN0b3AoaSx0KX0pKSxufXJlbmRlckJhcldhdmVmb3JtKHQsZSxpLHMpe2NvbnN0IG49dFswXSxyPXRbMV18fHRbMF0sbz1uLmxlbmd0aCx7d2lkdGg6YSxoZWlnaHQ6aH09aS5jYW52YXMsbD1oLzIsZD13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSxjPWUuYmFyV2lkdGg/ZS5iYXJXaWR0aCpkOjEsdT1lLmJhckdhcD9lLmJhckdhcCpkOmUuYmFyV2lkdGg/Yy8yOjAscD1lLmJhclJhZGl1c3x8MCxtPWEvKGMrdSkvbyxmPXAmJlwicm91bmRSZWN0XCJpbiBpP1wicm91bmRSZWN0XCI6XCJyZWN0XCI7aS5iZWdpblBhdGgoKTtsZXQgZz0wLHY9MCxiPTA7Zm9yKGxldCB0PTA7dDw9bzt0Kyspe2NvbnN0IG89TWF0aC5yb3VuZCh0Km0pO2lmKG8+Zyl7Y29uc3QgdD1NYXRoLnJvdW5kKHYqbCpzKSxuPXQrTWF0aC5yb3VuZChiKmwqcyl8fDE7bGV0IHI9bC10O1widG9wXCI9PT1lLmJhckFsaWduP3I9MDpcImJvdHRvbVwiPT09ZS5iYXJBbGlnbiYmKHI9aC1uKSxpW2ZdKGcqKGMrdSkscixjLG4scCksZz1vLHY9MCxiPTB9Y29uc3QgYT1NYXRoLmFicyhuW3RdfHwwKSxkPU1hdGguYWJzKHJbdF18fDApO2E+diYmKHY9YSksZD5iJiYoYj1kKX1pLmZpbGwoKSxpLmNsb3NlUGF0aCgpfXJlbmRlckxpbmVXYXZlZm9ybSh0LGUsaSxzKXtjb25zdCBuPWU9Pntjb25zdCBuPXRbZV18fHRbMF0scj1uLmxlbmd0aCx7aGVpZ2h0Om99PWkuY2FudmFzLGE9by8yLGg9aS5jYW52YXMud2lkdGgvcjtpLm1vdmVUbygwLGEpO2xldCBsPTAsZD0wO2ZvcihsZXQgdD0wO3Q8PXI7dCsrKXtjb25zdCByPU1hdGgucm91bmQodCpoKTtpZihyPmwpe2NvbnN0IHQ9YSsoTWF0aC5yb3VuZChkKmEqcyl8fDEpKigwPT09ZT8tMToxKTtpLmxpbmVUbyhsLHQpLGw9cixkPTB9Y29uc3Qgbz1NYXRoLmFicyhuW3RdfHwwKTtvPmQmJihkPW8pfWkubGluZVRvKGwsYSl9O2kuYmVnaW5QYXRoKCksbigwKSxuKDEpLGkuZmlsbCgpLGkuY2xvc2VQYXRoKCl9cmVuZGVyV2F2ZWZvcm0odCxlLGkpe2lmKGkuZmlsbFN0eWxlPXRoaXMuY29udmVydENvbG9yVmFsdWVzKGUud2F2ZUNvbG9yKSxlLnJlbmRlckZ1bmN0aW9uKXJldHVybiB2b2lkIGUucmVuZGVyRnVuY3Rpb24odCxpKTtsZXQgcz1lLmJhckhlaWdodHx8MTtpZihlLm5vcm1hbGl6ZSl7Y29uc3QgZT1BcnJheS5mcm9tKHRbMF0pLnJlZHVjZSgoKHQsZSk9Pk1hdGgubWF4KHQsTWF0aC5hYnMoZSkpKSwwKTtzPWU/MS9lOjF9ZS5iYXJXaWR0aHx8ZS5iYXJHYXB8fGUuYmFyQWxpZ24/dGhpcy5yZW5kZXJCYXJXYXZlZm9ybSh0LGUsaSxzKTp0aGlzLnJlbmRlckxpbmVXYXZlZm9ybSh0LGUsaSxzKX1yZW5kZXJTaW5nbGVDYW52YXModCxlLGkscyxuLHIsbyxhKXtjb25zdCBoPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSxkPXRbMF0ubGVuZ3RoO2wud2lkdGg9TWF0aC5yb3VuZChpKihyLW4pL2QpLGwuaGVpZ2h0PXMqaCxsLnN0eWxlLndpZHRoPWAke01hdGguZmxvb3IobC53aWR0aC9oKX1weGAsbC5zdHlsZS5oZWlnaHQ9YCR7c31weGAsbC5zdHlsZS5sZWZ0PWAke01hdGguZmxvb3IobippL2gvZCl9cHhgLG8uYXBwZW5kQ2hpbGQobCk7Y29uc3QgYz1sLmdldENvbnRleHQoXCIyZFwiKTtpZih0aGlzLnJlbmRlcldhdmVmb3JtKHQubWFwKCh0PT50LnNsaWNlKG4scikpKSxlLGMpLGwud2lkdGg+MCYmbC5oZWlnaHQ+MCl7Y29uc3QgdD1sLmNsb25lTm9kZSgpLGk9dC5nZXRDb250ZXh0KFwiMmRcIik7aS5kcmF3SW1hZ2UobCwwLDApLGkuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPVwic291cmNlLWluXCIsaS5maWxsU3R5bGU9dGhpcy5jb252ZXJ0Q29sb3JWYWx1ZXMoZS5wcm9ncmVzc0NvbG9yKSxpLmZpbGxSZWN0KDAsMCxsLndpZHRoLGwuaGVpZ2h0KSxhLmFwcGVuZENoaWxkKHQpfX1yZW5kZXJDaGFubmVsKGUsaSxzKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2NvbnN0IG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuZ2V0SGVpZ2h0KGkuaGVpZ2h0KTtuLnN0eWxlLmhlaWdodD1gJHtyfXB4YCx0aGlzLmNhbnZhc1dyYXBwZXIuc3R5bGUubWluSGVpZ2h0PWAke3J9cHhgLHRoaXMuY2FudmFzV3JhcHBlci5hcHBlbmRDaGlsZChuKTtjb25zdCBvPW4uY2xvbmVOb2RlKCk7dGhpcy5wcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQobyk7Y29uc3QgYT1lWzBdLmxlbmd0aCxsPSh0LGgpPT57dGhpcy5yZW5kZXJTaW5nbGVDYW52YXMoZSxpLHMscixNYXRoLm1heCgwLHQpLE1hdGgubWluKGgsYSksbixvKX07aWYoIXRoaXMuaXNTY3JvbGxhYmxlKXJldHVybiB2b2lkIGwoMCxhKTtjb25zdHtzY3JvbGxMZWZ0OmQsc2Nyb2xsV2lkdGg6YyxjbGllbnRXaWR0aDp1fT10aGlzLnNjcm9sbENvbnRhaW5lcixwPWEvYztsZXQgbT1NYXRoLm1pbihoLk1BWF9DQU5WQVNfV0lEVEgsdSk7aWYoaS5iYXJXaWR0aHx8aS5iYXJHYXApe2NvbnN0IHQ9aS5iYXJXaWR0aHx8LjUsZT10KyhpLmJhckdhcHx8dC8yKTttJWUhPTAmJihtPU1hdGguZmxvb3IobS9lKSplKX1jb25zdCBmPU1hdGguZmxvb3IoTWF0aC5hYnMoZCkqcCksZz1NYXRoLmZsb29yKGYrbSpwKSx2PWctZjt2PD0wfHwobChmLGcpLHlpZWxkIFByb21pc2UuYWxsKFsoKCk9PnQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtpZigwPT09ZilyZXR1cm47Y29uc3QgdD10aGlzLmNyZWF0ZURlbGF5KCk7Zm9yKGxldCBlPWY7ZT49MDtlLT12KXlpZWxkIHQoKSxsKE1hdGgubWF4KDAsZS12KSxlKX0pKSkoKSwoKCk9PnQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtpZihnPT09YSlyZXR1cm47Y29uc3QgdD10aGlzLmNyZWF0ZURlbGF5KCk7Zm9yKGxldCBlPWc7ZTxhO2UrPXYpeWllbGQgdCgpLGwoZSxNYXRoLm1pbihhLGUrdikpfSkpKSgpXSkpfSkpfXJlbmRlcihlKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3RoaXMudGltZW91dHMuZm9yRWFjaCgodD0+dCgpKSksdGhpcy50aW1lb3V0cz1bXSx0aGlzLmNhbnZhc1dyYXBwZXIuaW5uZXJIVE1MPVwiXCIsdGhpcy5wcm9ncmVzc1dyYXBwZXIuaW5uZXJIVE1MPVwiXCIsbnVsbCE9dGhpcy5vcHRpb25zLndpZHRoJiYodGhpcy5zY3JvbGxDb250YWluZXIuc3R5bGUud2lkdGg9XCJudW1iZXJcIj09dHlwZW9mIHRoaXMub3B0aW9ucy53aWR0aD9gJHt0aGlzLm9wdGlvbnMud2lkdGh9cHhgOnRoaXMub3B0aW9ucy53aWR0aCk7Y29uc3QgdD13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSxpPXRoaXMuc2Nyb2xsQ29udGFpbmVyLmNsaWVudFdpZHRoLHM9TWF0aC5jZWlsKGUuZHVyYXRpb24qKHRoaXMub3B0aW9ucy5taW5QeFBlclNlY3x8MCkpO3RoaXMuaXNTY3JvbGxhYmxlPXM+aTtjb25zdCBuPXRoaXMub3B0aW9ucy5maWxsUGFyZW50JiYhdGhpcy5pc1Njcm9sbGFibGUscj0obj9pOnMpKnQ7dGhpcy53cmFwcGVyLnN0eWxlLndpZHRoPW4/XCIxMDAlXCI6YCR7c31weGAsdGhpcy5zY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dYPXRoaXMuaXNTY3JvbGxhYmxlP1wiYXV0b1wiOlwiaGlkZGVuXCIsdGhpcy5zY3JvbGxDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm5vU2Nyb2xsYmFyXCIsISF0aGlzLm9wdGlvbnMuaGlkZVNjcm9sbGJhciksdGhpcy5jdXJzb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yPWAke3RoaXMub3B0aW9ucy5jdXJzb3JDb2xvcnx8dGhpcy5vcHRpb25zLnByb2dyZXNzQ29sb3J9YCx0aGlzLmN1cnNvci5zdHlsZS53aWR0aD1gJHt0aGlzLm9wdGlvbnMuY3Vyc29yV2lkdGh9cHhgLHRoaXMuYXVkaW9EYXRhPWUsdGhpcy5lbWl0KFwicmVuZGVyXCIpO3RyeXtpZih0aGlzLm9wdGlvbnMuc3BsaXRDaGFubmVscyl5aWVsZCBQcm9taXNlLmFsbChBcnJheS5mcm9tKHtsZW5ndGg6ZS5udW1iZXJPZkNoYW5uZWxzfSkubWFwKCgodCxpKT0+e3ZhciBzO2NvbnN0IG49T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHRoaXMub3B0aW9ucyksbnVsbD09PShzPXRoaXMub3B0aW9ucy5zcGxpdENoYW5uZWxzKXx8dm9pZCAwPT09cz92b2lkIDA6c1tpXSk7cmV0dXJuIHRoaXMucmVuZGVyQ2hhbm5lbChbZS5nZXRDaGFubmVsRGF0YShpKV0sbixyKX0pKSk7ZWxzZXtjb25zdCB0PVtlLmdldENoYW5uZWxEYXRhKDApXTtlLm51bWJlck9mQ2hhbm5lbHM+MSYmdC5wdXNoKGUuZ2V0Q2hhbm5lbERhdGEoMSkpLHlpZWxkIHRoaXMucmVuZGVyQ2hhbm5lbCh0LHRoaXMub3B0aW9ucyxyKX19Y2F0Y2godCl7cmV0dXJufXRoaXMuZW1pdChcInJlbmRlcmVkXCIpfSkpfXJlUmVuZGVyKCl7aWYoIXRoaXMuYXVkaW9EYXRhKXJldHVybjtjb25zdHtzY3JvbGxXaWR0aDp0fT10aGlzLnNjcm9sbENvbnRhaW5lcix7cmlnaHQ6ZX09dGhpcy5wcm9ncmVzc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYodGhpcy5yZW5kZXIodGhpcy5hdWRpb0RhdGEpLHRoaXMuaXNTY3JvbGxhYmxlJiZ0IT09dGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsV2lkdGgpe2NvbnN0e3JpZ2h0OnR9PXRoaXMucHJvZ3Jlc3NXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2xldCBpPXQtZTtpKj0yLGk9aTwwP01hdGguZmxvb3IoaSk6TWF0aC5jZWlsKGkpLGkvPTIsdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCs9aX19em9vbSh0KXt0aGlzLm9wdGlvbnMubWluUHhQZXJTZWM9dCx0aGlzLnJlUmVuZGVyKCl9c2Nyb2xsSW50b1ZpZXcodCxlPSExKXtjb25zdHtzY3JvbGxMZWZ0Omksc2Nyb2xsV2lkdGg6cyxjbGllbnRXaWR0aDpufT10aGlzLnNjcm9sbENvbnRhaW5lcixyPXQqcyxvPWksYT1pK24saD1uLzI7aWYodGhpcy5pc0RyYWdnaW5nKXtjb25zdCB0PTMwO3IrdD5hP3RoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQrPXQ6ci10PG8mJih0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0LT10KX1lbHNleyhyPG98fHI+YSkmJih0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0PXItKHRoaXMub3B0aW9ucy5hdXRvQ2VudGVyP2g6MCkpO2NvbnN0IHQ9ci1pLWg7ZSYmdGhpcy5vcHRpb25zLmF1dG9DZW50ZXImJnQ+MCYmKHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQrPU1hdGgubWluKHQsMTApKX17Y29uc3QgdD10aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0LGU9dC9zLGk9KHQrbikvczt0aGlzLmVtaXQoXCJzY3JvbGxcIixlLGkpfX1yZW5kZXJQcm9ncmVzcyh0LGUpe2lmKGlzTmFOKHQpKXJldHVybjtjb25zdCBpPTEwMCp0O3RoaXMuY2FudmFzV3JhcHBlci5zdHlsZS5jbGlwUGF0aD1gcG9seWdvbigke2l9JSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgJHtpfSUgMTAwJSlgLHRoaXMucHJvZ3Jlc3NXcmFwcGVyLnN0eWxlLndpZHRoPWAke2l9JWAsdGhpcy5jdXJzb3Iuc3R5bGUubGVmdD1gJHtpfSVgLHRoaXMuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybT1gdHJhbnNsYXRlWCgtJHsxMDA9PT1NYXRoLnJvdW5kKGkpP3RoaXMub3B0aW9ucy5jdXJzb3JXaWR0aDowfXB4KWAsdGhpcy5pc1Njcm9sbGFibGUmJnRoaXMub3B0aW9ucy5hdXRvU2Nyb2xsJiZ0aGlzLnNjcm9sbEludG9WaWV3KHQsZSl9ZXhwb3J0SW1hZ2UoZSxpLHMpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7Y29uc3QgdD10aGlzLmNhbnZhc1dyYXBwZXIucXVlcnlTZWxlY3RvckFsbChcImNhbnZhc1wiKTtpZighdC5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiTm8gd2F2ZWZvcm0gZGF0YVwiKTtpZihcImRhdGFVUkxcIj09PXMpe2NvbnN0IHM9QXJyYXkuZnJvbSh0KS5tYXAoKHQ9PnQudG9EYXRhVVJMKGUsaSkpKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMpfXJldHVybiBQcm9taXNlLmFsbChBcnJheS5mcm9tKHQpLm1hcCgodD0+bmV3IFByb21pc2UoKChzLG4pPT57dC50b0Jsb2IoKHQ9Pnt0P3ModCk6bihuZXcgRXJyb3IoXCJDb3VsZCBub3QgZXhwb3J0IGltYWdlXCIpKX0pLGUsaSl9KSkpKSl9KSl9fWguTUFYX0NBTlZBU19XSURUSD00ZTM7Y2xhc3MgbCBleHRlbmRzIGV7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMudW5zdWJzY3JpYmU9KCk9Pnt9fXN0YXJ0KCl7dGhpcy51bnN1YnNjcmliZT10aGlzLm9uKFwidGlja1wiLCgoKT0+e3JlcXVlc3RBbmltYXRpb25GcmFtZSgoKCk9Pnt0aGlzLmVtaXQoXCJ0aWNrXCIpfSkpfSkpLHRoaXMuZW1pdChcInRpY2tcIil9c3RvcCgpe3RoaXMudW5zdWJzY3JpYmUoKX1kZXN0cm95KCl7dGhpcy51bnN1YnNjcmliZSgpfX1jbGFzcyBkIGV4dGVuZHMgZXtjb25zdHJ1Y3Rvcih0PW5ldyBBdWRpb0NvbnRleHQpe3N1cGVyKCksdGhpcy5idWZmZXJOb2RlPW51bGwsdGhpcy5hdXRvcGxheT0hMSx0aGlzLnBsYXlTdGFydFRpbWU9MCx0aGlzLnBsYXllZER1cmF0aW9uPTAsdGhpcy5fbXV0ZWQ9ITEsdGhpcy5fcGxheWJhY2tSYXRlPTEsdGhpcy5idWZmZXI9bnVsbCx0aGlzLmN1cnJlbnRTcmM9XCJcIix0aGlzLnBhdXNlZD0hMCx0aGlzLmNyb3NzT3JpZ2luPW51bGwsdGhpcy5zZWVraW5nPSExLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcj10aGlzLm9uLHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcj10aGlzLnVuLHRoaXMuYXVkaW9Db250ZXh0PXQsdGhpcy5nYWluTm9kZT10aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKX1sb2FkKCl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXt9KSl9Z2V0IHNyYygpe3JldHVybiB0aGlzLmN1cnJlbnRTcmN9c2V0IHNyYyh0KXtpZih0aGlzLmN1cnJlbnRTcmM9dCwhdClyZXR1cm4gdGhpcy5idWZmZXI9bnVsbCx2b2lkIHRoaXMuZW1pdChcImVtcHRpZWRcIik7ZmV0Y2godCkudGhlbigoZT0+e2lmKGUuc3RhdHVzPj00MDApdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggJHt0fTogJHtlLnN0YXR1c30gKCR7ZS5zdGF0dXNUZXh0fSlgKTtyZXR1cm4gZS5hcnJheUJ1ZmZlcigpfSkpLnRoZW4oKGU9PnRoaXMuY3VycmVudFNyYyE9PXQ/bnVsbDp0aGlzLmF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoZSkpKS50aGVuKChlPT57dGhpcy5jdXJyZW50U3JjPT09dCYmKHRoaXMuYnVmZmVyPWUsdGhpcy5lbWl0KFwibG9hZGVkbWV0YWRhdGFcIiksdGhpcy5lbWl0KFwiY2FucGxheVwiKSx0aGlzLmF1dG9wbGF5JiZ0aGlzLnBsYXkoKSl9KSl9X3BsYXkoKXt2YXIgdDtpZighdGhpcy5wYXVzZWQpcmV0dXJuO3RoaXMucGF1c2VkPSExLG51bGw9PT0odD10aGlzLmJ1ZmZlck5vZGUpfHx2b2lkIDA9PT10fHx0LmRpc2Nvbm5lY3QoKSx0aGlzLmJ1ZmZlck5vZGU9dGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCksdGhpcy5idWZmZXJOb2RlLmJ1ZmZlcj10aGlzLmJ1ZmZlcix0aGlzLmJ1ZmZlck5vZGUucGxheWJhY2tSYXRlLnZhbHVlPXRoaXMuX3BsYXliYWNrUmF0ZSx0aGlzLmJ1ZmZlck5vZGUuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtsZXQgZT10aGlzLnBsYXllZER1cmF0aW9uKnRoaXMuX3BsYXliYWNrUmF0ZTtlPj10aGlzLmR1cmF0aW9uJiYoZT0wLHRoaXMucGxheWVkRHVyYXRpb249MCksdGhpcy5idWZmZXJOb2RlLnN0YXJ0KHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lLGUpLHRoaXMucGxheVN0YXJ0VGltZT10aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSx0aGlzLmJ1ZmZlck5vZGUub25lbmRlZD0oKT0+e3RoaXMuY3VycmVudFRpbWU+PXRoaXMuZHVyYXRpb24mJih0aGlzLnBhdXNlKCksdGhpcy5lbWl0KFwiZW5kZWRcIikpfX1fcGF1c2UoKXt2YXIgdDt0aGlzLnBhdXNlZD0hMCxudWxsPT09KHQ9dGhpcy5idWZmZXJOb2RlKXx8dm9pZCAwPT09dHx8dC5zdG9wKCksdGhpcy5wbGF5ZWREdXJhdGlvbis9dGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUtdGhpcy5wbGF5U3RhcnRUaW1lfXBsYXkoKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3RoaXMucGF1c2VkJiYodGhpcy5fcGxheSgpLHRoaXMuZW1pdChcInBsYXlcIikpfSkpfXBhdXNlKCl7dGhpcy5wYXVzZWR8fCh0aGlzLl9wYXVzZSgpLHRoaXMuZW1pdChcInBhdXNlXCIpKX1zdG9wQXQodCl7dmFyIGUsaTtjb25zdCBzPXQtdGhpcy5jdXJyZW50VGltZTtudWxsPT09KGU9dGhpcy5idWZmZXJOb2RlKXx8dm9pZCAwPT09ZXx8ZS5zdG9wKHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lK3MpLG51bGw9PT0oaT10aGlzLmJ1ZmZlck5vZGUpfHx2b2lkIDA9PT1pfHxpLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCgoKT0+e3RoaXMuYnVmZmVyTm9kZT1udWxsLHRoaXMucGF1c2UoKX0pLHtvbmNlOiEwfSl9c2V0U2lua0lkKGUpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7cmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LnNldFNpbmtJZChlKX0pKX1nZXQgcGxheWJhY2tSYXRlKCl7cmV0dXJuIHRoaXMuX3BsYXliYWNrUmF0ZX1zZXQgcGxheWJhY2tSYXRlKHQpe3RoaXMuX3BsYXliYWNrUmF0ZT10LHRoaXMuYnVmZmVyTm9kZSYmKHRoaXMuYnVmZmVyTm9kZS5wbGF5YmFja1JhdGUudmFsdWU9dCl9Z2V0IGN1cnJlbnRUaW1lKCl7cmV0dXJuKHRoaXMucGF1c2VkP3RoaXMucGxheWVkRHVyYXRpb246dGhpcy5wbGF5ZWREdXJhdGlvbisodGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUtdGhpcy5wbGF5U3RhcnRUaW1lKSkqdGhpcy5fcGxheWJhY2tSYXRlfXNldCBjdXJyZW50VGltZSh0KXt0aGlzLmVtaXQoXCJzZWVraW5nXCIpO2NvbnN0IGU9IXRoaXMucGF1c2VkO2UmJnRoaXMuX3BhdXNlKCksdGhpcy5wbGF5ZWREdXJhdGlvbj10L3RoaXMuX3BsYXliYWNrUmF0ZSxlJiZ0aGlzLl9wbGF5KCksdGhpcy5lbWl0KFwidGltZXVwZGF0ZVwiKX1nZXQgZHVyYXRpb24oKXt2YXIgdDtyZXR1cm4obnVsbD09PSh0PXRoaXMuYnVmZmVyKXx8dm9pZCAwPT09dD92b2lkIDA6dC5kdXJhdGlvbil8fDB9Z2V0IHZvbHVtZSgpe3JldHVybiB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWV9c2V0IHZvbHVtZSh0KXt0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWU9dCx0aGlzLmVtaXQoXCJ2b2x1bWVjaGFuZ2VcIil9Z2V0IG11dGVkKCl7cmV0dXJuIHRoaXMuX211dGVkfXNldCBtdXRlZCh0KXt0aGlzLl9tdXRlZCE9PXQmJih0aGlzLl9tdXRlZD10LHRoaXMuX211dGVkP3RoaXMuZ2Fpbk5vZGUuZGlzY29ubmVjdCgpOnRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbikpfWNhblBsYXlUeXBlKHQpe3JldHVybi9eKGF1ZGlvfHZpZGVvKVxcLy8udGVzdCh0KX1nZXRHYWluTm9kZSgpe3JldHVybiB0aGlzLmdhaW5Ob2RlfWdldENoYW5uZWxEYXRhKCl7Y29uc3QgdD1bXTtpZighdGhpcy5idWZmZXIpcmV0dXJuIHQ7Y29uc3QgZT10aGlzLmJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzO2ZvcihsZXQgaT0wO2k8ZTtpKyspdC5wdXNoKHRoaXMuYnVmZmVyLmdldENoYW5uZWxEYXRhKGkpKTtyZXR1cm4gdH19Y29uc3QgYz17d2F2ZUNvbG9yOlwiIzk5OVwiLHByb2dyZXNzQ29sb3I6XCIjNTU1XCIsY3Vyc29yV2lkdGg6MSxtaW5QeFBlclNlYzowLGZpbGxQYXJlbnQ6ITAsaW50ZXJhY3Q6ITAsZHJhZ1RvU2VlazohMSxhdXRvU2Nyb2xsOiEwLGF1dG9DZW50ZXI6ITAsc2FtcGxlUmF0ZTo4ZTN9O2NsYXNzIHUgZXh0ZW5kcyBhe3N0YXRpYyBjcmVhdGUodCl7cmV0dXJuIG5ldyB1KHQpfWNvbnN0cnVjdG9yKHQpe2NvbnN0IGU9dC5tZWRpYXx8KFwiV2ViQXVkaW9cIj09PXQuYmFja2VuZD9uZXcgZDp2b2lkIDApO3N1cGVyKHttZWRpYTplLG1lZGlhQ29udHJvbHM6dC5tZWRpYUNvbnRyb2xzLGF1dG9wbGF5OnQuYXV0b3BsYXkscGxheWJhY2tSYXRlOnQuYXVkaW9SYXRlfSksdGhpcy5wbHVnaW5zPVtdLHRoaXMuZGVjb2RlZERhdGE9bnVsbCx0aGlzLnN1YnNjcmlwdGlvbnM9W10sdGhpcy5tZWRpYVN1YnNjcmlwdGlvbnM9W10sdGhpcy5vcHRpb25zPU9iamVjdC5hc3NpZ24oe30sYyx0KSx0aGlzLnRpbWVyPW5ldyBsO2NvbnN0IGk9ZT92b2lkIDA6dGhpcy5nZXRNZWRpYUVsZW1lbnQoKTt0aGlzLnJlbmRlcmVyPW5ldyBoKHRoaXMub3B0aW9ucyxpKSx0aGlzLmluaXRQbGF5ZXJFdmVudHMoKSx0aGlzLmluaXRSZW5kZXJlckV2ZW50cygpLHRoaXMuaW5pdFRpbWVyRXZlbnRzKCksdGhpcy5pbml0UGx1Z2lucygpLFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCgpPT57dGhpcy5lbWl0KFwiaW5pdFwiKTtjb25zdCB0PXRoaXMub3B0aW9ucy51cmx8fHRoaXMuZ2V0U3JjKCl8fFwiXCI7KHR8fHRoaXMub3B0aW9ucy5wZWFrcyYmdGhpcy5vcHRpb25zLmR1cmF0aW9uKSYmdGhpcy5sb2FkKHQsdGhpcy5vcHRpb25zLnBlYWtzLHRoaXMub3B0aW9ucy5kdXJhdGlvbil9KSl9dXBkYXRlUHJvZ3Jlc3ModD10aGlzLmdldEN1cnJlbnRUaW1lKCkpe3JldHVybiB0aGlzLnJlbmRlcmVyLnJlbmRlclByb2dyZXNzKHQvdGhpcy5nZXREdXJhdGlvbigpLHRoaXMuaXNQbGF5aW5nKCkpLHR9aW5pdFRpbWVyRXZlbnRzKCl7dGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy50aW1lci5vbihcInRpY2tcIiwoKCk9PntpZighdGhpcy5pc1NlZWtpbmcoKSl7Y29uc3QgdD10aGlzLnVwZGF0ZVByb2dyZXNzKCk7dGhpcy5lbWl0KFwidGltZXVwZGF0ZVwiLHQpLHRoaXMuZW1pdChcImF1ZGlvcHJvY2Vzc1wiLHQpfX0pKSl9aW5pdFBsYXllckV2ZW50cygpe3RoaXMuaXNQbGF5aW5nKCkmJih0aGlzLmVtaXQoXCJwbGF5XCIpLHRoaXMudGltZXIuc3RhcnQoKSksdGhpcy5tZWRpYVN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLm9uTWVkaWFFdmVudChcInRpbWV1cGRhdGVcIiwoKCk9Pntjb25zdCB0PXRoaXMudXBkYXRlUHJvZ3Jlc3MoKTt0aGlzLmVtaXQoXCJ0aW1ldXBkYXRlXCIsdCl9KSksdGhpcy5vbk1lZGlhRXZlbnQoXCJwbGF5XCIsKCgpPT57dGhpcy5lbWl0KFwicGxheVwiKSx0aGlzLnRpbWVyLnN0YXJ0KCl9KSksdGhpcy5vbk1lZGlhRXZlbnQoXCJwYXVzZVwiLCgoKT0+e3RoaXMuZW1pdChcInBhdXNlXCIpLHRoaXMudGltZXIuc3RvcCgpfSkpLHRoaXMub25NZWRpYUV2ZW50KFwiZW1wdGllZFwiLCgoKT0+e3RoaXMudGltZXIuc3RvcCgpfSkpLHRoaXMub25NZWRpYUV2ZW50KFwiZW5kZWRcIiwoKCk9Pnt0aGlzLmVtaXQoXCJmaW5pc2hcIil9KSksdGhpcy5vbk1lZGlhRXZlbnQoXCJzZWVraW5nXCIsKCgpPT57dGhpcy5lbWl0KFwic2Vla2luZ1wiLHRoaXMuZ2V0Q3VycmVudFRpbWUoKSl9KSkpfWluaXRSZW5kZXJlckV2ZW50cygpe3RoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMucmVuZGVyZXIub24oXCJjbGlja1wiLCgodCxlKT0+e3RoaXMub3B0aW9ucy5pbnRlcmFjdCYmKHRoaXMuc2Vla1RvKHQpLHRoaXMuZW1pdChcImludGVyYWN0aW9uXCIsdCp0aGlzLmdldER1cmF0aW9uKCkpLHRoaXMuZW1pdChcImNsaWNrXCIsdCxlKSl9KSksdGhpcy5yZW5kZXJlci5vbihcImRibGNsaWNrXCIsKCh0LGUpPT57dGhpcy5lbWl0KFwiZGJsY2xpY2tcIix0LGUpfSkpLHRoaXMucmVuZGVyZXIub24oXCJzY3JvbGxcIiwoKHQsZSk9Pntjb25zdCBpPXRoaXMuZ2V0RHVyYXRpb24oKTt0aGlzLmVtaXQoXCJzY3JvbGxcIix0KmksZSppKX0pKSx0aGlzLnJlbmRlcmVyLm9uKFwicmVuZGVyXCIsKCgpPT57dGhpcy5lbWl0KFwicmVkcmF3XCIpfSkpLHRoaXMucmVuZGVyZXIub24oXCJyZW5kZXJlZFwiLCgoKT0+e3RoaXMuZW1pdChcInJlZHJhd2NvbXBsZXRlXCIpfSkpKTt7bGV0IHQ7dGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5yZW5kZXJlci5vbihcImRyYWdcIiwoZT0+e3RoaXMub3B0aW9ucy5pbnRlcmFjdCYmKHRoaXMucmVuZGVyZXIucmVuZGVyUHJvZ3Jlc3MoZSksY2xlYXJUaW1lb3V0KHQpLHQ9c2V0VGltZW91dCgoKCk9Pnt0aGlzLnNlZWtUbyhlKX0pLHRoaXMuaXNQbGF5aW5nKCk/MDoyMDApLHRoaXMuZW1pdChcImludGVyYWN0aW9uXCIsZSp0aGlzLmdldER1cmF0aW9uKCkpLHRoaXMuZW1pdChcImRyYWdcIixlKSl9KSkpfX1pbml0UGx1Z2lucygpe3ZhciB0OyhudWxsPT09KHQ9dGhpcy5vcHRpb25zLnBsdWdpbnMpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lmxlbmd0aCkmJnRoaXMub3B0aW9ucy5wbHVnaW5zLmZvckVhY2goKHQ9Pnt0aGlzLnJlZ2lzdGVyUGx1Z2luKHQpfSkpfXVuc3Vic2NyaWJlUGxheWVyRXZlbnRzKCl7dGhpcy5tZWRpYVN1YnNjcmlwdGlvbnMuZm9yRWFjaCgodD0+dCgpKSksdGhpcy5tZWRpYVN1YnNjcmlwdGlvbnM9W119c2V0T3B0aW9ucyh0KXt0aGlzLm9wdGlvbnM9T2JqZWN0LmFzc2lnbih7fSx0aGlzLm9wdGlvbnMsdCksdGhpcy5yZW5kZXJlci5zZXRPcHRpb25zKHRoaXMub3B0aW9ucyksdC5hdWRpb1JhdGUmJnRoaXMuc2V0UGxheWJhY2tSYXRlKHQuYXVkaW9SYXRlKSxudWxsIT10Lm1lZGlhQ29udHJvbHMmJih0aGlzLmdldE1lZGlhRWxlbWVudCgpLmNvbnRyb2xzPXQubWVkaWFDb250cm9scyl9cmVnaXN0ZXJQbHVnaW4odCl7cmV0dXJuIHQuX2luaXQodGhpcyksdGhpcy5wbHVnaW5zLnB1c2godCksdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godC5vbmNlKFwiZGVzdHJveVwiLCgoKT0+e3RoaXMucGx1Z2lucz10aGlzLnBsdWdpbnMuZmlsdGVyKChlPT5lIT09dCkpfSkpKSx0fWdldFdyYXBwZXIoKXtyZXR1cm4gdGhpcy5yZW5kZXJlci5nZXRXcmFwcGVyKCl9Z2V0U2Nyb2xsKCl7cmV0dXJuIHRoaXMucmVuZGVyZXIuZ2V0U2Nyb2xsKCl9c2V0U2Nyb2xsVGltZSh0KXtjb25zdCBlPXQvdGhpcy5nZXREdXJhdGlvbigpO3RoaXMucmVuZGVyZXIuc2V0U2Nyb2xsUGVyY2VudGFnZShlKX1nZXRBY3RpdmVQbHVnaW5zKCl7cmV0dXJuIHRoaXMucGx1Z2luc31sb2FkQXVkaW8oZSxzLG4scil7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtpZih0aGlzLmVtaXQoXCJsb2FkXCIsZSksIXRoaXMub3B0aW9ucy5tZWRpYSYmdGhpcy5pc1BsYXlpbmcoKSYmdGhpcy5wYXVzZSgpLHRoaXMuZGVjb2RlZERhdGE9bnVsbCwhcyYmIW4pe2NvbnN0IHQ9dD0+dGhpcy5lbWl0KFwibG9hZGluZ1wiLHQpO3M9eWllbGQgby5mZXRjaEJsb2IoZSx0LHRoaXMub3B0aW9ucy5mZXRjaFBhcmFtcyl9dGhpcy5zZXRTcmMoZSxzKTtjb25zdCB0PXJ8fHRoaXMuZ2V0RHVyYXRpb24oKXx8KHlpZWxkIG5ldyBQcm9taXNlKCh0PT57dGhpcy5vbmNlTWVkaWFFdmVudChcImxvYWRlZG1ldGFkYXRhXCIsKCgpPT50KHRoaXMuZ2V0RHVyYXRpb24oKSkpKX0pKSk7aWYobil0aGlzLmRlY29kZWREYXRhPWkuY3JlYXRlQnVmZmVyKG4sdHx8MCk7ZWxzZSBpZihzKXtjb25zdCB0PXlpZWxkIHMuYXJyYXlCdWZmZXIoKTt0aGlzLmRlY29kZWREYXRhPXlpZWxkIGkuZGVjb2RlKHQsdGhpcy5vcHRpb25zLnNhbXBsZVJhdGUpfXRoaXMuZGVjb2RlZERhdGEmJih0aGlzLmVtaXQoXCJkZWNvZGVcIix0aGlzLmdldER1cmF0aW9uKCkpLHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuZGVjb2RlZERhdGEpKSx0aGlzLmVtaXQoXCJyZWFkeVwiLHRoaXMuZ2V0RHVyYXRpb24oKSl9KSl9bG9hZChlLGkscyl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXt5aWVsZCB0aGlzLmxvYWRBdWRpbyhlLHZvaWQgMCxpLHMpfSkpfWxvYWRCbG9iKGUsaSxzKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3lpZWxkIHRoaXMubG9hZEF1ZGlvKFwiYmxvYlwiLGUsaSxzKX0pKX16b29tKHQpe2lmKCF0aGlzLmRlY29kZWREYXRhKXRocm93IG5ldyBFcnJvcihcIk5vIGF1ZGlvIGxvYWRlZFwiKTt0aGlzLnJlbmRlcmVyLnpvb20odCksdGhpcy5lbWl0KFwiem9vbVwiLHQpfWdldERlY29kZWREYXRhKCl7cmV0dXJuIHRoaXMuZGVjb2RlZERhdGF9ZXhwb3J0UGVha3Moe2NoYW5uZWxzOnQ9MixtYXhMZW5ndGg6ZT04ZTMscHJlY2lzaW9uOmk9MWU0fT17fSl7aWYoIXRoaXMuZGVjb2RlZERhdGEpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGF1ZGlvIGhhcyBub3QgYmVlbiBkZWNvZGVkIHlldFwiKTtjb25zdCBzPU1hdGgubWluKHQsdGhpcy5kZWNvZGVkRGF0YS5udW1iZXJPZkNoYW5uZWxzKSxuPVtdO2ZvcihsZXQgdD0wO3Q8czt0Kyspe2NvbnN0IHM9dGhpcy5kZWNvZGVkRGF0YS5nZXRDaGFubmVsRGF0YSh0KSxyPVtdLG89TWF0aC5yb3VuZChzLmxlbmd0aC9lKTtmb3IobGV0IHQ9MDt0PGU7dCsrKXtjb25zdCBlPXMuc2xpY2UodCpvLCh0KzEpKm8pO2xldCBuPTA7Zm9yKGxldCB0PTA7dDxlLmxlbmd0aDt0Kyspe2NvbnN0IGk9ZVt0XTtNYXRoLmFicyhpKT5NYXRoLmFicyhuKSYmKG49aSl9ci5wdXNoKE1hdGgucm91bmQobippKS9pKX1uLnB1c2gocil9cmV0dXJuIG59Z2V0RHVyYXRpb24oKXtsZXQgdD1zdXBlci5nZXREdXJhdGlvbigpfHwwO3JldHVybiAwIT09dCYmdCE9PTEvMHx8IXRoaXMuZGVjb2RlZERhdGF8fCh0PXRoaXMuZGVjb2RlZERhdGEuZHVyYXRpb24pLHR9dG9nZ2xlSW50ZXJhY3Rpb24odCl7dGhpcy5vcHRpb25zLmludGVyYWN0PXR9c2V0VGltZSh0KXtzdXBlci5zZXRUaW1lKHQpLHRoaXMudXBkYXRlUHJvZ3Jlc3ModCl9c2Vla1RvKHQpe2NvbnN0IGU9dGhpcy5nZXREdXJhdGlvbigpKnQ7dGhpcy5zZXRUaW1lKGUpfXBsYXlQYXVzZSgpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7cmV0dXJuIHRoaXMuaXNQbGF5aW5nKCk/dGhpcy5wYXVzZSgpOnRoaXMucGxheSgpfSkpfXN0b3AoKXt0aGlzLnBhdXNlKCksdGhpcy5zZXRUaW1lKDApfXNraXAodCl7dGhpcy5zZXRUaW1lKHRoaXMuZ2V0Q3VycmVudFRpbWUoKSt0KX1lbXB0eSgpe3RoaXMubG9hZChcIlwiLFtbMF1dLC4wMDEpfXNldE1lZGlhRWxlbWVudCh0KXt0aGlzLnVuc3Vic2NyaWJlUGxheWVyRXZlbnRzKCksc3VwZXIuc2V0TWVkaWFFbGVtZW50KHQpLHRoaXMuaW5pdFBsYXllckV2ZW50cygpfWV4cG9ydEltYWdlKGU9XCJpbWFnZS9wbmdcIixpPTEscz1cImRhdGFVUkxcIil7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtyZXR1cm4gdGhpcy5yZW5kZXJlci5leHBvcnRJbWFnZShlLGkscyl9KSl9ZGVzdHJveSgpe3RoaXMuZW1pdChcImRlc3Ryb3lcIiksdGhpcy5wbHVnaW5zLmZvckVhY2goKHQ9PnQuZGVzdHJveSgpKSksdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHQ9PnQoKSkpLHRoaXMudW5zdWJzY3JpYmVQbGF5ZXJFdmVudHMoKSx0aGlzLnRpbWVyLmRlc3Ryb3koKSx0aGlzLnJlbmRlcmVyLmRlc3Ryb3koKSxzdXBlci5kZXN0cm95KCl9fXUuQmFzZVBsdWdpbj1jbGFzcyBleHRlbmRzIGV7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLnN1YnNjcmlwdGlvbnM9W10sdGhpcy5vcHRpb25zPXR9b25Jbml0KCl7fV9pbml0KHQpe3RoaXMud2F2ZXN1cmZlcj10LHRoaXMub25Jbml0KCl9ZGVzdHJveSgpe3RoaXMuZW1pdChcImRlc3Ryb3lcIiksdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHQ9PnQoKSkpfX0sdS5kb209cjtleHBvcnR7dSBhcyBkZWZhdWx0fTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFdhdmVTdXJmZXIgZnJvbSAnd2F2ZXN1cmZlci5qcyc7XG5cbmNvbnN0IHdhdmVzdXJmZXIgPSBXYXZlU3VyZmVyLmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgd2F2ZUNvbG9yOiAncmdiKDIwMCwgMCwgMjAwKScsXG4gIHByb2dyZXNzQ29sb3I6ICdyZ2IoMTAwLCAwLCAxMDApJyxcbiAgdXJsOiAnLi4vc3JjL2F1ZGlvLzA5X0RhZFNpbmdzS3Jpc3RvZmZlcnNvbi5tcDMnLFxufSk7XG5cbndhdmVzdXJmZXIub24oJ2NsaWNrJywgKCkgPT4ge1xuICB3YXZlc3VyZmVyLnBsYXkoKTtcbn0pO1xuXG4vLyBkb2N1bWVudC5hcHBlbmRDaGlsZCh3YXZlc3VyZmVyKTtcblxuLy8gY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXVkaW8nKTtcbi8vIGNvbnN0IHBsYXlQYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LXBhdXNlLWJ1dHRvbicpO1xuLy8gY29uc3Qgdm9sdW1lQ29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUtY29udHJvbCcpO1xuLy8gY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtYmFyJyk7XG4vLyBjb25zdCBjdXJyZW50VGltZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC10aW1lJyk7XG4vLyBjb25zdCB0b3RhbFRpbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLXRpbWUnKTtcblxuLy8gbGV0IGlzUGxheWluZyA9IGZhbHNlO1xuXG4vLyBwbGF5UGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgIGlmIChpc1BsYXlpbmcpIHtcbi8vICAgICBhdWRpby5wYXVzZSgpO1xuLy8gICAgIHBsYXlQYXVzZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdQbGF5Jztcbi8vICAgfSBlbHNlIHtcbi8vICAgICBhdWRpby5wbGF5KCk7XG4vLyAgICAgcGxheVBhdXNlQnV0dG9uLnRleHRDb250ZW50ID0gJ1BhdXNlJztcbi8vICAgfVxuLy8gICBpc1BsYXlpbmcgPSAhaXNQbGF5aW5nO1xuLy8gfSk7XG5cbi8vIHZvbHVtZUNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4vLyAgIGF1ZGlvLnZvbHVtZSA9IHZvbHVtZUNvbnRyb2wudmFsdWU7XG4vLyB9KTtcblxuLy8gYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsICgpID0+IHtcbi8vICAgY29uc3QgeyBjdXJyZW50VGltZSB9ID0gYXVkaW87XG4vLyAgIGNvbnN0IHsgZHVyYXRpb24gfSA9IGF1ZGlvO1xuXG4vLyAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gTWF0aC5mbG9vcihjdXJyZW50VGltZSAvIDYwKTtcbi8vICAgY29uc3QgY3VycmVudFNlY29uZHMgPSBNYXRoLmZsb29yKGN1cnJlbnRUaW1lICUgNjApO1xuLy8gICBjb25zdCB0b3RhbE1pbnV0ZXMgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gNjApO1xuLy8gICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKGR1cmF0aW9uICUgNjApO1xuXG4vLyAgIGN1cnJlbnRUaW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRNaW51dGVzfToke1xuLy8gICAgIGN1cnJlbnRTZWNvbmRzIDwgMTAgPyAnMCcgOiAnJ1xuLy8gICB9JHtjdXJyZW50U2Vjb25kc31gO1xuLy8gICB0b3RhbFRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dG90YWxNaW51dGVzfToke1xuLy8gICAgIHRvdGFsU2Vjb25kcyA8IDEwID8gJzAnIDogJydcbi8vICAgfSR7dG90YWxTZWNvbmRzfWA7XG5cbi8vICAgY29uc3QgcHJvZ3Jlc3MgPSAoY3VycmVudFRpbWUgLyBkdXJhdGlvbikgKiAxMDA7XG4vLyAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3N9JWA7XG4vLyB9KTtcblxuLy8gY29uc29sZS5sb2coJ2hleSBlYXJ0aCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9