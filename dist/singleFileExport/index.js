/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var r={418:r=>{var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(r){o[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(r,a){for(var c,i,f=n(r),l=1;l<arguments.length;l++){for(var p in c=Object(arguments[l]))t.call(c,p)&&(f[p]=c[p]);if(e){i=e(c);for(var s=0;s<i.length;s++)o.call(c,i[s])&&(f[i[s]]=c[i[s]])}}return f}},251:(r,e,t)=>{t(418);var o=t(297),n=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),a("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function l(r,e,t){var o,a={},l=null,p=null;for(o in void 0!==t&&(l=""+t),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(p=e.ref),e)i.call(e,o)&&!f.hasOwnProperty(o)&&(a[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps)void 0===a[o]&&(a[o]=e[o]);return{$$typeof:n,type:r,key:l,ref:p,props:a,_owner:c.current}}e.jsx=l},893:(r,e,t)=>{r.exports=t(251)},297:r=>{r.exports=require("react")}},e={};function t(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return r[o](a,a.exports,t),a.exports}t.d=(r,e)=>{for(var o in e)t.o(e,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:e[o]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e);var o={};(()=>{t.d(o,{default:()=>e});var r=t(893);const e=()=>(0,r.jsx)("div",{children:"hello"},void 0)})(),module.exports=o.default})();
//# sourceMappingURL=index.js.map