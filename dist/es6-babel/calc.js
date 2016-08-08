'use strict';

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _operation.plus)(1);
var b = _operation2.default.muti(2);
// let b = muti(2);
console.log(a);
console.log(b);