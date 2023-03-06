import React from "react";
import StyledPagination from "./Pagination.styled";
// import Pagination from 'react-bootstrap/Pagination';

const StackPagination = (props) =>{
    const{ children, bgColor, paginationType, size, active, disabled, activeLabel} =props;
    
    return(
        <StyledPagination
         bgColor={bgColor} 
         size={size}  
         paginationType={paginationType}
         activeLabel={activeLabel}
         active={active}
         disabled={disabled}
        >
            {children}
        </StyledPagination>
    )
    
}

export default StackPagination;