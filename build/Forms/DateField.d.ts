import React from "react";
import "react-datepicker/dist/react-datepicker.css";
export interface DateFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    instructions?: string;
    showTime?: boolean;
    showTimeOnly?: boolean;
    timeIntervals?: number;
    col?: string;
}
declare const DateField: React.FC<DateFieldProps>;
export default DateField;
