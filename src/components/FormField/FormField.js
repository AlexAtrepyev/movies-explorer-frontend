import './FormField.css';

function FormField({ field, value, handleChange, error }) {
  const { label, type, name, placeholder, min, max } = field;

  const inputClass = `field__input${error ? ' field__input_incorrect' : ''}`;
  const errorClass = `field__error${error ? ' field__error_visible' : ''}`;

  return (
    <p className="field">
      <label className="field__name">{label}</label>
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
      <label className={errorClass}>{error}</label>
    </p>
  );
}

export default FormField;
