import React from "react";
import PropTypes from "prop-types";

const MenuTypes= () => <>MenuTypes</>;

MenuTypes.propTypes={
    
    id:PropTypes.string,
    className:PropTypes.string,
    value:PropTypes.string,
    options:PropTypes.arrayOf(PropTypes.shape({ }) ),
    btnType: PropTypes.oneOf(['primary','secondary','success','info','warning','danger','purple','light','dark']),
    btnVariant: PropTypes.oneOf(['contained', 'outlined']),
    isDisabled: PropTypes.bool,
    rounded:PropTypes.oneOf(['rounded','default']),
    size:PropTypes.oneOf(['sm','md','lg']),
    block:PropTypes.bool,
    Iconsize:PropTypes.oneOf(['sm', 'md', 'lg']),
    children:PropTypes.node,
    icon: PropTypes.string.isRequired,
    isDivider: PropTypes.bool,
    headerText: PropTypes.string,
};

MenuTypes.defaultProps = {
    btnType: 'default',
    btnVariant: 'contained',
    isDisabled: false,
    rounded:'default',
    size:'md',
    block:false,
    Iconsize:'md',
    id:'string',
    className:'string',
    isDivider: false,
    headerText: 'default',
    options:'ArrayOf(object)'
};

export default MenuTypes;