import './AboutMe.css';
import photo from '../../images/photo.png';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div>
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__description">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__story">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="about-me__links">
            <li className="about-me__item">
              <a className="about-me__link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li className="about-me__item">
              <a className="about-me__link" href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={photo} alt="Мое фото" />
      </div>
    </section>
  );
}

export default AboutMe;
