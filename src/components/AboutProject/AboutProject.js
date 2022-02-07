import './AboutProject.css';
import Article from '../Article/Article';
import Timeline from '../Timeline/Timeline';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>

      <ul className="about-project__items">
        <li>
          <Article
            section="about"
            title="Дипломный проект включал 5 этапов"
            description="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
          />
        </li>
        <li>
          <Article
            section="about"
            title="На выполнение диплома ушло 5 недель"
            description="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
          />
        </li>
      </ul>

      <Timeline />
    </section>
  );
}

export default AboutProject;
