import React from "react";

export interface FieldWrapperProps {
  children: React.ReactNode;
  vertical: boolean;
  horizontalLabelColumnCount: number;
}
const FieldWrapper: React.FC<FieldWrapperProps> = ({
  children,
  vertical,
  horizontalLabelColumnCount,
}) => {
  if (vertical) {
    return <>{children}</>;
  } else {
    return (
      <div className={`col-sm-${12 - horizontalLabelColumnCount}`}>
        {children}
      </div>
    );
  }
};

export default FieldWrapper;
