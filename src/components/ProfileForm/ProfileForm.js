import './ProfileForm.css';

import { useEffect } from 'react';

import useFormValidation from '../../hooks/useFormValidation';

import ProfileFormField from '../ProfileFormField/ProfileFormField';

function ProfileForm({ currentUser, inputs, apiError, success, setSuccess, submitText, onSubmit, resetApiError }) {
  const { values, handleChange, errors, isValid } = useFormValidation(currentUser, true);

  useEffect(() => setSuccess(false), []);
  
  function handleSubmit(e) {
    e.preventDefault();
    resetApiError();
    onSubmit(values);
  }

  function hasChanged() {
    const flag = values['name'] === currentUser['name'] && values['email'] === currentUser['email'];
    return !flag;
  }

  const errorClass = `profile-form__error${apiError ? ' profile-form__error_visible' : ''}`;
  const successClass = `profile-form__success${success && !apiError ? ' profile-form__success_visible' : ''}`;
  const submitClass = `profile-form__submit${isValid && hasChanged() ? '' : ' profile-form__submit_inactive'}`;
  
  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {inputs.map(input =>
        <ProfileFormField
          key={input.key}
          field={input}
          value={values[input.name]}
          handleChange={handleChange}
          error={errors[input.name]}
        />
      )}
      <label className={errorClass}>{apiError}</label>
      <label className={successClass}>Профиль успешно изменен!</label>
      <button className={submitClass} type="submit">{submitText}</button>
    </form>
  );
}

export default ProfileForm;
