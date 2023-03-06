import React from "react";
import PropTypes from "prop-types";

const NavBarTypes= () => <>NavBar</>;

NavBarTypes.propTypes={
    isDisabled: PropTypes.bool,
    size:PropTypes.oneOf(['sm','md','lg']),
    block:PropTypes.bool,
    children:PropTypes.node,
    fixed:PropTypes.bool,
};

NavBarTypes.defaultProps = {
    btnType: 'default',
    btnVariant: 'contained',
    isDisabled: false,
    rounded:'default',
    size:'md',
    block:false
};

export default NavBarTypes;