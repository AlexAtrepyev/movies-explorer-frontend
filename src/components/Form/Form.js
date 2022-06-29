import './Form.css';

import React from 'react';

import useFormValidation from '../../hooks/useFormValidation';

import FormField from '../FormField/FormField';

function Form({ fields, apiError, resetApiError, submitText, onSubmit }) {
  const { values, handleChange, errors, isValid } = useFormValidation(fields.reduce((obj, field) => {
    obj[field.name] = '';
    return obj;
  }, {}));
  
  function handleSubmit(e) {
    e.preventDefault();
    resetApiError();
    onSubmit(values);
  }
  
  const errorClass = `form__error${apiError ? ' form__error_visible' : ''}`;
  const submitClass = `form__submit${isValid ? '' : ' form__submit_inactive'}`;

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map(field =>
        <FormField
          key={field.key}
          field={field}
          value={values[field.name]}
          handleChange={handleChange}
          error={errors[field.name]}
        />
      )}
      <label className={errorClass}>{apiError}</label>
      <button className={submitClass} type="submit">{submitText}</button>
    </form>
  );
}

export default Form;
