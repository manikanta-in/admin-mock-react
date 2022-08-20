"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Pagination = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _PaginationCondensed = require("../PaginationCondensed");

var _PaginationFull = require("../PaginationFull");

var _excluded = ["variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Pagination
 *
 * @todo Comments
 */
var Pagination = /*#__PURE__*/React.forwardRef(function Pagination(_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'numbered' : _ref$variant,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var Component = React.useMemo(function () {
    switch (variant) {
      case 'condensed':
        return _PaginationCondensed.PaginationCondensed;

      case 'numbered':
      case 'dotted':
      default:
        return _PaginationFull.PaginationFull;
    }
  }, [variant]);
  return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({
    variant: variant
  }, props, {
    ref: ref
  }));
});
exports.Pagination = Pagination;
Pagination.bdsName = 'Pagination';
var _default = Pagination;
exports["default"] = _default;