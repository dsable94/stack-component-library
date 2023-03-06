import styled, { css } from 'styled-components';

export const StyledNotification = styled.span`
    ${props => css`
      width: ${props.iconSize}px;
      height: ${props.iconSize}px;
    `}

`;
