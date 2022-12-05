import "./Portfolio.css";

const Portfolio = () => {
  return (
    <nav className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/Dmitry-User/how-to-learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт
          </a>
          <span className="portfolio__link-arrow">↗</span>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/Dmitry-User/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
          </a>
          <span className="portfolio__link-arrow">↗</span>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/Dmitry-User/react-mesto-api-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
          </a>
          <span className="portfolio__link-arrow">↗</span>
        </li>
      </ul>
    </nav>
  );
};

export default Portfolio;
