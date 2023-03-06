import React from "react";
import PropTypes from "prop-types";

const AccordianTypes= () => <>AccordianTypes</>;

AccordianTypes.propTypes={
    background: PropTypes.string,
    label: PropTypes.string,
    content: PropTypes.string,
    icon:PropTypes.any,
    children:PropTypes.any,
    as: PropTypes.any,
    variant:PropTypes.string,
    onClick:PropTypes.func,
    className:PropTypes.string,
    width:PropTypes.string,
};

AccordianTypes.defaultProps = {
    children: null,
    label: "Accordion",
    varient:'link',
    className:'btn-link',
    width:"200px"
  };

export default AccordianTypes;