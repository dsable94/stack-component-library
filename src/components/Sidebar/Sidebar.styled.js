import styled, {css} from "styled-components";

export const StyledSideBar = styled.div`
  position: fixed;
    top: 0px;
    left: 0px;
    z-index: 101;
    height: 100vh;
    width: 250px;
    padding: 10px;
    overflow: auto;
    ${props => props.background ? css ` background: ${props.background};`: css `` }
    ${props => props.color ? css ` color: ${props.color};`: css `` }
    
    ${props => props.position ==='right' 
       ? css `
       left: auto;
       right: 0;
        `
        : css `  ` }

`