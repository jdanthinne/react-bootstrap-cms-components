import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

import Loader from "../Loader";
import { FormattedMessage } from "react-intl";

interface TableProps {
  headers: { label: string; alignment?: string }[];
  loading: boolean;
  empty: boolean;
}

const Table: React.FC<TableProps> = ({ headers, loading, empty, children }) => {
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
                  <th
                    key={`table-header-${index}`}
                    className={`text-${header.alignment ?? "left"}`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
