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
            <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/Dmitry-User/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
            <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/Dmitry-User/react-mesto-api-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
            <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Portfolio;
