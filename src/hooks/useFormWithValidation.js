import { useCallback, useState } from 'react';

const useFormWithValidation = (initValue) => {
  const [values, setValues] = useState(initValue);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const errorMessage = e.target.validationMessage;

    setValues((old) => ({ ...old, [name]: value }));
    setErrors((old) => ({ ...old, [name]: errorMessage }));
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChange, errors, isValid, resetForm };
};

export default useFormWithValidation;
