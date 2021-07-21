"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledNavigationLink = exports.StyledNavigationItem = exports.StyledNavigationArrowLabel = exports.StyledNavigationSection = exports.StyledNavigationList = exports.StyledNavigation = exports.StyledToggleButton = exports.StyledNavigationTitle = exports.StyledIcon = exports.StyledNavigationFooter = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import React from 'react';
var StyledNavigationFooter = _styledComponents.default.div.withConfig({
  displayName: "Navigationstyled__StyledNavigationFooter",
  componentId: "sc-1m01q4m-0"
})(["display:flex;justify-content:space-between;padding:20px 10px;background-color:#efefef;width:300px;align-items:flex-end"]);

exports.StyledNavigationFooter = StyledNavigationFooter;

var StyledIcon = _styledComponents.default.div.withConfig({
  displayName: "Navigationstyled__StyledIcon",
  componentId: "sc-1m01q4m-1"
})(["margin-right:25px;"]);

exports.StyledIcon = StyledIcon;

var StyledNavigationTitle = _styledComponents.default.div.withConfig({
  displayName: "Navigationstyled__StyledNavigationTitle",
  componentId: "sc-1m01q4m-2"
})(["padding:15px 25px 15px 25px;font-size:12px;font-weight:400;color:#b5b5c3;opacity:0.5;text-transform:uppercase;:hover{color:#0052cc !important;cursor:pointer}"]);

exports.StyledNavigationTitle = StyledNavigationTitle;

var StyledToggleButton = _styledComponents.default.div.withConfig({
  displayName: "Navigationstyled__StyledToggleButton",
  componentId: "sc-1m01q4m-3"
})(["display:flex;justify-content:space-between;background:#fff;align-items:center;margin-bottom:25px;padding-right:15px;:hover{box-shadow:4px 3px 13px 0px #ddd;}"]);

exports.StyledToggleButton = StyledToggleButton;

var StyledNavigation = _styledComponents.default.aside.withConfig({
  displayName: "Navigationstyled__StyledNavigation",
  componentId: "sc-1m01q4m-4"
})(["background-color:#fff;flex:1;overflow:hidden;color:#172b4c !important;font-weight:600;box-shadow:0 2px 4px 0 rgb(0 0 0 / 15%);border-right:0px solid rgba(72,94,144,0.16);transition:transform .3s ease-in-out,width .3s ease-in-out;border-top-right-radius:20px;a{color:#172b4c;}"]);

exports.StyledNavigation = StyledNavigation;

var StyledNavigationList = _styledComponents.default.ul.withConfig({
  displayName: "Navigationstyled__StyledNavigationList",
  componentId: "sc-1m01q4m-5"
})(["margin:0;padding:0;", " li{display:flex;align-items:center;margin-bottom:20px;padding-left:20px;padding-top:15px;cursor:pointer;}&.stack-navigation__sublist{display:none;}"], function (props) {
  return props.active === true ? (0, _styledComponents.css)(["border-left:2px solid #000"]) : (0, _styledComponents.css)(["border-left:none;"]);
});

exports.StyledNavigationList = StyledNavigationList;

var StyledNavigationSection = _styledComponents.default.div.withConfig({
  displayName: "Navigationstyled__StyledNavigationSection",
  componentId: "sc-1m01q4m-6"
})(["position:relative;+ .-navigation__section{&::before{display:block;content:'';margin-top:8px;margin-bottom:8px;margin-left:16px;margin-right:16px;height:1px;background:\"red; } }"]);

exports.StyledNavigationSection = StyledNavigationSection;

var StyledNavigationArrowLabel = _styledComponents.default.label.attrs({
  className: "stack-navigation__arrow-label"
}).withConfig({
  displayName: "Navigationstyled__StyledNavigationArrowLabel",
  componentId: "sc-1m01q4m-7"
})(["display:flex;width:32px;height:32px;background:\"red\";border-radius:16px;align-items:center;justify-content:center;position:absolute;top:4px;right:12px;cursor:pointer;&:hover{background:\"red\";}"]);

exports.StyledNavigationArrowLabel = StyledNavigationArrowLabel;

var StyledNavigationItem = _styledComponents.default.li.withConfig({
  displayName: "Navigationstyled__StyledNavigationItem",
  componentId: "sc-1m01q4m-8"
})(["position:relative;"]);

exports.StyledNavigationItem = StyledNavigationItem;

var StyledNavigationLink = _styledComponents.default.a.withConfig({
  displayName: "Navigationstyled__StyledNavigationLink",
  componentId: "sc-1m01q4m-9"
})(["padding:14px 8px 14px 20px;"]);

exports.StyledNavigationLink = StyledNavigationLink;