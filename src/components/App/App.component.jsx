import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import YoutubeVideosContext from '../state/YoutubeVideosContext';
import reducer from '../state/YoutubeVideosReducer';

import HomePage from '../../pages/Home';

const initialState = {
  searchTerm: 'wizeline',
  videoSelected: null,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <YoutubeVideosContext.Provider value={{ state, dispatch }}>
            <HomePage />
          </YoutubeVideosContext.Provider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
