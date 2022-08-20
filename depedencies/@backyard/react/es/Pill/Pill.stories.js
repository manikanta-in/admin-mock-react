var _ApiLink, _ApiLink2, _ApiLink3;

import React from 'react';
import { GridV3 as Grid, Pill, PillSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Pill',
  decorators: [withKnobs]
};
const colors = ['Color', {
  'dark-blue': 'dark-blue',
  'blue': 'blue',
  'light-blue': 'light-blue',
  'interactive': 'interactive',
  'green': 'green',
  'red': 'red',
  'gold': 'gold',
  'lfp-yellow': 'lfp-yellow',
  'neutral': 'neutral'
}, 'dark-blue'];
const shapes = {
  circle: 'circle',
  dot: 'dot'
};
const variants = {
  pill: 'pill',
  indicator: 'indicator'
};
const sizes = ['Sizes', {
  medium: 'medium',
  jumbo: 'jumbo'
}, 'medium'];
export const FilledPill = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Pill, {
  value: number('Value', 1),
  invisible: boolean('Invisible', false),
  max: number('Max Value', 10),
  color: select(...colors),
  size: select(...sizes),
  shape: select('Shapes', shapes, 'circle')
}, text('Text', 'Text')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pill"
})));
export const OutlinedPill = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Pill, {
  variant: "outlined",
  value: number('Value', 1),
  invisible: boolean('Invisible', false),
  max: number('Max Value', 10),
  color: select(...colors),
  shape: select('Shapes', shapes, 'circle'),
  size: select(...sizes)
}, text('Text', 'Text')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pill"
})));
export const IndicatorPill = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Pill, {
  variant: "indicator",
  invisible: boolean('Invisible', false),
  color: select(...colors),
  shape: select('Shapes', shapes, 'circle'),
  size: select(...sizes)
}), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pill"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(PillSkeleton, {
  variant: select('Variant', variants, 'pill'),
  size: select(...sizes),
  animate: boolean('Animate', false)
}));