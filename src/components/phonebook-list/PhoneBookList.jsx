import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Text, Button } from './PhoneBookList.styled';
const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>{name}</Text>
          <Text>{number}</Text>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </Item>
      ))}
    </List>
  </div>
);
ContactList.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactList;
