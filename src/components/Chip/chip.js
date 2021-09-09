import React, { useEffect } from "react";
import StyledChip from "./chip.styles";
import { Icon } from '../Icon';
import { Data } from "./data";


const Chip = (props) => {
  let { label, avatar, color } = props


  useEffect(() => {
    console.log("pppppppppp", props, Data)
  }, [])
  return (
    <StyledChip >
      {

        label !== "arraychip" ?
          <div className={color == "primary" ? "chip primary" : color == "secoundary" ? "chip secoundary" : "chip"}>
            <img src="img_avatar.jpg" width="50" height="50" />

            {label}
          </div>
          :
          <>
            {
              Data.map((item, index) => {
                return (
                  <div className="chip">
                    {item.label}
                    <span>X</span>
                  </div>
                )
              })

            }
          </>

      }


    </StyledChip>
  );
}

export default Chip;

































































































































