import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import ToolTipWrap from "./ToolTip.styled";

const ToolTip = (props) => {
  const {
    toolTipContent,
    placement,
    toolTipBaseContent,
    triggerType,
    textColor,
    bgColor,
    borderColor,
    hoverTextColor,
    hoverBgColor,
    hoverBorderColor,
  } = props;

  return (
    <>
      <OverlayTrigger
        trigger={triggerType}
        key={placement}
        placement={placement}
        overlay={
          <Tooltip id={`tooltip-${placement}`}>{toolTipContent}</Tooltip>
        }
      >
        <ToolTipWrap
          hoverTextColor={hoverTextColor}
          hoverBgColor={hoverBgColor}
          hoverBorderColor={hoverBorderColor}
          textColor={textColor}
          bgColor={bgColor}
          borderColor={borderColor}
        >
          {toolTipBaseContent}
        </ToolTipWrap>
      </OverlayTrigger>
    </>
  );
};

export default ToolTip;
