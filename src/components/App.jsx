import { useState, useEffect } from 'react';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts ? contacts : [];
  });

  const [filter, setFilter] = useState('');
  useEffect(() => {
    const raw = localStorage.getItem('contacts');
    setContacts(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = data => {
    setContacts([data, ...contacts]);
  };

  const handleFilter = ({ value }) => {
    setFilter(value);
  };

  const getVisibleFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const DeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const getVisFilter = getVisibleFilter();
  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm contacts={contacts} createContact={createContact} />
      <h2 className={css.secondTitle}>Contacts</h2>
      <Filter getFilterValue={handleFilter} />
      <ContactList deleteItem={DeleteContact} contacts={getVisFilter} />
    </div>
  );
};

// const contactsArr = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]
