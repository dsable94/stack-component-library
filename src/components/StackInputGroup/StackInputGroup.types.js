import React from "react";
import PropTypes from "prop-types";

const StackInputGroupTypes= () => <>StackInputGroup</>;

StackInputGroupTypes.propTypes={
    type: PropTypes.oneOf(['text','number','password','date','email','range','color']),
    as: PropTypes.oneOf(['textarea', 'select','multiselect']),
    disabled: PropTypes.bool,
    size:PropTypes.oneOf(['sm','lg']),
    labelText:PropTypes.string,
    labelInline:PropTypes.bool,
    value:PropTypes.string,
    bsPrefix:PropTypes.string,
    children:PropTypes.node,
    labelBg:PropTypes.string,
    rounded:PropTypes.oneOf(['rounded','default']),
    icon:PropTypes.string,
    placeholder:PropTypes.string,
    id:PropTypes.string,
    rows:PropTypes.string,
    isError: PropTypes.bool,
    hint: PropTypes.string,
    onChange: PropTypes.func,
};


StackInputGroupTypes.defaultProps = {
    type: 'text',
    as: '',
    disabled: false,
    size:'default',
    labelText:'',
    labelInline:false,
    rounded: 'default',
};

export default StackInputGroupTypes;