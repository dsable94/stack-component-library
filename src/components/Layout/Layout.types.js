import React from "react";
import PropTypes from "prop-types";

const RowTypes= () => <>Row</>;
const ColTypes= () => <>Col</>;
const ContainerTypes= () => <>Container</>;


RowTypes.propTypes={
    as: PropTypes.string,
    cardTitle: PropTypes.string,
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xl: PropTypes.number,
    noGutters: PropTypes.bool,
    bgColor: PropTypes.string,
    bsPrefix: PropTypes.oneOf(['Row']),
    className: PropTypes.string,
};

RowTypes.defaultProps = {
    btnType: '<div>',
    lg: '',
    md: '',
    sm: '',
    xl: '',
    noGutters: false,
    bsPrefix: 'Row',
};

ColTypes.propTypes={
    as: PropTypes.elementType,
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xl: PropTypes.number,
    noGutters: PropTypes.bool,
    bsPrefix: PropTypes.oneOf(['Row']),
    className: PropTypes.string,
};

ColTypes.defaultProps = {
    btnType: '<div>',
    lg: '',
    md: '',
    sm: '',
    xl: '',
    noGutters: false,
    bsPrefix: 'Row'
};

ContainerTypes.propTypes={
    as: PropTypes.elementType,
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xl: PropTypes.number,
    noGutters: PropTypes.bool,
    bsPrefix: PropTypes.oneOf(['Row']),
    fluid:PropTypes.bool,
    children:PropTypes.node,
    className: PropTypes.string,
};

ContainerTypes.defaultProps = {
    btnType: '<div>',
    lg: '',
    md: '',
    sm: '',
    xl: '',
    noGutters: false,
    bsPrefix: 'Row'
};

export { RowTypes, ColTypes, ContainerTypes};