import React from "react";

export interface FieldWrapperProps {
  children: React.ReactNode;
  vertical: boolean;
}
const FieldWrapper: React.FC<FieldWrapperProps> = ({ children, vertical }) => {
  if (vertical) {
    return <>{children}</>;
  } else {
    return <div className="col-sm-10">{children}</div>;
  }
};

export default FieldWrapper;
