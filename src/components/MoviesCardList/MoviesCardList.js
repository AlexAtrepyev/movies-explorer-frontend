import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  function checkIsSaved(id) {
    return props.savedMovies.map(item => item.movieId).includes(id);
  }

  function parseCardData(card) {
    return {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `https://api.nomoreparties.co${card.image.url}`,
      trailer: card.trailerLink,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
      movieId: card.id
    }
  }

  function parseSavedCardData(card) {
    return {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: card.image,
      trailer: card.trailer,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      thumbnail: card.thumbnail,
      movieId: card._id
    }
  }

  return (
    <section className={`movies-card-list${props.section === 'saved-movies' ? ' saved-movies__movies-card-list' : ''} `} >
      <ul className="movies-card-list__items">
        {props.cards.slice(0, props.moviesCount).map(card => (
          <MoviesCard
            key={props.section === 'movies' ? card.id : card._id}
            section={props.section}
            data={props.section === 'movies' ? parseCardData(card) : parseSavedCardData(card)}
            isSaved={props.section === 'movies' ? checkIsSaved(card.id) : null}
            addSavedMovie={props.addSavedMovie}
            deleteSavedMovie={props.deleteSavedMovie}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
