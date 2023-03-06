import React from "react";
import StyledChart from "./StackChart.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StackChart = (props) =>{
    const { children, size, options, series, type, width, height, labels} = props;
    return(
        <StyledChart options={options} series={series} type={type} width={width} height={height} {...props}>
            {/* {icon && iconVariant==='regular' ? <FontAwesomeIcon icon={['far',icon]} /> : iconVariant==='solid' ? <FontAwesomeIcon icon={['fas',icon]} /> : <FontAwesomeIcon icon={['fas',icon]} spin/> } */}
            {children}
        </StyledChart>
    );
}

export default StackChart;