import './MoviesCard.css';

import { convertDuration } from '../../utils/utils';

function MoviesCard({ section, data, onAddMovie, onDeleteMovie }) {
  function handleAddMovie() {
    onAddMovie(data)
  }

  function handleDeleteMovie() {
    onDeleteMovie(data._id);
  }

  return (
    <li className="movies-card" >
      <a className="movies-card__link" href={data.trailer} target="_blank" rel="noopener noreferrer">
        <div className="movies-card__img-container">
          <img className="movies-card__img" src={data.image} alt="Постер фильма" />
        </div>
        <div className="movies-card__info-container">
          <h2 className="movies-card__title">{data.nameRU}</h2>
          <span className="movies-card__duration">{convertDuration(data.duration)}</span>
        </div>
      </a>
      {section === 'movies' ?
        data.isSaved ? (
          <button
            className="movies-card__btn movies-card__btn_type_saved corner-elem"
            onClick={handleDeleteMovie}
          />
        ) : (
          <button
            className="movies-card__btn movies-card__btn_type_add corner-elem"
            onClick={handleAddMovie}
          >
            Сохранить
          </button>
        ) : (
          <button
            className="movies-card__btn movies-card__btn_type_delete corner-elem"
            onClick={handleDeleteMovie}
          />
        )}
    </li>
  );
}

export default MoviesCard;
