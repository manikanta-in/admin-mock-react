"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalBody = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _excluded = ["children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Modal Body
 *
 * Component to use as a child of `Modal`
 *
 * Contains the body text of the modal, and any components or other HTML needed for the body
 *
 * Should not contain primary interactions such as buttons for cancelling an action or submitting and action
 * Those primary interactions should be in the `ModalFooter` component
 *
 * Example:
 *  <ModalBody>
 *      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
 *      sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
 *      Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
 *      ultrices lorem condimentum, nec ullamcorper felis porttitor.
 *  </ModalBody>
 */
var ModalBody = /*#__PURE__*/React.forwardRef(function ModalBody(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  /**
   * Layout:
   *  <p modal-body>
   *      ...
   *  </p>
   */
  return /*#__PURE__*/React.createElement(_Typography["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('modal-body', className),
    variant: "body_1",
    as: "div"
  }, props, {
    ref: ref
  }), children);
});
exports.ModalBody = ModalBody;
ModalBody.bdsName = 'ModalBody';
var _default = ModalBody;
exports["default"] = _default;