import React,{useState} from "react";
import { StyledToast, StyledToastMessage   } from './Toast.styled';
import Toast from 'react-bootstrap/Toast';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { ENDORSED } from "@blueprintjs/icons/lib/esm/generated/iconContents";

const ToastMessage = (props) => {
  const { ToastHeading, ToastContent, success, error, warning, infoAlert} = props;
  const [showToast, setShowToast] = useState();
  const toastMsg = () => {
    setShowToast(true)
  }
  const toastClose = () => {
    setShowToast(false)
  }

  setTimeout(() => {
    setShowToast(false)
  }, 3000);
  return (
    <>
   {/* <StyledToast> SnackBar Styled Toast </StyledToast> */}
    <Button btnType="primary" btnVariant="contained" onHover onClick={toastMsg}> Primary </Button>
    
    <StyledToastMessage>
       <StyledToast {...props}>
       {showToast && (
       <Toast>
         <Toast.Header success={success} error={error} warning={warning} infoAlert={infoAlert} onClick={toastClose}>
        <strong className="mr-auto">{ToastHeading}</strong>
         </Toast.Header>
         <Toast.Body>{ToastContent}</Toast.Body>
       </Toast>
          )}
     </StyledToast>
    </StyledToastMessage>
 
    </>
  );
}

export default ToastMessage; 