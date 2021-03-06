import Auth from '../Auth/Auth';

import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { LoggedInContext } from '../../services/loggedInContext';

function Register({ onSubmit, apiError, resetApiError }) {
  const loggedIn = useContext(LoggedInContext);

  const fieldList = [
    {key: 1, label: 'Имя', type: 'text', name: 'name', placeholder: 'Виталий', min: 2, max: 30},
    {key: 2, label: 'E-mail', type: 'email', name: 'email', placeholder: 'pochta@yandex.ru'},
    {key: 3, label: 'Пароль', type: 'password', name: 'password', placeholder: 'Пароль', min: 4, max: 12}
  ]

  useEffect(() => {
    resetApiError();
  }, []);

  return loggedIn ? <Redirect to="/" />
    : <Auth
        title="Добро пожаловать!"
        fields={fieldList}
        submitText="Зарегистрироваться"
        onSubmit={onSubmit}
        apiError={apiError}
        resetApiError={resetApiError}
        redirectionText="Уже зарегистрированы?"
        redirectionLinkText="Войти"
        redirectionLink="/signin"
      />;
}

export default Register;
