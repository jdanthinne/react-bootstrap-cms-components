import React, { useContext } from "react";
import { useIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

export interface FileFieldFileProps {
  url: string;
  name: string;
  type: string;
}

export interface FileFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  instructions?: string;
  col?: string;
  existingFile?: FileFieldFileProps;
  onDelete?: () => void;
}

const FileField: React.FC<FileFieldProps> = (props) => {
  const intl = useIntl();
  const context = useContext(FormContext);
  const error =
    context.form?.touched[props.name] && context.form?.errors[props.name];

  const isVertical = props.col != undefined || context.vertical;
  const contextDisabled =
    (context.editMode && context.loading) ||
    context.form?.isSubmitting ||
    context.readonly;

  return (
    <div
      className={`${props.col ? `col-${props.col}` : "form-group"} ${
        !isVertical ? "row" : ""
      }`}
    >
      <label
        htmlFor={props.name}
        className={
          !isVertical
            ? `col-form-label col-sm-${context.horizontalLabelColumnCount} form-control-label`
            : ""
        }
      >
        {props.label}
        {props.required && <span className="text-danger">*</span>}
      </label>

      <FieldWrapper
        vertical={isVertical!}
        horizontalLabelColumnCount={context.horizontalLabelColumnCount}
      >
        {props.existingFile && props.existingFile.type.startsWith("image/") ? (
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <img className="card-img-top" src={props.existingFile.url} />
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between">
                    <p className="card-text">{props.existingFile.name}</p>
                    {!contextDisabled && (
                      <a
                        className="btn btn-danger btn-sm"
                        title={intl.formatMessage({ id: "actions.delete" })}
                        onClick={props.onDelete}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="custom-file">
              <input
                type="file"
                className={`custom-file-input ${error ? "is-invalid" : ""}`}
                id={props.name}
                name={props.name}
                onBlur={context.form?.handleBlur}
                onChange={(e) => {
                  context.form?.setFieldValue(
                    props.name,
                    e.currentTarget.files?.[0]
                  );
                }}
                required={props.required}
                disabled={props.disabled || contextDisabled}
                accept={props.accept}
              />
              <label
                className="custom-file-label"
                htmlFor={props.name}
                data-browse={intl.formatMessage({
                  id: "fields.file.browse",
                  defaultMessage: "Browse",
                })}
              >
                {context.form?.values[props.name]?.name ??
                  intl.formatMessage({
                    id: "fields.file.chooseFile",
                    defaultMessage: "Choose file",
                  })}
              </label>
            </div>

            {!context.readonly &&
              props.instructions &&
              props.instructions !== "" && (
                <small
                  className="form-text text-muted"
                  dangerouslySetInnerHTML={{ __html: props.instructions }}
                />
              )}
            {error && <small className="form-text text-danger">{error}</small>}
          </>
        )}
      </FieldWrapper>
    </div>
  );
};

export default FileField;
