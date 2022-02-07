import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__checkbox" type="checkbox" />
      <div className="filter-checkbox__background" />
      <div className="filter-checkbox__circle" />
    </div>
  );
}

export default FilterCheckbox;
