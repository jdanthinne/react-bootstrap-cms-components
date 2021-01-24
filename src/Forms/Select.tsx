import React, { useContext } from "react";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

export interface SelectProps {
  label: string;
  name: string;
  options: { key: string; value: string; disabled?: boolean }[];
  instructions?: string;
  required?: boolean;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  instructions,
  required = false,
  disabled = false,
}) => {
  const context = useContext(FormContext);
  const error = context.form?.touched[name] && context.form?.errors[name];

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
        <select
          className={`form-control ${error ? "is-invalid" : ""}`}
          name={name}
          id={name}
          value={context.form?.values[name]}
          onBlur={context.form?.handleBlur}
          onChange={context.form?.handleChange}
          required={required}
          disabled={disabled || contextDisabled}
        >
          {options.map((option) => (
            <option
              key={option.key}
              value={option.key}
              disabled={option.disabled ?? false}
            >
              {option.value}
            </option>
          ))}
        </select>

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

export default Select;
