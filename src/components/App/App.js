import { useState, useEffect } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';

import useLocalStorageState from '../../hooks/useLocalStorageState';

import { CurrentUserContext } from '../../services/currentUserContext';
import { LayoutContext } from '../../services/layoutContext';
import { LoggedInContext } from '../../services/loggedInContext';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import {
  getLayout,
  getDisplayedCount,
  dataTemplate,
  filterByQuery,
  filterByCheckbox,
  parseMoviesData,
  findSaved
} from '../../utils/utils';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const history = useHistory();
  
  const [currentUser, setCurrentUser] = useLocalStorageState('currentUser', null);
  const [layout, setLayout] = useState(getLayout(window.innerWidth));
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [moviesData, setMoviesData] = useLocalStorageState('moviesData', dataTemplate);
  const [savedMoviesData, setSavedMoviesData] = useLocalStorageState('savedMoviesData', dataTemplate);
  
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  
  
  const [displayedCount, setDisplayedCount] = useState(getDisplayedCount(getLayout(window.innerWidth)));
  
  // funcs
  function updateLayout() {
    setLayout(getLayout(window.innerWidth));
  }
  
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
    setDisplayedCount(getDisplayedCount(layout));
  }
  
  // useEffects
  useEffect(() => {
    window.addEventListener('resize', updateLayout);
    return () => {
      window.removeEventListener('resize', updateLayout);
    }
  }, []);

  useEffect(() => {
    setDisplayedCount(getDisplayedCount(layout));
  }, [layout]);

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
    setDisplayedCount(getDisplayedCount(layout));

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
    const extraCount = getDisplayedCount(layout) < 12 ? 2 : 3; // ВЫНЕСТИ В КОНСТАНТЫ
    setDisplayedCount(displayedCount + extraCount);
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
      <LayoutContext.Provider value={layout}>
        <LoggedInContext.Provider value={loggedIn}>
          <Switch>

            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRoute
              path="/movies"

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
        </LoggedInContext.Provider>
      </LayoutContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
