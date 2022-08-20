"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SelectFieldset = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SelectFieldset = _styledComponents["default"].fieldset.withConfig({
  displayName: "SelectFieldset",
  componentId: "sc-19c6mmk-0"
})(["top:0px;left:0;right:0;bottom:0;margin:0;position:absolute;height:var(--bds-sizes-size-48);border-style:solid;border-width:var(--bds-border-width-sm);border-radius:var(--bds-border-radius-lg);border-color:var(--bds-color-border-default);pointer-events:none;box-sizing:border-box;legend{margin:0;padding:0;border:0;font-size:100%;font:inherit;box-sizing:border-box;width:auto;height:var(--bds-sizes-size-1);display:block;max-width:0.01px;visibility:hidden;font-size:var(--bds-sizes-size-14);font-family:", ";font-weight:var(--bds-font-weight-regular);}legend span{font-family:", ";font-weight:var(--bds-font-weight-regular);}&.interaction--focused,&.interaction--active,&.interaction--completed,&.completed{legend{max-width:500px;padding:0 var(--bds-sizes-size-8);span{font-size:var(--bds-sizes-size-12);}}}&.interaction--focused,&.interaction--active{border-color:var(--bds-color-border-interactive);border-width:var(--bds-sizes-size-2);}&.interaction--completed,&.completed{border-color:var(--bds-color-border-default);}&.interaction--active.completed{border-color:var(--bds-color-border-interactive);}&.size--medium{height:var(--bds-sizes-size-48);&.interaction--focused,&.interaction--active,&.interaction--completed,&.completed{legend{max-width:500px;padding:0 var(--bds-sizes-size-4);span{font-size:var(--bds-sizes-size-14);}}}}&.size--small{height:var(--bds-sizes-size-40);&.interaction--focused,&.interaction--active,&.interaction--completed,&.completed{legend{max-width:500px;padding:0 var(--bds-sizes-size-4);span{font-size:var(--bds-sizes-size-12);}}}}&.size--large{height:var(--bds-sizes-size-56);&.interaction--focused,&.interaction--active,&.interaction--completed,&.completed{legend{max-width:500px;padding:0 var(--bds-sizes-size-4);span{font-size:var(--bds-sizes-size-14);}}}}&.size--jumbo{height:var(--bds-sizes-size-64);&.interaction--focused,&.interaction--active,&.interaction--completed,&.completed{legend{max-width:500px;padding:0 var(--bds-sizes-size-4);span{font-size:var(--bds-sizes-size-20);}}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.family[theme.context.font];
});

exports.SelectFieldset = SelectFieldset;
var _default = SelectFieldset;
exports["default"] = _default;