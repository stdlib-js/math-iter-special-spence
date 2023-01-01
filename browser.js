// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterSpence=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t};var c=r;function l(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},A=Boolean.prototype.toString;var g=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var F=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),T=F.document&&F.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(x,"REGEXP",V);var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function I(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=V.exec(e.toString()))return r[1]}return I(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(I,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!B(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(I));var k="function"==typeof y||"object"==typeof P||"function"==typeof T?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function C(t){return"function"===k(t)}function L(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&C(t.next)}function M(t){return"number"==typeof t}var R=Number,X=R.prototype.toString;var Y=b();function q(t){return"object"==typeof t&&(t instanceof R||(Y?function(t){try{return X.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function z(t){return M(t)||q(t)}l(z,"isPrimitive",M),l(z,"isObject",q);var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var H,J=Object.getPrototypeOf;H=C(Object.getPrototypeOf)?J:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var K=H;var Q=Object.prototype;function W(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!B(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),K(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&C(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&C(r.isPrototypeOf)&&(r===Q||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Z(t,r){return W(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r,n){var e,o,i,u;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!C(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(i=Z(e,n)))throw i;return l(o={},"next",a),l(o,"return",f),D&&C(t[D])&&l(o,D,c),o;function a(){var n;return u?{done:!0}:(n=t.next()).done?(u=!0,n):{value:M(n.value)?r(n.value):e.invalid,done:!1}}function f(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){return $(t[D](),r,e)}}function tt(t){return t!=t}var rt="function"==typeof Uint32Array;var nt="function"==typeof Uint32Array?Uint32Array:null;var et,ot="function"==typeof Uint32Array?Uint32Array:void 0;et=function(){var t,r,n;if("function"!=typeof nt)return!1;try{r=new nt(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(rt&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ot:function(){throw new Error("not implemented")};var it=et,ut="function"==typeof Float64Array;var at="function"==typeof Float64Array?Float64Array:null;var ft,ct="function"==typeof Float64Array?Float64Array:void 0;ft=function(){var t,r,n;if("function"!=typeof at)return!1;try{r=new at([1,3.14,-3.14,NaN]),n=r,t=(ut&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ct:function(){throw new Error("not implemented")};var lt=ft,yt="function"==typeof Uint8Array;var pt="function"==typeof Uint8Array?Uint8Array:null;var vt,bt="function"==typeof Uint8Array?Uint8Array:void 0;vt=function(){var t,r,n;if("function"!=typeof pt)return!1;try{r=new pt(r=[1,3.14,-3.14,256,257]),n=r,t=(yt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?bt:function(){throw new Error("not implemented")};var st=vt,dt="function"==typeof Uint16Array;var mt="function"==typeof Uint16Array?Uint16Array:null;var wt,jt="function"==typeof Uint16Array?Uint16Array:void 0;wt=function(){var t,r,n;if("function"!=typeof mt)return!1;try{r=new mt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(dt&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?jt:function(){throw new Error("not implemented")};var At,gt={uint16:wt,uint8:st};(At=new gt.uint16(1))[0]=4660;var _t=52===new gt.uint8(At.buffer)[0],ht=!0===_t?1:0,Ot=new lt(1),Ut=new it(Ot.buffer);function St(t){return Ot[0]=t,Ut[ht]}var Et=!0===_t?1:0,Nt=new lt(1),Ft=new it(Nt.buffer);var Tt=R.NEGATIVE_INFINITY;var Pt=.6931471803691238,xt=1.9082149292705877e-10,Vt=1048575;function Bt(t){var r,n,e,o,i,u,a,f,c,l,y,p;return 0===t?Tt:tt(t)||t<0?NaN:(i=0,(n=St(t))<1048576&&(i-=54,n=St(t*=0x40000000000000)),n>=2146435072?t+t:(i+=(n>>20)-1023|0,i+=(f=(n&=Vt)+614244&1048576|0)>>20|0,a=(t=function(t,r){return Nt[0]=t,Ft[Et]=r>>>0,Nt[0]}(t,n|1072693248^f))-1,(Vt&2+n)<3?0===a?0===i?0:i*Pt+i*xt:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*Pt-(u-i*xt-a)):(f=n-398458|0,c=440401-n|0,o=(y=(p=(l=a/(2+a))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),u=e+o,(f|=c)>0?(r=.5*a*a,0===i?a-(r-l*(r+u)):i*Pt-(r-(l*(r+u)+i*xt)-a)):0===i?a-l*(a-u):i*Pt-(l*(a-u)-i*xt-a))))}var It=9.869604401089358;function Gt(t){var r,n,e,o;return tt(t)||t<0?NaN:1===t?0:0===t?It/6:(r=0,t>2&&(t=1/t,r|=2),t>1.5?(n=1/t-1,r|=2):t<.5?(n=-t,r|=1):n=t-1,e=-n*function(t){return 0===t?1:1+t*(3.297713409852251+t*(4.256971560081218+t*(2.7114985119655346+t*(.8796913117545303+t*(.13384763957830903+t*(.007315890452380947+46512858607399003e-21*t))))))}(n)/function(t){return 0===t?1:1+t*(3.547713409852251+t*(5.03278880143317+t*(3.6380053334513707+t*(1.4117259775183106+t*(.2829748606025681+t*(.02540437639325444+.0006909904889125533*t))))))}(n),1&r&&(e=It/6-Bt(t)*Bt(1-t)-e),2&r&&(e=-.5*(o=Bt(t))*o-e),e)}return function(t){return $(t,Gt)}}));
//# sourceMappingURL=browser.js.map
