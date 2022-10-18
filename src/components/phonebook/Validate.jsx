import PropTypes from 'prop-types';
function validateName(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
  ) {
    error =
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan';
  }
  return error;
}

function validateNumber(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (
    !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
      value
    )
  ) {
    error =
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
  }
  return error;
}
export { validateName, validateNumber };

validateName.prototype = {
  value: PropTypes.string.isRequired,
};
validateNumber.prototype = {
  value: PropTypes.string.isRequired,
};
