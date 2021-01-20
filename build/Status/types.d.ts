export interface StatusMessage {
    textId: string;
    values?: any;
    severity?: "primary" | "success" | "danger" | "warning";
}
