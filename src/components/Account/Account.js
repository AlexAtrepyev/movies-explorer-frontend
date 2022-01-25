import './Account.css';
import accountLogo from '../../images/account-logo.svg';

function Account() {
  return (
    <div className="account">
      <span className="account__name">Аккаунт</span>
      <img className="account__image" src={accountLogo} alt="аватар" />
    </div>
  );
}

export default Account;
