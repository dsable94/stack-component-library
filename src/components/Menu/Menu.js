import React from "react";
import StyledMenu from "./Menu.styled";
import {Icon} from '../Icon';


const Menu = (props) => {
const { btnType, iconOption, id, value, isDisabled,positionMenu, className, btnVariant, children, rounded,  size, block, Iconsize, icon,  iconVariant, options,  } = props;
return (
  <StyledMenu>
    <StyledMenu.Toggle
      variant={btnType}
      className={className}
      type={btnVariant}
      size={size}
      disabled={isDisabled}
      rounded={rounded}
      block={block}
      id={id}
      {...props}
    >
      {value}
      <Icon icon={icon}></Icon>
      {iconOption && <span className="menu-dots" />}
      {children}
    </StyledMenu.Toggle>
    <StyledMenu.Menu positionMenu={positionMenu}>
      {options.map((item, key) => (
        <>
        {item.isDivider ? <hr /> : null}
        {item.headerText ? <div className="menu-header">
        {item.headerText}</div> : <StyledMenu.Item href={item.link} onClick={item.handler}>
        <Icon icon={item.icon} />
        {item.item}
      </StyledMenu.Item>}
          
        </>
      ))}
    </StyledMenu.Menu>
  </StyledMenu>
);
}

export default Menu;