"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledCardRight = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var variable = _interopRequireWildcard(require("../../variable"));

var _Card = _interopRequireDefault(require("react-bootstrap/Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledCard = (0, _styledComponents["default"])(_Card["default"]).withConfig({
  displayName: "Cardstyled__StyledCard",
  componentId: "sc-1b95mne-0"
})(["border:0px solid #ccc;", " ", " ", " ", " ", " ", " ", " ", " h5{font-size:", ";font-weight:500;}img{max-width:100%;}.card-body{position:relative;}"], function (props) {
  return props.boxShadow ? (0, _styledComponents.css)(["box-shadow:", ";"], props.boxShadow) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.border ? (0, _styledComponents.css)(["border:", ";"], props.border) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.width ? (0, _styledComponents.css)(["width:", ";"], props.width) : (0, _styledComponents.css)(["width:100%;"]);
}, function (props) {
  return props.alignText ? (0, _styledComponents.css)(["text-align:", ";justify-content:", ";"], props.alignText, props.alignText) : (0, _styledComponents.css)(["text-align:inherit;"]);
}, function (props) {
  return props.alignContent ? (0, _styledComponents.css)(["margin:0 auto;"]) : (0, _styledComponents.css)(["margin:auto;"]);
}, function (props) {
  return props.color ? (0, _styledComponents.css)(["color:", ";"], props.color) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.imgPos === "bg" ? (0, _styledComponents.css)(["color:", " !important;"], variable.white) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.bgColor === "primary" ? (0, _styledComponents.css)(["background-color:", ";h5,p{color:", "}"], variable.primary, variable.white) : props.bgColor === "secondary" ? (0, _styledComponents.css)(["background-color:", ";h5,p{color:", "}"], variable.secondary, variable.white) : props.bgColor === "success" ? (0, _styledComponents.css)(["background-color:", ";h5,p{color:", "}"], variable.success, variable.white) : props.bgColor === "info" ? (0, _styledComponents.css)(["background-color:", ";h5,p{color:", "}"], variable.info, variable.white) : props.bgColor === "warning" ? (0, _styledComponents.css)(["background-color:", ";h5,p{color:", "}"], variable.warning, variable.white) : props.bgColor === "danger" ? (0, _styledComponents.css)(["background-color:", ";h5,p{color:", "}"], variable.danger, variable.white) : (0, _styledComponents.css)(["background-color:", ";"], props.bgColor);
}, variable.h5FontSize);

var StyledCardRight = _styledComponents["default"].span.withConfig({
  displayName: "Cardstyled__StyledCardRight",
  componentId: "sc-1b95mne-1"
})(["position:absolute;right:8px;left:auto;top:1.25rem;"]);

exports.StyledCardRight = StyledCardRight;
var _default = StyledCard;
exports["default"] = _default;