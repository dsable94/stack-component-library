import Styled,{css} from "styled-components";
import Accordion from 'react-bootstrap/Accordion'


const StyledAccordion = Styled(Accordion)`
${props => props.background ? css ` background-color: ${props.background};`: css `` } 


${props => props.position ==='right' 
? css `
position:absolute;
left: auto;
display:block;
right: 20px;
 `
 : css `  ` }

 .active.card-header span{
    -ms-transform: rotate(180deg); 
    transform: rotate(180deg);
    transition: all 0.3s;
 }
 .btn-link:focus{
box-shadow:none!important;
 }
 .btn-link{
    text-align:left;
    width:200px;
 }
${props => props.width ? css ` width: ${props.width};`: css `background-color:"#000000"` }

`;

export default StyledAccordion;