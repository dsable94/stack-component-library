"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Breadcrumb = _interopRequireDefault(require("react-bootstrap/Breadcrumb"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StyledBreadcrumb = (0, _styledComponents["default"])(_Breadcrumb["default"]).withConfig({
  displayName: "Breadcrumbstyled__StyledBreadcrumb",
  componentId: "sc-17aff3s-0"
})(["overflow:hidden;.breadcrumb{background-color:transparent;display:inline-flex;}.breadcrumb-item+.breadcrumb-item::before{content:\">\";}.breadcrumb a:hover{text-decoration:none;}", " ", "  ", ""], function (props) {
  return props.bgColor ? (0, _styledComponents.css)(["& .breadcrumb{background-color:", ";}"], props.bgColor) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.color ? (0, _styledComponents.css)(["& .breadcrumb a{color:", ";};"], props.color) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.size === "sm" ? (0, _styledComponents.css)([""]) : props.size === "md" ? (0, _styledComponents.css)(["font-size:18px;"]) : props.size === "lg" ? (0, _styledComponents.css)(["font-size:22px;"]) : (0, _styledComponents.css)([""]);
});
var _default = StyledBreadcrumb;
exports["default"] = _default;