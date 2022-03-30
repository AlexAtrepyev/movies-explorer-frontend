import React from 'react';
import './ProfileForm.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function ProfileForm({ currentUser, inputs, submitText, onSubmit }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation(currentUser, true);

  const parseErrors = (errors) => {
    return Object.values(errors).find(error => error !== '' && error !== 'Вы пропустили это поле.') ?? 'Все поля должны быть заполнены';
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  function hasChanged() {
    const flag = values['name'] === currentUser['name'] && values['email'] === currentUser['email'];
    return !flag;
  }
  
  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {inputs.map(input => (
        <p className="profile-form__field" key={input.key}>
          <label className="profile-form__label">{input.label}</label>
          <input
            className={`profile-form__input${errors[input.name] && errors[input.name] !== '' ? ' profile-form__input_incorrect' : ''}`}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={values[input.name] ?? ''}
            onChange={handleChange}
            required
          />
        </p>
      ))}
      <label className={`profile-form__error${isValid ? ' profile-form__error_hidden' : ''}`}>{parseErrors(errors)}</label>
      <button
        className={`profile-form__submit${isValid && hasChanged() ? '' : ' profile-form__submit_inactive'}`}
        type="submit"
      >
        {submitText}
      </button>
    </form>
  );
}

export default ProfileForm;
