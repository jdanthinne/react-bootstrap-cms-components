var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { FormattedMessage } from "react-intl";
var FormattedMessageHTML = function (_a) {
    var id = _a.id, values = _a.values;
    return (React.createElement(FormattedMessage, { id: id, values: __assign({ strong: function (chunks) { return React.createElement("strong", null, chunks); }, em: function (chunks) { return React.createElement("em", null, chunks); } }, values) }));
};
export default FormattedMessageHTML;
//# sourceMappingURL=index.js.map