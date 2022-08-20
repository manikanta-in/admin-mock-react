import styled from 'styled-components';
const TextAreaWrapper = styled.div.withConfig({
  displayName: "TextAreaWrapper",
  componentId: "sc-dbeyla-0"
})(["position:relative;width:100%;div.backyard.textinput--wrapper.size--medium{width:100%;}.form-control{display:flex;position:relative;padding-top:var(--bds-sizes-size-16);align-items:flex-start;flex-direction:column;width:100%;textarea.type--textarea.textarea{resize:none;}&.size--medium{height:", ";}}fieldset.text-input-fieldset.size--medium{height:", ";}.helper-counter{position:absolute;bottom:var(--bds-sizes-size-8);right:var(--bds-sizes-size-16);&.error span.variant--helper{color:var(--bds-color-text-red);}}"], ({
  rows,
  max
}) => `calc(3.6875rem + ((${rows} - 1) * 1.5rem) + ${max ? 1.5 : 0}rem)`, ({
  rows,
  max
}) => `calc(4.4375rem + ((${rows} - 1) * 1.5rem) + ${max ? 1.5 : 0}rem)`);
export { TextAreaWrapper };
export default TextAreaWrapper;