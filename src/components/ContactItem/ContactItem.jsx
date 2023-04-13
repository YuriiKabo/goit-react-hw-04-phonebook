import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(id);
  };
  return (
    <li className={css.item}>
      <p className={css.name}>{name}: </p>
      <p className={css.number}>{number}</p>
      <button className={css.deleteButton} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
