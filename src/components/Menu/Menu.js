import './Menu.css';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';

function Menu(props) {
  return (
    <div className="menu">
      <input className="menu__checkbox" type="checkbox" />
      <div className="menu__bar" id="bar1" />
      <div className="menu__bar" id="bar2" />
      <div className="menu__bar" id="bar3" />
      <div className="menu__overlay" />
      <div className="menu__content">
        <Navigation isLogged={props.isLogged} location="menu" />
        <Account />
      </div>
    </div>
  );
}

export default Menu;
