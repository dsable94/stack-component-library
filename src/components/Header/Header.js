import React from "react";
import StyledHeader from "./Header.styled";

const Header = (props) =>{
    const {mode, fixed, children, className} = props;
    return(
        <StyledHeader mode={mode} fixed={fixed} {...props}>
            {children}
        </StyledHeader>
    );
}

export default Header;