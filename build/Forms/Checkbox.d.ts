import React from "react";
export interface CheckboxProps {
    label: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
