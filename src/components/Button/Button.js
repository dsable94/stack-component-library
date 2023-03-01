import React from "react";
import StyledButton from "./Button.styled";
import { Icon } from '../Icon';

const Button = (props) =>{
    const {btnType, isDisabled, btnVariant, rounded, children, size, block, icon, iconVariant,
         onClick, borderRadius, color, iconSize, onHover} = props;
    return(
        <StyledButton rounded={rounded} btnType={btnType} disabled={isDisabled} variant={btnVariant} {...props}>
            {/* {icon && iconVariant==='regular' ? <Icon icon={['far',icon]} /> : iconVariant==='solid' ? <FontAwesomeIcon icon={['fas',icon]} /> : <FontAwesomeIcon icon={['fas',icon]} /> } */}
            {icon && <Icon icon={icon} color={iconVariant} iconSize={iconSize} />}
            {children}
        </StyledButton>
    );
}

export default Button;