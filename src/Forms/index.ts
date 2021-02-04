import Form from "./Form";
import Context from "./context";
import Instructions from "./Instructions";
import TextField from "./TextField";
import TextArea from "./TextArea";
import FileField, { FileFieldFileProps } from "./FileField";
import Select from "./Select";
import DateField from "./DateField";
import Checkbox from "./Checkbox";
import Checkboxes from "./Checkboxes";
import Fieldset from "./Fieldset";
import Button from "./Button";
import Row from "./Row";
import SubmitButton from "./SubmitButton";
import useForm from "./useForm";

const Forms = {
  Form,
  Context,
  Instructions,
  TextField,
  TextArea,
  FileField,
  Select,
  DateField,
  Checkbox,
  Checkboxes,
  Fieldset,
  Button,
  Row,
  SubmitButton,
};

export default Forms;
export { useForm };
export type { FileFieldFileProps };
