import React, { useContext, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faGlobe, faKey, } from "@fortawesome/free-solid-svg-icons";
import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";
var TextField = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var context = useContext(FormContext);
    var error = ((_a = context.form) === null || _a === void 0 ? void 0 : _a.touched[props.name]) && ((_b = context.form) === null || _b === void 0 ? void 0 : _b.errors[props.name]);
    var isVertical = props.col != undefined || context.vertical;
    var contextDisabled = (context.editMode && context.loading) || ((_c = context.form) === null || _c === void 0 ? void 0 : _c.isSubmitting) ||
        context.readonly;
    var preprendIcon = useMemo(function () {
        switch (props.type) {
            case "email":
                return faEnvelope;
            case "tel":
                return faPhone;
            case "url":
                return faGlobe;
            case "password":
                return faKey;
            default:
                return null;
        }
    }, [props.type]);
    return (React.createElement("div", { className: (props.col ? "col-" + props.col : "form-group") + " " + (!isVertical ? "row" : "") },
        React.createElement("label", { htmlFor: props.name, className: !isVertical
                ? "col-form-label col-sm-" + context.horizontalLabelColumnCount + " form-control-label"
                : "" },
            props.label,
            props.required && React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FieldWrapper, { vertical: isVertical, horizontalLabelColumnCount: context.horizontalLabelColumnCount },
            React.createElement("div", { className: "input-group" },
                preprendIcon && (React.createElement("div", { className: "input-group-prepend" },
                    React.createElement("span", { className: "input-group-text" },
                        React.createElement(FontAwesomeIcon, { icon: preprendIcon })))),
                React.createElement("input", { className: "form-control " + (error ? "is-invalid" : ""), name: props.name, id: props.name, value: (_d = context.form) === null || _d === void 0 ? void 0 : _d.values[props.name], onBlur: (_e = context.form) === null || _e === void 0 ? void 0 : _e.handleBlur, onChange: (_f = context.form) === null || _f === void 0 ? void 0 : _f.handleChange, type: props.type, required: props.required, autoComplete: (_g = props.autoComplete) !== null && _g !== void 0 ? _g : (props.type === "email" ? "email" : undefined), autoCapitalize: props.autoCapitalize, autoCorrect: props.autoCorrect, disabled: props.disabled || contextDisabled, placeholder: props.placeholder, ref: props.inputRef }),
                props.unit && (React.createElement("div", { className: "input-group-append" },
                    React.createElement("span", { className: "input-group-text" }, props.unit)))),
            !context.readonly &&
                props.instructions &&
                props.instructions !== "" && (React.createElement("small", { className: "form-text text-muted", dangerouslySetInnerHTML: { __html: props.instructions } })),
            error && React.createElement("small", { className: "form-text text-danger" }, error))));
};
export default TextField;
//# sourceMappingURL=TextField.js.map