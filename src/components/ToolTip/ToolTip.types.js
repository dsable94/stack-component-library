import React from "react";
import PropTypes from "prop-types";

const ToolTipTypes= () => <>ToolTip</>;

ToolTipTypes.propTypes={
    toolTipContent: PropTypes.string.isRequired,
    placement: PropTypes.string,
    toolTipBaseContent: PropTypes.string.isRequired,
    triggerType: PropTypes.string,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    borderColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
    hoverBgColor: PropTypes.string,
    hoverBorderColor: PropTypes.string,
};

ToolTipTypes.defaultProps = {
    placement: 'top',
    triggerType: 'hover',
};

export default ToolTipTypes;