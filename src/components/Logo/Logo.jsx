import "./Logo.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Logo = () => {
  return (
    <Link className="logo-link" to="/">
      <img src={logo} alt="Логотип" className="logo-img" />
    </Link>
  );
};

export default Logo;
