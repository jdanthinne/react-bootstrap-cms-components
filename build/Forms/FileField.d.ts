import React from "react";
export interface FileFieldFileProps {
    url: string;
    name: string;
    type: string;
}
export interface FileFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    instructions?: string;
    col?: string;
    existingFile?: FileFieldFileProps;
    onDelete?: () => void;
}
declare const FileField: React.FC<FileFieldProps>;
export default FileField;
