import React from "react";
import { FormikErrors, FormikTouched, FormikValues } from "formik";
export interface FormContextProps<FormValues = any> {
    form?: {
        values: FormikValues;
        touched: FormikTouched<FormValues>;
        errors: FormikErrors<FormValues>;
        isSubmitting: boolean;
        handleBlur: (e: React.FocusEvent) => void;
        handleChange: (e: React.ChangeEvent) => void;
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
        setFieldValue: (field: string, value: any) => void;
    };
    loading?: boolean;
    editMode?: boolean;
    onDelete?: () => void;
    vertical?: boolean;
    horizontalLabelColumnCount: number;
    submitTitle?: string;
    fullWidthButton?: boolean;
    returnPath?: string;
    readonly?: boolean;
}
declare const FormContext: React.Context<FormContextProps<any>>;
export default FormContext;
