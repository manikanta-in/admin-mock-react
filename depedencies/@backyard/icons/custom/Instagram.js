"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Instagram = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M8.00134 4.92335C6.29872 4.92335 4.92538 6.297 4.92538 8C4.92538 9.703 6.29872 11.0766 8.00134 11.0766C9.70396 11.0766 11.0773 9.703 11.0773 8C11.0773 6.297 9.70396 4.92335 8.00134 4.92335ZM8.00134 10.0002C6.90106 10.0002 6.00156 9.1032 6.00156 8C6.00156 6.8968 6.89838 5.99978 8.00134 5.99978C9.10429 5.99978 10.0011 6.8968 10.0011 8C10.0011 9.1032 9.10162 10.0002 8.00134 10.0002ZM11.9206 4.7975C11.9206 5.19647 11.5993 5.51512 11.2031 5.51512C10.8042 5.51512 10.4857 5.1938 10.4857 4.7975C10.4857 4.40121 10.8069 4.07988 11.2031 4.07988C11.5993 4.07988 11.9206 4.40121 11.9206 4.7975ZM13.9578 5.52583C13.9123 4.56454 13.6928 3.71304 12.9887 3.01149C12.2873 2.30994 11.436 2.09037 10.475 2.04217C9.48444 1.98594 6.51556 1.98594 5.52504 2.04217C4.56665 2.08769 3.71534 2.30726 3.01127 3.00881C2.30719 3.71036 2.09035 4.56187 2.04216 5.52315C1.98595 6.51389 1.98595 9.48343 2.04216 10.4742C2.08767 11.4355 2.30719 12.287 3.01127 12.9885C3.71534 13.6901 4.56397 13.9096 5.52504 13.9578C6.51556 14.0141 9.48444 14.0141 10.475 13.9578C11.436 13.9123 12.2873 13.6927 12.9887 12.9885C13.6901 12.287 13.9096 11.4355 13.9578 10.4742C14.0141 9.48343 14.0141 6.51657 13.9578 5.52583ZM12.6782 11.5372C12.4694 12.062 12.0651 12.4664 11.5378 12.6779C10.748 12.9912 8.87407 12.9189 8.00134 12.9189C7.12861 12.9189 5.25198 12.9885 4.46492 12.6779C3.94021 12.469 3.53597 12.0647 3.32448 11.5372C3.01127 10.7473 3.08355 8.87292 3.08355 8C3.08355 7.12708 3.01394 5.25003 3.32448 4.46279C3.5333 3.93797 3.93753 3.53364 4.46492 3.3221C5.25466 3.00881 7.12861 3.08111 8.00134 3.08111C8.87407 3.08111 10.7507 3.01149 11.5378 3.3221C12.0625 3.53096 12.4667 3.93529 12.6782 4.46279C12.9914 5.25271 12.9191 7.12708 12.9191 8C12.9191 8.87292 12.9914 10.75 12.6782 11.5372Z"
});

var Instagram = /*#__PURE__*/_react["default"].forwardRef(function Instagram(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-instagram', className].filter(Boolean).join(' '),
    color: "#3f729b",
    size: size
  }, props, {
    ref: ref
  }), _ref2);
});

exports.Instagram = Instagram;
var _default = Instagram;
exports["default"] = _default;