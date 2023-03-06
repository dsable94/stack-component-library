import React from "react";
import PropTypes from "prop-types";

const PaginationTypes= () => <>StackCard</>;

PaginationTypes.propTypes={
    bgColor: PropTypes.oneOf(['white', 'primary','secondary','success','info','warning','danger']),
    paginationType:  PropTypes.oneOf(['rounded', 'default']),
    size:PropTypes.oneOf(['lg', 'sm']),
    children:PropTypes.node,
    
};

PaginationTypes.defaultProps = {
    bgColor: 'white',
    paginationType:'default',
    size:'',
};

export default PaginationTypes;