import styled, {css} from "styled-components";
import * as variable from "../../variable";

const StyledButton = styled.button`
    padding: 6px 16px;
    border-radius: 4px;
    transition: all 0.5s ease;
    color: ${variable.white};
    ${props =>
        props.btnType === "primary"
        ? css `
            background: ${variable.blue};
            border: 1px solid ${variable.blue};
        `
        : props.btnType === "secondary"
           ? css `
            background: ${variable.gray600};
            border: 1px solid ${variable.gray600};

        `
        : props.btnType === "success"
        ? css `
         background: ${variable.green};
         border: 1px solid ${variable.green};
        `
        : props.btnType === "info"
        ? css `
         background: ${variable.cyan};
         border: 1px solid ${variable.cyan};
        `
        : props.btnType === "warning"
        ? css `
         background: ${variable.yellow};
         border: 1px solid ${variable.yellow};
        `
        : props.btnType === "danger"
        ? css `
         background: ${variable.orange};
         border: 1px solid ${variable.orange};
        `
        : props.btnType === "purple"
        ? css `
         background: ${variable.purple};
         border: 1px solid ${variable.purple};
        `
        : props.btnType === "light"
        ? css `
         background: ${variable.gray100};
         border: 1px solid ${variable.gray100};
        `
        : props.btnType === "dark"
        ? css `
         background: ${variable.gray800};
         border: 1px solid ${variable.gray800};
        `
        : props.btnType.includes("#")
        ? css `
         background: ${props.btnType};
         border: 0;
        `
           : css`
                background: ${variable.gray800}
           `
    }
    ${props =>
        props.disabled
            ? css`
                cursor: not-allowed;
                opacity:0.6;

            `
            : css`
            cursor: pointer;
            `
    }
    ${props =>
        props.borderRadius
            ? css`
                border-radius: ${props.borderRadius};
            `
            : css`
            border-radius: 4px;
            `
    }
    ${props =>
        
        props.variant === "outlined"
        ? css`
            background: ${variable.white};
        `
        : css` `
    }
    ${props =>
        props.variant === "outlined" && props.btnType === "primary"
        ? css`
            color: ${variable.blue};
        `
        :
        props.variant === "outlined" && props.btnType === "secondary"
        ? css`
            color: ${variable.gray600};
        `
        :
        props.variant === "outlined" && props.btnType === "success"
        ? css`
            color: ${variable.green};
        `
        :
        props.variant === "outlined" && props.btnType === "info"
        ? css`
            color: ${variable.cyan};
        `
        :
        props.variant === "outlined" && props.btnType === "warning"
        ? css`
            color: ${variable.yellow};
        `
        :
        props.variant === "outlined" && props.btnType === "danger"
        ? css`
            color: ${variable.orange};
        `
        :
        props.variant === "outlined" && props.btnType === "purple"
        ? css`
            color: ${variable.purple};
        `
        :   
        props.variant === "outlined" && props.btnType === "light"
        ? css`
            color: ${variable.gray100};
        `
        :
        props.variant === "outlined" && props.btnType === "dark"
        ? css`
            color: ${variable.gray800};
        `
        : css` `
    }
    ${props =>
        props.rounded === "rounded"
        ? css `
        border-radius: ${variable.btnBorderRadius};
        `
        : css ``
 }
 ${props =>
    props.color
    ? css `
    color: ${props.color};
    `
    : css ``
}
 ${props =>     
    props.block === "true"
    ? css`
    display:block;
    width:100%;
    `
    : css` `
}
${props =>     
    props.size === "sm"
    ? css`
    padding: .28rem .8rem;
    font-size: .71094rem;
    line-height: 1.5;
    border-radius: .15rem;
    `
    :
    props.size === "lg"
    ? css `
    padding: .5rem 1rem;
    font-size: 1.01563rem;
    line-height: 1.5;
    border-radius: .15rem;
    `
    : css` `
}
${props =>
    props.onHover
    ? css `
    &:hover {
        opacity: 0.8;
        transition: all 0.5s ease;
        box-shadow: rgba(0,0,0,0.15) 2px 4px 5px 0px;
    } 
    `
    : css ``
}
`

export default StyledButton;