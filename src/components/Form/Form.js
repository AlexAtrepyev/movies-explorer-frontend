import React from 'react';
import './Form.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Form(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const parseErrors = (errors) => {
    return Object.values(errors).find(error => error !== '') ?? 'Все поля должны быть заполнены';
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(values);
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      {props.inputList.map(input => (
        <p className="form__field" key={input.key}>
          <label className="form__label">{input.label}</label>
          <input
            className="form__input"
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
        className={`form__submit form__submit_${props.margin}${isValid ? '' : ' form__submit_inactive'}`}
        type="submit"
      >
        {props.submitText}
      </button>
    </form>
  );
}

export default Form;
