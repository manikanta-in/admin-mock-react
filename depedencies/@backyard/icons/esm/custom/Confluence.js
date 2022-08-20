import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "size", "className"];
import React from 'react';
import PathIcon from "./components";

var _ref2 = /*#__PURE__*/React.createElement("path", {
  fill: "url(#confluence_linear_1)",
  d: "M2.435 10.803c-.124.202-.263.437-.382.624a.382.382 0 00.128.52l2.482 1.527a.383.383 0 00.53-.13c.099-.166.226-.382.366-.613.983-1.623 1.972-1.424 3.756-.573l2.46 1.17a.384.384 0 00.514-.19l1.182-2.674a.382.382 0 00-.19-.5c-.52-.244-1.553-.731-2.483-1.18-3.345-1.625-6.188-1.52-8.363 2.018z"
});

var _ref3 = /*#__PURE__*/React.createElement("path", {
  fill: "url(#confluence_linear_2)",
  d: "M13.565 4.736c.124-.202.263-.437.382-.624a.382.382 0 00-.128-.52l-2.482-1.527a.381.381 0 00-.544.126l-.367.613c-.983 1.623-1.973 1.424-3.756.573L4.217 2.212a.382.382 0 00-.514.191L2.52 5.076a.382.382 0 00.19.5c.52.245 1.553.732 2.483 1.18 3.353 1.623 6.196 1.515 8.37-2.02z"
});

var _ref4 = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "confluence_linear_1",
  x1: "13.405",
  x2: "7.292",
  y1: "11.556",
  y2: "8.044",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  offset: ".18",
  stopColor: "#0052CC"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#2684FF"
})), /*#__PURE__*/React.createElement("linearGradient", {
  id: "confluence_linear_2",
  x1: "-3164.77",
  x2: "-3015.49",
  y1: "2263.36",
  y2: "2434.67",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  offset: ".18",
  stopColor: "#0052CC"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#2684FF"
})));

var Confluence = /*#__PURE__*/React.forwardRef(function Confluence(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(PathIcon, _extends({
    className: ['icon', 'icon-confluence', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4);
});
export { Confluence };
export default Confluence;