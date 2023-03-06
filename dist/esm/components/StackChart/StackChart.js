"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _StackChart = _interopRequireDefault(require("./StackChart.styled"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var StackChart = function StackChart(props) {
  var children = props.children,
    size = props.size,
    options = props.options,
    series = props.series,
    type = props.type,
    width = props.width,
    height = props.height,
    labels = props.labels;
  return /*#__PURE__*/_react["default"].createElement(_StackChart["default"], _extends({
    options: options,
    series: series,
    type: type,
    width: width,
    height: height
  }, props), children);
};
var _default = StackChart;
exports["default"] = _default;