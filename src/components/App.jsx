import { Component } from 'react';
import shortid from 'shortid';
import initialContacts from './contacts.json';
import { PhoneBook } from './phonebook/PhoneBook';
import ContactSearch from './phonebook-search/PhoneBookSearch';
import ContactList from './phonebook-list/PhoneBookList';
export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };
  addContacts = value => {
    const contact = {
      id: shortid.generate(),
      name: value.name,
      number: value.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  handleInputChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();
    return (
      <>
        <PhoneBook onSubmit={this.addContacts} />
        <ContactSearch
          filter={filter}
          onHandleInputChange={this.handleInputChange}
        />
        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
