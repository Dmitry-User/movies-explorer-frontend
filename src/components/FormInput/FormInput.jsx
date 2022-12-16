import "./FormInput.css";

const FormInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  error,
  onChange,
}) => {
  return (
    <label className="form-input__label">
      <span className="form-input__label-text">{label}</span>
      <input
        className={`form-input__input ${error ? "form-input__input_type_error" : ""}`}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        required
      />
      <span className="form-input__error">{error}</span>
    </label>
  );
};

export default FormInput;
