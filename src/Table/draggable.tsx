import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import {
  DragDropContext,
  Droppable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";

import Loader from "../Loader";
import { FormattedMessage } from "react-intl";

interface DraggableTableProps {
  headers: string[];
  loading: boolean;
  empty: boolean;
  onDragEnd?: (result: DropResult, provided: ResponderProvided) => void;
}

const DraggableTable: React.FC<DraggableTableProps> = ({
  headers,
  loading,
  empty,
  onDragEnd = () => {},
  children,
}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : empty ? (
        <>
          <span className="text-primary">
            <FontAwesomeIcon icon={faSadTear} size="lg" />
          </span>
          <span className="text-muted ml-2">
            <FormattedMessage id="table.emptyMessage" />
          </span>
        </>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                {headers.map((header, index) => (
                  <th key={`table-header-${index}`}>{header}</th>
                ))}
              </tr>
            </thead>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable-table">
                {(provided) => (
                  <tbody ref={provided.innerRef} {...provided.droppableProps}>
                    {children}
                    {provided.placeholder}
                  </tbody>
                )}
              </Droppable>
            </DragDropContext>
          </table>
        </div>
      )}
    </>
  );
};

export default DraggableTable;
