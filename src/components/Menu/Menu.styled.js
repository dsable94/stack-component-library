import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Dropdown from 'react-bootstrap/Dropdown';

const StyledMenu = styled(Dropdown)`
border-radius: 4px;
color: ${variable.white};
${props =>
    props.btnType === "menu"
    ? css `
    background: red !important;
     border: 2px solid;
     padding:0;
    `
    : props.btnType === "primary"
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
       : css`
            background: transparent;
            border:1px solid transparent;
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
    props.type === "outlined"
    ? css`
        background: ${variable.white};
    `
    : css`
    `
}
${props =>
    props.type === "outlined"
    ? css`
        background: ${variable.white};
    `
    : css`
    `
}

${props =>
    props.rounded === "rounded"
    ? css `
    border-radius: ${variable.btnBorderRadius};
    `
    : css ``
}
${props =>     
props.block === "true"
? css`
display:block;
width:100%;
`
: css`
`
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
: css`
`
}
    ${props =>     
        props.Iconsize === "sm"
        ? css`
        font-size: 12px;
        `
        :
        props.Iconsize === "md"
        ? css`
        font-size: 14px;
        `
        :
        props.Iconsize === "lg"
        ? css `
        font-size: 16px;
        `
        : css`
        `
        }
svg{
     margin:0 10px;
     font-size:12px;
}
.dropdown-menu.show{
    border:none;
    box-shadow: 0 0 35px 0 rgba(154,161,171,.3);
    padding-top:0;
    border-radius:0;
    right:0 !important;
    left: auto !important;
    -webkit-transition: all .5s ease-out;
    -ms-transition: all .5s ease-out;
    transition: all .5s ease-out;
    transform: rotateX(90deg);
    transform-origin: top;
}
.btn-menu{
    padding:0;
    :focus{
        box-shadow:none;
    }
}
.dropdown-item{
    padding:0.35rem 1.2rem;
    font-weight: 400;
    color: #6c757d;
    text-align: inherit;
    white-space: nowrap;
    font-size: .8125rem;
    text-transform: capitalize;
    
    svg{
        margin-left:0;
        width:13px;
        height:13px;
        font-weight:300;
    }
}
.menu-header{
    background-color: #414d5f;
        padding: 12px 20px;
        margin-top: -.25rem;
        font-size: 0.9rem !important;
        margin-bottom: 0.25rem;
        color:#ffffff !important;
}
.dropdown-toggle::after{
    display: none;
  }
  .btn-default{
color:#6c757d;
:focus{
    box-shadow:none;
}
  }
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #e9ecef;
    margin: 0;
    padding: 0;
}
.menu-dots{
    display: inline-block;
    width:16px;
    transition:.35s ease-in-out;
    height:16px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDI2LjY2NyA0MjYuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjYuNjY3IDQyNi42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Y2lyY2xlIGN4PSI0Mi42NjciIGN5PSIyMTMuMzMzIiByPSI0Mi42NjciLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBjeD0iMjEzLjMzMyIgY3k9IjIxMy4zMzMiIHI9IjQyLjY2NyIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8Y2lyY2xlIGN4PSIzODQiIGN5PSIyMTMuMzMzIiByPSI0Mi42NjciLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==);
}
`

export default StyledMenu;