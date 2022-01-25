import './Login.css';
import AppLogo from '../AppLogo/AppLogo';
import Form from '../Form/Form';

function Login() {
  return (
    <section className="register">
      <div className='register__container'>
        <AppLogo />
        <h1 className="register__title">Рады видеть!</h1>
        <Form isNameRequired={false} submitText='Войти' />
        <div className="register__redirection">
          Ещё не зарегистрированы?
          <a className="register__login-link" href="#">Регистрация</a>
        </div>
      </div>
    </section>
  );
}

export default Login;
