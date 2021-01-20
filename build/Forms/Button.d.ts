import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
export interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit";
    disabled?: boolean;
    performingAction?: boolean;
    variant?: "primary" | "success" | "danger" | "link";
    icon?: IconDefinition;
    fullWidth?: boolean;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
