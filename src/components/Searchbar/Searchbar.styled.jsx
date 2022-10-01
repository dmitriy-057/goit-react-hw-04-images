import styled from 'styled-components';
import { Form, Field } from 'formik';
export const SearchbarSection = styled.section`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  padding-top: 7px;
  padding-bottom: 7px;
`;

export const SearchFormButton = styled.button`
  display: flex;
  /* width: 48px;
  height: 48px; */
  border: none;
  background-color: white;
  cursor: pointer;
  outline: none;
`;
export const SearchFormInput = styled(Field)`
  display: block;
  width: 70%;
  height: 39px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 8px;
  padding-right: 8px;
  :placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
// export const ErrorText = styled.p`

//   display: inline-block;
//   margin-left: auto;
//   margin-right: 5px;
//   color: red;
//   font-size: 12px;
// `;
