import './NotFound.css';

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <button className="not-found__back-btn">Назад</button>
    </section>
  );
}

export default NotFound;
