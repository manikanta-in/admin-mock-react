"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextInputLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var TextInputLabel = _styledComponents["default"].label.withConfig({
  displayName: "SelectLabel__TextInputLabel",
  componentId: "sc-gwgr1k-0"
})(["z-index:1;pointer-events:none;top:12px;left:16px;position:absolute;display:block;color:var(--bds-color-text-tertiary);padding:0;font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);font-weight:var(--bds-font-weight-regular);transition:all 0.15s ease-out;&.with-icon-before{left:40px;}&.interaction--focused,&.interaction--active,&.interaction--completed{top:-12px;left:16px;font-size:var(--bds-sizes-size-14);color:var(--bds-color-text-interactive);}&.interaction--completed{color:var(--bds-color-text-tertiary);}&.size--small{top:8px;font-size:var(--bds-sizes-size-14);&.interaction--focused,&.interaction--active,&.interaction--completed{top:-12px;left:16px;font-size:var(--bds-sizes-size-12);}}&.size--large{top:16px;&.interaction--focused,&.interaction--active,&.interaction--completed{top:-12px;}}&.size--jumbo{font-size:var(--bds-sizes-size-24);top:20px;&.interaction--focused,&.interaction--active,&.interaction--completed{font-size:var(--bds-sizes-size-20);top:-12px;}}&.state--error{color:var(--bds-color-text-red);}"]);

exports.TextInputLabel = TextInputLabel;
var _default = TextInputLabel;
exports["default"] = _default;