"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledIcon = exports.StyledSearchBox = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledSearchBox = _styledComponents["default"].div.withConfig({
  displayName: "SearchBoxstyled__StyledSearchBox",
  componentId: "sc-1cgeyrw-0"
})(["#Search{outline:0;}#Search::-webkit-search-cancel-button{position:relative;right:20px;cursor:pointer;}input{padding:6px;transition:all 0.5s ease;}position:relative;display:inline-block;", "  ", "  ", " ", " ", " ", " ", "  .icon-search input{padding-left:30px;}", "  .icon-search input{padding-left:30px;}"], function (props) {
  return props.border ? (0, _styledComponents.css)(["& input{border:", ";}"], props.border) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.onFocus ? (0, _styledComponents.css)(["input{&:focus{box-shadow:0 0 3px rgb(212,222,225);border:1.8px solid rgb(210,208,208);outline:0;transition:all 0.5s ease;}}"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.bg ? (0, _styledComponents.css)(["& input{background-color:", ";}"], props.bg) : (0, _styledComponents.css)([" "]);
}, function (props) {
  return props.borderRadius ? (0, _styledComponents.css)(["& input{border-radius:", ";}"], props.borderRadius) : (0, _styledComponents.css)(["  "]);
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["  cursor:not-allowed;& label{cursor:not-allowed !important;}& input{cursor:not-allowed !important;}"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.isError ? (0, _styledComponents.css)(["  & input{background:rgb(248,217,215);border:1px solid #d00f0f;}& p{padding:5px 8px;color:#d00f0f;}"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.width ? (0, _styledComponents.css)(["width:", ";& input{width:100%;}"], props.width) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.width ? (0, _styledComponents.css)(["width:", ";& input{width:100%;}"], props.width) : (0, _styledComponents.css)([""]);
});

exports.StyledSearchBox = StyledSearchBox;

var StyledIcon = _styledComponents["default"].div.withConfig({
  displayName: "SearchBoxstyled__StyledIcon",
  componentId: "sc-1cgeyrw-1"
})([".iconStyle{position:absolute;left:8px;top:8px;}"]);

exports.StyledIcon = StyledIcon;