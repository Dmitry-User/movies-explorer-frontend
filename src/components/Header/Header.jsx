import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__logo-link" to="/">
          <img src={logo} alt="Логотип" className="header__logo-img" />
        </Link>
        <ul className="header__links">
          <li>
            <Link className="header__link" to="/signup">Регистрация</Link>
          </li>
          <li>
            <Link className="header__link header__link_type_button" to="/signin">Войти</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
