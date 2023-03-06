"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ProgressBar = _interopRequireDefault(require("./ProgressBar.styled"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ProgressBar = function ProgressBar(props) {
  var now = props.now,
    children = props.children,
    size = props.size,
    label = props.label,
    icon = props.icon,
    variant = props.variant,
    striped = props.striped,
    animated = props.animated;
  return /*#__PURE__*/_react["default"].createElement(_ProgressBar["default"], _extends({
    size: size,
    now: now,
    label: label,
    variant: variant
  }, props), children);
};
var _default = ProgressBar;
exports["default"] = _default;