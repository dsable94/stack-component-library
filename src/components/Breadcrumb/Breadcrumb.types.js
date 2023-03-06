import React from "react";
import PropTypes from "prop-types";

const BreadcrumbTypes= () => <>Breadcrumb</>;

BreadcrumbTypes.propTypes={
    bgColor: PropTypes.string,
    size:PropTypes.oneOf(['lg', 'sm', 'md']),
    children:PropTypes.node,
    
};

BreadcrumbTypes.defaultProps = {
    bgColor: 'white',
    size:'sm',
};

export default BreadcrumbTypes;
