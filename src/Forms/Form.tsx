import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import FormContext from "./context";
import Button from "./Button";
import SubmitButton from "./SubmitButton";

export interface FormProps {
  onSubmit?: () => void;
  extraButton?: React.ReactElement;
}

const Form: React.FC<FormProps> = ({ onSubmit, extraButton, children }) => {
  const history = useHistory();
  const context = useContext(FormContext);

  return (
    <form onSubmit={context.form?.handleSubmit} noValidate>
      {children}
      {!context.readonly && (
        <>
          <hr />
          <Row vertical={context.vertical!}>
            <div>
              <SubmitButton
                fullWidth={context.fullWidthButton}
                onSubmit={onSubmit}
              >
                {context.submitTitle ? (
                  context.submitTitle
                ) : (
                  <FormattedMessage
                    id={
                      context.editMode ? "actions.saveUpdates" : "actions.save"
                    }
                  />
                )}
              </SubmitButton>
              {extraButton && <> {extraButton}</>}
              {context.returnPath && (
                <>
                  {" "}
                  <Button
                    variant="link"
                    fullWidth={context.fullWidthButton}
                    disabled={context.form?.isSubmitting}
                    onClick={() => history.push(context.returnPath!)}
                  >
                    <FormattedMessage id={"actions.cancel"} />
                  </Button>
                </>
              )}
            </div>
            {context.editMode && context.onDelete && (
              <Button
                variant="danger"
                icon={faTrash}
                fullWidth={context.fullWidthButton}
                disabled={context.form?.isSubmitting}
                onClick={context.onDelete}
              >
                <FormattedMessage id={"actions.delete"} />
              </Button>
            )}
          </Row>
        </>
      )}
    </form>
  );
};

interface FooterProps {
  children: React.ReactNode;
  vertical: boolean;
}
const Row: React.FC<FooterProps> = ({ children, vertical }) => {
  if (vertical) {
    return <>{children}</>;
  } else {
    return (
      <div className="form-group row">
        <div className="col-sm-2"></div>
        <div className="col-sm-10 d-flex justify-content-between">
          {children}
        </div>
      </div>
    );
  }
};

export default Form;
