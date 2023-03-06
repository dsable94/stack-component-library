import React from 'react';
import PropTypes from 'prop-types';

const RadioTypes = () => <>Radio</>;

RadioTypes.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

RadioTypes.defaultProps = {
  disabled: false,
  isError: false,
};

export default RadioTypes ;
