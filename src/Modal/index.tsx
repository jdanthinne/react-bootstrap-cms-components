import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Modal from "react-bootstrap/Modal";

import Forms from "../Forms";

interface Props {
  title: string;
  actionTitle: string;
  destructive?: boolean;
  show: boolean;
  onClose: () => void;
  onAction: () => Promise<void>;
}

const ModalDialog: React.FC<Props> = ({
  title,
  actionTitle,
  destructive = false,
  show,
  children,
  onClose,
  onAction,
}) => {
  const [performingAction, setPerformingAction] = useState<boolean>(false);

  const onActionClick = async () => {
    try {
      setPerformingAction(true);
      await onAction();
      onClose();
      setPerformingAction(false);
    } catch (error) {
      console.log("Modal action error", error);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-link"
            disabled={performingAction}
            onClick={onClose}
          >
            <FormattedMessage id="actions.cancel" />
          </button>
          <Forms.Button
            variant={destructive ? "danger" : "primary"}
            performingAction={performingAction}
            onClick={onActionClick}
          >
            {actionTitle}
          </Forms.Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDialog;
