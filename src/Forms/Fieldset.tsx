import React, { useContext } from "react";

import FormContext from "./context";

export interface FieldsetProps {
  title: string;
}

const Fieldset: React.FC<FieldsetProps> = ({ title, children }) => {
  const context = useContext(FormContext);

  return (
    <fieldset className="mt-4">
      <Row vertical={context.vertical!}>
        <legend>{title}</legend>
        <hr />
      </Row>
      {children}
    </fieldset>
  );
};

interface RowProps {
  children: React.ReactNode;
  vertical: boolean;
}
const Row: React.FC<RowProps> = ({ children, vertical }) => {
  if (vertical) {
    return <div className="mb-1">{children}</div>;
  } else {
    return (
      <div className="row mb-1">
        <div className="col-sm-2"></div>
        <div className="col-sm-10">{children}</div>
      </div>
    );
  }
};

export default Fieldset;
