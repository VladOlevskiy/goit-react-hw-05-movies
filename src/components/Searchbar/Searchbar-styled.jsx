import styled from 'styled-components';
import { Form as FormFormik } from 'formik';

export const Form = styled(FormFormik)`
  display: flex;
  margin-bottom: 20px;
`;

export const Label = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Button = styled.button`
  padding: 3px 3px;
  border-radius: 15px;
  background-color: transparent;
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/512/622/622669.png');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    scale: 1.2;
    color: white;
    background-color: orangered;
  }
`;
