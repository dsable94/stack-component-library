"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Spinner = _interopRequireDefault(require("react-bootstrap/Spinner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Spinner = function Spinner(props) {
  var children = props.children,
    animation = props.animation,
    as = props.as,
    size = props.size,
    variant = props.variant;
  return /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
    size: size,
    animation: animation,
    as: as,
    variant: variant
  }, children);
};
var _default = Spinner;
exports["default"] = _default;