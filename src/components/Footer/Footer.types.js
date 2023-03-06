import React from "react";
import PropTypes from "prop-types";

const FooterTypes= () => <>Footer</>;

FooterTypes.propTypes={
    mode: PropTypes.string,
};

FooterTypes.defaultProps = {
    mode: 'light',
};

export default FooterTypes;