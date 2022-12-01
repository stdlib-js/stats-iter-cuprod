// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).itercuprod=r()}(this,(function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;r=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?t:function(n,r,t){var c,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(n,r)||a.call(n,r)?(c=n.__proto__,n.__proto__=e,delete n[r],n[r]=t.value,n.__proto__=c):n[r]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(n,r,t.get),p&&u&&u.call(n,r,t.set),n};var c=r;function l(n,r,t){c(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function p(n){return"boolean"==typeof n}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return v&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(n,r){return null!=n&&d.call(n,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var A=s()?function(n){var r,t,e;if(null==n)return b.call(n);t=n[m],r=w(n,m);try{n[m]=void 0}catch(r){return b.call(n)}return e=b.call(n),r?n[m]=t:delete n[m],e}:function(n){return b.call(n)},g=Boolean.prototype.toString;var h=s();function j(n){return"object"==typeof n&&(n instanceof Boolean||(h?function(n){try{return g.call(n),!0}catch(n){return!1}}(n):"[object Boolean]"===A(n)))}function _(n){return p(n)||j(n)}function U(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",j);var S="object"==typeof self?self:null,E="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O="object"==typeof I?I:null;var T=function(n){if(arguments.length){if(!p(n))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+n+"`.");if(n)return U()}if(S)return S;if(E)return E;if(O)return O;throw new Error("unexpected error. Unable to resolve global object.")}(),N=T.document&&T.document.childNodes,F=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;l(x,"REGEXP",G);var H=Array.isArray?Array.isArray:function(n){return"[object Array]"===A(n)};function P(n){return null!==n&&"object"==typeof n}function B(n){var r,t,e,o;if(("Object"===(t=A(n).slice(8,-1))||"Error"===t)&&n.constructor){if("string"==typeof(e=n.constructor).name)return e.name;if(r=G.exec(e.toString()))return r[1]}return P(o=n)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(P,"isObjectLikeArray",function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(r){var t,e;if(!H(r))return!1;if(0===(t=r.length))return!1;for(e=0;e<t;e++)if(!1===n(r[e]))return!1;return!0}}(P));var L="function"==typeof y||"object"==typeof F||"function"==typeof N?function(n){return B(n).toLowerCase()}:function(n){var r;return null===n?"null":"object"===(r=typeof n)?B(n).toLowerCase():r};function V(n){return"function"===L(n)}var C="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function W(n){return n!=n}var k=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;function R(n){return n===k||n===M}function Y(n,r,t,e){return W(n)||R(n)?(r[e]=n,r[e+t]=0,r):0!==n&&function(n){return Math.abs(n)}(n)<22250738585072014e-324?(r[e]=4503599627370496*n,r[e+t]=-52,r):(r[e]=n,r[e+t]=0,r)}l((function(n){return Y(n,[0,0],1,0)}),"assign",Y);var X="function"==typeof Uint32Array;var q="function"==typeof Uint32Array?Uint32Array:null;var z,D="function"==typeof Uint32Array?Uint32Array:void 0;z=function(){var n,r,t;if("function"!=typeof q)return!1;try{r=new q(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(X&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?D:function(){throw new Error("not implemented")};var J=z,K="function"==typeof Float64Array;var Q="function"==typeof Float64Array?Float64Array:null;var Z,$="function"==typeof Float64Array?Float64Array:void 0;Z=function(){var n,r,t;if("function"!=typeof Q)return!1;try{r=new Q([1,3.14,-3.14,NaN]),t=r,n=(K&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?$:function(){throw new Error("not implemented")};var nn=Z,rn="function"==typeof Uint8Array;var tn="function"==typeof Uint8Array?Uint8Array:null;var en,on="function"==typeof Uint8Array?Uint8Array:void 0;en=function(){var n,r,t;if("function"!=typeof tn)return!1;try{r=new tn(r=[1,3.14,-3.14,256,257]),t=r,n=(rn&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?on:function(){throw new Error("not implemented")};var un=en,fn="function"==typeof Uint16Array;var an="function"==typeof Uint16Array?Uint16Array:null;var cn,ln="function"==typeof Uint16Array?Uint16Array:void 0;cn=function(){var n,r,t;if("function"!=typeof an)return!1;try{r=new an(r=[1,3.14,-3.14,65536,65537]),t=r,n=(fn&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?ln:function(){throw new Error("not implemented")};var yn,pn={uint16:cn,uint8:un};(yn=new pn.uint16(1))[0]=4660;var vn=52===new pn.uint8(yn.buffer)[0],sn=!0===vn?1:0,bn=new nn(1),dn=new J(bn.buffer);function wn(n){return bn[0]=n,dn[sn]}var mn,An;function gn(n){var r=wn(n);return(r=(2146435072&r)>>>20)-1023|0}!0===vn?(mn=1,An=0):(mn=0,An=1);var hn,jn,_n={HIGH:mn,LOW:An},Un=new nn(1),Sn=new J(Un.buffer),En=_n.HIGH,In=_n.LOW;function On(n,r,t,e){return Un[0]=n,r[e]=Sn[En],r[e+t]=Sn[In],r}function Tn(n){return On(n,[0,0],1,0)}l(Tn,"assign",On),!0===vn?(hn=1,jn=0):(hn=0,jn=1);var Nn={HIGH:hn,LOW:jn},Fn=new nn(1),xn=new J(Fn.buffer),Gn=Nn.HIGH,Hn=Nn.LOW;function Pn(n,r){return xn[Gn]=n,xn[Hn]=r,Fn[0]}var Bn=[0,0],Ln=[0,0];function Vn(n,r,t,e){var o,i;return 0===n||W(n)||R(n)?(r[e]=n,r[e+t]=0,r):(Y(n,Bn,1,0),i=gn(Bn[0])+Bn[1]+1,Tn.assign(Bn[0],Ln,1,0),o=Ln[0],o&=2148532223,n=Pn(o|=1071644672,Ln[1]),r[e]=n,r[e+t]=i,r)}l((function(n){return Vn(n,[0,0],1,0)}),"assign",Vn);var Cn=[0,0];var Wn=[0,0],kn=[0,0];function Mn(n,r){var t,e,o,i,u,f;return 0===r||0===n||W(n)||R(n)?n:(Y(n,Wn,1,0),r+=Wn[1],(r+=gn(n=Wn[0]))<-1074?(o=0,i=n,Tn.assign(o,Cn,1,0),u=Cn[0],u&=2147483647,f=wn(i),Pn(u|=f&=2147483648,Cn[1])):r>1023?n<0?M:k:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Tn.assign(n,kn,1,0),t=kn[0],t&=2148532223,e*Pn(t|=r+1023<<20,kn[1])))}var Rn=[0,0];return function n(r){var t,e,o,i,u,f,a,c;if(u=typeof(i=r),null===i||"object"!==u&&"function"!==u||!V(i.next))throw new TypeError(function(){var n,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(n=1;n<r.length;n++)t+="&arg[]="+encodeURIComponent(r[n]);return t}("0f849",r));return f=.5,c=1,o=function(n){return 0===arguments.length?void 0===a?null:a:(Vn(n,Rn,1,0),c+=Rn[1],(f*=Rn[0])>-.5&&f<.5&&(Vn(f,Rn,1,0),f=Rn[0],c+=Rn[1]),a=Mn(f,c))},l(t={},"next",(function(){var n;if(e)return{done:!0};if((n=r.next()).done)return e=!0,n;n="number"==typeof n.value?o(n.value):o(NaN);return{value:n,done:!1}})),l(t,"return",(function(n){if(e=!0,arguments.length)return{value:n,done:!0};return{done:!0}})),C&&V(r[C])&&l(t,C,(function(){return n(r[C]())})),t}}));
//# sourceMappingURL=browser.js.map
