// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-prod@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function o(d){var m,l,u;if(!t(d))throw new TypeError(i("1KT3w",d));return u=s(),e(m={},"next",(function(){var e;if(l)return{done:!0};if((e=d.next()).done)return l=!0,e;e="number"==typeof e.value?u(e.value):u(NaN);return{value:e,done:!1}})),e(m,"return",(function(e){if(l=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&r(d[n])&&e(m,n,(function(){return o(d[n]())})),m}export{o as default};
//# sourceMappingURL=index.mjs.map
