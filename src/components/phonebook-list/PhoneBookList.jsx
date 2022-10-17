import React from 'react';
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

export default ContactList;
