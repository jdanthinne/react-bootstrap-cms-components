import React, { RefObject, useContext, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faEnvelope,
  faPhone,
  faGlobe,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  unit?: string;
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

  const preprendIcon: IconDefinition | null = useMemo(() => {
    switch (props.type) {
      case "email":
        return faEnvelope;
      case "tel":
        return faPhone;
      case "url":
        return faGlobe;
      case "password":
        return faKey;
      default:
        return null;
    }
  }, [props.type]);

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
        <div className="input-group">
          {preprendIcon && (
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={preprendIcon} />
              </span>
            </div>
          )}

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
              props.autoComplete ??
              (props.type === "email" ? "email" : undefined)
            }
            autoCapitalize={props.autoCapitalize}
            autoCorrect={props.autoCorrect}
            disabled={props.disabled || contextDisabled}
            placeholder={props.placeholder}
            ref={props.inputRef}
          />

          {props.unit && (
            <div className="input-group-append">
              <span className="input-group-text">{props.unit}</span>
            </div>
          )}
        </div>

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
