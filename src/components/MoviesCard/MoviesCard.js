import './MoviesCard.css';

function convertDuration(duration) {
  if (duration < 60) return `${duration % 60}м`;
  if (duration === 60) return '1ч';
  if (duration > 60) return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
}

function MoviesCard(props) {
  const {
    section,
    data,
    isSaved,
    addSavedMovie,
    deleteSavedMovie
  } = props;

  function handleAddMovie() {
    addSavedMovie(data)
  }

  function handleDeleteMovie() {
    deleteSavedMovie(data.movieId);
  }

  return (
    <li className="movies-card">
      <div className="movies-card__img-container">
        <img className="movies-card__img" src={data.image} alt="Постер фильма" />
      </div>
      <div className="movies-card__info-container">
        <h2 className="movies-card__title">{data.nameRU}</h2>
        <span className="movies-card__duration">{convertDuration(data.duration)}</span>
      </div>
      {section === 'movies' ?
        isSaved ? (
          <div className="movies-card__saved-label corner-elem" />
        ) : (
          <button
            className="movies-card__btn movies-card__btn_type_add corner-elem"
            onClick={handleAddMovie}
          >
            Сохранить
          </button>
        )
      : (
        <button
          className="movies-card__btn movies-card__btn_type_delete corner-elem"
          onClick={handleDeleteMovie}
        />
      )}
    </li>
  );
}

export default MoviesCard;
