import React from 'react';
import './Profile.css';
import ProfileForm from '../ProfileForm/ProfileForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onUpdateUser, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);

  const inputList = [
    {key: 1, label: 'Имя', type: 'text', name: 'name', placeholder: currentUser?.name},
    {key: 2, label: 'E-mail', type: 'email', name: 'email', placeholder: currentUser?.email},
  ]

  return (
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
  );
}

export default Profile;
