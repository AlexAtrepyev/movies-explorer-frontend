import './Header.css';
import AppLogo from '../AppLogo/AppLogo';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';

function Header(props) {
  return (
    <header className="header">
      <AppLogo />

      {props.isLogged ? (
        <>
          <div className="header__content">
            <Navigation isLogged={props.isLogged} location="header" />
            <Account />
          </div>
          
          <div className="menu">
            <input className="menu__checkbox" type="checkbox" />
            <div className="menu__bar" id="bar1" />
            <div className="menu__bar" id="bar2" />
            <div className="menu__bar" id="bar3" />            
            <div className="menu__overlay"></div>            
            <div className="menu__content">
              <Navigation isLogged={props.isLogged} location="menu" />
              <Account />
            </div>
          </div>
        </>
      ) : (
        <Navigation isLogged={props.isLogged} location="header" />
      )}
      
    </header>
  );
}

export default Header;
