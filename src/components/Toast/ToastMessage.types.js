import React from "react";
import PropTypes from "prop-types";

const ToastMessageTypes= () => <>ToastMessageTypes</>;
 
ToastMessageTypes.propTypes={
  snackBarHeading: PropTypes.bool,
  sanckBarText: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool
};

ToastMessageTypes.defaultProps = {
  snackBarHeading: 'True',
  sanckBarText: 'True',
  success: 'False',
  error: 'False'
};

export default ToastMessageTypes;