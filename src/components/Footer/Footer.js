import React from "react";
import StyledFooter from "./Footer.styled";

const Footer = (props) =>{
    const {mode, fixed, children} = props;
    return(
        <StyledFooter mode={mode} fixed={fixed}>
            <h1>Footer</h1>
        </StyledFooter>
    );
}

export default Footer;