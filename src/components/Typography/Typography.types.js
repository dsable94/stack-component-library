import React from "react";
import PropTypes from "prop-types";

const TypographyTypes= () => <>Typography</>;

TypographyTypes.propTypes={
    isBold: PropTypes.bool,
    as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
    children: PropTypes.string,
    isItalic: PropTypes.bool,
    textAlign: PropTypes.string,
    color:PropTypes.string,
    // type: PropTypes.oneOf(['heading', 'subHeading', 'paragraph']),
    size: PropTypes.string,
    /**
   * For the font weight of the Paragraph
   * */
    subHeading: PropTypes.bool,
    /**
   *  For the font weight of the Paragraph
   * */
    semiBold: PropTypes.bool
};

TypographyTypes.defaultProps = {
    isBold: false,
    as: 'h1',
    isItalic: false,
    type: 'paragraph',
};

export default TypographyTypes;