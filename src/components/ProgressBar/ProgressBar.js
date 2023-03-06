import React from "react";
import ProgressStyle from "./ProgressBar.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProgressBar = (props) =>{
    const {now, children, size, label, icon, variant, striped, animated } = props;
    return(
        <ProgressStyle size={size} now={now} label={label} variant={variant} {...props}>
            {children}
        </ProgressStyle>
    );
}

export default ProgressBar;