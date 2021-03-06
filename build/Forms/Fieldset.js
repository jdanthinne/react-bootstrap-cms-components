import React, { useContext } from "react";
import FormContext from "./context";
var Fieldset = function (_a) {
    var title = _a.title, children = _a.children;
    var context = useContext(FormContext);
    return (React.createElement("fieldset", { className: "mt-4" },
        React.createElement(Row, { vertical: context.vertical, horizontalLabelColumnCount: context.horizontalLabelColumnCount },
            React.createElement("legend", null, title),
            React.createElement("hr", null)),
        children));
};
var Row = function (_a) {
    var children = _a.children, vertical = _a.vertical, horizontalLabelColumnCount = _a.horizontalLabelColumnCount;
    if (vertical) {
        return React.createElement("div", { className: "mb-1" }, children);
    }
    else {
        return (React.createElement("div", { className: "row mb-1" },
            React.createElement("div", { className: "col-sm-" + horizontalLabelColumnCount }),
            React.createElement("div", { className: "col-sm-" + (12 - horizontalLabelColumnCount) }, children)));
    }
};
export default Fieldset;
//# sourceMappingURL=Fieldset.js.map