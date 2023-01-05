import { useEffect } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { EMAIL_REGEX, loginContent } from "../../utils/constants";

const Login = ({
  onLogin,
  message,
  isLoading,
  onHideMessage
}) => {
  const { values, handleChange, isValid, errors, resetForm } = useFormWithValidation({});
  const submitText = isLoading ? "Сохранение..." : "Войти";

    const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
    resetForm({ email: values.email});
  };

  useEffect(() => {
    onHideMessage();
  }, [values]);

  return (
    <PageWithForm
      content={loginContent}
      isValid={isValid}
      onSubmit={handleSubmit}
      message={message}
      submitText={submitText}
    >
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

export default Login;
