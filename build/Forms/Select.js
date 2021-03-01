import React, { useContext } from "react";
import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";
var Select = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var context = useContext(FormContext);
    var error = ((_a = context.form) === null || _a === void 0 ? void 0 : _a.touched[props.name]) && ((_b = context.form) === null || _b === void 0 ? void 0 : _b.errors[props.name]);
    var isVertical = props.col != undefined || context.vertical;
    var contextDisabled = (context.editMode && context.loading) || ((_c = context.form) === null || _c === void 0 ? void 0 : _c.isSubmitting) ||
        context.readonly;
    return (React.createElement("div", { className: (props.col ? "col-" + props.col : "form-group") + " " + (!isVertical ? "row" : "") },
        React.createElement("label", { htmlFor: props.name, className: !isVertical
                ? "col-form-label col-sm-" + context.horizontalLabelColumnCount + " form-control-label"
                : "" },
            props.label,
            props.required && React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FieldWrapper, { vertical: isVertical, horizontalLabelColumnCount: context.horizontalLabelColumnCount },
            React.createElement("select", { className: "form-control " + (error ? "is-invalid" : ""), name: props.name, id: props.name, value: (_d = context.form) === null || _d === void 0 ? void 0 : _d.values[props.name], onBlur: (_e = context.form) === null || _e === void 0 ? void 0 : _e.handleBlur, onChange: (_f = context.form) === null || _f === void 0 ? void 0 : _f.handleChange, required: props.required, disabled: props.disabled || contextDisabled }, props.options.map(function (option) {
                var _a;
                return (React.createElement("option", { key: option.key, value: option.key, disabled: (_a = option.disabled) !== null && _a !== void 0 ? _a : false }, option.value));
            })),
            !context.readonly &&
                props.instructions &&
                props.instructions !== "" && (React.createElement("small", { className: "form-text text-muted", dangerouslySetInnerHTML: { __html: props.instructions } })),
            error && React.createElement("small", { className: "form-text text-danger" }, error))));
};
export default Select;
//# sourceMappingURL=Select.js.map