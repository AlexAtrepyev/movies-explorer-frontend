import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Footer from '../Footer/Footer';

function Movies({
  loggedIn,
  query,
  shortsOnly,
  data,
  onChangeQuery,
  onChangeShortsOnly,
  onSearch,
  displayedCount,
  onIncreaseDisplayedCount,
  onAddMovie,
  onDeleteMovie,
  isLoading,
  apiError
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
        section="movies"
        data={data?.slice(0, displayedCount)}
        onAddMovie={onAddMovie}
        onDeleteMovie={onDeleteMovie}
        isLoading={isLoading}
        apiError={apiError}
      />
      <More
        visible={data?.length > displayedCount}
        onIncreaseDisplayedCount={onIncreaseDisplayedCount}
      />
      <Footer />
    </>
  );
}

export default Movies;
