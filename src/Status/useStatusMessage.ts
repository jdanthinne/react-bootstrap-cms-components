import { useHistory, useLocation } from "react-router-dom";

import { StatusMessage } from "./types";

interface LocationState {
  statusMessage?: StatusMessage;
  from?: { pathname: string };
}

interface SetStatusProps extends StatusMessage {
  redirect?: { path: string; state?: any };
}

function useStatusMessage() {
  const history = useHistory<LocationState>();
  const location = useLocation<LocationState>();
  const statusMessage = location.state?.statusMessage;

  const setStatusMessage = (props: SetStatusProps | null) => {
    if (props) {
      const statusMessage = {
        textId: props.textId,
        values: props.values,
        severity: props.severity ?? "primary",
      };

      if (props.redirect && props.redirect.path !== location.pathname) {
        history.push(props.redirect.path, {
          ...props.redirect.state,
          statusMessage: statusMessage,
        });
      } else {
        history.replace({
          ...history.location,
          state: {
            ...history.location.state,
            statusMessage: statusMessage,
          },
        });
      }
    } else {
      history.replace({
        ...history.location,
        state: { ...history.location.state, statusMessage: undefined },
      });
    }
  };

  return { statusMessage, setStatusMessage };
}

export default useStatusMessage;
