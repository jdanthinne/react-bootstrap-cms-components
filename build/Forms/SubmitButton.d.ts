import React from "react";
export interface SubmitButtonProps {
    onSubmit?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
}
declare const SubmitButton: React.FC<SubmitButtonProps>;
export default SubmitButton;
