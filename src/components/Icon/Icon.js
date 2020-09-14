// @flow
import React from 'react';

import { StyledIcon } from './Icon.styles';
// import cx from 'classnames';
// import { prefix } from '../../tools/settings';

const Icon = React.forwardRef(
  (
    {
      className: customClassName,
      icon,
      size = 16,
      color = 'currentColor',
      onClick,
      ...rest
    },
    ref,
  ) => {
    const className = ({
      [`stack-icon`]: true,
      [customClassName]: !!customClassName,
    });

    return (
      <StyledIcon
        ref={ref}
        className={className}
        icon={icon}
        color={color}
        iconSize={size}
        onClick={onClick}
        {...rest}
      />
    );
  },
);

export default Icon;
