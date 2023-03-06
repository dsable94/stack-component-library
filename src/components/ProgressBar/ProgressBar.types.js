import React from "react";
import PropTypes from "prop-types";

const ProgressBarTypes= () => <>ProgressBar</>;

ProgressBarTypes.propTypes={
    now: PropTypes.number,
    size:PropTypes.oneOf(['xs','sm','md','lg']),
    label:PropTypes.string,
    variant: PropTypes.oneOf([ 'primary', 'info', 'danger' ]),
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    children:PropTypes.node,
    icon:PropTypes.string,
};

ProgressBarTypes.defaultProps = {
    now: 'default',
    size: 'md',
    label: '50%',
    variant: 'primary',
    striped: false,
    animated: false,
};

export default ProgressBarTypes;