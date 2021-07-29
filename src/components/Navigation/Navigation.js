/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { Icon } from "../Icon";
import { Box } from "../Box";
import Avatar from "../Avatar/Avatar";
import NavigationSection from "./NavigationSection";
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

const Navigation = (props) => {
  const { children, position, color, onClick, items, title, size, src } = props;
  const [isWidth, setIsWidth] = useState(true);
  const [inlineStyle, setInlineStyle] = useState({ width: "300px" });
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSidebar = () => {
    setIsWidth(!isWidth);
    isWidth
      ? setInlineStyle({
          width: "60px",
          alignItems: "center",
          justifyContent: "center",
        })
      : setInlineStyle({ width: "300px" });
  };
  return (
    <>
      <StyledNavigation {...props} style={inlineStyle}>
        <Box
          display="flex"
          justifyContent="space-between"
          pl="20px"
          pr="20px"
          mb="10px"
        >
          <Icon size="16" color="#172b4c" icon="menu" onClick={handleSidebar} />
          {isWidth && <Avatar size={size} src={src} alt="largeAvatar" />}
        </Box>
        {children &&
          React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                isWidth,
                handleToggle,
                setOpen,
                open,
              });
            }
            return child;
          })}
      </StyledNavigation>
      <StyledNavigationFooter style={inlineStyle}>
        {isWidth && <Icon size="16" color="#172b4c" icon="settings" />}
        {isWidth && <Icon size="16" color="#172b4c" icon="comment" />}
        <Icon size="16" color="#172b4c" icon="log-out" />
      </StyledNavigationFooter>
    </>
  );
};
Navigation.Section = NavigationSection;

export default Navigation;
