import React, { useContext } from "react";
import { useIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";
var FileField = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var intl = useIntl();
    var context = useContext(FormContext);
    var error = ((_a = context.form) === null || _a === void 0 ? void 0 : _a.touched[props.name]) && ((_b = context.form) === null || _b === void 0 ? void 0 : _b.errors[props.name]);
    var isVertical = props.col != undefined || context.vertical;
    var contextDisabled = (context.editMode && context.loading) || ((_c = context.form) === null || _c === void 0 ? void 0 : _c.isSubmitting) ||
        context.readonly;
    return (React.createElement("div", { className: (props.col ? "col-" + props.col : "form-group") + " " + (!isVertical ? "row" : "") },
        React.createElement("label", { htmlFor: props.name, className: !isVertical ? "col-form-label col-sm-2 form-control-label" : "" },
            props.label,
            props.required && React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FieldWrapper, { vertical: isVertical }, props.existingFile && props.existingFile.type.startsWith("image/") ? (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-sm-6" },
                React.createElement("div", { className: "card" },
                    React.createElement("img", { className: "card-img-top", src: props.existingFile.url }),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("div", { className: "d-flex align-items-start justify-content-between" },
                            React.createElement("p", { className: "card-text" }, props.existingFile.name),
                            React.createElement("button", { className: "btn btn-danger btn-sm", title: intl.formatMessage({ id: "actions.delete" }), onClick: props.onDelete },
                                React.createElement(FontAwesomeIcon, { icon: faTrash })))))))) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "custom-file" },
                React.createElement("input", { type: "file", className: "custom-file-input " + (error ? "is-invalid" : ""), id: props.name, name: props.name, onBlur: (_d = context.form) === null || _d === void 0 ? void 0 : _d.handleBlur, onChange: function (e) {
                        var _a, _b;
                        (_a = context.form) === null || _a === void 0 ? void 0 : _a.setFieldValue(props.name, (_b = e.currentTarget.files) === null || _b === void 0 ? void 0 : _b[0]);
                    }, required: props.required, disabled: props.disabled || contextDisabled, accept: props.accept }),
                React.createElement("label", { className: "custom-file-label", htmlFor: props.name, "data-browse": intl.formatMessage({
                        id: "fields.file.browse",
                        defaultMessage: "Browse",
                    }) }, (_g = (_f = (_e = context.form) === null || _e === void 0 ? void 0 : _e.values[props.name]) === null || _f === void 0 ? void 0 : _f.name) !== null && _g !== void 0 ? _g : intl.formatMessage({
                    id: "fields.file.chooseFile",
                    defaultMessage: "Choose file",
                }))),
            !context.readonly &&
                props.instructions &&
                props.instructions !== "" && (React.createElement("small", { className: "form-text text-muted", dangerouslySetInnerHTML: { __html: props.instructions } })),
            error && React.createElement("small", { className: "form-text text-danger" }, error))))));
};
export default FileField;
//# sourceMappingURL=FileField.js.map