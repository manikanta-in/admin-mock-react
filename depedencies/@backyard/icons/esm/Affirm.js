import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "size", "className"];
import React from 'react';
import PathIcon from "./components";

var _ref2 = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M2.7868 10.3758c-.1484 0-.224-.0731-.224-.1932 0-.224.2498-.2994.7054-.3478 0 .2985-.2019.541-.4828.541h.0014zm.196-1.6787c-.3256 0-.7.1532-.9033.3153l.1857.392c.163-.1492.4264-.277.6642-.277.226 0 .3508.0757.3508.228 0 .1022-.0826.154-.2388.1745-.5841.0756-1.042.2369-1.042.6868 0 .3568.254.5727.6508.5727.2834 0 .5354-.1574.6552-.3641v.3081h.5281V9.4428c0-.532-.3693-.7468-.8504-.7468l-.0002.001zM8.2832 8.755v1.9758h.565v-.952c0-.4522.274-.5852.4646-.5852a.4331.4331 0 01.2417.0714l.1033-.5223a.6396.6396 0 00-.252-.0456c-.2904 0-.473.1285-.5934.39v-.332h-.5292zM12.2765 8.697c-.2988 0-.5222.1765-.6384.3468-.1078-.2199-.336-.3467-.6104-.3467-.2985 0-.5055.1658-.601.3567v-.2987h-.5449v1.9757h.5657V9.7135c0-.364.1912-.5401.3696-.5401.1616 0 .31.1044.31.3741v1.1833h.5645V9.7135c0-.3693.1865-.5401.3732-.5401.1496 0 .308.1086.308.3702v1.1872h.5645V9.3649c0-.4438-.2987-.6678-.6597-.6678M6.9081 8.755h-.5119v-.2007c0-.2615.1493-.336.2778-.336a.5653.5653 0 01.252.063l.1742-.3985s-.1767-.1153-.4979-.1153c-.361 0-.7717.2035-.7717.8422v.1454h-.8554v-.2008c0-.2615.149-.336.2777-.336.088 0 .1745.0216.252.063l.1742-.3985c-.1039-.0607-.271-.1153-.4976-.1153-.3609 0-.7717.2035-.7717.8422v.1454h-.327v.4357h.3279v1.54h.5645v-1.54h.8565v1.54h.5645v-1.54h.512V8.755z",
  clipRule: "evenodd"
});

var _ref3 = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M7.8092 8.755h-.564v1.975h.564V8.755z"
});

var _ref4 = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M7.266 8.4193h.5524c.3223-1.0133 1.4158-1.904 2.7161-1.904 1.5816 0 2.9483 1.204 2.9483 3.0784a3.851 3.851 0 01-.1568 1.1371h.5362l.0054-.0184a4.5454 4.5454 0 00.1327-1.117c0-2.0903-1.5233-3.5948-3.4646-3.5948-1.525 0-2.8842 1.0584-3.2695 2.4193l-.0003-.0006z",
  clipRule: "evenodd",
  fill: "#4A4AF4"
});

var Affirm = /*#__PURE__*/React.forwardRef(function Affirm(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(PathIcon, _extends({
    className: ['icon', 'icon-affirm', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4);
});
export { Affirm };
export default Affirm;