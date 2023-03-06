// import React from 'react';
import styled, { css } from 'styled-components';

export const StyledNavigationFooter = styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px 10px;
  background-color:#efefef;
  width:300px;
  align-items:flex-end
`;

export const StyledIcon = styled.div`
margin-right: 25px;
`;

export const StyledNavigationTitle = styled.div`
padding: 15px 25px 15px 25px;
font-size: 12px;
font-weight: 400;
color: #b5b5c3;
opacity: 0.5;
text-transform: uppercase;
  :hover{
    color: #0052cc !important;
    cursor: pointer
  }
`;

export const StyledToggleButton = styled.div`

    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    margin-bottom:25px;
    padding-right:15px;
:hover{
  box-shadow: 4px 3px 13px 0px #ddd;
}
`;

export const StyledNavigation = styled.aside`
  background-color: #fff;
  flex: 1;
  overflow: hidden;
  color: #172b4c !important;
  font-weight: 600;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
  border-right: 0px solid rgba(72, 94, 144, 0.16);
  transition: transform .3s ease-in-out, width .3s ease-in-out;
    border-top-right-radius: 20px;
  a {
    color: #172b4c;
  }
`;

export const StyledNavigationList = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) =>
    props.active === true
      ? css`
      border-left:2px solid #000
      `
      : css`
      border-left:none;
        `}
  li{
    display: flex;
    align-items: center;
    margin-bottom:20px;
    padding-left: 20px;
    padding-top:15px;
    cursor:pointer;
  }

  &.stack-navigation__sublist {
    display: none;
  }
`;

export const StyledNavigationSection = styled.div`
  position: relative;
  

  + .-navigation__section {
    &::before {
      display: block;
      content: '';
      margin-top: 8px;
      margin-bottom: 8px;
      margin-left: 16px;
      margin-right: 16px;
      height: 1px;
      background: "red;
    }
  }
`;

export const StyledNavigationArrowLabel = styled.label.attrs({
  className: `stack-navigation__arrow-label`,
})`
  display: flex;
  width: 32px;
  height: 32px;
  background: "red";
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 4px;
  right: 12px;
  cursor: pointer;

  &:hover {
    background: "red";
  }
`;

export const StyledNavigationItem = styled.li`
  position: relative;
`;

export const StyledNavigationLink = styled.a`
  padding: 14px 8px 14px 20px;
`;
