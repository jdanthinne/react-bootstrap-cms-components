import React, { useContext } from "react";
import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";
var Checkbox = function (_a) {
    var _b, _c, _d, _e;
    var label = _a.label, name = _a.name, _f = _a.required, required = _f === void 0 ? false : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g;
    var context = useContext(FormContext);
    var contextDisabled = (context.editMode && context.loading) || ((_b = context.form) === null || _b === void 0 ? void 0 : _b.isSubmitting) ||
        context.readonly;
    return (React.createElement("div", { className: "form-group " + (!context.vertical ? "row" : "") },
        !context.vertical && React.createElement("div", { className: "col-sm-2" }),
        React.createElement(FieldWrapper, { vertical: context.vertical },
            React.createElement("div", { className: "form-check" },
                React.createElement("input", { className: "form-check-input", name: name, id: name, checked: (_d = (_c = context.form) === null || _c === void 0 ? void 0 : _c.values[name]) !== null && _d !== void 0 ? _d : false, onChange: (_e = context.form) === null || _e === void 0 ? void 0 : _e.handleChange, value: "true", type: "checkbox", required: required, disabled: disabled || contextDisabled }),
                React.createElement("label", { className: "form-check-label", htmlFor: name },
                    label,
                    required && React.createElement("span", { className: "text-danger" }, "*"))))));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map