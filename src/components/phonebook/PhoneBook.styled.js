import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Wraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  margin: 5px;
  padding: 5px;
  max-width: 400px;
  border: 1px solid red;
  margin-top: 40px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.15;
`;

export const Input = styled(Field)`
  width: 300px;
  height: 30px;
  margin:5px;
  border-radius: 4px;
  border: none;
  font-size:20px;
  }

  &:focus {
  outline: none;
  border-radius: 5px;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 220px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 20px 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #2ee59d;
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
//
//
