import React from "react";
import { FormattedMessage } from "react-intl";
var Loader = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "spinner-border spinner-border-sm text-primary mr-2", role: "status" }),
        React.createElement(FormattedMessage, { id: "misc.loading" })));
};
export default Loader;
//# sourceMappingURL=index.js.map