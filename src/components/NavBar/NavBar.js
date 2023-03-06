import React from "react";
import StyledNav from "./NavBar.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = (props) =>{
    const {fixed, isDisabled, btnVariant, children, size, block} = props;
    return(
        <StyledNav fixed={fixed} {...props}>
            {/* {icon && iconVariant==='regular' ? <FontAwesomeIcon icon={['far',icon]} /> : iconVariant==='solid' ? <FontAwesomeIcon icon={['fas',icon]} /> : <FontAwesomeIcon icon={['fas',icon]} spin/> } */}
            {children}
        </StyledNav>
    );
}

export default NavBar;