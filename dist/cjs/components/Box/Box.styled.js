"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBox = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var variable = _interopRequireWildcard(require("../../variable"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StyledBox = _styledComponents.default.div.withConfig({
  displayName: "Boxstyled__StyledBox",
  componentId: "sc-171tzrz-0"
})(["", "   ", "   ", "   ", "   ", "   ", "   ", "  ", " ", " ", " ", " ", " ", " ", " ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return props.border ? (0, _styledComponents.css)([" border:", ";"], props.border) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.borderRight ? (0, _styledComponents.css)([" border-right:", ";"], props.borderRight) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.borderLeft ? (0, _styledComponents.css)([" border-left:", ";"], props.borderLeft) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.borderTop ? (0, _styledComponents.css)([" border-top:", ";"], props.borderTop) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.borderBottom ? (0, _styledComponents.css)([" border-bottom:", ";"], props.borderBottom) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.borderRadius ? (0, _styledComponents.css)([" border-radius:", ";"], props.borderRadius) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.bgColor ? (0, _styledComponents.css)([" background-color:", ";"], props.bgColor) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.opacity ? (0, _styledComponents.css)([" opacity:", ";"], props.opacity) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.width ? (0, _styledComponents.css)([" width:", ";"], props.width) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.background ? (0, _styledComponents.css)([" background:", ";"], props.background) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.bgImg ? (0, _styledComponents.css)(["  background-image:", ";height:100vh;background-size:cover;background-repeat:no-repeat;color:white;"], props.bgImg) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.display ? (0, _styledComponents.css)(["display:", ";"], props.display) : (0, _styledComponents.css)(["display:block;"]);
}, function (props) {
  return props.textAlign === "center" ? (0, _styledComponents.css)(["text-align:center;"]) : props.textAlign === "left" ? (0, _styledComponents.css)(["text-align:left;"]) : props.textAlign === "right" ? (0, _styledComponents.css)(["text-align:right;"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.p ? (0, _styledComponents.css)(["padding:", ";"], props.p) : (0, _styledComponents.css)(["padding:0px;"]);
}, function (props) {
  return props.m ? (0, _styledComponents.css)([" margin:", ";"], props.m) : (0, _styledComponents.css)([" margin:0px;"]);
}, function (props) {
  return props.mt ? (0, _styledComponents.css)([" margin-top:", ";"], props.mt) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.mb ? (0, _styledComponents.css)([" margin-bottom:", ";"], props.mb) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.ml ? (0, _styledComponents.css)([" margin-left:", ";"], props.ml) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.mr ? (0, _styledComponents.css)([" margin-right:", ";"], props.mr) : (0, _styledComponents.css)([" "]);
}, function (props) {
  return props.pt ? (0, _styledComponents.css)([" padding-top:", ";"], props.pt) : (0, _styledComponents.css)([" "]);
}, function (props) {
  return props.pb ? (0, _styledComponents.css)([" padding-bottom:", ";"], props.pb) : (0, _styledComponents.css)([" "]);
}, function (props) {
  return props.pl ? (0, _styledComponents.css)([" padding-left:", ";"], props.pl) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.pr ? (0, _styledComponents.css)([" padding-right:", ";"], props.pr) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.justifyItems === 'center' ? (0, _styledComponents.css)(["justify-items:center;"]) : props.justifyItems === 'flex-start' ? (0, _styledComponents.css)(["justify-items:flex-start;"]) : props.justifyItems === 'flex-end' ? (0, _styledComponents.css)(["justify-items:flex-end;"]) : props.justifyItems === 'space-between' ? (0, _styledComponents.css)(["justify-items:space-between;"]) : props.justifyItems === 'space-around' ? (0, _styledComponents.css)(["justify-items:space-around;"]) : props.justifyItems === 'space-evenly' ? (0, _styledComponents.css)(["justify-items:space-evenly;"]) : props.justifyItems === 'stretch' ? (0, _styledComponents.css)(["justify-items:stretch;"]) : props.justifyItems === 'self-start' ? (0, _styledComponents.css)(["justify-items:self-start;"]) : props.justifyItems === 'left' ? (0, _styledComponents.css)(["justify-items:left;"]) : props.justifyItems === 'right' ? (0, _styledComponents.css)(["justify-items:right;"]) : props.justifyItems === 'start' ? (0, _styledComponents.css)(["justify-items:start;"]) : props.justifyItems === 'end' ? (0, _styledComponents.css)(["justify-items:end;"]) : props.justifyItems === 'baseline' ? (0, _styledComponents.css)(["justify-items:baseline;"]) : props.justifyItems === 'first-baseline' ? (0, _styledComponents.css)(["justify-items:first baseline;"]) : props.justifyItems === 'last-baseline' ? (0, _styledComponents.css)(["justify-items:last baseline;"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.justifyContent === 'flex-start' ? (0, _styledComponents.css)(["justify-content:flex-start;"]) : props.justifyContent === 'flex-end' ? (0, _styledComponents.css)(["justify-content:flex-end;"]) : props.justifyContent === 'center' ? (0, _styledComponents.css)(["justify-content:center;"]) : props.justifyContent === 'space-between' ? (0, _styledComponents.css)(["justify-content:space-between;"]) : props.justifyContent === 'space-around' ? (0, _styledComponents.css)(["justify-content:space-around;"]) : props.justifyContent === 'start' ? (0, _styledComponents.css)(["justify-content:start;"]) : props.justifyContent === 'end' ? (0, _styledComponents.css)(["justify-content:end;"]) : props.justifyContent === 'left' ? (0, _styledComponents.css)(["justify-content:left;"]) : props.justifyContent === 'right' ? (0, _styledComponents.css)(["justify-content:right;"]) : props.justifyContent === 'space-evenly' ? (0, _styledComponents.css)(["justify-content:space-evenly;"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.alignItems === 'flex-start' ? (0, _styledComponents.css)(["align-items:flex-start;"]) : props.alignItems === 'flex-end' ? (0, _styledComponents.css)(["align-items:flex-end;"]) : props.alignItems === 'center' ? (0, _styledComponents.css)(["align-items:center;"]) : props.alignItems === 'stretch' ? (0, _styledComponents.css)(["align-items:stretch;"]) : props.alignItems === 'baseline' ? (0, _styledComponents.css)(["align-items:baseline;"]) : props.alignItems === 'start' ? (0, _styledComponents.css)(["align-items:start;"]) : props.alignItems === 'end' ? (0, _styledComponents.css)(["align-items:end;"]) : props.alignItems === 'first-baseline' ? (0, _styledComponents.css)(["align-items:first baseline;"]) : props.alignItems === 'last baseline' ? (0, _styledComponents.css)(["align-items:last-baseline;"]) : props.alignItems === 'self-start' ? (0, _styledComponents.css)(["align-items:self-start;"]) : props.alignItems === 'self-end' ? (0, _styledComponents.css)(["align-items:self-end;"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.flexWrap === 'nowrap' ? (0, _styledComponents.css)(["flex-wrap:nowrap"]) : props.flexWrap === 'wrap' ? (0, _styledComponents.css)(["flex-wrap:wrap;"]) : props.flexWrap === 'wrap-reverse' ? (0, _styledComponents.css)(["flex-wrap:wrap-reverse"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.flexDirection === 'column' ? (0, _styledComponents.css)(["flex-direction:column;"]) : props.flexDirection === 'column-reverse' ? (0, _styledComponents.css)(["flex-direction:column-reverse"]) : props.flexDirection === 'initial' ? (0, _styledComponents.css)(["flex-direction:initial"]) : props.flexDirection === 'row' ? (0, _styledComponents.css)(["flex-direction:row"]) : props.flexDirection === 'row-reverse' ? (0, _styledComponents.css)(["flex-direction:row-reverse"]) : props.flexDirection === 'unset' ? (0, _styledComponents.css)(["flex-direction:unset;"]) : (0, _styledComponents.css)(["flex-direction:inherit"]);
}, function (props) {
  return props.alignSelf === 'flex-start' ? (0, _styledComponents.css)(["flex-direction:flex-start"]) : props.alignSelf === 'flex-end' ? (0, _styledComponents.css)(["flex-direction:flex-end"]) : props.alignSelf === 'center' ? (0, _styledComponents.css)(["flex-direction:center"]) : props.alignSelf === 'baseline' ? (0, _styledComponents.css)(["flex-direction:baseline"]) : props.alignSelf === 'stretch' ? (0, _styledComponents.css)(["flex-direction:stretch;"]) : (0, _styledComponents.css)(["flex-direction:auto"]);
});
exports.StyledBox = StyledBox;