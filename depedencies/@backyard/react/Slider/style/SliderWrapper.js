"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Rail = (0, _styledComponents.css)([".rail{display:inline-block;position:absolute;background:var(--bds-color-surface-subdued);overflow:visible;cursor:pointer;&.disabled{background:var(--bds-color-text-disabled);cursor:not-allowed;}&.horizontal{left:0;top:50%;width:12.5rem;height:var(--bds-sizes-size-2);}&.vertical{bottom:0;left:50%;width:var(--bds-sizes-size-2);height:12.5rem;}}"]);
var Thumb = (0, _styledComponents.css)([".thumb{display:block;background:var(--bds-color-action-interactive);border:var(--bds-color-action-interactive);width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);border-radius:50%;&.disabled{background:var(--bds-color-neutral-04);cursor:not-allowed;}&:not(.disabled):hover,&:not(.disabled).hovered{background:var(--bds-color-action-interactive-pressed);width:var(--bds-sizes-size-20);height:var(--bds-sizes-size-20);border:var(--bds-sizes-size-1) solid var(--bds-color-action-interactive-hover);outline:none;cursor:pointer;}&.active,&:focus,&:not(.disabled).focused{background:", ";width:var(--bds-sizes-size-20);height:var(--bds-sizes-size-20);border:var(--bds-sizes-size-1) solid var(--bds-color-action-interactive);outline:none;box-shadow:inset 0 0 0 1px var(--bds-color-action-interactive),inset 0px 0 0 2px var(--bds-color-white);}}.tooltip-span{display:block;width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);border-radius:50%;&:hover{width:var(--bds-sizes-size-20);height:var(--bds-sizes-size-20);}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.action_interactive_hover;
});

var SliderWrapper = _styledComponents["default"].span.withConfig({
  displayName: "SliderWrapper",
  componentId: "sc-e7xtw3-0"
})(["position:relative;display:flex;justify-content:center;align-items:center;padding-right:var(--bds-sizes-size-16);&.horizontal{flex-direction:row;width:12.5rem;height:var(--bds-sizes-size-20);}&.vertical{flex-direction:column-reverse;width:var(--bds-sizes-size-20);height:12.5rem;margin-bottom:var(--bds-sizes-size-20);}", " ", " .track{position:absolute;background:var(--bds-color-action-interactive-pressed);cursor:pointer;&.disabled{background:var(--bds-color-text-disabled);cursor:not-allowed;}&.horizontal{height:var(--bds-sizes-size-2);top:50%;}&.vertical{width:var(--bds-sizes-size-2);left:50%;}}.thumb{position:absolute;&.horizontal{top:var(--bds-sizes-size-3);&:not(.disabled):hover,&:not(.disabled).hovered{top:var(--bds-sizes-size-1);}&.active,&:focus{top:var(--bds-sizes-size-1);}}&.vertical{left:0.6875rem;&:not(.disabled):hover,&:not(.disabled).hovered{left:var(--bds-sizes-size-9);}&.active,&:focus{left:var(--bds-sizes-size-9);}}}p.slider-min-label,p.slider-max-label{margin:0 !important;}"], Rail, Thumb);

var _default = SliderWrapper;
exports["default"] = _default;