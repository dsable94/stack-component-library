import React from "react";
import { StyledRadio } from './Radio.styled';


const Radio = (props) => {
  const { label, disabled, isError, onClick, value, name  } = props;
  return (
    <StyledRadio {...props}>
      <label class="radio-btn">{label}
        <input type="radio" name={name} disabled={disabled} isError={isError} />
        <span class="radio-check"></span>
      </label>
    </StyledRadio>
     
  )
}

export default Radio;
 