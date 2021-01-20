import React from "react";
import { FormattedMessage } from "react-intl";

const Loader: React.FC = () => {
  return (
    <>
      <div
        className="spinner-border spinner-border-sm text-primary mr-2"
        role="status"
      />
      <FormattedMessage id="misc.loading" />
    </>
  );
};

export default Loader;
