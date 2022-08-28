import { SearchFormBtn } from './SearchButton.styled';
import { BsSearch } from 'react-icons/bs';
const SearchButton = () => {
  return (
    <SearchFormBtn type="submit">
      <BsSearch />
    </SearchFormBtn>
  );
};
export default SearchButton;
