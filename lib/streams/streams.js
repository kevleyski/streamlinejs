/*** Generated by streamline 0.1.22 - DO NOT EDIT ***/

"use strict";
var __global = typeof global !== 'undefined' ? global : window;
function copy(src, dst) {
  Object.keys(src).forEach(function __1(key) {
    dst[key] = src[key];
  });
};
if (((typeof process === "object") && (typeof process.cwd === "function"))) {
  copy(require(("./server/" + "streams")), exports);
}
 else {
  copy(require("./client/streams"), exports);
}
;