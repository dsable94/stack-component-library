import React from "react";
import PropTypes from "prop-types";

const CardTypes= () => <>StackCard</>;

CardTypes.propTypes={
    cardTitle: PropTypes.string,
    subTitle:PropTypes.string,
    bgColor: PropTypes.oneOf(['white', 'primary','secondary','success','info','warning','danger', 'any color']),
    isDisabled: PropTypes.bool,
    rounded:PropTypes.oneOf(['rounded','default']),
    imgPos:PropTypes.oneOf(['top', 'middle', 'bottom']),
    alignText:PropTypes.oneOf(['left', 'center', 'right']),
    imgUrl:PropTypes.string,
    color:PropTypes.string,
    children:PropTypes.node,
    width:PropTypes.string,
    boxShadow: PropTypes.string,
    border: PropTypes.string,
    cardMenu: PropTypes.element,


};

CardTypes.defaultProps = {
    cardTitle: ' ',
    bgColor: 'white',
    isDisabled: false,
    rounded:'default',
    alignText:'left',
    imgPos:'top'
};

export default CardTypes;