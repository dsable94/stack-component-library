import React from "react";
import { StyledCheckbox } from './Checkbox.styled';

const CheckBox = (props) => {
  const { label, disabled, isError, onClick, id, name, value, className  } = props;
  return (
    <StyledCheckbox {...props}>
    <label class="checklabel">{label} 
      <input type="checkbox"  id={id} name={name} value={value} disabled={disabled} {...props} />
      <span class="checkmark"></span>
    </label>
    </StyledCheckbox>
     
  )
}

export default CheckBox;
 