import React from "react";
import PropTypes from "prop-types";

const NavigationTypes= () => <>Navigation</>;

NavigationTypes.propTypes={
    position: PropTypes.oneOf(['left', 'right']),
    onClose: PropTypes.func,
    isCloseButtonShown: PropTypes.bool,
    children:PropTypes.node,
    id:PropTypes.string,
    isDrawer:PropTypes.bool,
    backgroundColor:PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

NavigationTypes.defaultProps = {
    position: 'left'
};

export default NavigationTypes;