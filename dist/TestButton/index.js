/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var r={418:r=>{var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(r){o[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(r,a){for(var c,i,f=n(r),s=1;s<arguments.length;s++){for(var l in c=Object(arguments[s]))t.call(c,l)&&(f[l]=c[l]);if(e){i=e(c);for(var p=0;p<i.length;p++)o.call(c,i[p])&&(f[i[p]]=c[i[p]])}}return f}},251:(r,e,t)=>{t(418);var o=t(297),n=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),a("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function s(r,e,t){var o,a={},s=null,l=null;for(o in void 0!==t&&(s=""+t),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(l=e.ref),e)i.call(e,o)&&!f.hasOwnProperty(o)&&(a[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps)void 0===a[o]&&(a[o]=e[o]);return{$$typeof:n,type:r,key:s,ref:l,props:a,_owner:c.current}}e.jsx=s},893:(r,e,t)=>{r.exports=t(251)},297:r=>{r.exports=require("react")}},e={};function t(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return r[o](a,a.exports,t),a.exports}t.d=(r,e)=>{for(var o in e)t.o(e,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:e[o]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e);var o={};(()=>{t.d(o,{default:()=>n});var r=t(893);const e="_1hVOKtRGlREl5YHXSURo2-",n=()=>(0,r.jsx)("button",Object.assign({className:e},{children:"Go"}),void 0)})(),module.exports=o.default})();
//# sourceMappingURL=index.js.map

/** Embedded by add-styles-to-document */
(function() {
  var COMPONENT_ID = "__STYLES_5cc00772381ca1bc19fedff2b2cb727b";
  
  if (
    typeof window === 'undefined' ||
    COMPONENT_ID in window
    ) return;
    
  var STYLE_TAG_ID = '__WEBPACK_ADD_STYLES';
  var STYLE_TAG = document.getElementById('__WEBPACK_ADD_STYLES');
  var STYLES = "._1hVOKtRGlREl5YHXSURo2-{background:#f0f8ff;border:2px solid #2f4f4f;border-radius:8px;padding:8px;width:128px}/*# sourceMappingURL=index.css.map*/";
  
  if (STYLE_TAG) {
    STYLE_TAG.append(STYLES);
  } else {
    STYLE_TAG = document.createElement('style');
    STYLE_TAG.setAttribute('id', STYLE_TAG_ID);
    STYLE_TAG.innerHTML = STYLES;
    document.head.append(STYLE_TAG);
  }

  window[COMPONENT_ID] = true;
})();
