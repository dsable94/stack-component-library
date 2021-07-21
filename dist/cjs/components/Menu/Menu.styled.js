"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var variable = _interopRequireWildcard(require("../../variable"));

var _Dropdown = _interopRequireDefault(require("react-bootstrap/Dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledMenu = (0, _styledComponents.default)(_Dropdown.default).withConfig({
  displayName: "Menustyled__StyledMenu",
  componentId: "sc-9vanah-0"
})(["border-radius:4px;color:", ";", " ", " ", " ", " ", " ", " ", " ", " svg{margin:0 10px;font-size:12px;}.dropdown-menu.show{border:none;box-shadow:0 0 35px 0 rgba(154,161,171,.3);padding-top:0;border-radius:0;right:0 !important;left:auto !important;-webkit-transition:all .5s ease-out;-ms-transition:all .5s ease-out;transition:all .5s ease-out;transform:rotateX(90deg);transform-origin:top;}.btn-menu{padding:0;:focus{box-shadow:none;}}.dropdown-item{padding:0.35rem 1.2rem;font-weight:400;color:#6c757d;text-align:inherit;white-space:nowrap;font-size:.8125rem;text-transform:capitalize;svg{margin-left:0;width:13px;height:13px;font-weight:300;}}.menu-header{background-color:#414d5f;padding:12px 20px;margin-top:-.25rem;font-size:0.9rem !important;margin-bottom:0.25rem;color:#ffffff !important;}.dropdown-toggle::after{display:none;}.btn-default{color:#6c757d;:focus{box-shadow:none;}}hr{display:block;height:1px;border:0;border-top:1px solid #e9ecef;margin:0;padding:0;}.menu-dots{display:inline-block;width:16px;transition:.35s ease-in-out;height:16px;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDI2LjY2NyA0MjYuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjYuNjY3IDQyNi42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Y2lyY2xlIGN4PSI0Mi42NjciIGN5PSIyMTMuMzMzIiByPSI0Mi42NjciLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBjeD0iMjEzLjMzMyIgY3k9IjIxMy4zMzMiIHI9IjQyLjY2NyIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8Y2lyY2xlIGN4PSIzODQiIGN5PSIyMTMuMzMzIiByPSI0Mi42NjciLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==);}"], variable.white, function (props) {
  return props.btnType === "menu" ? (0, _styledComponents.css)(["background:red !important;border:2px solid;padding:0;"]) : props.btnType === "primary" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.blue, variable.blue) : props.btnType === "secondary" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.gray600, variable.gray600) : props.btnType === "success" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.green, variable.green) : props.btnType === "info" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.cyan, variable.cyan) : props.btnType === "warning" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.yellow, variable.yellow) : props.btnType === "danger" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.orange, variable.orange) : props.btnType === "purple" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.purple, variable.purple) : props.btnType === "light" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.gray100, variable.gray100) : props.btnType === "dark" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.gray800, variable.gray800) : (0, _styledComponents.css)(["background:transparent;border:1px solid transparent;"]);
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["cursor:not-allowed;opacity:0.6;"]) : (0, _styledComponents.css)(["cursor:pointer;"]);
}, function (props) {
  return props.type === "outlined" ? (0, _styledComponents.css)(["background:", ";"], variable.white) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.type === "outlined" ? (0, _styledComponents.css)(["background:", ";"], variable.white) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.rounded === "rounded" ? (0, _styledComponents.css)(["border-radius:", ";"], variable.btnBorderRadius) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.block === "true" ? (0, _styledComponents.css)(["display:block;width:100%;"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.size === "sm" ? (0, _styledComponents.css)(["padding:.28rem .8rem;font-size:.71094rem;line-height:1.5;border-radius:.15rem;"]) : props.size === "lg" ? (0, _styledComponents.css)(["padding:.5rem 1rem;font-size:1.01563rem;line-height:1.5;border-radius:.15rem;"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.Iconsize === "sm" ? (0, _styledComponents.css)(["font-size:12px;"]) : props.Iconsize === "md" ? (0, _styledComponents.css)(["font-size:14px;"]) : props.Iconsize === "lg" ? (0, _styledComponents.css)(["font-size:16px;"]) : (0, _styledComponents.css)([""]);
});
var _default = StyledMenu;
exports.default = _default;