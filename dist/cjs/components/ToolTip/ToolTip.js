"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tooltip = _interopRequireDefault(require("react-bootstrap/Tooltip"));

var _OverlayTrigger = _interopRequireDefault(require("react-bootstrap/OverlayTrigger"));

var _ToolTip = _interopRequireDefault(require("./ToolTip.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolTip = function ToolTip(props) {
  var toolTipContent = props.toolTipContent,
      placement = props.placement,
      toolTipBaseContent = props.toolTipBaseContent,
      triggerType = props.triggerType,
      textColor = props.textColor,
      bgColor = props.bgColor,
      borderColor = props.borderColor,
      hoverTextColor = props.hoverTextColor,
      hoverBgColor = props.hoverBgColor,
      hoverBorderColor = props.hoverBorderColor;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OverlayTrigger.default, {
    trigger: triggerType,
    key: placement,
    placement: placement,
    overlay: /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      id: "tooltip-".concat(placement)
    }, toolTipContent)
  }, /*#__PURE__*/_react.default.createElement(_ToolTip.default, {
    hoverTextColor: hoverTextColor,
    hoverBgColor: hoverBgColor,
    hoverBorderColor: hoverBorderColor,
    textColor: textColor,
    bgColor: bgColor,
    borderColor: borderColor
  }, toolTipBaseContent)));
};

var _default = ToolTip;
exports.default = _default;