import { css } from 'styled-components';
var Shapes = css(["&.shape{&--rounded{.tooltip-background{border-top-left-radius:var(--bds-border-radius-lg);border-top-right-radius:var(--bds-border-radius-lg);border-bottom-left-radius:var(--bds-border-radius-lg);border-bottom-right-radius:var(--bds-border-radius-lg);}}&--squared{.tooltip-background{border-radius:0;}}}"]);
var ArrowPlacement = css(["&.placement{&--top,&--top-start,&--top-end{top:calc(-1 * var(--bds-sizes-size-7));}&--top-start{left:var(--bds-sizes-size-16);}&--top{left:calc(50% - var(--bds-sizes-size-6));}&--top-end{left:calc(100% - var(--bds-sizes-size-32));}&--left,&--left-start,&--left-end{left:calc(-1 * var(--bds-sizes-size-7));}&--left-start{top:var(--bds-sizes-size-16);}&--left{top:calc(50% - var(--bds-sizes-size-6));}&--left-end{top:calc(100% - var(--bds-sizes-size-32));}&--right,&--right-start,&--right-end{right:calc(-1 * var(--bds-sizes-size-7));}&--right-start{top:var(--bds-sizes-size-16);}&--right{top:calc(50% - var(--bds-sizes-size-6));}&--right-end{top:calc(100% - var(--bds-sizes-size-32));}&--bottom,&--bottom-start,&--bottom-end{bottom:calc(-1 * var(--bds-sizes-size-6));}&--bottom-start{left:var(--bds-sizes-size-16);}&--bottom{left:calc(50% - var(--bds-sizes-size-6));}&--bottom-end{left:calc(100% - var(--bds-sizes-size-32));}}"]);
var TooltipBase = css(["position:relative;display:flex;justify-content:flex-start;align-content:stretch;width:var(--style-tooltip-width);max-width:calc(var(--bds-sizes-size-128) * 2);z-index:var(--bds-z-index-tooltip);padding:var(--bds-sizes-size-12) var(--bds-sizes-size-16);", " &.invisible{display:none;}.tooltip-background{position:absolute;top:0;bottom:0;left:0;right:0;filter:var(--style-tooltip-drop-shadow);}.tooltip-icon{display:inline-flex;align-items:center;margin-right:var(--bds-sizes-size-2);z-index:1;}.tooltip-body{flex-grow:1;z-index:1;.tooltip-title{display:flex;font-family:var(--style-tooltip-font-family);font-weight:var(--style-tooltip-font-weight);font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-24);}.tooltip-subtitle{display:block;font-family:var(--style-tooltip-font-family);font-weight:var(--bds-font-weight-regular);font-size:var(--bds-sizes-size-12);line-height:var(--bds-sizes-size-16);padding-bottom:var(--bds-sizes-size-1);padding-left:var(--bds-sizes-size-1);}}.tooltip-arrow{&,&::before{position:absolute;width:var(--bds-sizes-size-14);height:var(--bds-sizes-size-14);z-index:var(--bds-z-index-tooltip);}&::before{content:'';transform:rotate(45deg);}", " transition:opacity 0.2s ease-in-out,top 0s,left 0s,transform 0s;}transition:opacity 0.2s ease-in-out,top 0s,left 0s,transform 0s;"], Shapes, ArrowPlacement);
export { TooltipBase };
export default TooltipBase;