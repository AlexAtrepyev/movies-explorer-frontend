import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import cards from '../../utils/cards';

function SavedMovies() {
  return (
    <>
      <SearchForm />
      {cards ? (
        <MoviesCardList cards={cards} section="saved-movies" />
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default SavedMovies;
