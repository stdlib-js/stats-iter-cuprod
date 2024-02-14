// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(r){return"string"==typeof r}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,v,"e"),n=p.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var x=String.fromCharCode,S=isNaN,k=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,a,o,u,f,l,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(s(n=r[l]))u+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",f+=1}return u}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=U.exec(r);n;)(e=r.slice(i,U.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=U.lastIndex,n=U.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function $(r){return"string"==typeof r}function j(r){var e,t;if(!$(r))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return F.apply(null,e)}var _,N=Object.prototype,C=N.toString,O=N.__defineGetter__,R=N.__defineSetter__,W=N.__lookupGetter__,L=N.__lookupSetter__;_=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&R&&R.call(r,e,t.set),r};var G=_;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var H=/./;function P(r){return"boolean"==typeof r}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=M();function B(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&Y.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"",K=B()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[J],e=q(r,J);try{r[J]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[J]=t:delete r[J],n}:function(r){return z.call(r)},Q=Boolean,rr=Boolean.prototype.toString,er=B();function tr(r){return"object"==typeof r&&(r instanceof Q||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return P(r)||tr(r)}function ir(r){return"number"==typeof r}function ar(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function or(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+ar(i):ar(i)+r,n&&(r="-"+r)),r}Z(nr,"isPrimitive",P),Z(nr,"isObject",tr);var cr=String.prototype.toLowerCase,sr=String.prototype.toUpperCase;function ur(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!ir(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=or(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=or(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===sr.call(r.specifier)?sr.call(t):cr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function fr(r){return"string"==typeof r}var lr=Math.abs,pr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase,dr=String.prototype.replace,hr=/e\+(\d)$/,yr=/e-(\d)$/,wr=/^(\d+)$/,vr=/^(\d+)e/,br=/\.0$/,mr=/\.0*e/,Ar=/(\..*[^0])0*e/;function Er(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!ir(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":lr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=dr.call(t,Ar,"$1e"),t=dr.call(t,mr,"e"),t=dr.call(t,br,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=dr.call(t,hr,"e+0$1"),t=dr.call(t,yr,"e-0$1"),r.alternate&&(t=dr.call(t,wr,"$1."),t=dr.call(t,vr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===gr.call(r.specifier)?gr.call(t):pr.call(t)}function xr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Sr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+xr(n):xr(n)+r}var kr=String.fromCharCode,Ir=isNaN,Fr=Array.isArray;function Ur(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Tr(r){var e,t,n,i,a,o,c,s,u;if(!Fr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(fr(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Ur(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ir(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ir(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ur(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ir(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ir(a)?String(n.arg):kr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Er(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=or(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Sr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Vr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function jr(r){var e,t,n,i;for(t=[],i=0,n=Vr.exec(r);n;)(e=r.slice(i,Vr.lastIndex-n[0].length)).length&&t.push(e),t.push($r(n)),i=Vr.lastIndex,n=Vr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function _r(r){return"string"==typeof r}function Nr(r){var e,t;if(!_r(r))throw new TypeError(Nr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[jr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Tr.apply(null,e)}function Cr(){return new Function("return this;")()}var Or="object"==typeof self?self:null,Rr="object"==typeof window?window:null,Wr="object"==typeof globalThis?globalThis:null,Lr=function(r){if(arguments.length){if(!P(r))throw new TypeError(Nr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Cr()}if(Wr)return Wr;if(Or)return Or;if(Rr)return Rr;throw new Error("unexpected error. Unable to resolve global object.")}(),Gr=Lr.document&&Lr.document.childNodes,Zr=Int8Array,Hr=M(),Pr=Object.prototype.toString,Mr="function"==typeof Symbol?Symbol:void 0,Xr="function"==typeof Mr?Mr.toStringTag:"",Br=Hr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Pr.call(r);t=r[Xr],e=q(r,Xr);try{r[Xr]=void 0}catch(e){return Pr.call(r)}return n=Pr.call(r),e?r[Xr]=t:delete r[Xr],n}:function(r){return Pr.call(r)};function zr(){return/^\s*function\s*([^(]*)/i}var Yr=/^\s*function\s*([^(]*)/i;Z(zr,"REGEXP",Yr);var qr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Br(r)};function Dr(r){return"number"==typeof r}function Jr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Kr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Jr(i):Jr(i)+r,n&&(r="-"+r)),r}var Qr=String.prototype.toLowerCase,re=String.prototype.toUpperCase;function ee(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Dr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Kr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Kr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===re.call(r.specifier)?re.call(t):Qr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function te(r){return"string"==typeof r}var ne=Math.abs,ie=String.prototype.toLowerCase,ae=String.prototype.toUpperCase,oe=String.prototype.replace,ce=/e\+(\d)$/,se=/e-(\d)$/,ue=/^(\d+)$/,fe=/^(\d+)e/,le=/\.0$/,pe=/\.0*e/,ge=/(\..*[^0])0*e/;function de(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Dr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ne(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=oe.call(t,ge,"$1e"),t=oe.call(t,pe,"e"),t=oe.call(t,le,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=oe.call(t,ce,"e+0$1"),t=oe.call(t,se,"e-0$1"),r.alternate&&(t=oe.call(t,ue,"$1."),t=oe.call(t,fe,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ae.call(r.specifier)?ae.call(t):ie.call(t)}function he(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ye(r,e,t){var n=e-r.length;return n<0?r:r=t?r+he(n):he(n)+r}var we=String.fromCharCode,ve=isNaN,be=Array.isArray;function me(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ae(r){var e,t,n,i,a,o,c,s,u;if(!be(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(te(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=me(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ve(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ve(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ee(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!ve(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ve(a)?String(n.arg):we(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=de(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Kr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ye(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Ee=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function xe(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Se(r){var e,t,n,i;for(t=[],i=0,n=Ee.exec(r);n;)(e=r.slice(i,Ee.lastIndex-n[0].length)).length&&t.push(e),t.push(xe(n)),i=Ee.lastIndex,n=Ee.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function ke(r){return"string"==typeof r}function Ie(r){var e,t;if(!ke(r))throw new TypeError(Ie("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Se(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Ae.apply(null,e)}function Fe(r){return null!==r&&"object"==typeof r}function Ue(r){var e,t,n,i;if(("Object"===(t=Br(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Yr.exec(n.toString()))return e[1]}return Fe(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(Fe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Ie("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!qr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Fe));var Te="function"==typeof H||"object"==typeof Zr||"function"==typeof Gr?function(r){return Ue(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Ue(r).toLowerCase():e};function Ve(r){return"function"===Te(r)}var $e="function"==typeof Symbol?Symbol:void 0,je="function"==typeof $e&&"symbol"==typeof $e("foo")&&q($e,"iterator")&&"symbol"==typeof $e.iterator?Symbol.iterator:null;function _e(r){return r!=r}var Ne=Number.POSITIVE_INFINITY,Ce=Number.NEGATIVE_INFINITY;function Oe(r){return r===Ne||r===Ce}function Re(r,e,t,n){return _e(r)||Oe(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Z((function(r){return Re(r,[0,0],1,0)}),"assign",Re);var We,Le=M(),Ge=Object.prototype.toString,Ze="function"==typeof Symbol?Symbol:void 0,He="function"==typeof Ze?Ze.toStringTag:"",Pe=Le&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Ge.call(r);t=r[He],e=q(r,He);try{r[He]=void 0}catch(e){return Ge.call(r)}return n=Ge.call(r),e?r[He]=t:delete r[He],n}:function(r){return Ge.call(r)},Me="function"==typeof Uint32Array,Xe="function"==typeof Uint32Array?Uint32Array:null,Be="function"==typeof Uint32Array?Uint32Array:void 0;We=function(){var r,e,t;if("function"!=typeof Xe)return!1;try{e=new Xe(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Me&&t instanceof Uint32Array||"[object Uint32Array]"===Pe(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Be:function(){throw new Error("not implemented")};var ze,Ye=We,qe="function"==typeof Float64Array,De="function"==typeof Float64Array?Float64Array:null,Je="function"==typeof Float64Array?Float64Array:void 0;ze=function(){var r,e,t;if("function"!=typeof De)return!1;try{e=new De([1,3.14,-3.14,NaN]),t=e,r=(qe&&t instanceof Float64Array||"[object Float64Array]"===Pe(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Je:function(){throw new Error("not implemented")};var Ke,Qe=ze,rt="function"==typeof Uint8Array,et="function"==typeof Uint8Array?Uint8Array:null,tt="function"==typeof Uint8Array?Uint8Array:void 0;Ke=function(){var r,e,t;if("function"!=typeof et)return!1;try{e=new et(e=[1,3.14,-3.14,256,257]),t=e,r=(rt&&t instanceof Uint8Array||"[object Uint8Array]"===Pe(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tt:function(){throw new Error("not implemented")};var nt,it=Ke,at="function"==typeof Uint16Array,ot="function"==typeof Uint16Array?Uint16Array:null,ct="function"==typeof Uint16Array?Uint16Array:void 0;nt=function(){var r,e,t;if("function"!=typeof ot)return!1;try{e=new ot(e=[1,3.14,-3.14,65536,65537]),t=e,r=(at&&t instanceof Uint16Array||"[object Uint16Array]"===Pe(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ct:function(){throw new Error("not implemented")};var st,ut={uint16:nt,uint8:it};(st=new ut.uint16(1))[0]=4660;var ft,lt,pt=52===new ut.uint8(st.buffer)[0],gt=!0===pt?1:0,dt=new Qe(1),ht=new Ye(dt.buffer);function yt(r){var e=function(r){return dt[0]=r,ht[gt]}(r);return(e=(2146435072&e)>>>20)-1023|0}!0===pt?(ft=1,lt=0):(ft=0,lt=1);var wt,vt,bt={HIGH:ft,LOW:lt},mt=new Qe(1),At=new Ye(mt.buffer),Et=bt.HIGH,xt=bt.LOW;function St(r,e,t,n){return mt[0]=r,e[n]=At[Et],e[n+t]=At[xt],e}function kt(r){return St(r,[0,0],1,0)}Z(kt,"assign",St),!0===pt?(wt=1,vt=0):(wt=0,vt=1);var It={HIGH:wt,LOW:vt},Ft=new Qe(1),Ut=new Ye(Ft.buffer),Tt=It.HIGH,Vt=It.LOW,$t=[0,0],jt=[0,0];function _t(r,e,t,n){var i,a;return 0===r||_e(r)||Oe(r)?(e[n]=r,e[n+t]=0,e):(Re(r,$t,1,0),a=yt($t[0])+$t[1]+1,kt.assign($t[0],jt,1,0),i=jt[0],i&=2148532223,r=function(r,e){return Ut[Tt]=r,Ut[Vt]=e,Ft[0]}(i|=1071644672,jt[1]),e[n]=r,e[n+t]=a,e)}Z((function(r){return _t(r,[0,0],1,0)}),"assign",_t);var Nt=Number.POSITIVE_INFINITY,Ct=Number.NEGATIVE_INFINITY;function Ot(r){return r!=r}function Rt(r){return r===Nt||r===Ct}var Wt,Lt=M(),Gt=Object.prototype.toString,Zt="function"==typeof Symbol?Symbol:void 0,Ht="function"==typeof Zt?Zt.toStringTag:"",Pt=Lt&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Gt.call(r);t=r[Ht],e=q(r,Ht);try{r[Ht]=void 0}catch(e){return Gt.call(r)}return n=Gt.call(r),e?r[Ht]=t:delete r[Ht],n}:function(r){return Gt.call(r)},Mt="function"==typeof Uint32Array,Xt="function"==typeof Uint32Array?Uint32Array:null,Bt="function"==typeof Uint32Array?Uint32Array:void 0;Wt=function(){var r,e,t;if("function"!=typeof Xt)return!1;try{e=new Xt(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Mt&&t instanceof Uint32Array||"[object Uint32Array]"===Pt(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Bt:function(){throw new Error("not implemented")};var zt,Yt=Wt,qt="function"==typeof Float64Array,Dt="function"==typeof Float64Array?Float64Array:null,Jt="function"==typeof Float64Array?Float64Array:void 0;zt=function(){var r,e,t;if("function"!=typeof Dt)return!1;try{e=new Dt([1,3.14,-3.14,NaN]),t=e,r=(qt&&t instanceof Float64Array||"[object Float64Array]"===Pt(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Jt:function(){throw new Error("not implemented")};var Kt,Qt=zt,rn="function"==typeof Uint8Array,en="function"==typeof Uint8Array?Uint8Array:null,tn="function"==typeof Uint8Array?Uint8Array:void 0;Kt=function(){var r,e,t;if("function"!=typeof en)return!1;try{e=new en(e=[1,3.14,-3.14,256,257]),t=e,r=(rn&&t instanceof Uint8Array||"[object Uint8Array]"===Pt(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tn:function(){throw new Error("not implemented")};var nn,an=Kt,on="function"==typeof Uint16Array,cn="function"==typeof Uint16Array?Uint16Array:null,sn="function"==typeof Uint16Array?Uint16Array:void 0;nn=function(){var r,e,t;if("function"!=typeof cn)return!1;try{e=new cn(e=[1,3.14,-3.14,65536,65537]),t=e,r=(on&&t instanceof Uint16Array||"[object Uint16Array]"===Pt(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sn:function(){throw new Error("not implemented")};var un,fn={uint16:nn,uint8:an};un=function(){var r;return(r=new fn.uint16(1))[0]=4660,52===new fn.uint8(r.buffer)[0]}();var ln,pn,gn=un;!0===gn?(ln=1,pn=0):(ln=0,pn=1);var dn={HIGH:ln,LOW:pn},hn=new Qt(1),yn=new Yt(hn.buffer),wn=dn.HIGH,vn=dn.LOW;function bn(r,e,t,n){return hn[0]=r,e[n]=yn[wn],e[n+t]=yn[vn],e}function mn(r){return bn(r,[0,0],1,0)}Z(mn,"assign",bn);var An,En,xn=!0===gn?1:0,Sn=new Qt(1),kn=new Yt(Sn.buffer);function In(r){return Sn[0]=r,kn[xn]}!0===gn?(An=1,En=0):(An=0,En=1);var Fn={HIGH:An,LOW:En},Un=new Qt(1),Tn=new Yt(Un.buffer),Vn=Fn.HIGH,$n=Fn.LOW;function jn(r,e){return Tn[Vn]=r,Tn[$n]=e,Un[0]}var _n=[0,0];function Nn(r,e,t,n){return Ot(r)||Rt(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Z((function(r){return Nn(r,[0,0],1,0)}),"assign",Nn);var Cn=[0,0],On=[0,0];function Rn(r,e){var t,n,i,a,o,c;return 0===e||0===r||Ot(r)||Rt(r)?r:(Nn(r,Cn,1,0),e+=Cn[1],e+=function(r){var e=In(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Cn[0]),e<-1074?(i=0,a=r,mn.assign(i,_n,1,0),o=_n[0],o&=2147483647,c=In(a),jn(o|=c&=2147483648,_n[1])):e>1023?r<0?Ct:Nt:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,mn.assign(r,On,1,0),t=On[0],t&=2148532223,n*jn(t|=e+1023<<20,On[1])))}var Wn=[0,0];function Ln(r){return"number"==typeof r}function Gn(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Zn(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Gn(i):Gn(i)+r,n&&(r="-"+r)),r}var Hn=String.prototype.toLowerCase,Pn=String.prototype.toUpperCase;function Mn(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Ln(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Zn(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Zn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Pn.call(r.specifier)?Pn.call(t):Hn.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Xn(r){return"string"==typeof r}var Bn=Math.abs,zn=String.prototype.toLowerCase,Yn=String.prototype.toUpperCase,qn=String.prototype.replace,Dn=/e\+(\d)$/,Jn=/e-(\d)$/,Kn=/^(\d+)$/,Qn=/^(\d+)e/,ri=/\.0$/,ei=/\.0*e/,ti=/(\..*[^0])0*e/;function ni(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Ln(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Bn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=qn.call(t,ti,"$1e"),t=qn.call(t,ei,"e"),t=qn.call(t,ri,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=qn.call(t,Dn,"e+0$1"),t=qn.call(t,Jn,"e-0$1"),r.alternate&&(t=qn.call(t,Kn,"$1."),t=qn.call(t,Qn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Yn.call(r.specifier)?Yn.call(t):zn.call(t)}function ii(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ai(r,e,t){var n=e-r.length;return n<0?r:r=t?r+ii(n):ii(n)+r}var oi=String.fromCharCode,ci=isNaN,si=Array.isArray;function ui(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function fi(r){var e,t,n,i,a,o,c,s,u;if(!si(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Xn(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=ui(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ci(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ci(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Mn(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!ci(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ci(a)?String(n.arg):oi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ni(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Zn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ai(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var li=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function pi(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function gi(r){var e,t,n,i;for(t=[],i=0,n=li.exec(r);n;)(e=r.slice(i,li.lastIndex-n[0].length)).length&&t.push(e),t.push(pi(n)),i=li.lastIndex,n=li.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function di(r){return"string"==typeof r}function hi(r){var e,t,n;if(!di(r))throw new TypeError(hi("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=gi(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return fi.apply(null,t)}return function r(e){var t,n,i,a,o,c,s,u;if(o=typeof(a=e),null===a||"object"!==o&&"function"!==o||!Ve(a.next))throw new TypeError(hi("invalid argument. Must provide an iterator. Value: `%s`.",e));return c=.5,u=1,i=function(r){return 0===arguments.length?void 0===s?null:s:(_t(r,Wn,1,0),u+=Wn[1],(c*=Wn[0])>-.5&&c<.5&&(_t(c,Wn,1,0),c=Wn[0],u+=Wn[1]),s=Rn(c,u))},Z(t={},"next",(function(){var r;return n?{done:!0}:(r=e.next()).done?(n=!0,r):{value:r="number"==typeof r.value?i(r.value):i(NaN),done:!1}})),Z(t,"return",(function(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}})),je&&Ve(e[je])&&Z(t,je,(function(){return r(e[je]())})),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itercuprod=e();
//# sourceMappingURL=browser.js.map
