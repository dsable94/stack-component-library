"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Image = require("./Image.styled");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Image = function Image(props) {
  var fluid = props.fluid,
    rounded = props.rounded,
    roundedCircle = props.roundedCircle,
    thumbnail = props.thumbnail,
    bsPrefix = props.bsPrefix,
    width = props.width,
    height = props.height,
    alt = props.alt;
  return /*#__PURE__*/_react["default"].createElement(_Image.StyledImage, _extends({
    fluid: fluid
  }, props));
};
var _default = Image;
exports["default"] = _default;