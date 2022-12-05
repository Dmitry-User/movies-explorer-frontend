import "./AboutProject.css"

const AboutProject = () => {
  return (
    <section className="project">
      <div className="project__content">
        <h2 className="project__title">О проекте</h2>
        <ul className="project__list">
          <li className="project__list-item">
            <h3 className="project__item-title">Дипломный проект включал 5 этапов</h3>
            <p className="project__item-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
          </li>
          <li className="project__list-item">
            <h3 className="project__item-title">На&nbsp;выполнение диплома ушло 5 недель</h3>
            <p className="project__item-text">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="project__schedule">
          <div className="project__duration">
            <p className="project__duration-period project__duration-period_bg-color_green">1 неделя</p>
            <p className="project__duration-caption">Back-end</p>
          </div>
          <div className="project__duration">
            <p className="project__duration-period project__duration-period_text-color_wite">4 недели</p>
            <p className="project__duration-caption">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
