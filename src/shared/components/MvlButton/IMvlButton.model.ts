import { MouseEventHandler } from "react";
import { ButtonType } from "react-bootstrap/esm/Button";
import { ButtonVariant } from "react-bootstrap/esm/types";

export interface IMvlButton {
  label: string;
  type: ButtonType;
  variant: ButtonVariant;
  onClickButton: MouseEventHandler<HTMLButtonElement>
}