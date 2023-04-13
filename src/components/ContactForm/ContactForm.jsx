import css from './ContactForm.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  addContact = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (this.props.contacts.find(contact => contact.name === name)) {
      form.elements.name.value = '';
      form.elements.number.value = '';
      return alert(`${name} is already in contacts`);
    }
    this.props.createContact({
      id: nanoid(),
      name: name,
      number: number,
    });
    form.reset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.addContact}>
        <label className={css.inputLable}>
          <p className={css.inputTitle}>Name</p>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.inputLable}>
          <p className={css.inputTitle}>Number</p>
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.submitBtn} type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}
ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};
