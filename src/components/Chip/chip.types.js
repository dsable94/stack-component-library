import React from "react";
import PropTypes from "prop-types";

const ChipTypes = () => <>Chip</>;

ChipTypes.propTypes={
    label: PropTypes.string,
    disabled:PropTypes.bool,
    avatar:PropTypes.string,
    size:PropTypes.oneOf(['large', 'small']),
    icon:PropTypes.string,
    color:PropTypes.oneOf(['primary','secoundary'])
};
ChipTypes.defaultProps = {
     disabled:true,
     size:'large'
};



export default ChipTypes;