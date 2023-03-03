"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Container = exports.Col = void 0;
var _react = _interopRequireDefault(require("react"));
var _Layout = require("./Layout.styled");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Container = function Container(props) {
  var as = props.as,
    fluid = props.fluid,
    bsPrefix = props.bsPrefix,
    children = props.children,
    className = props.className;
  return /*#__PURE__*/_react.default.createElement(_Layout.StyledContainer, _extends({
    as: as
  }, props), children);
};
exports.Container = Container;
var Row = function Row(props) {
  var as = props.as,
    lg = props.lg,
    md = props.md,
    noGutters = props.noGutters,
    sm = props.sm,
    xl = props.xl,
    xs = props.xs,
    bsPrefix = props.bsPrefix,
    children = props.children,
    className = props.className;
  return /*#__PURE__*/_react.default.createElement(_Layout.StyledRow, _extends({
    as: as
  }, props), children);
};
exports.Row = Row;
var Col = function Col(props) {
  var as = props.as,
    lg = props.lg,
    md = props.md,
    noGutters = props.noGutters,
    sm = props.sm,
    xl = props.xl,
    xs = props.xs,
    bsPrefix = props.bsPrefix,
    children = props.children,
    p = props.p,
    m = props.m,
    bgColor = props.bgColor,
    className = props.className;
  return /*#__PURE__*/_react.default.createElement(_Layout.StyledCol, _extends({
    as: as
  }, props), children);
};
exports.Col = Col;