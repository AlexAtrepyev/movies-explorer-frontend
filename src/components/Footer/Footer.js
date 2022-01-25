import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>

      <div className="footer__container">
        <span className="footer__copyright">&copy; 2021</span>

        <ul className="footer__links">
          <li className="footer__item">
            <a  className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li className="footer__item">
            <a  className="footer__link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
