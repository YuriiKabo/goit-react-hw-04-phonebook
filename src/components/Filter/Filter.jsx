import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    this.props.filter(target.value);
  };

  render() {
    const { filter } = this.state.filter;
    return (
      <>
        <label className={css.filterLabel}>
          <p className={css.filterTitle}>Find contacts by name</p>
          <input
            className={css.filterInput}
            onChange={this.handleChange}
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
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};
