import './Header.css';
import AppLogo from '../AppLogo/AppLogo';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';
import Menu from '../Menu/Menu';

function Header(props) {
  return (
    <header className="header">
      <AppLogo />

      {props.loggedIn ? (
        <>
          <div className="header__content">
            <Navigation isLogged={props.loggedIn} location="header" />
            <Account />
          </div>
          <Menu isLogged={props.loggedIn} />
        </>
      ) : (
        <Navigation isLogged={props.loggedIn} location="header" />
      )}
      
    </header>
  );
}

export default Header;
