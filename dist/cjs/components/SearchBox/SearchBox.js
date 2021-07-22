"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SearchBox = _interopRequireDefault(require("./SearchBox.styled"));

var _Icon = require("../Icon");

var _Box = require("../Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var iconStyle = {
    position: "absolute",
    left: "8px",
    top: '8px'
  };
  return /*#__PURE__*/_react.default.createElement(_SearchBox.default, {
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
    id: "Search",
    value: value,
    name: name
  }), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    style: _objectSpread({}, iconStyle),
    icon: icon,
    size: size
  }), isError && /*#__PURE__*/_react.default.createElement("p", null, hint)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: placeholder,
    id: id,
    value: value,
    name: name
  }), isError && /*#__PURE__*/_react.default.createElement("p", null, hint)));
};

var _default = SearchBox;
exports.default = _default;