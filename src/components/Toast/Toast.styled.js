import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Toast from 'react-bootstrap/Toast'

export const StyledToastMessage = styled.div`
position:absolute;
background-color : transparent;
border-color : #23b397;
`

export const StyledToast = styled(Toast)`

  ${props =>
  props.success
  ? css `
    background-color: #23b397;
    border-color: #23b397;
    & .toast-header{
      background-color: #23b397;
      color: #fff;
    }
  `
  :css ``
  }

  ${props =>
    props.error
    ? css `
      background-color: #f0643b;
      & .toast-header{
        background-color: #f0643b;
        color: #fff;
      }
    `
    :css ``
    }

    ${props =>
      props.warning
      ? css `
        background-color: #ff9800;
        & .toast-header{
          background-color: #ff9800;
          color: #fff;
        }
      `
      :css ``
      }

      ${props =>
        props.infoAlert
        ? css `
          background-color: #2196f3;
          & .toast-header{
            background-color: #2196f3;
            color: #fff;
          }
        `
        :css ``
        }
  
` 