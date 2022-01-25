import './Navigation.css';

function Navigation(props) {
  return (
    <nav>
      <ul className={`navigation ${props.location}__navigation`}>
        {props.isLogged ? (
          <>
            {props.location === 'menu' && (
              <li className="navigation__item navigation__item_logged_in">
                <a className="navigation__link navigation__link__logged_in" href="#">Главная</a>
              </li>
            )}
            <li className="navigation__item navigation__item_logged_in">
              <a className="navigation__link navigation__link__logged_in navigation__link_active" href="#">Фильмы</a>
            </li>
            <li className="navigation__item navigation__item_logged_in">
              <a className="navigation__link navigation__link__logged_in" href="#">Сохранённые фильмы</a>
            </li>            
          </>
        ) : (
          <>
            <li className="navigation__item navigation__item_logged_out">
              <a className="navigation__link navigation__link_logged_out" href="#">Регистрация</a>
            </li>
            <li className="navigation__item navigation__item_logged_out">
              <a className="navigation__link navigation__link_logged_out navigation__link_has-frame" href="#">Войти</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
