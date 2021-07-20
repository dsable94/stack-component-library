"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAvatar = exports.AvatarSubTitle = exports.AvatarTitle = exports.StyledAvatarText = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledAvatarText = _styledComponents.default.div.withConfig({
  displayName: "Avatarstyled__StyledAvatarText",
  componentId: "sc-1bzs7vc-0"
})([""]);

exports.StyledAvatarText = StyledAvatarText;

var AvatarTitle = _styledComponents.default.div.withConfig({
  displayName: "Avatarstyled__AvatarTitle",
  componentId: "sc-1bzs7vc-1"
})(["", " ", " ", ""], function (props) {
  return props.titleFont ? (0, _styledComponents.css)([" font-size:", ";"], props.titleFont) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.isBold ? (0, _styledComponents.css)([" font-weight:", ";"], props.isBold) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.titleColor ? (0, _styledComponents.css)([" color:", ";"], props.titleColor) : (0, _styledComponents.css)([""]);
});

exports.AvatarTitle = AvatarTitle;

var AvatarSubTitle = _styledComponents.default.div.withConfig({
  displayName: "Avatarstyled__AvatarSubTitle",
  componentId: "sc-1bzs7vc-2"
})(["", " ", ""], function (props) {
  return props.subTitleFont ? (0, _styledComponents.css)([" font-size:", ";"], props.subTitleFont) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.subTitleColor ? (0, _styledComponents.css)([" color:", ";"], props.subTitleColor) : (0, _styledComponents.css)([""]);
});

exports.AvatarSubTitle = AvatarSubTitle;

var StyledAvatar = _styledComponents.default.img.withConfig({
  displayName: "Avatarstyled__StyledAvatar",
  componentId: "sc-1bzs7vc-3"
})(["vertical-align:middle;border-radius:9999px;margin-bottom:10px;", ""], function (props) {
  return props.size === 'sm' ? (0, _styledComponents.css)(["height:35px;width:35px;"]) : props.size === 'lg' ? (0, _styledComponents.css)(["height:75px;width:75px;"]) : (0, _styledComponents.css)(["height:50px;width:50px;"]);
});

exports.StyledAvatar = StyledAvatar;