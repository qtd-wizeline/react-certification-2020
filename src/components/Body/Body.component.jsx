import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { useFortune } from '../../utils/hooks/useFortune';
import Layout from '../Layout';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';

function Body() {
  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <HomePage />
        </Layout>
      </Route>
      <Route exact path="*">
        <Layout>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  );
}

export default Body;
