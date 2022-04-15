import './Navigation.css';

import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { LayoutContext } from '../../services/layoutContext';
import { LoggedInContext } from '../../services/loggedInContext';

import Account from '../Account/Account';

function Navigation() {
  const layout = useContext(LayoutContext);
  const loggedIn = useContext(LoggedInContext);

  const navClass = `nav${loggedIn ? ' nav_logged_in' : ''}`;
  
  return (
    <nav className={navClass}>
      {loggedIn ? (
        <>
          {layout !== 'desktop' &&
            <NavLink
              className="nav__link nav__link_logged_in"
              activeClassName="nav__link_active"
              exact to="/"
            >
              Главная
            </NavLink>
          }
          <NavLink
            className="nav__link nav__link_logged_in"
            activeClassName="nav__link_active"
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            className="nav__link nav__link_logged_in"
            activeClassName="nav__link_active"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
          <Account />
        </>
      ) : (
        <>
          <Link className="nav__link nav__link_logged_out" to="/signup">Регистрация</Link>
          <Link className="nav__link nav__link_logged_out nav__link_has-frame" to="/signin">Войти</Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
