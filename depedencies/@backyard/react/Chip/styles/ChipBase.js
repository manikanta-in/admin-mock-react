"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ChipBase = _styledComponents["default"].span.withConfig({
  displayName: "ChipBase",
  componentId: "sc-gocfov-0"
})(["&&{position:relative;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;}input{box-sizing:border-box;border:none;position:absolute;opacity:0;top:0;bottom:0;left:0;right:0;width:100%;height:100%;cursor:pointer;padding:0;}input:disabled,input:disabled + label{pointer-events:none;}input:disabled:before{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;cursor:not-allowed;pointer-events:all;}label{display:flex;align-items:center;justify-content:center;box-sizing:border-box;font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-20);font-family:", ";font-weight:var(--bds-font-weight-regular);@media only screen and (min-width:var(--bds-grid-breakpoint-md-max)){font-size:var(--bds-sizes-size-16);}border-width:var(--bds-sizes-size-1);border-style:solid;border-radius:var(--bds-border-radius-circle);padding:0 var(--bds-sizes-size-14);height:var(--bds-sizes-size-40);.chip--icon{margin-right:var(--bds-sizes-size-8);}.chip--delete{margin-left:var(--bds-sizes-size-8);}transition:0.2s all ease-in-out;}input.enabled + label,input:enabled + label{background-color:transparent;border-color:var(--bds-color-border-default);.label{color:var(--bds-color-text-primary);}.icon path{fill:var(--bds-color-icon-primary);}}input.hover + label,input:hover:not(:disabled):not(:checked) + label,input:not(:disabled):not(:checked) + label:hover{background-color:var(--bds-color-action-neutral-hover);border-color:var(--bds-color-border-interactive);}input.focus + label,input:focus + label{border-color:var(--bds-color-border-interactive);box-shadow:0 0 0 2px var(--bds-color-border-interactive);}input.checked + label,input:checked + label{background-color:var(--bds-color-action-interactive);border-color:var(--bds-color-action-interactive);.label{color:var(--bds-color-text-primary-inverse);}.icon path{fill:var(--bds-color-icon-primary-inverse);}&.subdued{background-color:var(--bds-color-action-interactive-subdued-pressed);border-color:var(--bds-color-action-interactive-subdued-pressed);.label{color:var(--bds-color-text-primary);}.icon path{fill:var(--bds-color-icon-primary);}}}input.disabled + label,input:disabled + label{border-color:var(--bds-color-border-disabled);.label{color:var(--bds-color-text-disabled);}.icon path{fill:var(--bds-color-icon-disabled);}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
});

var _default = ChipBase;
exports["default"] = _default;