import React, { createContext, useReducer } from 'react';
import YoutubeVideosMock from '../mocks/youtube-videos-mock';
import { GlobalReducer } from '../reducers/GlobalReducer';

const initUser = {
  id: '',
  name: '',
  avatarUrl: '',
};
const initialState = {
  searchString: 'wizeline',
  searchResult: YoutubeVideosMock.items,
  user: initUser,
  isSideMenuOpen: false,
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
