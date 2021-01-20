import React from "react";
var FieldWrapper = function (_a) {
    var children = _a.children, vertical = _a.vertical;
    if (vertical) {
        return React.createElement(React.Fragment, null, children);
    }
    else {
        return React.createElement("div", { className: "col-sm-10" }, children);
    }
};
export default FieldWrapper;
//# sourceMappingURL=FieldWrapper.js.map