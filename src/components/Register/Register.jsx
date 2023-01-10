import { useEffect } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { NAME_REGEX, EMAIL_REGEX, registerContent } from "../../utils/constants";

const Register = ({ onRegister, message, isLoading, onHideMessage }) => {
  const { values, handleChange, isValid, errors, resetForm } = useFormWithValidation({});
  const submitText = isLoading ? "Сохранение..." : "Регистрация";

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
    resetForm(values);
  };

  useEffect(() => {
    onHideMessage();
  }, [values]);

  return (
    <PageWithForm
      content={registerContent}
      isValid={isValid}
      onSubmit={handleSubmit}
      message={message}
      submitText={submitText}
    >
      <FormInput
        label="Имя"
        type="text"
        name="name"
        placeholder="Введите имя"
        pattern={NAME_REGEX}
        minLength="2"
        maxLength="30"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />
      <FormInput
        label="E-mail"
        type="email"
        name="email"
        placeholder="Введите email"
        pattern={EMAIL_REGEX}
        value={values.email}
        error={errors.email}
        onChange={handleChange}
      />
      <FormInput
        label="Пароль"
        type="password"
        name="password"
        placeholder="Введите пароль"
        value={values.password}
        error={errors.password}
        onChange={handleChange}
      />
    </PageWithForm>
  );
};

export default Register;
