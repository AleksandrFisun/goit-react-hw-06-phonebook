import { Formik } from 'formik';
import { schema } from './Validate';
import {
  Label,
  Input,
  Button,
  FormContact,
  ErrorText,
  Wraper,
} from './PhoneBook.styled';

const initialValues = {
  name: '',
  number: '',
};

export const PhoneBook = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Wraper>
        <FormContact autoComplete="off">
          <Label>
            Name
            <Input type="text" name="name"></Input>
            <ErrorText component="div" name="name" />
          </Label>
          <Label>
            Number
            <Input type="tel" name="number"></Input>
            <ErrorText component="div" name="number" />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormContact>
      </Wraper>
    </Formik>
  );
};
