import React from "react";
import StyledHeader from "./Header.styled";
import Image from "../Image/Image"


const Header = (props) =>{
    const {mode, fixed, children, className, logo, src} = props;
    return(
        <StyledHeader mode={mode} fixed={fixed} logo={logo} src={src} {...props}>
            {children}
            {logo && <Image src={src} roundedCircle style={{width:'50px', height:'50px', VerticalAlign:'center'}}/>}
        </StyledHeader>

    );
}

export default Header;