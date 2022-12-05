import "./AboutMe.css";
import photo from "../../images/user-photo.jpg";
import Portfolio from "../Portfolio/Portfolio";

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMe__content">
        <h2 className="aboutMe__title">Студент</h2>
        <div className="aboutMe__columns">
          <div className="aboutMe__profile">
            <h3 className="aboutMe__profile-name">Виталий</h3>
            <p className="aboutMe__profile-job">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutMe__profile-bio">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и ушёл с&nbsp;постоянной работы.</p>
            <a
              className="aboutMe__profile-link"
              href="https://github.com/Dmitry-User"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <img className="aboutMe__photo" src={photo} alt="Фото"/>
        </div>
        <Portfolio />
      </div>
    </section>
  );
};

export default AboutMe;
