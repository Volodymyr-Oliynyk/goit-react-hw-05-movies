import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchingForm = styled(Form)`
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #dde1e7;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
`;

export const SearchFormInput = styled(Field)`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  color: #000;
  background-color: transparent;
  ::placeholder {
    color: grey;
  }
`;
