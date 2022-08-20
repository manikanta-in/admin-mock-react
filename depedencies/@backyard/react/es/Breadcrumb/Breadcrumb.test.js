var _Breadcrumb;

import * as React from 'react';
import { render } from '../../test-utils';
import Breadcrumb from './Breadcrumb';
const crumbs = [{
  label: 'Appliances',
  to: '/',
  className: 'crumb-1'
}, {
  label: 'Refrigerators',
  to: '/',
  className: 'crumb-2'
}, {
  label: 'French Door Refrigerators',
  to: '/',
  className: 'crumb-3 currentPage'
}];
describe('Breadcrumb Tests', () => {
  it('renders', () => {
    const {
      getByText
    } = render(_Breadcrumb || (_Breadcrumb = /*#__PURE__*/React.createElement(Breadcrumb, {
      crumbs: crumbs
    })));
    const crumb1 = getByText('Appliances');
    const crumb2 = getByText('Refrigerators');
    const crumb3 = getByText('French Door Refrigerators');
    expect(crumb1).toBeInTheDocument();
    expect(crumb2).toBeInTheDocument();
    expect(crumb3).toBeInTheDocument();
  });
});