import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import { SearchInputContainer, SearchInputIconButton } from './SearchInput.styled';
import useRequest from '../../clients/useRequest';
import { youtubeApiSearch } from '../../clients/youtube-api';

function SearchInput() {
  const [globalState, dispatch] = useContext(GlobalContext);
  const { searchString } = globalState;
  const history = useHistory();
  const { result, handleFetchPromise } = useRequest();

  const onInputChange = (e) => {
    dispatch({ type: 'setSearchString', payload: e.target.value });
  };

  const getSearchResult = (newSearchString) => {
    handleFetchPromise(youtubeApiSearch(newSearchString));
  };

  useEffect(() => {
    if (result.response != null) {
      const { items } = result.response;
      dispatch({ type: 'setSearchResult', payload: items });
    }
  }, [result.response]);

  const onSearchInputSubmit = (e) => {
    e.preventDefault();
    getSearchResult(searchString);
    history.push('/');
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
