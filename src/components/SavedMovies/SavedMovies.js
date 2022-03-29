import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({
  loggedIn,
  query,
  shortsOnly,
  data,
  onChangeQuery,
  onChangeShortsOnly,
  onSearch,
  onDeleteMovie
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
        query={query}
        shortsOnly={shortsOnly}
        onChangeQuery={onChangeQuery}
        onChangeShortsOnly={onChangeShortsOnly}
        onSearch={onSearch}
      />
      <MoviesCardList
        section="saved-movies"
        data={data}
        onDeleteMovie={onDeleteMovie}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
