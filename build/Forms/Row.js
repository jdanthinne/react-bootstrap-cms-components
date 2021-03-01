import React, { useContext } from "react";
import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";
var Row = function (_a) {
    var label = _a.label, _b = _a.required, required = _b === void 0 ? false : _b, children = _a.children;
    var context = useContext(FormContext);
    return (React.createElement("div", { className: "form-group " + (!context.vertical ? "row" : "") },
        React.createElement("div", { className: !context.vertical
                ? "col-sm-" + context.horizontalLabelColumnCount
                : "" },
            React.createElement("div", { className: "pt-sm-3 mt-sm-4" },
                label,
                required && React.createElement("span", { className: "text-danger" }, "*"))),
        React.createElement(FieldWrapper, { vertical: context.vertical, horizontalLabelColumnCount: context.horizontalLabelColumnCount },
            React.createElement("div", { className: "form-row" }, children))));
};
export default Row;
//# sourceMappingURL=Row.js.map