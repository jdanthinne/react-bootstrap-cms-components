import React, { useContext } from "react";
import { useIntl } from "react-intl";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";
registerLocale("fr", fr);
var DateField = function (_a) {
    var _b, _c, _d, _e, _f;
    var label = _a.label, name = _a.name, instructions = _a.instructions, _g = _a.required, required = _g === void 0 ? false : _g, _h = _a.disabled, disabled = _h === void 0 ? false : _h, _j = _a.showTime, showTime = _j === void 0 ? false : _j;
    var context = useContext(FormContext);
    var intl = useIntl();
    var error = ((_b = context.form) === null || _b === void 0 ? void 0 : _b.touched[name]) && ((_c = context.form) === null || _c === void 0 ? void 0 : _c.errors[name]);
    var contextDisabled = (context.editMode && context.loading) || ((_d = context.form) === null || _d === void 0 ? void 0 : _d.isSubmitting) ||
        context.readonly;
    return (React.createElement("div", { className: "form-group " + (!context.vertical ? "row" : "") },
        React.createElement("label", { htmlFor: name, className: !context.vertical ? "col-form-label col-sm-2 form-control-label" : "" },
            label,
            required && React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FieldWrapper, { vertical: context.vertical },
            React.createElement(DatePicker, { locale: "fr", clearButtonTitle: intl.formatMessage({ id: "actions.clear" }), todayButton: intl.formatMessage({ id: "misc.today" }), showTimeSelect: showTime, dateFormat: showTime ? "dd/MM/yyyy - HH:mm" : "dd/MM/yyyy", isClearable: !required, placeholderText: "jj/mm/aaaa", className: "form-control " + (error ? "is-invalid" : ""), name: name, id: name, selected: (_e = context.form) === null || _e === void 0 ? void 0 : _e.values[name], onChange: function (date) { var _a; return (_a = context.form) === null || _a === void 0 ? void 0 : _a.setFieldValue(name, date); }, onBlur: (_f = context.form) === null || _f === void 0 ? void 0 : _f.handleBlur, required: required, autoComplete: "off", disabled: disabled || contextDisabled }),
            !context.readonly && instructions && instructions !== "" && (React.createElement("small", { className: "form-text text-muted", dangerouslySetInnerHTML: { __html: instructions } })),
            error && React.createElement("small", { className: "form-text text-danger" }, error))));
};
export default DateField;
//# sourceMappingURL=DateField.js.map