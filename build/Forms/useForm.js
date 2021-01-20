import { useFormik } from "formik";
function useForm(_a) {
    var initialValues = _a.initialValues, validationSchema = _a.validationSchema, onSubmit = _a.onSubmit;
    var formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    });
    return formik;
}
export default useForm;
//# sourceMappingURL=useForm.js.map