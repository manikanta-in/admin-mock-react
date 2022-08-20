import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "animate", "size"];
import * as React from 'react';
import classNames from 'classnames';
import TextFieldSkeleton from '../../TextField/TextFieldSkeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Password Skeleton
 */

var PasswordSkeleton = /*#__PURE__*/React.forwardRef(function PasswordSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'PasswordSkeleton'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(TextFieldSkeleton, _extends({
    className: classNames('password--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    size: size
  }, props, {
    ref: ref
  }));
});
PasswordSkeleton.bdsName = 'PasswordSkeleton';
export { PasswordSkeleton };
export default PasswordSkeleton;