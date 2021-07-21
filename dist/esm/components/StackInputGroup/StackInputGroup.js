"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StackInputGroup = _interopRequireDefault(require("./StackInputGroup.styled"));

var _InputGroup = _interopRequireDefault(require("react-bootstrap/InputGroup"));

var _Form = _interopRequireDefault(require("react-bootstrap/Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StackInputGroup = function StackInputGroup(props) {
  var type = props.type,
      as = props.as,
      rows = props.rows,
      bsPrefix = props.bsPrefix,
      disabled = props.disabled,
      value = props.value,
      rounded = props.rounded,
      children = props.children,
      size = props.size,
      labelBg = props.labelBg,
      icon = props.icon,
      placeholder = props.placeholder,
      id = props.id,
      labelText = props.labelText,
      labelInline = props.labelInline,
      isError = props.isError,
      hint = props.hint,
      onChange = props.onChange;
  return /*#__PURE__*/_react["default"].createElement(_StackInputGroup["default"], {
    disabled: disabled,
    isError: isError,
    hint: hint,
    onChange: onChange
  }, labelInline ? /*#__PURE__*/_react["default"].createElement(_InputGroup["default"], {
    size: size
  }, /*#__PURE__*/_react["default"].createElement(_InputGroup["default"].Prepend, null, /*#__PURE__*/_react["default"].createElement(_InputGroup["default"].Text, {
    id: id,
    placeholder: placeholder
  }, labelText)), /*#__PURE__*/_react["default"].createElement(_Form["default"].Control, _extends({
    as: as,
    rows: rows,
    bsPrefix: bsPrefix,
    size: size
  }, props))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form["default"].Label, null, labelText), /*#__PURE__*/_react["default"].createElement(_Form["default"].Control, _extends({
    as: as,
    rows: rows,
    bsPrefix: bsPrefix,
    size: size
  }, props)), isError && /*#__PURE__*/_react["default"].createElement("p", null, hint)));
};

var _default = StackInputGroup;
exports["default"] = _default;