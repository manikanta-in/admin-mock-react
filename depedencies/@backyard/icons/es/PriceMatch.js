"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PriceMatch = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#012169",
  d: "M14 11.38l-6 2.57-6-2.573V2h12v9.38z"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#15B6E5",
  d: "M7.5 9h1.028l-.514.522L7.5 9z"
});

var _ref4 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#fff",
  d: "M9.922 6.571c.353 0 .606.17.718.463.009.021.006.033-.015.042l-.391.174c-.015.006-.026.005-.034-.005l-.007-.013c-.056-.12-.127-.192-.262-.192-.127 0-.206.063-.241.177l-.011.04a.44.44 0 00-.005.023l-.007.06-.004.087-.003.196.002.186.007.115c0 .01.002.018.003.027l.008.043.01.036c.035.113.114.176.24.176.136 0 .207-.072.263-.191.009-.021.02-.027.041-.018l.391.173c.021.01.024.021.015.042-.112.293-.365.463-.718.463-.362 0-.62-.17-.727-.502A1.22 1.22 0 019.14 7.8l-.003-.176.003-.175a1.22 1.22 0 01.056-.375c.106-.331.365-.502.727-.502zm-5.957.036c.02 0 .041.006.05.03l.462 1.06h.012l.45-1.06c.009-.024.03-.03.05-.03h.43c.018 0 .03.012.03.03V8.61c0 .018-.012.03-.03.03h-.41c-.017 0-.029-.012-.029-.03V7.563h-.014l-.321.76c-.015.03-.038.039-.056.039h-.23c-.017 0-.038-.01-.056-.04l-.32-.759h-.015V8.61c0 .018-.012.03-.03.03H3.53c-.017 0-.029-.012-.029-.03V6.637c0-.018.012-.03.03-.03h.435zm2.884 0c.02 0 .033.012.039.03l.677 1.973c.005.018-.003.03-.021.03h-.486c-.02 0-.032-.012-.038-.03l-.094-.314h-.65l-.095.314c-.006.018-.017.03-.038.03H5.66c-.017 0-.026-.012-.02-.03l.691-1.973c.006-.018.018-.03.039-.03h.48zm2.143 0c.018 0 .03.012.03.03v.407c0 .017-.012.03-.03.03H8.5c-.011 0-.017.005-.017.017V8.61c0 .018-.012.03-.03.03h-.459c-.018 0-.03-.012-.03-.03V7.09c0-.012-.005-.018-.017-.018h-.491c-.018 0-.03-.012-.03-.03v-.406c0-.018.012-.03.03-.03h1.536zm2.37 0c.017 0 .029.012.029.03v.72c0 .012.006.018.017.018h.545c.011 0 .018-.006.018-.018v-.72c0-.018.011-.03.029-.03h.459c.018 0 .03.012.03.03V8.61c0 .018-.012.03-.03.03h-.46c-.017 0-.029-.012-.029-.03v-.75c0-.013-.006-.019-.017-.019h-.545c-.011 0-.017.006-.017.018v.75c0 .019-.012.03-.03.03h-.459c-.018 0-.03-.011-.03-.03V6.638c0-.018.012-.03.03-.03h.46zm-4.751.619h-.009l-.194.633h.388l-.185-.633zM9.728 3.5c.42 0 .722.203.855.551.01.025.007.04-.018.05l-.466.206c-.018.008-.03.006-.04-.006l-.009-.015c-.066-.142-.15-.228-.311-.228-.15 0-.246.075-.288.21l-.015.06-.008.053-.003.032-.005.082-.003.179.001.284.004.096c0 .013.002.026.003.037l.006.06a.568.568 0 00.005.025l.01.041a.573.573 0 00.005.019c.042.135.137.21.288.21.14 0 .223-.065.285-.177l.026-.05c.011-.026.025-.033.05-.022l.465.206c.025.01.028.025.018.05-.133.348-.434.551-.855.551-.43 0-.739-.203-.865-.597a1.494 1.494 0 01-.068-.465l-.002-.19.002-.19c.006-.223.026-.334.068-.464.126-.395.434-.598.865-.598zm-5.24.043c.581 0 .882.334.882.804 0 .462-.304.807-.882.807h-.35c-.014 0-.022.007-.022.021v.751c0 .021-.013.036-.035.036h-.546c-.021 0-.035-.015-.035-.036V3.578c0-.021.014-.035.035-.035h.953zm2.161 0c.547 0 .858.323.858.779 0 .302-.14.548-.392.675l.438.922c.01.021 0 .043-.025.043h-.606c-.031 0-.042-.011-.052-.036l-.361-.825h-.228c-.014 0-.02.007-.02.021v.804c0 .021-.015.036-.036.036H5.68c-.021 0-.035-.015-.035-.036V3.578c0-.021.014-.035.035-.035h.97zm1.78 0c.02 0 .035.014.035.035v2.348c0 .021-.014.036-.035.036h-.547c-.02 0-.035-.015-.035-.036V3.578c0-.021.014-.035.035-.035h.547zm4.024 0c.021 0 .035.014.035.035v.46c0 .02-.014.035-.035.035h-.956c-.014 0-.02.007-.02.021v.366c0 .015.006.022.02.022h.785c.02 0 .035.014.035.035v.449c0 .02-.014.035-.035.035h-.785c-.014 0-.02.007-.02.022v.387c0 .014.006.022.02.022h.956c.021 0 .035.014.035.035v.46c0 .02-.014.035-.035.035h-1.558c-.021 0-.035-.015-.035-.036V3.578c0-.021.014-.035.035-.035h1.558zm-8 .53h-.316c-.013 0-.02.007-.02.021v.509c0 .014.007.021.02.021h.316c.192 0 .3-.11.3-.277 0-.168-.108-.274-.3-.274zm2.157 0h-.329c-.014 0-.02.007-.02.021v.47c0 .014.006.02.02.02h.33c.175 0 .28-.099.28-.255 0-.157-.105-.256-.28-.256z"
});

var _ref5 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#15B6E5",
  d: "M3.954 10c.205 0 .344.097.406.242.005.012.002.022-.008.027l-.214.092a.018.018 0 01-.024-.007c-.038-.062-.083-.092-.16-.092-.076 0-.125.037-.145.1a.284.284 0 00-.012.063l-.003.066v.194l.004.066c0 .01.002.017.003.025l.008.037c.022.064.073.1.153.1.073 0 .13-.031.148-.09a.235.235 0 00.01-.073c0-.007-.003-.01-.01-.01h-.122c-.01 0-.016-.007-.016-.017v-.189c0-.01.007-.016.016-.016h.4c.01 0 .017.006.017.016v.087a.858.858 0 01-.03.264c-.06.189-.217.29-.421.29-.199 0-.362-.093-.421-.278a.691.691 0 01-.03-.18l-.003-.13.003-.129a.692.692 0 01.03-.18c.06-.184.222-.278.42-.278zm.875.02c.01 0 .016.007.016.017v.698c0 .113.063.179.156.179.098 0 .155-.066.155-.179v-.698c0-.01.007-.017.017-.017h.256c.01 0 .017.007.017.017v.68c0 .302-.178.459-.445.459-.27 0-.445-.157-.445-.46v-.68c0-.01.007-.016.016-.016h.257zm1.349 0c.011 0 .018.007.02.017l.38 1.102c.003.01-.002.017-.012.017h-.272c-.011 0-.018-.007-.021-.017l-.053-.175h-.363l-.053.175c-.003.01-.01.017-.021.017h-.27c-.01 0-.015-.007-.011-.017l.386-1.102c.004-.01.01-.017.022-.017h.268zm.978 0c.257 0 .403.152.403.366a.34.34 0 01-.184.317l.206.433c.005.01 0 .02-.012.02h-.284c-.015 0-.02-.005-.025-.017l-.17-.387h-.106c-.007 0-.01.003-.01.01v.377c0 .01-.007.017-.017.017h-.256c-.01 0-.017-.007-.017-.017v-1.102c0-.01.007-.017.017-.017h.455zm1.165 0c.011 0 .018.007.021.017l.378 1.102c.004.01-.001.017-.011.017h-.271c-.012 0-.018-.007-.022-.017l-.052-.175H8l-.053.175c-.003.01-.01.017-.02.017h-.27c-.01 0-.016-.007-.012-.017l.386-1.102c.004-.01.01-.017.022-.017h.268zm.765 0c.011 0 .023.005.028.017l.337.643h.006v-.643c0-.01.007-.017.017-.017h.23c.01 0 .016.007.016.017v1.102c0 .01-.006.017-.016.017h-.242c-.011 0-.023-.005-.028-.017l-.334-.641h-.01v.641c0 .01-.006.017-.016.017h-.23c-.01 0-.017-.007-.017-.017v-1.102c0-.01.007-.017.017-.017h.242zm1.62 0c.01 0 .016.007.016.017v.227c0 .01-.006.017-.016.017h-.275c-.007 0-.01.003-.01.01v.848c0 .01-.006.017-.016.017h-.257c-.01 0-.016-.007-.016-.017v-.848c0-.007-.004-.01-.01-.01h-.275c-.01 0-.016-.007-.016-.017v-.227c0-.01.006-.017.016-.017h.859zm.875 0c.01 0 .016.007.016.017v.215c0 .01-.006.017-.016.017h-.45c-.006 0-.01.003-.01.01v.172c0 .007.004.01.01.01h.37c.009 0 .016.007.016.017v.21c0 .01-.007.017-.017.017h-.368c-.007 0-.01.003-.01.01v.182c0 .007.003.01.01.01h.449c.01 0 .016.007.016.017v.215c0 .01-.006.017-.016.017h-.732c-.01 0-.017-.007-.017-.017v-1.102c0-.01.007-.017.017-.017h.732zm.916 0c.01 0 .016.007.016.017v.215c0 .01-.006.017-.016.017h-.45c-.006 0-.009.003-.009.01v.172c0 .007.003.01.01.01h.368c.01 0 .017.007.017.017v.21c0 .01-.007.017-.017.017h-.368c-.007 0-.01.003-.01.01v.182c0 .007.003.01.01.01h.449c.01 0 .016.007.016.017v.215c0 .01-.006.017-.016.017h-.732c-.01 0-.017-.007-.017-.017v-1.102c0-.01.007-.017.017-.017h.732zm-6.453.346H6.04l-.109.354h.217l-.104-.354zm2.143 0h-.004l-.109.354h.217l-.104-.354zm-1.049-.097h-.154c-.007 0-.01.003-.01.01v.22c0 .007.003.01.01.01h.154c.083 0 .132-.046.132-.12 0-.073-.05-.12-.132-.12z"
});

var PriceMatch = /*#__PURE__*/_react["default"].forwardRef(function PriceMatch(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-price-match', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4, _ref5);
});

exports.PriceMatch = PriceMatch;
var _default = PriceMatch;
exports["default"] = _default;