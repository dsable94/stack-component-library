import React from "react";
import { StyledImage } from './Image.styled';

const Image = (props) => {
  const { fluid, rounded, roundedCircle, thumbnail, bsPrefix, width, height,alt } = props;
  return (
    <StyledImage fluid={fluid} {...props} />
  );
}

export default Image;