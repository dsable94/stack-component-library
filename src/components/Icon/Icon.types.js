import React from 'react';
import PropTypes from 'prop-types';

function IconTypes() {
  return <>Icon</>;
}

IconTypes.propTypes = {
  /** Name of an icon from Foundations > Iconography, to render. */
  icon: PropTypes.string.isRequired,
  /** Size of the icon, in pixels. */
  size: PropTypes.number,
  /** Color of icon. */
  color: PropTypes.string,
  onClick: PropTypes.func,
   /** Custom Classname of icon. */
   className: PropTypes.string,
};

IconTypes.defaultProps = {
  size: 16,
  color: 'currentColor',
};

export default IconTypes;
