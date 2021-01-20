import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Status from "../Status";

interface TitleProps {
  text: string;
  subText?: string;
  action?: { title: string; route: string };
  back?: { title: string; route: string };
}

const Title: React.FC<TitleProps> = ({ text, subText, action, back }) => {
  return (
    <>
      {back && (
        <Link to={back.route}>
          <FontAwesomeIcon icon={faChevronLeft} /> {back.title}
        </Link>
      )}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>
          {text}
          {subText && (
            <>
              {" "}
              <small className="text-muted">{subText}</small>
            </>
          )}
        </h1>
        {action && (
          <Link
            className="btn btn-success btn-sm"
            to={action.route}
            role="button"
          >
            <FontAwesomeIcon className="mr-2" icon={faPlusCircle} />
            {action.title}
          </Link>
        )}
      </div>
      <Status />
    </>
  );
};

export default Title;
