"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var variable = _interopRequireWildcard(require("../../variable"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "Buttonstyled__StyledButton",
  componentId: "v1txoo-0"
})(["padding:6px 16px;border-radius:4px;transition:all 0.5s ease;color:", ";", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], variable.white, function (props) {
  return props.btnType === "primary" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.blue, variable.blue) : props.btnType === "secondary" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.gray600, variable.gray600) : props.btnType === "success" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.green, variable.green) : props.btnType === "info" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.cyan, variable.cyan) : props.btnType === "warning" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.yellow, variable.yellow) : props.btnType === "danger" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.orange, variable.orange) : props.btnType === "purple" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.purple, variable.purple) : props.btnType === "light" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.gray100, variable.gray100) : props.btnType === "dark" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.gray800, variable.gray800) : props.btnType.includes("#") ? (0, _styledComponents.css)(["background:", ";border:0;"], props.btnType) : (0, _styledComponents.css)(["background:", ""], variable.gray800);
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["cursor:not-allowed;opacity:0.6;"]) : (0, _styledComponents.css)(["cursor:pointer;"]);
}, function (props) {
  return props.borderRadius ? (0, _styledComponents.css)(["border-radius:", ";"], props.borderRadius) : (0, _styledComponents.css)(["border-radius:4px;"]);
}, function (props) {
  return props.variant === "outlined" ? (0, _styledComponents.css)(["background:", ";"], variable.white) : (0, _styledComponents.css)([" "]);
}, function (props) {
  return props.variant === "outlined" && props.btnType === "primary" ? (0, _styledComponents.css)(["color:", ";"], variable.blue) : props.variant === "outlined" && props.btnType === "secondary" ? (0, _styledComponents.css)(["color:", ";"], variable.gray600) : props.variant === "outlined" && props.btnType === "success" ? (0, _styledComponents.css)(["color:", ";"], variable.green) : props.variant === "outlined" && props.btnType === "info" ? (0, _styledComponents.css)(["color:", ";"], variable.cyan) : props.variant === "outlined" && props.btnType === "warning" ? (0, _styledComponents.css)(["color:", ";"], variable.yellow) : props.variant === "outlined" && props.btnType === "danger" ? (0, _styledComponents.css)(["color:", ";"], variable.orange) : props.variant === "outlined" && props.btnType === "purple" ? (0, _styledComponents.css)(["color:", ";"], variable.purple) : props.variant === "outlined" && props.btnType === "light" ? (0, _styledComponents.css)(["color:", ";"], variable.gray100) : props.variant === "outlined" && props.btnType === "dark" ? (0, _styledComponents.css)(["color:", ";"], variable.gray800) : (0, _styledComponents.css)([" "]);
}, function (props) {
  return props.rounded === "rounded" ? (0, _styledComponents.css)(["border-radius:", ";"], variable.btnBorderRadius) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.color ? (0, _styledComponents.css)(["color:", ";"], props.color) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.block === "true" ? (0, _styledComponents.css)(["display:block;width:100%;"]) : (0, _styledComponents.css)([" "]);
}, function (props) {
  return props.size === "sm" ? (0, _styledComponents.css)(["padding:.28rem .8rem;font-size:.71094rem;line-height:1.5;border-radius:.15rem;"]) : props.size === "lg" ? (0, _styledComponents.css)(["padding:.5rem 1rem;font-size:1.01563rem;line-height:1.5;border-radius:.15rem;"]) : (0, _styledComponents.css)([" "]);
}, function (props) {
  return props.onHover ? (0, _styledComponents.css)(["&:hover{opacity:0.8;transition:all 0.5s ease;box-shadow:rgba(0,0,0,0.15) 2px 4px 5px 0px;}"]) : (0, _styledComponents.css)([""]);
});

var _default = StyledButton;
exports["default"] = _default;