import React from "react";
export interface TextAreaProps {
    label: string;
    name: string;
    instructions?: string;
    required?: boolean;
    autoCorrect?: "off" | "on";
    autoCapitalize?: "off" | "on" | "words" | "characters";
    disabled?: boolean;
}
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
