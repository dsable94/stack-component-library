import React from "react";
import PropTypes from "prop-types";

const CheckBoxTypes = () => <>Radio</>;

CheckBoxTypes.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  isError: PropTypes.bool,
  name: PropTypes.string,
  /**
   * The custom class name of the CheckBox
   * */
  className: PropTypes.string
};

CheckBoxTypes.defaultProps = {
  disabled: "false",
  isError: "false"
};

export default CheckBoxTypes;
