"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StyledChip = _styledComponents["default"].div.withConfig({
  displayName: "chipstyles__StyledChip",
  componentId: "sc-1w4i16t-0"
})([".chip{display:inline-block;padding:0 25px;height:50px;font-size:16px;line-height:50px;border-radius:25px;background-color:#f1f1f1;}.chip img{float:left;margin:0 10px 0 -25px;height:50px;width:50px;border-radius:50%;}.chipoutline{display:inline-block;padding:0 25px;height:50px;font-size:16px;line-height:50px;border-radius:25px;border:1px solid;}.chipsmall{display:inline-block;padding:0px 25px;height:40px;font-size:10px;line-height:40px;border-radius:25px;background-color:#f1f1f1;}.avatar{position:relative;border:1px solid;font-size:0.75rem;padding:2px;background-color:#dad9d9;background-color::grey;border-radius:50%;right:10px;}.primary{background-color:#FF0000;color:aliceblue;}.primaryout{border-color:#FF0000;color:#FF0000;}.secoundary{background-color:#41789e;color:aliceblue;}.secoundaryout{border-color:#41789e;color:#41789e;}.cross{position:relative;left:10px;}"]);
var _default = StyledChip;
exports["default"] = _default;