import { useEffect } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { registerContent } from "../../utils/constants";

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
        pattern="^[A-Za-zА-Яа-яЁё\s\-]*$"
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
        pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
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
