import React, { useState } from "react";

import StyledAccordion from "./Accordian.styled";
import {Card, Button } from 'react-bootstrap';
import {Icon} from '../Icon';



const Accordian = (props) =>{
    const [active, setActive] = useState(0);
    const{ children, icon, label, content, background, as, width, className, varient, onClick, position } =props;
    return(
        <StyledAccordion>
  <Card>
    <StyledAccordion.Toggle varient={varient} width={width} background={background} {...props} className={`${active ? "active" : ""}`} as={ as} eventKey="0" onClick={()=> setActive(!active)}>
     {label}
      <Icon style={{position:"absolute", right:"20px"}}  icon={icon}></Icon>
    </StyledAccordion.Toggle>
    <StyledAccordion.Collapse eventKey="0">
      <Card.Body>{content}</Card.Body>
    </StyledAccordion.Collapse>
  </Card>
        </StyledAccordion>
    )    
}

export default Accordian;