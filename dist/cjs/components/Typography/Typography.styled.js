"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Typography = _styledComponents.default.div.withConfig({
  displayName: "Typographystyled__Typography",
  componentId: "sc-1fat070-0"
})(["{display:block;margin-left:0;margin-right:0;margin-bottom:0;", " ", " ", " ", " ", " ", " ", " ", "}"], function (props) {
  return props.color ? (0, _styledComponents.css)([" color:", ";"], props.color) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.textShadow ? (0, _styledComponents.css)([" text-shadow:", ";"], props.textShadow) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.textAlign === "center" ? (0, _styledComponents.css)(["text-align:center;"]) : props.textAlign === "left" ? (0, _styledComponents.css)(["text-align:left;"]) : props.textAlign === "right" ? (0, _styledComponents.css)(["text-align:right;"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.type === "heading" ? (0, _styledComponents.css)(["font-weight:bold;"]) : props.type === "subHeading" ? (0, _styledComponents.css)(["font-weight:600;"]) : props.type === "light" ? (0, _styledComponents.css)(["font-weight:300;"]) : (0, _styledComponents.css)(["font-weight:normal;"]);
}, function (props) {
  return props.isBold ? (0, _styledComponents.css)(["font-weight:bold;"]) : (0, _styledComponents.css)(["font-weight:normal;"]);
}, function (props) {
  return props.isItalic ? (0, _styledComponents.css)(["font-style:italic;"]) : (0, _styledComponents.css)(["font-style:normal;"]);
}, function (props) {
  return props.as === "h1" ? (0, _styledComponents.css)(["font-size:2em;"]) : props.as === "h2" ? (0, _styledComponents.css)(["font-size:1.5em;"]) : props.as === "h3" ? (0, _styledComponents.css)(["font-size:1.17em;"]) : props.as === "h4" ? (0, _styledComponents.css)(["font-size:1em;"]) : props.as === "h5" ? (0, _styledComponents.css)(["font-size:.83em;"]) : props.as === "h6" ? (0, _styledComponents.css)(["font-size:.67em;"]) : props.as === "span" ? (0, _styledComponents.css)(["display:inline-block;"]) : (0, _styledComponents.css)(["font-size:1em;"]);
}, function (props) {
  return props.size ? (0, _styledComponents.css)([" font-size:", ";"], props.size) : (0, _styledComponents.css)([""]);
});

var _default = Typography;
exports.default = _default;