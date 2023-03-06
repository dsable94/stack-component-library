import React from "react";
import PropTypes from "prop-types";

const ChartTypes= () => <>Chart</>;

ChartTypes.propTypes={
    type: PropTypes.oneOf(['bar', 'simpleLine','tinyLine','area','stackedArea','pie']),
    data: PropTypes.array,
    width: PropTypes.string,
    height:PropTypes.string
};

ChartTypes.defaultProps = {
    width: 'auto',
    height:'auto',
    options:{}
};

export default ChartTypes;