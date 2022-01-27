import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

let isLogged = true;

function App() {
  return (
    <>
      <Switch>

        <Route exact path="/">
          <Header isLogged={isLogged} />
          <Main />
          <Footer />
        </Route>

        <Route path="/movies">
          <Header isLogged={isLogged} />
          <Movies />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header isLogged={isLogged} />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header isLogged={isLogged} />
          <Profile />
          <Footer />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>
    </>
  );
}

export default App;
