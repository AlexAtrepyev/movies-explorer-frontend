import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form search-form__form_width_desktop">
        <fieldset className="search-form__fieldset">
          <label className="search-form__label"></label>
          <input className="search-form__input" type="text" name="search" placeholder="Фильм" required />
          <button className="search-form__submit" type="submit" />
        </fieldset>

        <div className="search-form__filter">
          <FilterCheckbox />
          <span className="search-form__span">Короткометражки</span>
        </div>
      </form>

      <form className="search-form__form search-form__form_width_mobile">
        <fieldset className="search-form__fieldset search-form__fieldset_width_mobile">
          <input className="search-form__input" type="text" name="search" placeholder="Фильм" required />
          <button className="search-form__submit" type="submit" />
        </fieldset>

        <div className="search-form__filter">
          <FilterCheckbox />
          <span className="search-form__span">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
