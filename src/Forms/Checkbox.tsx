import React, { useContext } from "react";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

export interface CheckboxProps {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  required = false,
  disabled = false,
}) => {
  const context = useContext(FormContext);

  const contextDisabled =
    (context.editMode && context.loading) ||
    context.form?.isSubmitting ||
    context.readonly;

  return (
    <div className={`form-group ${!context.vertical ? "row" : ""}`}>
      {!context.vertical && (
        <div className={`col-sm-${context.horizontalLabelColumnCount}`} />
      )}
      <FieldWrapper
        vertical={context.vertical!}
        horizontalLabelColumnCount={context.horizontalLabelColumnCount}
      >
        <div className="form-check">
          <input
            className="form-check-input"
            name={name}
            id={name}
            checked={context.form?.values[name] ?? false}
            onChange={context.form?.handleChange}
            value="true"
            type="checkbox"
            required={required}
            disabled={disabled || contextDisabled}
          />
          <label className="form-check-label" htmlFor={name}>
            {label}
            {required && <span className="text-danger">*</span>}
          </label>
        </div>
      </FieldWrapper>
    </div>
  );
};

export default Checkbox;
