import './Header.css';

import { useContext } from 'react';

import { LayoutContext } from '../../services/layoutContext';
import { LoggedInContext } from '../../services/loggedInContext';

import AppLogo from '../AppLogo/AppLogo';
import Menu from '../Menu/Menu';
import Navigation from '../Navigation/Navigation';

function Header() {
  const layout = useContext(LayoutContext);
  const loggedIn = useContext(LoggedInContext);

  return (
    <header className="header">
      <AppLogo />
      {layout !== 'desktop' && loggedIn ? <Menu /> : <Navigation />}
    </header>
  );
}

export default Header;
