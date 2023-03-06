"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Notification = require("./Notification.styled");
var _Icon = require("../Icon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Notification = function Notification(props) {
  var count = props.count,
    variant = props.variant,
    size = props.size;
  return /*#__PURE__*/_react["default"].createElement(_Notification.StyledNotification, {
    count: count,
    variant: variant
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    size: size,
    icon: "notifications"
  }));
};
var _default = Notification;
exports["default"] = _default;