import validateForm from "../utils/validators";
import { useState } from "react";

const useForm = (initialValues) => {

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});


  const handleChange = (event) => {
    const { name, value } = event?.target;

    setFormValues({ ...formValues, [name]: value });

    const form = event?.target?.closest("form");

    const fieldError = validateForm({ [name]: value }, form)[name] || null;

    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: fieldError }));
  };

  const resetForm = () => {
    setFormValues(initialValues);

    setFormErrors({});
  };

  return {
    formValues,
    formErrors,
    handleChange,
    resetForm,
  };
};

export default useForm;
