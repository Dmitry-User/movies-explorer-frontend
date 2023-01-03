import "./FormInput.css";

const FormInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  pattern,
  minLength,
  maxLength,
  error,
  onChange,
}) => {
  return (
    <label className="page__form-label">
      <span className="page__form-label-text">{label}</span>
      <input
        className={`page__form-input ${error ? "page__form-input_type_error" : ""}`}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        value={value || ""}
        required
      />
      <span className="page__form-error">{error}</span>
    </label>
  );
};

export default FormInput;
