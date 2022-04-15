import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({
  query,
  shortsOnly,
  data,
  onChangeQuery,
  onChangeShortsOnly,
  onSearch,
  onDeleteMovie,
  isLoading,
  apiError
}) {
  return (
    <>
      <Header />
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
        isLoading={isLoading}
        apiError={apiError}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
