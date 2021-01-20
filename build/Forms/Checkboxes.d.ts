import React from "react";
export interface CheckboxesProps {
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
declare const Checkboxes: React.FC<CheckboxesProps>;
export default Checkboxes;
