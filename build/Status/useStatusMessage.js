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
import { useHistory, useLocation } from "react-router-dom";
function useStatusMessage() {
    var _a;
    var history = useHistory();
    var location = useLocation();
    var statusMessage = (_a = location.state) === null || _a === void 0 ? void 0 : _a.statusMessage;
    var setStatusMessage = function (props) {
        var _a;
        var statusMessage = {
            textId: props.textId,
            values: props.values,
            severity: (_a = props.severity) !== null && _a !== void 0 ? _a : "primary",
        };
        if (props.redirect && props.redirect.path !== location.pathname) {
            history.push(props.redirect.path, __assign(__assign({}, props.redirect.state), { statusMessage: statusMessage }));
        }
        else {
            history.replace(__assign(__assign({}, history.location), { state: {
                    statusMessage: statusMessage,
                } }));
        }
    };
    return { statusMessage: statusMessage, setStatusMessage: setStatusMessage };
}
export default useStatusMessage;
//# sourceMappingURL=useStatusMessage.js.map