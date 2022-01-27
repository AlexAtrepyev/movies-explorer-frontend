import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className={`nav ${props.location}__nav`}>
      {props.isLogged ? (
        <>
          {props.location === 'menu' && (
            <NavLink className="nav__link nav__link_logged_in" to="/" activeClassName="nav__link_active">Главная</NavLink>
          )}
          <NavLink className="nav__link nav__link_logged_in" to="/movies" activeClassName="nav__link_active">Фильмы</NavLink>
          <NavLink className="nav__link nav__link_logged_in" to="/saved-movies" activeClassName="nav__link_active">Сохранённые фильмы</NavLink>
        </>
      ) : (
        <>
          <NavLink className="nav__link nav__link_logged_out" to="/signup" activeClassName="nav__link_active">Регистрация</NavLink>
          <NavLink className="nav__link nav__link_logged_out nav__link_has-frame" to="/signin" activeClassName="nav__link_active">Войти</NavLink>
        </>
      )}
    </nav>
  );
}

export default Navigation;
