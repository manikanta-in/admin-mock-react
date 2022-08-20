import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["orientation", "animate", "showInput", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
import { HorizontalWrapper, VerticalWrapper } from './styles';
/**
 * Backyards Slider skeleton component
 * 
 * Returns a series of Skeleton Rects in either a horizontal row or a
 * vertical stack depending on the orientation prop. Option prop for showing
 * a text input available only in the horizontal orientation.
 * 
 * <SliderSkeleton />
 */

var SliderSkeleton = /*#__PURE__*/React.forwardRef(function SliderSkeleton(_ref, ref) {
  var _Skeleton, _Skeleton2, _Skeleton3, _Skeleton4, _Skeleton5, _div;

  var _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'horizontal' : _ref$orientation,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$showInput = _ref.showInput,
      showInput = _ref$showInput === void 0 ? false : _ref$showInput,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var Component;

  if (orientation === 'horizontal') {
    Component = function Component() {
      return /*#__PURE__*/React.createElement(HorizontalWrapper, _extends({
        className: classnames("slider--skeleton orientation--".concat(orientation), className)
      }, props, {
        ref: ref
      }), _Skeleton || (_Skeleton = /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        height: "size_24",
        width: "size_16",
        animate: animate,
        className: "skeleton--slider-value"
      })), _Skeleton2 || (_Skeleton2 = /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        height: "size_20",
        width: "12.5rem",
        animate: animate,
        className: "skeleton--slider-bar"
      })), _Skeleton3 || (_Skeleton3 = /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        height: "size_24",
        width: "size_16",
        animate: animate,
        className: "skeleton--slider-value"
      })), showInput === true ? _Skeleton4 || (_Skeleton4 = /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        height: "3.375rem",
        width: "3.375rem",
        animate: animate,
        className: "skeleton--slider-input"
      })) : null);
    };
  } else {
    Component = function Component() {
      return /*#__PURE__*/React.createElement(VerticalWrapper, _extends({
        className: classnames("slider--skeleton orientation--".concat(orientation), className)
      }, props, {
        ref: ref
      }), _Skeleton5 || (_Skeleton5 = /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        height: "12.5rem",
        width: "size_20",
        animate: animate,
        className: "skeleton--slider-bar"
      })), _div || (_div = /*#__PURE__*/React.createElement("div", {
        className: "skeleton--slider-values"
      }, /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        height: "size_24",
        width: "size_16",
        animate: animate,
        className: "skeleton--slider-value"
      }), /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        height: "size_24",
        width: "size_16",
        animate: animate,
        className: "skeleton--slider-value"
      }))));
    };
  }

  return /*#__PURE__*/React.createElement(Component, null);
});
SliderSkeleton.bdsName = 'SliderSkeleton';
export { SliderSkeleton };
export default SliderSkeleton;