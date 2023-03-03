import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import StyledModal from './StackModal.styled';
import Button from 'react-bootstrap/Button';

const StackModal = (props) => {
  const { modalBodyText, LiveDemo, modalTitle, children } = props;
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
    <StyledModal {...props}> 
      
      {
        LiveDemo ? (
          <>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}  > 
              <Modal.Header closeButton>
              <Modal.Title> <h4>{modalTitle}</h4> </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {modalBodyText && <p>{modalBodyText}</p>}
                  {children}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer> 
            </Modal>
          </>
        ) : (
          <>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title><h4>{modalTitle}</h4></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{modalBodyText}</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </>
        )
      }
    </StyledModal>
  );
}

export default StackModal; 