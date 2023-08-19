// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).itercuprod=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&u&&u.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return v&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var A=s()?function(r){var t,n,e;if(null==r)return b.call(r);n=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[w]=n:delete r[w],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var h=s();function j(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===A(r)))}function _(r){return p(r)||j(r)}function U(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",j);var S="object"==typeof self?self:null,E="object"==typeof window?window:null,I="object"==typeof global?global:null;var O=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return U()}if(S)return S;if(E)return E;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),T=O.document&&O.document.childNodes,N=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;l(F,"REGEXP",G);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===A(r)};function H(r){return null!==r&&"object"==typeof r}function P(r){var t,n,e,o;if(("Object"===(n=A(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=G.exec(e.toString()))return t[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!x(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof N||"function"==typeof T?function(r){return P(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?P(r).toLowerCase():t};function L(r){return"function"===B(r)}var V="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function C(r){return r!=r}var W=Number.POSITIVE_INFINITY,k=Number.NEGATIVE_INFINITY;function M(r){return r===W||r===k}function R(r,t,n,e){return C(r)||M(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return R(r,[0,0],1,0)}),"assign",R);var Y="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var X,q="function"==typeof Uint32Array?Uint32Array:void 0;X=function(){var r,t,n;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Y&&n instanceof Uint32Array||"[object Uint32Array]"===A(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?q:function(){throw new Error("not implemented")};var z=X,D="function"==typeof Float64Array;var J="function"==typeof Float64Array?Float64Array:null;var Q,Z="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,t,n;if("function"!=typeof J)return!1;try{t=new J([1,3.14,-3.14,NaN]),n=t,r=(D&&n instanceof Float64Array||"[object Float64Array]"===A(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var $=Q,rr="function"==typeof Uint8Array;var tr="function"==typeof Uint8Array?Uint8Array:null;var nr,er="function"==typeof Uint8Array?Uint8Array:void 0;nr=function(){var r,t,n;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,256,257]),n=t,r=(rr&&n instanceof Uint8Array||"[object Uint8Array]"===A(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or=nr,ir="function"==typeof Uint16Array;var ur="function"==typeof Uint16Array?Uint16Array:null;var ar,fr="function"==typeof Uint16Array?Uint16Array:void 0;ar=function(){var r,t,n;if("function"!=typeof ur)return!1;try{t=new ur(t=[1,3.14,-3.14,65536,65537]),n=t,r=(ir&&n instanceof Uint16Array||"[object Uint16Array]"===A(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,lr={uint16:ar,uint8:or};(cr=new lr.uint16(1))[0]=4660;var yr=52===new lr.uint8(cr.buffer)[0],pr=!0===yr?1:0,vr=new $(1),sr=new z(vr.buffer);function br(r){return vr[0]=r,sr[pr]}var dr,mr;function wr(r){var t=br(r);return(t=(2146435072&t)>>>20)-1023|0}!0===yr?(dr=1,mr=0):(dr=0,mr=1);var Ar,gr,hr={HIGH:dr,LOW:mr},jr=new $(1),_r=new z(jr.buffer),Ur=hr.HIGH,Sr=hr.LOW;function Er(r,t,n,e){return jr[0]=r,t[e]=_r[Ur],t[e+n]=_r[Sr],t}function Ir(r){return Er(r,[0,0],1,0)}l(Ir,"assign",Er),!0===yr?(Ar=1,gr=0):(Ar=0,gr=1);var Or={HIGH:Ar,LOW:gr},Tr=new $(1),Nr=new z(Tr.buffer),Fr=Or.HIGH,Gr=Or.LOW;function xr(r,t){return Nr[Fr]=r,Nr[Gr]=t,Tr[0]}var Hr=[0,0],Pr=[0,0];function Br(r,t,n,e){var o,i;return 0===r||C(r)||M(r)?(t[e]=r,t[e+n]=0,t):(R(r,Hr,1,0),i=wr(Hr[0])+Hr[1]+1,Ir.assign(Hr[0],Pr,1,0),o=Pr[0],o&=2148532223,r=xr(o|=1071644672,Pr[1]),t[e]=r,t[e+n]=i,t)}l((function(r){return Br(r,[0,0],1,0)}),"assign",Br);var Lr=[0,0];var Vr=[0,0],Cr=[0,0];function Wr(r,t){var n,e,o,i,u,a;return 0===t||0===r||C(r)||M(r)?r:(R(r,Vr,1,0),t+=Vr[1],(t+=wr(r=Vr[0]))<-1074?(o=0,i=r,Ir.assign(o,Lr,1,0),u=Lr[0],u&=2147483647,a=br(i),xr(u|=a&=2147483648,Lr[1])):t>1023?r<0?k:W:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Ir.assign(r,Cr,1,0),n=Cr[0],n&=2148532223,e*xr(n|=t+1023<<20,Cr[1])))}var kr=[0,0];return function r(t){var n,e,o,i,u,a,f,c;if(u=typeof(i=t),null===i||"object"!==u&&"function"!==u||!L(i.next))throw new TypeError(function(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}("1KT3w,G7",t));return a=.5,c=1,o=function(r){return 0===arguments.length?void 0===f?null:f:(Br(r,kr,1,0),c+=kr[1],(a*=kr[0])>-.5&&a<.5&&(Br(a,kr,1,0),a=kr[0],c+=kr[1]),f=Wr(a,c))},l(n={},"next",(function(){var r;if(e)return{done:!0};if((r=t.next()).done)return e=!0,r;r="number"==typeof r.value?o(r.value):o(NaN);return{value:r,done:!1}})),l(n,"return",(function(r){if(e=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),V&&L(t[V])&&l(n,V,(function(){return r(t[V]())})),n}}));
//# sourceMappingURL=index.js.map
