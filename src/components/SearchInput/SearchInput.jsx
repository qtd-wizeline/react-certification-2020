import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import { SearchInputContainer, SearchInputIconButton } from './SearchInput.styled';

function SearchInput() {
  const { searchString, setSearchString, getSearchResult } = useContext(GlobalContext);
  const history = useHistory();

  const onSearchInputSubmit = (e) => {
    e.preventDefault();
    getSearchResult(searchString);
    history.push('/');
  };

  const onInputChange = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <SearchInputContainer onSubmit={onSearchInputSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchString}
        onChange={onInputChange}
      />
      <div>
        <SearchInputIconButton
          data-testid="searchinput-submitbutton"
          type="submit"
          svgIcon={faSearch}
          fontSize="0.75rem"
        />
      </div>
    </SearchInputContainer>
  );
}

export default SearchInput;
