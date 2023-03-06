import React from "react";
import PropTypes from "prop-types";

const ImageTypes= () => <>ImageTypes</>;

ImageTypes.propTypes={
  src: PropTypes.string.isRequired,
  fluid: PropTypes.bool,
  alt: PropTypes.string,
  title: PropTypes.string,
  rounded: PropTypes.bool,
  roundedCircle: PropTypes.bool,
  thumbnail: PropTypes.bool,
  filter: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

ImageTypes.defaultProps = {};

export default ImageTypes;