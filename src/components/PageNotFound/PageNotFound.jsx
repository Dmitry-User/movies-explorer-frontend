import { Link, useHistory } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  const history = useHistory();
  const goBack = () => history.go(-1);
  const backRef = () => history.createHref(goBack);

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
