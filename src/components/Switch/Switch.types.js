import React from 'react';
import PropTypes from 'prop-types';

const SwitchTypes = () => <>Switch</>;

SwitchTypes.propTypes = {
    size:PropTypes.string,
    onClick:PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    isBold: PropTypes.string,
    color: PropTypes.string,
    isChecked: PropTypes.bool,
};

SwitchTypes.defaultProps = {
    isChecked: false,
};

export default SwitchTypes ;
