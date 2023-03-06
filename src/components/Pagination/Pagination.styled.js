import Styled,{css} from "styled-components";
import * as variable from "../../variable";
import Pagination from 'react-bootstrap/Pagination';

const StyledPagination = Styled(Pagination)`
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
        props.bgColor==="primary"
        ? css`
            li.page-item .page-link{
                background-color:${variable.primary};
                color:${variable.white};
                h5,p {color:${variable.white}}
            };
            li.page-item.active .page-link{
                background-color:${variable.white};
                color:${variable.primary};
                h5,p {color:${variable.primary}}
            }; 
            
            

        `
        :props.bgColor==="secondary"
        ? css`
        li.page-item .page-link{
            background-color:${variable.secondary};
            color:${variable.white};
            h5,p {color:${variable.white}}
        };
        li.page-item.active .page-link{
            background-color:${variable.white};
            color:${variable.secondary};
            h5,p {color:${variable.secondary}}
        };
        
        `
        :props.bgColor==="success"
        ? css`
        li.page-item .page-link{
            background-color:${variable.success};
            color:${variable.white};
            h5,p {color:${variable.white}}
        };
        li.page-item.active .page-link{
            background-color:${variable.white};
            color:${variable.success};
            h5,p {color:${variable.success}}
        };
        
        `
        :props.bgColor==="info"
        ? css`
        li.page-item .page-link{
            background-color:${variable.info};
            color:${variable.white};
            h5,p {color:${variable.white}}
        };
        li.page-item.active .page-link{
            background-color:${variable.white};
            color:${variable.info};
            h5,p {color:${variable.info}}
        };
        `
        :props.bgColor==="warning"
        ? css`
        li.page-item .page-link{
        background-color:${variable.warning};
        color:${variable.white};
        h5,p {color:${variable.white}}
        };
        li.page-item.active .page-link{
            background-color:${variable.white};
            color:${variable.warning};
            h5,p {color:${variable.warning}}
        };
        `
        :props.bgColor==="danger"
        ? css`
        li.page-item .page-link{
            background-color:${variable.danger};
            color:${variable.white};
            h5,p {color:${variable.white}}
        };
        li.page-item.active .page-link{
            background-color:${variable.white};
            color:${variable.danger};
            h5,p {color:${variable.danger}}
        };
        `
        : css`
            background-color: ${variable.ColorWhiteBase};
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
        props.size === "sm"
        ? css`
        li.page-item .page-link{
            padding: .28rem .8rem;
            font-size: .71094rem;
            line-height: 1.5;
            border-radius: .15rem;
        }
        
        `
        :
        props.size === "lg"
        ? css `
        li.page-item .page-link{
            padding: .5rem 1rem;
            font-size: 1.01563rem;
            line-height: 1.5;
            border-radius: .15rem;
        }
        `
        : css`
        `
    }
    ${props =>
        props.paginationType === "rounded"
        ? css `
            li{
                padding-right:8px;
            };
            li.page-item .page-link{
                height:35px;
                width:35px;
                text-align:center;
                border-radius: ${variable.borderRadiusPagination};
            };
            li.active span,a{
               border-radius: ${variable.borderRadiusPagination};
            };
            .page-item:first-child .page-link{
                border-bottom-left-radius: 50%;
                border-top-left-radius: 50%;
            };
            .page-item:last-child .page-link{
                border-bottom-right-radius: 50%;
                border-top-right-radius: 50%;
            }

        `
        : css ``
 }
`;

export default StyledPagination;