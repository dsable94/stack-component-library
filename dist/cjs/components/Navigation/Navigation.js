"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icon = require("../Icon");
var _Box = require("../Box");
var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));
var _NavigationSection = _interopRequireDefault(require("./NavigationSection"));
var _Navigation = require("./Navigation.styled");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Navigation = function Navigation(props) {
  var children = props.children,
    position = props.position,
    color = props.color,
    onClick = props.onClick,
    items = props.items,
    title = props.title,
    size = props.size,
    src = props.src;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isWidth = _useState2[0],
    setIsWidth = _useState2[1];
  var _useState3 = (0, _react.useState)({
      width: "300px"
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    inlineStyle = _useState4[0],
    setInlineStyle = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var handleToggle = function handleToggle() {
    setOpen(!open);
  };
  var handleSidebar = function handleSidebar() {
    setIsWidth(!isWidth);
    isWidth ? setInlineStyle({
      width: "60px",
      alignItems: "center",
      justifyContent: "center"
    }) : setInlineStyle({
      width: "300px"
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Navigation.StyledNavigation, _extends({}, props, {
    style: inlineStyle
  }), /*#__PURE__*/_react.default.createElement(_Box.Box, {
    display: "flex",
    justifyContent: "space-between",
    pl: "20px",
    pr: "20px",
    mb: "10px"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    size: "16",
    color: "#172b4c",
    icon: "menu",
    onClick: handleSidebar
  }), isWidth && /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    size: size,
    src: src,
    alt: "largeAvatar"
  })), children && _react.default.Children.map(children, function (child) {
    if ( /*#__PURE__*/_react.default.isValidElement(child)) {
      return /*#__PURE__*/_react.default.cloneElement(child, {
        isWidth: isWidth,
        handleToggle: handleToggle,
        setOpen: setOpen,
        open: open
      });
    }
    return child;
  })), /*#__PURE__*/_react.default.createElement(_Navigation.StyledNavigationFooter, {
    style: inlineStyle
  }, isWidth && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    size: "16",
    color: "#172b4c",
    icon: "settings"
  }), isWidth && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    size: "16",
    color: "#172b4c",
    icon: "comment"
  }), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    size: "16",
    color: "#172b4c",
    icon: "log-out"
  })));
};
Navigation.Section = _NavigationSection.default;
var _default = Navigation;
exports.default = _default;