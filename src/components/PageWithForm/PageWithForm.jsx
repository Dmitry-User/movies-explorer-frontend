import "./PageWithForm.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const PageWithForm = ({ content, isValid, children }) => {
  const { pageTitle, submitText, pageText, linkText, linkPath } = content;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="page">
      <div className="page__content">
        <Logo />
        <h2 className="page__title">{pageTitle}</h2>
        <form className="page__form" onSubmit={handleSubmit}>
          <fieldset className="page__form-fieldset">
            {children}
          </fieldset>
          <span className="page__form-error">{"При регистрации пользователя произошла ошибка"}</span>
          <button
            type="submit"
            className={`page__form-submit ${!isValid && "page__form-submit_disabled"}`}
            disabled={!isValid}
          >
            {submitText}
          </button>
        </form>
        <div className="page__info">
          <p className="page__info-text">{pageText}&ensp;</p>
          <Link to={linkPath} className="page__link">
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageWithForm;
