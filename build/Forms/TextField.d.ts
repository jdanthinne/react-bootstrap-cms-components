import React from "react";
export interface TextFieldProps {
    label: string;
    name: string;
    instructions?: string;
    type?: string;
    required?: boolean;
    autoComplete?: string;
    autoCorrect?: "off" | "on";
    autoCapitalize?: "off" | "on" | "words" | "characters";
    disabled?: boolean;
    col?: string;
}
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
