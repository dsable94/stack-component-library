import Styled,{css} from "styled-components";
import * as variable from "../../variable";
import Tabs from 'react-bootstrap/Tabs';

const StyledTabs = Styled(Tabs)`
    overflow:hidden;
    ${props=>
        props.width
        ? css`
            width: ${props.width};
        `
        :css `
            width: 100%;
        `
    }
    ${props=>
        props.alignText
        ? css`
         text-align:${props.alignText};
         justify-content:${props.alignText};
        `
        : css`
            text-align: inherit;
        `
    }
    ${props=>
        props.alignContent
        ? css`
            margin: 0 auto;
        `
        : css`
            margin: auto;
        `
    }
    ${props=>
        props.color
        ? css`
            color:${props.color};
        `
        : css`
        `
    }
    ${props=>
        props.imgPos==="bg"
        ? css`
            color:${variable.white} !important;
        `
        : css`
        `
    }
    ${props=>
        props.bgColor==="primary"
        ? css`
            background-color:${variable.primary};
            h5,p {color:${variable.white}}

        `
        :props.bgColor==="secondary"
        ? css`
        background-color:${variable.secondary};
            h5,p {color:${variable.white}}
        `
        :props.bgColor==="success"
        ? css`
        background-color:${variable.success};
        h5,p {color:${variable.white}}
        `
        :props.bgColor==="info"
        ? css`
        background-color:${variable.info};
        h5,p {color:${variable.white}}
        `
        :props.bgColor==="warning"
        ? css`
        background-color:${variable.warning};
        h5,p {color:${variable.white}}
        `
        :props.bgColor==="danger"
        ? css`
        background-color:${variable.danger};
        h5,p {color:${variable.white}}
        `
        : css`
            background-color: ${variable.ColorWhiteBase};
        `
    }
    h5 {
        font-size:${variable.h5FontSize};
        font-weight:500;
    }
    img {
        max-width:100%;
    }
`;

export default StyledTabs;