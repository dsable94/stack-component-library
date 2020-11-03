"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledSocialMediaGroup = _styledComponents.default.div.withConfig({
  displayName: "SocialMediaGroupstyled__StyledSocialMediaGroup",
  componentId: "sc-11vdqlf-0"
})(["", " ", " ", " ", ""], function (props) {
  return props.color ? (0, _styledComponents.css)(["a{color:", ";}"], props.color) : (0, _styledComponents.css)(["a{color:#cecaca;}"]);
}, function (props) {
  return props.size ? (0, _styledComponents.css)(["a{font-size:", ";}"], props.size) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.isRound === true ? (0, _styledComponents.css)(["a{height:2rem;width:2rem;line-height:calc(2rem - 4px);display:flex;border:2px solid;border-radius:50%;align-items:center;justify-content:center;padding:8px;}"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.bgColor ? (0, _styledComponents.css)(["a{background:", ";color:white;}"], props.bgColor) : (0, _styledComponents.css)([""]);
});

var _default = StyledSocialMediaGroup;
exports.default = _default;