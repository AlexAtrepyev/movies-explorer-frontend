import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Preloader from '../Preloader/Preloader';
import cards from '../../utils/cards';

function Movies() {
  return (
    <>
      <SearchForm />
      {cards ? (
        <>
          <MoviesCardList cards={cards} section="movies" />
          <More />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Movies;
