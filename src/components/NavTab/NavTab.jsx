import "./NavTab.css";
import { Link } from "react-scroll";

const NavTab = () => {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__list-item">
          <Link
            className="nav-tab__link"
            to="project"
            smooth={true}
            duration={400}
          >
            О проекте
          </Link>
        </li>
        <li className="nav-tab__list-item">
          <Link
            className="nav-tab__link"
            to="techs"
            smooth={true}
            duration={500}
          >
            Технологии
          </Link>
        </li>
        <li className="nav-tab__list-item">
          <Link
            className="nav-tab__link"
            to="aboutMe"
            smooth={true}
            duration={650}
          >
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
