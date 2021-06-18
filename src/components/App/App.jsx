import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
