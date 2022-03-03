import React from 'react';
import './ProfileForm.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function ProfileForm(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const parseErrors = (errors) => {
    return Object.values(errors).find(error => error !== '') ?? 'Все поля должны быть заполнены';
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(values);
  }
  
  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {props.inputList.map(input => (
        <p className="profile-form__field" key={input.key}>
          <label className="profile-form__label">{input.label}</label>
          <input
            className="profile-form__input"
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={values[input.name] ?? ''}
            onChange={handleChange}
            required
          />
        </p>
      ))}
      <button className="profile-form__submit" type="submit" >{props.submitText}</button>
    </form>
  );
}

export default ProfileForm;
