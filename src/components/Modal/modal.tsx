import React, { useEffect, useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./ModalContent.module.scss";

import ReactDOM from "react-dom";

interface Props {
  onClose(): void;
  show: boolean;
  title: string;
  message: string;
  image: string;
}
export function ModalComponent({
  onClose,
  show,
  title,
  message,
  image,
}: Props) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id={styles.body}>
          <img src={image} />
          <p> {message}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
