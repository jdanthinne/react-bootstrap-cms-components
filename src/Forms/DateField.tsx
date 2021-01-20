import React, { useContext } from "react";
import { useIntl } from "react-intl";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

registerLocale("fr", fr);

export interface DateFieldProps {
  label: string;
  name: string;
  instructions?: string;
  required?: boolean;
  disabled?: boolean;
  showTime?: boolean;
}

const DateField: React.FC<DateFieldProps> = ({
  label,
  name,
  instructions,
  required = false,
  disabled = false,
  showTime = false,
}) => {
  const context = useContext(FormContext);
  const intl = useIntl();
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
        <DatePicker
          locale="fr"
          clearButtonTitle={intl.formatMessage({ id: "actions.clear" })}
          todayButton={intl.formatMessage({ id: "misc.today" })}
          showTimeSelect={showTime}
          dateFormat={showTime ? "dd/MM/yyyy - HH:mm" : "dd/MM/yyyy"}
          isClearable={!required}
          placeholderText="jj/mm/aaaa"
          className={`form-control ${error ? "is-invalid" : ""}`}
          name={name}
          id={name}
          selected={context.form?.values[name]}
          onChange={(date) => context.form?.setFieldValue(name, date)}
          onBlur={context.form?.handleBlur}
          required={required}
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

export default DateField;
