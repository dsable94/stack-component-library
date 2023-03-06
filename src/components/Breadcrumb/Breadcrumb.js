import React from "react";
import StyledBreadcrumb from "./Breadcrumb.styled";

const Breadcrumb = (props) =>{
    const{ children, bgColor, paginationType, size, color } =props;
    
    return(
        <StyledBreadcrumb bgColor={bgColor} size={size}  paginationType={paginationType}
            color={color}>
            {children}
        </StyledBreadcrumb>
    )
    
}

export {Breadcrumb,StyledBreadcrumb};