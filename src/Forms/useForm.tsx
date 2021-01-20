import { useFormik } from "formik";

export interface UseFormProps<FormValues = any> {
  initialValues: FormValues;
  validationSchema: any;
  onSubmit: (values: FormValues) => void;
}

function useForm<T>({
  initialValues,
  validationSchema,
  onSubmit,
}: UseFormProps<T>) {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return formik;
}

export default useForm;
