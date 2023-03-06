import styled, {css} from "styled-components";

 const StyledBadge = styled.div`

${props => props.bgColor ? css `

& span {
 background-color: ${props.bgColor};
}
 `
 : css `` }
${props => props.color
     ? css 
     `
     & span {
      color: ${props.color};
     } `
      : css `` }  
${props => props.font
      ? css 
      `
      & span {
            font-size: ${props.font};
      } `
            : css `` } 


`

export default StyledBadge;