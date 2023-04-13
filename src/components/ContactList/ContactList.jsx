import css from './ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteItem }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteItem={deleteItem}
          ></ContactItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteItem: PropTypes.func.isRequired,
};
