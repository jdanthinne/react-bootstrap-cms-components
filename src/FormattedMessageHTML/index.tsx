import React from "react";
import { FormattedMessage } from "react-intl";

interface Props {
  id: string;
  values: any;
}

const FormattedMessageHTML: React.FC<Props> = ({ id, values }) => (
  <FormattedMessage
    id={id}
    values={{
      strong: (chunks: string) => <strong>{chunks}</strong>,
      em: (chunks: string) => <em>{chunks}</em>,
      ...values,
    }}
  />
);

export default FormattedMessageHTML;
