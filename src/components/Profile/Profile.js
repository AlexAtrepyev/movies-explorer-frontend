import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <p className="profile__field">
          <label className="profile__label" for="name">Имя</label>
          <input className="profile__input" type="text" name="name" id="name" placeholder="Виталий" required />
        </p>
        <p className="profile__field">
          <label className="profile__label" for="email">E-mail</label>
          <input className="profile__input" type="email" name="email" id="email" placeholder="pochta@yandex.ru" required />
        </p>
        <button className="profile__submit" type="submit" >Редактировать</button>
      </form>
      <button className="profile__logout-btn">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
