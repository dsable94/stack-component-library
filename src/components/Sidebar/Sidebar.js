/* eslint-disable no-unused-expressions */
import React from "react";
import { StyledSideBar } from './Sidebar.styled';

const Sidebar = (props) => {
  const { children, position, color, onClick, className } = props;
  return (
    <StyledSideBar {...props}> 
      {children}
    </StyledSideBar>
  )
}

export default Sidebar;
