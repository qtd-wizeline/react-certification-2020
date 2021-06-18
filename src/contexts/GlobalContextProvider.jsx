import React, { createContext, useState } from 'react';
import { youtubeApiSearch } from '../clients/youtube-api';
import YoutubeVideosMock from '../mocks/youtube-videos-mock';

const initialState = {
  searchString: '',
  setSearchString: () => {},
  searchResult: [],
  setSearchResult: () => {},
};
const GlobalContext = createContext(initialState);

function GlobalContextProvider(props) {
  const [searchString, setSearchString] = useState('wizeline');
  const [searchResult, setSearchResult] = useState(YoutubeVideosMock.items);

  const getSearchResult = (newSearchString) => {
    youtubeApiSearch(newSearchString)
      .then((res) => {
        if (res.status === 403) {
          throw new Error('Youtube API limit has exceeded');
        } else {
          return res.json();
        }
      })
      .then((json) => {
        setSearchResult(json.items);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const contextValue = {
    searchString,
    setSearchString,
    searchResult,
    getSearchResult,
  };

  return (
    <GlobalContext.Provider value={contextValue}>{props.children}</GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalContextProvider };
