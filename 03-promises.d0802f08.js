function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("eWCmQ");function i(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{amount:n,delay:o,step:r}=t.currentTarget.elements;(function({delayVal:t,stepVal:n,amountVal:o}){for(let r=1;r<=o;r+=1){i(r,t+n*(r-1)).then((({position:t,delay:n})=>{e(l).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}})({delayVal:Number(o.value),stepVal:Number(r.value),amountVal:Number(n.value)}),t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.d0802f08.js.map
