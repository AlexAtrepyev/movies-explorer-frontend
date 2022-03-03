import './Register.css';
import { Link } from 'react-router-dom';
import AppLogo from '../AppLogo/AppLogo';
import Form from '../Form/Form';

function Register(props) {
  const inputList = [
    {key: 1, label: 'Имя', type: 'text', name: 'name', placeholder: 'Виталий'},
    {key: 2, label: 'E-mail', type: 'email', name: 'email', placeholder: 'pochta@yandex.ru'},
    {key: 3, label: 'Пароль', type: 'password', name: 'password', placeholder: 'Пароль'},
  ]

  return (
    <section className="register">
      <div className='register__container'>
        <AppLogo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <Form
          inputList={inputList}
          margin={'margin_s'}
          submitText='Зарегистрироваться'
          onSubmit={props.onRegister}
        />
        <div className="register__redirection">
          Уже зарегистрированы?
          <Link className="register__login-link" to="/signin">Войти</Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
