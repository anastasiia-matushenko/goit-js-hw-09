!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return a.default(e)||l.default(e)||s.default(e,i)||f.default()};var a=c(o("8slrw")),l=c(o("7AJDX")),f=c(o("ifqQW")),s=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var d=o("iU1Pc");function p(e,t){var r=Math.random()>.3;return new Promise((function(n,o){setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var r=t.currentTarget.elements,n=r.amount,o=r.step;if(r.delay.value<0||o.value<0)return e(d).Notify.failure("Insert a positive value");if(n.value<=0)return e(d).Notify.failure("Insert an amount greater than 0!");var i=e(u)(t.currentTarget.elements).slice(0),a={};i.filter((function(e){return"INPUT"==e.tagName})).forEach((function(e){a[e.name]=Number(e.value)})),function(t){for(var r=t.amount,n=t.delay,o=t.step,u=1;u<=r;u+=1){p(u,n+o*(u-1)).then((function(t){var r=t.position,n=t.delay;e(d).Notify.success("Fulfilled promise ".concat(r," in ").concat(n,"ms"))})).catch((function(t){var r=t.position,n=t.delay;e(d).Notify.failure("Rejected promise ".concat(r," in ").concat(n,"ms"))}))}}(a),t.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.e95269bb.js.map
