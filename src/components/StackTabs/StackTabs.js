import React from "react";
import StyledTabs from "./StackTabs.styled";
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const StackTabs = (props) =>{
    const{ width, activeKey, defaultActiveKey, id, mountOnEnter, onSelect, transition, unmountOnExit,
        variant, children, className } =props;
    if(variant==="leftPills") { 
        return(
            <StyledTabs defaultActiveKey={defaultActiveKey} id={id} {...props}>
                {children}
            </StyledTabs>
        )
    }
    else{
    return(
        <StyledTabs defaultActiveKey={defaultActiveKey} id={id} {...props}>
                   {children}
        </StyledTabs>
    )
    }
}

export default StackTabs;