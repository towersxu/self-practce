"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function addAll() {
  var c = 1000;
  console.log(c);
  return Array.from(arguments).reduce(function (a, b) {
    return a + b;
  });
}
exports.addAll = addAll;
//# sourceMappingURL=array.js.map