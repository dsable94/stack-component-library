import styled, { css } from "styled-components";
import * as variable from "../../variable";

const StyledHeader = styled.div`
  background-color: #fff;
  padding: 0 10px 0 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 100;
  -webkit-box-shadow: 0 0 35px 0 rgba(61, 69, 78, 0.15);
  box-shadow: 0 0 35px 0 rgba(61, 69, 78, 0.15);
  padding: 6px 16px;
  border-radius: 4px;
  color: ${variable.white};
  position: relative;
    ${(props) =>
      props.mode === "light"
        ? css`
            background: ${variable.white};
          `
        : props.mode === "dark"
        ? css`
            background: ${variable.dark};
          `
        : css`
            
          `}
    ${(props) =>
      props.fixed === true
        ? css`
        position: fixed;
        top: 0px;
        `
        : css`
            position: relative;
          `}
    ${(props) =>
      props.logo === true
        ? css`
          display:flex;
          align-items:center;
              `
        : css`
            position: relative;
          `};
`;

export default StyledHeader;
