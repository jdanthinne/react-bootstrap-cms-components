import { StatusMessage } from "./types";
interface SetStatusProps extends StatusMessage {
    redirect?: {
        path: string;
        state?: any;
    };
}
declare function useStatusMessage(): {
    statusMessage: StatusMessage | undefined;
    setStatusMessage: (props?: SetStatusProps | undefined) => void;
};
export default useStatusMessage;
