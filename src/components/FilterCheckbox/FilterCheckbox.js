import './FilterCheckbox.css';

import React from 'react';

function FilterCheckbox({ shortsOnly, onChange }) {
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__checkbox"
        type="checkbox"
        checked={shortsOnly}
        onChange={onChange}
      />
      <div className="filter-checkbox__background" />
      <div className="filter-checkbox__circle" />
    </div>
  );
}

export default FilterCheckbox;
