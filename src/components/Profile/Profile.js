import React from 'react';
import './Profile.css';
import ProfileForm from '../ProfileForm/ProfileForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const inputList = [
    {key: 1, label: 'Имя', type: 'text', name: 'name', placeholder: currentUser?.name},
    {key: 2, label: 'E-mail', type: 'email', name: 'email', placeholder: currentUser?.email},
  ]

  return (
    <section className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>

      <ProfileForm
        inputList={inputList}
        submitText='Редактировать'
        onSubmit={props.onUpdateUser}
      />

      <button className="profile__logout-btn" onClick={props.onSignOut}>Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
