function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");function a(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{setTimeout((()=>{n?r({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{amount:n,step:r,delay:o}=t.currentTarget.elements;if(o.value<0||r.value<0)return e(i).Notify.failure("Insert a positive value");if(n.value<=0)return e(i).Notify.failure("Insert an amount greater than 0!");const[...u]=t.currentTarget.elements,l={};u.filter((e=>"INPUT"==e.tagName)).forEach((e=>{l[e.name]=Number(e.value)})),function({amount:t,delay:n,step:r}){for(let o=1;o<=t;o+=1){a(o,n+r*(o-1)).then((({position:t,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}}(l),t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.291a537e.js.map
