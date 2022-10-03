import { Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  SearchbarSection,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import * as yup from 'yup';

import { MdFindReplace } from 'react-icons/md';

const SearchSchema = yup.object().shape({
  searchbar: yup.string(),
});

export default function Searchbar({ onSubmit }) {
  const handleSabmit = ({ searchbar }, { resetForm }) => {
    onSubmit(searchbar.trim());
    resetForm();
  };

  return (
    <SearchbarSection>
      <Formik
        initialValues={{ searchbar: '' }}
        validationSchema={SearchSchema}
        onSubmit={handleSabmit}
      >
        <SearchForm>
          <SearchFormButton type="submit">
            <MdFindReplace />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="searchbar"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          {/* <ErrorMessage name="searchbar" component={ErrorText} /> */}
        </SearchForm>
      </Formik>
    </SearchbarSection>
  );
}

Searchbar.propTypes = { onSubmit: PropTypes.func };
