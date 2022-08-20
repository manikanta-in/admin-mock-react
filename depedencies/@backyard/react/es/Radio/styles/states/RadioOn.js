import { css } from 'styled-components';
const RadioOn = css(["&.enabled,&:enabled{& + label::before{border-color:var(--bds-color-action-interactive);}& + label::after{border-color:var(--bds-color-action-interactive);}}&.hover,&:hover,&:focus:hover{& + label::before{border-color:var(--bds-color-action-interactive-hover);}}&.focus,&:focus{& + label::before{box-shadow:0 0 0 2px var(--bds-color-border-default);}}&.disabled,&:disabled{&,& + label{cursor:not-allowed;}& + label::before{border-color:var(--bds-color-border-disabled);}& + label::after{border-color:var(--bds-color-border-disabled);}}&,& + label{cursor:pointer;}"]);
export default RadioOn;