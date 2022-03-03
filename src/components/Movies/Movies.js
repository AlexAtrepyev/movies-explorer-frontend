import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies(props) {
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
      {props.moviesToShow ? (
        <>
          <MoviesCardList
            savedMovies={props.savedMovies}
            cards={props.moviesToShow}
            moviesCount={props.displayedCount}
            addSavedMovie={props.addSavedMovie}
            section="movies"
          />
          <More
            onIncreaseMoviesCount={props.onIncreaseDisplayedCount}
            visible={props.moviesToShow.length > props.displayedCount}
          />
        </>
      ) : (
        <Preloader />
      )}
      <Footer />
    </>
  );
}

export default Movies;
