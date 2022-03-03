import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <SearchForm
        reqText={props.reqText}
        onSearchFormChange={props.onSearchFormChange}
        isFilterChecked={props.isFilterChecked}
        onFilterChange={props.onFilterChange}
        onSearchFormSubmit={props.onSearchFormSubmit}
      />
      {props.savedMovies ? (
        <MoviesCardList
          cards={props.savedMovies}
          deleteSavedMovie={props.deleteSavedMovie}
          section="saved-movies"
        />
      ) : (
        <Preloader />
      )}
      <Footer />
    </>
  );
}

export default SavedMovies;
