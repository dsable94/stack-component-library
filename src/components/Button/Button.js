import React from "react";
import StyledButton from "./Button.styled";

const Button = (props) =>{
    const {btnType, isDisabled, btnVariant, children} = props;
    return(
        <StyledButton color={btnType} disabled={isDisabled} variant={btnVariant}>{children}</StyledButton>
    );
}

export default Button;