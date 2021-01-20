import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormContext from "./context";
var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "button" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.performingAction, performingAction = _d === void 0 ? false : _d, _e = _a.variant, variant = _e === void 0 ? "primary" : _e, icon = _a.icon, _f = _a.fullWidth, fullWidth = _f === void 0 ? false : _f, children = _a.children, onClick = _a.onClick;
    var context = useContext(FormContext);
    return (React.createElement("button", { type: type, className: "btn btn-" + variant + " " + (fullWidth && "btn-block"), disabled: disabled || performingAction || (context.editMode && context.loading), onClick: onClick },
        performingAction ? (React.createElement("span", { className: "spinner-border spinner-border-sm mr-2", role: "status", "aria-hidden": "true" })) : (icon && React.createElement(FontAwesomeIcon, { icon: icon, className: "mr-2" })),
        children));
};
export default Button;
//# sourceMappingURL=Button.js.map