import './Login.css';
import { Link } from 'react-router-dom';
import AppLogo from '../AppLogo/AppLogo';
import Form from '../Form/Form';

function Login(props) {
  const inputList = [
    {key: 1, label: 'E-mail', type: 'email', name: 'email', placeholder: 'pochta@yandex.ru'},
    {key: 2, label: 'Пароль', type: 'password', name: 'password', placeholder: 'Пароль'},
  ]

  return (
    <section className="register">
      <div className='register__container'>
        <AppLogo />
        <h1 className="register__title">Рады видеть!</h1>
        <Form
          inputList={inputList}
          margin={'margin_l'}
          submitText='Войти'
          onSubmit={props.onLogin}
        />
        <div className="register__redirection">
          Ещё не зарегистрированы?
          <Link className="register__login-link" to="/signup">Регистрация</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
