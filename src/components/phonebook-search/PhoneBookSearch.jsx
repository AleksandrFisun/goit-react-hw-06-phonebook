import React from 'react';
import { Wraper, FieldSearch } from './PhoneBookSearch.styled';
const ContactSearch = ({ filter, onHandleInputChange }) => (
  <Wraper>
    <h2>Contacts</h2>
    <FieldSearch type="text" value={filter} onChange={onHandleInputChange} />
  </Wraper>
);
export default ContactSearch;
