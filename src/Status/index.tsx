import React from "react";

import FormattedMessageHTML from "../FormattedMessageHTML";
import useStatusMessage from "./useStatusMessage";

const Status: React.FC = () => {
  const { statusMessage } = useStatusMessage();

  return (
    <>
      {statusMessage && (
        <div className={`alert alert-${statusMessage.severity}`} role="alert">
          <FormattedMessageHTML
            id={statusMessage.textId}
            values={statusMessage.values}
          />
        </div>
      )}
    </>
  );
};

export default Status;
export { useStatusMessage };
