import React, { useContext } from "react";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

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

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  instructions,
  type = "text",
  required = false,
  autoComplete,
  autoCorrect = "on",
  autoCapitalize = "on",
  disabled = false,
  col,
}) => {
  const context = useContext(FormContext);
  const error = context.form?.touched[name] && context.form?.errors[name];

  const isVertical = col != undefined || context.vertical;

  return (
    <div
      className={`${col ? `col-${col}` : "form-group"} ${
        !isVertical ? "row" : ""
      }`}
    >
      <label
        htmlFor={name}
        className={
          !isVertical ? "col-form-label col-sm-2 form-control-label" : ""
        }
      >
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <FieldWrapper vertical={isVertical!}>
        <input
          className={`form-control ${error ? "is-invalid" : ""}`}
          name={name}
          id={name}
          value={context.form?.values[name]}
          onBlur={context.form?.handleBlur}
          onChange={context.form?.handleChange}
          type={type}
          required={required}
          autoComplete={
            autoComplete ?? (type === "email" ? "email" : undefined)
          }
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          disabled={
            disabled ||
            (context.editMode && context.loading) ||
            context.form?.isSubmitting
          }
        />
        {instructions && instructions !== "" && (
          <small
            className="form-text text-muted"
            dangerouslySetInnerHTML={{ __html: instructions }}
          />
        )}
        {error && <small className="form-text text-danger">{error}</small>}
      </FieldWrapper>
    </div>
  );
};

export default TextField;
