import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  font-size: 30px;
`;

export const StyledField = styled(Field)`
  margin-left: 10px;
  height: 30px;
  font-size: 20px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 15px;
  margin-top: 5px;
  color: #f71d05;
`;

export const Button = styled.button`
  margin: 0 auto;
  font-size: 20px;
  margin-top: 5px;
  cursor: pointer;
  width: 250px;
`;
