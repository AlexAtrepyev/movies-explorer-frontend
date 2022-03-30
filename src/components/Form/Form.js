import React from 'react';
import './Form.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Form({ inputs, margin, submitText, onSubmit }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  
  function parseErrors(errors) {
    return Object.values(errors).find(error => error !== '' && error !== 'Вы пропустили это поле.') ?? 'Все поля должны быть заполнены';
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      {inputs.map(input => (
        <p className="form__field" key={input.key}>
          <label className="form__label">{input.label}</label>
          <input
            className={`form__input${errors[input.name] !== '' ? ' form__input_incorrect' : ''}`}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={values[input.name] ?? ''}
            onChange={handleChange}
            required
          />
        </p>
      ))}

      <label className={`form__error${isValid ? ' form__error_hidden' : ''}`}>{parseErrors(errors)}</label>
      <button
        className={`form__submit form__submit_${margin}${isValid ? '' : ' form__submit_inactive'}`}
        type="submit"
      >
        {submitText}
      </button>
    </form>
  );
}

export default Form;
