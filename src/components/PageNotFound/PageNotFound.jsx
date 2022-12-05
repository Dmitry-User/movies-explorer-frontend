import { useHistory } from "react-router";
import "./PageNotFound.css";

const PageNotFound = () => {
  const history = useHistory();
  const goBack = () => history.go(-1);

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__link" onClick={goBack} >Назад</button>
    </section>
  );
};

export default PageNotFound;
