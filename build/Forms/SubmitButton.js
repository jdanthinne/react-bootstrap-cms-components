import React, { useContext } from "react";
import FormContext from "./context";
import Button from "./Button";
var SubmitButton = function (_a) {
    var _b, _c;
    var onSubmit = _a.onSubmit, children = _a.children, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e;
    var context = useContext(FormContext);
    return (React.createElement(Button, { type: onSubmit ? "button" : "submit", disabled: disabled || (context.editMode && context.loading), fullWidth: fullWidth, performingAction: (_c = (_b = context.form) === null || _b === void 0 ? void 0 : _b.isSubmitting) !== null && _c !== void 0 ? _c : false, onClick: onSubmit }, children));
};
export default SubmitButton;
//# sourceMappingURL=SubmitButton.js.map