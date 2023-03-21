import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./ModalLoading.css";

const ModalLoading = (props) => {
  return (
    <>
      <Modal
        {...props}
        backdrop="static"
        keyboard={false}
        closeButton={false}
        centered
      >
        <Modal.Body style={{ backgroundColor: "transparente" }}>
          <div className="row text-center justify-content-center align-items-center">
            <div className="col">
              <div className="load-row">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="row mt-2 text-center justify-content-center align-items-center">
            <div className="col">
              <p>Loading...</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalLoading;
