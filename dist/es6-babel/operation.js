'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function plus(a) {
  console.log('plus a:' + a);
  return ++a;
}
function muti(a) {
  console.log('muti a:' + a);
  return a * a;
}
exports.plus = plus;
exports.muti = muti;
exports.default = {
  plus: plus,
  muti: muti
};