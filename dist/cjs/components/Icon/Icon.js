"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = require("./Icon.styles");

var _excluded = ["className", "icon", "size", "color", "onClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import cx from 'classnames';
// import { prefix } from '../../tools/settings';
var Icon = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _className;

  var customClassName = _ref.className,
      icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, _excluded);

  var className = (_className = {}, _defineProperty(_className, "stack-icon", true), _defineProperty(_className, customClassName, true), _className);
  return /*#__PURE__*/_react.default.createElement(_Icon.StyledIcon, _extends({
    ref: ref,
    className: customClassName,
    icon: icon,
    color: color,
    iconSize: size,
    onClick: onClick
  }, rest));
});

var _default = Icon;
exports.default = _default;