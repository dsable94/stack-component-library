"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _NavBar = _interopRequireDefault(require("./NavBar.styled"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var NavBar = function NavBar(props) {
  var fixed = props.fixed,
    isDisabled = props.isDisabled,
    btnVariant = props.btnVariant,
    children = props.children,
    size = props.size,
    block = props.block;
  return /*#__PURE__*/_react.default.createElement(_NavBar.default, _extends({
    fixed: fixed
  }, props), children);
};
var _default = NavBar;
exports.default = _default;