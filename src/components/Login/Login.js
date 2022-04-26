import Auth from '../Auth/Auth';

import { useEffect } from 'react';

function Login({ onSubmit, apiError, resetApiError }) {
  const fieldList = [
    {key: 1, label: 'E-mail', type: 'email', name: 'email', placeholder: 'pochta@yandex.ru'},
    {key: 2, label: 'Пароль', type: 'password', name: 'password', placeholder: 'Пароль', min: 4, max: 12}
  ]

  useEffect(() => {
    resetApiError();
  }, []);

  return <Auth
    title="Рады видеть!"
    fields={fieldList}
    submitText="Войти"
    onSubmit={onSubmit}
    apiError={apiError}
    resetApiError={resetApiError}
    redirectionText="Ещё не зарегистрированы?"
    redirectionLinkText="Регистрация"
    redirectionLink='/signup'
  />;
}

export default Login;
