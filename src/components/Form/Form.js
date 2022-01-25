import './Form.css';

function Form(props) {
  return (
    <form className="form">
      {props.isNameRequired && (
        <>
          <label className="form__label" for="name">Имя</label>
          <input className="form__input" type="text" id="name" placeholder="Виталий" required />
        </>
      )}

      <label className="form__label" for="email">E-mail</label>
      <input className="form__input" type="email" id="email" placeholder="pochta@yandex.ru" required />
      
      <label className="form__label" for="password">Пароль</label>
      <input className="form__input form__input_incorrect" type="password" id="password" placeholder="password" required />

      <label className="form__error form__error_hidden">Что-то пошло не так...</label>
      
      <button className={`form__submit form__submit_margin_${props.isNameRequired ? 's' : 'l'}`} type="submit">{props.submitText}</button>
    </form>
  );
}

export default Form;
