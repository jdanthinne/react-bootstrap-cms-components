import React, { useContext } from "react";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

export interface TextAreaProps {
  label: string;
  name: string;
  instructions?: string;
  required?: boolean;
  autoCorrect?: "off" | "on";
  autoCapitalize?: "off" | "on" | "words" | "characters";
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  instructions,
  required = false,
  autoCorrect = "on",
  autoCapitalize = "on",
  disabled = false,
}) => {
  const context = useContext(FormContext);
  const error = context.form?.touched[name] && context.form?.errors[name];

  const contextDisabled =
    (context.editMode && context.loading) ||
    context.form?.isSubmitting ||
    context.readonly;

  return (
    <div className={`form-group ${!context.vertical ? "row" : ""}`}>
      <label
        htmlFor={name}
        className={
          !context.vertical ? "col-form-label col-sm-2 form-control-label" : ""
        }
      >
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <FieldWrapper vertical={context.vertical!}>
        <textarea
          className={`form-control ${error ? "is-invalid" : ""}`}
          name={name}
          id={name}
          rows={4}
          onBlur={context.form?.handleBlur}
          onChange={context.form?.handleChange}
          required={required}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          disabled={disabled || contextDisabled}
          value={context.form?.values[name]}
        />
        {!context.readonly && instructions && instructions !== "" && (
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

export default TextArea;
