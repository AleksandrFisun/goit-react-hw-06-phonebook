import React from 'react';
import PropTypes from 'prop-types';
import { Wraper, FieldSearch } from './PhoneBookSearch.styled';
import { useDispatch } from 'react-redux';
import { filterChange } from '../../redux/filterSlice';

const ContactSearch = () => {
  const dispatch = useDispatch();
  const onWrite = e => {
    dispatch(filterChange(e.currentTarget.value));
  };
  return (
    <Wraper>
      <h2>Contacts</h2>
      <FieldSearch type="text" name="filter" onChange={onWrite} />
    </Wraper>
  );
};
ContactSearch.propTypes = {
  filter: PropTypes.string,
};
export default ContactSearch;
