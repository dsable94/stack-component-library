import styled, {css} from "styled-components";
import * as variable from "../../variable";

const StyledInputGroup = styled.div`

    ${props =>
        props.bg
        ? css `
       
            background: ${variable.gray700} !important;
            border: 1px solid ${props.bg};
          
        `
        : props.color === "secondary"
           ? css `
            background: ${variable.gray600};
            border: 1px solid ${variable.gray600};

        `
        : props.color === "success"
}
${props => props.disabled 
    ? css ` 
    cursor: not-allowed;
     & label {
      cursor: not-allowed !important;
      }
      & input {
        cursor: not-allowed !important;
        }
  `
  : css `` }

  ${props => props.isError 
    ? css ` 
     & input {
        box-shadow: rgb(181, 39, 29) 0px 1px 0px 0px inset;
        background: rgb(248, 217, 215);
     }
     & .input-group-text {
        box-shadow: rgb(181,39,29) 0px 1px 0px 0px inset;
        background: rgb(248,217,215);
    }
    & p {
      padding: 5px 8px;
      color: #d00f0f;
   }
   & input::focus {
      border-color: #eb0d0d;
      outline: 0;
      box-shadow: 0 0 0 0.2rem #ff2f0040;
   }
  `
  : css `` }
`

export default StyledInputGroup;
