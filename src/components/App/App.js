import React from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useCustomState from '../../hooks/useCustomState';

function App() {
  const history = useHistory();
  
  const [currentUser, setCurrentUser] = useCustomState('currentUser', null);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [beatfilmMovies, setBeatfilmMovies] = useCustomState('beatfilmMovies', null);
  const [reqText, setReqText] = useCustomState('reqText', null);
  const [isFilterChecked, setIsFilterChecked] = useCustomState('isFilterChecked', false);
  const [moviesToShow, setMoviesToShow] = useCustomState('moviesToShow', null);

  const [displayedCount, setDisplayedCount] = React.useState(12);

  const [savedMovies, setSavedMovies] = useCustomState('savedMovies', null);
  
  const checkToken = React.useCallback(
    () => {
      MainApi.getUserInfo()
        .then(() => {
          setLoggedIn(true);
        })
        .catch(err => {
          setLoggedIn(false);
          console.log(err);
        });
    },
    [setLoggedIn]
  );

  function clearStates() {
    setLoggedIn(false);
    setCurrentUser(null);
    setBeatfilmMovies(null);
    setReqText(null);
    setIsFilterChecked(false);
    setMoviesToShow(null);
    setSavedMovies(null);
  }
  
  function getMoviesToShow() {
      function searchMovies(movies) {
        movies = isFilterChecked ? movies.filter(movie => movie.duration <= 40) : movies;
        return movies.filter(movie => movie.nameRU?.toLowerCase().includes(reqText.toLowerCase()) || movie.nameEN?.toLowerCase().includes(reqText.toLowerCase()));
      }

      if (beatfilmMovies) {
        setMoviesToShow(searchMovies(beatfilmMovies));
      } else {
        MoviesApi.getMovies()
          .then(data => {
            setBeatfilmMovies(data);
            setMoviesToShow(searchMovies(data));
          })
          .catch(err => console.log(err));
      }
    };

  React.useEffect(() => {
    checkToken();
  }, [checkToken]);
  
  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then(data => setCurrentUser(data))
        .catch(err => console.log('Couldnt get user info from the server', err));
      MainApi.getSavedMovies()
        .then(data => setSavedMovies(data))
        .catch(err => console.log('Couldnt get saved cards from the server', err));
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (moviesToShow) {
      getMoviesToShow();
    }
  }, [isFilterChecked]);
  
  function onRegister({ name, email, password }) {
    MainApi.register(name, email, password)
      .then(() => history.push('/signin'))
      .catch(err => console.log(err));
  }
  
  function onLogin({ email, password }) {
    MainApi.authorize(email, password)
      .then(() => setLoggedIn(true))
      .then(() => history.push('/movies'))
      .catch(err => console.log(err));
  }

  function onUpdateUser({ name, email }) {
    MainApi.setUserInfo(name, email)
      .then(user => setCurrentUser(user))
      .catch(err => console.log(err));
  }
  
  function onSignOut() {
    MainApi.unauthorize()
      .then(() => clearStates())
      .catch(err => console.log(err));
  }
  
  function onFilterChange() {
    setIsFilterChecked(!isFilterChecked);
  }

  function onSearchFormChange(value) {
    setReqText(value);
  }
  
  function onSearchFormSubmit() {
    setDisplayedCount(12);
    getMoviesToShow();
  }

  function onIncreaseDisplayedCount() {
    setDisplayedCount(displayedCount + 3);
  }
  
  function addSavedMovie(movie) {
    MainApi.addSavedMovie(movie)
      .then(() => {
        MainApi.getSavedMovies()
          .then(data => setSavedMovies(data))
      })
      .catch(err => console.log(err));
  }

  function deleteSavedMovie(movieId) {
    MainApi.removeSavedMovie(movieId)
      .then(() => {
        MainApi.getSavedMovies()
          .then(data => setSavedMovies(data))
      })
      .catch(err => console.log(err));
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>

        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>

        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          savedMovies={savedMovies}
          reqText={reqText}
          isFilterChecked={isFilterChecked}
          moviesToShow={moviesToShow}
          onFilterChange={onFilterChange}
          onSearchFormChange={onSearchFormChange}
          onSearchFormSubmit={onSearchFormSubmit}
          displayedCount={displayedCount}
          onIncreaseDisplayedCount={onIncreaseDisplayedCount}
          addSavedMovie={addSavedMovie}
          component={Movies}
        />

        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          savedMovies={savedMovies}
          deleteSavedMovie={deleteSavedMovie}
          component={SavedMovies}
        />

        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          onUpdateUser={onUpdateUser}
          onSignOut={onSignOut}
          component={Profile}
        />
        
        <Route path="/signup">
          <Register onRegister={onRegister} />
        </Route>

        <Route path="/signin">
          <Login onLogin={onLogin} />
        </Route>
        
        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
