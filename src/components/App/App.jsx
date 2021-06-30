import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/video/:videoId">
            <VideoDetails />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
