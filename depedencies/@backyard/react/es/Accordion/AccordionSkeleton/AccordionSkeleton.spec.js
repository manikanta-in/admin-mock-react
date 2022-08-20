var _ThemeProvider;

import * as React from 'react';
import { render, act } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import AccordionSkeleton from './AccordionSkeleton';
describe('AccordionSkeleton Snapshots', () => {
  test('renders', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(AccordionSkeleton, {
        animate: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('size snapshots', () => {
    const sizes = ['small', 'medium', 'large'];
    sizes.forEach(size => {
      const {
        asFragment
      } = render( /*#__PURE__*/React.createElement(AccordionSkeleton, {
        size: size
      }));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});