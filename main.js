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
  WaveSurferOptions: {
    autoplay: false,
  },
});
// const wavesurfer = WaveSurfer.create({
//   container: "document.body",
//   waveColor: "violet",
//   progressColor: "purple",
// });
// wavesurfer.load("./audio/09_DadSingsKristofferson.mp3");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tCOztBQUV2QyxtQkFBbUIscURBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsYUFBYSxjQUFjO0FBQzNCLGFBQWEsV0FBVzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQSxNQUFNLEVBQUUsZUFBZTtBQUN2Qix1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBLE1BQU0sRUFBRSxhQUFhOztBQUVyQjtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDLElBQUk7O0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvd2F2ZXN1cmZlci5qcy9kaXN0L3dhdmVzdXJmZXIuZXNtLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uYXVkaW8tcGxheWVyIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4uY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnByb2dyZXNzIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbn1cblxuI3RpbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4jY3VycmVudC10aW1lLCAjdG90YWwtdGltZSB7XG4gICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtLQUM3QiwyQkFBMkI7QUFDaEM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYXVkaW8tcGxheWVyIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnByb2dyZXNzIHtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXG59XFxuXFxuI3RpbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbiNjdXJyZW50LXRpbWUsICN0b3RhbC10aW1lIHtcXG4gICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuZnVuY3Rpb24gdCh0LGUsaSxzKXtyZXR1cm4gbmV3KGl8fChpPVByb21pc2UpKSgoZnVuY3Rpb24obixyKXtmdW5jdGlvbiBvKHQpe3RyeXtoKHMubmV4dCh0KSl9Y2F0Y2godCl7cih0KX19ZnVuY3Rpb24gYSh0KXt0cnl7aChzLnRocm93KHQpKX1jYXRjaCh0KXtyKHQpfX1mdW5jdGlvbiBoKHQpe3ZhciBlO3QuZG9uZT9uKHQudmFsdWUpOihlPXQudmFsdWUsZSBpbnN0YW5jZW9mIGk/ZTpuZXcgaSgoZnVuY3Rpb24odCl7dChlKX0pKSkudGhlbihvLGEpfWgoKHM9cy5hcHBseSh0LGV8fFtdKSkubmV4dCgpKX0pKX1jbGFzcyBle2NvbnN0cnVjdG9yKCl7dGhpcy5saXN0ZW5lcnM9e319b24odCxlLGkpe2lmKHRoaXMubGlzdGVuZXJzW3RdfHwodGhpcy5saXN0ZW5lcnNbdF09bmV3IFNldCksdGhpcy5saXN0ZW5lcnNbdF0uYWRkKGUpLG51bGw9PWk/dm9pZCAwOmkub25jZSl7Y29uc3QgaT0oKT0+e3RoaXMudW4odCxpKSx0aGlzLnVuKHQsZSl9O3JldHVybiB0aGlzLm9uKHQsaSksaX1yZXR1cm4oKT0+dGhpcy51bih0LGUpfXVuKHQsZSl7dmFyIGk7bnVsbD09PShpPXRoaXMubGlzdGVuZXJzW3RdKXx8dm9pZCAwPT09aXx8aS5kZWxldGUoZSl9b25jZSh0LGUpe3JldHVybiB0aGlzLm9uKHQsZSx7b25jZTohMH0pfXVuQWxsKCl7dGhpcy5saXN0ZW5lcnM9e319ZW1pdCh0LC4uLmUpe3RoaXMubGlzdGVuZXJzW3RdJiZ0aGlzLmxpc3RlbmVyc1t0XS5mb3JFYWNoKCh0PT50KC4uLmUpKSl9fWNvbnN0IGk9e2RlY29kZTpmdW5jdGlvbihlLGkpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7Y29uc3QgdD1uZXcgQXVkaW9Db250ZXh0KHtzYW1wbGVSYXRlOml9KTtyZXR1cm4gdC5kZWNvZGVBdWRpb0RhdGEoZSkuZmluYWxseSgoKCk9PnQuY2xvc2UoKSkpfSkpfSxjcmVhdGVCdWZmZXI6ZnVuY3Rpb24odCxlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdFswXSYmKHQ9W3RdKSxmdW5jdGlvbih0KXtjb25zdCBlPXRbMF07aWYoZS5zb21lKCh0PT50PjF8fHQ8LTEpKSl7Y29uc3QgaT1lLmxlbmd0aDtsZXQgcz0wO2ZvcihsZXQgdD0wO3Q8aTt0Kyspe2NvbnN0IGk9TWF0aC5hYnMoZVt0XSk7aT5zJiYocz1pKX1mb3IoY29uc3QgZSBvZiB0KWZvcihsZXQgdD0wO3Q8aTt0KyspZVt0XS89c319KHQpLHtkdXJhdGlvbjplLGxlbmd0aDp0WzBdLmxlbmd0aCxzYW1wbGVSYXRlOnRbMF0ubGVuZ3RoL2UsbnVtYmVyT2ZDaGFubmVsczp0Lmxlbmd0aCxnZXRDaGFubmVsRGF0YTplPT5udWxsPT10P3ZvaWQgMDp0W2VdLGNvcHlGcm9tQ2hhbm5lbDpBdWRpb0J1ZmZlci5wcm90b3R5cGUuY29weUZyb21DaGFubmVsLGNvcHlUb0NoYW5uZWw6QXVkaW9CdWZmZXIucHJvdG90eXBlLmNvcHlUb0NoYW5uZWx9fX07ZnVuY3Rpb24gcyh0LGUpe2NvbnN0IGk9ZS54bWxucz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZS54bWxucyx0KTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpO2Zvcihjb25zdFt0LG5db2YgT2JqZWN0LmVudHJpZXMoZSkpaWYoXCJjaGlsZHJlblwiPT09dClmb3IoY29uc3RbdCxuXW9mIE9iamVjdC5lbnRyaWVzKGUpKVwic3RyaW5nXCI9PXR5cGVvZiBuP2kuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobikpOmkuYXBwZW5kQ2hpbGQocyh0LG4pKTtlbHNlXCJzdHlsZVwiPT09dD9PYmplY3QuYXNzaWduKGkuc3R5bGUsbik6XCJ0ZXh0Q29udGVudFwiPT09dD9pLnRleHRDb250ZW50PW46aS5zZXRBdHRyaWJ1dGUodCxuLnRvU3RyaW5nKCkpO3JldHVybiBpfWZ1bmN0aW9uIG4odCxlLGkpe2NvbnN0IG49cyh0LGV8fHt9KTtyZXR1cm4gbnVsbD09aXx8aS5hcHBlbmRDaGlsZChuKSxufXZhciByPU9iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLGNyZWF0ZUVsZW1lbnQ6bixkZWZhdWx0Om59KTtjb25zdCBvPXtmZXRjaEJsb2I6ZnVuY3Rpb24oZSxpLHMpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7Y29uc3Qgbj15aWVsZCBmZXRjaChlLHMpO2lmKG4uc3RhdHVzPj00MDApdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggJHtlfTogJHtuLnN0YXR1c30gKCR7bi5zdGF0dXNUZXh0fSlgKTtyZXR1cm4gZnVuY3Rpb24oZSxpKXt0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7aWYoIWUuYm9keXx8IWUuaGVhZGVycylyZXR1cm47Y29uc3Qgcz1lLmJvZHkuZ2V0UmVhZGVyKCksbj1OdW1iZXIoZS5oZWFkZXJzLmdldChcIkNvbnRlbnQtTGVuZ3RoXCIpKXx8MDtsZXQgcj0wO2NvbnN0IG89ZT0+dCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3IrPShudWxsPT1lP3ZvaWQgMDplLmxlbmd0aCl8fDA7Y29uc3QgdD1NYXRoLnJvdW5kKHIvbioxMDApO2kodCl9KSksYT0oKT0+dCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2xldCB0O3RyeXt0PXlpZWxkIHMucmVhZCgpfWNhdGNoKHQpe3JldHVybn10LmRvbmV8fChvKHQudmFsdWUpLHlpZWxkIGEoKSl9KSk7YSgpfSkpfShuLmNsb25lKCksaSksbi5ibG9iKCl9KSl9fTtjbGFzcyBhIGV4dGVuZHMgZXtjb25zdHJ1Y3Rvcih0KXtzdXBlcigpLHRoaXMuaXNFeHRlcm5hbE1lZGlhPSExLHQubWVkaWE/KHRoaXMubWVkaWE9dC5tZWRpYSx0aGlzLmlzRXh0ZXJuYWxNZWRpYT0hMCk6dGhpcy5tZWRpYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIiksdC5tZWRpYUNvbnRyb2xzJiYodGhpcy5tZWRpYS5jb250cm9scz0hMCksdC5hdXRvcGxheSYmKHRoaXMubWVkaWEuYXV0b3BsYXk9ITApLG51bGwhPXQucGxheWJhY2tSYXRlJiZ0aGlzLm9uY2VNZWRpYUV2ZW50KFwiY2FucGxheVwiLCgoKT0+e251bGwhPXQucGxheWJhY2tSYXRlJiYodGhpcy5tZWRpYS5wbGF5YmFja1JhdGU9dC5wbGF5YmFja1JhdGUpfSkpfW9uTWVkaWFFdmVudCh0LGUsaSl7cmV0dXJuIHRoaXMubWVkaWEuYWRkRXZlbnRMaXN0ZW5lcih0LGUsaSksKCk9PnRoaXMubWVkaWEucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LGUpfW9uY2VNZWRpYUV2ZW50KHQsZSl7cmV0dXJuIHRoaXMub25NZWRpYUV2ZW50KHQsZSx7b25jZTohMH0pfWdldFNyYygpe3JldHVybiB0aGlzLm1lZGlhLmN1cnJlbnRTcmN8fHRoaXMubWVkaWEuc3JjfHxcIlwifXJldm9rZVNyYygpe2NvbnN0IHQ9dGhpcy5nZXRTcmMoKTt0LnN0YXJ0c1dpdGgoXCJibG9iOlwiKSYmVVJMLnJldm9rZU9iamVjdFVSTCh0KX1jYW5QbGF5VHlwZSh0KXtyZXR1cm5cIlwiIT09dGhpcy5tZWRpYS5jYW5QbGF5VHlwZSh0KX1zZXRTcmModCxlKXtpZih0aGlzLmdldFNyYygpPT09dClyZXR1cm47dGhpcy5yZXZva2VTcmMoKTtjb25zdCBpPWUgaW5zdGFuY2VvZiBCbG9iJiZ0aGlzLmNhblBsYXlUeXBlKGUudHlwZSk/VVJMLmNyZWF0ZU9iamVjdFVSTChlKTp0O3RoaXMubWVkaWEuc3JjPWl9ZGVzdHJveSgpe3RoaXMubWVkaWEucGF1c2UoKSx0aGlzLmlzRXh0ZXJuYWxNZWRpYXx8KHRoaXMubWVkaWEucmVtb3ZlKCksdGhpcy5yZXZva2VTcmMoKSx0aGlzLm1lZGlhLnNyYz1cIlwiLHRoaXMubWVkaWEubG9hZCgpKX1zZXRNZWRpYUVsZW1lbnQodCl7dGhpcy5tZWRpYT10fXBsYXkoKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2lmKHRoaXMubWVkaWEuc3JjKXJldHVybiB0aGlzLm1lZGlhLnBsYXkoKX0pKX1wYXVzZSgpe3RoaXMubWVkaWEucGF1c2UoKX1pc1BsYXlpbmcoKXtyZXR1cm4hdGhpcy5tZWRpYS5wYXVzZWQmJiF0aGlzLm1lZGlhLmVuZGVkfXNldFRpbWUodCl7dGhpcy5tZWRpYS5jdXJyZW50VGltZT10fWdldER1cmF0aW9uKCl7cmV0dXJuIHRoaXMubWVkaWEuZHVyYXRpb259Z2V0Q3VycmVudFRpbWUoKXtyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50VGltZX1nZXRWb2x1bWUoKXtyZXR1cm4gdGhpcy5tZWRpYS52b2x1bWV9c2V0Vm9sdW1lKHQpe3RoaXMubWVkaWEudm9sdW1lPXR9Z2V0TXV0ZWQoKXtyZXR1cm4gdGhpcy5tZWRpYS5tdXRlZH1zZXRNdXRlZCh0KXt0aGlzLm1lZGlhLm11dGVkPXR9Z2V0UGxheWJhY2tSYXRlKCl7cmV0dXJuIHRoaXMubWVkaWEucGxheWJhY2tSYXRlfWlzU2Vla2luZygpe3JldHVybiB0aGlzLm1lZGlhLnNlZWtpbmd9c2V0UGxheWJhY2tSYXRlKHQsZSl7bnVsbCE9ZSYmKHRoaXMubWVkaWEucHJlc2VydmVzUGl0Y2g9ZSksdGhpcy5tZWRpYS5wbGF5YmFja1JhdGU9dH1nZXRNZWRpYUVsZW1lbnQoKXtyZXR1cm4gdGhpcy5tZWRpYX1zZXRTaW5rSWQodCl7cmV0dXJuIHRoaXMubWVkaWEuc2V0U2lua0lkKHQpfX1jbGFzcyBoIGV4dGVuZHMgZXtjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKCksdGhpcy50aW1lb3V0cz1bXSx0aGlzLmlzU2Nyb2xsYWJsZT0hMSx0aGlzLmF1ZGlvRGF0YT1udWxsLHRoaXMucmVzaXplT2JzZXJ2ZXI9bnVsbCx0aGlzLmxhc3RDb250YWluZXJXaWR0aD0wLHRoaXMuaXNEcmFnZ2luZz0hMSx0aGlzLm9wdGlvbnM9dDtjb25zdCBpPXRoaXMucGFyZW50RnJvbU9wdGlvbnNDb250YWluZXIodC5jb250YWluZXIpO3RoaXMucGFyZW50PWk7Y29uc3RbcyxuXT10aGlzLmluaXRIdG1sKCk7aS5hcHBlbmRDaGlsZChzKSx0aGlzLmNvbnRhaW5lcj1zLHRoaXMuc2Nyb2xsQ29udGFpbmVyPW4ucXVlcnlTZWxlY3RvcihcIi5zY3JvbGxcIiksdGhpcy53cmFwcGVyPW4ucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLHRoaXMuY2FudmFzV3JhcHBlcj1uLnF1ZXJ5U2VsZWN0b3IoXCIuY2FudmFzZXNcIiksdGhpcy5wcm9ncmVzc1dyYXBwZXI9bi5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLHRoaXMuY3Vyc29yPW4ucXVlcnlTZWxlY3RvcihcIi5jdXJzb3JcIiksZSYmbi5hcHBlbmRDaGlsZChlKSx0aGlzLmluaXRFdmVudHMoKX1wYXJlbnRGcm9tT3B0aW9uc0NvbnRhaW5lcih0KXtsZXQgZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdD9lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCk6dCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50JiYoZT10KSwhZSl0aHJvdyBuZXcgRXJyb3IoXCJDb250YWluZXIgbm90IGZvdW5kXCIpO3JldHVybiBlfWluaXRFdmVudHMoKXtjb25zdCB0PXQ9Pntjb25zdCBlPXRoaXMud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxpPXQuY2xpZW50WC1lLmxlZnQscz10LmNsaWVudFgtZS5sZWZ0O3JldHVybltpL2Uud2lkdGgscy9lLmhlaWdodF19O3RoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZT0+e2NvbnN0W2ksc109dChlKTt0aGlzLmVtaXQoXCJjbGlja1wiLGkscyl9KSksdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLChlPT57Y29uc3RbaSxzXT10KGUpO3RoaXMuZW1pdChcImRibGNsaWNrXCIsaSxzKX0pKSx0aGlzLm9wdGlvbnMuZHJhZ1RvU2VlayYmdGhpcy5pbml0RHJhZygpLHRoaXMuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoKCk9Pntjb25zdHtzY3JvbGxMZWZ0OnQsc2Nyb2xsV2lkdGg6ZSxjbGllbnRXaWR0aDppfT10aGlzLnNjcm9sbENvbnRhaW5lcixzPXQvZSxuPSh0K2kpL2U7dGhpcy5lbWl0KFwic2Nyb2xsXCIscyxuKX0pKTtjb25zdCBlPXRoaXMuY3JlYXRlRGVsYXkoMTAwKTt0aGlzLnJlc2l6ZU9ic2VydmVyPW5ldyBSZXNpemVPYnNlcnZlcigoKCk9PntlKCkudGhlbigoKCk9PnRoaXMub25Db250YWluZXJSZXNpemUoKSkpLmNhdGNoKCgoKT0+e30pKX0pKSx0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5zY3JvbGxDb250YWluZXIpfW9uQ29udGFpbmVyUmVzaXplKCl7Y29uc3QgdD10aGlzLnBhcmVudC5jbGllbnRXaWR0aDt0PT09dGhpcy5sYXN0Q29udGFpbmVyV2lkdGgmJlwiYXV0b1wiIT09dGhpcy5vcHRpb25zLmhlaWdodHx8KHRoaXMubGFzdENvbnRhaW5lcldpZHRoPXQsdGhpcy5yZVJlbmRlcigpKX1pbml0RHJhZygpeyFmdW5jdGlvbih0LGUsaSxzLG49MyxyPTApe2lmKCF0KXJldHVybigpPT57fTtsZXQgbz0oKT0+e307Y29uc3QgYT1hPT57aWYoYS5idXR0b24hPT1yKXJldHVybjthLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKTtsZXQgaD1hLmNsaWVudFgsbD1hLmNsaWVudFksZD0hMTtjb25zdCBjPXM9PntzLnByZXZlbnREZWZhdWx0KCkscy5zdG9wUHJvcGFnYXRpb24oKTtjb25zdCByPXMuY2xpZW50WCxvPXMuY2xpZW50WSxhPXItaCxjPW8tbDtpZihkfHxNYXRoLmFicyhhKT5ufHxNYXRoLmFicyhjKT5uKXtjb25zdCBzPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkse2xlZnQ6bix0b3A6dX09cztkfHwobnVsbD09aXx8aShoLW4sbC11KSxkPSEwKSxlKGEsYyxyLW4sby11KSxoPXIsbD1vfX0sdT0oKT0+e2QmJihudWxsPT1zfHxzKCkpLG8oKX0scD10PT57dC5yZWxhdGVkVGFyZ2V0JiZ0LnJlbGF0ZWRUYXJnZXQhPT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnR8fHUoKX0sbT10PT57ZCYmKHQuc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpKX0sZj10PT57ZCYmdC5wcmV2ZW50RGVmYXVsdCgpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixjKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsdSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIixwKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLHApLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixmLHtwYXNzaXZlOiExfSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbSx7Y2FwdHVyZTohMH0pLG89KCk9Pntkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixjKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsdSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIixwKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLHApLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixmKSxzZXRUaW1lb3V0KCgoKT0+e2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG0se2NhcHR1cmU6ITB9KX0pLDEwKX19O3QuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsYSl9KHRoaXMud3JhcHBlciwoKHQsZSxpKT0+e3RoaXMuZW1pdChcImRyYWdcIixNYXRoLm1heCgwLE1hdGgubWluKDEsaS90aGlzLndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpKSl9KSwoKCk9PnRoaXMuaXNEcmFnZ2luZz0hMCksKCgpPT50aGlzLmlzRHJhZ2dpbmc9ITEpKX1nZXRIZWlnaHQodCl7cmV0dXJuIG51bGw9PXQ/MTI4OmlzTmFOKE51bWJlcih0KSk/XCJhdXRvXCI9PT10JiZ0aGlzLnBhcmVudC5jbGllbnRIZWlnaHR8fDEyODpOdW1iZXIodCl9aW5pdEh0bWwoKXtjb25zdCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT10LmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pO3JldHVybiBlLmlubmVySFRNTD1gXFxuICAgICAgPHN0eWxlPlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgbWluLXdpZHRoOiAxcHg7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCBhdWRpbyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5zY3JvbGwge1xcbiAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAubm9TY3JvbGxiYXIge1xcbiAgICAgICAgICBzY3JvbGxiYXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAubm9TY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLndyYXBwZXIge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLmNhbnZhc2VzIHtcXG4gICAgICAgICAgbWluLWhlaWdodDogJHt0aGlzLmdldEhlaWdodCh0aGlzLm9wdGlvbnMuaGVpZ2h0KX1weDtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5jYW52YXNlcyA+IGRpdiB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IGNhbnZhcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAucHJvZ3Jlc3Mge1xcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAucHJvZ3Jlc3MgPiBkaXYge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAuY3Vyc29yIHtcXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgei1pbmRleDogNTtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIH1cXG4gICAgICA8L3N0eWxlPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGxcIiBwYXJ0PVwic2Nyb2xsXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiIHBhcnQ9XCJ3cmFwcGVyXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYW52YXNlc1wiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBwYXJ0PVwicHJvZ3Jlc3NcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIHBhcnQ9XCJjdXJzb3JcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICBgLFt0LGVdfXNldE9wdGlvbnModCl7aWYodGhpcy5vcHRpb25zLmNvbnRhaW5lciE9PXQuY29udGFpbmVyKXtjb25zdCBlPXRoaXMucGFyZW50RnJvbU9wdGlvbnNDb250YWluZXIodC5jb250YWluZXIpO2UuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpLHRoaXMucGFyZW50PWV9dC5kcmFnVG9TZWVrJiYhdGhpcy5vcHRpb25zLmRyYWdUb1NlZWsmJnRoaXMuaW5pdERyYWcoKSx0aGlzLm9wdGlvbnM9dCx0aGlzLnJlUmVuZGVyKCl9Z2V0V3JhcHBlcigpe3JldHVybiB0aGlzLndyYXBwZXJ9Z2V0U2Nyb2xsKCl7cmV0dXJuIHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnR9c2V0U2Nyb2xsKHQpe3RoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQ9dH1zZXRTY3JvbGxQZXJjZW50YWdlKHQpe2NvbnN0e3Njcm9sbFdpZHRoOmV9PXRoaXMuc2Nyb2xsQ29udGFpbmVyLGk9ZSp0O3RoaXMuc2V0U2Nyb2xsKGkpfWRlc3Ryb3koKXt2YXIgdDt0aGlzLmNvbnRhaW5lci5yZW1vdmUoKSxudWxsPT09KHQ9dGhpcy5yZXNpemVPYnNlcnZlcil8fHZvaWQgMD09PXR8fHQuZGlzY29ubmVjdCgpfWNyZWF0ZURlbGF5KHQ9MTApe2xldCBlLGk7Y29uc3Qgcz0oKT0+e2UmJmNsZWFyVGltZW91dChlKSxpJiZpKCl9O3JldHVybiB0aGlzLnRpbWVvdXRzLnB1c2gocyksKCk9Pm5ldyBQcm9taXNlKCgobixyKT0+e3MoKSxpPXIsZT1zZXRUaW1lb3V0KCgoKT0+e2U9dm9pZCAwLGk9dm9pZCAwLG4oKX0pLHQpfSkpfWNvbnZlcnRDb2xvclZhbHVlcyh0KXtpZighQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdHx8XCJcIjtpZih0Lmxlbmd0aDwyKXJldHVybiB0WzBdfHxcIlwiO2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSxpPWUuZ2V0Q29udGV4dChcIjJkXCIpLHM9ZS5oZWlnaHQqKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKSxuPWkuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLDAscykscj0xLyh0Lmxlbmd0aC0xKTtyZXR1cm4gdC5mb3JFYWNoKCgodCxlKT0+e2NvbnN0IGk9ZSpyO24uYWRkQ29sb3JTdG9wKGksdCl9KSksbn1yZW5kZXJCYXJXYXZlZm9ybSh0LGUsaSxzKXtjb25zdCBuPXRbMF0scj10WzFdfHx0WzBdLG89bi5sZW5ndGgse3dpZHRoOmEsaGVpZ2h0Omh9PWkuY2FudmFzLGw9aC8yLGQ9d2luZG93LmRldmljZVBpeGVsUmF0aW98fDEsYz1lLmJhcldpZHRoP2UuYmFyV2lkdGgqZDoxLHU9ZS5iYXJHYXA/ZS5iYXJHYXAqZDplLmJhcldpZHRoP2MvMjowLHA9ZS5iYXJSYWRpdXN8fDAsbT1hLyhjK3UpL28sZj1wJiZcInJvdW5kUmVjdFwiaW4gaT9cInJvdW5kUmVjdFwiOlwicmVjdFwiO2kuYmVnaW5QYXRoKCk7bGV0IGc9MCx2PTAsYj0wO2ZvcihsZXQgdD0wO3Q8PW87dCsrKXtjb25zdCBvPU1hdGgucm91bmQodCptKTtpZihvPmcpe2NvbnN0IHQ9TWF0aC5yb3VuZCh2Kmwqcyksbj10K01hdGgucm91bmQoYipsKnMpfHwxO2xldCByPWwtdDtcInRvcFwiPT09ZS5iYXJBbGlnbj9yPTA6XCJib3R0b21cIj09PWUuYmFyQWxpZ24mJihyPWgtbiksaVtmXShnKihjK3UpLHIsYyxuLHApLGc9byx2PTAsYj0wfWNvbnN0IGE9TWF0aC5hYnMoblt0XXx8MCksZD1NYXRoLmFicyhyW3RdfHwwKTthPnYmJih2PWEpLGQ+YiYmKGI9ZCl9aS5maWxsKCksaS5jbG9zZVBhdGgoKX1yZW5kZXJMaW5lV2F2ZWZvcm0odCxlLGkscyl7Y29uc3Qgbj1lPT57Y29uc3Qgbj10W2VdfHx0WzBdLHI9bi5sZW5ndGgse2hlaWdodDpvfT1pLmNhbnZhcyxhPW8vMixoPWkuY2FudmFzLndpZHRoL3I7aS5tb3ZlVG8oMCxhKTtsZXQgbD0wLGQ9MDtmb3IobGV0IHQ9MDt0PD1yO3QrKyl7Y29uc3Qgcj1NYXRoLnJvdW5kKHQqaCk7aWYocj5sKXtjb25zdCB0PWErKE1hdGgucm91bmQoZCphKnMpfHwxKSooMD09PWU/LTE6MSk7aS5saW5lVG8obCx0KSxsPXIsZD0wfWNvbnN0IG89TWF0aC5hYnMoblt0XXx8MCk7bz5kJiYoZD1vKX1pLmxpbmVUbyhsLGEpfTtpLmJlZ2luUGF0aCgpLG4oMCksbigxKSxpLmZpbGwoKSxpLmNsb3NlUGF0aCgpfXJlbmRlcldhdmVmb3JtKHQsZSxpKXtpZihpLmZpbGxTdHlsZT10aGlzLmNvbnZlcnRDb2xvclZhbHVlcyhlLndhdmVDb2xvciksZS5yZW5kZXJGdW5jdGlvbilyZXR1cm4gdm9pZCBlLnJlbmRlckZ1bmN0aW9uKHQsaSk7bGV0IHM9ZS5iYXJIZWlnaHR8fDE7aWYoZS5ub3JtYWxpemUpe2NvbnN0IGU9QXJyYXkuZnJvbSh0WzBdKS5yZWR1Y2UoKCh0LGUpPT5NYXRoLm1heCh0LE1hdGguYWJzKGUpKSksMCk7cz1lPzEvZToxfWUuYmFyV2lkdGh8fGUuYmFyR2FwfHxlLmJhckFsaWduP3RoaXMucmVuZGVyQmFyV2F2ZWZvcm0odCxlLGkscyk6dGhpcy5yZW5kZXJMaW5lV2F2ZWZvcm0odCxlLGkscyl9cmVuZGVyU2luZ2xlQ2FudmFzKHQsZSxpLHMsbixyLG8sYSl7Y29uc3QgaD13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksZD10WzBdLmxlbmd0aDtsLndpZHRoPU1hdGgucm91bmQoaSooci1uKS9kKSxsLmhlaWdodD1zKmgsbC5zdHlsZS53aWR0aD1gJHtNYXRoLmZsb29yKGwud2lkdGgvaCl9cHhgLGwuc3R5bGUuaGVpZ2h0PWAke3N9cHhgLGwuc3R5bGUubGVmdD1gJHtNYXRoLmZsb29yKG4qaS9oL2QpfXB4YCxvLmFwcGVuZENoaWxkKGwpO2NvbnN0IGM9bC5nZXRDb250ZXh0KFwiMmRcIik7aWYodGhpcy5yZW5kZXJXYXZlZm9ybSh0Lm1hcCgodD0+dC5zbGljZShuLHIpKSksZSxjKSxsLndpZHRoPjAmJmwuaGVpZ2h0PjApe2NvbnN0IHQ9bC5jbG9uZU5vZGUoKSxpPXQuZ2V0Q29udGV4dChcIjJkXCIpO2kuZHJhd0ltYWdlKGwsMCwwKSxpLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj1cInNvdXJjZS1pblwiLGkuZmlsbFN0eWxlPXRoaXMuY29udmVydENvbG9yVmFsdWVzKGUucHJvZ3Jlc3NDb2xvciksaS5maWxsUmVjdCgwLDAsbC53aWR0aCxsLmhlaWdodCksYS5hcHBlbmRDaGlsZCh0KX19cmVuZGVyQ2hhbm5lbChlLGkscyl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLmdldEhlaWdodChpLmhlaWdodCk7bi5zdHlsZS5oZWlnaHQ9YCR7cn1weGAsdGhpcy5jYW52YXNXcmFwcGVyLnN0eWxlLm1pbkhlaWdodD1gJHtyfXB4YCx0aGlzLmNhbnZhc1dyYXBwZXIuYXBwZW5kQ2hpbGQobik7Y29uc3Qgbz1uLmNsb25lTm9kZSgpO3RoaXMucHJvZ3Jlc3NXcmFwcGVyLmFwcGVuZENoaWxkKG8pO2NvbnN0IGE9ZVswXS5sZW5ndGgsbD0odCxoKT0+e3RoaXMucmVuZGVyU2luZ2xlQ2FudmFzKGUsaSxzLHIsTWF0aC5tYXgoMCx0KSxNYXRoLm1pbihoLGEpLG4sbyl9O2lmKCF0aGlzLmlzU2Nyb2xsYWJsZSlyZXR1cm4gdm9pZCBsKDAsYSk7Y29uc3R7c2Nyb2xsTGVmdDpkLHNjcm9sbFdpZHRoOmMsY2xpZW50V2lkdGg6dX09dGhpcy5zY3JvbGxDb250YWluZXIscD1hL2M7bGV0IG09TWF0aC5taW4oaC5NQVhfQ0FOVkFTX1dJRFRILHUpO2lmKGkuYmFyV2lkdGh8fGkuYmFyR2FwKXtjb25zdCB0PWkuYmFyV2lkdGh8fC41LGU9dCsoaS5iYXJHYXB8fHQvMik7bSVlIT0wJiYobT1NYXRoLmZsb29yKG0vZSkqZSl9Y29uc3QgZj1NYXRoLmZsb29yKE1hdGguYWJzKGQpKnApLGc9TWF0aC5mbG9vcihmK20qcCksdj1nLWY7djw9MHx8KGwoZixnKSx5aWVsZCBQcm9taXNlLmFsbChbKCgpPT50KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7aWYoMD09PWYpcmV0dXJuO2NvbnN0IHQ9dGhpcy5jcmVhdGVEZWxheSgpO2ZvcihsZXQgZT1mO2U+PTA7ZS09dil5aWVsZCB0KCksbChNYXRoLm1heCgwLGUtdiksZSl9KSkpKCksKCgpPT50KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7aWYoZz09PWEpcmV0dXJuO2NvbnN0IHQ9dGhpcy5jcmVhdGVEZWxheSgpO2ZvcihsZXQgZT1nO2U8YTtlKz12KXlpZWxkIHQoKSxsKGUsTWF0aC5taW4oYSxlK3YpKX0pKSkoKV0pKX0pKX1yZW5kZXIoZSl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXt0aGlzLnRpbWVvdXRzLmZvckVhY2goKHQ9PnQoKSkpLHRoaXMudGltZW91dHM9W10sdGhpcy5jYW52YXNXcmFwcGVyLmlubmVySFRNTD1cIlwiLHRoaXMucHJvZ3Jlc3NXcmFwcGVyLmlubmVySFRNTD1cIlwiLG51bGwhPXRoaXMub3B0aW9ucy53aWR0aCYmKHRoaXMuc2Nyb2xsQ29udGFpbmVyLnN0eWxlLndpZHRoPVwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMud2lkdGg/YCR7dGhpcy5vcHRpb25zLndpZHRofXB4YDp0aGlzLm9wdGlvbnMud2lkdGgpO2NvbnN0IHQ9d2luZG93LmRldmljZVBpeGVsUmF0aW98fDEsaT10aGlzLnNjcm9sbENvbnRhaW5lci5jbGllbnRXaWR0aCxzPU1hdGguY2VpbChlLmR1cmF0aW9uKih0aGlzLm9wdGlvbnMubWluUHhQZXJTZWN8fDApKTt0aGlzLmlzU2Nyb2xsYWJsZT1zPmk7Y29uc3Qgbj10aGlzLm9wdGlvbnMuZmlsbFBhcmVudCYmIXRoaXMuaXNTY3JvbGxhYmxlLHI9KG4/aTpzKSp0O3RoaXMud3JhcHBlci5zdHlsZS53aWR0aD1uP1wiMTAwJVwiOmAke3N9cHhgLHRoaXMuc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WD10aGlzLmlzU2Nyb2xsYWJsZT9cImF1dG9cIjpcImhpZGRlblwiLHRoaXMuc2Nyb2xsQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJub1Njcm9sbGJhclwiLCEhdGhpcy5vcHRpb25zLmhpZGVTY3JvbGxiYXIpLHRoaXMuY3Vyc29yLnN0eWxlLmJhY2tncm91bmRDb2xvcj1gJHt0aGlzLm9wdGlvbnMuY3Vyc29yQ29sb3J8fHRoaXMub3B0aW9ucy5wcm9ncmVzc0NvbG9yfWAsdGhpcy5jdXJzb3Iuc3R5bGUud2lkdGg9YCR7dGhpcy5vcHRpb25zLmN1cnNvcldpZHRofXB4YCx0aGlzLmF1ZGlvRGF0YT1lLHRoaXMuZW1pdChcInJlbmRlclwiKTt0cnl7aWYodGhpcy5vcHRpb25zLnNwbGl0Q2hhbm5lbHMpeWllbGQgUHJvbWlzZS5hbGwoQXJyYXkuZnJvbSh7bGVuZ3RoOmUubnVtYmVyT2ZDaGFubmVsc30pLm1hcCgoKHQsaSk9Pnt2YXIgcztjb25zdCBuPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0aGlzLm9wdGlvbnMpLG51bGw9PT0ocz10aGlzLm9wdGlvbnMuc3BsaXRDaGFubmVscyl8fHZvaWQgMD09PXM/dm9pZCAwOnNbaV0pO3JldHVybiB0aGlzLnJlbmRlckNoYW5uZWwoW2UuZ2V0Q2hhbm5lbERhdGEoaSldLG4scil9KSkpO2Vsc2V7Y29uc3QgdD1bZS5nZXRDaGFubmVsRGF0YSgwKV07ZS5udW1iZXJPZkNoYW5uZWxzPjEmJnQucHVzaChlLmdldENoYW5uZWxEYXRhKDEpKSx5aWVsZCB0aGlzLnJlbmRlckNoYW5uZWwodCx0aGlzLm9wdGlvbnMscil9fWNhdGNoKHQpe3JldHVybn10aGlzLmVtaXQoXCJyZW5kZXJlZFwiKX0pKX1yZVJlbmRlcigpe2lmKCF0aGlzLmF1ZGlvRGF0YSlyZXR1cm47Y29uc3R7c2Nyb2xsV2lkdGg6dH09dGhpcy5zY3JvbGxDb250YWluZXIse3JpZ2h0OmV9PXRoaXMucHJvZ3Jlc3NXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2lmKHRoaXMucmVuZGVyKHRoaXMuYXVkaW9EYXRhKSx0aGlzLmlzU2Nyb2xsYWJsZSYmdCE9PXRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFdpZHRoKXtjb25zdHtyaWdodDp0fT10aGlzLnByb2dyZXNzV3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtsZXQgaT10LWU7aSo9MixpPWk8MD9NYXRoLmZsb29yKGkpOk1hdGguY2VpbChpKSxpLz0yLHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQrPWl9fXpvb20odCl7dGhpcy5vcHRpb25zLm1pblB4UGVyU2VjPXQsdGhpcy5yZVJlbmRlcigpfXNjcm9sbEludG9WaWV3KHQsZT0hMSl7Y29uc3R7c2Nyb2xsTGVmdDppLHNjcm9sbFdpZHRoOnMsY2xpZW50V2lkdGg6bn09dGhpcy5zY3JvbGxDb250YWluZXIscj10KnMsbz1pLGE9aStuLGg9bi8yO2lmKHRoaXMuaXNEcmFnZ2luZyl7Y29uc3QgdD0zMDtyK3Q+YT90aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0Kz10OnItdDxvJiYodGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdC09dCl9ZWxzZXsocjxvfHxyPmEpJiYodGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdD1yLSh0aGlzLm9wdGlvbnMuYXV0b0NlbnRlcj9oOjApKTtjb25zdCB0PXItaS1oO2UmJnRoaXMub3B0aW9ucy5hdXRvQ2VudGVyJiZ0PjAmJih0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0Kz1NYXRoLm1pbih0LDEwKSl9e2NvbnN0IHQ9dGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCxlPXQvcyxpPSh0K24pL3M7dGhpcy5lbWl0KFwic2Nyb2xsXCIsZSxpKX19cmVuZGVyUHJvZ3Jlc3ModCxlKXtpZihpc05hTih0KSlyZXR1cm47Y29uc3QgaT0xMDAqdDt0aGlzLmNhbnZhc1dyYXBwZXIuc3R5bGUuY2xpcFBhdGg9YHBvbHlnb24oJHtpfSUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsICR7aX0lIDEwMCUpYCx0aGlzLnByb2dyZXNzV3JhcHBlci5zdHlsZS53aWR0aD1gJHtpfSVgLHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQ9YCR7aX0lYCx0aGlzLmN1cnNvci5zdHlsZS50cmFuc2Zvcm09YHRyYW5zbGF0ZVgoLSR7MTAwPT09TWF0aC5yb3VuZChpKT90aGlzLm9wdGlvbnMuY3Vyc29yV2lkdGg6MH1weClgLHRoaXMuaXNTY3JvbGxhYmxlJiZ0aGlzLm9wdGlvbnMuYXV0b1Njcm9sbCYmdGhpcy5zY3JvbGxJbnRvVmlldyh0LGUpfWV4cG9ydEltYWdlKGUsaSxzKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2NvbnN0IHQ9dGhpcy5jYW52YXNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYW52YXNcIik7aWYoIXQubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIk5vIHdhdmVmb3JtIGRhdGFcIik7aWYoXCJkYXRhVVJMXCI9PT1zKXtjb25zdCBzPUFycmF5LmZyb20odCkubWFwKCh0PT50LnRvRGF0YVVSTChlLGkpKSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzKX1yZXR1cm4gUHJvbWlzZS5hbGwoQXJyYXkuZnJvbSh0KS5tYXAoKHQ9Pm5ldyBQcm9taXNlKCgocyxuKT0+e3QudG9CbG9iKCh0PT57dD9zKHQpOm4obmV3IEVycm9yKFwiQ291bGQgbm90IGV4cG9ydCBpbWFnZVwiKSl9KSxlLGkpfSkpKSkpfSkpfX1oLk1BWF9DQU5WQVNfV0lEVEg9NGUzO2NsYXNzIGwgZXh0ZW5kcyBle2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLnVuc3Vic2NyaWJlPSgpPT57fX1zdGFydCgpe3RoaXMudW5zdWJzY3JpYmU9dGhpcy5vbihcInRpY2tcIiwoKCk9PntyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCgpPT57dGhpcy5lbWl0KFwidGlja1wiKX0pKX0pKSx0aGlzLmVtaXQoXCJ0aWNrXCIpfXN0b3AoKXt0aGlzLnVuc3Vic2NyaWJlKCl9ZGVzdHJveSgpe3RoaXMudW5zdWJzY3JpYmUoKX19Y2xhc3MgZCBleHRlbmRzIGV7Y29uc3RydWN0b3IodD1uZXcgQXVkaW9Db250ZXh0KXtzdXBlcigpLHRoaXMuYnVmZmVyTm9kZT1udWxsLHRoaXMuYXV0b3BsYXk9ITEsdGhpcy5wbGF5U3RhcnRUaW1lPTAsdGhpcy5wbGF5ZWREdXJhdGlvbj0wLHRoaXMuX211dGVkPSExLHRoaXMuX3BsYXliYWNrUmF0ZT0xLHRoaXMuYnVmZmVyPW51bGwsdGhpcy5jdXJyZW50U3JjPVwiXCIsdGhpcy5wYXVzZWQ9ITAsdGhpcy5jcm9zc09yaWdpbj1udWxsLHRoaXMuc2Vla2luZz0hMSx0aGlzLmFkZEV2ZW50TGlzdGVuZXI9dGhpcy5vbix0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXI9dGhpcy51bix0aGlzLmF1ZGlvQ29udGV4dD10LHRoaXMuZ2Fpbk5vZGU9dGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpLHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbil9bG9hZCgpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7fSkpfWdldCBzcmMoKXtyZXR1cm4gdGhpcy5jdXJyZW50U3JjfXNldCBzcmModCl7aWYodGhpcy5jdXJyZW50U3JjPXQsIXQpcmV0dXJuIHRoaXMuYnVmZmVyPW51bGwsdm9pZCB0aGlzLmVtaXQoXCJlbXB0aWVkXCIpO2ZldGNoKHQpLnRoZW4oKGU9PntpZihlLnN0YXR1cz49NDAwKXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoICR7dH06ICR7ZS5zdGF0dXN9ICgke2Uuc3RhdHVzVGV4dH0pYCk7cmV0dXJuIGUuYXJyYXlCdWZmZXIoKX0pKS50aGVuKChlPT50aGlzLmN1cnJlbnRTcmMhPT10P251bGw6dGhpcy5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGUpKSkudGhlbigoZT0+e3RoaXMuY3VycmVudFNyYz09PXQmJih0aGlzLmJ1ZmZlcj1lLHRoaXMuZW1pdChcImxvYWRlZG1ldGFkYXRhXCIpLHRoaXMuZW1pdChcImNhbnBsYXlcIiksdGhpcy5hdXRvcGxheSYmdGhpcy5wbGF5KCkpfSkpfV9wbGF5KCl7dmFyIHQ7aWYoIXRoaXMucGF1c2VkKXJldHVybjt0aGlzLnBhdXNlZD0hMSxudWxsPT09KHQ9dGhpcy5idWZmZXJOb2RlKXx8dm9pZCAwPT09dHx8dC5kaXNjb25uZWN0KCksdGhpcy5idWZmZXJOb2RlPXRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpLHRoaXMuYnVmZmVyTm9kZS5idWZmZXI9dGhpcy5idWZmZXIsdGhpcy5idWZmZXJOb2RlLnBsYXliYWNrUmF0ZS52YWx1ZT10aGlzLl9wbGF5YmFja1JhdGUsdGhpcy5idWZmZXJOb2RlLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7bGV0IGU9dGhpcy5wbGF5ZWREdXJhdGlvbip0aGlzLl9wbGF5YmFja1JhdGU7ZT49dGhpcy5kdXJhdGlvbiYmKGU9MCx0aGlzLnBsYXllZER1cmF0aW9uPTApLHRoaXMuYnVmZmVyTm9kZS5zdGFydCh0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSxlKSx0aGlzLnBsYXlTdGFydFRpbWU9dGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUsdGhpcy5idWZmZXJOb2RlLm9uZW5kZWQ9KCk9Pnt0aGlzLmN1cnJlbnRUaW1lPj10aGlzLmR1cmF0aW9uJiYodGhpcy5wYXVzZSgpLHRoaXMuZW1pdChcImVuZGVkXCIpKX19X3BhdXNlKCl7dmFyIHQ7dGhpcy5wYXVzZWQ9ITAsbnVsbD09PSh0PXRoaXMuYnVmZmVyTm9kZSl8fHZvaWQgMD09PXR8fHQuc3RvcCgpLHRoaXMucGxheWVkRHVyYXRpb24rPXRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lLXRoaXMucGxheVN0YXJ0VGltZX1wbGF5KCl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXt0aGlzLnBhdXNlZCYmKHRoaXMuX3BsYXkoKSx0aGlzLmVtaXQoXCJwbGF5XCIpKX0pKX1wYXVzZSgpe3RoaXMucGF1c2VkfHwodGhpcy5fcGF1c2UoKSx0aGlzLmVtaXQoXCJwYXVzZVwiKSl9c3RvcEF0KHQpe3ZhciBlLGk7Y29uc3Qgcz10LXRoaXMuY3VycmVudFRpbWU7bnVsbD09PShlPXRoaXMuYnVmZmVyTm9kZSl8fHZvaWQgMD09PWV8fGUuc3RvcCh0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZStzKSxudWxsPT09KGk9dGhpcy5idWZmZXJOb2RlKXx8dm9pZCAwPT09aXx8aS5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwoKCk9Pnt0aGlzLmJ1ZmZlck5vZGU9bnVsbCx0aGlzLnBhdXNlKCl9KSx7b25jZTohMH0pfXNldFNpbmtJZChlKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3JldHVybiB0aGlzLmF1ZGlvQ29udGV4dC5zZXRTaW5rSWQoZSl9KSl9Z2V0IHBsYXliYWNrUmF0ZSgpe3JldHVybiB0aGlzLl9wbGF5YmFja1JhdGV9c2V0IHBsYXliYWNrUmF0ZSh0KXt0aGlzLl9wbGF5YmFja1JhdGU9dCx0aGlzLmJ1ZmZlck5vZGUmJih0aGlzLmJ1ZmZlck5vZGUucGxheWJhY2tSYXRlLnZhbHVlPXQpfWdldCBjdXJyZW50VGltZSgpe3JldHVybih0aGlzLnBhdXNlZD90aGlzLnBsYXllZER1cmF0aW9uOnRoaXMucGxheWVkRHVyYXRpb24rKHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lLXRoaXMucGxheVN0YXJ0VGltZSkpKnRoaXMuX3BsYXliYWNrUmF0ZX1zZXQgY3VycmVudFRpbWUodCl7dGhpcy5lbWl0KFwic2Vla2luZ1wiKTtjb25zdCBlPSF0aGlzLnBhdXNlZDtlJiZ0aGlzLl9wYXVzZSgpLHRoaXMucGxheWVkRHVyYXRpb249dC90aGlzLl9wbGF5YmFja1JhdGUsZSYmdGhpcy5fcGxheSgpLHRoaXMuZW1pdChcInRpbWV1cGRhdGVcIil9Z2V0IGR1cmF0aW9uKCl7dmFyIHQ7cmV0dXJuKG51bGw9PT0odD10aGlzLmJ1ZmZlcil8fHZvaWQgMD09PXQ/dm9pZCAwOnQuZHVyYXRpb24pfHwwfWdldCB2b2x1bWUoKXtyZXR1cm4gdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlfXNldCB2b2x1bWUodCl7dGhpcy5nYWluTm9kZS5nYWluLnZhbHVlPXQsdGhpcy5lbWl0KFwidm9sdW1lY2hhbmdlXCIpfWdldCBtdXRlZCgpe3JldHVybiB0aGlzLl9tdXRlZH1zZXQgbXV0ZWQodCl7dGhpcy5fbXV0ZWQhPT10JiYodGhpcy5fbXV0ZWQ9dCx0aGlzLl9tdXRlZD90aGlzLmdhaW5Ob2RlLmRpc2Nvbm5lY3QoKTp0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pKX1jYW5QbGF5VHlwZSh0KXtyZXR1cm4vXihhdWRpb3x2aWRlbylcXC8vLnRlc3QodCl9Z2V0R2Fpbk5vZGUoKXtyZXR1cm4gdGhpcy5nYWluTm9kZX1nZXRDaGFubmVsRGF0YSgpe2NvbnN0IHQ9W107aWYoIXRoaXMuYnVmZmVyKXJldHVybiB0O2NvbnN0IGU9dGhpcy5idWZmZXIubnVtYmVyT2ZDaGFubmVscztmb3IobGV0IGk9MDtpPGU7aSsrKXQucHVzaCh0aGlzLmJ1ZmZlci5nZXRDaGFubmVsRGF0YShpKSk7cmV0dXJuIHR9fWNvbnN0IGM9e3dhdmVDb2xvcjpcIiM5OTlcIixwcm9ncmVzc0NvbG9yOlwiIzU1NVwiLGN1cnNvcldpZHRoOjEsbWluUHhQZXJTZWM6MCxmaWxsUGFyZW50OiEwLGludGVyYWN0OiEwLGRyYWdUb1NlZWs6ITEsYXV0b1Njcm9sbDohMCxhdXRvQ2VudGVyOiEwLHNhbXBsZVJhdGU6OGUzfTtjbGFzcyB1IGV4dGVuZHMgYXtzdGF0aWMgY3JlYXRlKHQpe3JldHVybiBuZXcgdSh0KX1jb25zdHJ1Y3Rvcih0KXtjb25zdCBlPXQubWVkaWF8fChcIldlYkF1ZGlvXCI9PT10LmJhY2tlbmQ/bmV3IGQ6dm9pZCAwKTtzdXBlcih7bWVkaWE6ZSxtZWRpYUNvbnRyb2xzOnQubWVkaWFDb250cm9scyxhdXRvcGxheTp0LmF1dG9wbGF5LHBsYXliYWNrUmF0ZTp0LmF1ZGlvUmF0ZX0pLHRoaXMucGx1Z2lucz1bXSx0aGlzLmRlY29kZWREYXRhPW51bGwsdGhpcy5zdWJzY3JpcHRpb25zPVtdLHRoaXMubWVkaWFTdWJzY3JpcHRpb25zPVtdLHRoaXMub3B0aW9ucz1PYmplY3QuYXNzaWduKHt9LGMsdCksdGhpcy50aW1lcj1uZXcgbDtjb25zdCBpPWU/dm9pZCAwOnRoaXMuZ2V0TWVkaWFFbGVtZW50KCk7dGhpcy5yZW5kZXJlcj1uZXcgaCh0aGlzLm9wdGlvbnMsaSksdGhpcy5pbml0UGxheWVyRXZlbnRzKCksdGhpcy5pbml0UmVuZGVyZXJFdmVudHMoKSx0aGlzLmluaXRUaW1lckV2ZW50cygpLHRoaXMuaW5pdFBsdWdpbnMoKSxQcm9taXNlLnJlc29sdmUoKS50aGVuKCgoKT0+e3RoaXMuZW1pdChcImluaXRcIik7Y29uc3QgdD10aGlzLm9wdGlvbnMudXJsfHx0aGlzLmdldFNyYygpfHxcIlwiOyh0fHx0aGlzLm9wdGlvbnMucGVha3MmJnRoaXMub3B0aW9ucy5kdXJhdGlvbikmJnRoaXMubG9hZCh0LHRoaXMub3B0aW9ucy5wZWFrcyx0aGlzLm9wdGlvbnMuZHVyYXRpb24pfSkpfXVwZGF0ZVByb2dyZXNzKHQ9dGhpcy5nZXRDdXJyZW50VGltZSgpKXtyZXR1cm4gdGhpcy5yZW5kZXJlci5yZW5kZXJQcm9ncmVzcyh0L3RoaXMuZ2V0RHVyYXRpb24oKSx0aGlzLmlzUGxheWluZygpKSx0fWluaXRUaW1lckV2ZW50cygpe3RoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGltZXIub24oXCJ0aWNrXCIsKCgpPT57aWYoIXRoaXMuaXNTZWVraW5nKCkpe2NvbnN0IHQ9dGhpcy51cGRhdGVQcm9ncmVzcygpO3RoaXMuZW1pdChcInRpbWV1cGRhdGVcIix0KSx0aGlzLmVtaXQoXCJhdWRpb3Byb2Nlc3NcIix0KX19KSkpfWluaXRQbGF5ZXJFdmVudHMoKXt0aGlzLmlzUGxheWluZygpJiYodGhpcy5lbWl0KFwicGxheVwiKSx0aGlzLnRpbWVyLnN0YXJ0KCkpLHRoaXMubWVkaWFTdWJzY3JpcHRpb25zLnB1c2godGhpcy5vbk1lZGlhRXZlbnQoXCJ0aW1ldXBkYXRlXCIsKCgpPT57Y29uc3QgdD10aGlzLnVwZGF0ZVByb2dyZXNzKCk7dGhpcy5lbWl0KFwidGltZXVwZGF0ZVwiLHQpfSkpLHRoaXMub25NZWRpYUV2ZW50KFwicGxheVwiLCgoKT0+e3RoaXMuZW1pdChcInBsYXlcIiksdGhpcy50aW1lci5zdGFydCgpfSkpLHRoaXMub25NZWRpYUV2ZW50KFwicGF1c2VcIiwoKCk9Pnt0aGlzLmVtaXQoXCJwYXVzZVwiKSx0aGlzLnRpbWVyLnN0b3AoKX0pKSx0aGlzLm9uTWVkaWFFdmVudChcImVtcHRpZWRcIiwoKCk9Pnt0aGlzLnRpbWVyLnN0b3AoKX0pKSx0aGlzLm9uTWVkaWFFdmVudChcImVuZGVkXCIsKCgpPT57dGhpcy5lbWl0KFwiZmluaXNoXCIpfSkpLHRoaXMub25NZWRpYUV2ZW50KFwic2Vla2luZ1wiLCgoKT0+e3RoaXMuZW1pdChcInNlZWtpbmdcIix0aGlzLmdldEN1cnJlbnRUaW1lKCkpfSkpKX1pbml0UmVuZGVyZXJFdmVudHMoKXt0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnJlbmRlcmVyLm9uKFwiY2xpY2tcIiwoKHQsZSk9Pnt0aGlzLm9wdGlvbnMuaW50ZXJhY3QmJih0aGlzLnNlZWtUbyh0KSx0aGlzLmVtaXQoXCJpbnRlcmFjdGlvblwiLHQqdGhpcy5nZXREdXJhdGlvbigpKSx0aGlzLmVtaXQoXCJjbGlja1wiLHQsZSkpfSkpLHRoaXMucmVuZGVyZXIub24oXCJkYmxjbGlja1wiLCgodCxlKT0+e3RoaXMuZW1pdChcImRibGNsaWNrXCIsdCxlKX0pKSx0aGlzLnJlbmRlcmVyLm9uKFwic2Nyb2xsXCIsKCh0LGUpPT57Y29uc3QgaT10aGlzLmdldER1cmF0aW9uKCk7dGhpcy5lbWl0KFwic2Nyb2xsXCIsdCppLGUqaSl9KSksdGhpcy5yZW5kZXJlci5vbihcInJlbmRlclwiLCgoKT0+e3RoaXMuZW1pdChcInJlZHJhd1wiKX0pKSx0aGlzLnJlbmRlcmVyLm9uKFwicmVuZGVyZWRcIiwoKCk9Pnt0aGlzLmVtaXQoXCJyZWRyYXdjb21wbGV0ZVwiKX0pKSk7e2xldCB0O3RoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMucmVuZGVyZXIub24oXCJkcmFnXCIsKGU9Pnt0aGlzLm9wdGlvbnMuaW50ZXJhY3QmJih0aGlzLnJlbmRlcmVyLnJlbmRlclByb2dyZXNzKGUpLGNsZWFyVGltZW91dCh0KSx0PXNldFRpbWVvdXQoKCgpPT57dGhpcy5zZWVrVG8oZSl9KSx0aGlzLmlzUGxheWluZygpPzA6MjAwKSx0aGlzLmVtaXQoXCJpbnRlcmFjdGlvblwiLGUqdGhpcy5nZXREdXJhdGlvbigpKSx0aGlzLmVtaXQoXCJkcmFnXCIsZSkpfSkpKX19aW5pdFBsdWdpbnMoKXt2YXIgdDsobnVsbD09PSh0PXRoaXMub3B0aW9ucy5wbHVnaW5zKXx8dm9pZCAwPT09dD92b2lkIDA6dC5sZW5ndGgpJiZ0aGlzLm9wdGlvbnMucGx1Z2lucy5mb3JFYWNoKCh0PT57dGhpcy5yZWdpc3RlclBsdWdpbih0KX0pKX11bnN1YnNjcmliZVBsYXllckV2ZW50cygpe3RoaXMubWVkaWFTdWJzY3JpcHRpb25zLmZvckVhY2goKHQ9PnQoKSkpLHRoaXMubWVkaWFTdWJzY3JpcHRpb25zPVtdfXNldE9wdGlvbnModCl7dGhpcy5vcHRpb25zPU9iamVjdC5hc3NpZ24oe30sdGhpcy5vcHRpb25zLHQpLHRoaXMucmVuZGVyZXIuc2V0T3B0aW9ucyh0aGlzLm9wdGlvbnMpLHQuYXVkaW9SYXRlJiZ0aGlzLnNldFBsYXliYWNrUmF0ZSh0LmF1ZGlvUmF0ZSksbnVsbCE9dC5tZWRpYUNvbnRyb2xzJiYodGhpcy5nZXRNZWRpYUVsZW1lbnQoKS5jb250cm9scz10Lm1lZGlhQ29udHJvbHMpfXJlZ2lzdGVyUGx1Z2luKHQpe3JldHVybiB0Ll9pbml0KHRoaXMpLHRoaXMucGx1Z2lucy5wdXNoKHQpLHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHQub25jZShcImRlc3Ryb3lcIiwoKCk9Pnt0aGlzLnBsdWdpbnM9dGhpcy5wbHVnaW5zLmZpbHRlcigoZT0+ZSE9PXQpKX0pKSksdH1nZXRXcmFwcGVyKCl7cmV0dXJuIHRoaXMucmVuZGVyZXIuZ2V0V3JhcHBlcigpfWdldFNjcm9sbCgpe3JldHVybiB0aGlzLnJlbmRlcmVyLmdldFNjcm9sbCgpfXNldFNjcm9sbFRpbWUodCl7Y29uc3QgZT10L3RoaXMuZ2V0RHVyYXRpb24oKTt0aGlzLnJlbmRlcmVyLnNldFNjcm9sbFBlcmNlbnRhZ2UoZSl9Z2V0QWN0aXZlUGx1Z2lucygpe3JldHVybiB0aGlzLnBsdWdpbnN9bG9hZEF1ZGlvKGUscyxuLHIpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7aWYodGhpcy5lbWl0KFwibG9hZFwiLGUpLCF0aGlzLm9wdGlvbnMubWVkaWEmJnRoaXMuaXNQbGF5aW5nKCkmJnRoaXMucGF1c2UoKSx0aGlzLmRlY29kZWREYXRhPW51bGwsIXMmJiFuKXtjb25zdCB0PXQ9PnRoaXMuZW1pdChcImxvYWRpbmdcIix0KTtzPXlpZWxkIG8uZmV0Y2hCbG9iKGUsdCx0aGlzLm9wdGlvbnMuZmV0Y2hQYXJhbXMpfXRoaXMuc2V0U3JjKGUscyk7Y29uc3QgdD1yfHx0aGlzLmdldER1cmF0aW9uKCl8fCh5aWVsZCBuZXcgUHJvbWlzZSgodD0+e3RoaXMub25jZU1lZGlhRXZlbnQoXCJsb2FkZWRtZXRhZGF0YVwiLCgoKT0+dCh0aGlzLmdldER1cmF0aW9uKCkpKSl9KSkpO2lmKG4pdGhpcy5kZWNvZGVkRGF0YT1pLmNyZWF0ZUJ1ZmZlcihuLHR8fDApO2Vsc2UgaWYocyl7Y29uc3QgdD15aWVsZCBzLmFycmF5QnVmZmVyKCk7dGhpcy5kZWNvZGVkRGF0YT15aWVsZCBpLmRlY29kZSh0LHRoaXMub3B0aW9ucy5zYW1wbGVSYXRlKX10aGlzLmRlY29kZWREYXRhJiYodGhpcy5lbWl0KFwiZGVjb2RlXCIsdGhpcy5nZXREdXJhdGlvbigpKSx0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLmRlY29kZWREYXRhKSksdGhpcy5lbWl0KFwicmVhZHlcIix0aGlzLmdldER1cmF0aW9uKCkpfSkpfWxvYWQoZSxpLHMpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7eWllbGQgdGhpcy5sb2FkQXVkaW8oZSx2b2lkIDAsaSxzKX0pKX1sb2FkQmxvYihlLGkscyl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXt5aWVsZCB0aGlzLmxvYWRBdWRpbyhcImJsb2JcIixlLGkscyl9KSl9em9vbSh0KXtpZighdGhpcy5kZWNvZGVkRGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJObyBhdWRpbyBsb2FkZWRcIik7dGhpcy5yZW5kZXJlci56b29tKHQpLHRoaXMuZW1pdChcInpvb21cIix0KX1nZXREZWNvZGVkRGF0YSgpe3JldHVybiB0aGlzLmRlY29kZWREYXRhfWV4cG9ydFBlYWtzKHtjaGFubmVsczp0PTIsbWF4TGVuZ3RoOmU9OGUzLHByZWNpc2lvbjppPTFlNH09e30pe2lmKCF0aGlzLmRlY29kZWREYXRhKXRocm93IG5ldyBFcnJvcihcIlRoZSBhdWRpbyBoYXMgbm90IGJlZW4gZGVjb2RlZCB5ZXRcIik7Y29uc3Qgcz1NYXRoLm1pbih0LHRoaXMuZGVjb2RlZERhdGEubnVtYmVyT2ZDaGFubmVscyksbj1bXTtmb3IobGV0IHQ9MDt0PHM7dCsrKXtjb25zdCBzPXRoaXMuZGVjb2RlZERhdGEuZ2V0Q2hhbm5lbERhdGEodCkscj1bXSxvPU1hdGgucm91bmQocy5sZW5ndGgvZSk7Zm9yKGxldCB0PTA7dDxlO3QrKyl7Y29uc3QgZT1zLnNsaWNlKHQqbywodCsxKSpvKTtsZXQgbj0wO2ZvcihsZXQgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtjb25zdCBpPWVbdF07TWF0aC5hYnMoaSk+TWF0aC5hYnMobikmJihuPWkpfXIucHVzaChNYXRoLnJvdW5kKG4qaSkvaSl9bi5wdXNoKHIpfXJldHVybiBufWdldER1cmF0aW9uKCl7bGV0IHQ9c3VwZXIuZ2V0RHVyYXRpb24oKXx8MDtyZXR1cm4gMCE9PXQmJnQhPT0xLzB8fCF0aGlzLmRlY29kZWREYXRhfHwodD10aGlzLmRlY29kZWREYXRhLmR1cmF0aW9uKSx0fXRvZ2dsZUludGVyYWN0aW9uKHQpe3RoaXMub3B0aW9ucy5pbnRlcmFjdD10fXNldFRpbWUodCl7c3VwZXIuc2V0VGltZSh0KSx0aGlzLnVwZGF0ZVByb2dyZXNzKHQpfXNlZWtUbyh0KXtjb25zdCBlPXRoaXMuZ2V0RHVyYXRpb24oKSp0O3RoaXMuc2V0VGltZShlKX1wbGF5UGF1c2UoKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3JldHVybiB0aGlzLmlzUGxheWluZygpP3RoaXMucGF1c2UoKTp0aGlzLnBsYXkoKX0pKX1zdG9wKCl7dGhpcy5wYXVzZSgpLHRoaXMuc2V0VGltZSgwKX1za2lwKHQpe3RoaXMuc2V0VGltZSh0aGlzLmdldEN1cnJlbnRUaW1lKCkrdCl9ZW1wdHkoKXt0aGlzLmxvYWQoXCJcIixbWzBdXSwuMDAxKX1zZXRNZWRpYUVsZW1lbnQodCl7dGhpcy51bnN1YnNjcmliZVBsYXllckV2ZW50cygpLHN1cGVyLnNldE1lZGlhRWxlbWVudCh0KSx0aGlzLmluaXRQbGF5ZXJFdmVudHMoKX1leHBvcnRJbWFnZShlPVwiaW1hZ2UvcG5nXCIsaT0xLHM9XCJkYXRhVVJMXCIpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7cmV0dXJuIHRoaXMucmVuZGVyZXIuZXhwb3J0SW1hZ2UoZSxpLHMpfSkpfWRlc3Ryb3koKXt0aGlzLmVtaXQoXCJkZXN0cm95XCIpLHRoaXMucGx1Z2lucy5mb3JFYWNoKCh0PT50LmRlc3Ryb3koKSkpLHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKCh0PT50KCkpKSx0aGlzLnVuc3Vic2NyaWJlUGxheWVyRXZlbnRzKCksdGhpcy50aW1lci5kZXN0cm95KCksdGhpcy5yZW5kZXJlci5kZXN0cm95KCksc3VwZXIuZGVzdHJveSgpfX11LkJhc2VQbHVnaW49Y2xhc3MgZXh0ZW5kcyBle2NvbnN0cnVjdG9yKHQpe3N1cGVyKCksdGhpcy5zdWJzY3JpcHRpb25zPVtdLHRoaXMub3B0aW9ucz10fW9uSW5pdCgpe31faW5pdCh0KXt0aGlzLndhdmVzdXJmZXI9dCx0aGlzLm9uSW5pdCgpfWRlc3Ryb3koKXt0aGlzLmVtaXQoXCJkZXN0cm95XCIpLHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKCh0PT50KCkpKX19LHUuZG9tPXI7ZXhwb3J0e3UgYXMgZGVmYXVsdH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBXYXZlU3VyZmVyIGZyb20gJ3dhdmVzdXJmZXIuanMnO1xuXG5jb25zdCB3YXZlc3VyZmVyID0gV2F2ZVN1cmZlci5jcmVhdGUoe1xuICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gIHdhdmVDb2xvcjogJ3JnYigyMDAsIDAsIDIwMCknLFxuICBwcm9ncmVzc0NvbG9yOiAncmdiKDEwMCwgMCwgMTAwKScsXG4gIHVybDogJy4uL3NyYy9hdWRpby8wOV9EYWRTaW5nc0tyaXN0b2ZmZXJzb24ubXAzJyxcbiAgV2F2ZVN1cmZlck9wdGlvbnM6IHtcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gIH0sXG59KTtcbi8vIGNvbnN0IHdhdmVzdXJmZXIgPSBXYXZlU3VyZmVyLmNyZWF0ZSh7XG4vLyAgIGNvbnRhaW5lcjogXCJkb2N1bWVudC5ib2R5XCIsXG4vLyAgIHdhdmVDb2xvcjogXCJ2aW9sZXRcIixcbi8vICAgcHJvZ3Jlc3NDb2xvcjogXCJwdXJwbGVcIixcbi8vIH0pO1xuLy8gd2F2ZXN1cmZlci5sb2FkKFwiLi9hdWRpby8wOV9EYWRTaW5nc0tyaXN0b2ZmZXJzb24ubXAzXCIpO1xuXG53YXZlc3VyZmVyLm9uKCdjbGljaycsICgpID0+IHtcbiAgd2F2ZXN1cmZlci5wbGF5KCk7XG59KTtcblxuLy8gZG9jdW1lbnQuYXBwZW5kQ2hpbGQod2F2ZXN1cmZlcik7XG5cbi8vIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvJyk7XG4vLyBjb25zdCBwbGF5UGF1c2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1wYXVzZS1idXR0b24nKTtcbi8vIGNvbnN0IHZvbHVtZUNvbnRyb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lLWNvbnRyb2wnKTtcbi8vIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzLWJhcicpO1xuLy8gY29uc3QgY3VycmVudFRpbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdGltZScpO1xuLy8gY29uc3QgdG90YWxUaW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbC10aW1lJyk7XG5cbi8vIGxldCBpc1BsYXlpbmcgPSBmYWxzZTtcblxuLy8gcGxheVBhdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICBpZiAoaXNQbGF5aW5nKSB7XG4vLyAgICAgYXVkaW8ucGF1c2UoKTtcbi8vICAgICBwbGF5UGF1c2VCdXR0b24udGV4dENvbnRlbnQgPSAnUGxheSc7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgYXVkaW8ucGxheSgpO1xuLy8gICAgIHBsYXlQYXVzZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdQYXVzZSc7XG4vLyAgIH1cbi8vICAgaXNQbGF5aW5nID0gIWlzUGxheWluZztcbi8vIH0pO1xuXG4vLyB2b2x1bWVDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuLy8gICBhdWRpby52b2x1bWUgPSB2b2x1bWVDb250cm9sLnZhbHVlO1xuLy8gfSk7XG5cbi8vIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG4vLyAgIGNvbnN0IHsgY3VycmVudFRpbWUgfSA9IGF1ZGlvO1xuLy8gICBjb25zdCB7IGR1cmF0aW9uIH0gPSBhdWRpbztcblxuLy8gICBjb25zdCBjdXJyZW50TWludXRlcyA9IE1hdGguZmxvb3IoY3VycmVudFRpbWUgLyA2MCk7XG4vLyAgIGNvbnN0IGN1cnJlbnRTZWNvbmRzID0gTWF0aC5mbG9vcihjdXJyZW50VGltZSAlIDYwKTtcbi8vICAgY29uc3QgdG90YWxNaW51dGVzID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvIDYwKTtcbi8vICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcihkdXJhdGlvbiAlIDYwKTtcblxuLy8gICBjdXJyZW50VGltZURpc3BsYXkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50TWludXRlc306JHtcbi8vICAgICBjdXJyZW50U2Vjb25kcyA8IDEwID8gJzAnIDogJydcbi8vICAgfSR7Y3VycmVudFNlY29uZHN9YDtcbi8vICAgdG90YWxUaW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3RvdGFsTWludXRlc306JHtcbi8vICAgICB0b3RhbFNlY29uZHMgPCAxMCA/ICcwJyA6ICcnXG4vLyAgIH0ke3RvdGFsU2Vjb25kc31gO1xuXG4vLyAgIGNvbnN0IHByb2dyZXNzID0gKGN1cnJlbnRUaW1lIC8gZHVyYXRpb24pICogMTAwO1xuLy8gICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzfSVgO1xuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKCdoZXkgZWFydGgnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==