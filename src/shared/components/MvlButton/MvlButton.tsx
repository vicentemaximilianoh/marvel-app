import React from "react";
import { Button } from "react-bootstrap";
import { IMvlButton } from "./IMvlButton.model";


const MvlButton = ({label, type, variant, onClickButton}: IMvlButton) => {

  return (
    <Button
      type={type}
      aria-label={label}
      onClick={onClickButton}
      variant={variant}>{label}</Button>
  );
};

export default MvlButton;