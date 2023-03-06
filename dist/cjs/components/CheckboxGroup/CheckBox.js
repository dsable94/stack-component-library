"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CheckBox = require("./CheckBox.styled");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var CheckBox = function CheckBox(props) {
  var label = props.label,
    disabled = props.disabled,
    isError = props.isError,
    onClick = props.onClick,
    id = props.id,
    name = props.name,
    value = props.value,
    className = props.className;
  return /*#__PURE__*/_react.default.createElement(_CheckBox.StyledCheckbox, props, /*#__PURE__*/_react.default.createElement("label", {
    class: "checklabel"
  }, label, /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "checkbox",
    id: id,
    name: name,
    value: value,
    disabled: disabled
  }, props)), /*#__PURE__*/_react.default.createElement("span", {
    class: "checkmark"
  })));
};
var _default = CheckBox;
exports.default = _default;