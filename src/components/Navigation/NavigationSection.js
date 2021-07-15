/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { Icon } from "../Icon";
import { Box } from "../Box";
import Avatar from "../Avatar/Avatar"
// import { StyledNavigation } from './Navigation.styled';

import {
  StyledNavigation,
  StyledNavigationSection,
  StyledNavigationTitle,
  StyledNavigationItem,
  StyledNavigationLink,
  StyledNavigationList,
  StyledNavigationIcon,
  StyledToggleButton,
  StyledIcon,
  StyledNavigationFooter,
} from "./Navigation.styled";

const NavigationSection = (props) => {
    const {
      title,
      hasSeparator,
      isWidth,
      items,
      active,
      as,
      className: customClassName,
      ...rest
    } = props;
    const [open, setOpen] = useState(true);
    const handleToggle = () => {
      setOpen(!open);
    };
    return (
      <>
      {isWidth && (<StyledToggleButton onClick={handleToggle} style={{borderLeft:'2px solid #000' }}>
          {title && <StyledNavigationTitle>{title}</StyledNavigationTitle>}
          <Icon
            size="16"
            color="#172b4c"
            icon={open ? "chevron-right" : "chevron-down"}
          />
        </StyledToggleButton>)}
        <StyledNavigationSection>
          {open && (
            <>
              <Box display="flex" alignItems="center"></Box>
              <StyledNavigationList>
                {items && items.map((item, groupIdx) => (
                  <StyledNavigationItem key={groupIdx}>
                    <StyledIcon key={groupIdx}>
                      {item.iconLeft && (
                        <Icon size="16" color="#172b4c" icon={item.iconLeft} />
                      )}
                    </StyledIcon>
                    <StyledNavigationLink
                      // as={as || item.as}
                      to={item.url}
                      // end={item.exact || item.isExact}
                      exact={item.exact || item.isExact}
                      href={item.url}
                      // id={`navigation-group-section-${groupIdx}`}
                      onClick={item.onClick}
                      activeClassName="selected sublist--open"
                      className={item.isSelected && "selected sublist--open"}
                      // aria-disabled={item.isDisabled}
                      {...rest}
                    >
                      {item.icon && <StyledNavigationIcon icon={item.icon} />}
                      {isWidth && item.label}&nbsp;&nbsp;
                      {!isNaN(item.count) && isWidth && (
                        <small>({item.count > 0 ? item.count : 0})</small>
                      )}
                    </StyledNavigationLink>
                    {item.iconRight && isWidth && (
                      <Icon
                        size="16"
                        color="#172b4c"
                        icon={item.iconRight}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "10px",
                        }}
                      />
                    )}
                  </StyledNavigationItem>
                ))}
              </StyledNavigationList>
            </>
          )}
        </StyledNavigationSection>
      </>
    );
  };
  

  export default NavigationSection;
  