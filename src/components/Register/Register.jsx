import "./Register.css";
import PageWithForm from "../PageWithForm/PageWithForm";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { registerContent } from "../../utils/constants";

const Register = () => {
  const { values, handleChange, isValid, errors } = useFormWithValidation({ name: "", email: "", password: "" });

  return (
    <PageWithForm
      content={registerContent}
      isValid={isValid}
    >
      <FormInput
        label="Имя"
        type="text"
        name="name"
        placeholder="Введите имя"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />
      <FormInput
        label="E-mail"
        type="email"
        name="email"
        placeholder="Введите email"
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
