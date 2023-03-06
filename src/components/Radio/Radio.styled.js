import styled, {css} from "styled-components";

export const StyledRadio = styled.div`
display: flex;
  align-items: center;
   
.radio-btn {
  display: block;
  position: relative;
  padding-left: 35px;
  margin: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.radio-btn input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-check {
  position: absolute;
  top: 0px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #edecec;
  border-radius: 50%;
}

.radio-btn:hover input ~ .radio-check {
  background-color: #ccc;
}

.radio-btn input:checked ~ .radio-check {
  background-color: #bbbcbed1;
}

.radio-check:after {
  content: "";
  position: absolute;
  display: none;
}

.radio-btn input:checked ~ .radio-check:after {
  display: block;
}

.radio-btn .radio-check:after {
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  -webkit-transform: translate(0px,0px);
  -ms-transform: translate(0px,0px);
  transform: translate(0px,0px);
  border-radius: 50%;
  background: #8c8585;
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
    & .radio-btn input:checked ~ .radio-check {
      background-color: #b67680d1;
  }
  & .radio-btn .radio-check:after {
    background: rgb(181, 39, 29);
}
& .radio-check {
  background-color: #ef5b5b;
}
& .radio-btn:hover input ~ .radio-check {
  background-color: #ef5b5b;
}
& label{
  color: #cc2424;
}
  `
  : css `` }


`