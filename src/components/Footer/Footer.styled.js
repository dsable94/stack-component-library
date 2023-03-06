import styled, {css} from "styled-components";
import * as variable from "../../variable";

const StyledFooter = styled.div`
    background-color: #fff;
    padding: 0 10px 0 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70px;
    z-index: 100;
    padding: 6px 16px;
    border-radius: 4px;
    color: ${variable.white};
    ${props =>
        props.mode === "light"
        ? css `
            background: ${variable.white};
        `
        : props.mode === "dark"
           ? css `
            background: ${variable.dark001};

        `
        : css`
            display: none;
        `
        }
    ${props => 
        props.fixed === true
        ? css `
        position: fixed
        `
        : css `
        position: relative
        `}
`

export default StyledFooter;