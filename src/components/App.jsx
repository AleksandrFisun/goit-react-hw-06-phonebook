import { useState, useEffect } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { PhoneBook } from './phonebook/PhoneBook';
import ContactSearch from './phonebook-search/PhoneBookSearch';
import ContactList from './phonebook-list/PhoneBookList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = data => {
    const contact = {
      name: data.name,
      number: data.number,
      id: shortid(),
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [contact, ...prevState]);
  };
  const handleInputChange = e => {
    setFilter(e.currentTarget.value);
  };
  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  const normalizedFilter = filter.toLowerCase();
  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <PhoneBook onSubmit={addContacts} />
      <ContactSearch filter={filter} onHandleInputChange={handleInputChange} />
      <ContactList
        contacts={getVisibleContact()}
        onDeleteContact={deleteContact}
      />
    </>
  );
};
App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.shape),
};
