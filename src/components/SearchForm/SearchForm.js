import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ query, shortsOnly, onChangeQuery, onChangeShortsOnly, onSearch }) {
  function handleChange(e) {
    onChangeQuery(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSearch();
  }
  
  return (
    <section className="search-form">
      <form className="search-form__form search-form__form_width_desktop" onSubmit={handleSubmit}>
        <fieldset className="search-form__fieldset">
          <label className="search-form__label"></label>
          <input
            className="search-form__input"
            type="text"
            name="search"
            placeholder="Фильм"
            value={query}
            onChange={handleChange}
            required
          />
          <button className="search-form__submit" type="submit" />
        </fieldset>

        <div className="search-form__filter">
          <FilterCheckbox shortsOnly={shortsOnly} onChange={onChangeShortsOnly} />
          <span className="search-form__span">Короткометражки</span>
        </div>
      </form>

      <form className="search-form__form search-form__form_width_mobile" onSubmit={handleSubmit}>
        <fieldset className="search-form__fieldset search-form__fieldset_width_mobile">
        <input
            className="search-form__input"
            type="text"
            name="search"
            placeholder="Фильм"
            value={query}
            onChange={handleChange}
            required
          />
          <button className="search-form__submit" type="submit" />
        </fieldset>

        <div className="search-form__filter">
          <FilterCheckbox shortsOnly={shortsOnly} onChange={onChangeShortsOnly} />
          <span className="search-form__span">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
