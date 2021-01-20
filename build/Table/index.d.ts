import React from "react";
interface TableProps {
    headers: {
        label: string;
        alignment?: string;
    }[];
    loading: boolean;
    empty: boolean;
}
declare const Table: React.FC<TableProps>;
export default Table;
