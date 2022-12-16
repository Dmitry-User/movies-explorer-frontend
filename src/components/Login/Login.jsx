import "./Login.css";
import PageWithForm from "../PageWithForm/PageWithForm";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { loginContent } from "../../utils/constants";

const Login = () => {
  const { values, handleChange, isValid, errors } = useFormWithValidation({ name: "", email: "", password: "" });

  return (
    <PageWithForm
      content={loginContent}
      isValid={isValid}
    >
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

export default Login;
