import React from "react";
import { SignUpDiv } from "./style";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import modal from "../SignUp/modal.css";

function SignUp(props) {
  return (
    <SignUpDiv>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal"
      >
        <Modal.Header
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <h2 className="modal-head">
            SIGN UP TO BOOK YOUR CARD
          </h2>
          <div className="modal-tin">
            <form action="" className="form">
              <input
                type="text"
                placeholder="FULL NAME"
                className="form-control"
              />
              <input type="tel" placeholder="PHONE" className="form-control" />
              <input
                type="email"
                placeholder="EMAIL"
                className="form-control "
              />
              <input
                type="text"
                placeholder="LOCATION"
                className="form-control"
              />
            </form>

            <button  type="submit" className="form-control btn">
              SUBMIT
            </button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </SignUpDiv>
  );
}

export default SignUp;
