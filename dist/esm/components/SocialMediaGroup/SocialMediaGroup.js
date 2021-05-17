"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _fa = require("react-icons/fa");

var _SocialMediaGroup = _interopRequireDefault(require("./SocialMediaGroup.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SocialMediaGroup = function SocialMediaGroup(props) {
  var size = props.size,
      url = props.url,
      facebook = props.facebook,
      twitter = props.twitter,
      gitHub = props.gitHub,
      whatsApp = props.whatsApp,
      share = props.share,
      linkedIn = props.linkedIn,
      youTube = props.youTube,
      instaGram = props.instaGram,
      google = props.google,
      pInterest = props.pInterest,
      isRound = props.isRound,
      color = props.color,
      bgColor = props.bgColor,
      iconType = props.iconType,
      onClick = props.onClick,
      onChange = props.onChange;
  return /*#__PURE__*/_react["default"].createElement(_SocialMediaGroup["default"], _extends({
    className: "icon-bar",
    size: size,
    url: url,
    color: color,
    isRound: isRound,
    bgColor: bgColor,
    onClick: onClick
  }, props), iconType === 'facebook' && /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, " ", /*#__PURE__*/_react["default"].createElement(_fa.FaFacebookF, null), " "), iconType === 'twitter' && /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, " ", /*#__PURE__*/_react["default"].createElement(_fa.FaTwitter, null), " "), iconType === 'gitHub' && /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, " ", /*#__PURE__*/_react["default"].createElement(_fa.FaGithub, null), " "), iconType === 'google' && /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, " ", /*#__PURE__*/_react["default"].createElement(_fa.FaGoogle, null), " "), iconType === 'whatsApp' && /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, " ", /*#__PURE__*/_react["default"].createElement(_fa.FaWhatsapp, null), " "), iconType === 'instaGram' && /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, " ", /*#__PURE__*/_react["default"].createElement(_fa.FaInstagram, null), " "), iconType === 'youTube' && /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, " ", /*#__PURE__*/_react["default"].createElement(_fa.FaYoutube, null), " "), iconType === 'linkedIn' && /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, " ", /*#__PURE__*/_react["default"].createElement(_fa.FaLinkedinIn, null), " "), iconType === 'pInterest' && /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, " ", /*#__PURE__*/_react["default"].createElement(_fa.FaPinterestP, null), " "), iconType === 'share' && /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, " ", /*#__PURE__*/_react["default"].createElement(_fa.FaShareAlt, null), " "));
};

var _default = SocialMediaGroup;
exports["default"] = _default;