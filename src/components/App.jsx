import { Component } from 'react';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  createContact = data => {
    this.setState(prevState => {
      return { contacts: [data, ...prevState.contacts] };
    });
  };

  filter = value => {
    this.setState({
      filter: value,
    });
  };

  getVisibleFilter = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;
    const getVisibleFilter = this.getVisibleFilter();
    return (
      <div className={css.container}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <ContactForm contacts={contacts} createContact={this.createContact} />
        <h2 className={css.secondTitle}>Contacts</h2>
        <Filter filter={this.filter} />
        <ContactList
          deleteItem={this.deleteContact}
          contacts={getVisibleFilter}
        />
      </div>
    );
  }
}
