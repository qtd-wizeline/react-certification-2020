import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SearchInputContainer, SearchInputIconButton } from './SearchInput.styled';

function SearchInput(props) {
  const onSearchInputSubmit = (e) => {
    e.preventDefault();
    props.submitCallback();
  };
  return (
    <SearchInputContainer onSubmit={onSearchInputSubmit}>
      <input type="text" placeholder="Search..." />
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
