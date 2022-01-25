import './MoviesCard.css';

function convertDuration(duration) {
  if (duration < 60) return `${duration % 60}м`;
  if (duration === 60) return '1ч';
  if (duration > 60) return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
}

function MoviesCard(props) {
  return (
    <li key={props.key} className="movies-card">
      <div className="movies-card__img-container">
        <img className="movies-card__img" src={`https://api.nomoreparties.co${props.image}`} alt={props.nameRu} />
      </div>
      <div className="movies-card__info-container">
        <h2 className="movies-card__title">{props.nameRU}</h2>
        <span className="movies-card__duration">{convertDuration(props.duration)}</span>
      </div>
      {props.isSaved ? (
        <div className="movies-card__saved-label corner-elem" />
      ) : (
        <button className="movies-card__btn movies-card__btn_type_add corner-elem">Сохранить</button>
      )}
      {
      //<button className="movies-card__btn movies-card__btn_type_delete corner-elem" />
      }
    </li>
  );
}

export default MoviesCard;
