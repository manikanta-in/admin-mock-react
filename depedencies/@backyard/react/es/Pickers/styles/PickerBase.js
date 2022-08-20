import { css } from 'styled-components';
const Shapes = css(["&.shape{&--rounded{border-radius:var(--bds-border-radius-md);}&--squared{border-radius:0;}}"]);
const PickerBase = css(["position:relative;", " width:calc(var(--bds-sizes-size-60) * 5);max-height:calc(var(--bds-sizes-size-112) * 3);border:var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);background-color:var(--bds-color-elevation-04);box-shadow:var(--bds-shadows-shadow-04);"], Shapes);
export { PickerBase };
export default PickerBase;