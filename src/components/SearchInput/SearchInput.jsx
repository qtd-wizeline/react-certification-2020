import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';

const SearchInputForm = styled.form`
  position: relative;
  height: 100%;
  input {
    padding-left: 12px;
    padding-right: 32px;
    border: solid 1px #ccc;
    height: 100%;
  }
  input + div {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

function SearchInput(props) {
  const onSearchInputSubmit = (e) => {
    e.preventDefault();
    props.submitCallback();
  };
  return (
    <SearchInputForm onSubmit={onSearchInputSubmit}>
      <input type="text" placeholder="Search..." />
      <div>
        <IconButton
          data-testid="searchinput-submitbutton"
          type="submit"
          svgIcon={faSearch}
          color="#365a71"
          fontSize="0.75rem"
        />
      </div>
    </SearchInputForm>
  );
}

export default SearchInput;
