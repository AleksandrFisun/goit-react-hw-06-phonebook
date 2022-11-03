import { useState } from 'react';
// import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Wraper, ErrorText, ButtonAdd, Block } from './PhoneBook.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
export function PhoneBook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeInputName = e => {
    setName(e.currentTarget.value);
  };

  const changeInputNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { name, number };
    onSubmit(data);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  // -------------------------
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  return (
    <Formik initialValues={(name, number)}>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Wraper>
          <h1>Phonebook</h1>
          <Block>
            <h3>Name</h3>
            <label htmlFor={nameInputId}>
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={nameInputId}
                value={name}
                onChange={changeInputName}
              />
            </label>
          </Block>
          <FormError name="name" />
          <Block>
            <h3> Number</h3>
            <label htmlFor={numberInputId}>
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id={numberInputId}
                value={number}
                onChange={changeInputNumber}
              />
            </label>
          </Block>
          <FormError name="number" />
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </Wraper>
      </Form>
    </Formik>
  );
}
