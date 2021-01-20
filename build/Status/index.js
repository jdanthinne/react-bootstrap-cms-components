import React from "react";
import FormattedMessageHTML from "../FormattedMessageHTML";
import useStatusMessage from "./useStatusMessage";
var Status = function () {
    var statusMessage = useStatusMessage().statusMessage;
    return (React.createElement(React.Fragment, null, statusMessage && (React.createElement("div", { className: "alert alert-" + statusMessage.severity, role: "alert" },
        React.createElement(FormattedMessageHTML, { id: statusMessage.textId, values: statusMessage.values })))));
};
export default Status;
export { useStatusMessage };
//# sourceMappingURL=index.js.map