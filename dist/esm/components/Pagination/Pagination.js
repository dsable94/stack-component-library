"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Pagination = _interopRequireDefault(require("./Pagination.styled"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import Pagination from 'react-bootstrap/Pagination';

var StackPagination = function StackPagination(props) {
  var children = props.children,
    bgColor = props.bgColor,
    paginationType = props.paginationType,
    size = props.size,
    active = props.active,
    disabled = props.disabled,
    activeLabel = props.activeLabel;
  return /*#__PURE__*/_react["default"].createElement(_Pagination["default"], {
    bgColor: bgColor,
    size: size,
    paginationType: paginationType,
    activeLabel: activeLabel,
    active: active,
    disabled: disabled
  }, children);
};
var _default = StackPagination;
exports["default"] = _default;