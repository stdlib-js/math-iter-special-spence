// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSpence=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,u,f,l,s,p,y,d,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function O(r){var t,e,n,o;for(e=[],o=0,n=x.exec(r);n;)(t=r.slice(o,x.lastIndex-n[0].length)).length&&e.push(t),e.push(U(n)),o=x.lastIndex,n=x.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function F(r){var t,e;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[O(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var T,k=Object.prototype,V=k.toString,N=k.__defineGetter__,I=k.__defineSetter__,P=k.__lookupGetter__,$=k.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(P.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=k,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(r,t,e.get),a&&I&&I.call(r,t,e.set),r};var C=T;function B(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var R=/./;function G(r){return"boolean"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return L&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function X(r,t){return null!=r&&M.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof z?z.toStringTag:"";var q=Z()?function(r){var t,e,n;if(null==r)return W.call(r);e=r[Y],t=X(r,Y);try{r[Y]=void 0}catch(t){return W.call(r)}return n=W.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return W.call(r)},D=Boolean,H=Boolean.prototype.toString;var J=Z();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return G(r)||K(r)}B(Q,"isPrimitive",G),B(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!G(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(tr)return tr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;B(cr,"REGEXP",ur);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var t,e,n,o;if(("Object"===(e=q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ur.exec(n.toString()))return t[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}B(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!fr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(lr));var pr="function"==typeof R||"object"==typeof ar||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t};function yr(r){return"function"===pr(r)}function dr(r){return"number"==typeof r}var gr=Number,vr=gr.prototype.toString;var br=Z();function hr(r){return"object"==typeof r&&(r instanceof gr||(br?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function wr(r){return dr(r)||hr(r)}B(wr,"isPrimitive",dr),B(wr,"isObject",hr);var mr="function"==typeof z&&"symbol"==typeof z("foo")&&X(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var jr,Ar=Object,_r=Object.getPrototypeOf;jr=yr(Object.getPrototypeOf)?_r:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=jr;var Sr=Object.prototype;function xr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(t=function(r){return null==r?null:(r=Ar(r),Er(r))}(r),!t||!X(r,"constructor")&&X(t,"constructor")&&yr(t.constructor)&&"[object Function]"===q(t.constructor)&&X(t,"isPrototypeOf")&&yr(t.isPrototypeOf)&&(t===Sr||function(r){var t;for(t in r)if(!X(r,t))return!1;return!0}(r)))}function Ur(r,t,e){var n,o,i,a,c,u;if(u=typeof(c=r),null===c||"object"!==u&&"function"!==u||!yr(c.next))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(t))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return xr(t)?(X(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return B(o={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:dr(e.value)?t(e.value):n.invalid,done:!1}})),B(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr&&yr(r[mr])&&B(o,mr,(function(){return Ur(r[mr](),t,n)})),o}function Or(r){return r!=r}var Fr="function"==typeof Uint32Array;var Tr="function"==typeof Uint32Array?Uint32Array:null;var kr,Vr="function"==typeof Uint32Array?Uint32Array:void 0;kr=function(){var r,t,e;if("function"!=typeof Tr)return!1;try{t=new Tr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Fr&&e instanceof Uint32Array||"[object Uint32Array]"===q(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Nr=kr,Ir="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null;var $r,Cr="function"==typeof Float64Array?Float64Array:void 0;$r=function(){var r,t,e;if("function"!=typeof Pr)return!1;try{t=new Pr([1,3.14,-3.14,NaN]),e=t,r=(Ir&&e instanceof Float64Array||"[object Float64Array]"===q(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Br=$r,Rr="function"==typeof Uint8Array;var Gr="function"==typeof Uint8Array?Uint8Array:null;var Lr,Zr="function"==typeof Uint8Array?Uint8Array:void 0;Lr=function(){var r,t,e;if("function"!=typeof Gr)return!1;try{t=new Gr(t=[1,3.14,-3.14,256,257]),e=t,r=(Rr&&e instanceof Uint8Array||"[object Uint8Array]"===q(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Wr=Lr,Mr="function"==typeof Uint16Array;var Xr="function"==typeof Uint16Array?Uint16Array:null;var zr,Yr="function"==typeof Uint16Array?Uint16Array:void 0;zr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Mr&&e instanceof Uint16Array||"[object Uint16Array]"===q(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var qr,Dr={uint16:zr,uint8:Wr};(qr=new Dr.uint16(1))[0]=4660;var Hr=52===new Dr.uint8(qr.buffer)[0],Jr=!0===Hr?1:0,Kr=new Br(1),Qr=new Nr(Kr.buffer);function rt(r){return Kr[0]=r,Qr[Jr]}var tt=!0===Hr?1:0,et=new Br(1),nt=new Nr(et.buffer);var ot=1023,it=gr.NEGATIVE_INFINITY;var at=.6931471803691238,ct=1.9082149292705877e-10,ut=0x40000000000000,ft=.3333333333333333,lt=1048575,st=2146435072,pt=1048576,yt=1072693248;function dt(r){var t,e,n,o,i,a,c,u,f,l,s,p;return 0===r?it:Or(r)||r<0?NaN:(i=0,(e=rt(r))<pt&&(i-=54,e=rt(r*=ut)),e>=st?r+r:(i+=(e>>20)-ot|0,i+=(u=(e&=lt)+614244&1048576|0)>>20|0,c=(r=function(r,t){return et[0]=r,nt[tt]=t>>>0,et[0]}(r,e|u^yt))-1,(lt&2+e)<3?0===c?0===i?0:i*at+i*ct:(a=c*c*(.5-ft*c),0===i?c-a:i*at-(a-i*ct-c)):(u=e-398458|0,f=440401-e|0,o=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+o,(u|=f)>0?(t=.5*c*c,0===i?c-(t-l*(t+a)):i*at-(t-(l*(t+a)+i*ct)-c)):0===i?c-l*(c-a):i*at-(l*(c-a)-i*ct-c))))}var gt=9.869604401089358;function vt(r){var t,e,n,o;return Or(r)||r<0?NaN:1===r?0:0===r?gt/6:(t=0,r>2&&(r=1/r,t|=2),r>1.5?(e=1/r-1,t|=2):r<.5?(e=-r,t|=1):e=r-1,n=-e*function(r){return 0===r?1:1+r*(3.297713409852251+r*(4.256971560081218+r*(2.7114985119655346+r*(.8796913117545303+r*(.13384763957830903+r*(.007315890452380947+46512858607399003e-21*r))))))}(e)/function(r){return 0===r?1:1+r*(3.547713409852251+r*(5.03278880143317+r*(3.6380053334513707+r*(1.4117259775183106+r*(.2829748606025681+r*(.02540437639325444+.0006909904889125533*r))))))}(e),1&t&&(n=gt/6-dt(r)*dt(1-r)-n),2&t&&(n=-.5*(o=dt(r))*o-n),n)}return function(r){return Ur(r,vt)}}));
//# sourceMappingURL=index.js.map
