import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FavouritePage from '../../pages/Favourite';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDetailsPage from '../../pages/VideoDetails';
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
            <VideoDetailsPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/favourite">
            <FavouritePage />
          </Route>
          <Route exact path="/favourite/:videoId">
            {/* <FavouritePage /> */}
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
