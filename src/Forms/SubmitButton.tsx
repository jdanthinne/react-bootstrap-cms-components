import React, { useContext } from "react";

import FormContext from "./context";
import Button from "./Button";

export interface SubmitButtonProps {
  onSubmit?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onSubmit,
  children,
  disabled = false,
  fullWidth = false,
}) => {
  const context = useContext(FormContext);

  return (
    <Button
      type={onSubmit ? "button" : "submit"}
      disabled={disabled || (context.editMode && context.loading)}
      fullWidth={fullWidth}
      performingAction={context.form?.isSubmitting ?? false}
      onClick={onSubmit}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
