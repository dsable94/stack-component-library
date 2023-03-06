import React from "react";
import PropTypes from "prop-types";

const TableTypes= () => <>TableTypes</>;

TableTypes.propTypes={
    size:PropTypes.oneOf(['xs','sm','md','lg']),
    responsive:PropTypes.oneOf(['xs','sm','md','lg']),
    variant: PropTypes.oneOf([ 'light', 'dark' ]),
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    hover: PropTypes.bool,
    children:PropTypes.node,
    bsPrefix:PropTypes.string,
    heights: PropTypes.string,
};

TableTypes.defaultProps = {
    size: 'md',
    responsive: true,
    variant: 'light',
    striped: false,
    bordered: false,
    hover: false,
};

export default TableTypes;