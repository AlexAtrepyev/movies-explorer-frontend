import './Account.css';
import { Link } from 'react-router-dom';
import accountLogo from '../../images/account-logo.svg';

function Account() {
  return (
    <Link className="account" to="/profile">
      <span className="account__name">Аккаунт</span>
      <img className="account__image" src={accountLogo} alt="аватар" />
    </Link>
  );
}

export default Account;
