"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Text = exports.Emoji = void 0;
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _demo = require("@storybook/react/demo");
require("bootstrap/dist/css/bootstrap.min.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Button',
  component: _demo.Button
};
exports.default = _default;
var Text = function Text() {
  return /*#__PURE__*/_react.default.createElement(_demo.Button, {
    onClick: (0, _addonActions.action)('clicked')
  }, "Hello Button");
};
exports.Text = Text;
var Emoji = function Emoji() {
  return /*#__PURE__*/_react.default.createElement(_demo.Button, {
    onClick: (0, _addonActions.action)('clicked')
  }, /*#__PURE__*/_react.default.createElement("span", {
    role: "img",
    "aria-label": "so cool"
  }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"));
};
exports.Emoji = Emoji;