import React, { useContext } from "react";
import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";
var TextField = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var label = _a.label, name = _a.name, instructions = _a.instructions, _h = _a.type, type = _h === void 0 ? "text" : _h, _j = _a.required, required = _j === void 0 ? false : _j, autoComplete = _a.autoComplete, _k = _a.autoCorrect, autoCorrect = _k === void 0 ? "on" : _k, _l = _a.autoCapitalize, autoCapitalize = _l === void 0 ? "on" : _l, _m = _a.disabled, disabled = _m === void 0 ? false : _m;
    var context = useContext(FormContext);
    var error = ((_b = context.form) === null || _b === void 0 ? void 0 : _b.touched[name]) && ((_c = context.form) === null || _c === void 0 ? void 0 : _c.errors[name]);
    return (React.createElement("div", { className: "form-group " + (!context.vertical ? "row" : "") },
        React.createElement("label", { htmlFor: name, className: !context.vertical ? "col-form-label col-sm-2 form-control-label" : "" },
            label,
            required && React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FieldWrapper, { vertical: context.vertical },
            React.createElement("input", { className: "form-control " + (error ? "is-invalid" : ""), name: name, id: name, value: (_d = context.form) === null || _d === void 0 ? void 0 : _d.values[name], onBlur: (_e = context.form) === null || _e === void 0 ? void 0 : _e.handleBlur, onChange: (_f = context.form) === null || _f === void 0 ? void 0 : _f.handleChange, type: type, required: required, autoComplete: autoComplete !== null && autoComplete !== void 0 ? autoComplete : (type === "email" ? "email" : undefined), autoCapitalize: autoCapitalize, autoCorrect: autoCorrect, disabled: disabled ||
                    (context.editMode && context.loading) || ((_g = context.form) === null || _g === void 0 ? void 0 : _g.isSubmitting) }),
            instructions && instructions !== "" && (React.createElement("small", { className: "form-text text-muted", dangerouslySetInnerHTML: { __html: instructions } })),
            error && React.createElement("small", { className: "form-text text-danger" }, error))));
};
export default TextField;
//# sourceMappingURL=TextField.js.map