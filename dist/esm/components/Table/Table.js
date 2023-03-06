"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Table = _interopRequireDefault(require("./Table.styled"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Table = function Table(props) {
  var children = props.children,
    size = props.size,
    striped = props.striped,
    bordered = props.bordered,
    hover = props.hover,
    responsive = props.responsive,
    variant = props.variant,
    bsPrefix = props.bsPrefix,
    heights = props.heights;
  return /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    size: size,
    striped: striped,
    bordered: bordered,
    hover: hover,
    responsive: responsive,
    variant: variant,
    bsPrefix: bsPrefix,
    heights: heights
  }, children);
};
var _default = Table;
exports["default"] = _default;