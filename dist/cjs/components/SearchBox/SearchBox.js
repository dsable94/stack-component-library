"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SearchBox = require("./SearchBox.styled");
var _Icon = require("../Icon");
var _Box = require("../Box");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SearchBox = function SearchBox(props) {
  var placeholder = props.placeholder,
    size = props.size,
    bg = props.bg,
    borderRadius = props.borderRadius,
    value = props.value,
    id = props.id,
    name = props.name,
    border = props.border,
    icon = props.icon,
    onFocus = props.onFocus,
    onClick = props.onClick,
    isError = props.isError,
    disabled = props.disabled,
    hint = props.hint,
    width = props.width,
    className = props.className,
    searchIcon = props.searchIcon,
    onChange = props.onChange,
    onKeyDown = props.onKeyDown;
  return /*#__PURE__*/_react.default.createElement(_SearchBox.StyledSearchBox, {
    className: className,
    borderRadius: borderRadius,
    bg: bg,
    border: border,
    size: size,
    onFocus: onFocus,
    onClick: onClick,
    isError: isError,
    disabled: disabled,
    width: width,
    onChange: onChange,
    onKeyDown: onKeyDown
  }, searchIcon ? /*#__PURE__*/_react.default.createElement(_Box.Box, {
    className: "icon-search"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: placeholder,
    id: id,
    value: value,
    name: name
  }), /*#__PURE__*/_react.default.createElement(_SearchBox.StyledIcon, null, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    className: "iconStyle",
    icon: icon,
    size: size
  })), isError && /*#__PURE__*/_react.default.createElement("p", null, hint)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: placeholder,
    id: id,
    value: value,
    name: name
  }), isError && /*#__PURE__*/_react.default.createElement("p", null, hint)));
};
var _default = SearchBox;
exports.default = _default;