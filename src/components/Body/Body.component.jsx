import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// import { useFortune } from '../../utils/hooks/useFortune';
import './CardItem.styles.css';
import HomePage from '../../pages/Home';

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
