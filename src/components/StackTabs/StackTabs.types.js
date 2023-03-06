import React from "react";
import PropTypes from "prop-types";

const StackTabsTypes= () => <>StackCard</>;

StackTabsTypes.propTypes={
    isDisabled: PropTypes.bool,
    children:PropTypes.node,
    width: PropTypes.string,
    activeKey:PropTypes.any,
    id:PropTypes.string,
    defaultActiveKey:PropTypes.any,
    mountOnEnter:PropTypes.bool,
    onSelect:PropTypes.func,
    unmountOnExit:PropTypes.bool,
    transition:PropTypes.bool,
    variant:PropTypes.oneOf(['tabs','pills','leftPills']),
  /**
   * The custom class name of the StackTabs
   * */
    className: PropTypes.string,

};

StackTabsTypes.defaultProps = {
    variant: 'tabs',
    isDisabled: false,
};

export default StackTabsTypes;