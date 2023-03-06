import styled, {css} from "styled-components";

export const StyledCheckbox = styled.div`
display: flex;
align-items: center;
& label {
    margin: 0;
    padding-left: 9px;
}

.checklabel {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .checklabel input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 3px;
    background-color: #eee;
  }
  
  .checklabel:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  .checklabel input:checked ~ .checkmark {
    background-color: #a4a6a7;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .checklabel input:checked ~ .checkmark:after {
    display: block;
  }
  
  .checklabel .checkmark:after {
    left: 7px;
    top: 3px;
    width: 6px;
    height: 11px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
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
    & .checkmark {
        background-color: #ef5b5b;
    }
    & .checklabel:hover input ~ .checkmark {
        background-color: #ef5b5b;
    }
   & .checklabel input:checked ~ .checkmark {
        background-color: rgb(181, 39, 29);
    }
  `
  : css `` }


`