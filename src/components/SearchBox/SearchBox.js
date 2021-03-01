import React from "react";
import StyledSearchBox from './SearchBox.styled';
import {Icon} from '../Icon';


const SearchBox = (props) =>{
  
    const { placeholder, size, bg, borderRadius, value,id, name, border, icon, onFocus,
    onClick, isError, disabled, hint } = props;
  const iconStyle = {
    position:"absolute",
    right:"20px",
    top: '6px',
  } 
    return(
        <StyledSearchBox className="search" borderRadius={borderRadius} bg={bg} border={border} size={size}
         onFocus={onFocus} onClick={onClick} isError={isError} disabled={disabled} {...props}>
            <input type="search" placeholder={placeholder} id="Search"
                value={value} name={name} />
               <Icon style={{...iconStyle}} icon={icon} size={size}></Icon> 
               {isError && <p>{hint}</p> }
        </StyledSearchBox>
    );
}

export default SearchBox;