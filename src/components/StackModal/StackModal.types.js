import React from "react";
import PropTypes from "prop-types";

const StackModalTypes= () => <>StackModalTypes</>;
 
StackModalTypes.propTypes={
  modalTitle: PropTypes.bool,
  modalBodyText: PropTypes.bool,
  backdrop: PropTypes.oneOf(['static' | 'true' | 'false']),
  keyboard: PropTypes.bool,
  animation: PropTypes.bool,
  size: PropTypes.oneOf(['sm' | 'md' | 'lg']),
  centered: PropTypes.oneOf(['Specify whether the Component should be vertically centered'])
};

StackModalTypes.defaultProps = {
  modalTitle: 'True',
  modalBodyText: 'True',
  backdrop: 'true',
  keyboard: 'true',
  animation: 'true',
};

export default StackModalTypes;