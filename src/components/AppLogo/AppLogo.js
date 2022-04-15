import './AppLogo.css';

import { Link } from 'react-router-dom';

import appLogo from '../../images/app-logo.svg';

function AppLogo() {
  return (
    <Link className="app-logo" to="/">
      <img src={appLogo} alt="логотип" />
    </Link>
  );
}

export default AppLogo;
