import './Profile.css';

import { useContext } from 'react';

import { CurrentUserContext } from '../../services/currentUserContext';

import Header from '../Header/Header';
import ProfileForm from '../ProfileForm/ProfileForm';

function Profile({ onUpdateUser, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const inputList = [
    {key: 1, label: 'Имя', type: 'text', name: 'name', placeholder: currentUser?.name},
    {key: 2, label: 'E-mail', type: 'email', name: 'email', placeholder: currentUser?.email},
  ]

  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>

        <ProfileForm
          currentUser={currentUser}
          inputs={inputList}
          submitText='Редактировать'
          onSubmit={onUpdateUser}
        />

        <button className="profile__logout-btn" onClick={onSignOut}>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;
