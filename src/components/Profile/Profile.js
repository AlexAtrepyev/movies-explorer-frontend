import './Profile.css';

import { useContext, useEffect } from 'react';

import { CurrentUserContext } from '../../services/currentUserContext';

import Header from '../Header/Header';
import ProfileForm from '../ProfileForm/ProfileForm';

function Profile({ apiError, success, onUpdateUser, onSignOut, resetApiError, setSuccess }) {
  const currentUser = useContext(CurrentUserContext);
  
  const inputList = [
    {key: 1, label: 'Имя', type: 'text', name: 'name', placeholder: 'Виталий', min: 2, max: 30},
    {key: 2, label: 'E-mail', type: 'email', name: 'email', placeholder: 'pochta@yandex.ru'}
  ]

  useEffect(() => {
    resetApiError();
  }, []);
  
  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <ProfileForm
          currentUser={currentUser}
          inputs={inputList}
          apiError={apiError}
          resetApiError={resetApiError}
          success={success}
          setSuccess={setSuccess}
          submitText='Редактировать'
          onSubmit={onUpdateUser}
        />
        <button className="profile__logout-btn" onClick={onSignOut}>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;
