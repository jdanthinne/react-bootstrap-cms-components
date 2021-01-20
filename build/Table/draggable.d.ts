import React from "react";
import { DropResult, ResponderProvided } from "react-beautiful-dnd";
interface DraggableTableProps {
    headers: string[];
    loading: boolean;
    empty: boolean;
    onDragEnd?: (result: DropResult, provided: ResponderProvided) => void;
}
declare const DraggableTable: React.FC<DraggableTableProps>;
export default DraggableTable;
