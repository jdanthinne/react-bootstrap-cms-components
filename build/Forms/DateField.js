import React, { useContext } from "react";
import { useIntl } from "react-intl";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";
registerLocale("fr", fr);
var DateField = function (props) {
    var _a, _b, _c, _d, _e;
    var context = useContext(FormContext);
    var intl = useIntl();
    var error = ((_a = context.form) === null || _a === void 0 ? void 0 : _a.touched[props.name]) && ((_b = context.form) === null || _b === void 0 ? void 0 : _b.errors[props.name]);
    var isVertical = props.col != undefined || context.vertical;
    var contextDisabled = (context.editMode && context.loading) || ((_c = context.form) === null || _c === void 0 ? void 0 : _c.isSubmitting) ||
        context.readonly;
    return (React.createElement("div", { className: (props.col ? "col-" + props.col : "form-group") + " " + (!isVertical ? "row" : "") },
        React.createElement("label", { htmlFor: props.name, className: !isVertical ? "col-form-label col-sm-2 form-control-label" : "" },
            props.label,
            props.required && React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FieldWrapper, { vertical: isVertical },
            React.createElement(DatePicker, { locale: "fr", clearButtonTitle: intl.formatMessage({ id: "actions.clear" }), todayButton: intl.formatMessage({ id: "misc.today" }), showTimeSelect: props.showTime, showTimeSelectOnly: props.showTimeOnly, timeIntervals: props.timeIntervals, dateFormat: props.showTime ? "dd/MM/yyyy - HH:mm" : "dd/MM/yyyy", isClearable: !props.required, placeholderText: "jj/mm/aaaa", className: "form-control " + (error ? "is-invalid" : ""), name: props.name, id: props.name, selected: (_d = context.form) === null || _d === void 0 ? void 0 : _d.values[props.name], onChange: function (date) { var _a; return (_a = context.form) === null || _a === void 0 ? void 0 : _a.setFieldValue(props.name, date); }, onBlur: (_e = context.form) === null || _e === void 0 ? void 0 : _e.handleBlur, required: props.required, autoComplete: "off", disabled: props.disabled || contextDisabled }),
            !context.readonly &&
                props.instructions &&
                props.instructions !== "" && (React.createElement("small", { className: "form-text text-muted", dangerouslySetInnerHTML: { __html: props.instructions } })),
            error && React.createElement("small", { className: "form-text text-danger" }, error))));
};
export default DateField;
//# sourceMappingURL=DateField.js.map