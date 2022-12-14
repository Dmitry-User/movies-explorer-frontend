import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(state => !state);
  };

  return (
    <header className={`header ${!loggedIn && "header_bg-color_deep-blue"}`}>
      <div className="header__content">
        <Link className="header__logo-link" to="/">
          <img src={logo} alt="Логотип" className="header__logo-img" />
        </Link>
        {loggedIn ? (
          <>
            <Navigation isOpen={isOpenMenu} onClick={toggleMenu}/>
            <button
              className={`header__button-burger ${isOpenMenu && "header__button-burger_active"}`}
              type="button"
              onClick={toggleMenu}
            >
              <span />
            </button>
          </>
        ) : (
          <ul className="header__links">
            <li>
              <Link className="header__link" to="/signup">Регистрация</Link>
            </li>
            <li>
              <Link className="header__link header__link_type_button-signin" to="/signin">Войти</Link>
            </li>
        </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
