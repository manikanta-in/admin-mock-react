"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Lps = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#002169",
  d: "M13.2 4c.45 0 .8.35.8.8v6.4c0 .45-.35.8-.8.8H2.8a.79.79 0 01-.8-.8V4.8c0-.45.35-.8.8-.8h10.4z"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#FCFCFC",
  d: "M13.75 4.9v1.5H2.25V4.9h11.5z"
});

var _ref4 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#000",
  d: "M5.267 10.039v-.3H3.995V7.53h-.34v2.51h1.612zm.707 0V8.977h.79c.253 0 .44-.072.562-.217a.771.771 0 00.183-.512c0-.228-.068-.405-.205-.53-.137-.127-.317-.19-.54-.19h-1.13v2.51h.34zm.677-1.349h-.677v-.87h.677a.74.74 0 01.31.053c.136.067.205.192.205.376 0 .165-.048.279-.143.344a.647.647 0 01-.372.097zm2.18 1.422c.269 0 .504-.06.706-.18.202-.119.303-.318.303-.596 0-.223-.08-.393-.24-.51a1.079 1.079 0 00-.392-.16l-.352-.08c-.237-.055-.39-.1-.457-.137a.287.287 0 01-.153-.27c0-.111.043-.21.131-.294.088-.084.232-.126.433-.126.248 0 .424.065.528.196a.63.63 0 01.109.31h.32c0-.28-.092-.482-.276-.61a1.152 1.152 0 00-.671-.19c-.286 0-.507.072-.663.217a.724.724 0 00-.234.555c0 .209.08.366.239.47.092.06.25.116.472.166l.34.077c.184.042.32.092.406.149.086.058.129.155.129.292 0 .182-.102.309-.305.38a1.056 1.056 0 01-.348.054c-.285 0-.484-.083-.597-.25a.686.686 0 01-.1-.346h-.32c-.004.27.083.486.26.644.176.16.42.24.733.24z"
});

var _ref5 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#F3D03E",
  d: "M5.267 10.039v-.3H3.995V7.53h-.34v2.51h1.612zm.707 0V8.977h.79c.253 0 .44-.072.562-.217a.771.771 0 00.183-.512c0-.228-.068-.405-.205-.53-.137-.127-.317-.19-.54-.19h-1.13v2.51h.34zm.677-1.349h-.677v-.87h.677a.74.74 0 01.31.053c.136.067.205.192.205.376 0 .165-.048.279-.143.344a.647.647 0 01-.372.097zm2.18 1.422c.269 0 .504-.06.706-.18.202-.119.303-.318.303-.596 0-.223-.08-.393-.24-.51a1.079 1.079 0 00-.392-.16l-.352-.08c-.237-.055-.39-.1-.457-.137a.287.287 0 01-.153-.27c0-.111.043-.21.131-.294.088-.084.232-.126.433-.126.248 0 .424.065.528.196a.63.63 0 01.109.31h.32c0-.28-.092-.482-.276-.61a1.152 1.152 0 00-.671-.19c-.286 0-.507.072-.663.217a.724.724 0 00-.234.555c0 .209.08.366.239.47.092.06.25.116.472.166l.34.077c.184.042.32.092.406.149.086.058.129.155.129.292 0 .182-.102.309-.305.38a1.056 1.056 0 01-.348.054c-.285 0-.484-.083-.597-.25a.686.686 0 01-.1-.346h-.32c-.004.27.083.486.26.644.176.16.42.24.733.24z"
});

var Lps = /*#__PURE__*/_react["default"].forwardRef(function Lps(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-Lps', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4, _ref5);
});

exports.Lps = Lps;
var _default = Lps;
exports["default"] = _default;