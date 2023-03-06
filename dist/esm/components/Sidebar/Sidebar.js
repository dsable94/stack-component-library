"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Sidebar = require("./Sidebar.styled");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable no-unused-expressions */

var Sidebar = function Sidebar(props) {
  var children = props.children,
    position = props.position,
    color = props.color,
    onClick = props.onClick,
    className = props.className;
  return /*#__PURE__*/_react["default"].createElement(_Sidebar.StyledSideBar, props, children);
};
var _default = Sidebar;
exports["default"] = _default;