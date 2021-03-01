import React, { useContext } from "react";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: { key: string; value: string; disabled?: boolean }[];
  instructions?: string;
  col?: string;
}

const Select: React.FC<SelectProps> = (props) => {
  const context = useContext(FormContext);
  const error =
    context.form?.touched[props.name] && context.form?.errors[props.name];

  const isVertical = props.col != undefined || context.vertical;
  const contextDisabled =
    (context.editMode && context.loading) ||
    context.form?.isSubmitting ||
    context.readonly;

  return (
    <div
      className={`${props.col ? `col-${props.col}` : "form-group"} ${
        !isVertical ? "row" : ""
      }`}
    >
      <label
        htmlFor={props.name}
        className={
          !isVertical
            ? `col-form-label col-sm-${context.horizontalLabelColumnCount} form-control-label`
            : ""
        }
      >
        {props.label}
        {props.required && <span className="text-danger">*</span>}
      </label>
      <FieldWrapper
        vertical={isVertical!}
        horizontalLabelColumnCount={context.horizontalLabelColumnCount}
      >
        <select
          className={`form-control ${error ? "is-invalid" : ""}`}
          name={props.name}
          id={props.name}
          value={context.form?.values[props.name]}
          onBlur={context.form?.handleBlur}
          onChange={context.form?.handleChange}
          required={props.required}
          disabled={props.disabled || contextDisabled}
        >
          {props.options.map((option) => (
            <option
              key={option.key}
              value={option.key}
              disabled={option.disabled ?? false}
            >
              {option.value}
            </option>
          ))}
        </select>

        {!context.readonly &&
          props.instructions &&
          props.instructions !== "" && (
            <small
              className="form-text text-muted"
              dangerouslySetInnerHTML={{ __html: props.instructions }}
            />
          )}
        {error && <small className="form-text text-danger">{error}</small>}
      </FieldWrapper>
    </div>
  );
};

export default Select;
