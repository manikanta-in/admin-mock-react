"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tabs = require("./Tabs");

Object.keys(_Tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Tabs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tabs[key];
    }
  });
});

var _Tab = require("./Tab");

Object.keys(_Tab).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Tab[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tab[key];
    }
  });
});

var _TabContent = require("./TabContent");

Object.keys(_TabContent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TabContent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabContent[key];
    }
  });
});