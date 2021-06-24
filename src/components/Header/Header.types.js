import React from "react";
import PropTypes from "prop-types";

const HeaderTypes= () => <>ProgressBar</>;

HeaderTypes.propTypes={
    mode: PropTypes.string,
    className: PropTypes.string,
};

HeaderTypes.defaultProps = {
    mode: 'light',
};

export default HeaderTypes;