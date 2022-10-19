import React from 'react';
import PropTypes from 'prop-types';
import { Wraper, FieldSearch } from './PhoneBookSearch.styled';
const ContactSearch = ({ filter, onHandleInputChange }) => (
  <Wraper>
    <h2>Contacts</h2>
    <FieldSearch type="text" value={filter} onChange={onHandleInputChange} />
  </Wraper>
);
ContactSearch.propTypes = {
  filter: PropTypes.string.isRequired,
  onHandleInputChange: PropTypes.func.isRequired,
};
export default ContactSearch;
