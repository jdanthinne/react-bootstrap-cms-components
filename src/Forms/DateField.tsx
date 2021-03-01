import React, { useContext } from "react";
import { useIntl } from "react-intl";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

registerLocale("fr", fr);

export interface DateFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  instructions?: string;
  showTime?: boolean;
  showTimeOnly?: boolean;
  timeIntervals?: number;
  col?: string;
}

const DateField: React.FC<DateFieldProps> = (props) => {
  const context = useContext(FormContext);
  const intl = useIntl();
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
        <DatePicker
          locale="fr"
          clearButtonTitle={intl.formatMessage({ id: "actions.clear" })}
          todayButton={intl.formatMessage({ id: "misc.today" })}
          timeCaption={intl.formatMessage({ id: "misc.time" })}
          showTimeSelect={props.showTime}
          showTimeSelectOnly={props.showTimeOnly}
          timeIntervals={props.timeIntervals}
          dateFormat={
            props.showTime
              ? props.showTimeOnly
                ? "HH:mm"
                : "dd/MM/yyyy - HH:mm"
              : "dd/MM/yyyy"
          }
          isClearable={!props.required}
          placeholderText={props.placeholder}
          className={`form-control ${error ? "is-invalid" : ""}`}
          name={props.name}
          id={props.name}
          selected={context.form?.values[props.name]}
          onChange={(date) => context.form?.setFieldValue(props.name, date)}
          onBlur={context.form?.handleBlur}
          required={props.required}
          autoComplete="off"
          disabled={props.disabled || contextDisabled}
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

export default DateField;
