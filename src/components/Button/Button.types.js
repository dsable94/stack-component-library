import React from "react";
import PropTypes from "prop-types";

const ButtonTypes= () => <>Button</>;

ButtonTypes.propTypes={
    btnType: PropTypes.oneOf(['primary','secondary','success','info','warning','danger','purple','light','dark']),
    btnVariant: PropTypes.oneOf(['contained', 'outlined']),
    isDisabled: PropTypes.bool,
    rounded:PropTypes.oneOf(['rounded','default']),
    size:PropTypes.oneOf(['sm','md','lg']),
    block:PropTypes.bool,
    children:PropTypes.node,
    borderRadius:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
    icon: PropTypes.string.isRequired,
    iconVariant:PropTypes.oneOf(['regular','solid']),
    onHover: PropTypes.string,
};
ButtonTypes.defaultProps = {
    btnType: 'default',
    btnVariant: 'contained',
    isDisabled: false,
    rounded:'default',
    size:'md',
    block:false,
    color: 'currentColor',
};

export default ButtonTypes;