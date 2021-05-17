"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Menu = _interopRequireDefault(require("./Menu.styled"));

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Menu = function Menu(props) {
  var btnType = props.btnType,
      iconOption = props.iconOption,
      id = props.id,
      value = props.value,
      isDisabled = props.isDisabled,
      positionMenu = props.positionMenu,
      className = props.className,
      btnVariant = props.btnVariant,
      children = props.children,
      rounded = props.rounded,
      size = props.size,
      block = props.block,
      Iconsize = props.Iconsize,
      icon = props.icon,
      iconVariant = props.iconVariant,
      options = props.options;
  return /*#__PURE__*/_react["default"].createElement(_Menu["default"], null, /*#__PURE__*/_react["default"].createElement(_Menu["default"].Toggle, _extends({
    variant: btnType,
    className: className,
    type: btnVariant,
    size: size,
    disabled: isDisabled,
    rounded: rounded,
    block: block,
    id: id
  }, props), value, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    icon: icon
  }), iconOption && /*#__PURE__*/_react["default"].createElement("span", {
    className: "menu-dots"
  }), children), /*#__PURE__*/_react["default"].createElement(_Menu["default"].Menu, {
    positionMenu: positionMenu
  }, options.map(function (item, key) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, item.isDivider ? /*#__PURE__*/_react["default"].createElement("hr", null) : null, item.headerText ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "menu-header"
    }, item.headerText) : /*#__PURE__*/_react["default"].createElement(_Menu["default"].Item, {
      href: item.link,
      onClick: item.handler
    }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      icon: item.icon
    }), item.item));
  })));
};

var _default = Menu;
exports["default"] = _default;