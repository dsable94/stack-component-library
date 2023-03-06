import React from "react";
import PropTypes from "prop-types";

const ButtonTypes= () => <>Button</>;

ButtonTypes.propTypes={
    type: PropTypes.oneOf(['bar','line','area','donut','radial','radialBar','purple','light','dark']),
    series: PropTypes.array,
    width: PropTypes.string,
    height:PropTypes.string,
    options:PropTypes.object
};

ButtonTypes.defaultProps = {
    type: 'line',
    series: 'undefined',
    width: '100%',
    rounded:'default',
    height:'auto',
    options:{}
};

export default ButtonTypes;