import "./Profile.css";
import { useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";

const Profile = ({
  onLogout,
  onUpdate,
  isLoading,
  message,
  isEditProfile,
  onEditProfile,
  onHideMessage,
}) => {
  const user = useContext(CurrentUserContext);
  const { values, handleChange, isValid, errors, resetForm } = useFormWithValidation(user);
  const buttonText = isLoading ? "Сохранение..." : "Сохранить";
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  },[isEditProfile]);

  useEffect(() => {
    onHideMessage();
  },[values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(values);
    resetForm(values);
  };

  return (
    <main className="profile">
      <div className="profile__content">
        <h2 className="profile__title">{`Привет, ${user.name}!`}</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <fieldset className="profile__form-fieldset">
            <div className="profile__label-wrapper">
              <label className="profile__label">
                <input
                  className={`profile__input ${!isEditProfile ? "profile__input_disabled" : ""}`}
                  ref={ref}
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  minLength={2}
                  maxLength={30}
                  placeholder="Имя пользователя"
                  disabled={!isEditProfile}
                  required
                />
                <span className="profile__label-text">Имя</span>
              </label>
              {errors.name && <span className="profile__input-error">{errors.name}</span>}
            </div>
            <div className="profile__label-wrapper">
              <label className="profile__label">
                <input
                  className={`profile__input ${!isEditProfile ? "profile__input_disabled" : ""}`}
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="E-mail пользователя"
                  disabled={!isEditProfile}
                  required
                />
                <span className="profile__label-text">E-mail</span>
              </label>
              {errors.email && <span className="profile__input-error">{errors.email}</span>}
            </div>
          </fieldset>
          <div className="profile__form-handlers">
            <span className="profile__message">{message}</span>
            {isEditProfile ? (
              <button
                type="submit"
                className={`profile__submit ${!isValid && "profile__submit_disabled"}`}
                disabled={!isValid}
              >
                {buttonText}
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="profile__edit"
                  onClick={onEditProfile}
                >
                  Редактировать
                </button>
                <Link
                  to="/"
                  onClick={onLogout}
                  className="profile__link"
                >
                  Выйти из аккаунта
                </Link>
              </>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Profile;
