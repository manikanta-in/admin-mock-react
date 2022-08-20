import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _div;

const _excluded = ["children", "className", "id", "color", "shape", "disabled", "name", "value", "checked", "defaultChecked", "wrapperProps"];
import CheckCircleFilled from '@backyard/icons/CheckCircleFilled';
import classNames from 'classnames';
import * as React from 'react';
import Radio from '../../Radio';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
import TileWrapper from '../styles/TileWrapper';
/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should
 * be placed on them in a way that clearly indicates hierarchy.
 *
 * This type of Tile is to be used as a static element on the page that functions like a radio button.
 * The entire surface of the tile is selectable, which prevents additional links or call to actions from being
 * included within the content.
 *
 * note: The outlined variation is to be used when there are pictures being included on the tile(s).
 * If it is part of a radio group or set, all the tiles should be of the same variation.
 *
 * example:
 *  <RadioTile
 *      value='test1'
 *      name='test'
 *      checked
 *  >
 *     <span>Hello World</span>
 *  </RadioTile>
 *
 * example 2:
 *  <RadioGroup
 *      name={'test2'}
 *      direction={'row'}
 *      defaultValue={'2'}
 *      onChange={() => {}}
 *  >
 *      <RadioTile
 *          inputId={'1'}
 *          value={'1'}
 *          variant='filled'
 *      >
 *          <span>Item 1</span>
 *      </RadioTile>
 *      <RadioTile
 *          inputId={'2'}
 *          value={'2'}
 *          variant='filled'
 *      >
 *          <span>Item 2</span>
 *      </RadioTile>
 *      <RadioTile
 *          inputId={'3'}
 *          value={'3'}
 *          variant='filled'
 *          disabled
 *      >
 *          <span>Item 3</span>
 *      </RadioTile>
 *  </RadioGroup>
 */

const RadioTile = /*#__PURE__*/React.forwardRef(function RadioTile(_ref, ref) {
  let {
    children,
    className,
    color = 'surface',
    shape: shapeProp,
    // = 'rounded',
    disabled = false,
    name,
    value,
    checked,
    defaultChecked,
    wrapperProps = {}
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'RadioTile'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  /**
   * Layout:
   *  <label>
   *      ...
   *      <Radio />
   *      <icon />
   *  </label>
   */

  return /*#__PURE__*/React.createElement(TileWrapper, _extends({
    as: "label"
  }, wrapperProps, {
    className: classNames(`color--${color} shape--${shape} type--radio`, className, disabled && "disabled"),
    "aria-disabled": disabled
  }), children, /*#__PURE__*/React.createElement(Radio, _extends({
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    name: name,
    value: value
  }, props, {
    wrapperProps: {
      className: 'tile-input'
    },
    ref: ref
  }), _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: "tile-icon"
  }, /*#__PURE__*/React.createElement(CheckCircleFilled, {
    color: "action_interactive",
    size: "size_24"
  })))));
});
RadioTile.bdsName = 'RadioTile';
export { RadioTile };
export default RadioTile;