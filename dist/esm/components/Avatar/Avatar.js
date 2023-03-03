"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Avatar = require("./Avatar.styled");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Avatar = function Avatar(props) {
  var size = props.size,
    src = props.src,
    alt = props.alt,
    title = props.title,
    subTitle = props.subTitle,
    titleFont = props.titleFont,
    subTitleFont = props.subTitleFont,
    isBold = props.isBold,
    titleColor = props.titleColor,
    subTitleColor = props.subTitleColor;
  return /*#__PURE__*/_react["default"].createElement(_Avatar.StyledAvatarText, props, /*#__PURE__*/_react["default"].createElement(_Avatar.StyledAvatar, {
    size: size,
    src: src,
    alt: alt
  }), title && /*#__PURE__*/_react["default"].createElement(_Avatar.AvatarTitle, {
    titleFont: titleFont,
    isBold: isBold,
    titleColor: titleColor
  }, title), subTitle && /*#__PURE__*/_react["default"].createElement(_Avatar.AvatarSubTitle, {
    subTitleFont: subTitleFont,
    subTitleColor: subTitleColor
  }, subTitle));
};
var _default = Avatar;
exports["default"] = _default;