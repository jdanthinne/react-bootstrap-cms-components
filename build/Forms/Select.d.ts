import React from "react";
export interface SelectProps {
    label: string;
    name: string;
    options: {
        key: string;
        value: string;
    }[];
    instructions?: string;
    required?: boolean;
    disabled?: boolean;
}
declare const Select: React.FC<SelectProps>;
export default Select;
