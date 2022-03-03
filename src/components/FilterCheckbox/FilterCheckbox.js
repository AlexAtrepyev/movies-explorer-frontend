import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__checkbox"
        type="checkbox"
        checked={props.isFilterChecked}
        onChange={props.onFilterChange}
      />
      <div className="filter-checkbox__background" />
      <div className="filter-checkbox__circle" />
    </div>
  );
}

export default FilterCheckbox;
