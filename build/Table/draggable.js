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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { DragDropContext, Droppable, } from "react-beautiful-dnd";
import Loader from "../Loader";
import { FormattedMessage } from "react-intl";
var DraggableTable = function (_a) {
    var headers = _a.headers, loading = _a.loading, empty = _a.empty, _b = _a.onDragEnd, onDragEnd = _b === void 0 ? function () { } : _b, children = _a.children;
    return (React.createElement(React.Fragment, null, loading ? (React.createElement(Loader, null)) : empty ? (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "text-primary" },
            React.createElement(FontAwesomeIcon, { icon: faSadTear, size: "lg" })),
        React.createElement("span", { className: "text-muted ml-2" },
            React.createElement(FormattedMessage, { id: "table.emptyMessage" })))) : (React.createElement("div", { className: "table-responsive" },
        React.createElement("table", { className: "table table-hover" },
            React.createElement("thead", { className: "thead-light" },
                React.createElement("tr", null, headers.map(function (header, index) { return (React.createElement("th", { key: "table-header-" + index }, header)); }))),
            React.createElement(DragDropContext, { onDragEnd: onDragEnd },
                React.createElement(Droppable, { droppableId: "droppable-table" }, function (provided) { return (React.createElement("tbody", __assign({ ref: provided.innerRef }, provided.droppableProps),
                    children,
                    provided.placeholder)); })))))));
};
export default DraggableTable;
//# sourceMappingURL=draggable.js.map