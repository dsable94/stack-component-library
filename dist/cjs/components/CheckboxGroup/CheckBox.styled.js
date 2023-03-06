"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCheckbox = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StyledCheckbox = _styledComponents.default.div.withConfig({
  displayName: "CheckBoxstyled__StyledCheckbox",
  componentId: "sc-jtjt1r-0"
})(["display:flex;align-items:center;& label{margin:0;padding-left:9px;}.checklabel{display:block;position:relative;padding-left:35px;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.checklabel input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}.checkmark{position:absolute;top:0;left:0;height:20px;width:20px;border-radius:3px;background-color:#eee;}.checklabel:hover input ~ .checkmark{background-color:#ccc;}.checklabel input:checked ~ .checkmark{background-color:#a4a6a7;}.checkmark:after{content:\"\";position:absolute;display:none;}.checklabel input:checked ~ .checkmark:after{display:block;}.checklabel .checkmark:after{left:7px;top:3px;width:6px;height:11px;border:solid white;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}", " ", ""], function (props) {
  return props.disabled ? (0, _styledComponents.css)(["  cursor:not-allowed;& label{cursor:not-allowed !important;}& input{cursor:not-allowed !important;}"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.isError ? (0, _styledComponents.css)(["  & .checkmark{background-color:#ef5b5b;}& .checklabel:hover input ~ .checkmark{background-color:#ef5b5b;}& .checklabel input:checked ~ .checkmark{background-color:rgb(181,39,29);}"]) : (0, _styledComponents.css)([""]);
});
exports.StyledCheckbox = StyledCheckbox;