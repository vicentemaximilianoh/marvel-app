import { MouseEventHandler } from "react";
import { ButtonType } from "react-bootstrap/esm/Button";
import { ButtonVariant } from "react-bootstrap/esm/types";

export interface IModal {
  show: boolean;
  onClose?: any;
  title: any;
  body: any;
  actions?: IModalAction[];
}

export interface IModalAction {
  label: string;
  type: ButtonType;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant: ButtonVariant;
  size: string;
}