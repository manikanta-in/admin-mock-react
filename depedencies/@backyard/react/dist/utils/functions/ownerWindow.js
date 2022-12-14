"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ownerWindow = exports["default"] = void 0;

var _ownerDocument = _interopRequireDefault(require("./ownerDocument"));

var ownerWindow = function ownerWindow(node) {
  var doc = (0, _ownerDocument["default"])(node);
  return doc.defaultView || window;
};

exports.ownerWindow = ownerWindow;
var _default = ownerWindow;
exports["default"] = _default;