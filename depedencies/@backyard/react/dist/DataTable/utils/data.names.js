"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fifteen = exports.columns = void 0;

var React = _interopRequireWildcard(require("react"));

var _useHighlightCell = require("../hooks/useHighlightCell");

var _DataTableFilters = require("../DataTableFilters");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable import/prefer-default-export */
var columns = [{
  Header: 'First Name',
  accessor: 'firstName',
  filter: 'startsWith',
  Cell: function Cell(_ref) {
    var cell = _ref.cell;
    var text = String(cell.value);
    var filter = 'll';
    return /*#__PURE__*/React.createElement(_useHighlightCell.HighlightText, {
      text: text,
      highlight: filter
    });
  }
}, {
  Header: 'Last Name',
  accessor: 'lastName',
  filter: 'contains',
  width: ''
}, {
  Header: 'Age',
  accessor: 'age',
  filter: 'equals',
  minWidth: '10rem'
}, {
  Header: 'Visits',
  accessor: 'visits',
  filter: 'equals',
  maxWidth: ''
}, {
  Header: 'Status',
  accessor: 'status',
  Filter: (0, _DataTableFilters.SelectFilter)(['single', 'relationship', 'complicated']),
  filter: 'equals'
}, {
  Header: 'Profile Progress',
  accessor: 'progress',
  filter: 'equals'
}];
exports.columns = columns;
var fifteen = [{
  firstName: 'hellfire',
  lastName: 'strap',
  age: 20,
  visits: 6,
  progress: 48,
  status: 'complicated',
  subRows: [/*#__PURE__*/React.createElement(_useHighlightCell.HighlightText, {
    text: "Nice work!",
    highlight: "Nice"
  })]
}, {
  firstName: 'kraken',
  lastName: 'mortal',
  age: 11,
  visits: 49,
  progress: 35,
  status: 'complicated'
}, {
  firstName: 'overdrive',
  lastName: 'balls',
  age: 18,
  visits: 16,
  progress: 96,
  status: 'complicated'
}, {
  firstName: 'hellfire',
  lastName: 'mettle',
  age: 27,
  visits: 43,
  progress: 49,
  status: 'relationship'
}, {
  firstName: 'endurance',
  lastName: 'motorcycle',
  age: 3,
  visits: 33,
  progress: 5,
  status: 'relationship'
}, {
  firstName: 'deck',
  lastName: 'beard',
  age: 11,
  visits: 70,
  progress: 69,
  status: 'complicated'
}, {
  firstName: 'valley',
  lastName: 'fist',
  age: 17,
  visits: 57,
  progress: 54,
  status: 'complicated'
}, {
  firstName: 'fool',
  lastName: 'blood',
  age: 0,
  visits: 3,
  progress: 3,
  status: 'single'
}, {
  firstName: 'spoils',
  lastName: 'storm',
  age: 17,
  visits: 13,
  progress: 85,
  status: 'relationship'
}, {
  firstName: 'nap',
  lastName: 'scar',
  age: 26,
  visits: 94,
  progress: 63,
  status: 'complicated'
}, {
  firstName: 'pack',
  lastName: 'iron',
  age: 17,
  visits: 31,
  progress: 26,
  status: 'complicated'
}, {
  firstName: 'grill',
  lastName: 'bacon',
  age: 28,
  visits: 98,
  progress: 23,
  status: 'relationship'
}, {
  firstName: 'eagle',
  lastName: 'jaw',
  age: 28,
  visits: 41,
  progress: 59,
  status: 'complicated'
}, {
  firstName: 'battle',
  lastName: 'cage',
  age: 5,
  visits: 73,
  progress: 27,
  status: 'single'
}, {
  firstName: 'beef',
  lastName: 'hook',
  age: 4,
  visits: 62,
  progress: 70,
  status: 'single'
}];
exports.fifteen = fifteen;