import React, { useContext } from "react";
import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";
var Checkboxes = function (_a) {
    var _b, _c;
    var label = _a.label, name = _a.name, options = _a.options, instructions = _a.instructions, _d = _a.required, required = _d === void 0 ? false : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e;
    var context = useContext(FormContext);
    var error = ((_b = context.form) === null || _b === void 0 ? void 0 : _b.touched[name]) && ((_c = context.form) === null || _c === void 0 ? void 0 : _c.errors[name]);
    return (React.createElement("fieldset", { className: "form-group" },
        React.createElement("div", { className: !context.vertical ? "row" : "" },
            React.createElement("legend", { className: "pt-0 " + (!context.vertical ? "col-form-label col-sm-2" : "") },
                label,
                required && React.createElement("span", { className: "text-danger" }, "*")),
            React.createElement(FieldWrapper, { vertical: context.vertical },
                options.map(function (option) {
                    var _a, _b, _c;
                    return (React.createElement("div", { key: option.key, className: "form-check" },
                        React.createElement("input", { className: "form-check-input", type: "checkbox", name: name, id: name + "-" + option.key, value: option.key, onChange: (_a = context.form) === null || _a === void 0 ? void 0 : _a.handleChange, checked: (_b = context.form) === null || _b === void 0 ? void 0 : _b.values[name].includes(option.key), disabled: disabled ||
                                (context.editMode && context.loading) || ((_c = context.form) === null || _c === void 0 ? void 0 : _c.isSubmitting) }),
                        React.createElement("label", { className: "form-check-label", htmlFor: name + "-" + option.key }, option.value)));
                }),
                instructions && instructions !== "" && (React.createElement("small", { className: "form-text text-muted", dangerouslySetInnerHTML: { __html: instructions } })),
                error && React.createElement("small", { className: "form-text text-danger" }, error)))));
};
export default Checkboxes;
//# sourceMappingURL=Checkboxes.js.map