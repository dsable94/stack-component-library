"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../Icon");

var _Box = require("../Box");

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _Navigation = require("./Navigation.styled");

var _excluded = ["title", "hasSeparator", "isWidth", "items", "active", "as", "handleToggle", "setOpen", "open", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NavigationSection = function NavigationSection(props) {
  var title = props.title,
      hasSeparator = props.hasSeparator,
      isWidth = props.isWidth,
      items = props.items,
      active = props.active,
      as = props.as,
      handleToggle = props.handleToggle,
      setOpen = props.setOpen,
      open = props.open,
      customClassName = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isWidth && /*#__PURE__*/_react.default.createElement(_Navigation.StyledToggleButton, {
    onClick: handleToggle,
    style: {
      borderLeft: '2px solid #000'
    }
  }, title && /*#__PURE__*/_react.default.createElement(_Navigation.StyledNavigationTitle, null, title), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    size: "16",
    color: "#172b4c",
    icon: open ? "chevron-right" : "chevron-down"
  })), /*#__PURE__*/_react.default.createElement(_Navigation.StyledNavigationSection, null, open && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Box.Box, {
    display: "flex",
    alignItems: "center"
  }), /*#__PURE__*/_react.default.createElement(_Navigation.StyledNavigationList, null, items && items.map(function (item, groupIdx) {
    return /*#__PURE__*/_react.default.createElement(_Navigation.StyledNavigationItem, {
      key: groupIdx
    }, /*#__PURE__*/_react.default.createElement(_Navigation.StyledIcon, {
      key: groupIdx
    }, item.iconLeft && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
      size: "16",
      color: "#172b4c",
      icon: item.iconLeft
    })), /*#__PURE__*/_react.default.createElement(_Navigation.StyledNavigationLink // as={as || item.as}
    , _extends({
      to: item.url // end={item.exact || item.isExact}
      ,
      exact: item.exact || item.isExact,
      href: item.url // id={`navigation-group-section-${groupIdx}`}
      ,
      onClick: item.onClick,
      activeClassName: "selected sublist--open",
      className: item.isSelected && "selected sublist--open" // aria-disabled={item.isDisabled}

    }, rest), item.icon && /*#__PURE__*/_react.default.createElement(_Navigation.StyledNavigationIcon, {
      icon: item.icon
    }), isWidth && item.label, "\xA0\xA0", !isNaN(item.count) && isWidth && /*#__PURE__*/_react.default.createElement("small", null, "(", item.count > 0 ? item.count : 0, ")")), item.iconRight && isWidth && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
      size: "16",
      color: "#172b4c",
      icon: item.iconRight,
      style: {
        display: "flex",
        alignItems: "center",
        marginLeft: "10px"
      }
    }));
  })))));
};

var _default = NavigationSection;
exports.default = _default;