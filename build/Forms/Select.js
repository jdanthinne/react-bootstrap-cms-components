import React, { useContext } from "react";
import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";
var Select = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var label = _a.label, name = _a.name, options = _a.options, instructions = _a.instructions, _h = _a.required, required = _h === void 0 ? false : _h, _j = _a.disabled, disabled = _j === void 0 ? false : _j;
    var context = useContext(FormContext);
    var error = ((_b = context.form) === null || _b === void 0 ? void 0 : _b.touched[name]) && ((_c = context.form) === null || _c === void 0 ? void 0 : _c.errors[name]);
    return (React.createElement("div", { className: "form-group " + (!context.vertical ? "row" : "") },
        React.createElement("label", { htmlFor: name, className: !context.vertical ? "col-form-label col-sm-2 form-control-label" : "" },
            label,
            required && React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FieldWrapper, { vertical: context.vertical },
            React.createElement("select", { className: "form-control " + (error ? "is-invalid" : ""), name: name, id: name, value: (_d = context.form) === null || _d === void 0 ? void 0 : _d.values[name], onBlur: (_e = context.form) === null || _e === void 0 ? void 0 : _e.handleBlur, onChange: (_f = context.form) === null || _f === void 0 ? void 0 : _f.handleChange, required: required, disabled: disabled ||
                    (context.editMode && context.loading) || ((_g = context.form) === null || _g === void 0 ? void 0 : _g.isSubmitting) }, options.map(function (option) { return (React.createElement("option", { key: option.key, value: option.key }, option.value)); })),
            instructions && instructions !== "" && (React.createElement("small", { className: "form-text text-muted", dangerouslySetInnerHTML: { __html: instructions } })),
            error && React.createElement("small", { className: "form-text text-danger" }, error))));
};
export default Select;
//# sourceMappingURL=Select.js.map