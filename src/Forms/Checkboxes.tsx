import React, { useContext } from "react";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

export interface CheckboxesProps {
  label: string;
  name: string;
  options: { key: string; value: string }[];
  instructions?: string;
  required?: boolean;
  disabled?: boolean;
}

const Checkboxes: React.FC<CheckboxesProps> = ({
  label,
  name,
  options,
  instructions,
  required = false,
  disabled = false,
}) => {
  const context = useContext(FormContext);
  const error = context.form?.touched[name] && context.form?.errors[name];

  const contextDisabled =
    (context.editMode && context.loading) ||
    context.form?.isSubmitting ||
    context.readonly;

  return (
    <fieldset className="form-group">
      <div className={!context.vertical ? "row" : ""}>
        <legend
          className={`pt-0 ${
            !context.vertical ? "col-form-label col-sm-2" : ""
          }`}
        >
          {label}
          {required && <span className="text-danger">*</span>}
        </legend>
        <FieldWrapper vertical={context.vertical!}>
          {options.map((option) => (
            <div key={option.key} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name={name}
                id={`${name}-${option.key}`}
                value={option.key}
                onChange={context.form?.handleChange}
                checked={context.form?.values[name].includes(option.key)}
                disabled={disabled || contextDisabled}
              />
              <label
                className="form-check-label"
                htmlFor={`${name}-${option.key}`}
              >
                {option.value}
              </label>
            </div>
          ))}
          {!context.readonly && instructions && instructions !== "" && (
            <small
              className="form-text text-muted"
              dangerouslySetInnerHTML={{ __html: instructions }}
            />
          )}
          {error && <small className="form-text text-danger">{error}</small>}
        </FieldWrapper>
      </div>
    </fieldset>
  );
};

export default Checkboxes;
