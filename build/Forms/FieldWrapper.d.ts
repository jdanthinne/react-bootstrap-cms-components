import React from "react";
export interface FieldWrapperProps {
    children: React.ReactNode;
    vertical: boolean;
    horizontalLabelColumnCount: number;
}
declare const FieldWrapper: React.FC<FieldWrapperProps>;
export default FieldWrapper;
