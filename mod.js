// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,E=isNaN,j=Array.isArray;function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,t,n,o,a,c,f,l,s,p,y,d,g;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return U.apply(null,e)}var k,F=Object.prototype,O=F.toString,V=F.__defineGetter__,N=F.__defineSetter__,C=F.__lookupGetter__,G=F.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var L=k;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var P=/./;function H(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return R&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;function M(r,e){return null!=r&&Z.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=W()?function(r){var e,t,n;if(null==r)return B.call(r);t=r[Y],e=M(r,Y);try{r[Y]=void 0}catch(e){return B.call(r)}return n=B.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return B.call(r)},K=Boolean,q=Boolean.prototype.toString;var D=W();function J(r){return"object"==typeof r&&(r instanceof K||(D?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||J(r)}$(Q,"isPrimitive",H),$(Q,"isObject",J);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof tr?tr:null,ir="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(rr)return rr;if(er)return er;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;$(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var e,t,n,i;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return sr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(sr));var yr="function"==typeof P||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function dr(r){return"function"===yr(r)}var gr="function"==typeof X&&"symbol"==typeof X("foo")&&M(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;function vr(r){return r!=r}var br=Number.POSITIVE_INFINITY,hr=Number.NEGATIVE_INFINITY;function wr(r){return r===br||r===hr}var mr=22250738585072014e-324;var Ar=4503599627370496;function Er(r,e,t,n){return vr(r)||wr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<mr?(e[n]=r*Ar,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Er(r,[0,0],1,0)}),"assign",Er);var jr="function"==typeof Uint32Array;var _r="function"==typeof Uint32Array?Uint32Array:null;var Ur,Sr="function"==typeof Uint32Array?Uint32Array:void 0;Ur=function(){var r,e,t;if("function"!=typeof _r)return!1;try{e=new _r(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(jr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var xr=Ur,Ir="function"==typeof Float64Array;var Tr="function"==typeof Float64Array?Float64Array:null;var kr,Fr="function"==typeof Float64Array?Float64Array:void 0;kr=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr([1,3.14,-3.14,NaN]),t=e,r=(Ir&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Or=kr,Vr="function"==typeof Uint8Array;var Nr="function"==typeof Uint8Array?Uint8Array:null;var Cr,Gr="function"==typeof Uint8Array?Uint8Array:void 0;Cr=function(){var r,e,t;if("function"!=typeof Nr)return!1;try{e=new Nr(e=[1,3.14,-3.14,256,257]),t=e,r=(Vr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr=Cr,$r="function"==typeof Uint16Array;var Pr="function"==typeof Uint16Array?Uint16Array:null;var Hr,Rr="function"==typeof Uint16Array?Uint16Array:void 0;Hr=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr(e=[1,3.14,-3.14,65536,65537]),t=e,r=($r&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Wr,Br={uint16:Hr,uint8:Lr};(Wr=new Br.uint16(1))[0]=4660;var Zr=52===new Br.uint8(Wr.buffer)[0],Mr=!0===Zr?1:0,Xr=new Or(1),Yr=new xr(Xr.buffer);function zr(r){return Xr[0]=r,Yr[Mr]}var Kr,qr,Dr=2146435072,Jr=1023;function Qr(r){var e=zr(r);return(e=(e&Dr)>>>20)-Jr|0}!0===Zr?(Kr=1,qr=0):(Kr=0,qr=1);var re,ee,te={HIGH:Kr,LOW:qr},ne=new Or(1),ie=new xr(ne.buffer),oe=te.HIGH,ae=te.LOW;function ue(r,e,t,n){return ne[0]=r,e[n]=ie[oe],e[n+t]=ie[ae],e}function ce(r){return ue(r,[0,0],1,0)}$(ce,"assign",ue),!0===Zr?(re=1,ee=0):(re=0,ee=1);var fe={HIGH:re,LOW:ee},le=new Or(1),se=new xr(le.buffer),pe=fe.HIGH,ye=fe.LOW;function de(r,e){return se[pe]=r,se[ye]=e,le[0]}var ge=2148532223,ve=1071644672,be=[0,0],he=[0,0];function we(r,e,t,n){var i,o;return 0===r||vr(r)||wr(r)?(e[n]=r,e[n+t]=0,e):(Er(r,be,1,0),o=Qr(be[0])+be[1]+1,ce.assign(be[0],he,1,0),i=he[0],i&=ge,r=de(i|=ve,he[1]),e[n]=r,e[n+t]=o,e)}$((function(r){return we(r,[0,0],1,0)}),"assign",we);var me=1023,Ae=-1023,Ee=-1074,je=2147483648,_e=2147483647,Ue=[0,0];var Se=2220446049250313e-31,xe=2148532223,Ie=[0,0],Te=[0,0];function ke(r,e){var t,n,i,o,a,u;return 0===e||0===r||vr(r)||wr(r)?r:(Er(r,Ie,1,0),r=Ie[0],e+=Ie[1],(e+=Qr(r))<Ee?(i=0,o=r,ce.assign(i,Ue,1,0),a=Ue[0],a&=_e,u=zr(o),de(a|=u&=je,Ue[1])):e>me?r<0?hr:br:(e<=Ae?(e+=52,n=Se):n=1,ce.assign(r,Te,1,0),t=Te[0],t&=xe,n*de(t|=e+Jr<<20,Te[1])))}var Fe=[0,0];function Oe(r){var e,t,n,i,o,a,u,c;if(o=typeof(i=r),null===i||"object"!==o&&"function"!==o||!dr(i.next))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1KT3w",r));return a=.5,c=1,n=function(r){return 0===arguments.length?void 0===u?null:u:(we(r,Fe,1,0),a*=Fe[0],c+=Fe[1],a>-.5&&a<.5&&(we(a,Fe,1,0),a=Fe[0],c+=Fe[1]),u=ke(a,c))},$(e={},"next",(function(){var e;if(t)return{done:!0};if((e=r.next()).done)return t=!0,e;e="number"==typeof e.value?n(e.value):n(NaN);return{value:e,done:!1}})),$(e,"return",(function(r){if(t=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),gr&&dr(r[gr])&&$(e,gr,(function(){return Oe(r[gr]())})),e}export{Oe as default};
//# sourceMappingURL=mod.js.map