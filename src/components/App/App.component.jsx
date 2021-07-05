// import React, { useLayoutEffect } from 'react';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import YoutubeVideosContext from '../state/YoutubeVideosContext';

import HomePage from '../../pages/Home';

function App() {
  const [searchTerm, setSearchTerm] = useState('wizeline');
  const [videoSelected, setVideoSelected] = useState();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <YoutubeVideosContext.Provider
            value={{ searchTerm, setSearchTerm, videoSelected, setVideoSelected }}
          >
            <HomePage />
          </YoutubeVideosContext.Provider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
