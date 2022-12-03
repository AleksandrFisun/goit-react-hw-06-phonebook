import shortid from 'shortid';
import { PhoneBook } from './phonebook/PhoneBook';
import ContactSearch from './phonebook-search/PhoneBookSearch';
import ContactList from './phonebook-list/PhoneBookList';
//
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../redux/contactsSlice';
import { filterValue, contactValue } from 'redux/store';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactValue);
  const filter = useSelector(filterValue);

  const onFiltredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = name => {
    contacts.find(
      contact => contact.name.toLowerCase() === name.name.toLowerCase()
    )
      ? alert(`${name.name} is already in contacts`)
      : dispatch(addContacts(name));
  };

  const handleSubmit = (values, { resetForm }) => {
    values.id = shortid();
    addContact(values);
    resetForm();
  };

  return (
    <>
      <PhoneBook handleSubmit={handleSubmit} />
      <ContactSearch />
      <ContactList contacts={onFiltredContacts} />
    </>
  );
};
// App.propTypes = {
//   filter: PropTypes.string,
//   contacts: PropTypes.arrayOf(PropTypes.shape),
// };
