import React,{useEffect} from "react";
import StyledChip  from "./chip.styles";
import { Icon } from '../Icon';

const Chip = (props) =>{
   let { label, avatar } = props

   useEffect(()=>{
   console.log("pppppppppp",props)
   },[])
    return(
        <StyledChip >
          <div className="chip">
           <img src="img_avatar.jpg"  width="96" height="96"/>
            {label}
           </div>
        </StyledChip>
    );
}

export default Chip;