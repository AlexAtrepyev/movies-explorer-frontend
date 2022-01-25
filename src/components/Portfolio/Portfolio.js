import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a className="portfolio__link" href="#" target="_blank" rel="noopener noreferrer">
            <span>Статичный сайт</span>
            <span className="portfolio__arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="#" target="_blank" rel="noopener noreferrer">
            <span>Адаптивный сайт</span>
            <span className="portfolio__arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="#" target="_blank" rel="noopener noreferrer">
            <span>Одностраничное приложение</span>
            <span className="portfolio__arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
