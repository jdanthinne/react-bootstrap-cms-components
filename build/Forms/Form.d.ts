import React from "react";
export interface FormProps {
    onSubmit?: () => void;
    extraButton?: React.ReactElement;
}
declare const Form: React.FC<FormProps>;
export default Form;
