"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderTypes = function HeaderTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "ProgressBar");
};

HeaderTypes.propTypes = {
  mode: _propTypes.default.string
};
HeaderTypes.defaultProps = {
  mode: 'light'
};
var _default = HeaderTypes;
exports.default = _default;