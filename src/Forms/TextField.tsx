import React, { RefObject, useContext } from "react";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  instructions?: string;
  col?: string;
  inputRef?: RefObject<HTMLInputElement>;
}

const TextField: React.FC<TextFieldProps> = (props) => {
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
          !isVertical ? "col-form-label col-sm-2 form-control-label" : ""
        }
      >
        {props.label}
        {props.required && <span className="text-danger">*</span>}
      </label>
      <FieldWrapper vertical={isVertical!}>
        <input
          className={`form-control ${error ? "is-invalid" : ""}`}
          name={props.name}
          id={props.name}
          value={context.form?.values[props.name]}
          onBlur={context.form?.handleBlur}
          onChange={context.form?.handleChange}
          type={props.type}
          required={props.required}
          autoComplete={
            props.autoComplete ?? (props.type === "email" ? "email" : undefined)
          }
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
          disabled={props.disabled || contextDisabled}
          placeholder={props.placeholder}
          ref={props.inputRef}
        />
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

export default TextField;
