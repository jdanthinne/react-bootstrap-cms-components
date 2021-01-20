import React from "react";
import "react-datepicker/dist/react-datepicker.css";
export interface DateFieldProps {
    label: string;
    name: string;
    instructions?: string;
    required?: boolean;
    disabled?: boolean;
    showTime?: boolean;
}
declare const DateField: React.FC<DateFieldProps>;
export default DateField;
