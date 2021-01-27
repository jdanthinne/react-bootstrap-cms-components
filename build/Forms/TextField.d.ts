import React, { RefObject } from "react";
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    instructions?: string;
    col?: string;
    inputRef?: RefObject<HTMLInputElement>;
}
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
