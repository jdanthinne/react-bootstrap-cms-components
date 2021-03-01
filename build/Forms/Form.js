import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import FormContext from "./context";
import Button from "./Button";
import SubmitButton from "./SubmitButton";
var Form = function (_a) {
    var _b, _c, _d;
    var onSubmit = _a.onSubmit, extraButton = _a.extraButton, children = _a.children;
    var history = useHistory();
    var context = useContext(FormContext);
    return (React.createElement("form", { onSubmit: (_b = context.form) === null || _b === void 0 ? void 0 : _b.handleSubmit, noValidate: true },
        children,
        !context.readonly && (React.createElement(React.Fragment, null,
            React.createElement("hr", null),
            React.createElement(Row, { vertical: context.vertical, horizontalLabelColumnCount: context.horizontalLabelColumnCount },
                React.createElement("div", null,
                    React.createElement(SubmitButton, { fullWidth: context.fullWidthButton, onSubmit: onSubmit }, context.submitTitle ? (context.submitTitle) : (React.createElement(FormattedMessage, { id: context.editMode ? "actions.saveUpdates" : "actions.save" }))),
                    extraButton && React.createElement(React.Fragment, null,
                        " ",
                        extraButton),
                    context.returnPath && (React.createElement(React.Fragment, null,
                        " ",
                        React.createElement(Button, { variant: "link", fullWidth: context.fullWidthButton, disabled: (_c = context.form) === null || _c === void 0 ? void 0 : _c.isSubmitting, onClick: function () { return history.push(context.returnPath); } },
                            React.createElement(FormattedMessage, { id: "actions.cancel" }))))),
                context.editMode && context.onDelete && (React.createElement(Button, { variant: "danger", icon: faTrash, fullWidth: context.fullWidthButton, disabled: (_d = context.form) === null || _d === void 0 ? void 0 : _d.isSubmitting, onClick: context.onDelete },
                    React.createElement(FormattedMessage, { id: "actions.delete" }))))))));
};
var Row = function (_a) {
    var children = _a.children, vertical = _a.vertical, horizontalLabelColumnCount = _a.horizontalLabelColumnCount;
    if (vertical) {
        return React.createElement(React.Fragment, null, children);
    }
    else {
        return (React.createElement("div", { className: "form-group row" },
            React.createElement("div", { className: "col-sm-" + horizontalLabelColumnCount }),
            React.createElement("div", { className: "col-sm-" + (12 - horizontalLabelColumnCount) + " d-flex justify-content-between" }, children)));
    }
};
export default Form;
//# sourceMappingURL=Form.js.map