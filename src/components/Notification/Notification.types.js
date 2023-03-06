import React from "react";
import PropTypes from "prop-types";

const NotificationTypes= () => <>NotificationTypes</>;

NotificationTypes.propTypes={
    variant: PropTypes.oneOf([ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    count: PropTypes.number,
};

NotificationTypes.defaultProps = {
    variant: 'danger',
    count: 2,
};

export default NotificationTypes;