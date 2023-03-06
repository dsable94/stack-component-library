import React from "react";
import PropTypes from "prop-types";

const BadgeTypes= () => <>BadgeTypes</>;

BadgeTypes.propTypes={
    variant: PropTypes.oneOf([ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    pill: PropTypes.bool,
    children: PropTypes.node,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    font: PropTypes.string,
};

BadgeTypes.defaultProps = {
    variant: 'primary',
    pill: false,
    font: 'inherit'
};

export default BadgeTypes;