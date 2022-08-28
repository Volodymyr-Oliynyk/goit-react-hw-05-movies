import SearchButton from 'components/common/SearchButton';
import { Formik } from 'formik';
import { SearchingForm, SearchFormInput } from './SearchForm.styled';

const SearchForm = ({ onSubmit, value }) => {
  return (
    <Formik
      initialValues={{ query: value ?? '' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <SearchingForm>
        <SearchFormInput
          type="text"
          name="query"
          placeholder="Enter a keyword"
        />
        <SearchButton />
      </SearchingForm>
    </Formik>
  );
};

export default SearchForm;
