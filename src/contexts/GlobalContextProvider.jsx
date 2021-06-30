import React, { createContext, useReducer } from 'react';
import YoutubeVideosMock from '../mocks/youtube-videos-mock';
import { GlobalReducer } from '../reducers/GlobalReducer';

const initialState = {
  searchString: 'wizeline',
  searchResult: YoutubeVideosMock.items,
};
const GlobalContext = createContext(initialState);

function GlobalContextProvider(props) {
  const [globalState, dispatch] = useReducer(GlobalReducer, initialState);

  return (
    <GlobalContext.Provider value={[globalState, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalContextProvider };
