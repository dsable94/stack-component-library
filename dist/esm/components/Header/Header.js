"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = _interopRequireDefault(require("./Header.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Header = function Header(props) {
  var mode = props.mode,
      fixed = props.fixed,
      children = props.children,
      className = props.className;
  return /*#__PURE__*/_react["default"].createElement(_Header["default"], _extends({
    mode: mode,
    fixed: fixed
  }, props), children);
};

var _default = Header;
exports["default"] = _default;