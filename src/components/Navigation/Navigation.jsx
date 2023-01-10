import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";

const Navigation = ({ isOpen, onClick }) => {
  return (
    <nav className={`navigation ${!isOpen ? "navigation_hidden" : ""}`}>
      <ul className="navigation__links">
        <li>
          <ul className="navigation__links-container">
          <li>
              <NavLink
                className="navigation__link"
                to="/"
                onClick={onClick}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navigation__link"
                to="/movies"
                onClick={onClick}
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navigation__link"
                to="/saved-movies"
                onClick={onClick}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <Link
            className="navigation__link navigation__link_type_button-profile"
            to={"/profile"}
            onClick={onClick}
          >
            <span className="navigation__icon-profile"></span>
            Аккаунт
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
