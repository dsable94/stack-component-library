import React, { useState, useEffect } from "react";
import StyledChip from "./chip.styles";
import { Data } from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Chip = (props) => {
  const [chipData, setchipData] = useState(Data)
  let { label, avatar, color,icon, disabled, variant, size} = props

  const handleDelete = (item, index) => () => {
    const leftchip = [...chipData]
    leftchip.splice(index, 1);
    setchipData(leftchip)

  };
  return (
    
    <StyledChip >
      {
      
        variant !== "outlined" &&
        label !== "arraychip" ?
          <div className={color == "primary" ? "chip primary" : color == "secoundary" ? "chip secoundary" : size== "small" ? "chipsmall" : "chip"  }>
          {icon && <FontAwesomeIcon icon={icon}/> }
          {avatar && <sapn className="avatar">{avatar}</sapn>}

            {label}
          </div>
          :
         
         
          <>
            {
               variant !== "outlined" &&
              chipData.map((item, index) => {
                return (
                  <div className="chip">
                    {item.label}
                    <FontAwesomeIcon icon={icon} className="cross" onClick={handleDelete(item, index)} />
                  </div>
                )
              })

            }

            {
               variant == "outlined" &&
               <div className={color == "primary" ? "chipoutline primaryout" : color == "secoundary" ? "chipoutline secoundaryout" : "chipoutline"}>
          {icon && <FontAwesomeIcon icon={icon}/> }
          {avatar && <sapn className="avatar">{avatar}</sapn>}

            {label}
          </div>
            }
          </>

      }
      
    </StyledChip>
    
  );
}

export default Chip;

































































































































