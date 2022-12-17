import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__info">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__social-links">
            <li>
              <a
                className="footer__social-link"
                href="https://practicum.yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                className="footer__social-link"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
