import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Status from "../Status";
var Title = function (_a) {
    var text = _a.text, subText = _a.subText, action = _a.action, back = _a.back;
    return (React.createElement(React.Fragment, null,
        back && (React.createElement(Link, { to: back.route },
            React.createElement(FontAwesomeIcon, { icon: faChevronLeft }),
            " ",
            back.title)),
        React.createElement("div", { className: "d-flex justify-content-between align-items-center mb-4" },
            React.createElement("h1", null,
                text,
                subText && (React.createElement(React.Fragment, null,
                    " ",
                    React.createElement("small", { className: "text-muted" }, subText)))),
            action && (React.createElement(Link, { className: "btn btn-success btn-sm", to: action.route, role: "button" },
                React.createElement(FontAwesomeIcon, { className: "mr-2", icon: faPlusCircle }),
                action.title))),
        React.createElement(Status, null)));
};
export default Title;
//# sourceMappingURL=index.js.map