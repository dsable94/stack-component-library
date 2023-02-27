"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Typography = _interopRequireDefault(require("./Typography.styled"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Typography = function Typography(props) {
  var children = props.children,
    type = props.type,
    as = props.as,
    isBold = props.isBold,
    isItalic = props.isItalic,
    textAlign = props.textAlign,
    color = props.color,
    size = props.size,
    subHeading = props.subHeading,
    semiBold = props.semiBold;
  return /*#__PURE__*/_react.default.createElement(_Typography.default, _extends({
    type: type,
    as: as,
    isBold: isBold,
    isItalic: isItalic
  }, props), children);
};
var _default = Typography;
exports.default = _default;