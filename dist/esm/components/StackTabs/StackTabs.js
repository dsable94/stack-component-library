"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _StackTabs = _interopRequireDefault(require("./StackTabs.styled"));
var _Card = _interopRequireDefault(require("react-bootstrap/Card"));
var _Tabs = _interopRequireDefault(require("react-bootstrap/Tabs"));
var _Tab = _interopRequireDefault(require("react-bootstrap/Tab"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var StackTabs = function StackTabs(props) {
  var width = props.width,
    activeKey = props.activeKey,
    defaultActiveKey = props.defaultActiveKey,
    id = props.id,
    mountOnEnter = props.mountOnEnter,
    onSelect = props.onSelect,
    transition = props.transition,
    unmountOnExit = props.unmountOnExit,
    variant = props.variant,
    children = props.children,
    className = props.className;
  if (variant === "leftPills") {
    return /*#__PURE__*/_react["default"].createElement(_StackTabs["default"], _extends({
      defaultActiveKey: defaultActiveKey,
      id: id
    }, props), children);
  } else {
    return /*#__PURE__*/_react["default"].createElement(_StackTabs["default"], _extends({
      defaultActiveKey: defaultActiveKey,
      id: id
    }, props), children);
  }
};
var _default = StackTabs;
exports["default"] = _default;