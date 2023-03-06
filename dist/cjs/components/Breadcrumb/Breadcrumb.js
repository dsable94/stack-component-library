"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumb = void 0;
Object.defineProperty(exports, "StyledBreadcrumb", {
  enumerable: true,
  get: function get() {
    return _Breadcrumb.default;
  }
});
var _react = _interopRequireDefault(require("react"));
var _Breadcrumb = _interopRequireDefault(require("./Breadcrumb.styled"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Breadcrumb = function Breadcrumb(props) {
  var children = props.children,
    bgColor = props.bgColor,
    paginationType = props.paginationType,
    size = props.size,
    color = props.color;
  return /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, {
    bgColor: bgColor,
    size: size,
    paginationType: paginationType,
    color: color
  }, children);
};
exports.Breadcrumb = Breadcrumb;