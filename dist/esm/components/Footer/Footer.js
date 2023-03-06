"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Footer = _interopRequireDefault(require("./Footer.styled"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Footer = function Footer(props) {
  var mode = props.mode,
    fixed = props.fixed,
    children = props.children;
  return /*#__PURE__*/_react["default"].createElement(_Footer["default"], {
    mode: mode,
    fixed: fixed
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Footer"));
};
var _default = Footer;
exports["default"] = _default;