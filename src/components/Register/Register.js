import './Register.css';
import { Link } from 'react-router-dom';
import AppLogo from '../AppLogo/AppLogo';
import Form from '../Form/Form';

function Register() {
  return (
    <section className="register">
      <div className='register__container'>
        <AppLogo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <Form isNameRequired={true} submitText='Зарегистрироваться' />
        <div className="register__redirection">
          Уже зарегистрированы?
          <Link className="register__login-link" to="/signin">Войти</Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
