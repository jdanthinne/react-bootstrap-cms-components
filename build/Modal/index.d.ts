import React from "react";
interface Props {
    title: string;
    actionTitle: string;
    destructive?: boolean;
    show: boolean;
    onClose: () => void;
    onAction: () => Promise<void>;
}
declare const ModalDialog: React.FC<Props>;
export default ModalDialog;
