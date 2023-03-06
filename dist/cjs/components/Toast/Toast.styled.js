"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledToastMessage = exports.StyledToast = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var variable = _interopRequireWildcard(require("../../variable"));
var _Toast = _interopRequireDefault(require("react-bootstrap/Toast"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StyledToastMessage = _styledComponents.default.div.withConfig({
  displayName: "Toaststyled__StyledToastMessage",
  componentId: "sc-1at5qay-0"
})(["position:absolute;background-color:transparent;border-color:#23b397;"]);
exports.StyledToastMessage = StyledToastMessage;
var StyledToast = (0, _styledComponents.default)(_Toast.default).withConfig({
  displayName: "Toaststyled__StyledToast",
  componentId: "sc-1at5qay-1"
})(["", " ", " ", " ", ""], function (props) {
  return props.success ? (0, _styledComponents.css)(["background-color:#23b397;border-color:#23b397;& .toast-header{background-color:#23b397;color:#fff;}"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.error ? (0, _styledComponents.css)(["background-color:#f0643b;& .toast-header{background-color:#f0643b;color:#fff;}"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.warning ? (0, _styledComponents.css)(["background-color:#ff9800;& .toast-header{background-color:#ff9800;color:#fff;}"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.infoAlert ? (0, _styledComponents.css)(["background-color:#2196f3;& .toast-header{background-color:#2196f3;color:#fff;}"]) : (0, _styledComponents.css)([""]);
});
exports.StyledToast = StyledToast;