"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var variable = _interopRequireWildcard(require("../../variable"));
var _Pagination = _interopRequireDefault(require("react-bootstrap/Pagination"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StyledPagination = (0, _styledComponents["default"])(_Pagination["default"]).withConfig({
  displayName: "Paginationstyled__StyledPagination",
  componentId: "sc-1iytvry-0"
})(["overflow:hidden;", " ", " ", " ", " ", ""], function (props) {
  return props.width ? (0, _styledComponents.css)(["width:", ";"], props.width) : (0, _styledComponents.css)(["width:100%;"]);
}, function (props) {
  return props.bgColor === "primary" ? (0, _styledComponents.css)(["li.page-item .page-link{background-color:", ";color:", ";h5,p{color:", "}};li.page-item.active .page-link{background-color:", ";color:", ";h5,p{color:", "}};"], variable.primary, variable.white, variable.white, variable.white, variable.primary, variable.primary) : props.bgColor === "secondary" ? (0, _styledComponents.css)(["li.page-item .page-link{background-color:", ";color:", ";h5,p{color:", "}};li.page-item.active .page-link{background-color:", ";color:", ";h5,p{color:", "}};"], variable.secondary, variable.white, variable.white, variable.white, variable.secondary, variable.secondary) : props.bgColor === "success" ? (0, _styledComponents.css)(["li.page-item .page-link{background-color:", ";color:", ";h5,p{color:", "}};li.page-item.active .page-link{background-color:", ";color:", ";h5,p{color:", "}};"], variable.success, variable.white, variable.white, variable.white, variable.success, variable.success) : props.bgColor === "info" ? (0, _styledComponents.css)(["li.page-item .page-link{background-color:", ";color:", ";h5,p{color:", "}};li.page-item.active .page-link{background-color:", ";color:", ";h5,p{color:", "}};"], variable.info, variable.white, variable.white, variable.white, variable.info, variable.info) : props.bgColor === "warning" ? (0, _styledComponents.css)(["li.page-item .page-link{background-color:", ";color:", ";h5,p{color:", "}};li.page-item.active .page-link{background-color:", ";color:", ";h5,p{color:", "}};"], variable.warning, variable.white, variable.white, variable.white, variable.warning, variable.warning) : props.bgColor === "danger" ? (0, _styledComponents.css)(["li.page-item .page-link{background-color:", ";color:", ";h5,p{color:", "}};li.page-item.active .page-link{background-color:", ";color:", ";h5,p{color:", "}};"], variable.danger, variable.white, variable.white, variable.white, variable.danger, variable.danger) : (0, _styledComponents.css)(["background-color:", ";"], variable.ColorWhiteBase);
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["cursor:not-allowed;opacity:0.6;"]) : (0, _styledComponents.css)(["cursor:pointer;"]);
}, function (props) {
  return props.size === "sm" ? (0, _styledComponents.css)(["li.page-item .page-link{padding:.28rem .8rem;font-size:.71094rem;line-height:1.5;border-radius:.15rem;}"]) : props.size === "lg" ? (0, _styledComponents.css)(["li.page-item .page-link{padding:.5rem 1rem;font-size:1.01563rem;line-height:1.5;border-radius:.15rem;}"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.paginationType === "rounded" ? (0, _styledComponents.css)(["li{padding-right:8px;};li.page-item .page-link{height:35px;width:35px;text-align:center;border-radius:", ";};li.active span,a{border-radius:", ";};.page-item:first-child .page-link{border-bottom-left-radius:50%;border-top-left-radius:50%;};.page-item:last-child .page-link{border-bottom-right-radius:50%;border-top-right-radius:50%;}"], variable.borderRadiusPagination, variable.borderRadiusPagination) : (0, _styledComponents.css)([""]);
});
var _default = StyledPagination;
exports["default"] = _default;