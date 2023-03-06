"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Table = _interopRequireDefault(require("react-bootstrap/Table"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StyledTable = (0, _styledComponents["default"])(_Table["default"]).withConfig({
  displayName: "Tablestyled__StyledTable",
  componentId: "sc-402nwz-0"
})(["", " ", ""], function (props) {
  return props.size === "xs" ? (0, _styledComponents.css)(["tr{height:.15rem;}th,td{padding:0.35rem;}"]) : props.size === "sm" ? (0, _styledComponents.css)(["height:.30rem;tr{height:.30rem;}th,td{padding:0.45rem;}"]) : props.size === "md" ? (0, _styledComponents.css)(["tr{height:.50rem;}"]) : props.size === "lg" ? (0, _styledComponents.css)(["height:2rem;tr{height:2rem;}th,td{padding:1rem;}"]) : (0, _styledComponents.css)(["height:1rem;"]);
}, function (props) {
  return props.heights ? (0, _styledComponents.css)(["height:", ";"], props.heights) : (0, _styledComponents.css)([""]);
});
var _default = StyledTable;
exports["default"] = _default;