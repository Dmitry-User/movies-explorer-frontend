import "./Profile.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useFormWithValidation from "../../hooks/useFormWithValidation";

const Profile = ({ onLogout }) => {
  const initValue = { name: "Виталий", email: "pochta@yandex.ru" };
  const { values, handleChange, isValid, errors } = useFormWithValidation(initValue);
  const [isEdit, setIsEdit] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  },[isEdit]);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="profile">
      <div className="profile__content">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <fieldset className="profile__form-fieldset">
            <label className="profile__label">
              <span className="profile__label-text">Имя</span>
              <input
                className={`profile__input ${!isEdit && "profile__input_disabled"}`}
                ref={ref}
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                minLength={2}
                maxLength={30}
                placeholder="Имя пользователя"
                disabled={!isEdit}
                required
              />
              <span className="profile__input-error">{errors.name}</span>
            </label>
            <label className="profile__label">
              <span className="profile__label-text">E-mail</span>
              <input
                className={`profile__input ${!isEdit && "profile__input_disabled"}`}
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Email пользователя"
                disabled={!isEdit}
                required
              />
              <span className="profile__input-error">{errors.email}</span>
            </label>
          </fieldset>
          <div className="profile__form-handlers">
            {isEdit ? (
              <>
                <span className="profile__error">{"При обновлении профиля произошла ошибка"}</span>
                <button
                  type="submit"
                  className={`profile__submit ${!isValid && "profile__submit_disabled"}`}
                  disabled={!isValid}
                >
                  Сохранить
                </button>
              </>
            ) : (
              <button
                type="button"
                className="profile__edit"
                onClick={handleEdit}
              >
                Редактировать
              </button>
            )}
          </div>
        </form>
        <Link
          to="/"
          onClick={onLogout}
          className="profile__link"
        >
          Выйти из аккаунта
        </Link>
      </div>
    </main>
  );
};

export default Profile;
