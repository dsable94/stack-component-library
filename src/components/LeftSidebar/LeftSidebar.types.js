import React from "react";
import PropTypes from "prop-types";

const LeftSidebarTypes= () => <>LeftSidebarTypes</>;

LeftSidebarTypes.propTypes={
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm','md', 'lg']),
  alt: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

LeftSidebarTypes.defaultProps = {};

export default LeftSidebarTypes;