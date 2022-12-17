import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn }) => {
  const [ isOpenNav, setisOpenNav] = useState(false);

  const toggleMenu = () => {
    setisOpenNav(state => !state);
  };

  return (
    <header className={`header ${!loggedIn ? "header_bg-color_deep-blue" : ""}`}>
      <div className="header__content">
        <Logo />
        {loggedIn ? (
          <>
            <Navigation isOpen={isOpenNav} onClick={toggleMenu}/>
            <button
              className={`header__button-burger ${ isOpenNav ? "header__button-burger_active" : ""}`}
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
