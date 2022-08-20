import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

var _ThemeProvider;

import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import { render, act } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import TextFieldSkeleton from './TextFieldSkeleton';
describe('TextFieldSkeleton Snapshots', function () {
  test('renders', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var wrapper, _wrapper, asFragment;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return act( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TextFieldSkeleton, {
                        animate: true
                      }))));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 2:
            _wrapper = wrapper, asFragment = _wrapper.asFragment;
            expect(asFragment()).toMatchSnapshot();

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('size snapshots', function () {
    var sizes = ['small', 'medium', 'large', 'jumbo'];
    sizes.forEach(function (size) {
      var _render = render( /*#__PURE__*/React.createElement(TextFieldSkeleton, {
        size: size
      })),
          asFragment = _render.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});