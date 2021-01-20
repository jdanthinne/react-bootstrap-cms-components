import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader";
import { FormattedMessage } from "react-intl";
var Table = function (_a) {
    var headers = _a.headers, loading = _a.loading, empty = _a.empty, children = _a.children;
    return (React.createElement(React.Fragment, null, loading ? (React.createElement(Loader, null)) : empty ? (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "text-primary" },
            React.createElement(FontAwesomeIcon, { icon: faSadTear, size: "lg" })),
        React.createElement("span", { className: "text-muted ml-2" },
            React.createElement(FormattedMessage, { id: "table.emptyMessage" })))) : (React.createElement("div", { className: "table-responsive" },
        React.createElement("table", { className: "table table-hover" },
            React.createElement("thead", { className: "thead-light" },
                React.createElement("tr", null, headers.map(function (header, index) {
                    var _a;
                    return (React.createElement("th", { key: "table-header-" + index, className: "text-" + ((_a = header.alignment) !== null && _a !== void 0 ? _a : "left") }, header.label));
                }))),
            React.createElement("tbody", null, children))))));
};
export default Table;
//# sourceMappingURL=index.js.map