import { useEffect } from 'react';

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
  resetSavedMoviesData,
  onDeleteMovie,
  isLoading,
  apiError,
  hasBeenSearched
}) {
  useEffect(() => {
    resetSavedMoviesData();
  }, []);

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
        hasBeenSearched={hasBeenSearched}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
