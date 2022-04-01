// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var l=function(r,e,t){var n,l,s,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),s="get"in t,v="set"in t,l&&(s||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},s=n,v=l,p=t()?s:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},y=g,d=/./;var h=function(r){return"boolean"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return m&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},A=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&A.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",O=P,x=_,S=w;var T=j,V=function(r){var e,t,n;if(null==r)return S.call(r);t=r[x],e=O(r,x);try{r[x]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[x]=t:delete r[x],n},U=b()?V:T,I=Boolean.prototype.toString;var k=U,F=function(r){try{return I.call(r),!0}catch(r){return!1}},N=b();var R=function(r){return"object"==typeof r&&(r instanceof Boolean||(N?F(r):"[object Boolean]"===k(r)))},$=h,M=R;var G=y,C=function(r){return $(r)||M(r)},L=R;G(C,"isPrimitive",h),G(C,"isObject",L);var H="object"==typeof self?self:null,W="object"==typeof window?window:null,B=C.isPrimitive,Z=function(){return new Function("return this;")()},X=H,z=W,Y=r(Object.freeze({__proto__:null}));var D=function(r){if(arguments.length){if(!B(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Z()}if(X)return X;if(z)return z;if(Y)return Y;throw new Error("unexpected error. Unable to resolve global object.")},q=D(),J=q.document&&q.document.childNodes,K=Int8Array,Q=d,rr=J,er=K;var tr=function(){return"function"==typeof Q||"object"==typeof er||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},ir=nr;y(ir,"REGEXP",nr());var ar=ir,or=U;var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};var cr=function(r){return null!==r&&"object"==typeof r};y(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(cr));var fr=cr;var lr=U,sr=ar.REGEXP,vr=function(r){return fr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var pr=function(r){var e,t,n;if(("Object"===(t=lr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return vr(r)?"Buffer":t},gr=pr;var yr=pr;var dr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e},hr=function(r){return yr(r).toLowerCase()},mr=tr()?hr:dr;var br=function(r){return"function"===mr(r)},wr=br;var Er=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&wr(r.next)},jr=P;var Ar=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&jr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var Pr=function(r){return r!=r},_r=Number.POSITIVE_INFINITY,Or=Number,xr=Or.NEGATIVE_INFINITY,Sr=_r,Tr=xr;var Vr=function(r){return r===Sr||r===Tr};var Ur=function(r){return Math.abs(r)},Ir=Vr,kr=Pr,Fr=Ur;var Nr=function(r,e){return kr(e)||Ir(e)?(r[0]=e,r[1]=0,r):0!==e&&Fr(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var Rr=function(r,e){return 1===arguments.length?Nr([0,0],r):Nr(r,e)},$r=U,Mr="function"==typeof Uint32Array;var Gr="function"==typeof Uint32Array?Uint32Array:null,Cr=function(r){return Mr&&r instanceof Uint32Array||"[object Uint32Array]"===$r(r)},Lr=Gr;var Hr=function(){var r,e;if("function"!=typeof Lr)return!1;try{e=new Lr(e=[1,3.14,-3.14,4294967296,4294967297]),r=Cr(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Wr="function"==typeof Uint32Array?Uint32Array:void 0,Br=function(){throw new Error("not implemented")},Zr=Hr()?Wr:Br,Xr=U,zr="function"==typeof Float64Array;var Yr="function"==typeof Float64Array?Float64Array:null,Dr=function(r){return zr&&r instanceof Float64Array||"[object Float64Array]"===Xr(r)},qr=Yr;var Jr=function(){var r,e;if("function"!=typeof qr)return!1;try{e=new qr([1,3.14,-3.14,NaN]),r=Dr(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var Kr="function"==typeof Float64Array?Float64Array:void 0,Qr=function(){throw new Error("not implemented")},re=Jr()?Kr:Qr,ee=U,te="function"==typeof Uint8Array;var ne="function"==typeof Uint8Array?Uint8Array:null,ie=function(r){return te&&r instanceof Uint8Array||"[object Uint8Array]"===ee(r)},ae=ne;var oe=function(){var r,e;if("function"!=typeof ae)return!1;try{e=new ae(e=[1,3.14,-3.14,256,257]),r=ie(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var ue="function"==typeof Uint8Array?Uint8Array:void 0,ce=function(){throw new Error("not implemented")},fe=oe()?ue:ce,le=U,se="function"==typeof Uint16Array;var ve="function"==typeof Uint16Array?Uint16Array:null,pe=function(r){return se&&r instanceof Uint16Array||"[object Uint16Array]"===le(r)},ge=ve;var ye=function(){var r,e;if("function"!=typeof ge)return!1;try{e=new ge(e=[1,3.14,-3.14,65536,65537]),r=pe(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var de,he="function"==typeof Uint16Array?Uint16Array:void 0,me=function(){throw new Error("not implemented")},be={uint16:ye()?he:me,uint8:fe};(de=new be.uint16(1))[0]=4660;var we=52===new be.uint8(de.buffer)[0],Ee=Zr,je=!0===we?1:0,Ae=new re(1),Pe=new Ee(Ae.buffer);var _e=function(r){return Ae[0]=r,Pe[je]},Oe=_e;var xe,Se,Te=function(r){var e=Oe(r);return(e=(2146435072&e)>>>20)-1023|0},Ve=Te;!0===we?(xe=1,Se=0):(xe=0,Se=1);var Ue=Zr,Ie={HIGH:xe,LOW:Se},ke=new re(1),Fe=new Ue(ke.buffer),Ne=Ie.HIGH,Re=Ie.LOW;var $e=function(r,e){return ke[0]=e,r[0]=Fe[Ne],r[1]=Fe[Re],r};var Me,Ge,Ce=function(r,e){return 1===arguments.length?$e([0,0],r):$e(r,e)};!0===we?(Me=1,Ge=0):(Me=0,Ge=1);var Le=Zr,He={HIGH:Me,LOW:Ge},We=new re(1),Be=new Le(We.buffer),Ze=He.HIGH,Xe=He.LOW;var ze=function(r,e){return Be[Ze]=r,Be[Xe]=e,We[0]},Ye=Pr,De=Vr,qe=Rr,Je=Ve,Ke=Ce,Qe=ze,rt=[0,0],et=[0,0];var tt=function(r,e){var t,n;return 0===e||Ye(e)||De(e)?(r[0]=e,r[1]=0,r):(qe(rt,e),n=Je(rt[0])+rt[1]+1,Ke(et,rt[0]),t=et[0],t&=2148532223,e=Qe(t|=1071644672,et[1]),r[0]=e,r[1]=n,r)},nt=tt;var it=Ce,at=_e,ot=ze,ut=[0,0];var ct=_r,ft=xr,lt=Pr,st=Vr,vt=function(r,e){var t,n;return it(ut,r),t=ut[0],t&=2147483647,n=at(e),ot(t|=n&=2147483648,ut[1])},pt=Rr,gt=Ve,yt=Ce,dt=ze,ht=[0,0],mt=[0,0];var bt=function(r,e){var t,n;return 0===e||0===r||lt(r)||st(r)?r:(pt(ht,r),e+=ht[1],(e+=gt(r=ht[0]))<-1074?vt(0,r):e>1023?r<0?ft:ct:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,yt(mt,r),t=mt[0],t&=2148532223,n*dt(t|=e+1023<<20,mt[1])))},wt=function(r,e){return 1===arguments.length?nt([0,0],r):nt(r,e)},Et=bt,jt=[0,0];var At=function(){var r,e,t;return r=.5,t=1,function(n){if(0===arguments.length)return void 0===e?null:e;wt(jt,n),t+=jt[1],(r*=jt[0])>-.5&&r<.5&&(wt(jt,r),r=jt[0],t+=jt[1]);return e=Et(r,t)}};var Pt=function(r){return"string"==typeof r},_t=String.prototype.valueOf;var Ot=U,xt=function(r){try{return _t.call(r),!0}catch(r){return!1}},St=b();var Tt=function(r){return"object"==typeof r&&(r instanceof String||(St?xt(r):"[object String]"===Ot(r)))},Vt=Pt,Ut=Tt;var It=y,kt=function(r){return Vt(r)||Ut(r)},Ft=Tt;It(kt,"isPrimitive",Pt),It(kt,"isObject",Ft);var Nt=kt,Rt=Math.floor;var $t=function(r){return Rt(r)===r},Mt=$t;var Gt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Mt(r.length)&&r.length>=0&&r.length<=9007199254740991};var Ct=function(r){return"number"==typeof r},Lt=Or.prototype.toString;var Ht=U,Wt=Or,Bt=function(r){try{return Lt.call(r),!0}catch(r){return!1}},Zt=b();var Xt=function(r){return"object"==typeof r&&(r instanceof Wt||(Zt?Bt(r):"[object Number]"===Ht(r)))},zt=Ct,Yt=Xt;var Dt=y,qt=function(r){return zt(r)||Yt(r)},Jt=Xt;Dt(qt,"isPrimitive",Ct),Dt(qt,"isObject",Jt);var Kt=qt,Qt=_r,rn=xr,en=$t;var tn=function(r){return r<Qt&&r>rn&&en(r)},nn=Kt.isPrimitive,an=tn;var on=function(r){return nn(r)&&an(r)},un=Kt.isObject,cn=tn;var fn=function(r){return un(r)&&cn(r.valueOf())},ln=on,sn=fn;var vn=y,pn=function(r){return ln(r)||sn(r)},gn=fn;vn(pn,"isPrimitive",on),vn(pn,"isObject",gn);var yn=pn,dn=Kt.isPrimitive,hn=Pr;var mn=function(r){return dn(r)&&hn(r)},bn=Kt.isObject,wn=Pr;var En=function(r){return bn(r)&&wn(r.valueOf())},jn=mn,An=En;var Pn=y,_n=function(r){return jn(r)||An(r)},On=En;Pn(_n,"isPrimitive",mn),Pn(_n,"isObject",On);var xn=Gt,Sn=yn.isPrimitive,Tn=Nt.isPrimitive,Vn=_n.isPrimitive;var Un=function(r,e,t){var n,i,a;if(!xn(r)&&!Tn(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Sn(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Tn(r)){if(!Tn(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Vn(e)){for(a=i;a<n;a++)if(Vn(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},In=Nt.isPrimitive;var kn=function(r){if(!In(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Fn=Nt.isPrimitive;var Nn=function(r){if(!Fn(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Rn=kn,$n=Nn,Mn=Nt.isPrimitive;var Gn=function(r){return Mn(r)&&r===$n(r)&&r!==Rn(r)},Cn=_r,Ln=xr;var Hn=function(r){return r==r&&r>Ln&&r<Cn},Wn=yn.isPrimitive;var Bn=function(r){return Wn(r)&&r>=0},Zn=yn.isObject;var Xn=function(r){return Zn(r)&&r.valueOf()>=0},zn=Bn,Yn=Xn;var Dn=y,qn=function(r){return zn(r)||Yn(r)},Jn=Xn;Dn(qn,"isPrimitive",Bn),Dn(qn,"isObject",Jn);var Kn=qn.isPrimitive,Qn=Nt.isPrimitive;var ri=function(r,e){var t,n;if(!Qn(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Kn(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ei=yn.isPrimitive,ti=Nt.isPrimitive;var ni=ri,ii=function(r,e,t){var n,i;if(!ti(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ti(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ei(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var ai=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ii(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ni("0",i):ni("0",i)+r,n&&(r="-"+r)),r},oi=Gn,ui=Nn,ci=kn,fi=Hn,li=Kt.isPrimitive,si=ai;var vi=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!fi(n)){if(!li(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=si(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=si(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=oi(r.specifier)?ui(t):ci(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},pi=Nt.isPrimitive,gi=/[-\/\\^$*+?.()|[\]{}]/g;var yi=function(r){var e,t;if(!pi(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(gi,"\\$&"):(e=(e=r.substring(1,t)).replace(gi,"\\$&"),r=r[0]+e+r.substring(t))},di=RegExp.prototype.exec;var hi=U,mi=function(r){try{return di.call(r),!0}catch(r){return!1}},bi=b();var wi=yi,Ei=br,ji=Nt.isPrimitive,Ai=function(r){return"object"==typeof r&&(r instanceof RegExp||(bi?mi(r):"[object RegExp]"===hi(r)))};var Pi=Gn,_i=Nn,Oi=kn,xi=function(r,e,t){if(!ji(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(ji(e))e=wi(e),e=new RegExp(e,"g");else if(!Ai(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!ji(t)&&!Ei(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Si=Hn,Ti=Kt.isPrimitive,Vi=Ur,Ui=/e\+(\d)$/,Ii=/e-(\d)$/,ki=/^(\d+)$/,Fi=/^(\d+)e/,Ni=/\.0$/,Ri=/\.0*e/,$i=/(\..*[^0])0*e/;var Mi=function(r){var e,t,n=parseFloat(r.arg);if(!Si(n)){if(!Ti(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Vi(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=xi(t,$i,"$1e"),t=xi(t,Ri,"e"),t=xi(t,Ni,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=xi(t,Ui,"e+0$1"),t=xi(t,Ii,"e-0$1"),r.alternate&&(t=xi(t,ki,"$1."),t=xi(t,Fi,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Pi(r.specifier)?_i(t):Oi(t)},Gi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Ci=ri;var Li=Nt.isPrimitive,Hi=Un,Wi=Pr,Bi=vi,Zi=Mi,Xi=function(r){var e,t,n,i,a;for(e=0,n=[],a=Gi.exec(r);a;)(t=r.slice(e,Gi.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Gi.lastIndex,a=Gi.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},zi=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Ci(" ",n):Ci(" ",n)+r},Yi=ai,Di=String.fromCharCode;var qi=y,Ji=Er,Ki=br,Qi=Ar,ra=At,ea=function(r){var e,t,n,i,a,o,u,c,f;if(!Li(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Xi(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Li(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Hi(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Wi(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Wi(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Bi(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Wi(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Wi(a)?String(n.arg):Di(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Zi(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Yi(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=zi(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var ta=function r(e){var t,n,i;if(!Ji(e))throw new TypeError(ea("invalid argument. Must provide an iterator. Value: `%s`.",e));return i=ra(),qi(t={},"next",(function(){var r;if(n)return{done:!0};if((r=e.next()).done)return n=!0,r;r="number"==typeof r.value?i(r.value):i(NaN);return{value:r,done:!1}})),qi(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Qi&&Ki(e[Qi])&&qi(t,Qi,(function(){return r(e[Qi]())})),t},na=ta;export{na as default};
//# sourceMappingURL=mod.js.map
