import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormContext from "./context";
var Button = function (_a) {
    var _b;
    var _c = _a.type, type = _c === void 0 ? "button" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.performingAction, performingAction = _e === void 0 ? false : _e, _f = _a.variant, variant = _f === void 0 ? "primary" : _f, icon = _a.icon, className = _a.className, _g = _a.fullWidth, fullWidth = _g === void 0 ? false : _g, children = _a.children, onClick = _a.onClick;
    var context = useContext(FormContext);
    var contextDisabled = (context.editMode && context.loading) || ((_b = context.form) === null || _b === void 0 ? void 0 : _b.isSubmitting) ||
        context.readonly;
    return (React.createElement("button", { type: type, className: "btn btn-" + variant + " " + (fullWidth && "btn-block") + " " + className, disabled: disabled || performingAction || contextDisabled, onClick: onClick },
        performingAction ? (React.createElement("span", { className: "spinner-border spinner-border-sm mr-2", role: "status", "aria-hidden": "true" })) : (icon && React.createElement(FontAwesomeIcon, { icon: icon, className: "mr-2" })),
        children));
};
export default Button;
//# sourceMappingURL=Button.js.map