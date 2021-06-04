import React from 'react';
import { Switch, Route } from 'react-router-dom';


// import { useFortune } from '../../utils/hooks/useFortune';
import './Body.styles.css';
import Layout from '../Layout';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';


function Body(item) {
  const text = 'Demo App! Welcome!';

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route exact path="/login">
          <LoginPage />
        </Route>
        <Private exact path="/secret">
          <SecretPage />
        </Private> */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Fortune />
    </Layout>
  );
}

export default Body;
