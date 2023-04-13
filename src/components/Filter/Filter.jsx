import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';

export function Filter({ getFilterValue }) {
  const [filter, setFilter] = useState('');

  const handleChange = ({ target }) => {
    setFilter(target.value);
    getFilterValue(target);
  };
  return (
    <>
      <label className={css.filterLabel}>
        <p className={css.filterTitle}>Find contacts by name</p>
        <input
          className={css.filterInput}
          onChange={handleChange}
          type="text"
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  getFilterValue: PropTypes.func.isRequired,
};
