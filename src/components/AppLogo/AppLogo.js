import './AppLogo.css';
import appLogo from '../../images/app-logo.svg';

function AppLogo() {
  return (
    <a className="app-logo" href="#">
      <img src={appLogo} alt="логотип" />
    </a>
  );
}

export default AppLogo;
