import './Register.css';
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
          <a className="register__login-link" href="#">Войти</a>
        </div>
      </div>
    </section>
  );
}

export default Register;
