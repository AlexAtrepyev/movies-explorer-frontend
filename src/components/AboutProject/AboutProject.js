import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>

      <ul className="about-project__items">
        <li className="article">
          <h3 className="article__title">Дипломный проект включал 5 этапов</h3>
          <p className="article__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="article">
          <h3 className="article__title">На выполнение диплома ушло 5 недель</h3>
          <p className="article__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <ul className="timeline">
        <li className="timeline__chunk">
          <span className="timeline__element timeline__element_color_black">1 неделя</span>
          <span className="timeline__element timeline__element_color_white">Back-end</span>
        </li>
        <li className="timeline__chunk">
          <span className="timeline__element timeline__element_color_gray">4 недели</span>
          <span className="timeline__element timeline__element_color_white">Front-end</span>
        </li>
      </ul>
      
    </section>
  );
}

export default AboutProject;
