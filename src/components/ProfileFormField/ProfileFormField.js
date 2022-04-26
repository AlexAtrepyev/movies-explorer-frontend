import './ProfileFormField.css';

function ProfileFormField({ field, value, handleChange, error }) {
  const { label, type, name, placeholder, min, max } = field;

  const inputClass = `profile__input${error ? ' profile__input_incorrect' : ''}`;

  return (
    <p className="profile__field">
      <label className="profile__name">{label}</label>
      <input
        className={inputClass}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        minLength={min}
        maxLength={max}
      />
    </p>
  );
}

export default ProfileFormField;
