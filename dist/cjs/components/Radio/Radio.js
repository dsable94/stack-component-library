"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Radio = require("./Radio.styled");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Radio = function Radio(props) {
  var label = props.label,
    disabled = props.disabled,
    isError = props.isError,
    onClick = props.onClick,
    value = props.value,
    name = props.name;
  return /*#__PURE__*/_react.default.createElement(_Radio.StyledRadio, props, /*#__PURE__*/_react.default.createElement("label", {
    class: "radio-btn"
  }, label, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    name: name,
    disabled: disabled,
    isError: isError
  }), /*#__PURE__*/_react.default.createElement("span", {
    class: "radio-check"
  })));
};
var _default = Radio;
exports.default = _default;