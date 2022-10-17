import * as yup from 'yup';
export const schema = yup.object().shape({
  name: yup.string().min(3, 'Too Short!').required('Required'),
  number: yup
    .number()
    .positive()
    .min(4, 'Too Short!')
    .integer()
    .required('Required'),
});
