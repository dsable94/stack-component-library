"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _RadialProgressBar = _interopRequireDefault(require("./RadialProgressBar.styled"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var RadialProgress = function RadialProgress(props) {
  var sqsize = props.sqsize,
    strokeWidth = props.strokeWidth,
    percentage = props.percentage,
    className = props.className,
    strokeColor = props.strokeColor,
    animate = props.animate,
    animationDelay = props.animationDelay,
    animationType = props.animationType;
  var radius = (sqsize - strokeWidth) / 2;
  var viewBox = "0 0 ".concat(sqsize, " ").concat(sqsize);
  var dashArray = radius * Math.PI * 2;
  var dashOffset = dashArray - dashArray * percentage / 100;
  return /*#__PURE__*/_react.default.createElement(_RadialProgressBar.default, {
    strokeColor: strokeColor,
    animate: animate,
    animationDelay: animationDelay,
    animationType: animationType
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: sqsize,
    height: sqsize,
    viewBox: viewBox,
    className: className
  }, /*#__PURE__*/_react.default.createElement("circle", {
    className: "circle-background",
    cx: sqsize / 2,
    cy: sqsize / 2,
    r: radius,
    strokeWidth: "".concat(strokeWidth, "px")
  }), /*#__PURE__*/_react.default.createElement("circle", {
    className: "circle-progress",
    cx: sqsize / 2,
    cy: sqsize / 2,
    r: radius,
    strokeWidth: "".concat(strokeWidth, "px"),
    transform: "rotate(-90 ".concat(sqsize / 2, " ").concat(sqsize / 2, ")"),
    style: {
      strokeDasharray: dashArray,
      strokeDashoffset: dashOffset
    }
  }), /*#__PURE__*/_react.default.createElement("text", {
    className: "circle-text",
    x: "50%",
    y: "49%",
    dy: ".3em",
    textAnchor: "middle"
  }, "".concat(percentage))));
};
var _default = RadialProgress;
exports.default = _default;