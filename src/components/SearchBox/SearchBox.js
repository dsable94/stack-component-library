import React from "react";
import {StyledSearchBox, StyledIcon} from './SearchBox.styled';
// import {Icon} from '../Icon';
import {Box} from '../Box';


const SearchBox = (props) =>{
  
    const { placeholder, size, bg, borderRadius, value,id, name, border, icon, onFocus,
    onClick, isError, disabled, hint, width, className, searchIcon, onChange, onKeyDown } = props;
    return(
        <StyledSearchBox className={className} borderRadius={borderRadius} bg={bg} border={border} size={size}
         onFocus={onFocus} onClick={onClick} isError={isError} disabled={disabled} width={width} onChange={onChange} onKeyDown={onKeyDown}>
           {searchIcon ?
           (
             <Box className="icon-search">
              <input type="text" placeholder={placeholder} id={id}
                value={value} name={name} />
                <StyledIcon>
               {/* <Icon className="iconStyle" icon={icon} size={size}></Icon>  */}
                </StyledIcon>
               {isError && <p>{hint}</p> }
             </Box>
           ): (
             <>
            <input type="text" placeholder={placeholder} id={id}
                value={value} name={name} />
                {isError && <p>{hint}</p> }
                </>
           )

           }
        </StyledSearchBox>
    );
}

export default SearchBox;