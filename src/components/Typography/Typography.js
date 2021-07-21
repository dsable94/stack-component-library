import React from 'react';
import StyledTypography from './Typography.styled';

const Typography = (props) => {
  const { children, type, as, isBold, isItalic, textAlign, color, size, subHeading, semiBold } = props;

    return (
      <StyledTypography type={type} as={as} isBold={isBold} isItalic={isItalic} {...props}>
        {children}
      </StyledTypography>
    );
}

export default Typography;
