"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./Button.styled"));
var _Icon = require("../Icon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Button = function Button(props) {
  var btnType = props.btnType,
    isDisabled = props.isDisabled,
    btnVariant = props.btnVariant,
    rounded = props.rounded,
    children = props.children,
    size = props.size,
    block = props.block,
    icon = props.icon,
    iconVariant = props.iconVariant,
    onClick = props.onClick,
    borderRadius = props.borderRadius,
    color = props.color,
    iconSize = props.iconSize,
    onHover = props.onHover;
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    rounded: rounded,
    btnType: btnType,
    disabled: isDisabled,
    variant: btnVariant
  }, props), icon && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: icon,
    color: iconVariant,
    iconSize: iconSize
  }), children);
};
var _default = Button;
exports.default = _default;