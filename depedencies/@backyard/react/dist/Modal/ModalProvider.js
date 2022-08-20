"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalProvider = exports.ModalContext = exports.ModalConsumer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _excluded = ["children", "noLines", "context"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ModalContext = /*#__PURE__*/React.createContext(null);
exports.ModalContext = ModalContext;
var ModalConsumer = ModalContext.Consumer;
/**
 * `ModalProvider` Backyard React
 *
 * @param props - Modal props
 */

exports.ModalConsumer = ModalConsumer;

var ModalProvider = function ModalProvider(_ref) {
  var children = _ref.children,
      noLines = _ref.noLines,
      contextProp = _ref.context,
      override = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Memoize `ModalContextValues`
  var context = React.useMemo(function () {
    return (0, _extends2["default"])({
      noLines: noLines
    }, contextProp, override);
  }, [noLines, override]);
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: context
  }, children);
};

exports.ModalProvider = ModalProvider;
var _default = ModalProvider;
exports["default"] = _default;