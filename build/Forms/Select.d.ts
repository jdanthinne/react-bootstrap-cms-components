import React from "react";
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: {
        key: string;
        value: string;
        disabled?: boolean;
    }[];
    instructions?: string;
    col?: string;
}
declare const Select: React.FC<SelectProps>;
export default Select;
