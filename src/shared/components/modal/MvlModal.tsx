import React from "react";
import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";
import { IModal } from "./modal.model";
import MvlButton from "../MvlButton/MvlButton";

function MvlModal(props: any) {
  const { show, onClose, title, body, actions }: IModal = props;
  const footerSection = actions && (
    <Modal.Footer>
      {actions.map((action, index) => (
        <MvlButton
          key={index}
          type={action.type}
          label={action.label}
          variant={action.variant}
          onClickButton={action.onClick}
        ></MvlButton>
      ))}
    </Modal.Footer>
  )

  return (
    <Modal
      show={show}
      onHide={onClose}>
      <Modal.Header closeButton>
        {/* <Modal.Title>{title}</Modal.Title> */}
        <b>{title}</b>
      </Modal.Header>

      <Modal.Body>
        {body}
      </Modal.Body>

      {footerSection}
    </Modal>
  );
}

MvlModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.element,
  actions: PropTypes.array,
}

export default MvlModal;