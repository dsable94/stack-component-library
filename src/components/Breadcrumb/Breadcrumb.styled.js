import Styled,{css} from "styled-components";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const StyledBreadcrumb = Styled(Breadcrumb)`
    overflow:hidden;

    .breadcrumb{
        background-color: transparent;
        display: inline-flex;
    }
    .breadcrumb-item+.breadcrumb-item::before {
        content: ">";
    }
    .breadcrumb a:hover {
        text-decoration: none;
    }
 
   ${props => props.bgColor ? css `
    & .breadcrumb {
        background-color: ${props.bgColor};
    } `
    : css `` }

   ${props => props.color
        ? css 
        `
        & .breadcrumb a {
         color: ${props.color};
        };
        `
         : css `` } 
         
    ${props =>     
    props.size === "sm"
    ? css``
    :
    props.size === "md"
    ? css `
        font-size: 18px;
    `
    :
    props.size === "lg"
    ? css `
        font-size: 22px;
    `
    : css``
    }

`;

export default StyledBreadcrumb;