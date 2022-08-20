import { css } from 'styled-components';
/**
 * Extend `TextInput` and apply `TextField` styles
 */

const TextFieldBase = css(["& + div:before{content:\"\";display:inline-block;box-sizing:content-box;padding:", " 0;height:", ";border-top:1px solid;border-bottom:1px solid;}"], ({
  theme
}) => theme.sizes.size_16, ({
  theme
}) => theme.sizes.size_18);
export { TextFieldBase };
export default TextFieldBase;