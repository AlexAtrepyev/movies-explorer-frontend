import './Login.css';
import { Link } from 'react-router-dom';
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
          <Link className="register__login-link" to="/signup">Регистрация</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
