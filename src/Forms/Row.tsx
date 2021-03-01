import React, { useContext } from "react";

import FormContext from "./context";
import FieldWrapper from "./FieldWrapper";

export interface RowProps {
  label?: string;
  required?: boolean;
}

const Row: React.FC<RowProps> = ({ label, required = false, children }) => {
  const context = useContext(FormContext);

  return (
    <div className={`form-group ${!context.vertical ? "row" : ""}`}>
      <div
        className={
          !context.vertical
            ? `col-sm-${context.horizontalLabelColumnCount}`
            : ""
        }
      >
        <div className="pt-sm-3 mt-sm-4">
          {label}
          {required && <span className="text-danger">*</span>}
        </div>
      </div>
      <FieldWrapper
        vertical={context.vertical!}
        horizontalLabelColumnCount={context.horizontalLabelColumnCount}
      >
        <div className="form-row">{children}</div>
      </FieldWrapper>
    </div>
  );
};

export default Row;
