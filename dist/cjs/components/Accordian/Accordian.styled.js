"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Accordion = _interopRequireDefault(require("react-bootstrap/Accordion"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StyledAccordion = (0, _styledComponents.default)(_Accordion.default).withConfig({
  displayName: "Accordianstyled__StyledAccordion",
  componentId: "sc-126ovhn-0"
})(["", "  ", " .active.card-header span{-ms-transform:rotate(180deg);transform:rotate(180deg);transition:all 0.3s;}.btn-link:focus{box-shadow:none!important;}.btn-link{text-align:left;width:200px;}", ""], function (props) {
  return props.background ? (0, _styledComponents.css)([" background-color:", ";"], props.background) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.position === 'right' ? (0, _styledComponents.css)(["position:absolute;left:auto;display:block;right:20px;"]) : (0, _styledComponents.css)(["  "]);
}, function (props) {
  return props.width ? (0, _styledComponents.css)([" width:", ";"], props.width) : (0, _styledComponents.css)(["background-color:\"#000000\""]);
});
var _default = StyledAccordion;
exports.default = _default;