import React from "react";
import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";
import { IModal } from "./modal.model";

function MvlModal(props: any) {
  const { show, onClose, header, body, footer }: IModal = props;

  return (
    <Modal
      show={show}
      onHide={onClose}>
      <Modal.Header closeButton>
        {/* <Modal.Title>{title}</Modal.Title> */}
        {header}
      </Modal.Header>

      <Modal.Body>
        {body}
      </Modal.Body>

      <Modal.Footer>
        {footer}
      </Modal.Footer>
    </Modal>
  );
}

MvlModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  // title: PropTypes.string,
  header: PropTypes.element,
  body: PropTypes.element,
  footer: PropTypes.element,
}

export default MvlModal;