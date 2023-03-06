"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _recharts = require("recharts");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var StyledChart = (0, _styledComponents["default"])(_recharts.Chart).withConfig({
  displayName: "Chartstyled__StyledChart",
  componentId: "sc-1sgyas5-0"
})([""]);
var _default = StyledChart;
exports["default"] = _default;