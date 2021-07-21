"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSwitch = exports.SwitchLabel = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SwitchLabel = _styledComponents.default.div.withConfig({
  displayName: "Switchstyled__SwitchLabel",
  componentId: "n8ipg6-0"
})(["order:2;padding-left:10px;font-size:14px;margin:0;", " ", ""], function (props) {
  return props.isBold ? (0, _styledComponents.css)([" font-weight:", ";"], props.isBold) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.color ? (0, _styledComponents.css)([" color:", ";"], props.color) : (0, _styledComponents.css)([""]);
});

exports.SwitchLabel = SwitchLabel;

var StyledSwitch = _styledComponents.default.div.withConfig({
  displayName: "Switchstyled__StyledSwitch",
  componentId: "n8ipg6-1"
})(["display:flex;flex-direction:row;align-items:center;.switch{position:relative;display:inline-block;width:37px;height:20px;margin:0;}.switch input{opacity:0;width:0;height:0;}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;}.slider:before{position:absolute;content:\"\";height:15px;width:15px;left:2px;bottom:3px;background-color:white;-webkit-transition:.4s;transition:.4s;}input:checked + .slider{background-color:#5089de;}input:focus + .slider{box-shadow:0 0 1px #5089de;}input:checked + .slider:before{-webkit-transform:translateX(18px);-ms-transform:translateX(18px);transform:translateX(18px);}.slider.round{border-radius:34px;}.slider.round:before{border-radius:50%;}", ""], function (props) {
  return props.size === "sm" ? (0, _styledComponents.css)([""]) : props.size === "lg" ? (0, _styledComponents.css)([""]) : (0, _styledComponents.css)([""]);
}); // export default StyledSwitch;


exports.StyledSwitch = StyledSwitch;