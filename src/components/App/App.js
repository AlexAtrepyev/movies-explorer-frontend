import { useState, useEffect } from 'react';
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
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useLocalStorageState from '../../hooks/useLocalStorageState';

import { dataTemplate, filterByQuery, filterByCheckbox, parseMoviesData, findSaved } from '../../utils/utils';

function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useLocalStorageState('currentUser', null);
  
  const [moviesData, setMoviesData] = useLocalStorageState('moviesData', dataTemplate);
  const [savedMoviesData, setSavedMoviesData] = useLocalStorageState('savedMoviesData', dataTemplate);

  const [displayedCount, setDisplayedCount] = useState(12);

  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  
  // funcs
  function checkToken() {
    mainApi.getUserInfo()
      .then(() => setLoggedIn(true))
      .catch(err => {
        setLoggedIn(false);
        console.log(err);
      });
  }
  
  function searchMovies(data, stableQuery) {
    const searched = filterByCheckbox(filterByQuery(data.initial, stableQuery), data.shortsOnly);
    const func = data === moviesData ? setMoviesData : setSavedMoviesData;
    func({
      ...data,
      stableQuery: stableQuery,
      searched: searched
    });
    setIsLoading(false);
  };

  function setSavedInfo(data) {
    return data?.map(item => {
      const saved = findSaved(item, savedMoviesData.initial);
      if (saved) {
        item.isSaved = true;
        item._id = saved._id;
      }
      return item;
    });
  }

  function clearStates() {
    setLoggedIn(false);
    setCurrentUser(null);
    setMoviesData(dataTemplate);
    setSavedMoviesData(dataTemplate);
    setDisplayedCount(12);
  }
  
  // useEffects
  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then(data => setCurrentUser(data))
        .catch(err => console.log(err));
      mainApi.getSavedMovies()
        .then(data => setSavedMoviesData({ ...savedMoviesData, initial: data }))
        .catch(err => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (moviesData.initial && moviesData.stableQuery) {
      searchMovies(moviesData, moviesData.stableQuery);
    }
  }, [moviesData.initial]);

  useEffect(() => {
    if (moviesData.initial && moviesData.stableQuery) {
      searchMovies(moviesData, moviesData.stableQuery);
    }
    if (savedMoviesData.initial && savedMoviesData.stableQuery) {
      searchMovies(savedMoviesData, savedMoviesData.stableQuery);
    }
  }, [savedMoviesData.initial]);

  useEffect(() => {
    if (moviesData.initial && moviesData.stableQuery) {
      searchMovies(moviesData, moviesData.stableQuery);
    }
  }, [moviesData.shortsOnly]);

  useEffect(() => {
    if (savedMoviesData.initial && savedMoviesData.stableQuery) {
      searchMovies(savedMoviesData, savedMoviesData.stableQuery);
    }
  }, [savedMoviesData.shortsOnly]);

  useEffect(() => {
    checkToken();
  }, []);
  
  // Auth
  function handleRegister({ name, email, password }) {
    mainApi.register(name, email, password)
      .then(() => history.push('/signin'))
      .catch(err => console.log(err));
  }
  
  function handleLogin({ email, password }) {
    mainApi.authorize(email, password)
      .then(() => setLoggedIn(true))
      .then(() => history.push('/movies'))
      .catch(err => console.log(err));
  }

  function handleUpdateUser({ name, email }) {
    mainApi.setUserInfo(name, email)
      .then(user => setCurrentUser(user))
      .catch(err => console.log(err));
  }
  
  function handleSignOut() {
    mainApi.unauthorize()
      .then(() => {
        clearStates();
        localStorage.clear();
      })
      .catch(err => console.log(err));
  }
  
  // Movies
  function handleChangeMoviesQuery(value) {
    setMoviesData({
      ...moviesData,
      liveQuery: value
    });
  }
  
  function handleChangeMoviesShortsOnly() {
    setMoviesData({
      ...moviesData,
      shortsOnly: !moviesData.shortsOnly
    });
  }
  
  function handleSearchMovies() {
    setApiError(null);
    setDisplayedCount(12);

    const stableQuery = moviesData.liveQuery;
    if (!moviesData.initial) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then(data => setMoviesData({ ...moviesData, initial: data, stableQuery: stableQuery }))
        .catch(err => {
          setApiError(err);
          setIsLoading(false);
        });
    } else {
      searchMovies(moviesData, stableQuery);
    }
  }
  
  // savedMovies
  function handleChangeSavedMoviesQuery(value) {
    setSavedMoviesData({
      ...savedMoviesData,
      liveQuery: value
    });
  }
  
  function handleChangeSavedMoviesShortsOnly() {
    setSavedMoviesData({
      ...savedMoviesData,
      shortsOnly: !savedMoviesData.shortsOnly
    });
  }
  
  function handleSearchSavedMovies() {
    setApiError(null);

    const stableQuery = savedMoviesData.liveQuery;
    searchMovies(savedMoviesData, stableQuery);
  }
  
  // Прочее
  function handleIncreaseDisplayedCount() {
    setDisplayedCount(displayedCount + 3);
  }
  
  function handleAddMovie(movie) {
    setApiError(null);
    mainApi.addSavedMovie(movie)
      .then(() => {
        mainApi.getSavedMovies()
          .then(data => setSavedMoviesData({ ...savedMoviesData, initial: data }))
      })
      .catch(err => setApiError(err));
  }

  function handleDeleteMovie(id) {
    setApiError(null);
    mainApi.removeSavedMovie(id)
      .then(() => {
        mainApi.getSavedMovies()
          .then(data => setSavedMoviesData({ ...savedMoviesData, initial: data }))
      })
      .catch(err => setApiError(err));
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

          query={moviesData.liveQuery}
          shortsOnly={moviesData.shortsOnly}
          data={setSavedInfo(parseMoviesData(moviesData.searched))}
          
          onChangeQuery={handleChangeMoviesQuery}
          onChangeShortsOnly={handleChangeMoviesShortsOnly}
          onSearch={handleSearchMovies}
          
          displayedCount={displayedCount}
          onIncreaseDisplayedCount={handleIncreaseDisplayedCount}
          
          onAddMovie={handleAddMovie}
          onDeleteMovie={handleDeleteMovie}

          isLoading={isLoading}
          apiError={apiError}

          component={Movies}
        />

        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}

          query={savedMoviesData.liveQuery}
          shortsOnly={savedMoviesData.shortsOnly}
          data={savedMoviesData.searched}
          
          onChangeQuery={handleChangeSavedMoviesQuery}
          onChangeShortsOnly={handleChangeSavedMoviesShortsOnly}
          onSearch={handleSearchSavedMovies}
          
          onDeleteMovie={handleDeleteMovie}

          isLoading={isLoading}
          apiError={apiError}
          
          component={SavedMovies}
        />

        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          onUpdateUser={handleUpdateUser}
          onSignOut={handleSignOut}
          component={Profile}
        />
        
        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>

        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        
        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
