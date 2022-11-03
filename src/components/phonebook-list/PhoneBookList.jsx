import React from 'react';
// import PropTypes from 'prop-types';
import { List, Item, Text, Button } from './PhoneBookList.styled';
const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Text>{contact.name}</Text>
          <Text>{contact.number}</Text>
          <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
        </Item>
      ))}
    </List>
  </div>
);

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
export default ContactList;
