import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import FormContext from "./context";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  performingAction?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "link"
    | "light"
    | "dark";
  icon?: IconDefinition;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  disabled = false,
  performingAction = false,
  variant = "primary",
  icon,
  className,
  fullWidth = false,
  children,
  onClick,
}) => {
  const context = useContext(FormContext);

  const contextDisabled =
    (context.editMode && context.loading) ||
    context.form?.isSubmitting ||
    context.readonly;

  return (
    <button
      type={type}
      className={`btn btn-${variant} ${fullWidth && "btn-block"} ${className}`}
      disabled={disabled || performingAction || contextDisabled}
      onClick={onClick}
    >
      {performingAction ? (
        <span
          className="spinner-border spinner-border-sm mr-2"
          role="status"
          aria-hidden="true"
        ></span>
      ) : (
        icon && <FontAwesomeIcon icon={icon} className="mr-2" />
      )}
      {children}
    </button>
  );
};

export default Button;
