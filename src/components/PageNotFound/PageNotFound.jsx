import { Link, useNavigate } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const backRef = () => navigate.createHref(goBack);

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <Link
        className="not-found__link"
        onClick={goBack}
        to={backRef}
      >
        Назад
      </Link>
    </section>
  );
};

export default PageNotFound;
